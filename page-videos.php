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
           ?>

            <?php endwhile; ?>
          <?php endif ; ?>
          <div class="" onclick="location.href='<?php /* the_permalink();  //*/ ?>'" >
          <?php 
          /*
            <div
             class="p-5" 
             style="background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);"
            > 
            </div>
            //*/ ?>
            <div class="py-2 mb-3 border-top border-bottom  title--centered">
                <h3 class="my-auto  text-white"><?php the_title(); ?></h3>
            </div>


<?php if ($mp4) :?>
<? ?>
<? ?>

<video width="708" height="auto" controls>
  <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
</video>


<video class="w-100" src="" loop playsinline muted></video>

<? ?>
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