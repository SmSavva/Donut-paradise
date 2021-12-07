function result(result) {
    let str = document.getElementById("words").value;
    let len = 6; 
    let mas = str.split('-');
    if (mas.length!=len){alert('Ошибка! Должно быть 6 слов!'); }
    let num = new Array();
    for (let i = 0; i < mas.length; ) {
        if (!isNaN(mas[i])) {
            num.push(mas[i]);
            mas.splice(i, 1);
            i--;
        }
        i++;
    }
    if (mas.length!=4 || num.length!=2){alert('Ошибка');}
    num.sort(function(a,b){return a-b;});                    
    mas.sort();
    let arr = new Map();
    //ключи ассоциативного массива
    key_mas = ['a1','a2','a3','a4','n1','n2'];
    for (let k = 0; k<len;k++){
        if (k<4){arr.set(key_mas[k], mas[k]);}
        else { arr.set(key_mas[k],num[k-4]);}
    }
    a1.innerHTML = arr.get('a1');
    a2.innerHTML = arr.get('a2');
    a3.innerHTML = arr.get('a3');
    a4.innerHTML = arr.get('a4');
    n1.innerHTML = arr.get('n1');
    n2.innerHTML = arr.get('n2');
    }
    function b1(b1) {
    text.innerHTML += document.getElementById('a1').textContent + "<br>";
    }
    function b2(b2) {
    text.innerHTML += document.getElementById('a2').textContent + "<br>";
    }
    function b3(b3) {
    text.innerHTML += document.getElementById('a3').textContent + '<br> ';
    }
    function b4(b4) {
    text.innerHTML += document.getElementById('a4').textContent + '<br>';
    }
    function b5(b5) {
    text.innerHTML += document.getElementById('n1').textContent + '<br>';
    }
    function b6(b6) {
    text.innerHTML += document.getElementById('n2').textContent + '<br>';
    }
    function clean(){
        text.innerHTML = '';
    }