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
        <span 
        class="text-white fa far fa-arrow-left fa-lg my-3 "
        onclick="location.href='<?php echo site_url(); ?>/actualite'" 
        ></span>
        <h1 class="title title--white title--centered border"><?php the_title();?></h1>
        <div
            
              class="border mb-2"
              style="
               height:240px;
               background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);
               background-repeat:no-repeat;
               background-size:cover;
               background-position:center;
               
               "
              > 
              </div>
        <div class="§ §--white text-white my-4 py-3 border-top border-bottom"
        
        >
        <style>
          p,a,h1,h2,h3,h4,h5,h6{color:#fff!important;}
        </style>
          <?php 
  
          /* Start the Loop */
          while ( have_posts() ) :

            the_post(); the_content();
     
          endwhile;
          wp_link_pages();
        ?>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
get_footer();