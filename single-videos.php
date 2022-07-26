<?php
/**
 *  template for cpt videos
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
         onclick="location.href='<?php echo site_url(); ?>/multimedias/videos/'" 
        >
          <span class="text-white fa far fa-arrow-left fa-lg my-3 "></span>
          <span class="ml-2 text-white">retour vers la page Vidéos</span>
        </div>
        <h1 class="title title--white title--centered border"><?php the_title();?></h1>
              <?php
              /* Start the Loop */
               while ( have_posts() ) :
                 the_post();
                 get_template_part( 'template-parts/content-video', get_post_type() );
                endwhile;
              ?>
      </div>
    </div>               
  </div>
</section>
<?php
get_footer();  