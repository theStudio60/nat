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
		$date = get_sub_field('date');
		$medium = get_sub_field('medium');
?>
	 

				<?php

		endwhile;
	endif;
?>   
<?php /*
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

//*/ ?>


<article  id="post-<?php the_ID(); ?>"
class=" w-100 border  m-4  p-4 "
style=" "
> 
	<div class="row h-100 d-flex p-0 m-0">
		<div class="col-12 col-lg-8 d-flex  " >

			<img style="overflow-y:scroll; max-height:480px; width:auto; "  class="img-fluid d-block d-lg-none p-4 m-auto" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
			<img style="overflow-y:scroll; max-height:640px "  class="img-fluid d-none d-lg-block m-auto" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
	
	 	</div>

		<div class="col-12 col-lg-4 p-4 border text-white  ">
			<?php // the_content(); ?>
			<div class="d-block d-lg-none">

					<div class="mt-2">
		
						<p class="§ §--white pt-0 mb-4">
							<?= $desc ?>	
						<p> 
			

						<p class="§ §--white pt-0 my-4">
							Taille : <?= $dimensions ?>	
						<p> 
		
		
						<p class="§ §--white pt-0 my-4">
							Médium : <?= $medium ?>
						<p>

						<p class="§ §--white pt-0 my-4">
						Date de création : <?= $dare ?>
						<p>
						<p class="§ §--white pt-0 my-4">
						Prix : <?= $price ?>
		
						<p>
					</div>

					<div class="mt-auto mb-0 p-4">
						<div class="w-100 d-flex justify-content-around">

							<button class="button--sucre">
        	      <span>
        	     	+ Sucre

        	      </span>
        	    </button>
        	    <button class="button--sel">
        	      <span>
        	      - Sel

        	      </span>
        	    </button>
						</div>
					</div>
			</div>
			<div class="d-none d-lg-flex flex-column h-100">

					<div class="mt-2">
		
						<p class="§ §--white pt-0 mb-4">
							<?= $desc ?>	
						<p> 
			

						<p class="§ §--white pt-0 my-4">
							Taille : <?= $dimensions ?>	
						<p> 
		
		
						<p class="§ §--white pt-0 my-4">
							Médium : <?= $medium ?>
						<p>

						<p class="§ §--white pt-0 my-4">
						Date de création : <?= $dare ?>
						<p>
						<p class="§ §--white pt-0 my-4">
						Prix : <?= $price ?>
		
						<p>
					</div>

					<div class="mt-auto mb-0 p-4">
						<div class="w-100 d-flex justify-content-around">

							<button class="button--sucre">
        	      <span>
        	     	+ Sucre

        	      </span>
        	    </button>
        	    <button class="button--sel">
        	      <span>
        	      - Sel

        	      </span>
        	    </button>
						</div>
					</div>
			</div>
		</div>

	</div>
</article><!-- #post-<?php the_ID(); ?> -->

 