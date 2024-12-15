const startPl = document.querySelector('#startPl');
const startEng = document.querySelector('#startEng');

const game = document.getElementById("game");
const body = document.body; 
console.log(game);
console.log(body);

// initialize buttons
startPl.onclick = goStartPl;
startEng.onclick = goStartEng;

// global varibles
let myQuestion = document.createElement("p");
myQuestion.textContent = "";

let mayorText = document.createElement("p");

//functions in Polish [test1, test2 ,test 3]
function appendToGame(...args) {
  args.forEach(element => {
    game.appendChild(element)
  });
}

function addClassName(elements, name) {
  elements.forEach(element => {
    element.classList.add(name)
  }

  )
}

function goStartPl() {
  document.getElementById("title").style.display = "none";
  document.getElementById("description").style.display = "none";
  document.getElementById("start-btn").style.display = "none";
  
  
  let text1 = document.createElement("p");
  text1.textContent = dialogs.goStartPl.text1;
  let text2 = document.createElement("p");
  text2.textContent = dialogs.goStartPl.text2;
  let text3 = document.createElement("p");
  text3.textContent = dialogs.goStartPl.text3;
  let text4 = document.createElement("p");
  text4.textContent = dialogs.goStartPl.text4;
  let text5 = document.createElement("p");
  text5.textContent = dialogs.goStartPl.text5;

  addClassName([text1, text2, text3, text4, text5], "startText");
  appendToGame(text1, text2, text3, text4, text5);

  const keepGoingBtnPl = document.createElement("button");
  keepGoingBtnPl.textContent = "Kontynuuj";
  keepGoingBtnPl.style.cursor = "pointer";
  keepGoingBtnPl.style.color = "lightgray";
  keepGoingBtnPl.id = "keep-going-btn-pl";
  keepGoingBtnPl.style.display; "flex";
  keepGoingBtnPl.style.justifyContent; "center";
  keepGoingBtnPl.style.alignItems; "center";
  keepGoingBtnPl.style.padding; "10px";
  
  game.appendChild(keepGoingBtnPl);

  keepGoingBtnPl.onclick = meetMayorPl;

};

function meetMayorPl() {
  // było: document.getElementsByClassName("startText").style.display = "none";
  const startTextElements = document.getElementsByClassName("startText"); //tutaj był błąd
  for (let element of startTextElements) {
  element.style.display = "none";
  }

  document.getElementById("keep-going-btn-pl").style.display = "none";
  
  let text1 = document.createElement("p");
  text1.textContent = dialogs.meetMayorPl.text1;
  let text2 = document.createElement("p");
  text2.textContent= dialogs.meetMayorPl.text2;
  let text3 = document.createElement("p");
  text3.textContent = dialogs.meetMayorPl.text3;
  let text4 = document.createElement("p");
  text4.textContent = dialogs.meetMayorPl.text4;
  let text5 = document.createElement("p");
  text5.textContent = dialogs.meetMayorPl.text5;

  addClassName([text1, text2, text3, text4, text5], "mayorText");
  appendToGame(text1, text2, text3, text4, text5);

  const startInterviewMayor = document.createElement("button");
  startInterviewMayor.textContent = "Przesłuchaj Burmistrza";
  startInterviewMayor.style.cursor = "pointer";
  startInterviewMayor.style.color = "lightgray";
  startInterviewMayor.id = "interview-mayor";
  
  game.appendChild(startInterviewMayor);
  
  startInterviewMayor.onclick = goStartInterviewMayor;

}

