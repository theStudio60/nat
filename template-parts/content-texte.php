<?php
/**
 * Template part for displaying textes / nouvelles cpt
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
class="border-top border-bottom py-3
  w-100 m-0 d-block"
style=" "
>
 	<?php the_content(); ?>
</article><!-- #post-<?php the_ID(); ?> -->
