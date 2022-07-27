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
 
      <?php endwhile; ?>
      
    </div>

  </div> 
</section>
<?php
// get_footer();  