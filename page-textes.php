<?php
/**
 * Template Name: Page Textes et Nouvelles
 *
 * @package studio_soixante
 */
get_header();
/* Start the Loop */
 
 
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
 
                    <p class="§ §--white pt-0 mb-4">

                    <?php
                    while ( have_posts() ) :
                      the_post(); the_content();
                    endwhile; 
                    ?>
                    </p>
<br>
                    <?php 
                    $loop = new WP_Query(array(
                    'post_type' => 'textes',
                    'posts_per_page' => '-1',
                    'orderby' => 'date',
                    'order' => 'DESC',
                    'offset' => 0
                   ));
                    while($loop->have_posts() ) : 
                      $loop->the_post();  
                       
                      $link = get_field('link');
                    ?> 
                      <div class="" onclick="location.href='<?php the_permalink(); ?>'" >
          
                        <div
                         class="p-5" 
                         style="background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);"
                        > 

                        </div>

                        <div class="py-3 border-top border-bottom title title--white title--centered">
                            <h3 class=" "><?php the_title(); ?></h3>
                        </div>
                        

                      </div>
                      
                    <?php endwhile?> 
                  <?php wp_reset_postdata();?>
                    

                </div>

            </div>
        </div>
      </section>









<?php
get_footer();

/**
 *
 * acf debugging informations. Needs to be commented on production, it's there for development and debug only.
 *
 */
/*
$thisOptionGroup = get_field('website_settings', 'option');
echo '<pre>';
	var_dump( $thisOptionGroup );
echo '</pre>';
 
$thisPageGroup = get_field('homepage_acf_group');
echo '<pre>';
	var_dump( $thisPageGroup );
echo '</pre>';
//*/