function goStartInterviewMayor() {
  const meetMayorPlElements = document.getElementsByClassName("mayorText"); //???
  for (let element of meetMayorPlElements) {
  element.style.display = "none";
  }

  document.getElementById("interview-mayor").style.display = "none";


  //let myQuestion = document.createElement("p");
  //myQuestion.textContent = ""; - uwarunkowaliśmy globalnie

  game.appendChild(myQuestion);

  const mayorQuestion1 = document.createElement("button");
  mayorQuestion1.textContent = "Zapytaj o wydarzenia w mieście";
  mayorQuestion1.style.cursor = "pointer";
  mayorQuestion1.style.color = "lightgray";
  mayorQuestion1.classList.add("mayor-question");
  mayorQuestion1.style.display = "flex";
  mayorQuestion1.style.justifyContent = "center";
  mayorQuestion1.style.alignItems = "center";
  mayorQuestion1.style.padding = "10px";
  

  const mayorQuestion2 = document.createElement("button");
  mayorQuestion2.textContent = "Zaytaj o Althorna i jego relacje z mieszkańcami";
  mayorQuestion2.style.cursor = "pointer";
  mayorQuestion2.style.color = "lightgray";
  mayorQuestion2.classList.add("mayor-question");
  mayorQuestion2.style.display = "flex";
  mayorQuestion2.style.justifyContent = "center";
  mayorQuestion2.style.alignItems = "center";
  mayorQuestion2.style.padding = "10px";

  const mayorQuestion3 = document.createElement("button");
  mayorQuestion3.textContent = "Zapytaj o miejsce zbrodni";
  mayorQuestion3.style.cursor = "pointer";
  mayorQuestion3.style.color = "lightgray";
  mayorQuestion3.classList.add("mayor-question");
  mayorQuestion3.style.display = "flex";
  mayorQuestion3.style.justifyContent = "center";
  mayorQuestion3.style.alignItems = "center";
  mayorQuestion3.style.padding = "10px";

  const mayorQuestion4 = document.createElement("button");
  mayorQuestion4.textContent = "Zapytaj o podejrzanych i wrogów Althorna";
  mayorQuestion4.style.cursor = "pointer";
  mayorQuestion4.style.color = "lightgray";
  mayorQuestion4.classList.add("mayor-question");
  mayorQuestion4.style.display = "flex";
  mayorQuestion4.style.justifyContent = "center";
  mayorQuestion4.style.alignItems = "center";
  mayorQuestion4.style.padding = "10px";

  const mayorQuestion5 = document.createElement("button");
  mayorQuestion5.textContent = "Zapytaj o magię luster i portale";
  mayorQuestion5.style.cursor = "pointer";
  mayorQuestion5.style.color = "lightgray";
  mayorQuestion5.classList.add("mayor-question");
  mayorQuestion5.style.display = "flex";
  mayorQuestion5.style.justifyContent = "center";
  mayorQuestion5.style.alignItems = "center";
  mayorQuestion5.style.padding = "10px";

  const selectNextStep = document.createElement("button");
  selectNextStep.textContent = "Zakończ przesłuchanie i idź dalej";
  selectNextStep.style.cursor = "pointer";
  selectNextStep.style.color = "lightgray";
  selectNextStep.classList.add("mayor-question");
  selectNextStep.style.display = "flex";
  selectNextStep.style.justifyContent = "center";
  selectNextStep.style.alignItems = "center";
  selectNextStep.style.padding = "10px";

  const mayorIMG = document.createElement("img");
  mayorIMG.src = "./resources/Mayor.png";
  mayorIMG.alt = "Mayor Picture";
  mayorIMG.id = "mayor-picture";

  

  //let mayorText = document.createElement("p") - uwarunkowaliśmy globalnie
  mayorText.textContent = "'Cieszę się, że jesteś tutaj. To miasto potrzebuje odpowiedzi. Jeśli chcesz wiedzieć coś więcej o sytuacji, o Althornie, o tym, co się tu wydarzyło, pytaj o co chcesz. Czasu jest mało, ale zrobię, co w mojej mocy, by Ci pomóc.'"


  game.appendChild(mayorQuestion1);
  game.appendChild(mayorQuestion2);
  game.appendChild(mayorQuestion3);
  game.appendChild(mayorQuestion4);
  game.appendChild(mayorQuestion5);
  game.appendChild(selectNextStep);

  game.appendChild(myQuestion);

  game.appendChild(mayorIMG);
  game.appendChild(mayorText);
  

  mayorQuestion1.onclick = mayorQuestion1Handler;
  mayorQuestion2.onclick = mayorQuestion2Handler;
  mayorQuestion3.onclick = mayorQuestion3Handler;
  mayorQuestion4.onclick = mayorQuestion4Handler;
  mayorQuestion5.onclick = mayorQuestion5Handler;
  selectNextStep.onclick = selectNextStepHandler;

};

function mayorQuestion1Handler() {
  myQuestion.textContent = dialogs.mayorQuestion1Handler.myQuestion;
  mayorText.textContent = dialogs.mayorQuestion1Handler.mayorText;
};

