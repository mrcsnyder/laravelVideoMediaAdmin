<!DOCTYPE html>
<html lang="en">

<head>
    <title>@yield('title')</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


    <!-- Font Awesome icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Sweet Alert styles -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.0/sweetalert.css">

    <style>

        body{
            background-color: silver;
        }

        /* pagination styles... */
        .pagination{
            display: flex;
            justify-content: center;
            font-size: 1.4em;
        }
        ul.pagination li.page-item{
            display: block !important;
        }
        .page-item.active .page-link{
            z-index: 1;
            color: #000;
            background-color: #17a2b8;
            border-color: #000;
        }
        .page-link{
            position: relative;
            display: block;
            padding: .5rem .75rem;
            margin-left: -1px;
            line-height: 1.25;
            color: #000;
            background-color: #d6d8d9;
            border: 1px solid #dee2e6;
        }
        .page-link:hover{
            color: #fff;
            text-decoration: none;
            background-color: #6c757d;
            border-color: #dee2e6;
        }
        .page-item.disabled .page-link{
            /*color: #fff;*/
            /*pointer-events: none;*/
            /*cursor: auto;*/
            /*background-color: #6c757d;*/
            /*border-color: #dee2e6;*/
            /*blend in colors so the final link at end when disabled disappears...*/
            color: #f0f1f0;
            pointer-events: none;
            cursor: auto;
            background-color: #ebf2f8;
            border-color: #f0f1f0;
        }
        .page-link:focus {
            z-index: 2;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(163,181,142,.25);
        }



    </style>


    @yield('styles')

</head>

<body>
@yield('content')

<footer class="text-center">
    <span class="mr-5 gotham-med-reg">&copy; {{date('Y')}} Chris Snyder</span>
</footer>


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.0/sweetalert.min.js"></script>

@yield('scripts')
</body>

</html>