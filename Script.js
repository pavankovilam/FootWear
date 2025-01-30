// API:- https://script.google.com/macros/s/AKfycbzy8W4BsJw4DDkiJOpWYB3jcJRxjRrJmgBJ-bAqDR95tCrcCJQ2gPodz2Yri8MovUFo/exec
let Arivals = document.getElementById("item-card");
let Data = fetch("http://127.0.0.1:5500/Sample_Response.json")
            .then(res => res.json())
            .then(d => d.forEach(element => {
                console.log(element)
                Arivals.innerHTML += `<div> 
                <img src="https://drive.google.com/thumbnail?id=${(element["Template 1"]).split("=")[1]}"
                Title: ${element.Title} <br>
                Category :- ${ element.Category} <br>
                Type :- ${ element.Type} <br>
                Price :- ${ element.Price} <br>
                </div>`
            }))
            .catch(f => console.error(f))
/* function Display(res){
    res.forEach(element => {
        Arivals.innerHTML += element.Title + '<br>'
    }); 
    //Arivals.innerText = res[0].Title
} */
