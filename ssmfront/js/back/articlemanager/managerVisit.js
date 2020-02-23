layui.use(['layer', 'table', 'jquery'], function() {
    let $ = layui.jquery,
        layer = layui.layer,
        table = layui.table;
    table.render({
        elem: '#visitmanage',
        url: url_nginx + 'my/visitor/selectAllByPage.action',
        limit: 7,
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
                { field: 'id', title: 'ID', width: 120, fixed: 'left' }, { field: 'ip', title: 'IP', width: 260 }, { field: 'time', title: '访问时间', width: 290, templet: function(data) { return returnTime(data.time); } }, { field: 'host', title: 'host', width: 260 }, { title: '操作', fixed: 'right', align: 'center', toolbar: "#tbar" }
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
                    url: url_nginx + 'my/visitor/delete.action?id=' + data.id,
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
            var s = prompt("请输入起始ID：", data.id);
            if (s) {
                var e = prompt("请输入结束ID：", "***");
                if (e) {
                    s = parseInt(s);
                    e = parseInt(e);

                    if ((s - e) > 10) {
                        layer.msg("输入错误！(ID相差不能超过10)", { time: 1200, icon: 2 }, function() {});
                        return false;
                    }
                    if (confirm("确认更新标签吗(ID相差不能超过10)")) {
                        for (var i = s; i <= e; i++) {
                            $.ajax({
                                type: 'post',
                                url: url_nginx + 'my/visitor/delete.action?id=' + i,
                                xhrFields: {
                                    withCredentials: true
                                },
                                success: function(result) {

                                }
                            });
                        }
                        deleteFun("SUCCESS");
                    }
                }
            }
        }
    });
});