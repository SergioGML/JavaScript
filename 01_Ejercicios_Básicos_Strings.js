<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicios de Programación en JavaScript</title>
</head>

<body>
  <h1>Ejercicios de Programación en JavaScript</h1>
  <script>




    /* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */

    function contarCaracteres1(texto = "") {
      return texto.length;
    }
    //console.log(contarCaracteres1("Mi gata se llama Yuna"));

    const miGataYuna = (nombre = "", edad = undefined) => {
      (!nombre)
        ? console.warn("No ingresaste ningún nombre")
        : (edad === undefined)
          ? console.warn("No ingresaste ninguna edad")
          : console.info(`El nombre de mi gata es ${nombre} y su edad es de ${edad} años`);
    }

    // miGataYuna(4);
    // miGataYuna("Yuna",);
    // miGataYuna("Yuna",3);


    const contarCaracteres3 = (cadena = "") => {
      if (!cadena) {
        console.warn("No ingresaste ningún texto");
      } else {
        console.info(`La cadena '${cadena}' tiene ${cadena.length} número de caracteres`)
      }
    }
    //contarCaracteres3();
    //contarCaracteres3("Hola a todos");

    const contarCaracteres4 = (cadena = "") =>
      (!cadena)
        ? console.warn("No ingresaste ningún texto")
        : console.info(`La cadena '${cadena}' tiene ${cadena.length} número de caracteres`);

    //contarCaracteres4();
    //contarCaracteres4("Hola a Jon Mircha");






    /* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

    const recortarTexto2 = (cadena = "", longitud = undefined) =>
      (!cadena)
        ? console.warn("No ingresaste ningún texto")
        : (longitud === undefined)
          ? console.warn("No ingresaste ninguna longitud")
          : console.info(cadena.slice(0, longitud));

    recortarTexto2();
    recortarTexto2("Hola a Jon Mircha");
    recortarTexto2("Hola a Jon Mircha", 10);






    /* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
     miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */


    const separarTexto = (cadena = "", separador = undefined) => //coloca undefined al separador para aplciarle luego un operador ternario ? :
      (!cadena)
        ? console.warn("No ingresaste ningún texto")
        : (separador === undefined)
          ? console.warn("No ingresaste ningun separador")
          : console.info(cadena.split(separador));

    //separarTexto();
    //separarTexto("Este es el texto sin separador");
    //separarTexto("Este es un texto, con separador en las comas, ¿vale?", ",");






    /* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

    //MI PROPUESTA
    const repetirTexto2 = (texto, cantidad) => texto.repeat(cantidad);
    //console.log(repetirTexto2("Hola Yuna ", 4));

    //SOLUCION DE JON
    const repetirTexto = (texto = "", cantidad = undefined) => {
      if (!texto) return console.warn("No ingresaste un texto");

      if (typeof texto !== "string") return console.warn("No ingresaste un texto válido, recibiste un número");

      if (cantidad === undefined) return console.warn("No ingresaste una cantidad")

      if (cantidad <= 0) return console.error("No ingresaste un número válido. Ingresa un número superior a 1");

      for (let i = 1; i <= cantidad; i++)
        console.log(texto)

    }

    // repetirTexto("Hola");
    // repetirTexto("Mi gato se llama Bayllis");
    // repetirTexto("Mi gato es Bayllis", -4);
    // repetirTexto("Mis gatos son Bayllis, Yuna y Orión ", 3);






    /* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */


    const invertirTexto = (texto = "") => {
      (!texto)
        ? console.warn("No has introducido una cadena de texto crack")
        : console.info(texto.split("").reverse().join(""));
    };

    // invertirTexto();
    // invertirTexto("Se es o no se eS");






    /* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */


    const textoCadena = (cadena = "", texto = "") => {
      if (!cadena) return console.warn("No ingresaste un texto largo");

      if (!texto) return console.warn("No ingresaste la palabra a evaluar");

      let i = 0;
      contador = 0;
      while (i !== -1) {
        i = cadena.indexOf(texto, i)
        if (i !== -1) {
          i++;
          contador++;
        }
      }
      return console.info(`la palabra ${texto} se repite ${contador} veces`);
    }


    //textoCadena();
    //textoCadena("", "mundo");
    //textoCadena("Hola Mundo Adiós Mundo");
    //textoCadena("Hola Mundo Adiós Mundo", "Mundo");






    /* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */

    const palindromo = (palabra = "") => {
      if (!palabra) return console.warn("No ingresaste una palabra para comprobar");
      if (typeof palabra !== "string") return console.warn("Debes ingresar una palabra, no otro caracter.");

      palabra = palabra.toUpperCase();
      let alReves = palabra.split("").reverse().join("");
      return (palabra === alReves)
        ? console.log(`La palabra ${palabra} es un palíndromo. Al revés se escribe ${alReves} por lo que son iguales.`)
        : console.log(`La palabra ${palabra} NO es un palíndromo. Al revés se escribe ${alReves} por lo que NO son iguales`)
    }

    // palindromo();
    // palindromo(5);
    // palindromo("Salas");
    // palindromo("Yuna");






    /* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */

    const eliminarCaracteres = (texto = "", patron = "") =>

      (!texto)
        ? console.warn("No ingresaste un texto")
        : (!patron)
          ? console.warn("No ingresaste la palabra que quieres eliminar")
          : console.info(texto.replace(new RegExp(patron, "ig"), ""));

    // eliminarCaracteres();
    // eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
    // eliminarCaracteres("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "o");







    /* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */

    const aleatorio = () => console.info(Math.round((Math.random() * 100) + 501));

    // aleatorio();







    /* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */


    const capicua = (numero = 0) => {
      if (!numero) return console.warn("No ingresaste un número");

      if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un número`);

      numero = numero.toString();
      let alReves = numero.split("").reverse().join("");

      return (numero === alReves)
        ? console.info(`El número ${numero} SI es capicua, su número al reves es ${alReves}`)
        : console.info(`El número ${numero} NO es capicua, su número al reves es ${alReves}`)
    }

    // capicua();
    // capicua({});
    // capicua("19");
    // capicua(3003);
    // capicua(405);






    /* 11) Programa una función que calcule el factorial de un número (El factorial de 5 sería 5*4=20 20*3=60 60*2=120 120*1=120), pe. miFuncion(5) devolverá 120 */

    const factorial = (numero = undefined) => {
      if (numero === undefined) return console.warn("No ingrewaste un número");

      if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un número`);

      if (numero <= 0) return console.error(`El valor "${numero}" no es un número valido`);

      let factorial=1;

      for (let i = numero; i > 1 ; i--){
        factorial*=i;
        
      }

      return console.info (`El factorial de ${numero} es ${factorial}`);
    }

    factorial();
    factorial("10");
    factorial([10,3]);
    factorial(-8);
    factorial(0);
    factorial(9);








    /* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */



    /* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */



    /* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */



    /* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */



    /* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */



    /* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */



    /* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */



    /* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */



    /* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */



    /* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */



    /* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */



    /* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */



    /* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/



    /* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */



    /* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */



    /* 27) Programa una clase llamada Pelicula.
        La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
          - Todos los datos del objeto son obligatorios.
          - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
          - Valida que el título no rebase los 100 caracteres.
          - Valida que el director no rebase los 50 caracteres.
          - Valida que el año de estreno sea un número entero de 4 dígitos.
          - Valida que el país o paises sea introducidos en forma de arreglo.
          - Valida que los géneros sean introducidos en forma de arreglo.
          - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
          - Crea un método estático que devuelva los géneros aceptados*.
          - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
          - Crea un método que devuelva toda la ficha técnica de la película.
          - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
        */
  </script>
</body>

</html>