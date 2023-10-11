const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    const { shops, height, moneyPer1m3, budget } = data;
	const initialValue = 0;
	let totalAreaStore = shops.reduce(function (accumulator, currentValue){
		let {width, length} = currentValue;
		return (accumulator + (width * length));
	}, initialValue); 

	let totalStoreVolume = totalAreaStore * height;
	let totalCost = totalStoreVolume * moneyPer1m3;


	if(totalCost <= budget) {
		console.log('Бюджета достаточно');
	} else {
		console.log('Бюджета недостаточно');
	}
}

isBudgetEnough(shoppingMallData);