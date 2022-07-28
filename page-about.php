<?php
/**
 * Template Name: page Biographie
 *
 * @package studio_soixante
 */
get_header(); 
?> 
<div style="height:25vh;"></div>
<section id=" " class="section">
  <div class="section__container">
    <div class="section__row">
      <div class="col-12 col-md-10 col-lg-9 col-xl-8">
        <h1 class="title title--white title--centered border"><?php bloginfo("name");?></h1>
        <p class="§ §--white pt-0">
          <?php
          while ( have_posts() ) :
            the_post(); the_content();
          endwhile;
          ?>    
        </p>
      </div>
    </div>
  </div>
</section>
<?php if( have_rows('group_about-page') ): ?>
  <?php while( have_rows('group_about-page') ): the_row();?>
    <?php if( have_rows('group_about') ): ?>
      <?php while( have_rows('group_about') ): the_row();?> 
        <?php $wysiwyg = get_sub_field('wysiwyg'); ?>
        <?php $thisImage = get_sub_field('image'); ?>
        <section id=" " class="section">
          <div class="container-fluid p-5">
            <div class="section__row">
              <div class="col-12 col-lg-6 order-2 order-lg-1 my-5 my-lg-auto ">
                <picture> 
                  <img src="<?= $thisImage['url'] ?> "
                  class="img-fluid border" alt=" <?=$thisImage['title'] ?>">
                </picture>
              </div>
              <div class="col-12 col-lg-6 order-1 order-lg-2  my-5 my-lg-auto">
                <h1 class="title title--white title--centered border"><?= the_sub_field('title') ?></h1>
                <div class="§ §--white pt-0 border--bottom py-2 ">
                  <?= $wysiwyg ?>
                </div>
              </div>
            </div>
          </div>
        </section>
      <?php endwhile; ?>
    <?php endif; ?>
    <?php if( have_rows('group_cv') ): ?>
      <?php while( have_rows('group_cv') ): the_row();  ?>
        <?php //$title = get_sub_field('title'); ?>
        <?php $wysiwyg = get_sub_field('wysiwyg'); ?>
        <?php $thisImage = get_sub_field('image'); ?>
        <?php $link_download = get_sub_field('link_download'); ?>
        <section id=" " class="section">
          <div class="container-fluid p-5">
            <div class="section__row">
              <h1 class="title title--white title--centered border"><?= the_sub_field('title') ?></h1>
              <div class="col-12 my-5 py-3 my-lg-auto border-top">
                <picture class=""> 
                  <img src="<?= $thisImage['url'] ?> "
                  class="img-fluid border" alt="<?=$thisImage['title'] ?>">
                </picture>

                <button onclick="location.href='<?= $thisImage['url'] ?>'" download="<?= $thisImage['title'] ?>"  class="button button--fluid my-2">
                      <?= $link_download ?>
                </button> 
              </div>
            </div>
          </div>
        </section>
      <?php endwhile; ?>
    <?php endif; ?>
  <?php endwhile; ?>
<?php endif; ?>
<?php get_footer();

