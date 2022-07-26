<?php
/**
 * Template part for displaying multimedias videos cpt
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * 
 * 
 */

?> 
<?php  
  $imageUrl=get_the_post_thumbnail_url();

	 
?>   
 
<article  id="post-<?php the_ID(); ?>"
class="p-2  w-100 m-0 d-block border-top border-bottom"
style=" "
>
  <?php 
  if( have_rows('group_multimedia-videos') ): 
    while( have_rows('group_multimedia-videos') ): the_row();  
      $mp4 = get_sub_field('file');
      $type = get_sub_field('type');
      $duration = get_sub_field('duration');
      $year = get_sub_field('date');
  ?>

    <?php endwhile; ?>
  <?php endif ; ?>
  <div class="py-3 mb-2 border-bottom  title--centered">
            <video  class="" width="288" height="auto" controls>
              <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
            </video> 
            </div>
            <div class="py-1 mb-2 § title--centered d-flex  ">
              <span class="my-auto ml-auto mr-2 text-white "><?= $type ?>  </span>
              <span class="my-auto px-2 text-white border-left border-right"><?= $duration ?>  </span>
              <span class="my-auto ml-2 mr-auto text-white"><?= $year ?>  </span>
  </div>
 	<?php the_content(); ?>
</article><!-- #post-<?php the_ID(); ?> -->
