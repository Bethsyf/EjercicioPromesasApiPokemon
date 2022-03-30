
let datosPokemon;
let main = document.getElementById('main')
function pokemon (id){
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)
        .then(response => response.json())
            .then(data => showPj(data))

}
/* 
function pokemon (id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
            .then(data => showPjA(data))

} */

function pokemons (){
    for(let i = 1; i < 20; i++){
        pokemon(i)
    }
}
pokemons()


/* let ability = document.querySelector('.hability')

function showPjA (data) {
    let ability =data.abilities[0].ability.name
    console.log(ability)
    ability.innerHTML += ability;
 } */

function showPj (data){
    console.log(data)
 let nombre = data.name
 let id = data.id
 let imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
 main.innerHTML += `
 <div class="pokemon">
 <img src="${imagen}" alt="">
 <div class="pokemon-info">
     <h3>${nombre}</h3>
     <span class="hability">${id}</span>
 </div>
 <div class="description">
     <h3>Description</h3>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt quae maxime labore reiciendis
     officiis eos repellendus, saepe omnis quaerat quos qui quasi magni, ullam numquam quas non, ut sit!
 </div>
 `
}








