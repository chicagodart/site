<php?

# Plugin Name: dart-site
# Description: Plugin created from react-create-app.
# Version:     0.0.1
# Author:      Heap O Nerds

#function wp_dart_site() {
  #echo '<div id="root"></div>';
#}

function include_react_files() {
    wp_enqueue_style( 'main-styles', './build/static/css/');
    wp_enqueue_script( 'main-scripts', './build/static/js/');
}

add_action( 'wp_enqueue_scripts', 'include_react_files' );
require(dirname(__FILE__) . '/build/index.html'); ?>
