document.addEventListener("DOMContentLoaded", function () {});

function nextPage(event) {
  localStorage.setItem("Event", event);
  window.location.href = "eventSub/event_expanded.html";
}
