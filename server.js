const express = require('express');
const request = require('request');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	let city = req.query.city;
	var request = require('request');
	request(
		`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e0dd12e64f8abb5aa1cb61eaba7d592c`,
		function(error, response, body) {
			let data = JSON.parse(body);
			if (response.statusCode === 200) {
				// res.send(`The weather in your city "${city}" is ${data.list[0].weather[0].description}`);
                res.status(200).json({
                    'name':city,
                    'total':data.list[0].weather[0].description,
                })
			}
		}
	);
});

app.listen(8000, () => console.log('Server started on port 8000'));