<?php
/**
 * Template Name: page search
 * 
 *
 * @package studio_soixante
 */
get_header();
/* Start the Loop */
while ( have_posts() ) :
  the_post(); the_content();
endwhile;

?> 



<div style="height:25vh;"></div>
 <section id=" " class="section">
  <div class="section__container">
    <div class="section__row">

      <div class="col-12 col-md-10 col-lg-9 col-xl-8">
     
  
            <h1 class="title title--white title--centered border"><?php the_title();?></h1>

 
            <p class="§ §--white pt-0">
              
   <?php
   while ( have_posts() ) :
    the_post(); the_content();
  endwhile;
   
   ?>
          </p>
    
      </div>


    </div>
  </div>
</section>
<?php
get_footer();  