<?php
/**
 *  
 *
 * @package studio_soixante
 */
get_header();
 
 
/*
if( have_rows('homepage_acf_group') ): 
  while( have_rows('homepage_acf_group') ): the_row(); 
    get_template_part("partials/hero");
    get_template_part("partials/sections/about"); 
 
    get_template_part("partials/sections/contact"); 

  endwhile;
endif;
//*/
?> 
 
 <div style="height:25vh;"></div>
<section id=" " class="section">
  <div class="section__container">
    <div class="section__row">

    <div class="col-12 col-md-10 col-lg-9 col-xl-8">
      <div 
      class="py-3 text-white" style="cursor:pointer"
      onclick="location.href='<?php echo site_url(); ?>/textes'" 
      >
        <span class="text-white fa far fa-arrow-left fa-lg my-3 "></span>
        <span class="ml-2 text-white">retour vers la liste de textes</span>
      </div>
      
      <h1 class="title title--white title--centered border"><?php the_title();?></h1>
      <?php the_tags('<span class="text-white py-3 mb-3">' . '</span>'); ?>

        <style>
          p,h1,h2,h3,h4,h5,h6{color:#fff!important;}
        </style>
           
              <?php
              /* Start the Loop */

               while ( have_posts() ) :
                 the_post();
                 get_template_part( 'template-parts/content-texte', get_post_type() );
               endwhile;
               wp_link_pages();
              ?>
                </div>
         </div>
                 
  </div>
</section>
<?php
get_footer();  