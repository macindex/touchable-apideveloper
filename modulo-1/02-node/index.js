/*
0 - Obter um user
1 - Preciso obter o numero de telefone de um user a partir de seu Id
2 - Obter o endereco do user pelo Id 

*/

function obterUsuario (callback){
    setTimeout(function (){
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
            })
        }, 1000);
    }
    
    
    
    function obterTelefone (idUsuario, callback){
    // Telefone sera obtido pelo idusuario
    
        setTimeout(() => {
            return callback (null, {
                telefone: '984696037',
                ddd: 81
            })
        }, 2000);
    
    }
    
    function obterEndereco(idUsuario, callback){
        setTimeout(() => {
            return callback(null, {
                rua: 'dos bobos',
                numero: 0
            })
            
        })
    }
    
    function resolverUsuario(erro, usuario){
        console.log('usuario', usuario)
    }
    
    
    obterUsuario (function resolverUsuario(error, usuario){
    //null || "" || 0 === false
        if (error){
        console.erro('DEU RUIM em USUARIO', error)
        return;
        }
    
    
        obterTelefone(usuario.id, function resolverTelefone (error1, telefone){
        if (error1){
        console.error('DEU RUIM em TELEFONE', error1)
        return;	
        }


        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
        if (error2){
        console.error('DEU RUIM em ENDERECO', error2)
        return;		
        }
        console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua},${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
        `)
        })
    })
})

    
    
    // const usuario = obterUsuario()
    // const telefone = obterTelefone(usuario.id)
    
    // console.log('usuario', usuario)
    // console.log('telefone', usuario)
