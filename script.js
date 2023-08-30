const text = document.getElementById("textarea");
const totalCount = document.getElementById("total");
const remainingCount = document.getElementById("remaining");

text.addEventListener("keydown", () => {
    totalCount.innerText = text.value.length;
    remainingCount.innerText =
      text.getAttribute("maxLength") - text.value.length;
});





