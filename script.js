import {names, groups} from "./data.js";
import {f_events} from "./app_functions.js";
document.addEventListener('DOMContentLoaded', init, false);

async function init() {
    let container = document.querySelector('.container_el');
    let response = await fetch('elements.json');
    let data = await response.json();
    data = Object.values(data);

    let input = document.getElementById('name');
    input.addEventListener('input', function() {
        if(this.value.length !== 0) {
            let search = this.value.replace('ó', 'o').replace('ę', 'e').replace('ń', 'n').replace('Ż', 'Z').replace('ź', 'z').replace('ł', 'l').replace('ć', 'c').replace('ż', 'z');
            let to_change = names.filter(x => !x.toLowerCase().startsWith(search.toLowerCase()));
            let no_change = names.filter(x => x.toLowerCase().startsWith(search.toLowerCase()));
            for(let x of to_change) {
                document.querySelector("."+x).style.opacity = "0.5";
                document.querySelector("."+x).style.filter = "grayscale(70%)";
            }
            for(let x of no_change) {
                document.querySelector("."+x).style.opacity = "1";
                document.querySelector("."+x).style.filter = "grayscale(0%)";
            }
            document.querySelector('.La-Lu').style.opacity = "0.5";
            document.querySelector('.La-Lu').style.filter = "grayscale(70%)";
            document.querySelector('.Ac-Lr').style.opacity = "0.5";
            document.querySelector('.Ac-Lr').style.filter = "grayscale(70%)";
        }
        else {
            for(let x of names) {
                document.querySelector("."+x).style.opacity = "1";
                document.querySelector("."+x).style.filter = "grayscale(0%)";
            }
            document.querySelector('.La-Lu').style.opacity = "1";
            document.querySelector('.La-Lu').style.filter = "grayscale(0%)";
            document.querySelector('.Ac-Lr').style.opacity = "1";
            document.querySelector('.Ac-Lr').style.filter = "grayscale(0%)";
        } 
    });

    for(let i = 1; i <= 18; i++) {
        let element = document.createElement('div');
        let info = document.createElement('span');
        element.classList.add("element_gr");
        element.textContent = i;
        element.setAttribute("style", `grid-area: nr${i}`);
        info.classList.add("tooltip");
        info.textContent = groups[i];
        element.appendChild(info);
        container.appendChild(element);
    }
    for(let i = 1; i <= 7; i++) {
        let element = document.createElement('div');
        element.classList.add("element_okr");
        element.textContent = i;
        element.setAttribute("style", `grid-area: okr${i}`);
        container.appendChild(element);
    }
    for (let x of data) {
        let element = document.createElement('div');
        let name = document.createElement('div');
        let symbol = document.createElement('div');
        let number = document.createElement('div');
        let mass = document.createElement('div');
        element.classList.add("element");
        name.classList.add("name");
        symbol.classList.add("symbol");
        number.classList.add("atomic-number");
        mass.classList.add("mass");
        element.classList.add(x.phase);
        element.setAttribute("style", `grid-area: ${x.symbol}`);
        element.setAttribute("id", x.symbol);
        element.classList.add(x.name.replace('ó', 'o').replace('ę', 'e').replace('ń', 'n').replace('Ż', 'Z').replace('ź', 'z').replace('ł', 'l').replace('ć', 'c'));
        number.textContent = x.number;
        symbol.textContent = x.symbol;
        name.textContent = x.name;
        mass.textContent = parseFloat(x.atomic_mass).toFixed(2);
        element.append(number, symbol, name, mass)
        container.appendChild(element);
    }
    for (let x of ["La-Lu 57-71", "Ac-Lr 89-103"]) {
        let element = document.createElement('div');
        element.setAttribute("style", `grid-area: ${x.split(' ')[0]}`);
        element.classList.add("element");
        element.classList.add('LaAc');
        element.classList.add(x.split(' ')[0]);
        element.textContent = x;
        container.appendChild(element);
    }
    f_events();
}