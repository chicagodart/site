<?php
/*
Plugin Name: dart-site
Description: Plugin created from react-create-app.
Version:     0.0.1
Author:      Heap O Nerds
*/

// require(dirname(__FILE__) . '/build/index.html');
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <script src="https://use.fontawesome.com/80f5403642.js"></script>
    <link href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Karla|Unica+One" rel="stylesheet">
    <title>Chicago D(ART) - Deaf Arts</title>
    <?php wp_head(); ?>
</head>

<body>
    <div id="root"></div>
    <?php wp_footer(); ?>
</body>

</html>
