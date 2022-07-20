<?php
/**
 * Template Name: page Projets
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
     
  
        <h1 class="title title--white title--centered border"><?php the_title();?></h1>

 
        <p class="§ §--white pt-0">
              
        <?php
        while ( have_posts() ) :
          the_post(); the_content();
        endwhile; 
        ?>    
        </p>

        <div id="accordion1" class="p-2" >
          <div class="card-header" id="heading1">
            <h5 class="mb-0">
              <button class="button button--fluid p-4 my-2" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Collapsible Group Item #1
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse " aria-labelledby="heading1" data-parent="#accordion1">
            <p class="text-white mt-1 mb-5">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </p>
            </div>
          </div>
        </div>
      



 

 

    </div>
    </div>
  </div>
</section>

<?php
get_footer(); 