const axios = require('axios')
const URL = `https://swapi.dev/api/people/`

async function obterPessoas(name){
	const url = `${URL}/?search=${name}&format=json`
	const response = await axios.get(url)
	return response.data
}

obterPessoas('Luke')
.then(function (resultado){
	console.log('resultado', resultado)
})
.catch(function (error){
	console.log('DEU RUIM', error)
})