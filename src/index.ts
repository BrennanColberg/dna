const input = document.getElementById("input") as HTMLInputElement;
const output = document.getElementById("output") as HTMLParagraphElement;
console.log({ input, output });

input.addEventListener("change", onInput);
input.addEventListener("keyup", onInput);
function onInput() {
	console.log("update!");
	output.textContent = input.value;
}
