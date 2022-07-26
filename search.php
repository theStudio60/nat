<?php
/**
 * Template Name: Page Recherche
 * 
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
     
            <div class="§ §--white py-4 px-2 border">
              <?php get_search_form(); ?>   

            </div>
    
            <?php
            $s=get_search_query();
            $args = array('s' =>$s );
            // The Query
            $the_query = new WP_Query( $args );
            if ( $the_query->have_posts() ) {
              _e("<h3 class='text-white section__subtitle mx-4 mx-lg-0  my-5' style='font-weight:bold; '><i class='my-auto mr-3 text-white fa far fa-search fa-sm' ></i>".get_query_var('s')."</h3>");
              while ( $the_query->have_posts() ) {
                $the_query->the_post();
                ?>


            <div class="container border-bottom mb-5 py-3 "  onclick="location.href='<?php the_permalink(); ?>'"  >
              <div class="row  ">
                <div class="col-12 col-lg-5 my-auto "  href="<?php the_permalink(); ?>">
                  <div class=" d-flex border" 
                   style="
                    background-size:cover ;
                    background-position:center; height:200px!important;
                    background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);
                   "
									 onclick="location.href='<?php the_permalink(); ?>'"
                  >		
	 
								  </div><!-- end latest-post__thumbnail -->
                </div><!-- end col-12 col-lg-5 -->
							  <div class="col-12 col-lg-7  my-auto">
                  <?php /*
                  <i class="fa far fa-arrow-right text-primary my-auto me-2"></i>
                  //*/?>

                  <a href="<?php the_permalink(); ?>" class="text-white ">
                     <h3 onclick="location.href='<?php the_permalink(); ?>'"  class="text-white my-3"><?php the_title(); ?></h3>
                  </a>
                  <?php /*
                  <div class="latest-post__cat_and_tags"> 
								  	<?php echo $theme->name; ?> 
								  	<span class="text-white"><?php echo the_category( ); ?>	 </span>	
 
								  	<?php the_tags(  ); ?>
								  </div><!-- end latest-post__cat_and_tags -->
                  //*/ ?>
                  <?php		
                  $this_excerpt = get_the_excerpt(  );
                  $this_excerpt_result =  wp_trim_words( $this_excerpt, 40, ' ...  '); 
                  ?>
                    <div onclick="location.href='<?php the_permalink(); ?>'" class="§ §--white my-2 ">
                      <?= $this_excerpt_result ?>
                    </div> 
                    <div class="d-flex">
								  	  
                      <span class="text-white">  <?php echo get_the_date(); ?></span>
					  			  </div> 
                  </div><!-- end col-12 col-lg-7 -->
                </div><!-- end row -->
              </div><!-- end container -->
              <hr>
            <?php }
          }
          else {
          ?>
            <h3 style='font-weight:bold; '>Nothing Found</h3>
            <div class="alert alert-info">
              <p>Sorry, but nothing matched your search criteria. Please try again with some different keywords.</p>
            </div>
          <?php
          } ?>




      </div>


    </div>
  </div>
</section>
<?php
get_footer();  