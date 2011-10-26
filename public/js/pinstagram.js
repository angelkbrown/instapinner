var contentHeight = 5000;  
//var pageHeight = document.documentElement.clientHeight;  
var scrollPosition;   
$(document).ready(
	function(){
	    setInterval('scroll();', 250);
});

function scroll(){
    if(navigator.appName == "Microsoft Internet Explorer")  
        scrollPosition = document.documentElement.scrollTop;  
    else  
        scrollPosition = window.pageYOffset;          
  
    if((contentHeight - scrollPosition) < 500){ 
    	//$("#scroll").text("contentHeight: "+contentHeight+" scrollPosition: "+scrollPosition);
    	var id=$("#max_id").val();
    	var tag=$("#tag").val();
    	$("#max_id").remove();
    	$("#tag").remove();    	
    	loadMore(id,tag);
    }
}

function loadMore(max_id,tag){
	var div = document.createElement("div");
	$(div).addClass("subcontainer");
	$('#image_container').append($(div));	
	$(div).load('/?next_max_id='+max_id+'&term='+tag);
	contentHeight+=7000;
}