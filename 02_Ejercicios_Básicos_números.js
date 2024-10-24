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

      let factorial = 1;

      for (let i = numero; i > 1; i--) {
        factorial *= i;

      }

      return console.info(`El factorial de ${numero} es ${factorial}`);
    }

    factorial();
    factorial("10");
    factorial([10, 3]);
    factorial(-8);
    factorial(0);
    factorial(9);



    /* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

    const numeroPrimo = (numero = undefined) => {

      if (numero === undefined) return console.warn("No ingrewaste un número");

      if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un número`);

      if (numero <= 1) return console.error(`El valor "${numero}" no es un número valido. No puede ser 1 o menor`);

      let divisible = false;

      for (let i = 2; i < numero; i++) {
        if ((numero % i) === 0) {
          divisible = true;
          break;
        }
      }

      return (divisible)
        ? console.log(`El nº ${numero}, NO es primo`)
        : console.log(`El nº ${numero}, SI es primo`);

    }

    numeroPrimo();
    numeroPrimo("7");
    numeroPrimo(false);
    numeroPrimo(1);
    numeroPrimo(300);
    numeroPrimo(13);


    /* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */


    const numeroParImpar = (numero = undefined) => {
      if (numero === undefined) return console.warn("No ingresaste un número");

      if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un número`);

      return ((numero % 2) === 0)
        ? console.log(`El nº ${numero}, es Par`)
        : console.log(`El nº ${numero}, es Impar`);
    };

    numeroParImpar();
    numeroParImpar("9");
    numeroParImpar(5);
    numeroParImpar(4);


    /* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */

    const convertirGrados = (grados = undefined, unidad = undefined) => {
      if (grados === undefined) return console.warn("No ingresaste un número");

      if (typeof grados !== "number") return console.error(`El valor "${grados}" no es un número`);

      if (unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir");

      if (typeof unidad !== "string") return console.error(`El valor "${unidad}" NO es un texto`);

      if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn(`Valor de unidad no reconocido`);

      if (unidad === "C") {
        console.info(`${grados} ºC = ${Math.round(grados * (9 / 5)) + 32} ºF`);
      } else if (unidad === "F") {
        console.info(`${grados} ºF = ${Math.round((grados - 32) * (5 / 9))} ºC`);
      }
    }

    convertirGrados();
    convertirGrados("2");
    convertirGrados(2);
    convertirGrados(2, false);
    convertirGrados(2, "Adiós");
    convertirGrados(0, "E");
    convertirGrados(30, "C");
    convertirGrados(86, "F");

    /* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */

    const convertirBinarioDecimal = (numero = undefined, base = undefined) => {

      if (numero === undefined) return console.warn("No ingresaste un número");

      if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un número`);

      if (base === undefined) return console.warn("No ingresaste un número");

      if (typeof base !== "number") return console.error(`El valor "${base}" no es un número`);

      if (base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
      } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
      }

    }

    convertirBinarioDecimal();
    convertirBinarioDecimal("4");
    convertirBinarioDecimal(300);
    convertirBinarioDecimal(100, 2);

    convertirBinarioDecimal(4,10);