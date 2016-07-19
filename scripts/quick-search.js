(function($){

  
  function qs_set_form(formName){
    var forms = ["searchEbsco", "searchOpac", "searchWebsite"];
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
    $('#ebsco').click(function() {
      qs_set_form("searchEbsco");
    });
    $('#opac').click(function() {
      qs_set_form("searchOpac");
    });    
    $('#website').click(function() {
      qs_set_form("searchWebsite");
    });    
	});
})(jQuery);