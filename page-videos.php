<?php
/**
 * Template Name: page multimedia - Vidéos
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
        <h1 class="title title--black bg-white title--centered border"><?php the_title();?></h1>
        <p class="§ §--white  mb-4">
          <?php
          while ( have_posts() ) :
            the_post(); the_content();
          endwhile;  
          ?>
        </p>
        <br>
        <?php  
        $loop = new WP_Query(array(
        'post_type' => 'videos',
        'posts_per_page' => '-1',
        'orderby' => 'date',
        'order' => 'DESC',
        'offset' => 0
        ));
        while($loop->have_posts() ) : 
          $loop->the_post();  
          //$link = get_field('link');
        ?> 
        <?php 
          if( have_rows('group_multimedia-videos') ): 
            while( have_rows('group_multimedia-videos') ): the_row();  
              $mp4 = get_sub_field('file');
              $type = get_sub_field('type');
              $duration = get_sub_field('duration');
              $year = get_sub_field('date');
               
           ?>

            <?php endwhile; ?>
          <?php endif ; ?>
          <div class="my-4" >
          <?php 
          /*
            <div
             class="p-5" 
             style="background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);"
            > 
            </div>
            //*/ ?>
            <div class="mt-3 w-100 p-1 bg-white"></div>
            <div class="py-3 mb-2 border-bottom  title--centered">
              <h3 class="my-auto text-white"><?php the_title(); ?>  </h3>
            </div>
            <div class="py-1 mb-2 § title--centered d-flex  ">
              <span class="my-auto ml-auto mr-2 text-white "><?= $type ?>  </span>
              <span class="my-auto px-2 text-white border-left border-right"><?= $duration ?>  </span>
              <span class="my-auto ml-2 mr-auto text-white"><?= $year ?>  </span>
            </div>
            <div class="w-100 p-1 mb-2 bg-white"></div>
            
          <?php  if ($mp4) :?> 
            <video  class="d-none d-xl-block" width="708" height="auto" controls>
              <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
            </video> 


            <video class="d-none d-lg-block d-xl-none" width="664" height="auto" controls>
              <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
            </video> 

            <script>

              </script>
            <video class="d-none d-md-block d-lg-none" width="543" height="auto" controls>
              <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
            </video> 

            <video class="d-none d-sm-block d-md-none" width="478" height="auto" controls>
              <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
            </video> 

            <video class="d-block d-sm-none mx-auto" width="288" height="auto" onclick="location.href='<?php the_permalink(); ?>'"  >
              <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
            </video> 


          <?php endif; ?>



    
          </div>
          <br>
        <?php endwhile?> 
        <?php wp_reset_postdata();?>
      </div>
    </div>
  </div>
</section>
<?php
get_footer();