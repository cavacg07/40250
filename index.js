// index.js
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";
import readline from "readline";

// Importa las clases generadas por ANTLR para tu gramática "instrucciones"
import InstruccionesLexer from "./generated/instruccionesLexer.js";
import InstruccionesParser from "./generated/instruccionesParser.js";
import CustomInstruccionesVisitor from "./CustominstruccionesVisitor.js";

/**
 * Procesa una cadena de entrada de un archivo dado.
 * Muestra la tabla de tokens, el árbol de derivación (si es válido)
 * y un mensaje indicando si la cadena es válida o inválida.
 */
async function processInput(input, fileName) {
  console.log(`\nProcesando archivo: ${fileName}`);
  
  // --- LEXER: obtener tokens para depuración ---
  let inputStream = CharStreams.fromString(input);
  let lexer = new InstruccionesLexer(inputStream);
  const tokens = lexer.getAllTokens();
  if (tokens.length === 0) {
    console.error(`No se generaron tokens en el archivo: ${fileName}`);
    return;
  }
  
  console.log("\nTabla de Tokens y Lexemas:");
  console.log("----------------------------------------------------");
  console.log("| Lexema         | Token                           |");
  console.log("----------------------------------------------------");
  for (let token of tokens) {
    const tokenType = InstruccionesLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
    const lexema = token.text;
    console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
  }
  console.log("----------------------------------------------------");

  // --- PARSER: volver a procesar la entrada ---
  inputStream = CharStreams.fromString(input);
  lexer = new InstruccionesLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new InstruccionesParser(tokenStream);

  // Configurar listener de errores para capturar errores de sintaxis
  parser.removeErrorListeners();
  let syntaxErrors = false;
  parser.addErrorListener({
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
      syntaxErrors = true;
      console.error(`Error en ${fileName} en línea ${line}:${column} – ${msg}`);
    }
  });

  // Inicia el análisis sintáctico a partir de la regla principal "programa"
  let tree = parser.programa();

  // Mostrar mensaje si la entrada es válida o inválida
  if (syntaxErrors) {
    console.log(`\nLa cadena en ${fileName} es INVÁLIDA.`);
  } else {
    console.log(`\nLa cadena en ${fileName} es VÁLIDA.`);
    console.log("\nÁrbol de derivación:");
    console.log(tree.toStringTree(parser.ruleNames, parser));

    // Opcional: visita el árbol para aplicar cualquier semántica adicional
    const visitor = new CustomInstruccionesVisitor();
    visitor.visit(tree);
  }
}

/**
 * Función principal que procesa múltiples archivos de entrada.
 * Define dos entradas válidas y dos inválidas.
 */
async function main() {
  // Lista de archivos de entrada
  const files = [
    "input_valid1.txt",
    "input_valid2.txt",
    "input_invalid1.txt",
    "input_invalid2.txt"
  ];

  // Procesa cada archivo
  for (let fileName of files) {
    try {
      const input = fs.readFileSync(fileName, "utf8");
      await processInput(input, fileName);
    } catch (err) {
      console.error(`No se pudo leer el archivo ${fileName}:`, err);
    }
  }
}

// Función auxiliar para leer desde consola (en caso de querer ingresar manualmente)
function leerCadena() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question("Ingrese una cadena: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

main();