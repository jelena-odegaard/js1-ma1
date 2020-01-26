//question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
}

cat.complain();

//question 2
//<h3>Subheading</h3>

const heading = document.querySelector("h3");

//question 3

const heading = document.querySelector("h3");
heading.style.fontSize = "2em";

//question 4

heading.classList.add("subheading");

//question 5

const paragraphs = document.querySelectorAll("p");
console.dir(paragraphs);

//question 6
//<div class="results"></div>

const resultsContainer = document.querySelector("results");
resultsContainer.innerHTML = "<p>New paragraph</>";
console.log(resultsContainer.innerHTML);

//question 7

function catsNames(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}

catsNames(cats); 

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


//question 8

function catsNamesh5(catArray){
    let namesHTML = "";

    for (let i = 0; i < catArray.length; i++){
        namesHTML += `<h5>${catArray[i].name}</h5>`;
    }

    return namesHTML;
}

//question 9

resultsContainer.innerHTML = catsNamesh5(cats);

//question 10

function catsNamesDiv(catArray){

    let html = "";

    for (let i = 0; i < catArray.length; i++){

        let age = "Age unknown";

        if(catArray[i].age){
            age = catArray[i].age
        }

        html += `<div>
                <h5>${catArray[i].name}</h5>
                <p>${age}</p>
                </div>`;
        }

    console.log(html);

    return html;
}

resultsContainer.innerHTML = catsNamesDiv(cats);

