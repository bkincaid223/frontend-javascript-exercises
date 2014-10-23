module.exports.stream = function(conditionalFn, actionFn){
  while(conditionalFn() === true)
        actionFn();
      return;



return;

};


module.exports.sumNumbers = function(numbers){
 var sum = 0;
 var i = 0;
 while(i < numbers.length)
 {

sum += numbers[i];
i++;
}
return sum;
};
