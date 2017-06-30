;(function ($) {

$(function() {
  //get the browser url path each time the page is loaded, loop thru nav links and set the active nav link blue
 var browserURLPathname = window.location.pathname
 $("#nav ul li a").each(function(){
     var url = $(this).attr("href");
     if (url == browserURLPathname) {
       $(this).parents("li").css( "border-bottom", "3px solid #004a88");
       $(this).css( "color", "#004a88");
       $(this).css( "fill", "#004a88");       
     }
 })

});
})(jQuery);
