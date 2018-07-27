<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="css/app_admin.css">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <script>
      window.Laravel = { csrfToken: '{{ csrf_token() }}' }
  </script>
</head>
<body>
    <div id='appAdmin'>
      <app-admin></app-admin>
    </div>

    <script src="js/jquery.min.js"></script>
    <script src="js/app_admin.js"></script>
</body>
</html>