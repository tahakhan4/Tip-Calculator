const button = document.getElementById("btn");
const Amount = document.getElementById("input-1");
const Tip = document.getElementById("input-2");
const span = document.getElementsByTagName("span");

button.addEventListener("click", () => {
    const amountVal = Amount.value;
    const tipVal = Tip.value;
    const total = amountVal * (1 + tipVal / 100);
    span[0].innerText = total.toFixed(2);
})