var contentHeight = 900;  
//var pageHeight = document.documentElement.clientHeight;  
var scrollPosition;  
var n = 10;  
var xmlhttp; 

$(document).ready(
	function(){
	    setInterval('scroll();', 250);
});

function scroll(){
    if(navigator.appName == "Microsoft Internet Explorer")  
        scrollPosition = document.documentElement.scrollTop;  
    else  
        scrollPosition = window.pageYOffset;          
  
    if((contentHeight - scrollPosition) < 50){ 
    	$("#scroll").text("contentHeight: "+contentHeight+" scrollPosition: "+scrollPosition);
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
	$(div).load('/more?next_max_id='+max_id+'&tag='+tag);
	contentHeight+=1030;
}

function imageHover(elt){
	var thumb=$("#th-"+$(elt).attr("id").split("-")[1]);
	if(thumb.is(":visible")){
		thumb.hide();	
		$("#lr-"+$(elt).attr("id").split("-")[1]).show();
	}else{
		$("#lr-"+$(elt).attr("id").split("-")[1]).hide();
		thumb.show();	
	}
}