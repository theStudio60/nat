<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package studio_soixante
 */
 // $parent_title = get_the_title($post->post_parent);

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    
    <?php wp_head(); ?>
  <!--  
   preloader style
  -->
  <style>
/** Preloader Overlay **/

<?php
$custom_logo_id = get_theme_mod( 'custom_logo' );
$logotype = wp_get_attachment_image_src( $custom_logo_id , 'medium' );
?>
#load {
    display: block;
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    overflow:hidden;
    z-index: 9901;
    opacity: 1;
    background-color: #fff;
    visibility: visible;
    -webkit-transition: all .35s ease-out;
    transition: all .35s ease-out;
}
#load.loader-removed {
    opacity: 0;
    visibility: hidden;
}
.overlay-loader .load-wrap {
    background-image: url("<?php echo $logotype[0];?>");
    background-position: center center;
    background-repeat: no-repeat;
    text-align: center;
    width: 100%;
    height: 100%; 
}
  </style>

</head>

<div id="load" class="overlay-loader">
  <div class="load-wrap">
    <script type="text/javascript">
    // preloader script
    //* // Javascript function to display loader on page load

        document.addEventListener("DOMContentLoaded", function(event) {
            var $load = document.getElementById("load");
            var removeLoading = setTimeout(function() {
                $load.className += " loader-removed";
            }, 400);
        });
    //*/
    </script>
  </div>
</div> 
<script>
//*
document.addEventListener("mousemove", function(event) {
  const cursor = document.querySelector(".cursor");
  const x = event.pageX - cursor.clientWidth / 2;
  const y = event.pageY - cursor.clientHeight / 2;
  cursor.style = `transform: translate3d(${x}px,${y}px,0px)`;

  if (y > 10) {
    if (!cursor.classList.contains("blend")) {
      cursor.classList.add("blend");
    }
  }

  if (y > 100 || y < 10) {
    if (cursor.classList.contains("blend")) {
      cursor.classList.remove("blend");
    }
  }
});
//*/




</script> 


<body class="page-wrapper">
  <?php wp_body_open(); ?>
 <div class="cursor" id="cursor">
  <div class="circle" id="circle"></div>
  </div>
  <?php if( have_rows('website_settings', 'option') ): ?>
    <?php while( have_rows('website_settings', 'option') ): the_row(); ?>
      <?php if( have_rows('popup_alert') ): ?>
        <?php while( have_rows('popup_alert') ): the_row(); ?>
          <?php if ( 'oui' == get_sub_field('alert_condition') ): ?>
            <?php get_template_part('partials/popup'); ?>
          <?php endif; ?>
        <?php endwhile; ?>
      <?php endif; ?>
    <?php endwhile; ?>
  <?php endif; ?>
 
  <?php 
//get_template_part("partials/header/navbar-desktop"); 
//get_template_part("partials/header/navbar-mobile"); 
  ?>



  <header id="masthead" class="header">
    <div class="header__container"> 
      <div class="d-flex p-2 bg-black w-100 h-100"> 
         
      
        <input id="burger" class="burger " type="checkbox"/>
        <label class="burger burger--default" for="burger">
          <i></i>
 
        </label>

        <div class="burger-menu h-100 border ">



        <div class="p-2 border">
        <div class="burger-header">

            <h3 class="text-black">MENU</h3>
        </div>
        <div class="main-menu my-auto border m-2">
          <?php
          wp_nav_menu( array(
          'theme_location'  => 'header-menu',
          'depth'           => 1, // 1 = no dropdowns, 2 = with dropdowns.
          'container'       => 'div',
          'container_class' => 'd-block border p-2 m-2 ',
          'container_id'    => ' ',
          'menu_class'      => 'd-flex flex-column',
          'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
          'walker'          => new WP_Bootstrap_Navwalker(),
          ));
 
          ?>

          </div>

        </div>
          
        </div> 
 

      </div>

      
    </div>
  </div>    
</header>
<?php /*
 
<div class="cookienotice-box" style="">
  <div class="m-0 p-0 d-flex">
    <a href="" class="cookienotice-box__close">X</a>
  </div>
  <p class="cookienotice-box__§">
      We use cookies to improve your experience on our site. To find out more, read our privacy policy.
  </p>
  <a href="" class="cookienotice-box__link">Accepter</a>
</div> 
    <button class="btn button--scrollToTop"><span class="fa far fa-arrow-up text-white"></span></button>

//*/ ?>


<?php 