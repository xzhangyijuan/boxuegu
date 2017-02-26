define(['jquery','jqueryCookie'], function($,undefined) {
    /*1.先监听form表单的提交事件
    * 2.事件回调中通过return false阻止默认的提交
    * 3.事件回调中通过ajax的方式请求发送表单数据
    * 4.如果返回结果中的code为200，证明登录成功，跳转的首页
    * */
    $('#form-login').on('submit', function () {
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function (data){
                if(data.code===200){
                    $.cookie('userInfo',JSON.stringify(data.result), {path: '/'});
                    location.href = '/';
                }
            }
        });
        return false;
    })
});
