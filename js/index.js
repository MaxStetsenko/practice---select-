const selects = () => {
	const selectsTarget = document.querySelectorAll('.select');
	const closeAreaReg = /select__\w+/;

	for (const select of selectsTarget) {
		select.addEventListener('click', (event) => {
			select.classList.toggle('active');
			const selectItem = event.target.classList.contains('select__item');
			if (selectItem) {
				const selectValue = event.target.textContent;
				select.parentElement.querySelector('.select__header').textContent = selectValue
			}
		});
	}

	// document.addEventListener('click', (event) => {
	//   for(const select of selectsTarget) {
	//     if(!closeAreaReg.test(event.target.className)) {
	//       select.classList.remove('active');
	//     }
	//   }
	// })
	document.addEventListener('click', (event) => {
		for (const select of selectsTarget) {
			if (!(event.target.className.includes('select'))) {
				select.classList.remove('active');
			}
		}
	})
};

selects();