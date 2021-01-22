



//How to convert kilometerToMeter start
function kilometerToMeter(kilometer){
    if (kilometer < 0) {
      return "Kilometer is not valid, please enter a correct number on next time";
    } else if (kilometer >= 0) {
      var exactMeter = kilometer * 1000;
      return exactMeter;
    } else {
      return "!Please enter a correct number!";
    }
}
//How to convert kilometerToMeter end




//budgetName problem solving start
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
      return "Price is not correct valid, please enter a correct number on next time";
    } else if (watch >= 0 || phone >= 0 || laptop >= 0) {
      var watchTotalPrice = watch * 50;
      var phoneTotalPrice = phone * 100;
      var laptopTotalPrice = laptop * 500;
      var totalAllPrice = watchTotalPrice + phoneTotalPrice + laptopTotalPrice;
      return totalAllPrice;
    }
     else {
      return "Price is not valid, please enter a correct number on next time";
    }
}
//budgetName problem solving end




// hotelCost problem solving start
function hotelCost(day){
    var cost = 0;
    if(day <= 10){
        cost = day * 100;
    }
    else if(day <= 20){
        var firstTenDay = 10 * 100;
        var remainingDay = day - 10;
        var SecondTenDay = remainingDay * 80;
        cost = firstTenDay + SecondTenDay;
    }
    else{
        var firstTenDay = 10 * 100;
        var secondTenDay = 10 * 80;
        var remaining = day - 20;
        var othersDay = remaining * 50;
        cost = firstTenDay + secondTenDay + othersDay;
    }
    return cost;
}
// // hotelCost problem solving end




//megaFriend problem solving start
function megaFriend(largestFriendName) {
    var largestName = largestFriendName[0];
    for (var i = 0; i < largestFriendName.length; i++) {
        var friendName = largestFriendName[i];
        if (friendName > largestName) {
            largestName = friendName;
        }
    }
    return largestName;
}
//megaFriend problem solving end