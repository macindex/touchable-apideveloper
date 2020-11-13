const assert = require('assert')
const {
    obterPessoas
} = require('./service')

// assert.ok(false)
// assert.ok(true)

describe('star wars tests', function (){
	it('deve buscar o r2d2 com o formato correto', async()=>{
		const expected = [{ nome: 'r2-d2'}]
        const nomeBase = `R2-D2`
        const resultado = await obterPessoas(nomeBase)
        assert.deepStrictEqual(resultado, expected)
	})
})