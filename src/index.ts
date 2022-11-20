const input = document.getElementById("input") as HTMLInputElement;
const output = document.getElementById("output") as HTMLParagraphElement;
console.log({ input, output });

input.onchange = input.onkeyup = () => {
	console.log("update!");
	const text = input.value;
	const chars: number[] = [];
	for (let i = 0; i < text.length; i++) {
		if (text.charCodeAt(i) < 256) {
			chars.push(text.charCodeAt(i));
		}
	}
	output.replaceChildren(
		...chars
			.map((char) => ("0000" + char.toString(4)).slice(-4))
			.join(" ")
			.replaceAll("0", "A")
			.replaceAll("1", "C")
			.replaceAll("2", "G")
			.replaceAll("3", "T")
			.split("")
			.map((char) => {
				// wrap nucleotide letters in appropriate spans
				if (/[ACTG]/i.test(char)) {
					const span = document.createElement("span");
					span.classList.add("nucleotide");
					span.classList.add(char);
					span.textContent = char;
					return span;
				} else return char;
			})
	);
};
