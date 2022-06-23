<?php  
  if( have_rows('section-hero') ):
    while( have_rows('section-hero') ): the_row();
      $title = get_sub_field('title');
      $content = get_sub_field('wysiwyg');
    $image = get_sub_field('image');
    $imageSize='2048x2048';
    $imageUrl=$image['sizes'][$imageSize];
?>
 
<section  
  id="hero"
  class="hero "
  style="background-image:url(<?= $imageUrl;?>)"
>  
  <?php /*<div class="hero__overlay" > //*/ ?>
    <div class="hero__container " >
      <div class="hero__row">
        <div class="hero__col" data-aos="fade-up" data-aos-duration="800" >
          <h1 class="hero__title"  > 
            <?= $title ?>
          </h1>
          <div class="hero__content "> 
            <?= $content?>
 
            <?php if ($link) :
              $link_url = $link['url'];
              $link_title = $link['title'];
              $link_target = $link['target'] ? $link['target'] : '_self';
            ?>
	          <div class="">
              <button
                type="button" 
                style="" 
                onclick="location.href='<?php echo $link_url ?>'"
                class="btn btn--hero btn--big" 
              >
                <p class="lead text-uppercase my-auto">
                  <?= $link_title ?>
                </p>  
              </button> 
            </div> 
          <?php endif;?>
          </div> 

        </div> <!--col -->

      </div>

    
    </div>

<?php /*  </div> //*/ ?>

</section>

  <?php endwhile; ?>
<?php endif; ?>
<?php
  get_template_part('partials/underhero');
?>
