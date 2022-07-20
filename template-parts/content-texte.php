<?php
/**
 * Template part for displaying Oeuvres cpt
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
class="p-2  w-100 m-0 d-block"
style=" "
>
	<div class="row h-100 d-flex p-0 m-0">
 
 
<div class="col-9 mx-auto">
 	<?php the_content(); ?>
 </div>


	</div>




</article><!-- #post-<?php the_ID(); ?> -->
