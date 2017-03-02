define(['jquery', 'common', 'nprogress', 'util', 'template','datepicker','datepickerLanguage'], function ($, undefined, nprogress, util, template,datepicker,datepickerLanguage) {
    nprogress.done();


    /**
     * 获取tc_id查询字符串，如果有则认为当前是讲师编辑页面，没有则认为是新讲师添加页面。
     *
     * 编辑讲师：
     * 1、先获取讲师信息，展示到表单中
     * 2、监听提交表单事件，转为ajax方式提交到讲师修改接口。
     *
     * 添加讲师：
     * 1、监听提交表单事件，转为ajax方式提交到讲师添加接口。
     * */
    var tcId = util.getQueryString('tc_id');
    var getDay = function(){
        $('#datepicter').datepicker({
            language: 'zh-CN',
            starDate: '2015-01-01',
            endDate: new Date(),
            format: 'yyyy-mm-dd'
        });

        $('#joinDate').datepicker({
            language: 'zh-CN',
            starDate: '2011-01-01',
            endDate: new Date(),
            format: 'yyyy-mm-dd'
        });
    }

    if (tcId) {
        // 获取该讲师之前的信息，填充到表单中
        $.get('/v6/teacher/edit', {tc_id: tcId}, function (data) {
            if (data.code == 200) {
                var html = template('teacher-form-tpl', data.result);
                $('.teacher-add').html(html);
                getDay();
            }
        });
    } else {
        var html = template('teacher-form-tpl', {});
        $('.teacher-add').html(html);
        getDay();
        /*$('#datepicter').datepicker({
            language: 'zh-CN',
            starDate: '2015-01-01',
            endDate: new Date(),
            format: 'yyyy-mm-dd'
        });

        $('#joinDate').datepicker({
            language: 'zh-CN',
            starDate: '2011-01-01',
            endDate: new Date(),
            format: 'yyyy-mm-dd'
        });*/
    };

    // 添加讲师
    $('.teacher-add').on('submit', '#teacher-add-form', function () {
        $.ajax({
            url: '/v6/teacher/' + ( tcId ? 'update' : 'add' ),
            type: 'post',
            data: $(this).serialize() + ( tcId? '&tc_id=' + tcId : '' ),
            success: function (data) {
                // 添加成功，跳转到讲师列表页
                if (data.code == 200) {
                    location.href = '/html/teacher/teacher_list.html';
                }
            }
        });
        return false;
    });
});
