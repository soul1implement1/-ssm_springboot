$("#editor_but_add").click(function() {
    if ($("#btag").val() != '' && $("#stag").val() != '') {
        $.ajax({
            type: 'post',
            async: false,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {
                "btag": $("#btag").val(),
                "stag": $("#stag").val()
            },
            url: url_nginx + 'my/allTag/add.action',
            success: function(result) {
                console.log(result);
                updateFun(result);
                $("#stag").val('');
                $("#btag").val('');
            }
        });
    }
});