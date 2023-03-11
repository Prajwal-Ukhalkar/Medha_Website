document.addEventListener("DOMContentLoaded", function () {
  putElement();
});
let committeeLs = [
  "Founder",
  "Faculty_Coordinators",
  "Core_Committee",
  "Centralised_Cultural_Committee",
  "Medha_Cup",
  "Tech_Support",
  "Anchoring_Committee",
  "Social_Media",
  "Light_Sound",
  "Dance_Committee",
  "Discipline_Committee",
  "Singing_Committee",
  "Auditions_Committee",
  "Talk_Show",
  "Fashion_Show",
  "Stand_Up_Comedy_Committee",
  "Sports_Committee",
  "Technical_Inovative_Project",
  "Back_Stage_Committee",
  "Budget_&_Sponsorship",
  "Infrastructure_Comittee",
];

function putElement() {
  let mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  committeeLs.forEach((committee) => {
    let myAnchor = document.createElement("a");
    myAnchor.className +=
      "w-full h-15 text-center py-4 text-white rounded-lg font-bold inline-block px-6 border-[1px] border-blue-300 leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out";
    myAnchor.text = committee.replaceAll("_", " ");
    myAnchor.href = `members/${committee}/${committee}.php`;
    mainContainer.appendChild(myAnchor);
  });
}
