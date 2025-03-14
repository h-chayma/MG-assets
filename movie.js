$(document).ready(function () {
    $('.server-tab').click(function () {
        $('.server-tab').removeClass('active');
        $(this).addClass('active');

        var server = $(this).data('server');
        if (server === 'server1') {
            $('#video-frame').attr('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ');
        } else if (server === 'server2') {
            $('#video-frame').attr('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ');
        } else if (server === 'server3') {
            $('#video-frame').attr('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ');
        }
    });

    $('.report-btn').click(function () {
        $('#report-modal').css('display', 'flex');
    });

    $('.close-modal').click(function () {
        $('.modal').hide();
    });

    $(window).click(function (event) {
        if ($(event.target).hasClass('modal')) {
            $('.modal').hide();
        }
    });

    $('#report-form').submit(function (e) {
        e.preventDefault();

        const formData = {
            type: $('#report-type').val(),
            details: $('#report-details').val(),
        };

        $.ajax({
            url: 'https://your-backend-endpoint.com/report',
            method: 'POST',
            data: formData,
            success: function (response) {
                alert('تم إرسال البلاغ بنجاح!');
                $('#report-modal').hide();
            },
            error: function (error) {
                alert('حدث خطأ أثناء إرسال البلاغ. يرجى المحاولة مرة أخرى.');
            },
        });
    });
});