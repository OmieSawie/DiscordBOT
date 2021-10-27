// const p = Promise((resolve, reject) => {
//     let a = 1+1 ;

// })

// const fetch = require('node-fetch');

// fetch('https://codeforces.com/api/contest.list?gym=true')
// 	.then((res) => res.json())
// 	.then(res => console.log(res));

// console.log(Date.now())

// var datetime = new Date();
// console.log(datetime);

// var moment = require('moment')
// time = 
// console.log(moment()) ;


var timeInMss = new Date()
timeInMss = timeInMss.toDateString()

        console.log(`\n Time diff: ${timeInMss}`)

		const trialTime = '2021-08-19T04:00:00.000Z'

		day = Number(trialTime.substr(8,2)) 
		month = Number(trialTime.substr(5,2))
		year = Number(trialTime.substr(0,4))

		// console.log(`${}`)