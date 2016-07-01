$('.number').hide(0); //隱藏number
function GetRandom(Min,Max){
  return Math.floor(Math.random()* (Max-Min+1) )+Min;
}

var numbers_all = []
var winning_numbers = [];
for(var i=1;i<=49;i++){
  numbers_all.push(i)
}

for(var i=1;i<=7;i++){
        var temp = GetRandom(0,numbers_all.length-1);
        winning_numbers.push(numbers_all[temp]);
        numbers_all.splice(temp,1);
}
 

$('#btn').click(function(){
        for(var i=1;i<=7;i++){
            $('#number' + i).text(winning_numbers[i-1]);
            $('#number' + i).fadeIn(500 * i);
        }
});