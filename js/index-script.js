let html = document.querySelector("html");
let n=0;
function funTest(){
    console.log("你已经点我",n,"次了");
    if(n == 10)
    {
        alert("我生气了,再见~~")
        window.close();
    }
}
html.onclick = function(){
    n++;
    alert("不要点我了,再点我就要生气了");
    funTest();
}
