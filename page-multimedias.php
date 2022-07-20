<?php
/**
 * Template Name: page Multimedias
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
        <h1 class="title title--white title--centered border"><?php the_title();?></h1>
        <p class="§ §--white pt-0 mb-4">
          <?php
          while ( have_posts() ) :
            the_post(); the_content();
          endwhile; 
          ?>
        </p>
        <br>
        <?php 
        $audio_post_id = 121;      //place here your page id  
        $video_post_id = 123;      //place here your page id  
        $graphisme_post_id = 122;      //place here your page id  

        $audio_post_thumbnail_id = get_post_thumbnail_id( $audio_post_id ); 
        $audio_post_title = get_the_title( $audio_post_id ); 

        $video_post_thumbnail_id = get_post_thumbnail_id( $video_post_id ); 
        $video_post_title = get_the_title( $video_post_id ); 

        $graphisme_post_thumbnail_id = get_post_thumbnail_id( $graphisme_post_id ); 
        $graphisme_post_title = get_the_title( $graphisme_post_id ); 

        $audio_image = wp_get_attachment_image_src( $audio_post_thumbnail_id );
        $video_image = wp_get_attachment_image_src( $video_post_thumbnail_id );
        $graphisme_image = wp_get_attachment_image_src( $graphisme_post_thumbnail_id );
        ?>
 
          <div class="" onclick="location.href='<?php the_permalink($audio_post_id); ?>'" style="cursor:pointer">
            <div
        
             style="height:180px;background-image:url(<?php echo $audio_image[0]; ?>);background-repeat:no-repeat;background-size:cover;background-position:center;cursor:pointer"
            > 
            </div>
            <div class="py-3 my-3 border-top border-bottom title title--white title--centered">
                <h3 class=" "><?= $audio_post_title ?></h3>
            </div>
          </div>
          <br> 
        <?php wp_reset_postdata();?>

        <div class="" onclick="location.href='<?php the_permalink($video_post_id); ?>'" style="cursor:pointer">
            <div
        
             style="height:180px;background-image:url(<?php echo $video_image[0]; ?>);background-repeat:no-repeat;background-size:cover;background-position:center;cursor:pointer"
            > 
            </div>
            <div class="py-3 my-3 border-top border-bottom title title--white title--centered">
                <h3 class=" "><?= $video_post_title ?></h3>
            </div>
            
          </div>
          <br> 
        <?php wp_reset_postdata();?>

        <div class="" onclick="location.href='<?php the_permalink($graphisme_post_id); ?>'" style="cursor:pointer">
            <div
        
             style="height:180px;background-image:url(<?php echo $graphisme_image[0]; ?>);background-repeat:no-repeat;background-size:cover;background-position:center;cursor:pointer"
            > 
            </div>
            <div class="py-3 my-3 border-top border-bottom title title--white title--centered">
                <h3 class=" "><?= $graphisme_post_title ?></h3>
            </div>
          </div>
          <br> 
        <?php wp_reset_postdata();?>

      </div>
    </div>
  </div>
</section>
<?php
get_footer();
