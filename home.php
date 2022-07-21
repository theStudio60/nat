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
          'post_type' => 'post', /* your post type name */
          'post_status' => 'publish'
        ) );

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
                  <div class="ml-0 mr-2 my-auto px-2  border-left border-right § §--white ">
                    <?php echo the_date();?>
                  </div>
                  <h3
                  onclick="location.href='<?php the_permalink(); ?>'" 
                  class="subtitle subtitle--white my-auto ml-2" > <?php the_title(); ?>  </h3> 
              </div>
						  	<?php		
						  	$this_excerpt = get_the_excerpt(  );
						  	$this_excerpt_result =  wp_trim_words( $this_excerpt, 140, ' ...  '); 
						  	//echo $this_excerpt_result ;
						  	?>
						  	<div class="§--white § border-bottom py-2 my-2">
						  		<?= $this_excerpt_result ?>
						  	</div>
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

      <div class="col-12 col-lg-4 bg-black">
        <div class="w-100 border d-flex ">
          <h3 class="  text-white m-auto">Recherche</h3>

        </div>

        
      </div>

    </div>
  </div>
</section>

<?php
get_footer();