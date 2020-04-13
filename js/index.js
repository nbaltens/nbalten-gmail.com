

// ISOTOPE PORTFOLIO IMAGE SHUFFLE

$(document).ready( function() {   

    $('.grid').isotope({
      itemSelector: '.grid-item',
    });
    
    $('.filter-button-group').on( 'click', 'li', function() {
      let filterValue = $(this).attr('data-filter');
      $('.grid').isotope({ filter: filterValue });
      $('.filter-button-group li').removeClass('active');
      $(this).addClass('active');
    });
        })

// MODAL 
    $(".modalButton").on("click", function() {
    let modal = $(this).data("modal");
    $(modal).show();
    });
        
    $(".modal").on("click", function(e) {
    let className = e.target.className;
    if(className === "modal" || className === "close"){
    $(this).closest(".modal").hide();
    }
    });



// MORE ABOUT ME

$(document).ready(function(){
  $("#aboutBtn").click(function(){
    $(".moreAboutSection").toggleClass("showAbout");
    $(this).text(function(i, v){
      return v === 'Show Less' ? 'Show More' : 'Show Less'
   })
  });
});



jQuery(document).ready(function($){
    $('.Menu-link').on('click', function() {
    $(".HiddenCheckbox").trigger("click");
    });
});


$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 620) { 
      $('.hamburgerIcon').removeClass('whiteBurgerIcon');
        $('.hamburgerIcon').addClass('solid');
    } else {
        $('.hamburgerIcon').removeClass('solid');
        $('.hamburgerIcon').addClass('whiteBurgerIcon');


    }
  });
});



