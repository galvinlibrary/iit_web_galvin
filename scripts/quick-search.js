(function($){

  
  function qs_set_form(formName){
    var forms = ["searchEbsco", "searchOpac", "searchSite"];
    $.each(forms, function( key, value ) {
      if (value === formName){
        $("#" + value).removeClass("hide");
      }
      else {
        $("#" + value).addClass("hide");
      }
    });
  }
  
	$(document).ready(function(){
    qs_set_form("searchEbsco");
	});
})(jQuery);