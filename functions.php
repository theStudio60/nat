<?php

 /**
 * Redirect user after successful login.
 *
 * @param string $redirect_to URL to redirect to.
 * @param string $request URL the user is coming from.
 * @param object $user Logged user's data.
 * @return string
 */
function my_login_redirect( $redirect_to, $request, $user ) {
    //is there a user to check?
    if ( isset( $user->roles ) && is_array( $user->roles ) ) {
        //check for admins
        if ( in_array( 'administrator', $user->roles ) ) {
            // redirect them to the default place
            return $redirect_to;
        } else {
            return home_url('/wp-admin/admin.php?page=site-options');
        }
    } else {
        return $redirect_to;
    }
}

add_filter( 'login_redirect', 'my_login_redirect', 10, 3 );

if (is_admin()) {
    require('functions/backend.php');
} else {
    /**
     * Theme constants
     *
     * define the constants used in the theme here
     */
    define('THEME_URI', get_bloginfo('template_url'));
    define('THEME_PATH', __dir__);
    //define('DEFAULT_HERO_IMAGE', wp_get_attachment_image_src(get_field('default_hero_image', 'option'), 'full')[0] ?: '');
    define('GMAP_API_KEY', ' ');
    // array of acf flex-contents layouts that must spread accross the whole viewport
    define('FULL_WIDTH_LAYOUTS', []);

    require('functions/frontend.php');
}

/**
 * Include ACF fields
 */
if (function_exists('acf_add_local_field_group')) {
    $acf_files = glob(__dir__.'/functions/acf/*.php');
    foreach ($acf_files as $filename) {
        include $filename;
    }
}

require('functions/functions.php');

/**
 * Add theme configuration
 */
add_theme_support('title-tag');
add_theme_support('post-thumbnails');
add_theme_support('cleaner');
add_theme_support(
	'custom-logo',
	array(
		'height'      => 64,
		'width'       => 64,
		'flex-width'  => true,
		'flex-height' => true,
	)
);
 

function webp_upload_mimes( $existing_mimes ) {
	// add webp to the list of mime types
	$existing_mimes['webp'] = 'image/webp';

	// return the array back to the function with our added mime type
	return $existing_mimes;
}
add_filter( 'mime_types', 'webp_upload_mimes' );


//** * Enable preview / thumbnail for webp image files.*/
function webp_is_displayable($result, $path) {
    if ($result === false) {
        $displayable_image_types = array( IMAGETYPE_WEBP );
        $info = @getimagesize( $path );

        if (empty($info)) {
            $result = false;
        } elseif (!in_array($info[2], $displayable_image_types)) {
            $result = false;
        } else {
            $result = true;
        }
    }

    return $result;
}
add_filter('file_is_displayable_image', 'webp_is_displayable', 10, 2);