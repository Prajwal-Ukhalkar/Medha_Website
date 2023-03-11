document.addEventListener("DOMContentLoaded", function () {
  let mainGrid = document.getElementById("membersGrid");
  let centralMembers = [
    {
      name: "Vivek_Thorat",
      inst: "Amrutvahini College of Engineering",
      insta: "https://www.instagram.com/vivekth0rat/",
      linkedIn: "https://www.linkedin.com/in/vivekanand-thorat-276562200/",
      github: "https://github.com/vivekananand-cpu",
    },
    {
      name: "Aditya_Gadge",
      inst: "Amrutvahini College of Engineering",
      inst: "Amrutvahini College of Engineering",
      insta: "https://www.instagram.com/adi.gadge/",
      linkedIn: "https://www.linkedin.com/in/aditya-gadge-0670a720a/",
      github: "https://github.com/AdityaGadge30",
    },
    {
      name: "Suraj_Thorat",
      inst: "Amrutvahini College of Engineering",
      insta: "https://instagram.com/mr.susant_2325?igshid=YmMyMTA2M2Y=",
      linkedIn: "https://www.linkedin.com/in/suraj-thorat-b6b556239",
      github: "https://github.com/SuSanT2282",
    },
    {
      name: "Prajwal_Ukhalkar",
      inst: "Amrutvahini College of Engineering",
      insta: "https://instagram.com/hey.prajwal.13?igshid=YmMyMTA2M2Y=",
      linkedIn: "https://www.linkedin.com/in/prajwal-ukhalkar-5657b5216",
      github: "https://github.com/Prajwal-Ukhalkar",
    },
    {
      name: "Rajeev_Singh",
      inst: "Amrutvahini College of Engineering",
      insta: "https://instagram.com/rajeev_singh_68?igshid=YmMyMTA2M2Y=",
      linkedIn: "https://www.linkedin.com/in/rajeevsingh0519",
      github: "https://github.com/rdj68",
    },
    {
      name: "Anantha_Atole",
      inst: "Amrutvahini College of Engineering",
      insta: "https://instagram.com/hyperfae_anantha03?igshid=ZDdkNTZiNTM=",
      linkedIn: "https://www.linkedin.com/in/anantha-atole-91726a255",
      github: "https://github.com/Atoleanantha",
    },
    {
      name: "Narendra_Wakhare",
      inst: "Amrutvahini College of Engineering",
      insta: "https://instagram.com/ll_prasad_ll_44?igshid=YmMyMTA2M2Y=",
      linkedIn: "https://www.linkedin.com/in/narendra-wakhare-6a214a21b",
      github: "https://github.com/Narendra-7774",
    },
    { name: "Saurabh_Mahajan", inst: "Amrutvahini College of Engineering" },
  ];

  centralMembers.forEach((member) => {
    let mainDiv = document.createElement("div");
    mainDiv.className =
      "flex cursor-pointer hover:scale-105 transition-all duration-300 ease-out justify-center rounded-lg items-center p-2 gap-4 border-[1px] backdrop-blur-sm bg-blue-200/30 border-gray-500";
    let image = document.createElement("img");

    image.className = "h-[130px] object-contain w-[130px] rounded-full";
    image.alt = member.name;
    image.src = `../html/developers/${member.name}.png`;
    console.log(image.src);
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

    let socialDiv = document.createElement("div");
    socialDiv.className = "flex justify-center items-center space-x-2";

    let insta = document.getElementById("insta").cloneNode(true);
    insta.className = "";
    insta.href = member.insta;
    let linkedIn = document.getElementById("linkedIn").cloneNode(true);
    linkedIn.className = "";
    linkedIn.href = member.linkedIn;
    let github = document.getElementById("github").cloneNode(true);
    github.className = "";
    github.href = member.github;

    socialDiv.appendChild(github);
    socialDiv.appendChild(insta);
    socialDiv.appendChild(linkedIn);

    div.appendChild(socialDiv);
    mainDiv.appendChild(image);
    mainDiv.appendChild(div);
    mainGrid.appendChild(mainDiv);
  });
});
