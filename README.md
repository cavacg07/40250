# 40250
# Analizador de Instrucciones con ANTLR4 y Node.js

Este proyecto implementa un analizador léxico y sintáctico para un lenguaje simple de instrucciones, basado en una gramática definida en `instrucciones.g4`. El objetivo es procesar sentencias que incluyen estructuras como bucles `for` con llamadas a `printf` y la instrucción `break`, validando el código y generando un árbol de derivación.

## Descripción

El analizador utiliza ANTLR4 para generar el lexer, parser y visitor a partir de la gramática definida en `instrucciones.g4`. Con él se pueden procesar archivos de entrada que contengan ejemplos válidos e inválidos:

- **Entradas Válidas:**  
  Código que cumple con la gramática definida (por ejemplo, bucles `for` correctamente formados).

- **Entradas Inválidas:**  
  Ejemplos de código con errores de sintaxis, para comprobar la detección y manejo de errores en el analizador.

## Requisitos

- [Node.js](https://nodejs.org)
- Java 11 en adelante
- Visual Studio Code
- Git
- [ANTLR4](https://www.antlr.org/)  
- (Opcional) [antlr4-cli](https://www.npmjs.com/package/antlr4-cli) para generar los archivos del analizador.

## Estructura del Proyecto
├── generated/                    # Archivos generados por ANTLR4 (Lexer, Parser, Visitor) 
├── input_valid1.txt                # Ejemplo de código válido 
├── input_valid2.txt                # Otro ejemplo de código válido 
├── input_invalid1.txt              # Ejemplo de código inválido 
├── input_invalid2.txt              # Otro ejemplo de código inválido 
├── CustomInstruccionesVisitor.js   # Visitor personalizado para procesar el árbol de derivación 
├── instrucciones.g4                # Archivo de la gramática 
├── index.js                        # Archivo principal que ejecuta el analizador 
└── README.md                       # Este archivo
