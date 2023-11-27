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

function addChoiceContainerToDom() {
   
    const main = document.querySelector('main');
   

    // création du fond 
    const imgContainer = document.createElement(`section`);
    imgContainer.id = `imgContainer`;
    imgContainer.style.backgroundImage = `url(./images/boule_de_cristal.jpg)`;
    imgContainer.style.width = '600px';
    imgContainer.style.height = '485px';
    main.appendChild(imgContainer);
    
    


    // const choiceContainer = document.getElementById(`randomChoiceContainer`);
    const choiceContainer = document.createElement(`div`);
    choiceContainer.id = `randomChoiceContainer`;
    imgContainer.appendChild(choiceContainer);
    buildResultChoiceContainerHTML();
   
    

    // const buttonContainer = document.getElementById('buttonContainer'); 
    const luckyButton = document.getElementById(`luckyButton`);
    luckyButton.addEventListener('click', () => {
      buildResultChoiceContainerHTML();
      count();
    });
   
  
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