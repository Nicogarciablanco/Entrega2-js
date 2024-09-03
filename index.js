const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


console.log("Ejercicio A:")

const impares = pizzas.filter(producto => producto.id % 2 !== 0 )

const mostrarImpares = impares.map(producto => {
  if(producto.id == 1){
    console.log( `PIZZAS IMPARES:
  Nombre: ${producto.nombre}
  Precio: ${producto.precio}
  Ingredientes: ${producto.ingredientes}`)
  }else{
    console.log( `  Nombre: ${producto.nombre}
  Precio: ${producto.precio}
  Ingredientes: ${producto.ingredientes}`)
  }
  
})

console.log("//////////////////////////////////////////////////////////////////////////////////////////////////")
console.log("Ejercicio B:")

const menorA600 = pizzas.filter(producto => {
  if (producto.precio < 600 == 1){
    console.log(` Si, esta es la pizza que vale menos de $600 
  Nombre: ${producto.nombre}
  Precio: ${producto.precio}
  Ingredientes: ${producto.ingredientes}`)
  }else if ((producto.precio < 600) > 1){
    console.log(` Si, estas son las pizzas que valen menos de $600 
      Nombre: ${producto.nombre}
      Precio: ${producto.precio}
      Ingredientes: ${producto.ingredientes}`)
  }
})


console.log("//////////////////////////////////////////////////////////////////////////////////////////////////")
console.log("Ejercicio C:")
/* c. El nombre de cada pizza con su respectivo precio. */

const pizzaYprecio = pizzas.filter(producto => {
  console.log(` Nombre: ${producto.nombre}, precio: $${producto.precio}`)
})

console.log("//////////////////////////////////////////////////////////////////////////////////////////////////")
console.log("Ejercicio D:")
/* D: Todos los ingredientes de cada pizza 
(En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). 
Ayuda: van a tener que realizar dos recorridos, 
ya que cada pizza del array de pizzas tiene una propiedad 
"ingredientes" cuyo valor es un array con ingredientes.*/

/* const mostrarIngredientes = pizzas.filter(producto => {
  console.log(`Nombre: ${producto.nombre}, Ingredientes: ${producto.ingredientes}`)
   
}) */


const mostrarIngredientes = pizzas.forEach(producto => {
  console.log(`Nombre: ${producto.nombre} Ingredientes: ${producto.ingredientes}`) 
})

