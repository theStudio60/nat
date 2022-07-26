<?php
/**
 * Template Name: page audios
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
      <div 
       class="py-3 text-white" style="cursor:pointer"
       onclick="location.href='<?php echo site_url(); ?>/multimedias'" 
      >
        <span class="text-white fa far fa-arrow-left fa-lg my-3 "></span>
        <span class="ml-2 text-white">retour vers la page multimédias</span>
      </div>
      
        <h1 class="title title--black bg-white title--centered border"><?php the_title();?></h1>
        <div class="§ §--white  mb-4">
          <?php
          while ( have_posts() ) :
            the_post(); the_content();
          endwhile;  
          ?>
        </div>
        <br>
        <?php  
        $loop = new WP_Query(array(
        'post_type' => 'multimedia-audio',
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
          if( have_rows('group_multimedia-audios') ): 
            while( have_rows('group_multimedia-audios') ): the_row();  
              $file = get_sub_field('file');
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
             
            <div class="py-3 my-2 border-top border-bottom  title--centered">

            <?php  if ($file) : ?>  
              <div
              
              class="border mb-2"
              style="
               height:180px;
               background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);
               background-repeat:no-repeat;
               background-size:cover;
               background-position:center;
               
               "
              > 
              </div>
              <div class="border-top border-bottom"></div>
              <h3 class="my-2 mr-auto text-white"><?php the_title(); ?>  </h3>

              <audio id="audio<?php echo the_ID() ?>"  class="d-block mx-auto my-2 audio-player" controls >
                  <source src="<?= $file['url'] ?>" type="audio/mpeg "> 
              </audio>
              
              
              <?php endif; ?>
            </div>

            <div class="py-1 mb-2 § title--centered d-flex  ">
              <span class="my-auto ml-auto mr-2 text-white "><?= $type ?>  </span>
              <span class="my-auto px-2 text-white border-left border-right"><?= $duration ?>  </span>
              <span class="my-auto ml-2 mr-auto text-white"><?= $year ?>  </span>
            </div>
            <div class="w-100 p-1 mb-2 bg-white"></div>
 
              <?php  /*
              if ($file) :?>  
                <audio class="d-block mx-auto audio-player" controls >
                  <source src="<?= $file['url'] ?>" type="audio/mpeg "> 
                </audio> 


              <?php 
              endif; 
              //*/ ?>



    
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