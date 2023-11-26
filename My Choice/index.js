console.log("hello gros");

const h1Element = document.querySelector(`#h1`);
h1Element.style.color ="#F0F";



const form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();

    let resultRandomChoice = Boolean(Math.random() > 0.5);
    console.log(resultRandomChoice);
    if (resultRandomChoice===false) {
       resultRandomChoice = String(resultRandomChoice);
       resultRandomChoice = "Back";
        return document.getElementById(`resultChoice`).value = resultRandomChoice;
        
    }
    if (resultRandomChoice===true){
        resultRandomChoice = String(resultRandomChoice);
        resultRandomChoice = "Front";
        document.getElementById(`resultChoice`).value = resultRandomChoice;
        return resultRandomChoice;
    }
   
})







// function addChoiceContainerToDom(){
//     console.log("j'arrive")
//     const main = document.querySelector('main');
//     const choiceContainer = document.getElementById(`randomChoiceContainer`);
//     buildResultChoiceContainerHTML();
//     // choiceContainer.insertAdjacentHTML("beforeend",buildResultChoiceContainerHTML());
//     console.log("j'arrive2");
//     const luckyButton = document.getElementById(`luckyButton`);
//     luckyButton.addEventListener('click',()=>{
        
//         buildResultChoiceContainerHTML();
//         count();
//     });

//     console.log("j'arrive3"+ luckyButton);
   
//     function booleenRandomer() {
      
//         return Boolean(Math.random() > 0.5);
      
//     }

//   function buildResultChoiceContainerHTML() {

    
//      let randomResult=booleenRandomer();
//     // console.log(randomResult)
//     let containerContent;
//      if (randomResult===false) {
//         containerContent = buildResponseFromFrontHtml();
//     } else {
//         containerContent = buildResponseFromBackHtml();
//     }
//     choiceContainer.innerHTML = containerContent;
//     // console.log("je continue2"+randomResult);

//     function buildResponseFromFrontHtml(){
//      return`
//             <div class="counter">
               
//                 <i data-final="F"></i>
//                 <i data-final="R"></i>
//                 <i data-final="O"></i>
//                 <i data-final="N"></i>
//                 <i data-final="T"></i>
               
               
//           </div>
//           `;

//     }
//     // console.log("je continue3")
//     function buildResponseFromBackHtml(){
//      return`
//               <div class="counter">
                 
//                   <i data-final="B"></i>
//                   <i data-final="A"></i>
//                   <i data-final="C"></i>
//                   <i data-final="K"></i>
//                   <i data-final=">"></i>
                 
//               </div>
//            `;
  
//     }
   
//   }

//   function count() {
//     console.log("je vais counter attention")
//     // let randomResult= Boolean(Math.random() > 0.5);
//     const symboles = "%<!>?/"
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "0123456789"
//     const string = numbers + letters + symboles;
//     const allCounters = document.querySelectorAll(".counter > i");
  
//     allCounters.forEach(function(el) {
//       let duration = 1000 + Array.from(allCounters).indexOf(el) * 1000;        
//       let interval = setInterval(function() {
//         el.innerText = string.charAt(Math.random() * string.length);
//         duration = duration - 50;
//         if (duration <= 0) {
//           clearInterval(interval);
//           el.innerText = el.getAttribute("data-final");
//         }
//       }, 50);
//     });
//     console.log("je count et c'est super")
//   }
// }
// addChoiceContainerToDom()
// console.log(addChoiceContainerToDom())
// function count() {
//     let symboles = "%<!>?/"
//     var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var numbers = "0123456789"
//     var string = numbers + letters + symboles;
//     var allCounters = document.querySelectorAll(".counter > i");
  
//     allCounters.forEach(function(el) {
//       var duration = 1000 + Array.from(allCounters).indexOf(el) * 1000;        
//       var interval = setInterval(function() {
//         el.innerText = string.charAt(Math.random() * string.length);
//         duration = duration - 50;
//         if (duration <= 0) {
//           clearInterval(interval);
//           el.innerText = el.getAttribute("data-final");
//         }
//       }, 50);
//     });
//   }
  
//   count();
  
//   document.addEventListener('click', count)




function addChoiceContainerToDom() {
    console.log("j'arrive");
    const main = document.querySelector('main');
    const choiceContainer = document.getElementById(`randomChoiceContainer`);
    buildResultChoiceContainerHTML();
    console.log("j'arrive2");
    const buttonContainer = document.getElementById('buttonContainer'); 
    const luckyButton = document.getElementById(`luckyButton`);
    luckyButton.addEventListener('click', () => {
      buildResultChoiceContainerHTML();
      count();
    });
    console.log("j'arrive3" + luckyButton);
  
    function buildResultChoiceContainerHTML() {
      function booleenRandomer() {
        return Boolean(Math.random() > 0.5);
      }
  
      let randomResult = booleenRandomer();
      let containerContent;
  
      if (randomResult === false) {
        containerContent = buildResponseFromFrontHtml();
      } else {
        containerContent = buildResponseFromBackHtml();
      }
  
      // Efface le contenu actuel
      choiceContainer.innerHTML = '';
  
      // Crée et ajoute les nouveaux éléments
      const newContent = document.createElement('div');
      newContent.className = 'result-container';
      newContent.innerHTML = containerContent;
      choiceContainer.appendChild(newContent);
  
    //   Ajoute le bouton après la création des éléments
      const newButton = document.createElement('button');
      newButton.id = 'luckyButton';
      newButton.classList = `luckyButton`;
      newButton.textContent = `Voir mon avenir`;
      newButton.addEventListener('click', () => {
        buildResultChoiceContainerHTML();
        count();
      });
      choiceContainer.appendChild(newButton);
    }
  
    function buildResponseFromFrontHtml() {
      return `
        <div class="counter">
          <i data-final="F"></i>
          <i data-final="R"></i>
          <i data-final="O"></i>
          <i data-final="N"></i>
          <i data-final="T"></i>
        </div>`;
    }
  
    function buildResponseFromBackHtml() {
      return `
        <div class="counter">
          <i data-final="B"></i>
          <i data-final="A"></i>
          <i data-final="C"></i>
          <i data-final="K"></i>
          <i data-final=">"></i>
        </div>`;
    }
  
    function count() {
      console.log("je vais counter attention");
      const symboles = "%<!>?/";
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbers = "0123456789";
      const string = numbers + letters + symboles;
      const allCounters = document.querySelectorAll(".counter > i");
  
      allCounters.forEach(function (el) {
        let duration = 1000 + Array.from(allCounters).indexOf(el) * 1000;
        let interval = setInterval(function () {
          el.innerText = string.charAt(Math.random() * string.length);
          duration = duration - 50;
          if (duration <= 0) {
            clearInterval(interval);
            el.innerText = el.getAttribute("data-final");
          }
        }, 50);
      });
  
      console.log("je count et c'est super");
    }
  }
  
  addChoiceContainerToDom();