
<section id="" class="my-5 ">
  <div class="section__container p-0">
    <div class="section__row">
      <div class="col-12 col-lg-9">
        <div class="section__content">
          <?php if( have_rows('group_frontpage') ): ?>
            <?php while( have_rows('group_frontpage') ): the_row();  ?>
              <?php if( have_rows('group_bottom') ): ?>
                <?php while( have_rows('group_bottom') ): the_row();  ?>
                  <?php if( have_rows('repeater_bottom') ): ?>
                    <?php while( have_rows('repeater_bottom') ): the_row(); ?>
                      <?php if( have_rows('group') ): ?>
                        <?php while( have_rows('group') ): the_row(); ?>
                          <?php
                          $link = get_sub_field('link');
                          ?>
                          <button onclick="location.href='<?= $link['url'] ?>'"  class="button button--fluid my-2 py-2 ">
                            <?= $link['title'] ?>
                          </button>  
                        <?php endwhile; ?>
                      <?php endif; ?>
                    <?php endwhile; ?>
                  <?php endif; ?>
                <?php endwhile; ?>
              <?php endif; ?>
            <?php endwhile; ?>
          <?php endif; ?>
          <?php $my_id = get_the_ID(); ?>
          <?php $my_title = get_the_title(); ?>

          <script>

          function <?php echo "open" . "newsletter" . "Popup"."()" ?> {
            document.getElementById("newsletterModal").classList.add("popup");
            document.getElementById("newsletterModal").classList.remove("popup--hidden"); 
          }
          function <?php echo "close" . "newsletter" . "Popup" ."()" ?> {
            document.getElementById("newsletterModal").classList.remove("popup");
            document.getElementById("newsletterModal").classList.add("popup--hidden"); 
          
          }
          </script>

            <?php if( have_rows('website_settings', 'option') ): ?>
 						  <?php while( have_rows('website_settings', 'option') ): the_row(); ?>
 						    <?php if( have_rows('group_newsletter') ): ?>
 						      <?php while( have_rows('group_newsletter') ): the_row(); ?>
                    <?php if( have_rows('group_inscription') ): ?>
 						    	    <?php while( have_rows('group_inscription') ): the_row(); ?>
											  <?php $button_I_label = get_sub_field("button_label"); ?> 
									 
                        <button  onclick="<?php echo "open" . "newsletter" . "Popup" . "()"; ?>" class="button button--fluid my-2 py-2 ">
                          <?= $button_I_label ?> 
                        </button> 
                        <div class="popup--hidden" style="height:100vh!important" id="newsletterModal" tabindex="-1" role="dialog" aria-labelledby="newsletterModalLabel" >
                          <div class="modal-dialog " style="max-width:80%!important;" role="document">
                            <div class="modal-content m-auto bg-dark border">
                              <div class="p-2 d-flex text-white w-100 border-bottom">
                        				<div class="w-75 d-flex">
                                	<h5 class="modal-title text-white ml-2 mr-auto w-75" id="newsletterModalLabel"><?php echo " Newsletter " ?></h5>
                        				</div>
                                <button type="button" class="ml-auto mr-2  close text-white" onclick="<?php echo "close" . "newsletter" . "Popup" . "()"; ?>" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="container-fluid modal-body § §--white">
                        				<div class="row">
                                <div class="col-12">
						                      <?= do_shortcode('[gravityform id="4" title="false" description="false" ajax="true"]')?>
					                      </div>
                        				</div>
                        			</div>  
                            </div>
                          </div>
                        </div>
 						    	  <?php endwhile; ?>
 						    	<?php endif; ?>
                   <?php if( have_rows('group_desinscription') ): ?>
 						    		<?php while( have_rows('group_desinscription') ): the_row(); ?>
                      <?php $button_D_label = get_sub_field("button_label"); ?> 
											 
                      <button onclick=" "  class="button button--fluid my-2 py-2 ">
                         <?= $button_D_label ?> 
                      </button>  
                    <?php endwhile; ?>
 						    	<?php endif; ?>

 						      <?php endwhile; ?>
 						    <?php endif; ?>
 						  <?php endwhile; ?>
 						<?php endif; ?>  

          
        </div>
      </div>
    </div>
  </div>
</section> 