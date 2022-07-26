<?php
/*
Template Name: Page Tags
*/ 
$url =  "//{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
$escaped_url = htmlspecialchars( $url, ENT_QUOTES, 'UTF-8' );
$expurl = explode('/', $escaped_url); 
$thisTag =  $expurl[sizeof($expurl)-2];
?>
<?php
get_header();  
?>
<div style="height:25vh;"></div>
<section 
style=" <?php  if ($thisTag == "tags" ):  echo "min-height:70vh!important;"; endif;?>"
class=" section <?php // if ($thisTag == "tags" ):  echo "section h-100"; endif;?>">
  <div class="section__container">
    <div class="section__row">

    <div class="col-12 col-md-10 col-lg-9 col-xl-8">
        <h3 class="border title title--white text-dark " >Tags</h3>
        <?php 
        
        $args = array(
          'smallest' => 15,
          'largest' => 40,
          'format' => 'flat',
          'unit' => 'px',
          'separator' => ' ',
          'exclude' => '20');
          wp_tag_cloud($args);
        ?> 
        <hr>
        <?php
        if ($thisTag == "tags" ): 
        ?>
        <?php 
        else :
        ?>
          <h3 class="mt-5 p-2 text-secondary ">
            <b> 
            Liste des articles contenant le tag "<?= $thisTag ?>" : 
            </b>
          </h3>
          
        <?php endif ; ?>

        <?php $the_query= new WP_Query( 'tag='.$thisTag );
        
        if ( $the_query -> have_posts() ){
          
          echo '<ul class="ms-0 mt-5 p-0 ">';
          
          while ( $the_query->have_posts() ){
            $the_query->the_post();
            ?>
            <div class="row my-5 p-0">  
              <div
							class="col-12 <?php /*col-md-9 //*/ ?> col-lg-6 d-flex"
							onclick="location.href='<?php the_permalink(); ?>'"
							> 
								<div class="theme-latest-post-h__thumbnail d-flex" style="background-image:url(<?php echo get_the_post_thumbnail_url(); ?>)" >		
 
								</div>
							</div>
							<div class="col-12 col-lg-6 my-auto">
                <a href="<?php the_permalink(); ?>" class="text-dark">
                   <h1 onclick="location.href='<?php the_permalink(); ?>'"  class="text-dark   recent-post__title"><?php the_title(); ?></h1>
                </a>
                <div class="latest-post__cat_and_tags"> 
                  <?php echo $theme->name; ?> 
                  <span class="latest-post__cat_and_tags__cat"><?php echo the_category( ); ?>	 </span>	
								 
									 
								</div>
                <?php		
                $this_excerpt = get_the_excerpt(  );
                $this_excerpt_result =  wp_trim_words( $this_excerpt, 40, ' ...  '); 
                ?>
                <div onclick="location.href='<?php the_permalink(); ?>'" class="post__excerpt"><?= $this_excerpt_result ?></div>
                <br>
                <div class="d-flex">
									<span class="latest-post__author"><?php the_author(); ?></span>
									<span class="my-auto mx-1 "> . </span>
                  <span class="latest-post__date">  <?php echo get_the_date(); ?></span>
								</div>
              </div>
            </div>
            <hr>
              <?php
            }
            echo '</ul>';
          } else {
            echo "";
          }
          ?>
          </div>
        </div>
      </div> 
</section>

<?php get_footer();