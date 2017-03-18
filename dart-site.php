<?php
/*
Plugin Name: dart-site
Description: Plugin created from react-create-app.
Version:     0.0.1
Author:      Heap O' Nerds
*/

function wp_react_hello_world() {
  echo '<div id="root"></div>';
}
 
function include_react_files() {
    wp_enqueue_style( 'prefix-style', plugins_url('css\main.9a0fe4f1.css', __FILE__) );
    wp_enqueue_script( 'plugin-scripts', plugins_url('js/main.350b4a43cde67bd603fc.js', __FILE__),array(),  '0.0.1', true );
}
 
add_action( 'wp_enqueue_scripts', 'include_react_files' );