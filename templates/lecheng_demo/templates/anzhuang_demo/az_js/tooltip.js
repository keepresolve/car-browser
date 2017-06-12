
function GetPos(obj){ 
var pos=new Object(); 
pos.x=obj.offsetLeft; 
pos.y=obj.offsetTop; 
while(obj=obj.offsetParent){ 
pos.x+=obj.offsetLeft; 
pos.y+=obj.offsetTop; 
} 
return pos; 
}; 

//提示工具 
var ToolTip={ 
_tipPanel:null, 
Init:function(){ 
if(null==this._tipPanel){ 
var tempDiv=document.createElement("div"); 
document.body.insertBefore(tempDiv, document.body.childNodes[0]); 
tempDiv.id="tipPanel"; 
tempDiv.style.display="none"; 
tempDiv.style.position="absolute"; 
tempDiv.style.zIndex="999"; 
} 
}, 
AttachTip:function(){}, //添加提示绑定 
DetachTip:function(){}, //移除提示绑定 
ShowTip:function(oTarget){ 
if($("tipPanel")==null) 
return; 

/*操作流程 
*1、构建新的html片段 
*2、设置提示框新位置 
*3、显示提示框 
*/ 
//1. 
var tempStr=""; //html片段 
if(arguments.length>1){ 
for(var i=1;i<arguments.length;i++){ 
tempStr+=" "+arguments[i]+" "; 
} 
} 
$("tipPanel").innerHTML=tempStr; 
//2. 
var pos=GetPos(oTarget); 
$("tipPanel").style.left=(oTarget.offsetWidth/2+pos.x)+"px"; 
$("tipPanel").style.top=(oTarget.offsetHeight+pos.y)+"px"; 
//3. 
$("tipPanel").style.display=""; 
}, 
HideTip:function(){ 
if($("tipPanel")==null) 
return; 
$("tipPanel").style.display="none"; 
} 
}; 

//---------------------------tooltip效果 end----------------------------------- 
