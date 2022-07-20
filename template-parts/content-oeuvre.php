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

	if( have_rows('group_oeuvre') ):
		while( have_rows('group_oeuvre') ): the_row(); 
		$desc = get_sub_field('description');
		$price = get_sub_field('price');
		$dimensions = get_sub_field('dimensions');
?>
	 

				<?php

		endwhile;
	endif;
?>   
<article  id="post-<?php the_ID(); ?>"
class="p-2 h-100 w-100 m-0 d-block d-lg-none"
style=" "
>
 <div class="col-12"
 style="height:70vh;background-size:contain;background-repeat:no-repeat;background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);"
 
 >
   
 </div>

 <div class="col-12 ">
 	<?php the_content(); ?>
 </div>
	     


</article><!-- #post-<?php the_ID(); ?> -->




<article  id="post-<?php the_ID(); ?>"
class="p-2  w-100 m-0 d-none d-lg-block"
style=" "
>
	<div class="row h-100 d-flex p-0 m-0">
		<div class="w-75 d-flex " >

			<img style="overflow-y:scroll;max-width:640px "  class="img-fluid d-block m-auto border" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
	
	 	</div>

		<div class="w-25 p-2 border text-white">
			<?php // the_content(); ?>
			<?= $desc ?>
			<?= $price ?>
			<?= $dimensions ?>
		</div>



	</div>




</article><!-- #post-<?php the_ID(); ?> -->

<div class="col-9">
 	<?php the_content(); ?>
 </div>