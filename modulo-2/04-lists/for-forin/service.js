const axios = require('axios')
const URL = `https://swapi.dev/api/people`

async function obterPessoas(name){
	const url = `${URL}/?search=${name}&format=json`
	const response = await axios.get(url)
	return response.data
	// console.log('response', response);
}

// obterPessoas('Luke')
// .then(function (resultado){
// 	console.log('resultado', resultado)
// })
// .catch(function (error){
// 	console.log('DEU RUIM', error)
// })

//TRANSFORMAR ESTE ARQUIVO EM UM MODULO

module.exports = {
	obterPessoas
}

// class Api{
// 	static async obterPessoas(nome){
// 		const response = await axios.get(`https://swapi.dev/api/people/${nome}/json`);
// 		console.log('response', response);
// 	}
// }

// Api.obterPessoas('Luke');





















































