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
  <header id="masthead" class="header">
    <div class="header__container"> 
      <div class="d-flex bg-black w-100 h-100"> 
        <input id="burger" class="burger " type="checkbox"/>
        <label class="burger burger--default" for="burger">
          <i></i>
        </label>
        <div class="burger-menu h-100 border ">
          <div class="p-2 h-100">
            <div class="burger-header">
              <h3>MENU</h3>
            </div>
            <div class="main-menu h-100 ">
              <?php
              wp_nav_menu( array(
              'theme_location'  => 'header-menu',
              'depth'           => 1, // 1 = no dropdowns, 2 = with dropdowns.
              'container'       => 'ul',
              'container_class' => ' ',
              'container_id'    => ' ',
              'menu_class'      => ' ',
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