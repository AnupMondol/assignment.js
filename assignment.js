// kilometer to meter

function kilometerToMeter (kilometer){

    var meter = kilometer * 1000;

    return meter;

}

var result = kilometerToMeter(5);
console.log(result);


// Budget Calculator

function budgetCalculator (watch, phone, laptop){

    var totalCost = 0;

    if (watch > 0){
        watchCost = watch * 50;
    }    
    if(phone > 0){
        phoneCost = phone * 100;

    }
    if(laptop > 0){
        laptopCost = laptop * 500;

    }

    totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
    
}



// Hotel Cost


function hotelCost (days){

    var totalCost = 0;

    if (days <= 10){
        totalCost = days * 100;
    }else if (days <= 20){
        var firstPart = 10 * 100;
        var remainingDays = days - 10;

        var secondPart = remainingDays * 80;
        totalCost = firstPart + secondPart;
    }else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;

        var remainingDays = days - 20;

        var thirdPart = remainingDays * 50;

        totalCost = firstPart + secondPart + thirdPart;
    }

    return totalCost;

}

// Mega friend

    

    function megaFriend(bigName){
        var result = '';

        for (var i = 0; i < bigName.length; i++){
            var currentItem = bigName[i];
            if(currentItem.length > result.length){
                result = bigName[i];
            }
        }
        return result;
    }