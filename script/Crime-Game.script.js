const startPl = document.querySelector('#startPl');
const startEng =document.querySelector('#startEng');

const game = document.getElementById("game");
const body = document.body; 
console.log(game);
console.log(body);

// initialize buttons
startPl.onclick = goStartPl;
startEng.onclick = goStartEng;

//functions

function goStartPl() {
  document.getElementById("title").style.display = "none";
  document.getElementById("description").style.display = "none";
  document.getElementById("start-btn").style.display = "none";
  
  
  let text1 = document.createElement("p");
  text1.textContent = "Noc nad Luthen była czarna jak atrament, przetykana jedynie słabym blaskiem gwiazd. Miasto, spowite mgłą, zdawało się wstrzymywać oddech. W tej ciszy, która bardziej przypominała groźbę niż ukojenie, w rezydencji Eliasza Althorna – wybitnego mistrza magii luster – wydarzyło się coś, co wstrząsnęło podstawami świata."

  let text2 = document.createElement("p");
  text2.textContent = "Strażnicy szybko zamknęli miejsce zbrodni, a wiadomość o śmierci Althorna rozeszła się po mieście jak pożar. Ktoś odważył się naruszyć równowagę między światem ludzi a lustrzanym wymiarem. Ktoś zabił jedynego człowieka, który mógł opanować tę moc."

  let text3 = document.createElement("p");
  text3.textContent = "Portal pozostaje otwarty, jego światło coraz bardziej zniekształca rzeczywistość, a czas ucieka. Jeśli nie odkryjesz prawdy i nie znajdziesz sprawcy, miasto Luthen stanie się niczym więcej niż pyłem na wietrze – pochłoniętym przez bezdenne lustro."

  let text4 = document.createElement("p");
  text4.textContent = "Teraz to Ty stoisz w centrum tej opowieści. Czy dasz radę rozwikłać tajemnicę? Czy odkryjesz, co wydarzyło się tej nocy? Każda decyzja będzie miała swoje konsekwencje. Każdy wybór zbliży Cię do prawdy... lub do zguby."

  let text5 = document.createElement("p");
  text5.textContent = "Czas płynie. Śledztwo zaczyna się teraz."

  game.appendChild(text1);
  game.appendChild(text2);
  game.appendChild(text3);
  game.appendChild(text4);
  game.appendChild(text5);

  const keepGoingBtnPl = document.createElement("button");
  keepGoingBtnPl.textContent = "Kontynuuj";
  keepGoingBtnPl.style.cursor = "pointer";
  keepGoingBtnPl.style.color = "lightgray";
  
  game.appendChild(keepGoingBtnPl);


};

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