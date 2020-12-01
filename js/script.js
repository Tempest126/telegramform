

function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();

function fontsStyle(params) {

	let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split('.');
					fontname = fontname[0];
					if (c_fontname != fontname) {
						fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
					}
					c_fontname = fontname;
				}
			}
		})
	}
}

function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

// (function ($) {
// 	$(".form").submit(function (event) {
// 		event.preventDefault();

// 		// Сохраняем в переменную form id текущей формы, на которой сработало событие submit
// 		let form = $('#' + $(this).attr('id'))[0];

// 		// Сохраняем в переменную класс с параграфом для вывода сообщений
// 		let message = $(this).find(".contact-form__message");

// 		let fd = new FormData(form);
// 		$.ajax({
// 			url: "php/telegramform.php",
// 			type: "POST",
// 			data: fd,
// 			processData: false,
// 			contentType: false,
// 			success: function success(res) {
// 				let respond = $.parseJSON(res);
// 				if (respond.err) {
// 					message.html(respond.err).css('color', '#d42121');
// 					setTimeout(() => {
// 						message.text('');
// 					}, 3000);
// 				} else if (respond.okSend) {
// 					message.html(respond.okSend).css('color', '#21d4bb');
// 					setTimeout(() => {
// 						message.text('');
// 					}, 3000);
// 				} else {
// 					alert('Error.');
// 				}
// 			},
// 		});
// 	});

// }(jQuery));


