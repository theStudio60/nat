<?php
/**
 * Template Name: Page Textes et Nouvelles
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

        
      <div class="my-4 py-4 w-100 border-top border-bottom">
        <div class="d-flex w-100 justify-content-around">
          <button class="button p-3">Nouvelles</button>
          <button class="button p-3">Poésies</button>
        </div>
      </div>
      <div class="mt-4 w-100   ">
        <div class="d-flex w-100">
          <h3 class="text-white title--centered border p-4">Nouvelles</h3>
        </div>
      </div>
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
          //$link = get_field('link');
        ?> 
          <div class="py-2 border-top" onclick="location.href='<?php the_permalink(); ?>'" >
            <div
             class="p-5" 
             style="
              background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);
              height:240px;background-repeat:no-repeat;background-size:cover;background-position:center;cursor:pointer"
            > 
            </div>
            <div class="py-3 border-top border-bottom title title--white title--centered">
                <h3 class=" "><?php the_title(); ?></h3>
            </div>
          </div>
          <br>
        <?php endwhile?> 
        <?php wp_reset_postdata();?>
      </div>
    </div>
  </div>
</section>
<?php
get_footer();