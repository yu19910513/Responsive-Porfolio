$('.contactOption').on("click", hiddenCSS);
$('.homeOption').on("click", displayCSS);
$('.profileOption').on("click", hiddenCSS);
function hiddenCSS() {
$(".cardContent").css("display", "none")
};
function displayCSS() {
$(".cardContent").css("display", "")
}
