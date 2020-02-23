layui.use(['layer', 'table', 'jquery'], function() {
    let $ = layui.jquery,
        layer = layui.layer,
        table = layui.table;
    table.render({
        elem: '#tagmanage',
        url: url_nginx + 'my/allTag/selectAllByPage.action',
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
                { field: 'id', title: 'ID', width: 80, fixed: 'left' }, { field: 'btag', title: '大标题', width: 150 }, {
                    field: 'stag',
                    title: '小标题集合'

                },
                { title: '操作', fixed: 'right', align: 'center', toolbar: "#tbar", width: 200 }
            ]
        ]
    });

    table.on('tool(mytbar)', function(obj) {
        var data = obj.data;
        var layEvent = obj.event;
        var tr = obj.tr;
        if (layEvent === 'detail') {
            layer.open({
                type: 2,
                title: '添加标签信息 ',
                content: ['update/Tag.html', 'yes'],
                area: ['85%', '85%'],
                shadeClose: true,
                move: false,
                end: function() {
                    table.reload('mytbar', {
                        url: url_nginx + 'my/allTag/selectAllByPage.action'
                    })
                }
            });
        } else
        if (layEvent === 'del') {
            layer.confirm('真的删除本行数据么？', function(index) {
                obj.del();
                layer.close(index);
                $.ajax({
                    type: 'post',
                    url: url_nginx + 'my/allTag/delete.action?id=' + data.id,
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    success: function(result) {
                        deleteFun(result);
                    }
                });
            });
        } else if (layEvent === 'edit') {
            var b = prompt("请更改大标签：", data.btag);
            if (b) {
                var s = prompt("请更改小标签：", data.stag);
                if (s) {
                    if (confirm("确认更新标签吗")) {
                        $.ajax({
                            type: 'post',
                            url: url_nginx + 'my/allTag/update.action?id=' + data.id,
                            data: {
                                "btag": b,
                                "stag": s
                            },
                            xhrFields: {
                                withCredentials: true
                            },
                            success: function(result) {
                                updateFun(result);
                            }
                        });

                    }
                }
            }
        }
    });
});