function mayorQuestion2Handler() {
  myQuestion.textContent = dialogs.mayorQuestion2Handler.myQuestion;
  mayorText.textContent = dialogs.mayorQuestion2Handler.mayorText;
};

function mayorQuestion3Handler() {
  myQuestion.textContent = dialogs.mayorQuestion3Handler.myQuestion;
  mayorText.textContent = dialogs.mayorQuestion3Handler.mayorText;
};

function mayorQuestion4Handler() {
  myQuestion.textContent = dialogs.mayorQuestion4Handler.myQuestion;
  mayorText.textContent = dialogs.mayorQuestion4Handler.mayorText;
};

function mayorQuestion5Handler() {
  myQuestion.textContent = dialogs.mayorQuestion5Handler.myQuestion;
  mayorText.textContent = dialogs.mayorQuestion5Handler.mayorText;
};

function selectNextStepHandler() {
  const goStartInterviewMayorElements = document.getElementsByClassName("mayor-question");
  for (let element of goStartInterviewMayorElements) {
  element.style.display = "none";
  }
  //document.getElementsById("mayor-picture").style.display = "none"; jeszcze nie znikam obrazka

  mayorText.textContent = dialogs.selectNextStepHandler.mayorText;

  let question = document.createElement("h1");
  question.textContent = "Jak przeprowadzisz śledztwo?";
  game.appendChild(question);

  const selectNextStep1 = document.createElement("button");
  selectNextStep1.textContent = "Przesłuchaj świadków";
  selectNextStep1.style.cursor = "pointer";
  selectNextStep1.style.color = "lightgray";
  selectNextStep1.classList.add = "next-step-question";
  selectNextStep1.style.display = "flex";
  selectNextStep1.style.justifyContent = "center";
  selectNextStep1.style.alignItems = "center";
  selectNextStep1.style.padding = "10px";

  const selectNextStep2 = document.createElement("button");
  selectNextStep2.textContent = "Zbadaj miejsce zbrodni";
  selectNextStep2.style.cursor = "pointer";
  selectNextStep2.style.color = "lightgray";
  selectNextStep2.classList.add = "next-step-question";
  selectNextStep2.style.display = "flex";
  selectNextStep2.style.justifyContent = "center";
  selectNextStep2.style.alignItems = "center";
  selectNextStep2.style.padding = "10px";

  const selectNextStep3 = document.createElement("button");
  selectNextStep3.textContent = "Przeprowadź śledztwo w mieście";
  selectNextStep3.style.cursor = "pointer";
  selectNextStep3.style.color = "lightgray";
  selectNextStep3.classList.add = "next-step-question";
  selectNextStep3.style.display = "flex";
  selectNextStep3.style.justifyContent = "center";
  selectNextStep3.style.alignItems = "center";
  selectNextStep3.style.padding = "10px";

  game.appendChild(selectNextStep1);
  game.appendChild(selectNextStep2);
  game.appendChild(selectNextStep3);

  selectNextStep1.onclick = interviewVitneses;
  selectNextStep2.onclick = crimeSceneAnalysis;
  selectNextStep3.onclick = ownInvestigationAtTown;

};

