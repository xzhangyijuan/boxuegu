define(['jquery','jqueryCookie','nprogress'], function($,undefined,nprogress) {



    /**
     * 展示用户的历史登陆头像：
     * 1、获取userInfo这个cookie值
     * 2、把cookie字符串转化为对象
     * 3、设置登陆页的img-src为对象中的tc_avatar属性值，如果没有给一个默认头像的地址
     */
    var userInfo = null
    try{
        userInfo = JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo = {};
    }
    $('.login .avatar img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/img/monkey.png');

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
    });
    nprogress.done();
});
