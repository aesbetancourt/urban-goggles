const identifier = require("./identifierRegex.js");
const { fullStringLiteral,
        whiteSpace,
        comments,
        fullNumericLiteral,
        fullRegularExpressionLiteral,
        lineTerminatorSequence } = require("./extendedRegex");


const pytokens = {
//    Whitespaces, comments and new lines
    WHITESPACE: whiteSpace,
    COMMENT: comments,
    NEWLINE: lineTerminatorSequence,
    TAB : /  /,

//    Identifiers
    IDENTIFIER: identifier,
    MAIN: /main/,
    ARGS: /args/,
    
//    Hard Keywords
    AS: /as/,
    BREAK: /break/,
    CLASS: /class/,
    CONTINUE: /continue/,
    DO: /do/,
    ELSE: /else/,
    ELSEIF: /else if/,
    FALSE: /false/,
    FOR: /for/,
    FUN : /fun/,
    IF: /if/,
    IN:/in/,
    INTERFACE: /interface/,
    IS: /is/,
    NULL: /null/,
    OBJECT: /object/,
    PACKAGE: /package/,
    RETURN: /return/,
    SUPER: /super/, 
    THIS: /this/,
    THROW: /throw/,
    TRUE: /true/,
    TRY: /try/,
    TYPEALIAS: /typealias/,
    VAL: /val/,
    VAR: /var/,
    WHEN: /when/,
    WHILE: /while/,

//  Soft Keywords
    BY:/by/,
    CATCH: /catch/,
    CONSTRUCTOR: /constructor/,
    DELEGATE: /delegate/,
    DYNAMYC: /dynamic/,
    FIELD: /field/,
    FILE: /file/,
    FINALLY: /finally/,
    GET: /get/,
    IMPORT: /import/,
    INIT: /init/,
    PARAM: /param/,
    PROPERTY: /property/,
    RECEIVER: /receiver/,
    SET: /set/,
    SETPARAM: /setparam/,
    WHERE: /where/,
//  Modifier Keywords
    ACTUAL : /actual/,
    ABSTRACT: /abstract/,
    ANNOTATION:/annotation/,
    COMPANION:/companion/,
    CONST:/const/,
    CROSSINLINE:/crossinline/,
    DATA:/data/,
    ENUM :/enum/,
    EXPECT: /expect/,
    EXTERNAL:/external/,
    FINAL:/final/, 
    INFIX:/infix/,
    INLINE:/inline/,
    INNER:/inner/,
    INTERNAL:/internal/,
    LATEINIT:/lateinit/,
    NOINLINE:/noinline/,
    OPEN:/open/,
    OPERATOR:/operator/,
    OUT:/out/,
    OVERRIDE:/override/,
    PRIVATE:/private/,
    PROTECTED:/protected/,
    PUBLIC:/public/,
    REIFIED:/reified/,
    SEALED:/sealed/,
    SUSPEND:/suspend/,
    TAILREC:/tailrec/,
    VARARG:/vararg/,
// Variables Identifiers
 BYTE:/Byte/,
 SHORT:/Short/,
 INT:/Int/,
 LONG:/Long/,
 FLOAT:/Float/,
 DOUBLE:/Double/,
 ARRAYOF:/arrayOf/,
 INTARRAYOF:/intArrayOf/,
 CHARARRAYOF:/charArrayOf/,
 ARRAY:/Array/,
 STRING:/String /,
 // Type Conversions
 TOBYTE:/toByte()/,
 TOSHORT:/toShort()/,
 TOINT:/toInt()/,
 TOLONG:/toLong()/,
 TOFLOAT:/toFLoat()/,
 TODOUBLE:/toDouble()/,
 TOCHAR:/toChar()/,
//  Special Identifiers
// FIELD: /field/, DECLARADO
    IT: /it/,
//  Calls
    PRINT: /println/,
// Logical
    AND: /&&/,
    OR: /||/,
    NOT: /!/,
    
//  Operators and Special Symbols
    L_BRACE        : /{/,
    R_BRACE        : /}/,
    L_PAREN        : /\(/,
    R_PAREN        : /\)/,
    L_BRACKET      : /\[/,
    R_BRACKET      : /\]/,
    DOT            : /\./,
    SEMI_COLON     : /;/,
    COMMA          : /,/,
    L_THAN         : /</,
    G_THAN         : />/,
    L_THAN_EQ      : /<=/,
    G_THAN_EQ      : />=/,
    EQUAL          : /==/,
    NOT_EQ         : /!=/,
    ADD            : /\+/,
    SUB_OR_NEG     : /-/,
    MUL            : /\*/,
    EXP            : /\*\*/,
    MOD            : /%/,
    DIV            : /\//,
    DIV_ENT      : /\/\//,
    INC            : /\+\+/,
    DECR           : /--/,
    BIT_AND        : /&/,
    BIT_OR         : /|/,
    XOR            : /^/,
    BIT_NOT        : /~/,
    TERN_ELSE      : /:/,
    ASSIGN         : /=/,
    ADD_ASSIGN     : /\+=/,
    SUB_ASSIGN     : /-=/,
    DIVENT_ASSIGN  : /\/\/=/,
    EXP_ASSIGN     : /\^=/,
    MUL_ASSIGN     : /\*=/,
    MOD_ASSIGN     : /%=/,
    BSHIFTLEFT     : /<</,
    BSHIFTRIGHT    : />>/,
    BIT_AND_ASSIGN : /&=/,
    BIT_OR_ASSIGN  : /|=/,
    BIT_XOR_ASSIGN : /^=/,
    LAMBDA: /->/,
    // Literals
    NUM_LIT   : fullNumericLiteral,
    STRING_LIT: fullStringLiteral,
    REGEXP_LIT: fullRegularExpressionLiteral,

};

module.exports = pytokens;

