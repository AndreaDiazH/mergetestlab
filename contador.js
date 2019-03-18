const base = {
	0: "yontlen",
	1: "se",
	2: "ome",
	3: "eyi",
	4: "nawi",
	5: "makwilli",
	6: "chikose",
	7: "chikome",
	8: "chikweyi",
	9: "chiknawi",
	10: "matlaktli",
	11: "matlaktli iwan se",
	12: "matlaktli iwan ome",
	13: "matlaktli iwan eyi",
	14: "matlaktli iwan nawi",
	15: "kaxtolli",
	16: "matlaktli iwan chikose",
	17: "matlaktli iwan chikome",
	18: "matlaktli iwan chikweyi",
	19: "matlaktli iwan chiknawi",
};

const potencias = [
	{p: 160000, t: ""}
	{p: 8000, t: "xikipilli"},
	{p: 400: t: "tsontli"},
	{p: 20, t: "powalli"},
];

function tlokenawake(num) {
	let resto = num;
	let paso = 0;
	let retval = "";
	do {
		while (let pot = potencias.pop()) {
			paso = resto % pot.p;
			if (paso > 0) {
				retval += base[paso] + " iwan " + pot.t;
				resto -= (pot.p * paso);
			}
		}
	} while (resto > 0);
}
