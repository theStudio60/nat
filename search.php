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
        <div class="§ §--white p-3 border">
            <form
             role="search" method="get" id="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="input-group my-auto p-0  " 
             style="
             
              
             "
            >
              <div class="bg-dark d-flex w-100">
                <input type="hidden" value="post" name="post_type" id="post_type" />
                <input
                 type="search"
                 style=" border:0; font-size:24px;"
                 class="text-white bg-dark form-control my-auto ml-1 mr-auto w-75" 
                 placeholder="Rechercher" 
                 aria-label="rechercher" 
                 name="s" 
                 id="search-input" 
                 value="<?php echo esc_attr( get_search_query() ); ?>"
                >
                <button type="submit" class=" ml-auto border bg-dark text-white p-1 w-25">
                  <i  class="fa far fa-search fa-sm  "></i>
                </button>
              </div>
            </form> 






              <?php // get_search_form(); ?>   

        </div>
    
        <?php
        $s=get_search_query();
        $args = array('s' =>$s, 'post_type' => array('post','oeuvre','projet','video','son','graphisme','texte') );
        // The Query
        $the_query = new WP_Query( $args );
        if ( $the_query->have_posts() ) {
          _e("<h3 class='text-white section__subtitle mx-4 mx-lg-0  my-5' style='font-weight:bold; '><i class='my-auto mr-3 text-white fa far fa-search fa-sm' ></i>".get_query_var('s')."</h3>");
          while ( $the_query->have_posts() ) {
            $the_query->the_post();
            ?>


            <div class="container  mb-3 py-3 "  onclick="location.href='<?php // the_permalink(); ?>'"  >
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

                </div><!-- end col-12 col-lg-7 -->
              </div><!-- end row -->
            </div><!-- end container -->
            
          <hr class="p-1 bg-white">
        <?php }
          }
          else {
          ?>
           <div class="container  border-bottom mb-5 py-3 "   >
                  <div class="row  ">
                    <div class="col-12  "  href="<?php site_url(); ?>">
           
                      <div class="§ §--white">
                        <p>Désolé, mais rien ne correspond à vos critères de recherche. Veuillez réessayer avec d'autres mots-clés.</p>
                      </div>
                    </div>
                  </div>
          </div>
          <?php
          } 
          ?>
        </div>
      </div>
    </div>
  </div>
</section>
<?php
get_footer();  