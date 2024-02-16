console.log('%c HI', 'color: firebrick')
let sortArray = [];

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let dogContainer = document.querySelector("#dog-image-container");
            data.message.forEach(element => {
                let img = document.createElement("img");
                img.src = element;
                img.alt = "dog pic";
                img.height = "200";
                img.width = "300";
                dogContainer.appendChild(img);
            })
            
        })

    fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(res) {
            return res.json();
        })
        .then(function (data) {
            let breedContainer = document.querySelector("#dog-breeds");
            //console.log(data.message);
            Object.keys(data.message).forEach(element => {
                let li = document.createElement("li");
                li.textContent = element;
                sortArray.push(element);
                li.id = element;
                li.addEventListener("click", turnMeBlue);
                let sub = data.message[element];

                if(sub.length > 0) {
                    let ul = document.createElement("ul");
                    
                    sub.forEach(subB => {
                        let newli = document.createElement("li");
                        newli.textContent = subB;
                        ul.appendChild(newli);
                    })
                    li.appendChild(ul);
                }
                breedContainer.appendChild(li);
            })
        })

    let dropDown = document.querySelector("#breed-dropdown");
    dropDown.addEventListener("change", function(e) {
        let filter = e.target.value;
        sortArray.forEach(breed => {
            let el = document.querySelector(`#${breed}`);
            if (breed.at(0).toLowerCase() === filter) {
                el.style.display = 'list-item';
            } else {
                el.style.display = 'none';
            }
        })
    })
})

function turnMeBlue() {
    this.style.color = 'white';
}