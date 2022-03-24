


$(document).scroll(function () {
    if ($(document).scrollTop() >= '150') {
        $('header').addClass("fixed");
        var newSrc = 'McitLibs/images/mcit-logo.png';
        $('.mcit-log img').attr('src', newSrc);
    } else {
        $('header').removeClass("fixed");
        var oldSrc = 'McitLibs/images/logo.svg';
        $('.mcit-log img').attr('src', oldSrc);
    }
});

$('.news-carousel').owlCarousel({
    rtl: true,
    loop: true,
    autoplay:true,
    mouseDrag: false,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-angle-right fa-lg'></i>",
       "<i class='fa fa-angle-left fa-lg'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

$('.tasks-carousel').owlCarousel({
    rtl: true,
    loop: true,
    autoplay:true,
    mouseDrag: false,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<img src='McitLibs/images/icons/right-arr.svg'></img>", "<img src='McitLibs/images/icons/left-arr.svg'></img>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


$('.stories-carousel').owlCarousel({
     rtl: true,
     //loop: true,
     autoplay:true,
     mouseDrag: false,
     margin: 10,
     nav: true,
     dots: false,
    navText: ["<img src='McitLibs/images/icons/right-arr.svg'></img>", "<img src='McitLibs/images/icons/left-arr.svg'></img>"],
    items: 1,
});


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var docWith = $(document).width();
if (docWith < 991) {
    var topMenuUl = $(".navbar-collapse").html();
    $('.nav_content').prepend(topMenuUl);
} 


// one-page-scroll
$(document).scroll(function() {
    if ($(document).scrollTop() >= '300') {
        $('.gotoup').css("display", "block");
    } else {
        $('.gotoup').css("display", "none");
    }
});
