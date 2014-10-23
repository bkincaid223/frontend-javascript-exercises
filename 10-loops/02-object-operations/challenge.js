module.exports.copy = function(src){
var dest = {};
for (k in src) {
  dest [k] = src [k]
}
return dest;
}
module.exports.extend = function(dest, src){
  for (k in src){
    dest [k] = src [k]
  }
return dest;
};

module.exports.hasElems = function(dest, elem){
  for (var i = 0; i < elem.length; i++)
  {
    if (dest[elem[i]] === undefined){
      return false;
    }
  }return true;
};