function interviewVitneses() {
  const selectNextStepHandlerElements =  document.getElementsByClassName("next-step-question", "mayorText");
  for (let element of selectNextStepHandlerElements) {
    element.style.display = "none";
  }

  let interviewStartText = document.createElement("h1");
  interviewStartText.textContent = "Świadkowie czekają w jednej z sal ratusza. Każdy z nich został wezwany tutaj, by złożyć swoje zeznania, a teraz masz możliwość przesłuchania ich osobiście. To od ciebie zależy, w jakiej kolejności porozmawiasz z każdą z tych osób i jakich szczegółów zdołasz się dowiedzieć.";

  game.appendChild(interviewStartText);

  const InterviewStudent = document.createElement("button");
  InterviewStudent.textContent = "Przesłuchaj Ucznia";
  InterviewStudent.style.cursor = "pointer";
  InterviewStudent.style.color = "lightgray";
  InterviewStudent.classList.add = "interview";
  InterviewStudent.style.display = "flex";
  InterviewStudent.style.justifyContent = "center";
  InterviewStudent.style.alignItems = "center";
  InterviewStudent.style.padding = "10px";

  const InterviewWitch = document.createElement("button");
  InterviewWitch.textContent = "Przesłuchaj Wiedźmę";
  InterviewWitch.style.cursor = "pointer";
  InterviewWitch.style.color = "lightgray";
  InterviewWitch.classList.add = "interview";
  InterviewWitch.style.display = "flex";
  InterviewWitch.style.justifyContent = "center";
  InterviewWitch.style.alignItems = "center";
  InterviewWitch.style.padding = "10px";

  const InterviewKeeper = document.createElement("button");
  InterviewKeeper.textContent = "Przesłuchaj Strażniczkę Luster";
  InterviewKeeper.style.cursor = "pointer";
  InterviewKeeper.style.color = "lightgray";
  InterviewKeeper.classList.add = "interview";
  InterviewKeeper.style.display = "flex";
  InterviewKeeper.style.justifyContent = "center";
  InterviewKeeper.style.alignItems = "center";
  InterviewKeeper.style.padding = "10px";

  const FinishInterview = document.createElement("button");
  FinishInterview.textContent = "Zakończ przesłuchania";
  FinishInterview.style.cursor = "pointer";
  FinishInterview.style.color = "lightgray";
  FinishInterview.classList.add = "interview";
  FinishInterview.style.display = "flex";
  FinishInterview.style.justifyContent = "center";
  FinishInterview.style.alignItems = "center";
  FinishInterview.style.padding = "10px";

  game.appendChild(InterviewStudent);
  game.appendChild(InterviewWitch);
  game.appendChild(InterviewKeeper);
  game.appendChild(FinishInterview);

  InterviewStudent.onclick = goInterviewStudent;
  InterviewWitch.onclick = goInterviewWitch;
  InterviewKeeper.onclick = goInterviewKeeper;
  FinishInterview.onclick = goFinishInterview;

};


function crimeSceneAnalysis() {

  const selectNextStepHandlerElements =  document.getElementsByClassName("next-step-question", );
  for (let element of selectNextStepHandlerElements) {
    element.style.display = "none";
  }

  let crimeSceneInvestigationText1 = document.createElement("h1");
  crimeSceneInvestigationText1.textContent = dialogs.crimeSceneAnalysis.crimeSceneInvestigationText1;

  let crimeSceneInvestigationText2 = document.createElement("h1");
  crimeSceneInvestigationText2.textContent = dialogs.crimeSceneAnalysis.crimeSceneInvestigationText2;

  game.appendChild(crimeSceneInvestigationText1);
  game.appendChild(crimeSceneInvestigationText2);

  const checkRunes = document.createElement("button");
  checkRunes.textContent = "Sprawdź runy";
  checkRunes.style.cursor = "pointer";
  checkRunes.style.color = "lightgray";
  checkRunes.classList.add = "evidence";
  checkRunes.style.display = "flex";
  checkRunes.style.justifyContent = "center";
  checkRunes.style.alignItems = "center";
  checkRunes.style.padding = "10px";

  const checkNotes = document.createElement("button");
  checkNotes.textContent = "Sprawdź notatki";
  checkNotes.style.cursor = "pointer";
  checkNotes.style.color = "lightgray";
  checkNotes.classList.add = "evidence";
  checkNotes.style.display = "flex";
  checkNotes.style.justifyContent = "center";
  checkNotes.style.alignItems = "center";
  checkNotes.style.padding = "10px";

  const checkMirrorsElements = document.createElement("button");
  checkMirrorsElements.textContent = "Sprawdź fragmenty luster";
  checkMirrorsElements.style.cursor = "pointer";
  checkMirrorsElements.style.color = "lightgray";
  checkMirrorsElements.classList.add = "evidence";
  checkMirrorsElements.style.display = "flex";
  checkMirrorsElements.style.justifyContent = "center";
  checkMirrorsElements.style.alignItems = "center";
  checkMirrorsElements.style.padding = "10px";

  const checkFightTraces = document.createElement("button");
  checkFightTraces.textContent = "Sprawdź ślady walki";
  checkFightTraces.style.cursor = "pointer";
  checkFightTraces.style.color = "lightgray";
  checkFightTraces.classList.add = "evidence";
  checkFightTraces.style.display = "flex";
  checkFightTraces.style.justifyContent = "center";
  checkFightTraces.style.alignItems = "center";
  checkFightTraces.style.padding = "10px";

  const checkPortal = document.createElement("button");
  checkPortal.textContent = "Sprawdź portal";
  checkPortal.style.cursor = "pointer";
  checkPortal.style.color = "lightgray";
  checkPortal.classList.add = "evidence";
  checkPortal.style.display = "flex";
  checkPortal.style.justifyContent = "center";
  checkPortal.style.alignItems = "center";
  checkPortal.style.padding = "10px";

  const finishCrimeSceneAnalysis = document.createElement("button");
  finishCrimeSceneAnalysis.textContent = "Zakończ oględzyny";
  finishCrimeSceneAnalysis.style.cursor = "pointer";
  finishCrimeSceneAnalysis.style.color = "lightgray";
  finishCrimeSceneAnalysis.classList.add = "evidence";
  finishCrimeSceneAnalysis.style.display = "flex";
  finishCrimeSceneAnalysis.style.justifyContent = "center";
  finishCrimeSceneAnalysis.style.alignItems = "center";
  finishCrimeSceneAnalysis.style.padding = "10px";

  game.appendChild(checkRunes);
  game.appendChild(checkNotes);
  game.appendChild(checkMirrorsElements);
  game.appendChild(checkFightTraces);
  game.appendChild(checkPortal);
  game.appendChild(finishCrimeSceneAnalysis);

  checkRunes.onclick = goCheckRunes;
  checkNotes.onclick = goCheckNotes;
  checkMirrorsElements.onclick = goCheckMirrorsElements;
  checkFightTraces.onclick = goCheckFightTraces;
  checkPortal.onclick = goCheckPortal;
  finishCrimeSceneAnalysis.onclick = goFinishCrimeSceneAnalysis;

};

