function GetRandom(Min,Max){
  return Math.floor(Math.random()* (Max-Min+1) )+Min;
}
var answer = GetRandom(1,99);
var L_Num = 0;
var U_Num = 100;
var count = 0;

function Guess(){
    console.log('目前範圍為' + L_Num + ' ~ ' + U_Num + '間，你已經猜了' + count + ' 次');
    var guess = parseInt(prompt('猜的數字：'));
    if((guess <= L_Num) || (guess >= U_Num)){
        alert('請輸入介於' + L_Num + '~' + U_Num + '的數字!!!');
    }else{
        count++;
        if(guess == answer){
            alert('猜對囉，你總共花了 '+ count + ' 次!');
        }else if(guess < answer){
            console.log('你猜的數字太小囉!');
            L_Num = guess;
        }else{
            console.log('你猜的數字太大囉!');
            U_Num = guess;
        }
    }
}

