/*let namaTeman=[`koyeng`, `kemal`, `nawa`]
namaTeman.push(`viona`, `ivan`)
alert(namaTeman)
let pilihan=prompt(`kamu milih yang mana(angka)?`)

alert(namaTeman[pilihan])
*/

/*
let namaKonco=[]
    for(let i=0; i<2; i++){
        namaKonco[i]=prompt(`siapa`)
    }
    for(let i=0; i<2; i++){
        alert(namaKonco[i])
    } 

    let num=prompt(`masukan nomor`)
    alert(namaKonco[num])
*/

/*
let hari=new Data().getDay()
alert(`${hari}`)
*/

//const btn1 = document.getElementById(`btn1`)



function ubahmouse(){
    console.log(`ubah text`)
}

function konversiCelcius(){
    var celcius=document.getElementById(`inputCelcius`).value
    let hasil=celcius * (9/5) +32
    console.log(hasil)
    document.getElementById(`inputFahrenheit`).value = hasil;
    document.getElementById(`kalkulasi`).value = (`${celcius} celcius x (9/5) + 32 = ${hasil} fahrenheit`);
}

function reset(){
    console.log(`aman`)
    var elements = document.getElementsByClassName('input-celcius-fahrenheit');
    for (var i = 0; i < elements.length; i++) {
        elements[i].value = ''; // Reset the value of each form element
    }
}
/*
function konversiCelcius(){
    var celcius=document.getElementById(`inputCelcius`).value
    let hasil=celcius * (9/5) +32
    console.log(hasil)
    document.getElementById(`kalkulasi`).value = (`${celcius} celcius x (9/5) + 32 = ${hasil} fahrenheit`);
}
*/