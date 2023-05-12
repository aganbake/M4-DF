"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    _classCallCheck(this, Cliente);
    this.nombre = nombre;
  }
  _createClass(Cliente, [{
    key: "cliente",
    get: function get() {
      return this.nombre;
    },
    set: function set(nombre) {
      this.nombre = nombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto(monto_bruto_anual, deducciones) {
      return (monto_bruto_anual - deducciones) * 0.21;
    }
  }]);
  return Cliente;
}();
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuestos);
    this.monto_bruto_anual = monto_bruto_anual;
    this.deducciones = deducciones;
  }
  _createClass(Impuestos, [{
    key: "montoBruto",
    get: function get() {
      return this.monto_bruto_anual;
    },
    set: function set(monto_bruto_anual) {
      this.monto_bruto_anual = monto_bruto_anual;
    }
  }, {
    key: "deduc",
    get: function get() {
      return this.deducciones;
    },
    set: function set(deducciones) {
      this.deducciones = deducciones;
    }
  }]);
  return Impuestos;
}();
var impuesto = new Impuestos(20000, 10000);
var cliente = new Cliente("kevin");
// cliente.cliente = "Pedro";

console.log("Para", cliente.cliente, "el impuesto es: $", cliente.calcularImpuesto(impuesto.montoBruto, impuesto.deduc));