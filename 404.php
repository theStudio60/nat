<?php get_header(); ?>
<section class="section">
    <div class="section__container">
        <h1><?= __("Page not found"); ?></h1>
        <p><?= sprintf(__("It looks like nothing was found at this location. Maybe try visiting %s directly?"), '<a href="'.get_home_url().'">'.get_home_url().'</a>') ?></p>
    </div>
</section >
<?php get_footer(); ?>
