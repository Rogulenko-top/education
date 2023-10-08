const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	if (arr.length !== 0) {
		let str = `Доступные валюты: `;
		arr.forEach(function(item) {
			if(item !== missingCurr){
				str += `\n${item}`;
			}
		})

		console.log(str);
	} else {
		console.log('Нет доступных валют');
	}
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');