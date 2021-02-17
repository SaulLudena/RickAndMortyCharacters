fetch('https://rickandmortyapi.com/api/character')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("data = ",data)
        console.log(data.results)
        console.log(data.results[0])
        
        const midiv = document.getElementById("card")
        midiv.innerHTML='';
        for(let item of data.results){
            midiv.innerHTML += `
                <div id="card-content">
                    <img src="${item.image}">
                    <div id="right-content">
                        <h1>${item.name}</h1>
                        <h4>Status: ${item.status}</h4>
                        <h4>Origen: ${item.origin.name}</h4>
                    </div>
                </div>
            `;
        }
        
        //capturo el div

    })
    .catch(function(err){
        console.log(err)
    })