
// const section = document.querySelector(selectors: 'section')
// section.addEventListener(type: 'click', changeBg)
// function changeBg(){
//     section.style.backgroundColor = '#eef88';
// }

// const section = document.querySelector(selectors:'section.vip')
// const btn = document.querySelector(selectors:'button');
// const color = document.querySelector(selectors:'input');
// btn.addEventListener(type:'click', changeBG);

// function changeBg(){
//     section.style.backgroundColor = color.value;
// }

//Sukurti JS aplikacija, kurios pagalba uzpildzius laukus:
// Sriftas, srifto dydis, teksto spalva
// visom pastraipom nustatomas: sriftas, srifto dydis, teksto spalva



const btn = document.querySelector('button');
const color = document.querySelector(selectors:'input');
const sections = document.querySelector(selectors: 'p')
btn.addEventListener(type:'click', changeBg)
    for (let section of sections){
        section.style.backgroundColor = color.value
    }

// function changeBG(){
//     section.style.backgroundColor = color.value;
// }