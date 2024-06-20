// Monday added Rs. 1
// No. of Days from Tuesday to Sunday = 6.
// Second Monday she puts 1st Monday + 1;
// Third Monday she puts 2nd MOnday + 1;
// Tuesday to Sunday she puts 1 + previous day.

function totalSavings(n) {
    
    let weekNum = Math.floor((n - 1) / 7);
    
    let dayOfWeek = (n - 1) % 7;

    let totalSavings = 0;

    
    for (let week = 0; week < weekNum; week++) {
        
        let startOfWeek = 1 + week;
        for (let day = 0; day < 7; day++) {
            totalSavings += startOfWeek + day;
        }
    }

    
    let startOfWeek = 1 + weekNum;
    for (let day = 0; day <= dayOfWeek; day++) {
        totalSavings += startOfWeek + day;
    }

    return totalSavings;
}


let n = 20;
for( let i = 1 ; i <= n ; i++){
    console.log(totalSavings(i));
}
  