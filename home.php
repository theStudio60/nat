<?php
//
// Page actualités
//

get_header();
?> 

<?php 
/*
if ( has_post_thumbnail() ) { 
  $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );?>
    
  <div class="hero--page" style="background: url('<?php echo $backgroundImg[0]; ?>')">
 
    <div class="hero__container " >
      <div class="hero__row">
        <div class="hero__col" data-aos="fade-up" data-aos-duration="800" >
          <h1 class="hero__title"  > 
            <?php the_title(); ?>
          </h1>
        </div> <!--col -->
      </div>
    </div>
  </div>  
<?php } ;

//*/
?> 
                      
<div style="height:25vh;"></div>
<section class="section" >
  <div class="section__container">
    <div class="section__row">

      <div class="col-12 col-lg-8 p-0  bg-dark" >
        <h1 class="title title--white title--centered border">Actualité</h1>
        <?php $recent = new WP_Query( array(
          'posts_per_page' => -1,
          'order' => 'DESC',
          'post_type' => 'post', 
          'post_status' => 'publish'
          ));
          if ( $recent->have_posts() ) : 
            while ( $recent->have_posts() ) : $recent->the_post(); 
       ?>
              <div class="my-5   p-2">
                <div 
                onclick="location.href='<?php the_permalink(); ?>'"
                class="border my-2 "
                style="height:220px;background-image:url(<?php  echo wp_get_attachment_url(get_post_thumbnail_id( get_the_ID() ), 'thumbnail' )?>);background-repeat:no-repeat;background-size:cover;background-position:center;cursor:pointer"
                > 
                </div>
                <div class="w-100 d-flex p-2 border-top border-bottom">
                  <span class="ml-0 mr-2 my-auto px-2  border-left border-right § §--white ">
                    <?php echo the_date();?>
                  </span>
                  <h3
                   onclick="location.href='<?php the_permalink(); ?>'" 
                   class="subtitle subtitle--white my-auto ml-2" > <?php the_title(); ?>
                  </h3> 
                </div>
						  	<?php		
						  	$this_excerpt = get_the_excerpt(  );
						  	$this_excerpt_result =  wp_trim_words( $this_excerpt, 140, ' ...  '); 
						  	//echo $this_excerpt_result ;
						  	?>
						  	<p class="§ §--white § border-bottom py-2 my-2">
						  		<?= $this_excerpt_result ?>
                </p>
                <button 
                onclick="location.href='<?php the_permalink(); ?>'"
                class="button button--fluid mb-2">
                <i class="fa fa-arrow-right" aria-hidden="true"></i> 
                Lire la suite

                </button>
            </div>
	     

         <?php endwhile;
        wp_reset_postdata();
        endif;?>
      </div>

      <div class="col-12 col-md-10 col-lg-3 col-xl-4">
        <div class="m-0 p-0 d-flex flex-column">
          <div class="mt-0 mb-3 p-2 text-white border w-100 d-flex ">
            <?php 
            /*
            <button class="button button--fluid"  class="m-auto text-white"> 
            Rechercher
            </button>
            //*/
            ?>
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
          </div> 
          <div class="list group mb-3 p-2 text-white border-bottom § §--white w-100 d-flex ">
          <?php  
        
        
               
              $args = array(
         
                'smallest' => 16,
                'largest' => 32,
                'format' => 'flat',
                'unit' => 'px',
                'separator' => ' ',
                'exclude' => '20');
              wp_tag_cloud($args);
              

        ?>  
        </div>
 
      </div>

    </div>
  </div>
</section>

<?php
get_footer();