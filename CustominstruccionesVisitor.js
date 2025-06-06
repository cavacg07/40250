import InstruccionesVisitor from './generated/instruccionesVisitor.js';
import InstruccionesParser from './generated/instruccionesParser.js';

class CustomInstruccionesVisitor extends InstruccionesVisitor {
  constructor() {
    super();
    this.memory = {}; // Almacén de variables, por ejemplo, para la inicialización y manipulación de contadores
  }

  // Visita la regla principal "programa"
  visitPrograma(ctx) {
    // La regla "programa" es simplemente una lista de instrucciones.
    return this.visit(ctx.instrucciones());
  }

  // Visita la regla "instrucciones" (recursiva o lista de instrucciones)
  visitInstrucciones(ctx) {
    if (ctx.instruccion().length > 0) {
      // Recorremos todas las instrucciónes, evaluándolas en secuencia
      ctx.instruccion().forEach((instruccion) => this.visit(instruccion));
    }
    return null;
  }

  // Visita la regla "instruccion"
  visitInstruccion(ctx) {
    // Actualmente solo manejamos la regla de "bucle"
    if (ctx.bucle()) {
      return this.visit(ctx.bucle());
    }
    return null;
  }

  // Visita la regla "bucle": for '(' inicializacion ';' condicion ';' actualizacion ')' '{' sentencia '}'
  visitBucle(ctx) {
    // Realizamos la inicialización
    this.visit(ctx.inicializacion());

    // Ejecutamos el bucle mientras la condición se cumpla
    while (this._evalCondicion(ctx.condicion())) {
      try {
        // Procesa el bloque de sentencias dentro del bucle.
        this.visit(ctx.sentencia());
      } catch (e) {
        // Si la sentencia 'break' es capturada, salimos del bucle
        if (e.message === "Break encountered") {
          break;
        } else {
          throw e;
        }
      }
      // Actualizamos la variable mediante la regla 'actualizacion'
      this.visit(ctx.actualizacion());
    }
    return null;
  }

  // Método auxiliar para evaluar la condición: identificador operador_relacional numero
  _evalCondicion(ctx) {
    const id = ctx.identificador().getText();
    const op = ctx.operador_relacional().getText();
    const num = Number(ctx.numero().getText());
    const value = this.memory[id] || 0;

    switch (op) {
      case "<":
        return value < num;
      case "<=":
        return value <= num;
      case ">":
        return value > num;
      case ">=":
        return value >= num;
      case "==":
        return value === num;
      case "!=":
        return value !== num;
      default:
        throw new Error("Operador relacional desconocido: " + op);
    }
  }

  // Visita la regla "inicializacion": identificador '=' numero
  visitInicializacion(ctx) {
    const id = ctx.identificador().getText();
    const num = Number(ctx.numero().getText());
    this.memory[id] = num;
    // Para efectos de depuración, mostramos la asignación
    console.log(`Inicialización: ${id} = ${num}`);
    return this.memory[id];
  }

  // Visita la regla "actualizacion": identificador operador_incremento
  visitActualizacion(ctx) {
    const id = ctx.identificador().getText();
    const op = ctx.operador_incremento().getText();
    if (!(id in this.memory)) {
      this.memory[id] = 0;
    }
    switch (op) {
      case "++":
        this.memory[id]++;
        break;
      case "--":
        this.memory[id]--;
        break;
      default:
        throw new Error("Operador de incremento desconocido: " + op);
    }
    console.log(`Actualización: ${id} = ${this.memory[id]}`);
    return this.memory[id];
  }

  // Visita la regla "sentencia": puede ser "salida", "salida sentencia" o "terminar"
  visitSentencia(ctx) {
    // Si la regla tiene una sentencia 'salida'
    if (ctx.salida()) {
      this.visit(ctx.salida());
      // Si hay otra sentencia encadenada, la visitamos también
      if (ctx.sentencia()) {
        this.visit(ctx.sentencia());
      }
    } else if (ctx.terminar()) {
      this.visit(ctx.terminar());
    }
    return null;
  }

  // Visita la regla "salida": 'printf' '(' cadena ')' ';'
  visitSalida(ctx) {
    let cadena = ctx.cadena().getText();
    // Se eliminan las comillas simples al inicio y final de la cadena
    cadena = cadena.substring(1, cadena.length - 1);
    console.log("Salida: " + cadena);
    return cadena;
  }

  // Visita la regla "terminar": 'break' ';'
  visitTerminar(ctx) {
    // Para manejar el 'break', lanzamos una excepción que captura el bucle
    throw new Error("Break encountered");
  }
}

export default CustomInstruccionesVisitor;