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
        <div class="§ §--white my-2 py-2 border-top border-bottom">
          <?php 



$args = new WP_Query(array(
        'type' => 'oeuvres',
        'orderby' => 'name',
        'order' => 'ASC'
      )); 
$tags = get_tags($args);

foreach($tags as $tag) { 
    var_dump($tag->name);
}



          /* Start the Loop */
          while ( have_posts() ) :
            the_post(); the_content();
          endwhile;
 


          ?>      
        </div>

      </div>

    </div>
    <div class="row m-0 p-0">


    <?php  
            
  /* Start the Loop */
/*
   while ( have_posts() ) :
     the_post();
     get_template_part( 'template-parts/content-oeuvre', get_post_type() );
   endwhile;

 //*/


    


        $loop = new WP_Query(array(
        'post_type' => 'oeuvres',
        'posts_per_page' => '-1',
        'orderby' => 'name',
        'order' => 'DESC',
        'offset' => 0
        )); 


        while($loop->have_posts() ) : 
          $loop->the_post();  

          //$link = get_field('link');
          if( have_rows('group_oeuvre') ):
            while( have_rows('group_oeuvre') ): the_row(); 
            $desc = get_sub_field('description');
            $tags = get_sub_field('tags');
            
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
          <?php
 
endwhile;
endif;
?> 
        <?php endwhile?> 
        <?php wp_reset_postdata();?>
    </div>
  </div> 
</section>
<?php
get_footer();  