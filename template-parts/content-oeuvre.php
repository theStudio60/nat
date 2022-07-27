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
	<?php if( have_rows('website_settings', 'option') ): ?>
    <?php while( have_rows('website_settings', 'option') ): the_row(); ?>
      <?php if( have_rows('group_auction') ): ?>
        <?php while( have_rows('group_auction') ): the_row(); ?>
 
						<?php if( have_rows('group_buttons') ): ?>
      			  <?php while( have_rows('group_buttons') ): the_row(); ?>
			 

								<?php $buttonSucre = get_sub_field("button_sucre"); ?>
								<?php $buttonSel = get_sub_field("button_sel"); ?>
								<?php $buttonCTA = get_sub_field("button_buy"); ?>
									 
      			  <?php endwhile; ?>
      			<?php endif; ?>
        <?php endwhile; ?>
      <?php endif; ?>
    <?php endwhile; ?>
  <?php endif; ?>  
<script>
	<?php $my_id = get_the_ID(); ?>
	<?php $my_title = get_the_title(); ?>
function <?php echo "open" . "Sucre" . "Popup" . $my_id ."()" ?> {
  document.getElementById("sucreModal").classList.add("popup");
  document.getElementById("sucreModal").classList.remove("popup--hidden");
	document.getElementById("post-<?php the_ID(); ?>").classList.add("d-none");
	document.getElementById("post-<?php the_ID(); ?>").classList.remove("d-block");
}
function <?php echo "close" . "Sucre" . "Popup" . $my_id ."()" ?> {
  document.getElementById("sucreModal").classList.remove("popup");
  document.getElementById("sucreModal").classList.add("popup--hidden");
	document.getElementById("post-<?php the_ID(); ?>").classList.remove("d-none");
	document.getElementById("post-<?php the_ID(); ?>").classList.add("d-block");

}
function <?php echo "open" . "Sel" . "Popup" . $my_id ."()" ?> {
  document.getElementById("selModal").classList.add("popup");
  document.getElementById("selModal").classList.remove("popup--hidden");
	document.getElementById("post-<?php the_ID(); ?>").classList.add("d-none");
	document.getElementById("post-<?php the_ID(); ?>").classList.remove("d-block");
}
function <?php echo "close" . "Sel" . "Popup" . $my_id ."()" ?> {
  document.getElementById("selModal").classList.remove("popup");
  document.getElementById("selModal").classList.add("popup--hidden");
	document.getElementById("post-<?php the_ID(); ?>").classList.remove("d-none");
	document.getElementById("post-<?php the_ID(); ?>").classList.add("d-block");

}
</script>


<div class="popup--hidden" style="height:100vh!important"id="sucreModal" tabindex="-1" role="dialog" aria-labelledby="sucreModalLabel" >
  <div class="modal-dialog " style="max-width:80%!important;" role="document">
    <div class="modal-content m-auto bg-dark border">
      <div class="p-2 d-flex text-white w-100 border-bottom">
				<div class="w-75 d-flex">
        	<h5 class="modal-title text-white ml-2 mr-auto w-75" id="sucreModalLabel"><?php echo " Ajouter un sucre sur " . $my_title  ?></h5>
				</div>
        <button type="button" class="ml-auto mr-2  close text-white" onclick="<?php echo "close" . "Sucre" . "Popup" . $my_id ."()"; ?>" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="container-fluid modal-body § §--white">
				<div class="row">
					<div class="col-12 col-lg-6 d-flex  ">
						<?php if( have_rows('website_settings', 'option') ): ?>
 						  <?php while( have_rows('website_settings', 'option') ): the_row(); ?>
 						    <?php if( have_rows('group_auction') ): ?>
 						      <?php while( have_rows('group_auction') ): the_row(); ?>

											<?php if( have_rows('group_popup-sucre') ): ?>
 						    			  <?php while( have_rows('group_popup-sucre') ): the_row(); ?>
													<?php $wysiwyg = get_sub_field("wysiwyg"); ?> 
													<div class="text-white">
														<?= $wysiwyg ?>
													</div>
 						    			  <?php endwhile; ?>
 						    			<?php endif; ?>
 						      <?php endwhile; ?>
 						    <?php endif; ?>
 						  <?php endwhile; ?>
 						<?php endif; ?>  
					</div>
					<div class="col-12 col-lg-6 border-left">
						<?= do_shortcode('[gravityform id="2" title="false" description="false" ajax="true"]')?>
					</div>
				</div>
			</div>  
    </div>
  </div>
