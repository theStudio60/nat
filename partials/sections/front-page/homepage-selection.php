<?php if( have_rows('group_frontpage') ): ?>
    <?php while( have_rows('group_frontpage') ): the_row();  ?>
      <?php if( have_rows('group_selection') ): ?>
        <?php while( have_rows('group_selection') ): the_row();  ?>
          <?php $title = get_sub_field('title'); ?>
          <?php $link = get_sub_field('link'); ?>
        <?php endwhile; ?>
      <?php endif; ?>
    <?php endwhile; ?>
  <?php endif; ?>
<section id="" class="section section--homepage--selection">
  <div class="container p-4">
    <div class="row">
      <div class="col-12 col-lg-8 p-0" >
        <h1 class="title title--white title--centered border bg-dark"><?= $title ?></h1>
      </div>
    </div>
  </div>
  <div class="container-fluid w-100 border--top border--bottom bg-dark" >
    <div class="row p-4">
      <?php if( have_rows('group_frontpage') ): ?>
        <?php while( have_rows('group_frontpage') ): the_row();  ?>
          <?php if( have_rows('group_selection') ): ?>
            <?php while( have_rows('group_selection') ): the_row();  ?>
              <?php if( have_rows('repeater_selection') ): ?>
                <?php while( have_rows('repeater_selection') ): the_row(); ?>
                  <?php
                  $featured_post = get_sub_field('post_toshow');
                  if( $featured_post ): ?>
                    <?php $featured_img_url = get_post_thumbnail_id( $featured_post->ID ); ?>
                    <a href="<?php echo get_permalink( $featured_post );  ?>" class="col-12 col-lg-4 my-3">
                      <div
                        class="image-wrapper image-wrapper--large border"
                        style="background:url(
                             <?php  echo wp_get_attachment_image_url( $featured_img_url, 'large' ); ?>
                          )";
                      > 
                          <div class="image-wrapper__overlay ">
                            <div class="image-wrapper__content">
                              <div class="d-flex h-100">
                                <h3 class="p-2 my-auto"><?php echo esc_html( $featured_post->post_title ); ?> </h3>
                              </div>
                            </div>
                          </div>
                      </div> 
                    </a> 
                  <?php endif; ?>
                <?php endwhile; ?>
              <?php endif; ?>
            <?php endwhile; ?>
          <?php endif; ?>
        <?php endwhile; ?>
      <?php endif; ?> 
    </div>                 
  </div>
  <div class="container p-4">
    <div class="row">
      <div class="col-12 col-lg-8 p-0" >
        <?php if( have_rows('group_frontpage') ): ?>
          <?php while( have_rows('group_frontpage') ): the_row();  ?>
            <?php if( have_rows('group_selection') ): ?>
              <?php while( have_rows('group_selection') ): the_row();  ?>
                <button onclick="location.href='<?= site_url() ; ?>/oeuvres/<?= $link['url'] ?>'"  class="button button--fluid my-2 py-2 ">
                  <?= $link['title'] ?>
                </button>  
              <?php endwhile; ?>
            <?php endif; ?>
          <?php endwhile; ?>
      <?php endif; ?> 
    </div>
  </div>
</section>