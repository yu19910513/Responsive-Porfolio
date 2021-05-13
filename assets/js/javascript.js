$('.contactOption').on("click", hiddenCSS);
$('.homeOption').on("click", displayCSS);
$('.profileOption').on("click", hiddenCSS);
function hiddenCSS() {
$(".cardContent").css("display", "none")
};
function displayCSS() {
$(".cardContent").css("display", "")
}

$('.educationCardEl').on('click', stopTransform);

function stopTransform() {
    $('.educationCardEl').removeProperty("transform");
}

$(".educationEL").hover(

    function(){
        $('.educationCard').removeClass('bg-light');
        $('.educationCard').addClass('bg-dark');
        $('.educationCard').css('color', 'white')

    },

    function(){
        $('.educationCard').removeClass('bg-dark');
        $('.educationCard').css('color', '')
        $('.educationCard').addClass('bg-light');
  }
);

$(".skillEL").hover(

    function(){
        $('.skillcard').removeClass('bg-light');
        $('.skillcard').addClass('bg-dark');
        $('.skillcard').css('color', 'white')

    },

    function(){
        $('.skillcard').removeClass('bg-dark');
        $('.skillcard').css('color', '')
        $('.skillcard').addClass('bg-light');
  }
);

$(".experienceEL").hover(

    function(){
        $('.experiencecard').removeClass('bg-light');
        $('.experiencecard').addClass('bg-dark');
        $('.experiencecard').css('color', 'white')

    },

    function(){
        $('.experiencecard').removeClass('bg-dark');
        $('.experiencecard').css('color', '')
        $('.experiencecard').addClass('bg-light');
  }
);
$(".cards .card").hover(pShow, pHide);

function pShow(){
        $(this).css('transform','scale(1.05)')
};

function pHide(){
        $(this).css('transform','scale(1)')
};


function time(){
    $('.timer').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}
setInterval(time, 1000);
