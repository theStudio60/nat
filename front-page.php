<?php
/**
 * Template Name: front-page
 *
 * @package studio_soixante
 */
get_header();
/* Start the Loop */
while ( have_posts() ) :
  the_post(); the_content();
endwhile;
get_template_part("partials/sections/front-page/homepage","atf");
get_template_part("partials/sections/front-page/homepage","news");
get_template_part("partials/sections/front-page/homepage","recent");
get_template_part("partials/sections/front-page/homepage","selection");
get_template_part("partials/sections/front-page/homepage","bottom");
?>
<?php
get_footer();

/**
 *
 * acf debugging informations. Needs to be commented on production, it's there for development and debug only.
 *
 */
/*
$thisOptionGroup = get_field('website_settings', 'option');
echo '<pre>';
	var_dump( $thisOptionGroup );
echo '</pre>';
 
$thisPageGroup = get_field('homepage_acf_group');
echo '<pre>';
	var_dump( $thisPageGroup );
echo '</pre>';
//*/
