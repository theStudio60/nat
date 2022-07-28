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
          <?php $image = get_sub_field('main-image'); ?>
       
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
                  <img class="img-fluid border" src="<?php echo $image[url] ?>" alt="">
                <?php endif; ?>
                
                <?php if( have_rows('flex-item') ): ?>
                  <?php while( have_rows('flex-item') ): the_row(); ?>
                    <?php  if( get_row_layout() == 'image') : ?>
                      <?php $img = get_sub_field('image');  ?>
                      <?php if ($img ) :?>
                        <div class="py-4">

                          <img  class="d-none d-xl-block border" width="708" src="<?= $img['url'] ?>"> 
 
                          <img class="d-none d-lg-block d-xl-none border" width="664" src="<?= $img['url'] ?>"/> 

                          <img class="d-none d-md-block d-lg-none border" width="543" src ="<?= $img['url'] ?>"/> 

                          <img class="d-none d-sm-block d-md-none border" width="478" src="<?= $img['url'] ?>"/> 

                          <img class="d-block d-sm-none mx-auto" width="288" height="auto" src="<?= $img['url'] ?>" /> 
 
                        </div>
                        <?php // var_dump($img) ; ?>
                      <?php endif;?>
                    <?php endif;?>

                    <?php  if( get_row_layout() == 'wysiwyg') :?>
                      <?php $thisContent = get_sub_field('wysiwyg'); ?>
                      <?= $thisContent ?>
                    <?php endif;?>

                    <?php  if( get_row_layout() == 'audio') :?>
                      <?php $thisFile = get_sub_field('audio'); ?>
                      <audio id="audio<?php echo the_ID() ?>"  class="d-block w-100 my-2 border audio-player" controls >
                        <source src="<?= $thisFile['url'] ?>" type="audio/mpeg "> 
                      </audio>
              
                    <?php endif;?>

                    <?php  if( get_row_layout() == 'video') : ?>
                      <?php $mp4 = get_sub_field('video'); ?>
                      <?php  if ($mp4) :?> 
                        <div class="py-4">
                          <video  class="d-none d-xl-block" width="708" height="auto" controls>
                            <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
                          </video> 
                          <video class="d-none d-lg-block d-xl-none" width="664" height="auto" controls>
                            <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
                          </video> 
                          <video class="d-none d-md-block d-lg-none" width="543" height="auto" controls>
                            <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
                          </video> 
                          <video class="d-none d-sm-block d-md-none" width="478" height="auto" controls>
                            <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
                          </video> 
                          <video class="d-block d-sm-none mx-auto" width="288" height="auto" controls>
                            <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
                          </video> 
                        </div>
                      <?php endif; ?> 
                    <?php endif;?>
                  <?php endwhile; ?>
                <?php endif;?>

              </div>
            </div>
          </div>
        <?php endif;?>

       
        <?php  if( get_row_layout() == 'box-accordion-image_flex') : ?>
          <?php  //while( have_rows('box-accordion_flex') ): the_row(); ?>

          <?php $title = get_sub_field('title'); ?>
          <?php $titleImage = get_sub_field('title-image'); ?>
          <?php $content = get_sub_field('wysiwyg'); ?>
          <?php $image = get_sub_field('main-image'); ?>
       
          <?php $boxID = get_sub_field('jsID'); ?>
 
          <?php // endwhile; ?>
          <div id="accordion<?= $boxID ?>" class="w-100" >
            <div class="c" id="heading<?= $boxID ?>">
              <h5 class="mb-0">
                <button class="button button--fluid p-4 my-2" data-toggle="collapse" data-target="#collapse<?= $boxID ?>" aria-expanded="false" aria-controls="collapse<?= $boxID ?>">
                  <?= $title ?>  <?php //  echo  the_ID();?>
                  <?php if ($titleImage ) :?>
                        <div class="py-4">

                          <img  class="d-none d-xl-block mx-auto" style="max-width:480px;"  src="<?= $titleImage['url'] ?>"> 
 
                          <img class="d-none d-lg-block d-xl-none mx-auto" style="max-width:400px;" src="<?= $titleImage['url'] ?>"/> 

                          <img class="d-none d-md-block d-lg-none mx-auto" style="max-width:320px;" src="<?= $titleImage['url'] ?>"/> 

                          <img class="d-none d-sm-block d-md-none mx-auto" style="max-width:256px;" src="<?= $titleImage['url'] ?>"/> 

                          <img class="d-block d-sm-none mx-auto" style="max-width:240px;" src="<?= $titleImage['url'] ?>" /> 
 
                        </div>
                        <?php // var_dump($img) ; ?>
                  <?php endif;?>
                </button>
              </h5>
            </div>
            <div id="collapse<?= $boxID ?>" class="collapse " aria-labelledby="heading<?= $boxID ?>" data-parent="#accordion<?= $boxID ?>">
              <div class="§ §--white text-white mt-1 mb-5">
                <?= $content ?>  
                <?php if ($image) : ?>
                  <img class="img-fluid border" src="<?php echo $image[url] ?>" alt="">
                <?php endif; ?>
                
                <?php if( have_rows('flex-item') ): ?>
                  <?php while( have_rows('flex-item') ): the_row(); ?>
                    <?php  if( get_row_layout() == 'image') : ?>
                      <?php $img = get_sub_field('image');  ?>
                      <?php if ($img ) :?>
                        <div class="py-4">

                          <img  class="d-none d-xl-block border" width="708" src="<?= $img['url'] ?>"> 
 
                          <img class="d-none d-lg-block d-xl-none border" width="664" src="<?= $img['url'] ?>"/> 

                          <img class="d-none d-md-block d-lg-none border" width="543" src ="<?= $img['url'] ?>"/> 

                          <img class="d-none d-sm-block d-md-none border" width="478" src="<?= $img['url'] ?>"/> 

                          <img class="d-block d-sm-none mx-auto" width="288" height="auto" src="<?= $img['url'] ?>" /> 
 
                        </div>
                        <?php // var_dump($img) ; ?>
                      <?php endif;?>
                    <?php endif;?>

                    <?php  if( get_row_layout() == 'wysiwyg') :?>
                      <?php $thisContent = get_sub_field('wysiwyg'); ?>
                      <?= $thisContent ?>
                    <?php endif;?>

                    <?php  if( get_row_layout() == 'audio') :?>
                      <?php $thisFile = get_sub_field('audio'); ?>
                      <audio id="audio<?php echo the_ID() ?>"  class="d-block w-100 my-2 border audio-player" controls >
                        <source src="<?= $thisFile['url'] ?>" type="audio/mpeg "> 
                      </audio>
              
                    <?php endif;?>

                    <?php  if( get_row_layout() == 'video') : ?>
                      <?php $mp4 = get_sub_field('video'); ?>
                      <?php  if ($mp4) :?> 
                        <div class="py-4">
                          <video  class="d-none d-xl-block" width="708" height="auto" controls>
                            <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
                          </video> 
                          <video class="d-none d-lg-block d-xl-none" width="664" height="auto" controls>
                            <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
                          </video> 
                          <video class="d-none d-md-block d-lg-none" width="543" height="auto" controls>
                            <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
                          </video> 
                          <video class="d-none d-sm-block d-md-none" width="478" height="auto" controls>
                            <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
                          </video> 
                          <video class="d-block d-sm-none mx-auto" width="288" height="auto" controls>
                            <source src="<?= $mp4['url'] ?>" type="video/mp4"> 
                          </video> 
                        </div>
                      <?php endif; ?> 
                    <?php endif;?>
                  <?php endwhile; ?>
                <?php endif;?>

              </div>
            </div>
          </div>
        <?php endif;?>



      <?php endwhile; ?>
    <?php endif;?>
  <?php endwhile;?>
<?php endif;?> 
</article><!-- #post-<?php the_ID(); ?> -->