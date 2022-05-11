const API_LIM = 'https://api.adviceslip.com/advice'
const adviceNumber = document.querySelector(".advice-generator__number")
const adviceQuote = document.querySelector(".advice-generator__quote")
const btn= document.querySelector(".advice-generator__btn")

const fectNewAdvice = async() => {
    const response = await fetch(API_LIM);
    const data = await response.json();
    console.log(data);
    return data;
};


const renderAdvice = (adviceObject) => {
  const {id,advice} = adviceObject;
  adviceNumber.textContent=`ADVICE #${id}`;
  adviceQuote.textContent = advice;
  console.log( adviceNumber.value+"  "+adviceQuote.value);
};

const generateNewAdvice = async() => {
  const data = await fectNewAdvice();
  const advice = data.slip;
  console.log(advice)
  renderAdvice(advice);
};


window.addEventListener('DOMContentLoaded',()=>{
  btn.addEventListener('click',generateNewAdvice)
})

