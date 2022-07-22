<?php
/**
 * Template part for displaying projets cpt
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * 
 * 
 */

?> 
<?php  
 // $imageUrl=get_the_post_thumbnail_url();
?>   
<article  id="post-<?php the_ID(); ?>"
class="p-0 w-100 mx-0 my-4 row "
style=" "
>

<?php if( have_rows('group_projet') ): ?>
  <?php while( have_rows('group_projet') ): the_row();  ?>
    <?php
    //$file = get_sub_field('image');
    //$type = get_sub_field('type');
    //$duration = get_sub_field('duration');
    $description = get_sub_field('description');
   
   // $repeaterCount = count(get_field(''));
   ?>    
    <?php if ($description) : ?>
    <div class="my-2 § §--white">

      <?=     $description   ?> 

    </div>
    <?php endif; ?>
    <?php if( have_rows('flex-accordion') ): ?>
      <?php while( have_rows('flex-accordion') ): the_row(); ?>
       
        <?php  if( get_row_layout() == 'box-accordion_flex') : ?>
          <?php  //while( have_rows('box-accordion_flex') ): the_row(); ?>

          <?php $title = get_sub_field('title'); ?>
          <?php $content = get_sub_field('wysiwyg'); ?>
          <?php $image = get_sub_field('image'); ?>
          <?php $boxID = get_sub_field('jsID'); ?>
 
              <?php // endwhile; ?>
          <div id="accordion<?= $boxID ?>" class="w-100" >
            <div class="c" id="heading<?= $boxID ?>">
              <h5 class="mb-0">
                <button class="button button--fluid p-4 my-2" data-toggle="collapse" data-target="#collapse<?= $boxID ?>" aria-expanded="false" aria-controls="collapse<?= $boxID ?>">
                  <?= $title ?>  <?php //  echo  the_ID();?>
                </button>
              </h5>
            </div>
          
            <div id="collapse<?= $boxID ?>" class="collapse " aria-labelledby="heading<?= $boxID ?>" data-parent="#accordion<?= $boxID ?>">
              <div class="§ §--white text-white mt-1 mb-5">
                <?= $content ?>   
                <?php if ($image) : ?>
                
                  <img class="img-thumbnail" src="<?php echo $image[url] ?>" alt="">
                <?php endif; ?>
              </div>
            </div>
          </div>
 	      <?php //  the_content(); ?>
        <?php endif;?>
      <?php endwhile; ?>
    <?php endif;?>
  <?php endwhile;?>
<?php endif;?> 
</article><!-- #post-<?php the_ID(); ?> -->