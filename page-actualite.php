<?php
/**
 * Template Name: Page Actualité
 *
 * @package studio_soixante
 */
get_header();
?>
<div class="d-none d-lg-block" style="height:25vh;"></div>
 <section id=" " class="section">
  <div class="section__container">
    <div class="section__row">
      <div class="col-12 col-md-10 col-lg-9 col-xl-8">
            <h1 class="title title--white title--centered border"><?php the_title();?></h1>
            <p class="§ §--white pt-0">
            <?php while ( have_posts() ) :  the_post(); the_content(); endwhile;  ?>
            </p>
      </div>
      <div class="col-12 col-md-10 col-lg-3 col-xl-4">
        <div class="m-0 p-0 d-flex flex-column">
          <div class="mt-0 mb-3 p-2 text-white border w-100 d-flex ">
            <button class="button--fluid"  class="m-auto text-white"> 
            Rechercher
            </button>
            <form
             role="search" method="get" id="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="input-group my-auto p-0 ms-0 me-auto" 
             style="
              max-width:240px;
              border-bottom:1px solid #3d3d3d;
             "
            >
              <div class="bg-white d-flex">
                <input type="hidden" value="post" name="post_type" id="post_type" />
                <input
                 type="search"
                 style=" border:0; "
                 class="bg-white form-control  m-1" 
                 placeholder="Rechercher" 
                 aria-label="rechercher" 
                 name="s" 
                 id="search-input" 
                 value="<?php echo esc_attr( get_search_query() ); ?>"
                >
                <button type="submit" class="btn button--inverse btn-sm p-1">
                  <i  class="fa far fa-search fa-md m-2 "></i>
                </button>
              </div>
            </form> 
          </div> 
          <div class="list group mb-3 p-2 text-white border-bottom § §--white w-100 d-flex ">
          <?php  
        
  
               
              $args = array(
         
                'smallest' => 16,
                'largest' => 32,
                'format' => 'flat',
                'unit' => 'px',
                'separator' => ' ',
                'exclude' => '20');
              wp_tag_cloud($args);
              

        ?>  
        </div>
 
      </div>
    </div>
  </div>
</section>
<?php
get_footer();  