import modal from './comp/popupBox';
function $(id){
    return document.getElementById(id)
}
$("tipBox").addEventListener('click',function(){
    new modal('tip','提示信息').show();
},false);
$("toast").addEventListener('click',function(){
    new modal('toast','操作成功').show(800,function(){   
    });
},false)
$("load").addEventListener('click',function(){
    new modal('load','加载中').show();
},false)

