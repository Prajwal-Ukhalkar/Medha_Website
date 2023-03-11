document.addEventListener("DOMContentLoaded", function () {
  displayYtVid();
  display(2017, 10);
  display(2018, 10);
  display(2019, 10);
  display(2020, 10);
  display(2023, 10);
});

// Function to set proper images on display according to year passed
function handleToggle(year) {
  document.getElementById("mainContainer").innerHTML = "";
  switch (year) {
    case "2017":
      display(year, 100);
      break;
    case "2018":
      display(year, 55);
      break;
    case "2019":
      display(year, 35);
      break;
    case "2020":
      display(year, 150);
      break;
    case "2023":
      display(year, 25);
      break;
    case "all":
      console.log("all");
      displayYtVid();
      display(2017, 40);
      display(2018, 20);
      display(2019, 20);
      display(2020, 20);
      display(2023, 20);
      break;
    default:
      break;
  }
}
function display(year, len) {
  let mainContainer = document.getElementById("mainContainer");
  let photos = [];

  for (let i = 1; i <= len; i++) {
    console.log(i);
    let src = `../res/memories/${year}/${year} (${i}).jpg`;
    console.log(src);
    photos.push({ year, src });
  }
  photos.forEach((photo) => {
    let image = document.createElement("img");
    image.src = photo.src;
    image.width = 450;
    image.height = 350;
    mainContainer.appendChild(image);
  });
}

//Function to display YT Medha videos
function displayYtVid() {
  let mainContainer = document.getElementById("mainContainer");

  let videos = [
    "bsAPBAe_C9M",
    "HTZHnIGcQJo",
    "8O6NVkK5raQ",
    "6MpLV2FgmBU",
    "ciNzNRsfyws",
    "BnRiCA-Epgk",
    "3YmgvdbBhzk",
  ];
  videos.forEach((video) => {
    let myDiv = document.createElement("div");
    myDiv.className +=
      "text-white c-2018 overflow-auto hover:border-gray-500 cursor-pointer p-3 flex flex-col items-center border-[1px] border-gray-700 h-[400px] rounded-lg";
    let frame = document.createElement("iframe");
    frame.width = 450;
    frame.height = 350;
    frame.src = "https://www.youtube.com/embed/" + video;
    myDiv.appendChild(frame);
    mainContainer.appendChild(myDiv);
    console.log(video);
  });
}
