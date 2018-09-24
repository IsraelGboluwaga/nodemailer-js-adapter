module.exports = (user, visitor) => {
    const html_mail = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"\n' +
        '          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">\n' +
        '    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">\n' +
        '\n' +
        '    <style>\n' +
        '        body {\n' +
        '            font-family: \'Open Sans\', sans-serif;\n' +
        '            font-size: 15px;\n' +
        '        }\n' +
        '    </style>\n' +
        '\n' +
        '</head>\n' +
        '<body class="container">\n' +
        '\n' +
        '<main role="main" class="container justify-content-center">\n' +
        '\n' +
        '    <h5> ' + user.name + ' </h5>\n' +
        '    <p>\n' +
        '        You have a visitor. Your visitor\'s information is attached to this message along with their visitor ID. Kindly\n' +
        '        remind them to\n' +
        '        check out when they are about to leave.\n' +
        '    </p>\n' +
        '\n' +
        '\n' +
        '    <div class="my-3 p-3 bg-white rounded shadow-sm">\n' +
        '        <h6 class="border-bottom border-gray pb-2 mb-0">Visitor Info</h6>\n' +
        '        <div class="media text-muted pt-3">\n' +
        '            <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded">\n' +
        '            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">\n' +
        '               <img src="' + visitor.visitor_image + '" class="justify-content-center" style="width: 150px; height:150px">' +
        '            </p>\n' +
        '        </div>\n' +
        '        <div class="media text-muted pt-3">\n' +
        '            <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded">\n' +
        '            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">\n' +
        '                <strong class="d-block text-gray-dark">Name</strong>\n' +
        visitor.full_name +
        '            </p>\n' +
        '        </div>\n' +
        '        <div class="media text-muted pt-3">\n' +
        '            <img data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1" alt="" class="mr-2 rounded">\n' +
        '            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">\n' +
        '                <strong class="d-block text-gray-dark">ID</strong>\n' +
        '                <span id="visitor_id">' + visitor.objectId + '</span>\n' +
        '            </p>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="media text-muted pt-3">\n' +
        '            <img data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1" alt="" class="mr-2 rounded">\n' +
        '            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">\n' +
        '                <strong class="d-block text-gray-dark">Organization</strong>\n' +
        visitor.organization +
        '            </p>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="media text-muted pt-3">\n' +
        '            <img data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1" alt="" class="mr-2 rounded">\n' +
        '            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">\n' +
        '                <strong class="d-block text-gray-dark">Purpose of Visit</strong>\n' +
        visitor.purpose +
        '            </p>\n' +
        '        </div>\n' +
        '\n' +
        '\n' +
        '        <div class="media text-muted pt-3">\n' +
        '            <img data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1" alt="" class="mr-2 rounded">\n' +
        '            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">\n' +
        '                <strong class="d-block text-gray-dark">Phone Number</strong>\n' +
        visitor.phone +
        '            </p>\n' +
        '        </div>\n' +
        '        <div class="media text-muted pt-3">\n' +
        '            <img data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1" alt="" class="mr-2 rounded">\n' +
        '            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">\n' +
        '                <strong class="d-block text-gray-dark">Email</strong>\n' +
        visitor.email +
        '            </p>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="inline">\n' +
        '        <div id="accept-btn" class="btn btn-success" style="font-size: 80%" role="button">ACCEPT</div>\n' +
        '        <div id="reject-btn" class="btn btn-danger" style="font-size: 80%" role="button">REJECT</div>\n' +
        '    </div>\n' +
        '</main>\n' +
        '\n' +
        '<script>\n' +
        '    var accept = document.getElementById(\'accept-btn\');\n' +
        '    var reject = document.getElementById(\'reject-btn\');\n' +
        '    var visitor_id = document.getElementById(\'visitor_id\');\n' +
        '    accept.addEventListener(\'click\', function () {\n' +
        '        window.location.replace(\'http://eluzini.com/clockin/visitor/status/\' + visitor_id+ \'?status=true\')\n' +
        '    });\n' +
        '    reject.addEventListener(\'click\', function () {\n' +
        '        window.location.replace(\'http://eluzini.com/clockin/visitor/status/\' + visitor_id+ \'?status=false\')\n' +
        '    });\n' +
        '</script>\n' +
        '</body>\n' +
        '</html>';

    return html_mail;
};