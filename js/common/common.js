define(['jquery'], function ($) {

    //设置cookie的存储有效期
    $.cookie( {
        path: '/',
        expires: new Date('2027-02-26')
    });

    //左侧课程管理下拉事件
    $('.navs a').on('click', function () {
        $(this).next().slideToggle();
    });


    //退出功能事件
    $('#logout').on('click', function () {
        $.post('/v6/logout', function (data) {
            if (data.code ==200) {
                location.href = '/html/home/login.html';
            }
        });
    });

    //获取本地cookie 信息，然后展示在左侧导航

    var userInfo = null ;

    try{
        userInfo =  JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo ={};
    }

    $('.aside .profile img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/img/default.jpg');
    $('.aside .profile h4').html(userInfo.tc_name?userInfo.tc_name:'abc');

    // 然后展示到左侧导航
/*
    $('.aside .profile h4').html(userInfo.tc_name? userInfo.tc_name:'dagenimeiminga');
    $('.aside .profile img').attr('src', userInfo.tc_avatar? userInfo.tc_avatar: '/img/default.png');
*/
    /*$.ajax({
        url: '/v6/login',
        type: 'post',
        data: {
            tc_name: 123456,
            tc_pass: 123456
        },
        success: function () {
            console.log('成了')
        },
        error: function () {
            console.log('败了')
        }
    });*/
});