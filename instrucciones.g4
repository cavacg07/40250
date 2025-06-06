grammar instrucciones;

// Reglas sintácticas (parser rules)

programa: instrucciones;

instrucciones: instruccion| instrucciones instruccion
    ;

instruccion: bucle;

bucle: 'for' '(' inicializacion ';' condicion ';' actualizacion ')' '{' sentencia '}'
    ;

inicializacion: identificador '=' numero;

condicion: identificador operador_relacional numero
    ;

actualizacion: identificador operador_incremento
    ;

sentencia: salida | salida sentencia | terminar
    ;

salida: 'printf' '('cadena')' ';'
    ;

terminar: 'break' ';'
    ;

identificador: LETRA (LETRA | DIGITO)*
    ;

numero: (DIGITO)+
    ;

cadena: '\'' caracteres '\''
    ;

caracteres: caracter | caracteres caracter 
    ;

caracter:
      LETRA
    | DIGITO
    | SIMBOLO
    ;

// Reglas léxicas (lexer rules)

operador_relacional
    : '<'
    | '<='
    | '>'
    | '>='
    | '=='
    | '!='
    ;

operador_incremento
    : '++'
    | '--'
    ;

LETRA: [a-zA-Z]
    ;

DIGITO: [0-9]
    ;

SIMBOLO: '.' | ',' | '!' | '?' | ':' | ';' | '\''
    ;

WS: [ \t\r\n]+ -> skip
    ;