document.querySelector('button').addEventListener('click',onClick)

function onClick(){
    
    const url=`https://type.fit/api/quotes`
    
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        
        let ind= Math.floor(Math.random() * (data.length-1 ))
        console.log(ind)
        document.querySelector('p').innerText=data[ind].text
    
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


}