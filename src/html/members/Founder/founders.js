document.addEventListener("DOMContentLoaded", function () {
  let mainGrid = document.getElementById("membersGrid");
  let centralMembers = [
    {
      name: "Late._Shri._Bhausaheb_Santuji_Thorat",
      inst: "Founder, Amrutvahini Sheti and Shikshan Vikas Sanstha, Sangamner",
    },
    {
      name: "Hon._Balasaheb_Thorat",
      inst: "Minister, Revenue, Energy & Education, Maharashtra State President, Maharashtra State Congress President , Amrutvahini Sheti & Shikshan Vikas Sanstha, Sangamner",
    },
    {
      name: "Hon.Dr._Sudhir_Tambe",
      inst: "Ex-Member of Legislative Council Maharashtra State Trustee,\n Amrutvahini Sheti & Shikshan Vikas Sanstha, Sangamner",
    },
    {
      name: "Hon._Sharayu_Deshmukh",
      inst: "Trustee, Amrutvahini Sheti & Shikshan Vikas Sanstha, Sangamne",
    },

    { name: "Hon._Rajvardhan_Thorat", inst: "Youth Leader" },
    {
      name: "Hon._Anil_Shinde",
      inst: "Chief Executive Officer Amrutvahini Sheti & Shikshan Vikas Sanstha, Sangamner",
    },
    {
      name: "Dr._Jayshree_Thorat",
      inst: "Youth Leader , President EKVIRA FOUNDATION , Sangamner",
    },
  ];

  centralMembers.forEach((member) => {
    let mainDiv = document.createElement("div");
    mainDiv.className =
      "flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 ease-out justify-center rounded-lg items-center p-2 gap-4 border-[1px] backdrop-blur-sm bg-blue-200/30 border-gray-500";
    let image = document.createElement("img");
    image.className = "h-[160px] object-contain w-[160px] rounded-full";
    image.alt = member.name;
    image.src = `founders/${member.name}.png`;
    console.log(image.src);
    let div = document.createElement("div");
    div.className =
      "flex items-center justify-center gap-4 h-full w-full text-center flex-col";
    let para1 = document.createElement("p");
    para1.className = "text-white text-2xl font-bold";
    para1.innerHTML = member.name.replaceAll("_", " ");
    let para2 = document.createElement("p");
    para2.className = "text-white text-sm text-gray-200";
    para2.innerHTML = member.inst;
    div.appendChild(para1);
    div.appendChild(para2);

    mainDiv.appendChild(image);
    mainDiv.appendChild(div);
    mainGrid.appendChild(mainDiv);
  });
});
