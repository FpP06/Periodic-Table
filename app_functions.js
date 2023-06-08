import {elements, non_metals, noble_gas, semi_metals, alkadi_metals, alkadine_earth_metals, p_block_metals, transition_metals, 
    precious_metals, lanth, act, gauze, liquid, solid, unknown, gr_elements, okr_elements} from "./data.js";

export function f_events() {
    let nm = document.getElementById("nm");
    let ng = document.getElementById("ng");
    let sm = document.getElementById("sm");
    let pm = document.getElementById("pm");
    let am = document.getElementById("am");
    let tm = document.getElementById("tm");
    let aem = document.getElementById("aem");
    let pbm = document.getElementById("pbm");
    let g = document.getElementById("g");
    let l = document.getElementById("l");
    let s = document.getElementById("s");
    let un = document.getElementById("un");
    let lanthanides = document.querySelector('.La-Lu');
    let actinides = document.querySelector('.Ac-Lr');
    let items = document.querySelectorAll('.element');
    let groups_el = document.querySelectorAll('.element_gr');
    let okr_el = document.querySelectorAll('.element_okr');

    for(let i = 0; i < groups_el.length; i++) {
      groups_el[i].addEventListener("mouseover", (event) => {
        for(let item of items) {
          item.classList.remove('active');
        }
        for(let x of elements.filter(x => !gr_elements[i].includes(x))) {
          document.getElementById(x).style.opacity = "0.5";
          document.getElementById(x).style.filter = "grayscale(70%)";
        }
        if(i !== 2) LaAc_change_style();
      });
      groups_el[i].addEventListener("mouseout", (event) => {
        for(let x of elements.filter(x => !gr_elements[i].includes(x))) {
          document.getElementById(x).style.opacity = "1";
          document.getElementById(x).style.filter = "grayscale(0%)";
        }
        LaAc_back_style();
      });
    }
    for(let i = 0; i < okr_el.length; i++) {
      okr_el[i].addEventListener("mouseover", (event) => {
        for(let item of items) {
          item.classList.remove('active');
        }
        for(let x of elements.filter(x => !okr_elements[i].includes(x))) {
          document.getElementById(x).style.opacity = "0.5";
          document.getElementById(x).style.filter = "grayscale(70%)";
        }
        if(i !== 5 || i !==6) LaAc_change_style();
        if(i === 5) {
          document.querySelector('.La-Lu').style.opacity = "1";
          document.querySelector('.La-Lu').style.filter = "grayscale(0%)";
        }
        if(i === 6) {
          document.querySelector('.Ac-Lr').style.opacity = "1";
          document.querySelector('.Ac-Lr').style.filter = "grayscale(0%)";
        }
      });
      okr_el[i].addEventListener("mouseout", (event) => {
        for(let x of elements.filter(x => !okr_elements[i].includes(x))) {
          document.getElementById(x).style.opacity = "1";
          document.getElementById(x).style.filter = "grayscale(0%)";
        }
        LaAc_back_style();
      });
    }
    nm.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !non_metals.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      LaAc_change_style();
    });
    nm.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !non_metals.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      LaAc_back_style();
    });
  
    ng.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !noble_gas.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      LaAc_change_style();
    });
    ng.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !noble_gas.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      LaAc_back_style();
    });
  
    sm.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !semi_metals.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      LaAc_change_style();
    });
    sm.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !semi_metals.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      LaAc_back_style();
    });
  
    tm.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !transition_metals.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      LaAc_change_style();
    });
    tm.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !transition_metals.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      LaAc_back_style();
    });
  
    pm.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !precious_metals.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      LaAc_change_style();
    });
    pm.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !precious_metals.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      LaAc_back_style();
    });
  
    am.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !alkadi_metals.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      LaAc_change_style();
    });
    am.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !alkadi_metals.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      LaAc_back_style();
    });
  
    aem.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !alkadine_earth_metals.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      LaAc_change_style();
    });
    aem.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !alkadine_earth_metals.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      LaAc_back_style();
    });
  
    pbm.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !p_block_metals.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      LaAc_change_style();
    });
    pbm.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !p_block_metals.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      LaAc_back_style();
    });

    g.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !gauze.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      LaAc_change_style();
      });
    g.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !gauze.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      LaAc_back_style();
    });

    l.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !liquid.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      LaAc_change_style();
      });
    l.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !liquid.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      LaAc_back_style();
    });

    s.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !solid.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      LaAc_change_style();
      });
    s.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !solid.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      LaAc_back_style();
    });

    un.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !unknown.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      LaAc_change_style();
      });
    un.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !unknown.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      LaAc_back_style();
    });
  
    lanthanides.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !lanth.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      document.querySelector('.Ac-Lr').style.opacity = "0.5";
      document.querySelector('.Ac-Lr').style.filter = "grayscale(70%)";
    });
    lanthanides.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !lanth.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      document.querySelector('.Ac-Lr').style.opacity = "1";
      document.querySelector('.Ac-Lr').style.filter = "grayscale(0%)";
    });
  
    actinides.addEventListener("mouseover", (event) => {
      for(let item of items) {
        item.classList.remove('active');
      }
      for(let x of elements.filter(x => !act.includes(x))) {
        document.getElementById(x).style.opacity = "0.5";
        document.getElementById(x).style.filter = "grayscale(70%)";
      }
      document.querySelector('.La-Lu').style.opacity = "0.5";
      document.querySelector('.La-Lu').style.filter = "grayscale(70%)";
    });
    actinides.addEventListener("mouseout", (event) => {
      for(let x of elements.filter(x => !act.includes(x))) {
        document.getElementById(x).style.opacity = "1";
        document.getElementById(x).style.filter = "grayscale(0%)";
      }
      document.querySelector('.La-Lu').style.opacity = "1";
      document.querySelector('.La-Lu').style.filter = "grayscale(0%)";
    });

    $(document).ready(function(){
      $('.element:not(.LaAc)').on('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          $('.element').not(this).removeClass("active");
          $(this).toggleClass("active");
      });
      $('body:not(.element)').on('click', function(e){
          $('div').removeClass('active');
      });
    });
}

function LaAc_change_style() {
    let LaAc = document.querySelectorAll('.LaAc');
    LaAc.forEach(element => {
        element.style.opacity = "0.5";
        element.style.filter = "grayscale(70%)";
    });
}

function LaAc_back_style() {
    let LaAc = document.querySelectorAll('.LaAc');
    LaAc.forEach(element => {
        element.style.opacity = "1";
        element.style.filter = "grayscale(0%)";
    });
}