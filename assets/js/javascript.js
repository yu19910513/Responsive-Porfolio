$('.contactOption').on("click", hiddenCSS);
$('.homeOption').on("click", displayCSS);
function hiddenCSS() {
$(".cardContent").css("display", "none")
};
function displayCSS() {
$(".cardContent").css("display", "")
}
