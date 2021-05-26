const myClass = document.getElementById("myClass")

const urlClass = "172.31.248.108:9000/Onlinetutorial/api/v1/class"

fetch(urlClass)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        json.map((product) => {
            
            
        })
    })
    .catch((error) => console.log(error)); //ngambil error