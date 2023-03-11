document.addEventListener("DOMContentLoaded", function () {
  let mainGrid = document.getElementById("membersGrid");
  let coreMembers = [
    { name: "Vishal_Fatangare", inst: "Amrutvahini College of Engineering" },
    { name: "Ayesha_Pathan", inst: "Amrutvahini College of Polytechnic" },
    { name: "Sanket_Dhumal", inst: "Amrutvahini College of Polytechnic" },
  ];

  coreMembers.forEach((member) => {
    let mainDiv = document.createElement("div");
    mainDiv.className =
      "flex cursor-pointer hover:scale-105 transition-all duration-300 ease-out justify-center rounded-lg items-center p-2 gap-4 border-[1px] backdrop-blur-sm bg-blue-300/30 border-gray-500";
    let image = document.createElement("img");
    image.className = "h-[130px] object-contain rounded-full w-[130px] ";
    image.alt = member.name;
    image.src = `Auditions/${member.name}.png`;
    let div = document.createElement("div");
    div.className =
      "flex items-center justify-center gap-4 h-full w-full  text-center flex-col";
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
