import {printstars} from '/session-01/exercises/star-lovers/solutions/exe.js';

//const obj_boton = document.getElementById("btn");
const obj_input = document.getElementById("in");
const obj_option = document.getElementById("options");



document.getElementById("btn").addEventListener("click",showstars);

function showstars(){


    document.getElementById("answer").innerHTML = printstars(obj_input.value,obj_option.value);

}