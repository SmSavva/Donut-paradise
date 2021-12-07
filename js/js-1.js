function trg(){
    var a,b,c;
    a = document.getElementById('inp_1').value;
    b = document.getElementById('inp_2').value;
    c = document.getElementById('inp_3').value;
    a=parseFloat(a);
    b=parseFloat(b);
    c=parseFloat(c);
    if(a+b>c && a+c>b && b+c>a){
        if(a==b && a==c){
            document.getElementById("res").innerHTML="Треугольник равносторонний";
            document.getElementById("res_img").innerHTML="<img src=\"..\imges\tr-3.png\" width=\"250px \" height=\"200px \">";
        }
        else if((a==b && a!=c)||(a==c && a!=b)||(b==c && b!=a)){
            document.getElementById("res").innerHTML="Треугольник равнобедренный";
            document.getElementById("res_img").innerHTML = "<img src=\"tr-2.jpg\" width=\"250px \" height=\"200px \">";
        }
        else{
            document.getElementById("res").innerHTML="Треугольник существует";
            document.getElementById("res_img").innerHTML = "<img src=\"tr-1.jpg\" width=\"250px \" height=\"200px \">";
        }
    }
    else{
        document.getElementById("res").innerHTML="Треугольник не существует";
        document.getElementById("res_img").innerHTML = "<img src=\"tr-4.jpg\" width=\"250px \" height=\"200px \">";
    }  
    
}
document.getElementById('trg').addEventListener('click',trg);