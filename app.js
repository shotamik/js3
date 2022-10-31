const currentDay = new Date().getDay(); 

    switch (currentDay) {
        case 0:
            console.log(`sunday`);
            break;
        case 1:
            console.log(`monday`);
            break;
        case 2:
            console.log(`tuesday`);
            break;
        case 3:
            console.log(`wednesday`);
            break;
        case 4:
            console.log(`thursday`);
            break;
        case 5:
            console.log(`friday`);
            break;
        case 6:
            console.log(`saturday`);
            break;
        
        default:
            console.log(`default`);
            break;
    }


   

    for (let i = 0; i < 50; i++) {
        console.log(i);
        
    }



console.log(`while`);

	let l = 0;
	while (l < 150) {
		console.log(l);
		l++
	}

	console.log(`do while`);

	let k = 0;
	do {
		console.log(k);
		k++
	}while (k <  100);





	let i = 0;

	while (i < 100) {
		i++
		console.log(i);

		let mi = []

		console.log(mi);

		mi.push(i*=i)

		console.log(mi);

	}