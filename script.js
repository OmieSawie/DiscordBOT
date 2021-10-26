// const p = Promise((resolve, reject) => {
//     let a = 1+1 ;

// })

const fetch = require('node-fetch');

fetch('https://codeforces.com/api/contest.list?gym=true')
	.then((res) => res.json())
	.then(res => console.log(res));