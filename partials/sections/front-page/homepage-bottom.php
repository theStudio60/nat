
<section id="" class="my-5 ">
  <div class="section__container p-0">
    <div class="section__row">
      <div class="col-12 col-lg-9">
        <div class="section__content">
          <?php if( have_rows('group_frontpage') ): ?>
            <?php while( have_rows('group_frontpage') ): the_row();  ?>
              <?php if( have_rows('group_bottom') ): ?>
                <?php while( have_rows('group_bottom') ): the_row();  ?>
                  <?php if( have_rows('repeater_bottom') ): ?>
                    <?php while( have_rows('repeater_bottom') ): the_row(); ?>
                      <?php if( have_rows('group') ): ?>
                        <?php while( have_rows('group') ): the_row(); ?>
                          <?php
                          $link = get_sub_field('link');
                          ?>
                          <button onclick="location.href='<?= $link['url'] ?>'"  class="button button--fluid my-2 py-2 ">
                            <?= $link['title'] ?>
                          </button>  
                        <?php endwhile; ?>
                      <?php endif; ?>
                    <?php endwhile; ?>
                  <?php endif; ?>
                <?php endwhile; ?>
              <?php endif; ?>
            <?php endwhile; ?>
          <?php endif; ?>  
        </div>
      </div>
    </div>
  </div>
</section> 