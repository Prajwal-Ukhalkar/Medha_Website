document.addEventListener("DOMContentLoaded", function () {
  let mainGrid = document.getElementById("membersGrid");
  let centralMembers = [
    { name: "Rukmini_Deshmukh", inst: "Amrutvahini Indo International School" },
    { name: "Omkar_Thorat", inst: "Amrutvahini College of Engineering" },
    { name: "Tulika_Phatangare", inst: "Amrutvahini Institute of MBA" },
    { name: "Akshad_Kolapkar", inst: "Amrutvahini College of Polytechnic" },
    { name: "Gaurav_Rokde", inst: "Amrutvahini College of Pharmacy" },
    {
      name: "Chaitanya_Hase",
      inst: "Amrutvahini College of Pharmacy (D-Pharm)",
    },
    { name: "Rohit_Bhadange", inst: "Amrutvahini ITI College" },
    { name: "Shravani_Shinde", inst: "Amrutvahini Junior College" },
  ];

  centralMembers.forEach((member) => {
    let mainDiv = document.createElement("div");
    mainDiv.className =
      "flex cursor-pointer hover:scale-105 transition-all duration-300 ease-out justify-center rounded-lg items-center p-2 gap-4 border-[1px] backdrop-blur-sm bg-blue-200/30 border-gray-500";
    let image = document.createElement("img");
    image.className = "h-[130px] object-contain w-[130px] rounded-full";
    image.alt = member.name;
    image.src = `central/${member.name}.png`;
    let div = document.createElement("div");
    div.className =
      "flex items-center justify-center gap-4 h-full w-full text-center flex-col";
    let para1 = document.createElement("p");
    para1.className = "text-white text-2xl font-bold";
    para1.innerHTML = member.name.replace("_", " ");
    let para2 = document.createElement("p");
    para2.className = "text-white font-bold";
    para2.innerHTML = member.inst;
    div.appendChild(para1);
    div.appendChild(para2);
    mainDiv.appendChild(image);
    mainDiv.appendChild(div);
    mainGrid.appendChild(mainDiv);
  });
});
