//“登录”页面响应事件
$('#login').click(function() {
        var wjmm = document.getElementById('wjmm');
        wjmm.style.display = 'block';
        var yzm = document.getElementById('yzm');
        yzm.style.display = 'block';
        var hqyzm = document.getElementById('hqyzm');
        hqyzm.style.display = 'none';
        var tpyz = document.getElementById('tpyz');
        tpyz.style.display = 'block';
        var yxyz = document.getElementById('yxyz');
        yxyz.style.display = 'none';
        var LOGIN = document.getElementById('LOGIN');
        LOGIN.style.display = 'block';
        var SIGNUP = document.getElementById('SIGNUP');
        SIGNUP.style.display = 'none';
        var yx = document.getElementById('yx');
        yx.style.display = 'none';
        var zy = document.getElementById('zy');
        zy.style.display = 'none';
        var email1 = document.getElementById('email1');
        email1.style.display = 'none';

        $('.switch span').removeClass('active')
        $(this).addClass('active');

        $(this).parents('.content').removeClass('signup');
        $(this).parents('.content').addClass('login');

    })
    //点击“注册”响应事件
$('#signup').click(function() {

    $("#prof").empty();
    //	$("#college").append("<option value=\"\">请选择</option>")
    //	$("#prof").append("<option value=\"\">请选择</option>");
    $.each(jsonc, function(i, item) {
        $("#college").append('<option value=\"' + i + '\">' + item.college + '</option>');
        stagresult[i] = item.prof;
    });

    $('.switch span').removeClass('active')
    $(this).addClass('active');

    $(this).parents('.content').removeClass('login');
    $(this).parents('.content').addClass('signup');
    var wjmm = document.getElementById('wjmm');
    wjmm.style.display = 'none';
    var yzm = document.getElementById('yzm');
    yzm.style.display = 'none';
    var hqyzm = document.getElementById('hqyzm');
    hqyzm.style.display = 'block';
    var tpyz = document.getElementById('tpyz');
    tpyz.style.display = 'none';
    var yxyz = document.getElementById('yxyz');
    yxyz.style.display = 'block';
    var LOGIN = document.getElementById('LOGIN');
    LOGIN.style.display = 'none';
    var SIGNUP = document.getElementById('SIGNUP');
    SIGNUP.style.display = 'block';
    var yx = document.getElementById('yx');
    yx.style.display = 'block';
    var zy = document.getElementById('zy');
    zy.style.display = 'block';
    var email1 = document.getElementById('email1');
    email1.style.display = 'block';

    $('.input input').on('focus', function() {
        $(this).parent().addClass('focus');
    })
    $('.input input').on('blur', function() {
        if ($(this).val() === '')
            $(this).parent().removeClass('focus');
    })
})
var stagresult = new Array();
var ceshi = "[{\"college\":\"数学与信息学院\",\"id\":1,\"prof\":\"数学与应用数学（师范）,数学与应用数学（师范.园丁班）,统计学,信息管理与信息系统,信息与计算科学\"},{\"college\":\"环境科学与工程学院\",\"id\":2,\"prof\":\"环境工程,环境科学\"},{\"college\":\"体育学院\",\"id\":3,\"prof\":\"社会体育指导与管理,体育教育（师范）,运动训练\"},{\"college\":\"外国语学院\",\"id\":4,\"prof\":\"翻译,日语,商务英语,英语（师范）,英语（师范.园丁班）\"},{\"college\":\"商学院\",\"id\":5,\"prof\":\"工商管理,国际经济与贸易,会计学,经济学,市场营销\"},{\"college\":\"文学院\",\"id\":6,\"prof\":\"汉语国际教育（师范）,汉语言文学（师范）,汉语言文学（师范.园丁班）,秘书学\"},{\"college\":\"生命科学学院\",\"id\":7,\"prof\":\"生态学,生物技术,生物科学（师范）,野生动物与自然保护区管理,园林\"},{\"college\":\"政治与行政学院\",\"id\":8,\"prof\":\"行政管理,思想政治教育（师范）,政治学与行政学\"},{\"college\":\"管理学院\",\"id\":9,\"prof\":\"公共事业管理,旅游管理,人力资源管理,社会工作\"},{\"college\":\"电子信息工程学院\",\"id\":10,\"prof\":\"电子信息工程,电子信息科学与技术,应用电子技术教育（师范）\"},{\"college\":\"化学化工学院\",\"id\":11,\"prof\":\"化学（师范）,科学教育（师范）,应用化学\"},{\"college\":\"物空学院\",\"id\":12,\"prof\":\"天文学,物理学（师范）\"},{\"college\":\"法学院\",\"id\":13,\"prof\":\"法学\"},{\"college\":\"教育学院\",\"id\":14,\"prof\":\"教育技术学（师范）,教育学（师范）,心理学（师范）\"},{\"college\":\"历史文化学院\",\"id\":15,\"prof\":\"历史学（师范）\"},{\"college\":\"美术学院\",\"id\":16,\"prof\":\"服装与服饰设计,环境设计,绘画,美术学（师范）,视觉传达设计\"},{\"college\":\"国土资源学院\",\"id\":17,\"prof\":\"地理科学（师范）,地理信息科学,人文地理与城乡规划,自然地理与资源环境\"},{\"college\":\"新闻传播学院\",\"id\":18,\"prof\":\"播音与主持艺术,网络与新媒体,新闻学\"},{\"college\":\"计算机学院\",\"id\":19,\"prof\":\"计算机科学与技术（师范）,软件工程,通信工程,网络工程,物联网工程\"},{\"college\":\"音乐学院\",\"id\":20,\"prof\":\"舞蹈表演,舞蹈学,音乐表演,音乐学（师范）\"},{\"college\":\"学前与初等教育学院\",\"id\":21,\"prof\":\"小学教育（师范）,小学教育（师范.卓培班）,学前教育（师范）\"}]"
var jsonc = JSON.parse(ceshi)
var collegethis = ""
$("#college").click(function() {
    var id = $("#college").val()
    $.each(jsonc, function(i, item) {
        if (id == i)
            collegethis = item.college
    });
    var s = stagresult[$("#college").val()].split(",");
    $("#prof").empty();
    $("#prof").append("<option value=\"\">请选择</option>");
    $.each(s, function(i, item) {
        $("#prof").append('<option value=\"' + item + '\">' + item + '</option>');
    });
});

