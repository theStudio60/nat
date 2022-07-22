<?php
/**
 * Template Name: page Projets
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

 
        <div class="§ §--white mt-2 mb-5">
              
          <?php
          while ( have_posts() ) :
            the_post(); the_content();
          endwhile; 
          wp_reset_postdata(  );
         ?>    
        </div> 

        <?php  
        $loop = new WP_Query(array(
        'post_type' => 'projet',
        'posts_per_page' => '-1',
        'orderby' => 'date',
        'order' => 'DESC',
        'offset' => 0
        ));
        while($loop->have_posts() ) : 
          $loop->the_post();  
          //$link = get_field('link');
        ?> 
        <?php 
          if( have_rows('group_projet') ): 
            while( have_rows('group_projet') ): the_row();  
              $file = get_sub_field('image');
              //$type = get_sub_field('type');
              //$duration = get_sub_field('duration');
              $description = get_sub_field('description');
              $year = get_sub_field('date');
           ?>
            <?php endwhile; ?>
          <?php endif ; ?>
          <div class="mb-4" >
         
            <?php 
            /*
            <div
             class="p-5" 
             style="background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);"
            > 
            </div>
            //*/ ?>
             
            <div class="py-2 mt-1 title--centered">

              <?php // if ($file) : ?>  
              <div
              onclick="location.href='<?php the_permalink(); ?>'" 
              class="border "
              style="
               height:180px;
               background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);
               background-repeat:no-repeat;
               background-size:cover;
               background-position:center;
               cursor:pointer;
               "
              > 
              </div>
              <?php // endif; ?>
            </div>

            <a href="<?php the_permalink(); ?>" class="w-100 d-flex py-3  mb-1 border-top border-bottom ">
 
                <h2 class="  m-auto   §--centered §--white">
                  <b>
                  <?php the_title(); ?> 
                  </b>
                </h2>
            </a>
            <?php /*
            <div class="py-2 § §--white">
              <?= $description ; ?>
              <?php   // the_content();   ?>
            </div>

            //*/ ?>
            
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