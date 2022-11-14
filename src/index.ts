const input = document.getElementById("input") as HTMLInputElement;
const output = document.getElementById("output") as HTMLParagraphElement;
console.log({ input, output });

input.onchange = input.onkeyup = () => {
	console.log("update!");
	output.textContent = input.value;
};
