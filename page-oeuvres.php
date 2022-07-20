<?php
/**
 * Template Name: Page Oeuvres d'art
 *
 * @package studio_soixante
 */
get_header();
?>
<div style="height:25vh;"></div>
<section id=" " class="section">
  <div class="section__container">
    <div class="section__row">
      <div class="col-12 col-md-10 col-lg-9 col-xl-8 p-4">
        <h1 class="title title--white title--centered border"><?php the_title();?></h1>
        <p class="§ §--white pt-0">
          <?php 
          /* Start the Loop */
          while ( have_posts() ) :
            the_post(); the_content();
          endwhile;
          ?>      
        </p>

      </div>

    </div>
    <div class="row m-0 p-0">


    <?php  
            
  /* Start the Loop */

   while ( have_posts() ) :
     the_post();
     get_template_part( 'template-parts/content-oeuvre', get_post_type() );
   endwhile;
 


    


        $loop = new WP_Query(array(
        'post_type' => 'oeuvres',
        'posts_per_page' => '-1',
        'orderby' => 'name',
        'order' => 'DESC',
        'offset' => 0
        ));
 
 
        $posts = [];
        $tags = [];
        
        while ($loop->have_posts()) {
            $loop->the_post();
            $post_id = get_the_ID();
            $post_fields = get_fields();
            $post_fields['id'] = get_the_ID();
            $posts[] = $post_fields;
            foreach($post_fields['tags'] as $tag) {
                isset($tags[$tag]) ? $tags[$tag]++ : $tags[$tag] = 1;
            }
        
        }
        
        $data = ["posts" => $posts, "tags" => $tags];
        
        get_template_part('/partials/sections/oeuvres/oeuvres', 'list', $data);
               



        while($loop->have_posts() ) : 
          $loop->the_post();  
          //$link = get_field('link');
          if( have_rows('group_oeuvre') ):
            while( have_rows('group_oeuvre') ): the_row(); 
            $desc = get_sub_field('description');
        ?>
           

                <?php
 
            endwhile;
          endif;
        ?> 
          <a href="<?php the_permalink(); ?>" class="col-12 col-lg-4 my-3">
            <div
            class="image-wrapper border"
            style="background:url(<?php echo get_the_post_thumbnail_url(); ?>)";
            >
              <div class="image-wrapper__overlay ">
                <div class="image-wrapper__content">
                  <div class="image-wrapper__content__block  align-self-center">
                    <h3 class="border p-2"><?php the_title(); ?></h3>
  
                    <small class="p-2 ">
                      <?= $desc ?>
                    </small>
                  </div>
                </div>
              </div>
            </div> 
          </a>
        <?php endwhile?> 
        <?php wp_reset_postdata();?>
    </div>
  </div> 
</section>
<?php
get_footer();  