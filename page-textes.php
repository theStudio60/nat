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
        <?php 
        $loop = new WP_Query(array(
        'post_type' => 'textes',
        'posts_per_page' => '-1',
        // 'cat' => '6',// id cat de nouvelles
        'orderby' => 'date',
        'order' => 'DESC',    
        ));?>
        
        <div class="my-4 py-4 w-100 border-top border-bottom">
          <div class="d-flex w-100 justify-content-around">
            <?php
 				    $categories = get_categories();
				    foreach($categories as $category) {
        
              if ($category->name == "Nouvelles") : echo "<button onclick=\"location.href='#nouvelles'\"  class=\"button p-3\">Nouvelles</button>"  ; endif ;
              if ($category->name == "Poésies") : echo "<button onclick=\"location.href='#poesies'\"  class=\"button p-3\">Poésies</button>"  ; endif ;
              if ($category->name == "Manifestes") : echo "<button onclick=\"location.href='#manifestes'\"  class=\"button p-3\">Manifestes</button>"  ; endif ;
				  }

				?>
        </div>
      </div>

      <?php 
      $loopN = new WP_Query(array(
      'post_type' => 'textes',
      'posts_per_page' => '-1',
      'cat' => '6',// id 6 cat de Nouvelles
      'orderby' => 'name',
      'order' => 'DESC',    
      ));?>
 
      <div class="my-4 w-100">
        <div class="py-2 border title title--white title--centered">
                <h3 id="nouvelles" class="m-auto">Nouvelles</h3>
        </div>
      </div>
      <?php
      while($loopN->have_posts() ) : ?>

        <?php
          $loopN->the_post();  
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

        <?php 
      $loopP = new WP_Query(array(
      'post_type' => 'textes',
      'posts_per_page' => '-1',
      'cat' => '7',// id 7 cat de Poésies
      'orderby' => 'name',
      'order' => 'DESC',    
      ));?>
 
      <div class="my-4 w-100">
        <div class="py-2 border title title--white title--centered">
                <h3 id="poesies" class="m-auto">Poésies</h3>
        </div>
      </div>
      <?php
      while($loopP->have_posts() ) : ?>

        <?php
          $loopP->the_post();  
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

        <?php 
      $loopM = new WP_Query(array(
      'post_type' => 'textes',
      'posts_per_page' => '-1',
      'cat' => '10',// id cat de Manifestes
      'orderby' => 'name',
      'order' => 'DESC',    
      ));?>
 
      <div class="my-4 w-100">
        <div class="py-2 border title title--white title--centered">
                <h3 id="manifestes" class="m-auto">Manifestes</h3>
        </div>
      </div>
      <?php
      while($loopM->have_posts() ) : ?>
        <?php
          $loopM->the_post();   
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