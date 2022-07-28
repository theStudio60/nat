<?php
/**
 * Template Name: page Concepts
 *
 * @package studio_soixante
 */
get_header(); 
?>  
<div style="height:25vh;"></div>
 <section id=" " class="section">
  <div class="section__container">
    <div class="section__row">

      <div class="col-12 col-md-10 col-lg-9 col-xl-8">
     
  
        <h1 class="title title--dark bg-white title--centered border"><?php the_title();?></h1>

 
        <div class="w-100">
              
          <?php
          while ( have_posts() ) :
            the_post(); the_content();
          endwhile; 
          wp_reset_postdata(  );
         ?>    
          <?php if( have_rows('group_concepts') ): ?>
            <?php  while( have_rows('group_concepts') ): the_row();  ?>
              <?php if( have_rows('repeater_accordions') ): ?>
                <?php  while( have_rows('repeater_accordions') ): the_row();  ?>





                  <?php if( have_rows('group_accordion') ): ?>
                    <?php  while( have_rows('group_accordion') ): the_row();  ?>
                      <?php     $letter = get_sub_field('letter'); ?>
                      <div id="accordion<?= $letter ?>" class="w-100" >
                        <div class="c" id="heading<?= $letter ?>">
                          <h5 class="mb-3">
                            <button class="button button--fluid p-4 my-2" data-toggle="collapse" data-target="#collapse<?= $letter ?>" aria-expanded="false" aria-controls="collapse<?= $letter ?>">
                              <?= $letter ?>  <?php //  echo  the_ID();?>
                            </button>
                          </h5>
                        </div>
                        <div id="collapse<?= $letter ?>" class="collapse " aria-labelledby="heading<?= $letter ?>" data-parent="#accordion<?= $letter ?>">
                        <?php if( have_rows('repeater_concepts') ): ?>
                          <?php  while( have_rows('repeater_concepts') ): the_row();  ?>
         
                            <?php if( have_rows('group') ): ?>
                              <?php  while( have_rows('group') ): the_row();  ?>
                                
                                <?php     $name = get_sub_field('name'); ?>
                                <?php     $name_id = get_sub_field('id_number'); ?>
                                <?php     $wysiwyg = get_sub_field('wysiwyg'); ?>
                               
                                <span  onclick="<?php echo "open" . "_" . $letter . "_" . $name_id . "Popup"."()"; ?>"  class="w-100 d-flex py-2  my-3  border-top border-bottom ">
                                
                                  <h2   class="  m-auto   §--centered §--white">
                                    <b>
                                    <?= $name ?> 
                                    </b>
                                  </h2>
                                </span> 
                                <script>
                                function <?php echo "open" . "_" . $letter . "_" . $name_id . "Popup"."()"; ?> {
                                  document.getElementById("<?php echo "_" . $letter ."_" . $name_id . "Modal" ; ?>").classList.add("popup");
                                  document.getElementById("<?php echo "_" . $letter ."_" . $name_id . "Modal" ; ?>").classList.remove("popup--hidden"); 
                                }
                                function <?php echo "close" . "_" . $letter . "_" . $name_id . "Popup"."()"; ?> {
                                  document.getElementById("<?php echo "_" . $letter ."_" . $name_id . "Modal" ; ?>").classList.remove("popup");
                                  document.getElementById("<?php echo "_" . $letter ."_" . $name_id . "Modal" ; ?>").classList.add("popup--hidden"); 
                                }
                                </script>
                                <div class="popup--hidden" style=" " id="<?php echo "_" . $letter ."_" . $name_id . "Modal" ; ?>" tabindex="-1" role="dialog" aria-labelledby="newsletterModalLabel" >
                                  <div class="modal-dialog " style=" " role="document">
                                    <div class="modal-content m-auto bg-dark border">
                                      <div class="p-2 d-flex text-white w-100 border-bottom">
                                				<div class="w-75 d-flex">
                                        	<h5 class="modal-title text-white ml-2 mr-auto w-75" id="newsletterModalLabel"><?php echo $name ; ?></h5>
                                				</div>
                                        <button type="button" class="ml-auto mr-2  close text-white" onclick="<?php echo "close" . "_" . $letter . "_" . $name_id . "Popup"."()"; ?>" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="container-fluid modal-body ">
                                				<div class="row">
                                          <div class="col-12 text-white">
                                            <?= $wysiwyg ?>
					                                </div>
                                				</div>
                                			</div>  
                                    </div>
                                  </div>
                                </div>
                              <?php  endwhile; ?>
                            <?php endif; ?>         
                          <?php  endwhile; ?>
                        <?php endif; ?>
                        </div>
                      </div>
                    <?php  endwhile; ?>
                  <?php endif; ?>         
                <?php  endwhile; ?>
              <?php endif; ?>         
            <?php  endwhile; ?>
          <?php endif; ?>
        </div> 
      </div>
    </div>
  </div>
</section>
<?php
get_footer(); 