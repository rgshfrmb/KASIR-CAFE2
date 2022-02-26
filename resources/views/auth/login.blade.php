<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dashboard | login</title>
    <link rel="stylesheet" href="css/login.css">
</head>

<body id="particles-js"></body>
<div class="animated bounceInDown">
  <div class="container">
    <span class="error animated tada" id="msg"></span>
  <div class="box">
      <h4>Admin<span>Dashboard</span></h4>
      <h5>Sign in to your account.</h5>
      <form action="{{ route('login') }}" method="POST">
                @csrf

<!-- username -->
                                <input type="text" name="username" class="form-control  @error('username')is-invalid @enderror" id="username" placeholder="Username" autofocus>
        <i class="typcn typcn-eye" id="eye"></i>
        @error('username')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
 <!-- password -->
                                <input type="password" name="password" class="form-control @error('password')is-invalid @enderror" id="password" placeholder="Password">
        @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror


        <label>
          <input type="checkbox">
          <span></span>
          <small class="rmb">Remember me</small>
        </label>
        <a href="#" class="forgetpass">Forget Password?</a>
        <button type="submit" class="btn btn-primary">
                {{ __('Register') }}
            </button>
      </form>
        <!-- <a href="#" class="dnthave">Don’t have an account? Sign up</a> -->
  </div> 
       <div class="footer">
      <span>Made with <i class="fa fa-heart pulse"></i> <a href="https://www.google.de/maps/place/Augsburger+Puppenkiste/@48.360357,10.903245,17z/data=!3m1!4b1!4m2!3m1!1s0x479e98006610a511:0x73ac6b9f80c4048f"><a href="https://codepen.io/lordgamer2354">By Anees Khan</a></span>
    </div>
</div>
</form>