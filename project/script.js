let activeHouse = "Starks"
let nav = document.querySelector('.buttonhead');
let btncontainer = document.querySelector('.btncontainer');
let display = document.querySelector(".display")
let houses = got.houses.map(house => house.name);

function showPeople(activeHouse){
    let people = got.houses.find(house => house.name ===activeHouse).people;
    display.innerHTML = "";
    display.innerHTML = people.map(person => {
        return `
            <article class="box">
                <div class="flex2">
                    <img src=${person.image} alt="1">
                    <h2>${person.name}</h2>
                </div>
                <p>${person.description}</p>
            </article>
        `;
    }).join("")
}


function generateButton(){
    btncontainer.innerHTML = ""
    houses.forEach(house => {
        let button = document.createElement('button');
        button.innerText = house;
        button.className = activeHouse === house ? "active" : ""

        button.addEventListener('click', function(e){
             activeHouse = e.target.innerText;
            showPeople(activeHouse)
            generateButton()
        })
        btncontainer.append(button);
    });
}
generateButton();
showPeople(activeHouse);


