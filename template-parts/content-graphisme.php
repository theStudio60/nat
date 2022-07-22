<?php
/**
 * Template part for displaying multimedias graphismes cpt
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
class="p-2  w-100 m-0 d-block"
style=" "
>
<?php
if( have_rows('group_multimedia-graphisme') ): 
                   while( have_rows('group_multimedia-graphisme') ): the_row();  
                     $file = get_sub_field('image');
                     //$type = get_sub_field('type');
                     //$duration = get_sub_field('duration');
                     $year = get_sub_field('date');
                      
                  ?>
                   <?php endwhile; ?>
                 <?php endif ; 
                 ?>
       <img src="<?php echo $file[url] ?>" alt="">
<?= $date ?>

 	<?php the_content(); ?>


</article><!-- #post-<?php the_ID(); ?> -->
