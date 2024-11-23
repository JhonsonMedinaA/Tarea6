function fibonacci(numeros) {
    const secuencia = [];
    let a = 0, b = 1;
  
    for (let i = 0; a <= numeros; i++) {
      secuencia.push(a); 
      const next = a + b;
      a = b; 
      b = next; 
    }
  
    return secuencia;
  }
  
  
  const miSecuencia = fibonacci(1000);
  console.log(" entre 0 y 1000:", miSecuencia);
  
  // números pares
  const pares = miSecuencia.filter(num => num % 2 === 0);
  console.log("Números pares:", pares);
  
  // números impares
  const impares = miSecuencia.filter(num => num % 2 !== 0);
  console.log("Números impares:", impares);
  



  /////

  let pokemon = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
  ];
  
 
  let enMayusculas = pokemon.map(nombre => nombre.toUpperCase());
  
  
  console.log(enMayusculas);
  

  //


  let pokemones = [

    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' }
];

// Filtrar Pokémon de tipo Fuego
let pokemonTipoFuego = pokemones.filter(p => p.tipo.toLowerCase() === 'fuego');

// Mostrar el resultado
console.log(pokemonTipoFuego);
