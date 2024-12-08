/*(function($) {
    "use strict";
    /*****************************
     * Commons Variables
     *****************************-/
        var $window = $(window),
        $body = $('body');

    /************************************************
     * Project Filter
     ***********************************************-/
    $('.wrapper.gallery-content').imagesLoaded( function() {
         $('.filter').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
             
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
         });

        var $grid = $('.wrapper.gallery-content').isotope({
            itemSelector: '.filter-item',
             percentPosition: true,
         });
    });
})(jQuery);
*/
function Filter() {
    var panelButtons = document.querySelectorAll(".btn");

    for (var i = 0; i < panelButtons.length; i++) {
      panelButtons[i].addEventListener("click", function (evt) {
        clearActiveFromButtons();
        evt.target.classList.add("active");
      });
    }

    function clearActiveFromButtons(){
      for (var i = 0; i < panelButtons.length; i++) {
        panelButtons[i].classList.remove("active");
      }
    }
  }