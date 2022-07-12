
var line_bars=document.querySelector(".navbar-expand-lg .line-bars-menu");
var active_line_bars;

var line_top=document.querySelector(".line-bars-menu div.line-top");
	var line_middle=document.querySelector(".line-bars-menu div.line-middle");
		var line_bottom=document.querySelector(".line-bars-menu div.line-bottom");

function LINE_BARS_OVER () {

	active_line_bars=line_bars.classList.contains("active");

		if(active_line_bars==false) {

			line_top.setAttribute("style","transform: rotate(33.5deg) translate(2px,0px)");
			line_middle.setAttribute("style","opacity: 0; width: 15px; transform: rotate(360deg)");
			line_bottom.setAttribute("style","transform: rotate(-33.5deg) translate(2px,0px)");

				$(document).ready(function() {

					$(".aside-menu").animate({left: '0px'},700,"jswing");
					$(".aside-menu").animate({height: '100%'},700,"jswing");
				})

			line_bars.classList.add("active");

		} else {

			line_top.removeAttribute("style");
			line_middle.removeAttribute("style");
			line_bottom.removeAttribute("style");

				$(document).ready(function() {

					$(".aside-menu").animate({height: '1%'},700,"jswing");
					$(".aside-menu").animate({left: '-230px'},700,"jswing");
				})

			line_bars.classList.remove("active");			
		}
}

line_bars.addEventListener("click",LINE_BARS_OVER);
