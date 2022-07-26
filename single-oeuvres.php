<?php
/**
 *  Template to display cpt oeuvre
 *
 * @package studio_soixante
 */
get_header();
?>
<section id=" " class="section p-0 h-100 w-100 d-block">
  <div class="container-fluid p-0 m-0 w-100 h-100">
    <div class="row   p-4 w-100">

      <div class="m-4 w-100 border">
        <h1 class="title title--white title--centered "><?php the_title();?></h1>
      </div>
      <?php
      /* Start the Loop */
      while ( have_posts() ) : the_post();
        get_template_part( 'template-parts/content-oeuvre', get_post_type() );
       ?>
        <div class="col-12 col-lg-8 border p-4 m-4">
          <?php the_content(); ?>
        </div>

      <?php endwhile; ?>
      <div class="col-12 col-lg-8 my-2">
        <span 
        class="text-white fa far fa-arrow-left fa-lg my-3 "
        onclick="location.href='<?php echo site_url(); ?>/oeuvres'" 
        ></span>
      </div>
    </div>

  </div> 
</section>
<?php
get_footer();  