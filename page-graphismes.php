<?php
/**
 * Template Name: page graphismes
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
        <div 
         class="py-3 text-white" style="cursor:pointer"
         onclick="location.href='<?php echo site_url(); ?>/multimedias'" 
        >
          <span class="text-white fa far fa-arrow-left fa-lg my-3 "></span>
          <span class="ml-2 text-white">retour vers la page multimédias</span>
        </div>
        <h1 class="title title--black bg-white title--centered border"><?php the_title();?></h1>
        <p class="§ §--white  mb-4">
          <?php
          while ( have_posts() ) :
            the_post(); the_content();
          endwhile;  
          wp_reset_postdata(  );
          ?>
        </p>
        <br>
        <?php  
        $loop = new WP_Query(array(
        'post_type' => 'graphismes',
        'posts_per_page' => '-1',
        'orderby' => 'date',
        'order' => 'DESC',
        'offset' => 0
        ));
        while($loop->have_posts() ) : 
          $loop->the_post();  
          //$link = get_field('link');
        ?> 
        <?php if( have_rows('group_multimedia-graphisme') ): 
          while( have_rows('group_multimedia-graphisme') ): the_row();  
              $file = get_sub_field('image');
              //$type = get_sub_field('type');
              //$duration = get_sub_field('duration');
              $year = get_sub_field('date');
           ?>
          <?php endwhile; ?>
        <?php endif ; ?>
        <div class="my-4" >
          <div class="py-3 my-2 border-top title--centered">
            <div
            onclick="location.href='<?php the_permalink(); ?>'" 
            class="border mb-2"
            style="
             height:240px;
             background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);
             background-repeat:no-repeat;
             background-size:cover;
             background-position:center;
             
             "
            > 
            </div>
          </div>
          <div class="w-100 d-flex py-1 mb-2 border-top border-bottom ">
            <div class="w-75 border-right "> 
              <h3 class="my-auto mr-auto text-white"><?php the_title(); ?>  </h3>
            </div>
            <div class="w-25 d-flex"> 
              <span class="m-auto §--white §"><?= $year ?>  </span>
            </div>
          </div>
          <div class="py-2 § §--white">
            <?php    the_content();   ?>
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