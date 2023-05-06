export function processPostData(data: string) {
	const content = [];
	const tokens = data.split("\n");

	for (let token of tokens) {
		if (token.includes("#img_")) {
			content.push(["i", token.substring(5)]);
		} else {
			content.push(["p", token]);
		}
	}

	return content;
}
