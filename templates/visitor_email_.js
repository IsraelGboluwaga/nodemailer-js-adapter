module.exports = (user, visitor) => {
    return `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">

    <style>
        body {
            font-family: 'Open Sans', sans-serif;
            font-size: 15px;
        }
    </style>

</head>
<body class="container">

<main role="main" class="container">

    <h5> ${user.full_name} </h5>
    <p>
        You have a visitor. Your visitor's information is attached to this message along with their visitor ID. Kindly
        remind them to
        check out when they are about to leave. Click the name below to display full information.
    </p>


    <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Visitor Info</h6>
        <div class="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded">
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <img src="${visitor.visitor_image}" /> 
            </p>
        </div>
        <div class="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded">
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">Name</strong>
                ${visitor.full_name}
            </p>
        </div>
        <div class="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1" alt="" class="mr-2 rounded">
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">ID</strong>
                <span id="visitor_id"> ${visitor._id} </span>
            </p>
        </div>

        <div class="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1" alt="" class="mr-2 rounded">
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">Organization</strong>
                ${visitor.organization}
            </p>
        </div>

        <div class="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1" alt="" class="mr-2 rounded">
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">Purpose of Visit</strong>
                ${visitor.purpose}
            </p>
        </div>


        <div class="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1" alt="" class="mr-2 rounded">
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">Phone Number</strong>
                ${visitor.phone}
            </p>
        </div>
        <div class="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1" alt="" class="mr-2 rounded">
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">Email</strong>
                ${visitor.email}
            </p>
        </div>
    </div>
    <div class="inline">
        <div id="accept-btn" class="btn btn-success" style="font-size: 80%" role="button">ACCEPT</div>
        <div id="reject-btn" class="btn btn-danger" style="font-size: 80%" role="button">REJECT</div>
    </div>
</main>

<script>
    var accept = document.getElementById('accept-btn');
    var reject = document.getElementById('reject-btn');
    var visitor_id = document.getElementById('visitor_id');
    accept.addEventListener('click', function () {
        window.location.replace('http://eluzini.com/clockin/visitor/status/' + visitor_id+ '?status=true')
    });
    reject.addEventListener('click', function () {
        window.location.replace('http://eluzini.com/clockin/visitor/status/' + visitor_id+ '?status=false')
    });
</script>
</body>
</html>
`;
};