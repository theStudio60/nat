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

 <section id=" " class="section border p-4 h-100 w-100 d-block">
  <div class="container-fluid border p-2 w-100 h-100">
    <div class="row border p-2 w-100">

 
     
  
            <h1 class="title title--white title--centered "><?php the_title();?></h1>
  
            </div>
            
              <?php
              /* Start the Loop */

               while ( have_posts() ) :
                 the_post();
                 get_template_part( 'template-parts/content-oeuvre', get_post_type() );
               endwhile;
             
              ?>
             
  </div>
</section>
<?php
get_footer();  