function ownInvestigationAtTown() {

  const selectNextStepHandlerElements =  document.getElementsByClassName("next-step-question");
  for (let element of selectNextStepHandlerElements) {
    element.style.display = "none";
  }

  let ownInvestigationText1 = document.createElement("h1");
  ownInvestigationText1.textContent = "Zostawiasz miejsce zbrodni za sobą i kierujesz się w głąb miasta. Luthen, choć tonie w mgle, żyje własnym rytmem – mieszkańcy pospiesznie mijają się na ulicach, a w powietrzu czuć niepokój. To tutaj, pośród zaułków, tawern i cieni codziennego życia, mogą kryć się odpowiedzi.";

  let ownInvestigationText2 = document.createElement("h1");
  ownInvestigationText2.textContent = "Twoje śledztwo musi być precyzyjne – nie wszyscy będą chętni do rozmowy, a niektóre miejsca mogą wymagać twojej przebiegłości lub reputacji. Wiesz, że Eliasz Althorn miał kontakty zarówno wśród elit, jak i w bardziej szemranych kręgach. Być może to właśnie oni mogą rzucić światło na sprawę – o ile zdołasz zdobyć ich zaufanie lub rozwiązać ich własne problemy.";

  game.appendChild(ownInvestigationText1);
  game.appendChild(ownInvestigationText2);

  const market = document.createElement("button");
  market.textContent = "Odwiedź targowisko";
  market.style.cursor = "pointer";
  market.style.color = "lightgray";
  market.classList.add = "town";
  market.style.display = "flex";
  market.style.justifyContent = "center";
  market.style.alignItems = "center";
  market.style.padding = "10px";

  const inn = document.createElement("button");
  inn.textContent = "Odwiedź Karczmę";
  inn.style.cursor = "pointer";
  inn.style.color = "lightgray";
  inn.classList.add = "town";
  inn.style.display = "flex";
  inn.style.justifyContent = "center";
  inn.style.alignItems = "center";
  inn.style.padding = "10px";

  const studentHouse = document.createElement("button");
  studentHouse.textContent = "Odwiedź dom ucznia";
  studentHouse.style.cursor = "pointer";
  studentHouse.style.color = "lightgray";
  studentHouse.classList.add = "town";
  studentHouse.style.display = "flex";
  studentHouse.style.justifyContent = "center";
  studentHouse.style.alignItems = "center";
  studentHouse.style.padding = "10px";

  const witchHouse = document.createElement("button");
  witchHouse.textContent = "Odwiedź Chatę Wiedźmy";
  witchHouse.style.cursor = "pointer";
  witchHouse.style.color = "lightgray";
  witchHouse.classList.add = "town";
  witchHouse.style.display = "flex";
  witchHouse.style.justifyContent = "center";
  witchHouse.style.alignItems = "center";
  witchHouse.style.padding = "10px";

  const mayorOffice = document.createElement("button");
  mayorOffice.textContent = "Odwiedź gabinet Burmistrza";
  mayorOffice.style.cursor = "pointer";
  mayorOffice.style.color = "lightgray";
  mayorOffice.classList.add = "town";
  mayorOffice.style.display = "flex";
  mayorOffice.style.justifyContent = "center";
  mayorOffice.style.alignItems = "center";
  mayorOffice.style.padding = "10px";

  const keeperQuarters = document.createElement("button");
  keeperQuarters.textContent = "Odwiedź Kwatery Strażniczki Luster";
  keeperQuarters.style.cursor = "pointer";
  keeperQuarters.style.color = "lightgray";
  keeperQuarters.classList.add = "town";
  keeperQuarters.style.display = "flex";
  keeperQuarters.style.justifyContent = "center";
  keeperQuarters.style.alignItems = "center";
  keeperQuarters.style.padding = "10px";

  game.appendChild(market)
  game.appendChild(inn)
  game.appendChild(studentHouse)
  game.appendChild(witchHouse)
  game.appendChild(mayorOffice)
  game.appendChild(keeperQuarters)

  market.onclick = goMarket;
  inn.onclick = goInn;
  studentHouse.onclick = goStudentHouse;
  witchHouse.onclick = goWitchHouse;
  mayorOffice.onclick = goMayorOffice;
  keeperQuarters.onclick = goKeeperQuarters;

};

