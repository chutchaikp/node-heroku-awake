
var axios = require('axios');

require('dotenv').config()

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function Run() {
	try {
		var result = await axios.get(process.env.HEROKU_APP)
		const randNumber = getRandomInt(10, 20);
		console.log(result.data, randNumber + ' minutes', new Date().toISOString())
		setTimeout(() => {
			Run();
		}, randNumber * 60 * 1000);

	} catch (error) {
		console.log(error);
		process.exit(0)
	}
}

Run();


