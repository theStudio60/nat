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

<div  class=" section--atf__container " style=" ">
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
                    <?php $loop = new WP_Query(array(
                    'post_type' => 'textes',
                    'posts_per_page' => '-1',
                    'orderby' => 'date',
                    'order' => 'DESC',
                    'offset' => 0
                   ));
                    while($loop->have_posts() ) : 
                      $loop->the_post();  
                      $thisImg = get_field('img');
                      $thisImgSize='large';
                      $thisImgUrl=$thisImg['sizes'][$thisImgSize]; 
                      $link = get_field('link');
                  ?> 
                      <div class="col">
                        <div class="card"  >
                          <div class="card-header" style="background-image:url(<?= $thisImgUrl;?>);">
                          </div>
                          <div class="card-body">
                            <h3 class=" "><?php the_title(); ?></h3>
                            <?php // the_title( '<h3 class="books__card__title"><a href="' . get_permalink() . '" title="' . the_title_attribute( 'echo=0' ) . '" rel="bookmark">', '</a></h3>' ); ?> 
                            <p class=" "><?php the_field('description' /*, $post_id*/);?>
                            </p>
                            <?php if( $link ): 
                              $link_url = $link['url'];
                              $link_title = $link['title'];
                              $link_target = $link['target'] ? $link['target'] : '_blank';
                            ?>
                              <button type="button" onclick="window.location.href='<?php echo esc_url( $link_url ); ?>'"   target="<?php echo esc_attr( $link_target ); ?>" class="books__card__cta btn btn--primary"><?php echo esc_html( $link_title ); ?></button> 
                            <?php endif; ?>
                          </div>
                        </div>
                      </div>
                    <?php endwhile?> 
                  <?php wp_reset_postdata();?>
                    

                </div>

            </div>
        </div>









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
