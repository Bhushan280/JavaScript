document.querySelector("#grandparent")
    .addEventListener('click', () => {
        console.log("Grang Parent Clicked");
    }, false)

    document.querySelector("#parent")
    .addEventListener('click', (e) => {
        console.log("Parent Clicked");
        //e.stopPropagation(); // This will stop the event from bubbling up to the grand parent
    },false)

    document.querySelector("#child")
    .addEventListener('click', (e) => {
        console.log("Child Clicked");
        e.stopPropagation(); 
    }, false)
    

/*
usig FALSE flag
Hirarchy will be: Bubbled out 
Child -> Parent -> Grand Parent

using TRUE flag
Hirarchy will be: Capturing in or Trickle dowm
Grand parent ->  Parent -> Child



using mixx match 

Senario
true -> capturing 
false -> bubbling
true -> capturing

output->
grand parent -> child -> parent

Reason : First event capturing happens in the order of DOM tree then bubbing happens in the reverse order of DOM tree.


Senario

true -> capturing 
false -> bubbling 
false -> bubbling

output ->
grand parent -> child -> parent
Reason : Same as abnove 

Although as per our use cases we can use any of the above senatios, either we want to capture the even or we want to bubble event out or trickle down the event.



This Capturing and Bubbling are very expensive operations and should be used only when required. also we can stop the event propagation using stopPropagation() menthod.

*/