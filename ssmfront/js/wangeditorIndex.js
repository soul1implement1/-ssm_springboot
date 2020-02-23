/**
 * 提交文本
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
            } else if (comment.length < 5) {
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
                        url: url_nginx + "index/addComment.action",
                        data: {
                            'content': comment + '<br>',
                        },
                        async: false,
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        success: function(result) {
                            // console.log(result);
                            if (result === "SUCCESS") {
                                layer
                                    .msg(
                                        "评论成功，感谢您的评论", {
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
                                                count +
                                                '楼de匿名网友</div>';
                                            var star = '<div class="com_star" ><a onclick="dostar(' +
                                                count +
                                                ')">点赞<span id="dostar' +
                                                count +
                                                '">0</span></a></div>';

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
                                                    star +
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

function dostar(value) {
    $.ajax({
        type: "post",
        url: url_nginx + "index/doStar.action?id=" + value,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function(result) {
            //console.log(result)
            if (result === "SUCCESS") {
                layer.msg("点赞评论成功，谢谢参与", {
                    time: 1200,
                    icon: 1
                }, function() {

                });
                //异步更新
                $('#dostar' + value).text(parseInt($('#dostar' + value).text()) + 1);
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