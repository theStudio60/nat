<div id="popupFrame" class="popup" style="">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="content">
          <div class="popup__header"> 
            <?= the_sub_field('popup_title'); ?>
            <div class="close">
              <i  id="" class="fa fa-times" onclick="closePopup();"></i>
            </div>
          </div>


          <hr class="bg-dark">

          <?= the_sub_field('popup_content'); ?>
        </div>
      </div>
    </div>
  </div>
</div>