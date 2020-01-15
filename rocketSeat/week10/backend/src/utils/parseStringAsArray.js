// Trabalha com o campo techs, recebe array e transforma em string
module.exports = function parseStringAsArray(arrayAsString){
  return arrayAsString.split(',').map(tech => tech.trim());
}