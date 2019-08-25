<!DOCTYPE html>
<html lang="en">

<head>
    <title>@yield('title')</title>


    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <!-- Font Awesome icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


    <style>

        body{
            background-color: #ebf2f8;
        }
        @font-face {
            font-family: "Verlag";
            src: url(/fonts/VerlagBold.otf);
        }

        @font-face {
            font-family: "GothamBookReg";
            src: url(/fonts/GothamBookRegular.otf);
        }

        @font-face {
            font-family: "GothamMedReg";
            src: url(/fonts/GothamMediumRegular.ttf);
        }

        .gotham-book-reg {
            font-family: "GothamBookReg";
        }

        .gotham-med-reg {
            font-family: "GothamMedReg";
        }

        .verlag-bold {
            font-family: "Verlag";
        }

        .timesheet-portal-header{
            font-size: 3em;
        }

        .timsheet-portal-para {
            font-size: 1.5em;
        }

        .delete-item-form {
            display:inline-block;
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


@yield('scripts')
</body>

</html>