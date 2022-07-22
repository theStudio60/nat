<?php
/**
 * Template part for displaying multimedias videos cpt
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * 
 * 
 */

?> 
<?php  
  $imageUrl=get_the_post_thumbnail_url();

	 
?>   
 
<article  id="post-<?php the_ID(); ?>"
class="p-2  w-100 m-0 d-block border-top border-bottom"
style=" "
>
 	<?php the_content(); ?>
</article><!-- #post-<?php the_ID(); ?> -->
