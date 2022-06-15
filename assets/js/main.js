let items = document.getElementsByClassName("item");
let slide = document.getElementById("slide");
let slide_item = document.getElementById("slide-item");
let close = document.getElementById("close");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let index = 0;
let imglen = items.length;
Array.from(items).forEach((item,i) => {
    item.addEventListener("click",function(){
let img = item.childNodes[1].getAttribute("src");
slide.classList.add("active");
index = i;
slide_item.children[0].innerHTML = `${i+1} / ${imglen} `;
slide_item.childNodes[3].setAttribute("src",img);


    })
});
close.addEventListener('click',function(){
    slide.classList.remove("active");
})
next.addEventListener("click",function(){
    changeImg(index+1);
})
prev.addEventListener("click",function(){
    changeImg(index-1);
})
function changeImg(i){
    if(i >=imglen){
        index = 0;
    }else if(i<0){
        index = imglen -1;}
    else{
        index = i  ;
    }
    let img = items[index].childNodes[1].getAttribute("src");

    slide_item.children[0].innerHTML = `${index+1} / ${imglen} `;
    
    slide_item.childNodes[3].setAttribute("src",img);
    
}
document.onkeydown = function(e){
     let keyCode = e.keyCode;
     if(keyCode == 27){
        close.click();
     }else if(keyCode == 39){
        next.click();
     }else if(keyCode == 37){
        prev.click();
     }
}
