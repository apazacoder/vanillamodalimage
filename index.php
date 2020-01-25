<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>VanillaJS Modal Image</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<header>
    <h1>VanillaJS Modal Image</h1>
</header>

<div id="main">
    <img src="img/image-450x300.jpg"
         class="mi-trigger"
         alt="You must go ahead and follow the road"
         data-modal="modal1"
    >
</div>
<div class="mi-wrapper is-closed" id="modal1">
    <span type="button" class="mi-close">X</span>
    <figure>
        <img class="mi-image" src="img/image-900x600.jpg" alt="">
        <figcaption></figcaption>
    </figure>
</div>
<script src="js/script.js"></script>
</body>
</html>
