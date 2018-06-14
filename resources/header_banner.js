var dotmove = document.querySelectorAll('.dot_box ul li')
var picmove = document.querySelector('.pic');
var prev = document.getElementsByClassName('left')[0];
var next = document.getElementsByClassName('right')[0];
var box = document.getElementsByClassName('banner_box')[0];
now = 0
a = 0
b = 0
c = 0
timer = null
for(var i=0;i<dotmove.length;i++){ console.log(i)="" dotmove[i].index="i" dotmove[i].onmouseenter="function(){" dotmove[now].classname="" ;="" picmove.style.left="-(this.index)*1000+'px';" dotmove[this.index].classname="on" now="this.index;" }="" prev.onclick="function(){" dotmove[a].classname="" a--;="" if="" (a<0){="" a="3" next.onclick="function(){" dotmove[b].classname="" b++;="" (b="">3){
			b=0
		}
		dotmove[b].className = "on";
 		picmove.style.left = -b*1000+'px';
	}
	
	timer = setInterval(function(){
			dotmove[c].className="";
			c++;
			if (c>3){
				c=0
			}
		dotmove[c].className = "on";
 		picmove.style.left = -c*1000+'px';
		},2000)
	$(".banner_box").hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
			dotmove[c].className="";
			c++;
			if (c>3){
				c=0
			}
		dotmove[c].className = "on";
 		picmove.style.left = -c*1000+'px';
		},2000)
		})
		

	

	
		

	
  // auto();
  // cleartime();</dotmove.length;i++){>