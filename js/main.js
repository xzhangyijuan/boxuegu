requirejs.config({
    baseUrl: '/',
    paths: {

        // 第三方库的路径配置
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        echarts:'lib/echarts/echarts.min',
        nprogress:'/lib/nprogress/nprogress',

        // 自己写的路径配置
        common: 'js/common',

        index: 'js/index',

        userList: 'js/user/user_list',
        userProfile: 'js/user/user_profile',

        courseAdd:'js/course/course_add',
        courseAddStep1:'js/course/course_add_step1',
        courseAddStep2:'js/course/course_add_step2',
        courseAddStep3:'js/course/course_add_step3',
        courseCategory:'js/course/course_category',
        courseCategoryAdd:'js/course/course_category_add',
        courseList:'js/course/course_list',
        courseTopic:'js/course/course_topic',
        advertList :'js/course/advert_list',
        advertAdd:'js/course/advert_add',

        login:'js/home/login',
        repass:'js/home/repass',
        settings:'js/home/settings',


        teacherAdd:"js/teacher/teacher_add",
        teacherList:"js/teacher/teacher_list",



    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

// 所有的页面都需要这两个js，先加载他们。
require(['jquery', 'bootstrap','echarts','common']);


/*
 *这里获取页面的pathname，然后对应的加载js。
 * */
(function(window) {

    var pathname = window.location.pathname;
    switch(pathname) {
        //用户管理
        case '/html/user/user_list.html':
            require(['userList']);
            break;
        case '/html/user/user_profile.html':
            require(['userProfile']);
            break;

        //主页
        case '/':
            require(['index']);
            break;

        //课程
        case '/html/course/course/course_add.html':
            require(['courseAdd']);
            break;
        case '/html/course/course_add_step1.html':
            require(['courseAddStep1']);
            break;
        case '/html/course/course_add_step2.html':
            require(['courseAddStep2']);
            break;
        case '/html/course/course_add_step3.html':
            require(['courseAddStep3']);
            break;
        case '/html/course/course_category.html':
            require(['courseCategory']);
            break;
        case '/html/course/course_category_add.html':
            require(['courseCategoryAdd']);
            break;
        case '/html/course/course_list.html':
            require(['courseList']);
            break;
        case '/html/course/course_topic.html':
            require(['courseTopic']);
            break;
        case '/html/course/advert_add.html':
            require(['advertAdd']);
            break;
        case '/html/course/advert_list.html':
            require(['advertList']);
            break;



        //讲师管理
        case '/html/teacher/teacher_add.html':
            require(['teacherAdd']);
            break;
        case '/html/teacher/teacher_list.html':
            require(['teacherList']);
            break;

        //登录注册和设置
        case '/html/home/login.html':
            require(['login']);
            break;
        case '/html/home/repass.html':
            require(['repass']);
            break;
        case '/html/home/settings.html':
            require(['settings']);
            break;

    }
})(window);
