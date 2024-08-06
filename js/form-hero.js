const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form');

validation
	.addField('.input-name', [
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
			errorMessage: 'Введите имя!'
		}
	])
	
	.addField('.input-tel', [
		{
			rule: 'required',
			value: true,
			errorMessage: 'Телефон обязателен',
		},
		{
			rule: 'function',
			validator: function () {
				const phone = telSelector.inputmask.unmaskedvalue();
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