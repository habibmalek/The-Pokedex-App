const pokedex = document.getElementById("pokedex");
    console.log(pokedex);
const fetchPokemon = () => {
   
    const promises = [];
    for (let i = 1; i <= 5; i++) {
        var r = Math.floor((Math.random() * 922) + 1)
        const url = `https://pokeapi.co/api/v2/pokemon/${r}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

        Promise.all(promises).then((results) => {
            const pokemon = results.map((data) => ({
                    name: data.name,
                    id: data.id,
                    image: data.sprites['front_default'],
                    type: data.types.map((type) => type.type.name).join(', ')
            }));
            displayPokemon(pokemon);
        });

    const displayPokemon = (pokemon) => {    
    console.log(pokemon);
    const pokemonHTMLString = pokemon.map(
        (pokeman) => `
    <div class="row">
      <div class="col s4"> <div class="card">
      
      <div class="row">
      <div class="col s12 m7">
      <div class="card small">
      <div class="card-image">
        <img src="${pokeman.image}">
      </div>
      <div>
      <span class="card-title">${pokeman.name}</span>
      </div>
      <div class="card-content">
        <p>${pokeman.type}</p>
      </div>
      </div>
      </div>
      </div></div>
    </div>
    `
    ).join('');
    pokedex.innerHTML = pokemonHTMLString;

};
};
fetchPokemon();