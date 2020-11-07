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

    const usuarioPromise = obterUsuario()
// Para manipular o success usamos a função .then
// Para manipular erros usamos o .catch
// usuario -> outra function telefone -> telefone

usuarioPromise
    .then(function(usuario){
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                    
                },
                telefone: result
            }
        })
})
    .then(function (resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        // return endereco;
        return endereco.then(function resolverEndereco(result){
            return{
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })

// 	.then(function(resultado){
// 		console.error('resultado', resultado)
// })
    .then(function(resultado){
            console.log(`
            Nome: ${resultado.usuario.nome}
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}

            `)
})
	.catch(function (error){
		console.error('DEU RUIM', error)
})
    
    // function resolverUsuario(erro, usuario){
    //     console.log('usuario', usuario)
    // }
    
    
//     obterUsuario (function resolverUsuario(error, usuario){
//     //null || "" || 0 === false
//         if (error){
//         console.erro('DEU RUIM em USUARIO', error)
//         return;
//         }
    
    
//         obterTelefone(usuario.id, function resolverTelefone (error1, telefone){
//         if (error1){
//         console.error('DEU RUIM em TELEFONE', error1)
//         return;	
//         }


//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//         if (error2){
//         console.error('DEU RUIM em ENDERECO', error2)
//         return;		
//         }
//         console.log(`
//             Nome: ${usuario.nome},
//             Endereco: ${endereco.rua},${endereco.numero}
//             Telefone: (${telefone.ddd})${telefone.telefone}
//         `)
//         })
//     })
// })

    
    
    // const usuario = obterUsuario()
    // const telefone = obterTelefone(usuario.id)
    
    // console.log('usuario', usuario)
    // console.log('telefone', usuario)
