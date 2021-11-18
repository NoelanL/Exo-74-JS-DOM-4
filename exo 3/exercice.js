let libButton = document.getElementById('lib-button');
let name = document.getElementById('noun');
let adjectif = document.getElementById('adjective');
let human = document.getElementById('person');

let libIt = function() {
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = name.value + " " + adjectif.value + " " + human.value;
};

libButton.addEventListener('click', libIt);{

}









