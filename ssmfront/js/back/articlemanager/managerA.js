layui.use(['layer', 'table', 'jquery'], function() {
    let $ = layui.jquery,
        layer = layui.layer,
        table = layui.table;
    table.render({
        elem: '#articlemanage',
        url: url_nginx + 'my/article/selectByPage.action',
        limit: 5,
        skin: 'nob',
        limits: [5, 10, 20],
        request: {
            pageName: 'page',
            limitName: 'limit'
        },
        response: {
            statusName: 'code',
            statusCode: 200,
            msgName: 'msg',
            countName: 'count',
            dataName: 'data'
        },
        page: true,
        cols: [
            [
                { field: 'id', title: 'ID', width: 80, fixed: 'left', align: 'center' }, { field: 'title', title: '标题', width: 210, align: 'center' }, {
                    field: 'time',
                    title: '发表时间',
                    width: 180,
                    align: 'center',
                    templet: function(data) { return returnTime(data.time); }
                },
                { field: 'starnum', title: '点赞数', width: 80, sort: true, align: 'center' },
                { field: 'visitnum', title: '浏览量', width: 80, sort: true, align: 'center' },
                { field: 'words', title: '大概描述', width: 100, align: 'center' },
                { field: 'tag', title: '分区', width: 80, align: 'center', templet: function(data) { return data.btag; } },
                { field: 'tag', title: '小分区', align: 'center', templet: function(data) { return data.stag; } },
                { title: '操作', fixed: 'right', align: 'center', toolbar: "#tbar", width: 200 }
            ]
        ]
    });

    table.on('tool(mytbar)', function(obj) {
        var data = obj.data;
        var layEvent = obj.event;
        var tr = obj.tr;
        if (layEvent === "detail") {
            window.open("../readArticle.html?aWhgSA=" + btoa(data.id));
        } else if (layEvent === 'del') {
            layer.confirm('真的删除本行数据么？', function(index) {
                obj.del();
                layer.close(index);
                $.ajax({
                    type: 'post',
                    async: false,
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    url: url_nginx + 'my/article/delete.action?id=' + data.id,
                    success: function(result) {
                        deleteFun(result);
                    }
                });
            });
        } else if (layEvent === 'edit') {
            layer.open({
                type: 2,
                title: '更新发布文章[==' + data.id + '==]详细信息 ',
                content: ['../updateArticle.html?aWhgSA=' + data.id, 'yes'],
                area: ['85%', '85%'],
                shadeClose: true,
                move: false

            });
        }
    });
});