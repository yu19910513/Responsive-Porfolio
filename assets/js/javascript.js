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
  });

  $(".cards .card").hover(

    function(){
        $(this).css('transform','scale(1.1)')

    },

    function(){
        $(this).css('transform','scale(1)')
  }
);



function time(){
    $('.timer').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}
setInterval(time, 1000);
