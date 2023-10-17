const btn = document.querySelectorAll('button'),
	  overlay = document.querySelector('.overlay');

// btn.forEach(item => {
// 	item.onclick = function() {
// 		alert('Hi');
// 	};
// });

btn.forEach(item => {
	item.addEventListener('click', (event) => {
		
		if(event.target.tagName == 'BUTTON' ){
			event.target.setAttribute('lang', 'kz');
			event.target.classList.add('add');
		}
		console.log(event.target);
	}, {once: true});

	item.addEventListener('keypress', (event) => {
		console.log(event.target);
	});
});

btn.onclick = function() {
	alert('Click');
};

btn.onclick = function() {
	alert('Second click');
};

let i = 0;
const dlt = (e) => {
	// e.target.remove();
	console.log(e.currentTarget);
	console.log(e.type);
	++i;
	if (i == 1) {
		btn.removeEventListener('click', dlt);
	}
}

btn.addEventListener('click', dlt
	// (event) => {
	// console.log(event.target);
	// event.target.remove();
	// console.log('Hover');}
	);
overlay.addEventListener('click', dlt);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
	event.preventDefault();

	console.log(event.target);
});
