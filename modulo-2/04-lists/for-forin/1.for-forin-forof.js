const service = require('./service')

async function main (){

try{
	const result = await service.obterPessoas('a')
	const names = []	
    
    //FOR 

    // for (let i=0; i<= result.results.length - 1; i++){

	// 	const people = result.results[i]
	// 	names.push(people.name)
    // }
    
    //FOR IN
        // for(let i in result.results){
        //     const people = result.results[i]
        //     names.push(people.name)
        // }

    //FOR OF
    for(people of result.results){
        names.push(people.name)
    }

}catch(error){
		console.error(`error interno`, error)
	}
}

main()
