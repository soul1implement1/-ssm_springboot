layui.use(['layer', 'table', 'jquery'], function() {
    let $ = layui.jquery,
        layer = layui.layer,
        table = layui.table;
    table.render({
        elem: '#articleCmanage',
        url: url_nginx + 'my/articleC/selectAllByPage.action',
        limit: 5,
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
                { field: 'id', title: 'ID', width: 110, fixed: 'left' }, { field: 'content', title: '评论内容', width: 500 }, { field: 'time', title: '评论时间', templet: function(data) { return returnTime(data.time); } }, { field: 'starnum', title: '点赞数', width: 100, sort: true }, { title: '操作', fixed: 'right', align: 'center', toolbar: "#tbar", width: 100 }
            ]
        ]
    });



    table.on('tool(mytbar)', function(obj) {
        var data = obj.data;
        var layEvent = obj.event;
        var tr = obj.tr;

        if (layEvent === 'del') {
            layer.confirm('真的删除本行数据么？', function(index) {
                obj.del();
                layer.close(index);
                $.ajax({
                    type: 'post',
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    url: url_nginx + 'my/articleC/delete.action?id=' + data.id,

                    success: function(result) {
                        deleteFun(result);
                    }
                });
            });
        }
    });
});