// var url = "http://172.16.1.38:4800/";

var url = "http://localhost:4800/";
var idkey = 0;

function renew() {
    $.ajax({
        type: "get",
        url: url + "loginCode",

        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function(result) {
            //              console.log(result)
            idkey = result.idkey;
            $("#img").attr("src", result.src)
        },
        error: function() {
            console.log("error")
        }
    })
}
//登录提交事件
function login() {
    $.ajax({
        type: "post",
        url: url + "login",
        data: {

            "user": $('#name').val(),
            "password": $('#password').val(),
            "verifycode": $('#tpyzm').val(),
            "idkey": idkey

        },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function(result) {

            if (result === "SUCCESS") {
                alert("登录成功");
                // window.location.href = "../my-page/change.html";
            } else {
                alert(result);
            }

        },

    })

}

//判断邮箱输入的正确与否	 
//	 function isEmail(){
//		alert()
//		strEmail = $("#username").val()
//		//定义正则表达式的变量:邮箱正则
//		var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
//		var flag = reg.test(strEmail)
//		console.log(strEmail);
//		//文本框不为空，并且验证邮箱正则成功，给出正确提示
//		if(flag)
//		{
//			document.getElementById("span").innerHTML = "正确";
//		}else{
//			document.getElementById("span").innerHTML = "邮箱格式错误";
//		}
//		return flag;
//	}
//	window.onload{
//		
//	}

//！！！！！！！！！！！！缺少点击获取邮箱验证码

function registercode() {
    //验证码
    $.ajax({
        type: "get",
        url: url + "registerCode",
        data: {
            "email": $('#email').val(),
        },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "text",
        success: function(result) {
            console.log(result)
        },

    })
}

//注册提交事件
function signup() {

    $.ajax({
        type: "post",
        url: url + "register",
        data: {
            'vcode': $('#yxyzm').val(), //邮箱验证码
            "college": collegethis,
            "prof": $('#prof').val(),
            "name": $('#name').val(),
            "password": $('#password').val(),
            "email": $('#email').val()
        },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "text",
        success: function(result) {
            if (result.status === "SUCCESS") {
                alert("注册成功");
                window.location.href = "#login"
            } else {
                alert(result);
            }

        }

    })
}

//...................................................................................................................