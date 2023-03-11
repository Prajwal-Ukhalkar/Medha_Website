document.addEventListener("DOMContentLoaded", function () {
  let event = localStorage.getItem("Event");
  document.getElementById("heading").innerHTML =
    event.replaceAll("_", " ") + " Winners";
  selectWinners(event);
});

let winners = [
  {
    event: "Event",
    winner1: "Winner1",
    // winner2: "Winner2",
    // winner3: "Winner3",
  },
];

function selectWinners(events) {
  winners.forEach((obj) => {
    if (obj.event == events) {
      displayWinners(obj);
    } else {
      document.getElementById("photoLabel").innerText = "No photos Availaible";
    }
  });
}

function displayWinners(obj) {
  document.getElementById("first").innerHTML = "1. " + obj.winner1;
  // document.getElementById("second").innerHTML = "2. " + obj.winner2;
  // document.getElementById("third").innerHTML = "3. " + obj.winner3;
  displayImages(obj.event);
}
function displayImages(event) {
  let main_grid = document.getElementById("main_grid");
  for (let i = 1; i < 10; i++) {
    let img = document.createElement("img");
    img.className = "h-full w-full md:h-[200px] md:w-[200px]";
    img.src = `event_expand/${event}/0 (${i}).jpg`;
    console.log(img.src);
    main_grid.appendChild(img);
  }
}