</div>

<div class="popup--hidden" style="height:100vh!important"id="selModal" tabindex="-1" role="dialog" aria-labelledby="selModalLabel" >
  <div class="modal-dialog " style="max-width:80%!important;" role="document">
    <div class="modal-content m-auto bg-dark border">
      <div class="p-2 d-flex text-white w-100 border-bottom">
				<div class="w-75 d-flex">
        	<h5 class="modal-title text-white ml-2 mr-auto w-75" id="selModalLabel"><?php echo " Ajouter du sel sur " . $my_title  ?></h5>
				</div>
        <button type="button" class="ml-auto mr-2  close text-white" onclick="<?php echo "close" . "Sel" . "Popup" . $my_id ."()"; ?>" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="container-fluid modal-body § §--white">
				<div class="row p-2">
					<div class="col-12 col-lg-6 d-flex border">
						<?php if( have_rows('website_settings', 'option') ): ?>
 						  <?php while( have_rows('website_settings', 'option') ): the_row(); ?>
 						    <?php if( have_rows('group_auction') ): ?>
 						      <?php while( have_rows('group_auction') ): the_row(); ?>

											<?php if( have_rows('group_popup-sel') ): ?>
 						    			  <?php while( have_rows('group_popup-sel') ): the_row(); ?>
													<?php $wysiwyg = get_sub_field("wysiwyg"); ?> 
													<div class="text-white">
														<?= $wysiwyg ?>
													</div>
 						    			  <?php endwhile; ?>
 						    			<?php endif; ?>
 						      <?php endwhile; ?>
 						    <?php endif; ?>
 						  <?php endwhile; ?>
 						<?php endif; ?>  
				 
					</div>
					<div class="col-12 col-lg-6">
						<?= do_shortcode('[gravityform id="3" title="false" description="false" ajax="true"]')?>
					</div>
				</div>


			</div> 
    </div>
  </div>
</div>
<article  id="post-<?php the_ID(); ?>"
class=" w-100 border  m-4  p-4 "
style=" "
>  
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
<!-- Modal -->


	<div class="row h-100 d-flex p-0 m-0">
		<div class="col-12 col-lg-8 d-flex p-4" >
			<img style="overflow-y:scroll; max-height:480px; width:auto; "  class="img-fluid d-block d-lg-none m-auto" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
			<img style="overflow-y:scroll; max-height:640px "  class="img-fluid d-none d-lg-block m-auto " src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
	 	</div>
		<div class="col-12 col-lg-4 p-3  border text-white  ">
			<div class="d-block d-lg-none">
				<div class="mt-0">
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
						<button class="button--sucre" onclick="<?php echo "open" . "Sucre" . "Popup" . $my_id ."()"; ?>"  >
							<span>
							 + <?= $buttonSucre ?>
							</span>
						</button>
						<button class="button--sel" onclick="">
							<span>
							- <?= $buttonSel ?>
							</span>
						</button>
					</div>
				</div>
			</div>
			<div class="d-none d-lg-flex flex-column h-100">
				<div class="mt-0">
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
						<?php $my_id = get_the_ID(); ?>

						<button class="button--sucre" onclick="<?php echo "open" . "Sucre" . "Popup" . $my_id ."()"; ?>"  >
              <span>
             	+ <?= $buttonSucre ?>
              </span>
            </button>
            <button class="button--sel" onclick="<?php echo "open" . "Sel" . "Popup" . $my_id ."()"; ?>"  >
              <span>
              - Sel
              </span>
            </button>
					</div>
				</div>
			</div>
	</div>
	<div class="col-12 col-lg-8 pt-3 ">
		<div class="p-4  border">

		<?php the_content(); ?>

		</div>
  </div>
	<div class="col-12 col-lg-4 py-4">
		<div 
      class="py-3 text-white" style="cursor:pointer"
      onclick="location.href='<?php echo site_url(); ?>/oeuvres'" 
      >
        <span class="text-white fa far fa-arrow-left fa-lg my-3 "></span>
        <span class="ml-2 text-white">Retourner à la liste des oeuvres</span>
    </div>
	</div>
</article><!-- #post-<?php the_ID(); ?> -->

 