<?php
get_header();
?> 

<?php 
/*
if ( has_post_thumbnail() ) { 
  $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );?>
    
  <div class="hero--page" style="background: url('<?php echo $backgroundImg[0]; ?>')">
 
    <div class="hero__container " >
      <div class="hero__row">
        <div class="hero__col" data-aos="fade-up" data-aos-duration="800" >
          <h1 class="hero__title"  > 
            <?php the_title(); ?>
          </h1>
        </div> <!--col -->
      </div>
    </div>
  </div>  
<?php } ;

//*/
?> 
<div style="height:25vh;"></div>
<section id=" " class="section">
  <div class="section__container">
    <div class="section__row">
      <div class="col-12 col-md-10 col-lg-9 col-xl-8">
        <h1 class="title title--white title--centered border"><?php the_title();?></h1>
        <div class="§ §--white  my-4 py-3 border-top border-bottom">
        <?php 
  
          /* Start the Loop */
          while ( have_posts() ) :

            the_post(); the_content();
          endwhile;
        ?>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
get_footer();