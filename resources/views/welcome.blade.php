<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEBSITE | CAFE COFFE</title>
    <link href="https://fonts.googleapis.com/css2?family=Nova+Round&family=Nova+Square&family=Roboto:wght@400;700&display=swap" rel="
    stylesheet">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Roboto', sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: 'Nova Round', cursive;
        }

        .wrap {
            background: rgba(0, 0, 0, 0.5) url('/img/8.jpeg') no-repeat;
            background-position: center;
            /* opacity: 70%; */
            background-size: cover;
            min-height: 100vh;
            overflow: hidden;
            background-blend-mode: overlay;

        }

        .wafe {
            position: absolute;
            width: 100%;
            bottom: -40px;
            color: #fff;
            opacity: 1;
        }
        
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 25px 80px;
            background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.6));
        }

        header .logo {
            font-size: 28px;
            font-weight: 700;
            color: #fff;
            float: left;
        }

        header .menu {
            float: right;
            margin-top: 5px;
            
            color: #fff;
            
        }

        header ul li {
            display: inline-block;

        }

        header ul li a {
            text-decoration: none;
            font-size: 16px;
            margin: 0 25px;
            color: #fff;
            font-weight: 300;
            letter-spacing: 1px;
        }

        .content {
            max-width: 55%;
            padding: 200px 80px 0;
            color: #300902;
            
        }

        .content h1 {
            font-size: 48px;
        }

        .content p {
            font-size: 20px;
            padding: 25px 0;
            font-weight: 300;
        }

        .content .btn-group {
            margin-top: 45px;
        }

        .content a {
            display: inline-block;
            padding: 10px 40px;
            text-decoration: none;
            color: #fff;
            border-radius: 50px;

        }

        .content a.color1 {
            background-color: #461F1F;
        }
    </style>

</head>

<body>
    <div class="wrap">
        <header>
            <!-- <div class="logo">CAPPADOCIA'S COFFE</div> -->
            <div class="menu">
                <ul>
                    <li><a href="/registrasiadmin">Home</a></li>
                    <li><a href="about.blade.php">About</a></li>
                    <li><a href="log.blad.php">Contact</a></li>
                    <li><a href="{{ route('register') }}">Register</a></li>
                    <li><a href="{{ route('login') }}">Login</a></li>
                </ul>
            </div>
        </header>

        <div class="content">
         <h1>Welcome To</h1>
         <h1>Capadoccia's Coffee</h1>
            <!-- <div class="btn-group">
                <a href="home.blade.php" class="color1"></a>
                <a href="home.blade.php" class="color1"></a>
                <a href="home.blade.php" class="color1"></a>
                <a href="home.blade.php" class="color1"></a>
               
            </div> -->
        </div>



        <!-- {{-- wafe --}}
        <svg class="wafe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#F6F5F0" fill-opacity="1" d="M0,288L48,250.7C96,213,192,139,288,133.3C384,128,480,192,576,224C672,256,768,256,864,218.7C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg> -->

    </div>
</body>

</html>
