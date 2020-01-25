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
    <div class="gallery">
        <img src="img/road.jpg"
             class="mi-trigger"
             alt="You must go ahead and follow the road"
             data-modal="modal1"
        >
        <img src="img/sky.jpg"
             class="mi-trigger"
             alt="There are clouds but the sun is shining"
             data-modal="modal1"
        >
        <img src="img/trees.jpg"
             class="mi-trigger"
             alt="Even in the middle of the wood there is light"
             data-modal="modal1"
        >
    </div>

</div>
<div class="mi-wrapper is-closed" id="modal1">
    <span type="button" class="mi-close">X</span>
    <figure>
        <img class="mi-image" src="img/road-fullsize.jpg" alt="">
        <figcaption></figcaption>
    </figure>
</div>

<script src="js/script.js"></script>
</body>
</html>
