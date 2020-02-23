//atob&btoa
var id = atob(window.location.href.split("=")[1]);
var count = 0;
var a;
$.ajax({
    type: "post",
    url: url_nginx + 'open/selectAllById.action?id=' + id,
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
    dataType: 'json',
    async: false,
    success: function(result) {
        $("title").text("阅读--" + result.title);
        $("#mywords").append("简介：" + result.words);
        $("#mytitle").append(result.title);
        $("#AContent").append("<div class=\"content\">" + result.content + "</div>")
        $("#btag").append(result.btag);
        $("#stag").append(result.stag);
        $("#visitN").append(result.visitnum);
        $("#starN").append(result.starnum);
        $("#last").append("该文章最后发表于：" + returnTime(result.time));
        count = result.comment.length;

        $("#index_comment").empty();
        if (count == 0) {
            $("#index_comment").append("本文章暂无评论");
        } else {
            $("#goready").text(count);
            var idx;
            a = result.comment;
            for (var i = 0; i < count; i++) {
                for (var j = i; j < count; j++) {
                    if (a[i].id < a[j].id) {
                        //id大前
                        idx = a[i];
                        a[i] = a[j];
                        a[j] = idx;
                    }
                }
            }


        }

    }
});
/**
 * 提交
 * 
 * @returns
 */
$(".editor_but")
    .click(
        function() {
            let comment = editor.txt.text();
            if (comment == '') {
                layer.msg("评论不为空,或者纯表情包", {
                    time: 1200,
                    icon: 2
                }, function() {});
                return false;
            } else if (comment.length < 10) {
                layer.msg("评论内容长度不能过少，或者纯表情包", {
                    time: 1200,
                    icon: 2
                }, function() {});
                return false;
            } else {
                comment = editor.txt.html();
                $
                    .ajax({
                        type: "post",
                        url: url_nginx + "open/add.action?id=" + id,
                        data: {
                            'content': comment + '<br>',
                        },
                        async: false,
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        success: function(result) {
                            if (result === "SUCCESS") {
                                $("#index_comment").empty();
                                layer
                                    .msg(
                                        "评论文章成功，感谢您的评论", {
                                            time: 1200,
                                            icon: 1
                                        },
                                        function() {
                                            $("#index_comment_now").empty();
                                            $("#goready")
                                                .empty();
                                            count++;
                                            $('#goready')
                                                .append(
                                                    count);
                                            var img = '<img class="com_img\" src="uimg/usr2.jpg" />';
                                            var name = '<div style="margin:5px">' +
                                                '匿名网友(你)</div>';

                                            var content = '<div style="color:black;">你评论了内容：</div><div class="com_content">' +
                                                comment +
                                                '</div>';
                                            $(
                                                    "#index_comment_now")
                                                .append(
                                                    '<div class="commentcontent" >' +
                                                    img +
                                                    name +
                                                    content +

                                                    '</div>');
                                            editor.txt
                                                .clear();
                                        });
                            } else {
                                layer.msg("评论失败，可能含敏感词汇！", {
                                    time: 1200,
                                    icon: 2
                                }, function() {});
                            }
                        },
                        error: function(res) {
                            console.log(res);
                            layer.msg("404-not found", {
                                time: 1200,
                                icon: 2
                            }, function() {});
                        }
                    });
            }
            return false;
        });

function dostar() {
    $.ajax({
        type: "post",
        url: url_nginx + "open/doStar.action?id=" + id,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function(result) {
            if (result === "SUCCESS") {
                layer.msg("点赞文章成功，谢谢参与", {
                    time: 1200,
                    icon: 1
                }, function() {
                    $('#starN').text(parseInt($('#starN').text()) + 1);
                });
                //异步更新

            } else {
                layer.msg("点赞失败，谢谢参与", {
                    time: 1200,
                    icon: 2
                }, function() {

                });
            }

        }

    });
}

function dostarC(value) {
    $.ajax({
        type: "post",
        url: url_nginx + "open/doStarC.action?id=" + value,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function(result) {
            if (result === "SUCCESS") {
                layer.msg("点赞评论成功，谢谢参与", {
                    time: 1200,
                    icon: 1
                }, function() {
                    $('#dostar' + value).text(parseInt($('#dostar' + value).text()) + 1);
                });
            } else {
                layer.msg("点赞失败，谢谢参与", {
                    time: 1200,
                    icon: 2
                }, function() {

                });
            }

        }

    });
}
let limit = 4;
let page = 0;


function getComment() {
    //当前评论位置
    var x = page * limit;
    if (x > count) {
        alert("没有更多评论了");
        return;
    }

    for (var i = x; i < count; i++) {
        var item = a[i];
        var img = '<img class="com_img\" src="uimg/usr' + parseInt(Math.random() * 7) + '.jpg" />';
        var name = '<div style="margin:5px">匿名网友(' + parseInt((Math.random() * 30)) + "-" + item.id + ')</div>';
        var star = '<div ><a class="com_star" onclick="dostarC(' + item.id + ')">点赞<span id="dostar' + item.id + '">' + item.starnum + '</span></a></div>';
        var date = '<span >' + returnTime(item.time) +
            '</span>';
        var content = '<div>评论了内容：</div><div class="com_content">' + item.content + '</div>';

        $("#index_comment").append('<div class="commentcontent"  >' + img + name + content + star + date + '</div>');
    }
    $("#one").html('查看更多');
    page++;
}