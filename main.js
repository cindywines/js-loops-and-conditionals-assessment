

function question0 (array) {
  //
  var arr = [ 5, 20, 11, 42, 2, 19 ]

for (i = 0; i < arr.length ; i++) {
    if (arr[i] % 2 === 0){
      console.log(arr[i])
    }
}

}

function question1 (array) {
    var arr = [2, 4, 8, 16]

    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2

        if (arr[i] >= 12) {
            console.log(arr[i])
        }
    }
}
// Write a for loop to iterate over every element in the following array:
// [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]
//
// Using a switch statement, do the following:
// - If the day is on a weekend, print "Yay, it's the weekend!"
// - If the day is Friday, print "Almost there..."
// - If the day is Monday, print "I hate Mondays more than Garfield."
// - Otherwise, print "Everybody's working for the weekend."

    function question2(days) {

    for (var i = 0; i < days.length; i++) {

        switch (days[i]) {
            case 'Sat':
                console.log('Yay, it\'s the weekend!')
                break;

            case 'Sun':
                console.log('Yay, it\'s the weekend!')
                break;

            case 'Fri':
                console.log('Almost there...')
                break;

            case 'Mon':
                console.log('I hate Mondays more than Garfield.')
                break;

            default:
                console.log('Everybody\'s working for the weekend.')

        }
    }
}

module.exports = { question0, question1, question2 }