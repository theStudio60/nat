<footer class="footer m-0 p-0 w-100 " > 
  <div class="footer__container">
 
    <div class="footer__row d-flex ">
      <div class="footer__bottom ">
        <span style="font-size:12px">
          © <?= date('Y');?> - <?= get_bloginfo(); ?> 
        </span> 
        <span class="mx-2" style="font-size:12px">
           <?php // printf( esc_html__( 'Conception & Développement : %2$s', 'studio60' ), 'studio60', '<a class="text-uppercase" href="http://www.studio60.ch">STUDIO60</a>' );?>
        </span> 
        <?php /*
        <span style="font-size:12px">
          <a class=""href="<?= get_home_url() ?>/login"><i class="text-white fa fa-lock"></i></a>
        </span>
        //*/ ?>
      </div>
    </div><!-- end row -->

  </div><!-- end container -->
 
</footer>

<?php wp_footer(); ?>
</body>
</html>