// funkcje dla ścieżki "Przesłuchaj świadków"

function goInterviewStudent() {

};

function goInterviewWitch() {

};

function goInterviewKeeper() {

};

function goFinishInterview() {

};



// funkcje dla ścieżki "Zbadaj miejsce zbrodni"

function goCheckRunes() {

};

function goCheckNotes() {

};

function goCheckMirrorsElements() {

};

function goCheckFightTraces() {

};

function goCheckPortal() {

};

function goFinishCrimeSceneAnalysis() {

};



// funkcje dla ścieżki "Przeprowadź śledztwo w mieście"

function goMarket() {

};

function goInn() {

};

function goStudentHouse() {

};

function goWitchHouse() {

};

function goMayorOffice() {

};

function goKeeperQuarters() {

};





//functions in Engish

function goStartEng() {
  document.getElementById("title").style.display = "none";
  document.getElementById("description").style.display = "none";
  document.getElementById("start-btn").style.display = "none";

  let text1 = document.createElement("p");
  text1.textContent = "The night over Luthen was as black as ink, pierced only by the faint glimmer of stars. The city, shrouded in mist, seemed to hold its breath. In this silence—more a threat than a comfort—something happened in the residence of Elias Althorn, the renowned master of mirror magic, that shook the very foundations of the world."

  let text2 = document.createElement("p");
  text2.textContent = "The guards swiftly sealed the crime scene, but news of Althorn's death spread through the city like wildfire. Someone had dared to disturb the fragile balance between the world of humans and the mirror dimension. Someone had killed the only man who could control that power."

  let text3 = document.createElement("p");
  text3.textContent = "The portal remains open, its light twisting reality more and more, and time is running out. If you don’t uncover the truth and find the culprit, the city of Luthen will be reduced to nothing more than dust in the wind—devoured by the bottomless mirror."

  let text4 = document.createElement("p");
  text4.textContent = "Now, you stand at the heart of this story. Can you unravel the mystery? Will you discover what happened that night? Every decision you make will have consequences. Every choice will bring you closer to the truth... or to ruin."

  let text5 = document.createElement("p");
  text5.textContent = "Time is slipping away. The investigation begins now."

  const gameElement = document.querySelector("#game");

  game.appendChild(text1);
  game.appendChild(text2);
  game.appendChild(text3);
  game.appendChild(text4);
  game.appendChild(text5);


  const keepGoingBtnEng = document.createElement("button");
  keepGoingBtnEng.textContent = "Continue";
  keepGoingBtnEng.style.cursor = "pointer";
  keepGoingBtnEng.style.color = "lightgray";
  
  game.appendChild(keepGoingBtnEng);
};