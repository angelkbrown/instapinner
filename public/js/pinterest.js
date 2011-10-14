function isIE(){return/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent)}
(function(){
	function r(){
		var a=window,c=document;
		return(""+(a.getSelection?a.getSelection():c.getSelection?c.getSelection():c.selection.createRange().text)).replace(/(^\s+|\s+$)/g,"")
	}
	function v(a){
		var c={media:a.src,url:a.src==location.href?document.referrer||location.href:location.href,alt:a.alt,title:document.title,description:s,is_video:a.type=="video"};
		a=[];
		a.push(w);
		a.push("?");
		for(var d in c){
			a.push(encodeURIComponent(d));
			a.push("=");
			a.push(encodeURIComponent(c[d]));
			a.push("&")
		}
		var e=[];
		e.push(x);
		e.push("?");
		for(d in c){
			e.push(encodeURIComponent(d));
			e.push("=");
			e.push(encodeURIComponent(c[d]));
			e.push("&")}d=e.join("");
			var b=a.join("");
			if(navigator.userAgent.match(/iPad/i)!=null||navigator.userAgent.match(/iPhone/i)!=null||navigator.userAgent.match(/iPod/i)!=null||navigator.userAgent.match(/iPod/i)!=null){
				setTimeout(function(){window.location=b},25);
				window.location=d
			}else 
				window.open(b,"pin"+(new Date).getTime(),"status=no,resizable=no,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=680,height=290,left=0,top=0")
	}
function y(a){
	if(Math.max(a.h,a.w)>199){
		if(a.h<a.w)
			return"margin-top: "+parseInt(100-100*(a.h/a.w))+"px;";
			return""
	}else 
		return"margin-top: "+parseInt(100-a.h/2)+"px;"
}
var p=[];
if(!document.tpmLjs){
	document.tpmLjs=1;
	var i=/^https?:\/\/.*?\.?facebook\.com\//,f=/^https?:\/\/.*?\.?google\.com\/reader\//;
	if(location.href.match(/^https?:\/\/.*?\.?pinterest\.com\//))
		window.alert("The bookmarklet is installed! Now you can click your Pin It button to pin images as you browse sites around the web.");
	else if(location.href.match(i))
		window.alert("The bookmarklet can't pin images directly from Facebook. Sorry about that.");
	else if(location.href.match(f))
		window.alert("The bookmarklet can't pin images directly from Google Reader. Sorry about that.");
	else{
		var w="http://pinterest.com/pin/create/bookmarklet/",x="pinit12://pinterest.com/pin/create/bookmarklet/",s="Describe your pin";
		if(r().length>0)
			s=r();
		var m=function(){
			function a(g){
				var j=new Image;j.height=360;
				j.width=480;
				j.src="http://img.youtube.com/vi/"+g+"/0.jpg";
				return e(j,"video")
			}
			function c(g){
				if(g.src&&g.src!=""){
					var j=g.src.indexOf("?")>-1?"&":"?";g.src+=j+"autoplay=0";
					g.src+="&wmode=transparent"
				}
				g.setAttribute("wmode","transparent");
				j=g.parentNode;
				var q=g.nextSibling;
				j.removeChild(g);
				j.insertBefore(g,q)
			}
			for(var d=[],e=function(g,j){
				j=j||"image";
				var q=g.height,z=g.width,t=g.src,u=new Image;
				u.src=t;
				return{w:z,h:q,src:t,img:g,alt:"alt",im2:u,type:j}
			},b=document.getElementsByTagName("iframe"),k=0;k<b.length;k++){
				var l=/^http:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9\-_]+)/;
				if(l=l.exec(b[k].src)){
					d.push(a(l[1]));c(b[k])
				}
			}
			b=document.getElementsByTagName("embed");
			for(k=0;k<b.length;k++){
				l=/^http:\/\/www\.youtube\.com\/v\/([a-zA-Z0-9\-_]+)/;
				if(l=l.exec(b[k].src)){
					d.push(a(l[1]));
					c(b[k])}}l=/^http:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/;
					if(l=l.exec(window.location.href)){
						d.push(a(l[1]));
						c(document.getElementById("movie_player"))
					}
					for(k=0;k<document.images.length;k++){
						b=document.images[k];
						if(b.style.display!="none"){
							b=e(b);
							if(b.w>80&&b.h>80&&(b.h>109||b.w>109))d.push(b)
						}
					}
					return d
		}();
		
		if(m.length==0){
			//window.alert("Sorry, we can't see any big images or videos on this page.");
			document.tpmLjs=0
		}else{
			i=function(){
				o.parentNode.removeChild(o);
				n.parentNode.removeChild(n);
				document.tpmLjs=0;
				if(isIE())
					for(var a=0;a<p.length;a++)
						p[a].parent.insertBefore(p[a].player,p[a].sibling);
						return false
			};
			html="<style>\n#tpm_Container {font-family: 'helvetica neue', arial, sans-serif; position: absolute; padding-top: 37px; z-index: 10000; top: 0; left: 0; background-color: transparent; opacity: 1;}\n#tpm_Overlay {position: fixed; z-index: 9999; top: 0; right: 0; bottom: 0; left: 0; background-color: #f2f2f2; opacity: .95;}\n#tpm_Control {position:relative; z-index: 100000; float: left; background-color: #fcf9f9; border: solid #ccc; border-width: 0 1px 1px 0; height: 200px; width: 200px; opacity: 1;}\n#tpm_Control img {position: relative; padding: 0; display: block; margin: 82px auto 0; -ms-interpolation-mode: bicubic;}\n#tpm_Control a {position: fixed; z-index: 10001; right: 0; top: 0; left: 0; height: 24px; padding: 12px 0 0; text-align: center; font-size: 14px; line-height: 1em; text-shadow: 0 1px #fff; color: #211922; font-weight: bold; text-decoration: none; background: #fff url(http://d3io1k5o0zdpqr.cloudfront.net/images/fullGradient07Normal.png) 0 0 repeat-x; border-bottom: 1px solid #ccc; -mox-box-shadow: 0 0 2px #d7d7d7; -webkit-box-shadow: 0 0 2px #d7d7d7;}\n#tpm_Control a:hover {color: #fff; text-decoration: none; background-color: #1389e5; border-color: #1389e5; text-shadow: 0 -1px #46A0E6;}\n#tpm_Control a:active {height: 23px; padding-top: 13px; background-color: #211922; border-color: #211922; background-image: url(http://d3io1k5o0zdpqr.cloudfront.net/images/fullGradient07Inverted.png); text-shadow: 0 -1px #211922;}\n.tpmImagePreview {position: relative; padding: 0; margin: 0; float: left; background-color: #fff; border: solid #e7e7e7; border-width: 0 1px 1px 0; height: 200px; width: 200px; opacity: 1; z-index: 10002; text-align: center;}\n.tpmImagePreview .tpmImg {border: none; height: 200px; width: 200px; opacity: 1; padding: 0;}\n.tpmImagePreview .tpmImg a {margin: 0; padding: 0; position: absolute; top: 0; bottom: 0; right: 0; left: 0; display: block; text-align: center;  z-index: 1;}\n.tpmImagePreview .tpmImg a:hover {background-color: #fcf9f9; border: none;}\n.tpmImagePreview .tpmImg .ImageToPin {max-height: 200px; max-width: 200px; width: auto !important; height: auto !important;}\n.tpmImagePreview img.tpm_PinIt {border: none; position: absolute; top: 82px; left: 42px; display: none; padding: 0; background-color: transparent; z-index: 100;}\n.tpmImagePreview img.tpm_vidind {border: none; position: absolute; top: 75px; left: 75px; padding: 0; background-color: transparent; z-index: 99;}\n.tpmDimensions { position: relative; margin-top: 180px; text-align: center; font-size: 10px; z-index:10003; display: inline-block; background: white; border-radius: 4px; padding: 0 2px;}\n\n</style>";
			
			if(isIE()){
				f=document.createElement("style");
				f.type="text/css";f.media="screen";
				f.styleSheet.cssText="#tpm_Container {font-family: 'helvetica neue', arial, sans-serif; position: absolute; padding-top: 37px; z-index: 10000; top: 0; left: 0; background-color: transparent; opacity: 1;}\n#tpm_Overlay {position: fixed; z-index: 9999; top: 0; right: 0; bottom: 0; left: 0; background-color: #f2f2f2; opacity: .95;}\n#tpm_Control {position:relative; z-index: 100000; float: left; background-color: #fcf9f9; border: solid #ccc; border-width: 0 1px 1px 0; height: 200px; width: 200px; opacity: 1;}\n#tpm_Control img {position: relative; padding: 0; display: block; margin: 82px auto 0; -ms-interpolation-mode: bicubic;}\n#tpm_Control a {position: fixed; z-index: 10001; right: 0; top: 0; left: 0; height: 24px; padding: 12px 0 0; text-align: center; font-size: 14px; line-height: 1em; text-shadow: 0 1px #fff; color: #211922; font-weight: bold; text-decoration: none; background: #fff url(http://d3io1k5o0zdpqr.cloudfront.net/images/fullGradient07Normal.png) 0 0 repeat-x; border-bottom: 1px solid #ccc; -mox-box-shadow: 0 0 2px #d7d7d7; -webkit-box-shadow: 0 0 2px #d7d7d7;}\n#tpm_Control a:hover {color: #fff; text-decoration: none; background-color: #1389e5; border-color: #1389e5; text-shadow: 0 -1px #46A0E6;}\n#tpm_Control a:active {height: 23px; padding-top: 13px; background-color: #211922; border-color: #211922; background-image: url(http://d3io1k5o0zdpqr.cloudfront.net/images/fullGradient07Inverted.png); text-shadow: 0 -1px #211922;}\n.tpmImagePreview {position: relative; padding: 0; margin: 0; float: left; background-color: #fff; border: solid #e7e7e7; border-width: 0 1px 1px 0; height: 200px; width: 200px; opacity: 1; z-index: 10002; text-align: center;}\n.tpmImagePreview .tpmImg {border: none; height: 200px; width: 200px; opacity: 1; padding: 0;}\n.tpmImagePreview .tpmImg a {margin: 0; padding: 0; position: absolute; top: 0; bottom: 0; right: 0; left: 0; display: block; text-align: center;  z-index: 1;}\n.tpmImagePreview .tpmImg a:hover {background-color: #fcf9f9; border: none;}\n.tpmImagePreview .tpmImg .ImageToPin {max-height: 200px; max-width: 200px; width: auto !important; height: auto !important;}\n.tpmImagePreview img.tpm_PinIt {border: none; position: absolute; top: 82px; left: 42px; display: none; padding: 0; background-color: transparent; z-index: 100;}\n.tpmImagePreview img.tpm_vidind {border: none; position: absolute; top: 75px; left: 75px; padding: 0; background-color: transparent; z-index: 99;}\n.tpmDimensions { position: relative; margin-top: 180px; text-align: center; font-size: 10px; z-index:10003; display: inline-block; background: white; border-radius: 4px; padding: 0 2px;}\n";
				
				document.getElementsByTagName("head")[0].appendChild(f)
			}else{
				if(navigator.userAgent.lastIndexOf("Safari/")>0&&parseInt(navigator.userAgent.substr(navigator.userAgent.lastIndexOf("Safari/")+7,7))<533){
					f=document.createElement("style");
					f.innerText="\n#tpm_Container {font-family: 'helvetica neue', arial, sans-serif; position: absolute; padding-top: 37px; z-index: 10000; top: 0; left: 0; background-color: transparent; opacity: 1;}\n#tpm_Overlay {position: fixed; z-index: 9999; top: 0; right: 0; bottom: 0; left: 0; background-color: #f2f2f2; opacity: .95;}\n#tpm_Control {position:relative; z-index: 100000; float: left; background-color: #fcf9f9; border: solid #ccc; border-width: 0 1px 1px 0; height: 200px; width: 200px; opacity: 1;}\n#tpm_Control img {position: relative; padding: 0; display: block; margin: 82px auto 0; -ms-interpolation-mode: bicubic;}\n#tpm_Control a {position: fixed; z-index: 10001; right: 0; top: 0; left: 0; height: 24px; padding: 12px 0 0; text-align: center; font-size: 14px; line-height: 1em; text-shadow: 0 1px #fff; color: #211922; font-weight: bold; text-decoration: none; background: #fff url(http://d3io1k5o0zdpqr.cloudfront.net/images/fullGradient07Normal.png) 0 0 repeat-x; border-bottom: 1px solid #ccc; -mox-box-shadow: 0 0 2px #d7d7d7; -webkit-box-shadow: 0 0 2px #d7d7d7;}\n#tpm_Control a:hover {color: #fff; text-decoration: none; background-color: #1389e5; border-color: #1389e5; text-shadow: 0 -1px #46A0E6;}\n#tpm_Control a:active {height: 23px; padding-top: 13px; background-color: #211922; border-color: #211922; background-image: url(http://d3io1k5o0zdpqr.cloudfront.net/images/fullGradient07Inverted.png); text-shadow: 0 -1px #211922;}\n.tpmImagePreview {position: relative; padding: 0; margin: 0; float: left; background-color: #fff; border: solid #e7e7e7; border-width: 0 1px 1px 0; height: 200px; width: 200px; opacity: 1; z-index: 10002; text-align: center;}\n.tpmImagePreview .tpmImg {border: none; height: 200px; width: 200px; opacity: 1; padding: 0;}\n.tpmImagePreview .tpmImg a {margin: 0; padding: 0; position: absolute; top: 0; bottom: 0; right: 0; left: 0; display: block; text-align: center;  z-index: 1;}\n.tpmImagePreview .tpmImg a:hover {background-color: #fcf9f9; border: none;}\n.tpmImagePreview .tpmImg .ImageToPin {max-height: 200px; max-width: 200px; width: auto !important; height: auto !important;}\n.tpmImagePreview img.tpm_PinIt {border: none; position: absolute; top: 82px; left: 42px; display: none; padding: 0; background-color: transparent; z-index: 100;}\n.tpmImagePreview img.tpm_vidind {border: none; position: absolute; top: 75px; left: 75px; padding: 0; background-color: transparent; z-index: 99;}\n.tpmDimensions { position: relative; margin-top: 180px; text-align: center; font-size: 10px; z-index:10003; display: inline-block; background: white; border-radius: 4px; padding: 0 2px;}\n\n"
				}else{
					f=document.createElement("style");
					f.innerHTML="\n#tpm_Container {font-family: 'helvetica neue', arial, sans-serif; position: absolute; padding-top: 37px; z-index: 10000; top: 0; left: 0; background-color: transparent; opacity: 1;}\n#tpm_Overlay {position: fixed; z-index: 9999; top: 0; right: 0; bottom: 0; left: 0; background-color: #f2f2f2; opacity: .95;}\n#tpm_Control {position:relative; z-index: 100000; float: left; background-color: #fcf9f9; border: solid #ccc; border-width: 0 1px 1px 0; height: 200px; width: 200px; opacity: 1;}\n#tpm_Control img {position: relative; padding: 0; display: block; margin: 82px auto 0; -ms-interpolation-mode: bicubic;}\n#tpm_Control a {position: fixed; z-index: 10001; right: 0; top: 0; left: 0; height: 24px; padding: 12px 0 0; text-align: center; font-size: 14px; line-height: 1em; text-shadow: 0 1px #fff; color: #211922; font-weight: bold; text-decoration: none; background: #fff url(http://d3io1k5o0zdpqr.cloudfront.net/images/fullGradient07Normal.png) 0 0 repeat-x; border-bottom: 1px solid #ccc; -mox-box-shadow: 0 0 2px #d7d7d7; -webkit-box-shadow: 0 0 2px #d7d7d7;}\n#tpm_Control a:hover {color: #fff; text-decoration: none; background-color: #1389e5; border-color: #1389e5; text-shadow: 0 -1px #46A0E6;}\n#tpm_Control a:active {height: 23px; padding-top: 13px; background-color: #211922; border-color: #211922; background-image: url(http://d3io1k5o0zdpqr.cloudfront.net/images/fullGradient07Inverted.png); text-shadow: 0 -1px #211922;}\n.tpmImagePreview {position: relative; padding: 0; margin: 0; float: left; background-color: #fff; border: solid #e7e7e7; border-width: 0 1px 1px 0; height: 200px; width: 200px; opacity: 1; z-index: 10002; text-align: center;}\n.tpmImagePreview .tpmImg {border: none; height: 200px; width: 200px; opacity: 1; padding: 0;}\n.tpmImagePreview .tpmImg a {margin: 0; padding: 0; position: absolute; top: 0; bottom: 0; right: 0; left: 0; display: block; text-align: center;  z-index: 1;}\n.tpmImagePreview .tpmImg a:hover {background-color: #fcf9f9; border: none;}\n.tpmImagePreview .tpmImg .ImageToPin {max-height: 200px; max-width: 200px; width: auto !important; height: auto !important;}\n.tpmImagePreview img.tpm_PinIt {border: none; position: absolute; top: 82px; left: 42px; display: none; padding: 0; background-color: transparent; z-index: 100;}\n.tpmImagePreview img.tpm_vidind {border: none; position: absolute; top: 75px; left: 75px; padding: 0; background-color: transparent; z-index: 99;}\n.tpmDimensions { position: relative; margin-top: 180px; text-align: center; font-size: 10px; z-index:10003; display: inline-block; background: white; border-radius: 4px; padding: 0 2px;}\n\n"
				}
				document.body.appendChild(f)}
				var o=document.createElement("div");
				o.setAttribute("id","tpm_Overlay");
				document.keydown=i;
				document.body.appendChild(o);
				var n=document.createElement("div");
				n.setAttribute("id","tpm_Container");
				document.body.appendChild(n);
				f=document.createElement("div");
				f.setAttribute("id","tpm_Control");
				t_img=new Image;t_img.src="http://d3io1k5o0zdpqr.cloudfront.net/images/about/LogoAbout.png";
				f.appendChild(t_img);
				t_a=document.createElement("a");
				t_a.href="#";t_a.id="tpm_RemoveLink";
				t_a.appendChild(document.createTextNode("Cancel Pin"));
				f.appendChild(t_a);
				n.appendChild(f);
				document.getElementById("tpm_RemoveLink").onclick=i;
				i={};
				for(var h=0;h<m.length;h++)
					if(!(i[m[h].src]||m[h].im2.height&&m[h].im2.height<80)){
						i[m[h].src]=1;
						(function(a){
							var c=document.createElement("div");
							if(isIE())
								c.className="tpmImagePreview";
							else c.setAttribute("class","tpmImagePreview");
								var d=document.createElement("div");
							if(isIE())
								d.className="tpmImg";
							else 
								d.setAttribute("class","tpmImg");
							var e=document.createElement("span");
							e.innerHTML=a.w+" x "+a.h;
							if(isIE())
								e.className="tpmDimensions";
							else 
								e.setAttribute("class","tpmDimensions");
							
							c.appendChild(e);
							document.getElementById("tpm_Container").appendChild(c).appendChild(d);
							c=document.createElement("a");
							c.setAttribute("href","#");
							c.onclick=function(){
								v(a);
								o.parentNode.removeChild(o);
								n.parentNode.removeChild(n);
								document.tpmLjs=0;
								return false
							};
							d.appendChild(c);
							e=document.createElement("img");
							if(isIE())
								d.className="tpmImg";
							else 
								d.setAttribute("class","tpmImg");
							e.setAttribute("style",""+y(a));
							e.src=a.src;
							e.setAttribute("alt","Pin This");
							e.className="ImageToPin";
							c.appendChild(e);
							var b=document.createElement("img");
							if(isIE())
								b.className="tpm_PinIt";
							else 
								b.setAttribute("class","tpm_PinIt");
							b.src="http://d3io1k5o0zdpqr.cloudfront.net/images/PinThis.png";
							b.setAttribute("alt","Pin This");
							if(isIE()){
								c.attachEvent("onmouseover",function(){
									b.style.display="block"});
								c.attachEvent("onmouseout",function(){
									b.style.display="none"})
							}else{
								c.addEventListener("mouseover",function(){b.style.display="block"},false);
								c.addEventListener("mouseout",
function(){b.style.display="none"},false)
							}
							c.appendChild(b);
							if(m[h].type=="video"){
								d=document.createElement("img");
								if(isIE())
									d.className="tpm_vidind";
								else 
									d.setAttribute("class","tpm_vidind");
								d.src="http://d3io1k5o0zdpqr.cloudfront.net/images/VideoIndicator.png";
								c.appendChild(d)
							}
						})(m[h])
					}
					if(isIE()){
						i=document.getElementsByTagName("object");
						for(h=0;h<i.length;h++){
							f={player:i[h],parent:i[h].parentNode,sibling:i[h].nextSibling};
							f.parent.removeChild(i[h]);
							p.push(f)
						}
					}
				scroll(0,0);
				return m
			}
		}
	}
})();

