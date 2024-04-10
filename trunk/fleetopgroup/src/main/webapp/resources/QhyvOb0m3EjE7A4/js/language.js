function includeHTML(){$.get("html/pannel/languageSelect.html",function(t){$("#langSelect").html(t)})}function updateLanguage(){var t=$("#language").val();$.linguaLoadAutoUpdate(t)}function changeLanguage(){$.linguaInit("html/languages/login/","login"),$("#language").val($.linguaGetLanguage()),$.linguaLoad("en-GB"),$.linguaUpdateElements()}$(document).ready(function(){changeLanguage(),includeHTML()}),!function(t){function e(e,n){function o(){if(Y){$canvas=t('<canvas class="pg-canvas"></canvas>'),X.prepend($canvas),x=$canvas[0],m=x.getContext("2d"),s();for(var i=Math.round(x.width*x.height/n.density),e=0;i>e;e++){var a=new d;a.setStackPos(e),S.push(a)}t(window).on("resize",function(){h()}),t(document).on("mousemove",function(t){M=t.pageX,O=t.pageY}),F&&!k&&window.addEventListener("deviceorientation",function(){b=Math.min(Math.max(-event.beta,-30),30),P=Math.min(Math.max(-event.gamma,-30),30)},!0),r(),u("onInit")}}function s(){x.width=X.width(),x.height=X.height(),m.fillStyle=n.dotColor,m.strokeStyle=n.lineColor,m.lineWidth=n.lineWidth}function r(){if(Y){w=t(window).width(),y=t(window).height(),m.clearRect(0,0,x.width,x.height);for(var i=0;i<S.length;i++)S[i].updatePosition();for(var i=0;i<S.length;i++)S[i].draw();A||(g=requestAnimationFrame(r))}}function h(){for(s(),i=S.length-1;i>=0;i--)(S[i].position.x>X.width()||S[i].position.y>X.height())&&S.splice(i,1);var t=Math.round(x.width*x.height/n.density);if(t>S.length)for(;t>S.length;){var e=new d;S.push(e)}else t<S.length&&S.splice(t);for(i=S.length-1;i>=0;i--)S[i].setStackPos(i)}function l(){A=!0}function p(){A=!1,r()}function d(){switch(this.stackPos,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*x.width),y:Math.ceil(Math.random()*x.height)},this.speed={},n.directionX){case"left":this.speed.x=+(-n.maxSpeedX+Math.random()*n.maxSpeedX-n.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*n.maxSpeedX+n.minSpeedX).toFixed(2);break;default:this.speed.x=+(-n.maxSpeedX/2+Math.random()*n.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?n.minSpeedX:-n.minSpeedX}switch(n.directionY){case"up":this.speed.y=+(-n.maxSpeedY+Math.random()*n.maxSpeedY-n.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*n.maxSpeedY+n.minSpeedY).toFixed(2);break;default:this.speed.y=+(-n.maxSpeedY/2+Math.random()*n.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?n.minSpeedY:-n.minSpeedY}}function c(t,i){return i?void(n[t]=i):n[t]}function f(){X.find(".pg-canvas").remove(),u("onDestroy"),X.removeData("plugin_"+a)}function u(t){void 0!==n[t]&&n[t].call(v)}var x,m,g,w,y,v=e,X=t(e),Y=!!document.createElement("canvas").getContext,S=[],M=0,O=0,k=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),F=!!window.DeviceOrientationEvent,P=0,b=0,A=!1;return n=t.extend({},t.fn[a].defaults,n),d.prototype.draw=function(){m.beginPath(),m.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,n.particleRadius/2,0,2*Math.PI,!0),m.closePath(),m.fill(),m.beginPath();for(var t=S.length-1;t>this.stackPos;t--){var i=S[t],e=this.position.x-i.position.x,a=this.position.y-i.position.y,o=Math.sqrt(e*e+a*a).toFixed(2);o<n.proximity&&(m.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),n.curvedLines?m.quadraticCurveTo(Math.max(i.position.x,i.position.x),Math.min(i.position.y,i.position.y),i.position.x+i.parallaxOffsetX,i.position.y+i.parallaxOffsetY):m.lineTo(i.position.x+i.parallaxOffsetX,i.position.y+i.parallaxOffsetY))}m.stroke(),m.closePath()},d.prototype.updatePosition=function(){if(n.parallax){if(F&&!k){var t=(w-0)/60;pointerX=(P- -30)*t+0;var i=(y-0)/60;pointerY=(b- -30)*i+0}else pointerX=M,pointerY=O;this.parallaxTargX=(pointerX-w/2)/(n.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(pointerY-y/2)/(n.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}switch(n.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=X.width()-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>X.width()&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>X.width()||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(n.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=X.height()-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>X.height()&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>X.height()||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y},d.prototype.setStackPos=function(t){this.stackPos=t},o(),{option:c,destroy:f,start:p,pause:l}}var a="particleground";t.fn[a]=function(i){if("string"==typeof arguments[0]){var n,o=arguments[0],s=Array.prototype.slice.call(arguments,1);return this.each(function(){t.data(this,"plugin_"+a)&&"function"==typeof t.data(this,"plugin_"+a)[o]&&(n=t.data(this,"plugin_"+a)[o].apply(this,s))}),void 0!==n?n:this}return"object"!=typeof i&&i?void 0:this.each(function(){t.data(this,"plugin_"+a)||t.data(this,"plugin_"+a,new e(this,i))})},t.fn[a].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}}}(jQuery),function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i){var e=(new Date).getTime(),a=Math.max(0,16-(e-t)),n=window.setTimeout(function(){i(e+a)},a);return t=e+a,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),$(function(){$("#particles").particleground({minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#eee",lineColor:"#eee",particleRadius:7,lineWidth:1,curvedLines:!0,proximity:100,parallax:!1})});