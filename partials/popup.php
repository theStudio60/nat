<div id="popupFrame" class="popup" style="">
  <div class="container border mt-5 bg-dark">
    <div class="row">
      <div class="col">
        <div class="p-2">
          <div class="popup__header border-bottom pt-3"> 
            <h3 class="subtitle subtitle--white">
            <?= the_sub_field('popup_title'); ?>

            </h3>
            <div class="close text-white">
              <i  id="" class="fa fa-times text-white" onclick="closePopup();"></i>
            </div>
          </div>


          <hr class="bg-dark">

          <?= the_sub_field('popup_content'); ?>
        </div>
      </div>
    </div>
  </div>
</div>