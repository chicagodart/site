<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dart-site');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '_2:2^egl-h*g~NC[VO6wLhj0[Y |Zn>I /)e-4CJmkce15XUPB4HTFWOER2Y1H~n');
define('SECURE_AUTH_KEY',  'o79#9vI 1y!^3Na.a@4;n RhrLMXbA5@;S >1 cI>/ #A1g8]D|vZ$&SD>Xh#~Z)');
define('LOGGED_IN_KEY',    '`HOVM_64X pRaq2x?_|LObr[0RSf6H|gpZ!GN*4J#Syvz5fuq=>rySR0~#?5E45_');
define('NONCE_KEY',        '+qDt6qc +Nae_91NURsf/_ie8&;6P*b!Q&%r{e`6Jni0:],nb+,i4[Q,JuU<?<]=');
define('AUTH_SALT',        'e]cXv~Td;};#.)n1OKGsiU@|>AgA=16^FbXFJQW]j4Jq9BzaWJ~`s[=GXj$;*969');
define('SECURE_AUTH_SALT', '_[$zzaP@ge:2[<4TjNR0?Rr/UpH>X+j1,~U56lIp9- 6Y:7O}Px9],PMD:o)NAZw');
define('LOGGED_IN_SALT',   ']<U%Bc:vX0Hd3n&t_3l^z.}w1*~|Q)*&lr x 1t0o:-~3E!XCx!NuTI?Az{YS9h6');
define('NONCE_SALT',       'r}tj?=D/,]Kn&1P#n6v[X`aeP`CveO9 r]Jx#>%I|V19Xk=80)A}o90l]1F=`Ecp');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
