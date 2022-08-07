
const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");

const handleInput = () => {
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
};

inputRangeRef.addEventListener("input", handleInput);












// const input = document.getElementById("font-size-slider");
// const span = document.getElementById("text");

// input.addEventListener("input", handleInputRange);

// function handleInputRange(event) {
//   span.style.fontSize = event.currentTarget.value + "px";
// }