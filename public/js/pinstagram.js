var contentHeight = 900;  
//var pageHeight = document.documentElement.clientHeight;  
var scrollPosition;   
window.onscroll = hideLowRes;
$(document).ready(
	function(){
	    setInterval('scroll();', 250);
	    $(".thumb").mouseenter(imageHover); 
		//var box=$('.fancybox');
		//box.fancybox({'scrolling':'auto','titleShow':false});	       
});

function scroll(){
    if(navigator.appName == "Microsoft Internet Explorer")  
        scrollPosition = document.documentElement.scrollTop;  
    else  
        scrollPosition = window.pageYOffset;          
  
    if((contentHeight - scrollPosition) < 50){ 
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
	$(div).load('/more?next_max_id='+max_id+'&tag='+tag);
	contentHeight+=1030;
}

function imageHover(){
	var thumb=$("#th-"+$(this).attr("id").split("-")[1]);
	var low_res=$("#lr-"+$(this).attr("id").split("-")[1]);
	
	if(low_res.is(":visible")){
		low_res.hide();
	}else{
		var position=thumb.offset();	
		$(".low_res").hide();			
		low_res.show(300);
		var set={
			"top":position.top,
			"left":position.left
		};
		low_res.offset(set);	
	}
}

function pinThis(img){
	$.get("/pin?src="+$(img).attr("src"));
	/*$.ajax({
			type		: "GET",
			cache	: false,
			url		: "/pin?src="+$(img).attr("src"),
			data		: $(this).serializeArray(),
			success: function(data) {
				$.fancybox(data);
			}
		});	*/
}

function hideThis(elt){
	$(elt).hide();
}

function hideLowRes(){
	$(".low_res").hide();	
}