console.log("Event Delgation");


document.querySelector("#category")
    .addEventListener('click', (e) => {
        console.log("Parent Clicked");
        console.log(e);
        //window.location.href = "/" + e.target.id; // not good practice

        if (e.target.tagName == "LI") {
            window.location.href = "/" + e.target.id; // good practice 
        }
    });

document.querySelector("#form").addEventListener('keyup', (e) => {
    console.log(e);
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase
    }
})