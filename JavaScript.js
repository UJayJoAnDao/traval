var page = 2;
function Last(){
    if(page>1&&page<4){
        page-=1;
    }
    document.getElementById("page").innerHTML= '<iframe src="page'+page+'.html" width="90%" height="450" style="border:0;" allowfullscreen="" loading="lazy" ></iframe>';
    
}
function Next(){
    if(page>0&&page<3){
        page+=1;
    }
    document.getElementById("page").innerHTML= '<iframe src="page'+page+'.html" width="90%" height="450" style="border:0;" allowfullscreen="" loading="lazy" ></iframe>';    
}
function NewCity(){
    document.getElementById("city").innerHTML+="<li>"+7+"</li>";
}
function sinpei(){
    document.getElementById("city").innerHTML = '<iframe src="https://www.google.com.tw/maps/d/u/0/embed?mid=1aL9AX6fp1KnhxOrxG7S3NcqQ7C4D05gV&ehbc=2E312F" width="90%" height="450" style="border:0;" allowfullscreen="" loading="lazy" ></iframe>'
}