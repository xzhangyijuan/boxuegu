define(['jquery','nprogress','template', 'util','datepicker','datepickerLanguage'],
    function($,nprogress,template,util,datepicker,datepickerLanguage) {

    nprogress.done();


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