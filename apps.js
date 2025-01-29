const btn = document.querySelector('#data');
const btn1 = document.querySelector('#clear');
// const output = document.querySelector('.output');
const outputRandom = document.querySelector('.randomOutput');
const outputTable = document.querySelector('.tableOutput');
const url = 'data/data_kalimat_durusul_lughoh2.json';
const randomListNumber = [];
const randomList = [];
//const qty3 = 4;
btn.onclick = ()=>{
    // // output.innerHTML = 'Connecting ....';
    //outputRandom.innerHTML = 'Connecting ....';
    outputTable.innerHTML = 'Connecting table ....';
    
    
    getData();
}

btn1.onclick = ()=>{
    // output.innerHTML = '';
    //outputRandom.innerHTML = '';
    outputTable.innerHTML = '';
    
}

function getData() {
    var dars = document.getElementById('dars').value;
    if (dars==0) {
        fetch(url)
        .then(rep => rep.json())
        .then(data => {
            outData(data.daftar);
        })
    }
    else{

        fetch(url)
        .then(rep => rep.json())
        .then(data => {
            outData(data.daftar.filter(p => p.dars == dars));
        })
    }
}

function outData(val) {
    //console.log(val);
    var qty2 = document.getElementById('qty').value;
    const result = val.slice(0,qty2);
    let htmlRandom = '';
    let htmlTable = '';
    if (val.length > qty2) {
         //qty4 = val.length;
         
    console.log('qty2 : ',qty2,'val : ', val.length);
    for (let index = 0; index < qty2; index++) {
        // const element = array[index];
        //var rnd = Math.random();
        //var rndkali = rnd * val.length;
        //var rndfloor = Math.floor(rndkali)
         const random = Math.floor(Math.random() * val.length);
         //console.log('rnd : ', rnd, ' rndkali : ', rndkali, ' rndfloor : ' , rndfloor);
        // console.log(random, val[random]);
        if (randomListNumber.indexOf(random) >=0 ) {
            
            console.log("ada");
            index--;

        }
        else{

            randomListNumber[index] = random;
            randomList[index] = val[random];
        }
    }
    // let html = '';
    

    // val.forEach((ele,ind) => {
    // result.forEach((ele,ind) => {
    //     //console.log(ele);
    //     html += `<div>${ind+1}. ${ele.kalimat}</div>`;
    // })
    randomList.forEach((ele,ind) => {
        //console.log(ele);
        //htmlRandom += `<div>${ind+1}. ${ele.kalimat} - dars ${ele.dars}</div>`;
        
        htmlTable += `<body>`;
        htmlTable += `<tr></tr>`;
        htmlTable += `<td>${ind+1}.</td>`;
        htmlTable += `<td>${ele.juz}</td>`;
        htmlTable += `<td>${ele.dars}</td>`;
        htmlTable += `<td>${ele.tamrin}</td>`;
        // htmlTable += `<td>${(typeof ele.hal === 'undefined') ? 0 : ele.hal}</td>`;
        htmlTable += `<td>${ele.hal}</td>`;
        htmlTable += `<td style="font-size: 80%;">${ele.kalimat}</td>`;
        htmlTable += `</body>`;


    })
    }
    else{
        //qty4 = qty2;
        val.forEach((ele,ind) => {
            //console.log(ele);
            //htmlRandom += `<div>${ind+1}. ${ele.kalimat}</div>`;
            htmlTable += `<tr></tr>`;
            htmlTable += `<td>${ind+1}.</td>`;
            htmlTable += `<td>${ele.juz}</td>`;
            htmlTable += `<td>${ele.dars}</td>`;
            htmlTable += `<td>${ele.tamrin}</td>`;
            // htmlTable += `<td>${(typeof ele.hal === 'undefined') ? 0 : ele.hal}</td>`;
            htmlTable += `<td>${ele.hal}</td>`;
            htmlTable += `<td style="font-size: 80%;">${ele.kalimat}</td>`;
        })
    }
    // html += `<small>${JSON.stringify(val)}</small>`;
    // output.innerHTML = html;
    //outputRandom.innerHTML = htmlRandom;
    outputTable.innerHTML = htmlTable;

    //console.log(`qty2 :  ${qty2} qty3 :  ${qty3}`)
    console.log(randomListNumber);
    console.log('random;ist',randomList);
    randomList.length = 0;
    randomListNumber.length = 0;
    console.log('val',val);
    
}