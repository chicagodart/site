<?php

function include_react_files() {
  $asset_manifest = json_decode(file_get_contents(get_template_directory_uri() . '/build/asset-manifest.json'), true);

  $build_dir = '/build/';
  $main_css = $build_dir. $asset_manifest['main.css'];
  $main_js = $build_dir. $asset_manifest['main.js'];

  wp_enqueue_style( 'main-styles', get_template_directory_uri() . $main_css, array(), null);
  wp_enqueue_script( 'main-scripts', get_template_directory_uri() . $main_js, array(), null, true);
}

add_action( 'wp_enqueue_scripts', 'include_react_files' );
?>
