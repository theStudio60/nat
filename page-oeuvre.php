<?php
/**
 * Template Name: Page Oeuvre d'art
 *
 * @package studio_soixante
 */
get_header();
/* Start the Loop */
while ( have_posts() ) :
  the_post(); the_content();
endwhile;
 
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
     
  
            <h1 class="title title--white title--centered border"><?php the_title();?></h1>

 
            <p class="§ §--white pt-0">
              
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et veniam expedita, at esse magnam perferendis nemo asperiores aliquid sequi quisquam id sapiente distinctio ab? Optio porro debitis placeat saepe!
          </p>
   <?php
   while ( have_posts() ) :
    the_post(); the_content();
  endwhile;
   
   ?>
    
      </div>


    </div>
  </div>
</section>
<?php
get_footer();  