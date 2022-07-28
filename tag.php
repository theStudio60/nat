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
style=" <?php  if ($thisTag == "tags" ):  echo "min-height:30vh!important;"; endif;?>"
class=" section <?php // if ($thisTag == "tags" ):  echo "section h-100"; endif;?>"
>
  <div class="section__container">
    <div class="section__row">
      <div class="col-12 col-md-10 col-lg-9 col-xl-8">
        <h3 class="border title title--white title--centered " >Tags</h3>
        <ul class="mx-0 px-0 d-flex w-100 § §--white text-white" style="a{color:#fff;}">
              <?php
              $tags = get_tags();
              if ( $tags ) :
                  foreach ( $tags as $tag ) : ?>
                      <li class="mx-1"><a style="color:#fff!important;"  href="<?php echo esc_url( get_tag_link( $tag->term_id ) ); ?>" title="<?php echo esc_attr( $tag->name ); ?>"><?php echo esc_html( $tag->name ); ?>,</a></li>
                  <?php endforeach; ?>
              <?php endif; ?>
          </ul>
        <?php 
        /*
        $args = array(
          
          'smallest' => 15,
          'largest' => 40,
          'format' => 'flat',
          'unit' => 'px',
          'separator' => ' ',
          'exclude' => '20');


          wp_tag_cloud($args);
        //*/
        
        ?> 
        <hr>
        <?php
        if ($thisTag == "tags" ): 
        ?>
        <?php 
        else :
        ?>
          <h3 class="mt-5 border-top p-2 text-white">
            <b> 
            Liste des articles contenant le tag "<?= $thisTag ?>" : 
            </b>
          </h3>
          <?php 
              $uu_id=get_current_user_id();
              $args = array(
                  'posts_per_page'   => -1,
                  'tag' => $thisTag ,
                  'post_type'        => array('post','oeuvres','projet','textes'),
                  'post_status'      => 'publish'
              );

              $posts_array = get_posts( $args );
              echo '<ul class="ml-0 mt-2 p-0 ">';
              foreach ( $posts_array as $post ) : setup_postdata( $post );
                 $url = $post->guid;
                  //echo"<li><a href='".$url."'>" .$post->post_title."</a></li>";
                  ?>
                  <div class="row m-0 p-0">  
                    <?php /*
                    <div
						      	class="col-12 col-lg-6 d-flex"
						      	onclick="location.href='<?= $url ?>'"
						      	> 
						      		<div class=" " style="background-image:url(<?php echo $post->post_thumnail ?>)" >		

						      		</div>
						      	</div>
                    //*/ ?>
						      	<div class="col-12 col-lg-6 my-4 border">
                      <a href="<?php the_permalink(); ?>" class="py-2">
                         <span onclick="location.href='<?php the_permalink(); ?>'"  class="w-100 § §--white"><?php the_title(); ?></span>
                      </a>


                    </div>
                  </div>
                  <?php
              endforeach; 
              echo '</ul>';
              wp_reset_postdata();
              ?>
            <?php endif ; ?>
          </div>
        </div>
      </div> 
</section>

<?php get_footer();