/*
0 - Obter um user
1 - Preciso obter o numero de telefone de um user a partir de seu Id
2 - Obter o endereco do user pelo Id 
3- importamos um módulo interno do node.js const util = require('util')
*/

const util = require('util')

const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario (){
    // quando der algum problema -> reject(ERRO)
    // quando success -> RESOLV
    return new Promise(function resolvePromise(resolve, reject){
    setTimeout(function (){
        // return reject(new Error('DEU RUIM DE VERDADE!'))
        return resolve({
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
            })
        }, 1000);
    })
}
    
    
    
    function obterTelefone (idUsuario){
    // Telefone sera obtido pelo idusuario
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone: '984696037',
                ddd: 81
            })
        }, 2000);
    
    })
}
    
    function obterEndereco(idUsuario, callback){
        setTimeout(() => {
            return callback(null, {
                rua: 'dos bobos',
                numero: 0
            })
            
        })
    }
main() // temos de chamar antes da função

async function main(){
	try{
        console.time('medida-promise')
		const usuario = await obterUsuario()
		//const telefone = await obterTelefone(usuario.id)
		//const endereco = await obterEnderecoAsync(usuario.id)
		const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
            ])
            const endereco = resultado[1]
            const telefone = resultado[0]
        console.timeEnd('medida-promise')
	}
	catch(error){
		console.log('DEU RUIM', error)

	}

}

    // const usuarioPromise = obterUsuario()
// Para manipular o success usamos a função .then
// Para manipular erros usamos o .catch
// usuario -> outra function telefone -> telefone

// usuarioPromise
//     .then(function(usuario){
//         return obterTelefone(usuario.id)
//         .then(function resolverTelefone(result){
//             return {
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
                    
//                 },
//                 telefone: result
//             }
//         })
// })
//     .then(function (resultado){
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         // return endereco;
//         return endereco.then(function resolverEndereco(result){
//             return{
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })

// // 	.then(function(resultado){
// // 		console.error('resultado', resultado)
// // })
//     .then(function(resultado){
//             console.log(`
//             Nome: ${resultado.usuario.nome}
//             Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}

//             `)
// })
// 	.catch(function (error){
// 		console.error('DEU RUIM', error)
// })
    