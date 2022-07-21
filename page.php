<?php
get_header();
?> 
<div style="height:25vh;"></div>
<section class="section" >
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-10 col-lg-9 col-xl-8">
        <?php 
          /* Start the Loop */
          while ( have_posts() ) :
            the_post(); the_content();
          endwhile;
        ?>
      </div>
    </div>
  </div>
</section>
<?php
get_footer();