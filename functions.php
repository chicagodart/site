<?php
function include_react_files() {
  wp_enqueue_style( 'main-styles', get_template_directory_uri() . '/build/static/css/main.f07f54cf.css', array(), null);
  wp_enqueue_script( 'main-scripts', get_template_directory_uri() . '/build/static/js/main.c5b92b13.js', array(), null);
}

add_action( 'wp_enqueue_scripts', 'include_react_files' );
?>
