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
              
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et veniam expedita, at esse magnam perferendis nemo asperiores aliquid sequi quisquam id sapiente distinctio ab? Optio porro debitis placeat saepe!
          </p>
   <?php
   while ( have_posts() ) :
    the_post(); the_content();
  endwhile;
   
   ?>
    
      </div>


    </div>
  </div>
</section>

<section id=" " class="section">
  <div class="container-fluid p-5">
    <div class="section__row">

      
      <div class="col-12 col-lg-6 order-2 order-lg-1 my-5 my-lg-auto ">
     
  
        <picture> 
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
          class="img-fluid img- " alt="...">
        </picture>

 
      </div>

      <div class="col-12 col-lg-6 order-1 order-lg-2  my-5 my-lg-auto">
  

        <h1 class="title title--white title--centered border">À propos</h1>

        <p class="§ §--white pt-0 border--bottom py-2 ">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et veniam expedita, at esse magnam perferendis nemo asperiores aliquid sequi quisquam id sapiente distinctio ab? Optio porro debitis placeat saepe!
        </p>
        <p class="§ §--white pt-0 border--bottom py-2 ">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et veniam expedita, at esse magnam perferendis nemo asperiores aliquid sequi quisquam id sapiente distinctio ab? Optio porro debitis placeat saepe!
        </p>
        <p class="§ §--white pt-0 border--bottom py-2 ">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et veniam expedita, at esse magnam perferendis nemo asperiores aliquid sequi quisquam id sapiente distinctio ab? Optio porro debitis placeat saepe!
        </p>
      </div>



    </div>
  </div>
</section>







<section id=" " class="section">
  <div class="container-fluid p-5">
    <div class="row">
      <div class="col-12">
        <h1 class="title title--white title--centered border">CV</h1>
  
        <picture> 
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
           class="img-fluid border " alt="CV">
        </picture>

        <button class="button button--fluid my-2">
              Télécharger
            </button> 
      </div>
    </div>
  </div>
</section>



<?php
get_footer();
 
