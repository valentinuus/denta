const formMap = document.querySelector('#form-map');
const telSelectorMap = document.querySelector('.input-tel-map');
const inputMaskMap = new Inputmask('+7 (999) 999-99-98');
inputMask.mask(telSelectorMap);

const validationMap = new JustValidate('.form-map');

validationMap
	.addField('.input-name-map', [
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Введите корректное имя'
		},
		{
			rule: 'maxLength',
			value: 30,
			errorMessage: 'Введите корректное имя'
		},
		{
			rule: 'required',
			value: true,
			errorMessage: 'Введите имя'
		}
	])
	
	.addField('.input-tel-map', [
		{
			rule: 'required',
			value: true,
			errorMessage: 'Телефон обязателен',
		},
		{
			rule: 'function',
			validator: function () {
				const phone = telSelectorMap.inputmask.unmaskedvalue();
				return phone.length === 10;
			},
			errorMessage: 'Введите корректный телефон',
		},
	]).onSuccess((event) => {
		console.log('Validation passes and form submitted', event);

		let formData = new FormData(event.target);

		console.log(...formData);

		let xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					alert("Ваше сообщение отправлено")
				}
			}
		}

		xhr.open('POST', 'mail.php', true);
		xhr.send(formData);

		event.target.reset();
	});