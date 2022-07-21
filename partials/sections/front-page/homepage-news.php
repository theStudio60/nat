
<section id=" " class="section section--homepage--news">
  <div class="section__container">
    <div class="section__row">
    <div class="col-12 col-lg-8 p-0  bg-dark" >
        <h1 class="title title--white title--centered border">Actualité</h1>
        <?php $recent = new WP_Query( array(
          'posts_per_page' => 3,
          'order' => 'DESC',
          'post_type' => 'post', /* your post type name */
          'post_status' => 'publish'
        ) );

        if ( $recent->have_posts() ) : 
          while ( $recent->have_posts() ) : $recent->the_post(); 
       ?>
            <div class="my-5   p-2">
 
              <div class="w-100 d-flex p-2 border-top border-bottom">
                  <div class="ml-0 mr-2 my-auto px-2  border-left border-right § §--white ">
                    <?php echo the_date("d.m.Y");?>
                  </div>
                  <h3 class="subtitle subtitle--white  my-auto ">
                    <?php the_title(); ?> 
                  </h3> 
       
              </div>
						  	<?php		
						  	$this_excerpt = get_the_excerpt(  );
						  	$this_excerpt_result =  wp_trim_words( $this_excerpt, 60, ' ...  '); 
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


    </div>
  </div>
</section>