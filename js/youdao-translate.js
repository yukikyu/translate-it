// var from = 'en';
// var to = 'zh-CHS';

function translate(query,calback) {
    $.ajax({
        url: 'http://localhost:7467/translate/yd',
        type: 'get',
        dataType: 'jsonp',
        data: {
            q: query
        },
        success: calback
    });
}