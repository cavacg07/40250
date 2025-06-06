// Generated from c:/Users/avaca/Desktop/analizador-40250/instrucciones.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import instruccionesListener from './instruccionesListener.js';
import instruccionesVisitor from './instruccionesVisitor.js';

const serializedATN = [4,1,22,120,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,
42,8,1,10,1,12,1,45,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,
3,7,77,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,5,10,90,8,10,10,
10,12,10,93,9,10,1,11,4,11,96,8,11,11,11,12,11,97,1,12,1,12,1,12,1,12,1,
13,1,13,1,13,1,13,1,13,5,13,109,8,13,10,13,12,13,112,9,13,1,14,1,14,1,15,
1,15,1,16,1,16,1,16,0,2,2,26,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,0,4,1,0,19,20,1,0,19,21,1,0,11,16,1,0,17,18,108,0,34,1,0,0,0,2,36,
1,0,0,0,4,46,1,0,0,0,6,48,1,0,0,0,8,60,1,0,0,0,10,64,1,0,0,0,12,68,1,0,0,
0,14,76,1,0,0,0,16,78,1,0,0,0,18,84,1,0,0,0,20,87,1,0,0,0,22,95,1,0,0,0,
24,99,1,0,0,0,26,103,1,0,0,0,28,113,1,0,0,0,30,115,1,0,0,0,32,117,1,0,0,
0,34,35,3,2,1,0,35,1,1,0,0,0,36,37,6,1,-1,0,37,38,3,4,2,0,38,43,1,0,0,0,
39,40,10,1,0,0,40,42,3,4,2,0,41,39,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,
44,1,0,0,0,44,3,1,0,0,0,45,43,1,0,0,0,46,47,3,6,3,0,47,5,1,0,0,0,48,49,5,
1,0,0,49,50,5,2,0,0,50,51,3,8,4,0,51,52,5,3,0,0,52,53,3,10,5,0,53,54,5,3,
0,0,54,55,3,12,6,0,55,56,5,4,0,0,56,57,5,5,0,0,57,58,3,14,7,0,58,59,5,6,
0,0,59,7,1,0,0,0,60,61,3,20,10,0,61,62,5,7,0,0,62,63,3,22,11,0,63,9,1,0,
0,0,64,65,3,20,10,0,65,66,3,30,15,0,66,67,3,22,11,0,67,11,1,0,0,0,68,69,
3,20,10,0,69,70,3,32,16,0,70,13,1,0,0,0,71,77,3,16,8,0,72,73,3,16,8,0,73,
74,3,14,7,0,74,77,1,0,0,0,75,77,3,18,9,0,76,71,1,0,0,0,76,72,1,0,0,0,76,
75,1,0,0,0,77,15,1,0,0,0,78,79,5,8,0,0,79,80,5,2,0,0,80,81,3,24,12,0,81,
82,5,4,0,0,82,83,5,3,0,0,83,17,1,0,0,0,84,85,5,9,0,0,85,86,5,3,0,0,86,19,
1,0,0,0,87,91,5,19,0,0,88,90,7,0,0,0,89,88,1,0,0,0,90,93,1,0,0,0,91,89,1,
0,0,0,91,92,1,0,0,0,92,21,1,0,0,0,93,91,1,0,0,0,94,96,5,20,0,0,95,94,1,0,
0,0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,23,1,0,0,0,99,100,5,10,
0,0,100,101,3,26,13,0,101,102,5,10,0,0,102,25,1,0,0,0,103,104,6,13,-1,0,
104,105,3,28,14,0,105,110,1,0,0,0,106,107,10,1,0,0,107,109,3,28,14,0,108,
106,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,27,1,0,0,
0,112,110,1,0,0,0,113,114,7,1,0,0,114,29,1,0,0,0,115,116,7,2,0,0,116,31,
1,0,0,0,117,118,7,3,0,0,118,33,1,0,0,0,5,43,76,91,97,110];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class instruccionesParser extends antlr4.Parser {

    static grammarFileName = "instrucciones.g4";
    static literalNames = [ null, "'for'", "'('", "';'", "')'", "'{'", "'}'", 
                            "'='", "'printf'", "'break'", "'''", "'<'", 
                            "'<='", "'>'", "'>='", "'=='", "'!='", "'++'", 
                            "'--'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "LETRA", "DIGITO", "SIMBOLO", 
                             "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "inicializacion", "condicion", "actualizacion", 
                         "sentencia", "salida", "terminar", "identificador", 
                         "numero", "cadena", "caracteres", "caracter", "operador_relacional", 
                         "operador_incremento" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = instruccionesParser.ruleNames;
        this.literalNames = instruccionesParser.literalNames;
        this.symbolicNames = instruccionesParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
    	case 13:
    	    		return this.caracteres_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    caracteres_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, instruccionesParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.instrucciones(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, instruccionesParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new InstruccionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, instruccionesParser.RULE_instrucciones);
	                this.state = 39;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 40;
	                this.instruccion(); 
	            }
	            this.state = 45;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, instruccionesParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.bucle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, instruccionesParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(instruccionesParser.T__0);
	        this.state = 49;
	        this.match(instruccionesParser.T__1);
	        this.state = 50;
	        this.inicializacion();
	        this.state = 51;
	        this.match(instruccionesParser.T__2);
	        this.state = 52;
	        this.condicion();
	        this.state = 53;
	        this.match(instruccionesParser.T__2);
	        this.state = 54;
	        this.actualizacion();
	        this.state = 55;
	        this.match(instruccionesParser.T__3);
	        this.state = 56;
	        this.match(instruccionesParser.T__4);
	        this.state = 57;
	        this.sentencia();
	        this.state = 58;
	        this.match(instruccionesParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inicializacion() {
	    let localctx = new InicializacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, instruccionesParser.RULE_inicializacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.identificador();
	        this.state = 61;
	        this.match(instruccionesParser.T__6);
	        this.state = 62;
	        this.numero();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, instruccionesParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.identificador();
	        this.state = 65;
	        this.operador_relacional();
	        this.state = 66;
	        this.numero();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actualizacion() {
	    let localctx = new ActualizacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, instruccionesParser.RULE_actualizacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.identificador();
	        this.state = 69;
	        this.operador_incremento();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, instruccionesParser.RULE_sentencia);
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.salida();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.salida();
	            this.state = 73;
	            this.sentencia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 75;
	            this.terminar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, instruccionesParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(instruccionesParser.T__7);
	        this.state = 79;
	        this.match(instruccionesParser.T__1);
	        this.state = 80;
	        this.cadena();
	        this.state = 81;
	        this.match(instruccionesParser.T__3);
	        this.state = 82;
	        this.match(instruccionesParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, instruccionesParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(instruccionesParser.T__8);
	        this.state = 85;
	        this.match(instruccionesParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, instruccionesParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(instruccionesParser.LETRA);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19 || _la===20) {
	            this.state = 88;
	            _la = this._input.LA(1);
	            if(!(_la===19 || _la===20)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, instruccionesParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 94;
	            this.match(instruccionesParser.DIGITO);
	            this.state = 97; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===20);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, instruccionesParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(instruccionesParser.T__9);
	        this.state = 100;
	        this.caracteres(0);
	        this.state = 101;
	        this.match(instruccionesParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	caracteres(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CaracteresContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, instruccionesParser.RULE_caracteres, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.caracter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 110;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CaracteresContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, instruccionesParser.RULE_caracteres);
	                this.state = 106;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 107;
	                this.caracter(); 
	            }
	            this.state = 112;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, instruccionesParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3670016) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operador_relacional() {
	    let localctx = new Operador_relacionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, instruccionesParser.RULE_operador_relacional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 129024) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operador_incremento() {
	    let localctx = new Operador_incrementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, instruccionesParser.RULE_operador_incremento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        _la = this._input.LA(1);
	        if(!(_la===17 || _la===18)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

instruccionesParser.EOF = antlr4.Token.EOF;
instruccionesParser.T__0 = 1;
instruccionesParser.T__1 = 2;
instruccionesParser.T__2 = 3;
instruccionesParser.T__3 = 4;
instruccionesParser.T__4 = 5;
instruccionesParser.T__5 = 6;
instruccionesParser.T__6 = 7;
instruccionesParser.T__7 = 8;
instruccionesParser.T__8 = 9;
instruccionesParser.T__9 = 10;
instruccionesParser.T__10 = 11;
instruccionesParser.T__11 = 12;
instruccionesParser.T__12 = 13;
instruccionesParser.T__13 = 14;
instruccionesParser.T__14 = 15;
instruccionesParser.T__15 = 16;
instruccionesParser.T__16 = 17;
instruccionesParser.T__17 = 18;
instruccionesParser.LETRA = 19;
instruccionesParser.DIGITO = 20;
instruccionesParser.SIMBOLO = 21;
instruccionesParser.WS = 22;

instruccionesParser.RULE_programa = 0;
instruccionesParser.RULE_instrucciones = 1;
instruccionesParser.RULE_instruccion = 2;
instruccionesParser.RULE_bucle = 3;
instruccionesParser.RULE_inicializacion = 4;
instruccionesParser.RULE_condicion = 5;
instruccionesParser.RULE_actualizacion = 6;
instruccionesParser.RULE_sentencia = 7;
instruccionesParser.RULE_salida = 8;
instruccionesParser.RULE_terminar = 9;
instruccionesParser.RULE_identificador = 10;
instruccionesParser.RULE_numero = 11;
instruccionesParser.RULE_cadena = 12;
instruccionesParser.RULE_caracteres = 13;
instruccionesParser.RULE_caracter = 14;
instruccionesParser.RULE_operador_relacional = 15;
instruccionesParser.RULE_operador_incremento = 16;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_bucle;
    }

	inicializacion() {
	    return this.getTypedRuleContext(InicializacionContext,0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	actualizacion() {
	    return this.getTypedRuleContext(ActualizacionContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InicializacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_inicializacion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterInicializacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitInicializacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitInicializacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_condicion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	operador_relacional() {
	    return this.getTypedRuleContext(Operador_relacionalContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActualizacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_actualizacion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	operador_incremento() {
	    return this.getTypedRuleContext(Operador_incrementoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterActualizacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitActualizacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitActualizacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_salida;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_terminar;
    }


	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_identificador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(instruccionesParser.LETRA);
	    } else {
	        return this.getToken(instruccionesParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(instruccionesParser.DIGITO);
	    } else {
	        return this.getToken(instruccionesParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(instruccionesParser.DIGITO);
	    } else {
	        return this.getToken(instruccionesParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_cadena;
    }

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_caracteres;
    }

	caracter() {
	    return this.getTypedRuleContext(CaracterContext,0);
	};

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitCaracteres(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitCaracteres(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(instruccionesParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(instruccionesParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(instruccionesParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operador_relacionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_operador_relacional;
    }


	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterOperador_relacional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitOperador_relacional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitOperador_relacional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operador_incrementoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_operador_incremento;
    }


	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterOperador_incremento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitOperador_incremento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitOperador_incremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




instruccionesParser.ProgramaContext = ProgramaContext; 
instruccionesParser.InstruccionesContext = InstruccionesContext; 
instruccionesParser.InstruccionContext = InstruccionContext; 
instruccionesParser.BucleContext = BucleContext; 
instruccionesParser.InicializacionContext = InicializacionContext; 
instruccionesParser.CondicionContext = CondicionContext; 
instruccionesParser.ActualizacionContext = ActualizacionContext; 
instruccionesParser.SentenciaContext = SentenciaContext; 
instruccionesParser.SalidaContext = SalidaContext; 
instruccionesParser.TerminarContext = TerminarContext; 
instruccionesParser.IdentificadorContext = IdentificadorContext; 
instruccionesParser.NumeroContext = NumeroContext; 
instruccionesParser.CadenaContext = CadenaContext; 
instruccionesParser.CaracteresContext = CaracteresContext; 
instruccionesParser.CaracterContext = CaracterContext; 
instruccionesParser.Operador_relacionalContext = Operador_relacionalContext; 
instruccionesParser.Operador_incrementoContext = Operador_incrementoContext; 
