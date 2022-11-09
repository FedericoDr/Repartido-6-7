var express = require('express');
var calculadora = express();

calculadora.get('/', function (req, res, next) {
  res.render('index');
});

calculadora.get('/calculadora', function (req, res) {
  res.render('calculadora', {});
}); 

calculadora.post('/calculadora', function (req, res) {
  var fltNum1 = parseFloat(req.body.fltNum1) || 0; 
  var fltNum2 = parseFloat(req.body.fltNum2) || 0; 
  var Operacion = req.body.Operacion || 'suma'; 
  var strResultado = '';
  var sumas, restas, mlts, divs, imc = ''; 
  switch (Operacion) {

    case 'suma':
      sumas = 'selected';
      strResultado = `La suma de ${fltNum1} y ${fltNum2} = ${(fltNum1 + fltNum2)}`;
      break;

    case 'resta':
      restas = 'selected';
      strResultado = `La resta de ${fltNum1} y ${fltNum2} = ${(fltNum1 - fltNum2)}`;
      break;
      
    case 'mlt':
      mlts = 'selected';
      strResultado = `El producto de ${fltNum1} y ${fltNum2} = ${(fltNum1 * fltNum2)}`;
      break;

    case 'div':
      divs = 'selected';
      if (fltNum2 != 0) {
        strResultado = `La división de ${fltNum1} y ${fltNum2} = ${(fltNum1 / fltNum2)}`;
      } else {
        strResultado = `No se puede dividir por cero`;
      }
      break;

    case 'imc':
      imc = 'selected';
      strResultado = `Tu Peso ${fltNum1}KG tu altura ${fltNum2}CM, IMC de ${parseInt((fltNum1 / (fltNum2 ** 2)) * 10000)}`;
      break;
  }

  var viewData2 = {
    fltNum1,
    fltNum2,
    sumas,
    restas,
    mlts,
    divs,
    imc,
    strResultado
  }

  res.render('calculadora', viewData2);
}); 
module.exports = calculadora;
