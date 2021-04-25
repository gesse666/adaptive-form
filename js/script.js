import Choices from 'choices.js';

// const defaultSelect = () => {
// 	const element = document.querySelector('.dropdown');
// 	const choices = new Choices(element, {
// 		searchEnabled: false,
// 		placeholderValue: 'ne',
// 	});
// }

// defaultSelect ();

const multiDefault = () => {
	const elements = document.querySelectorAll('.multi-default');
	elements.forEach(el => {
		const choices = new Choices(el, {
			searchEnabled: false,
			position: 'bottom',	
			// noResultsText: 'Ничего не найдено'
		});
	});
	
}

multiDefault();