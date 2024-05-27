$(document).ready(function () {
	$('#contactForm').submit(function (event) {
		event.preventDefault();

		if ($(this).valid()) {
			alert('Form submission successful!');
			$(this)[0].reset();
		}
	});

	$('#contactForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			phone: {
				required: true,
				minlength: 10,
				digits: true
			},
			email: {
				required: true,
				email: true
			},
			text: {
				required: true,
				minlength: 10
			}
		},
		messages: {
			name: {
				required: "Please enter your name",
				minlength: "Name must consist of at least 2 characters"
			},
			phone: {
				required: "Please enter your phone number",
				minlength: "Phone number must consist of at least 10 digits",
				digits: "Please enter only digits"
			},
			email: {
				required: "Please enter your email address",
				email: "Please enter a valid email address"
			},
			text: {
				required: "Please enter your comment",
				minlength: "Comment must consist of at least 10 characters"
			}
		},
		errorElement: 'div',
		errorPlacement: function (error, element) {
			var placement = $(element).data('error');
			if (placement) {
				$(placement).append(error)
			} else {
				error.insertAfter(element);
			}
		}
	});
});

$(document).ready(function () {
	$("#registerForm").validate({
		rules: {
			fullName: {
				required: true,
				minlength: 3
			},
			username: {
				required: true,
				minlength: 5
			},
			email: {
				required: true,
				email: true
			},
			phoneNumber: {
				required: true,
				minlength: 10
			},
			password: {
				required: true,
				minlength: 8
			},
			confirmPassword: {
				required: true,
				equalTo: "#password"
			},
			country: "required",
			birthday: "required",

		},
		messages: {
			fullName: {
				required: "Please enter your full name",
				minlength: "Full name must be at least 3 characters"
			},
			username: {
				required: "Please enter a username",
				minlength: "Username must be at least 5 characters"
			},
			email: {
				required: "Please enter your email address",
				email: "Please enter a valid email address"
			},
			phoneNumber: {
				required: "Please enter your phone number",
				minlength: "Phone number must be at least 10 characters"
			},
			password: {
				required: "Please enter a password",
				minlength: "Password must be at least 8 characters"
			},
			confirmPassword: {
				required: "Please confirm your password",
				equalTo: "Passwords do not match"
			},
			country: "Please enter your country",
			birthday: "Please enter your birthday",


		},
		submitHandler: function (form) {
			alert("Form submitted successfully!");
			form.submit();
		}
	});
});


$(function () {
	$("#birthday").datepicker();

	let countries = [
		"Afghanistan",
		"Albania",
		"Algeria",
		"Andorra",
		"Angola",
		"Antigua and Barbuda",
		"Argentina",
		"Armenia",
		"Australia",
		"Austria",
		"Azerbaijan",
		"Bahamas",
		"Bahrain",
		"Bangladesh",
		"Barbados",
		"Belarus",
		"Belgium",
		"Belize",
		"Benin",
		"Bhutan",
		"Bolivia",
		"Bosnia and Herzegovina",
		"Botswana",
		"Brazil",
		"Brunei",
		"Bulgaria",
		"Burkina Faso",
		"Burundi",
		"Cabo Verde",
		"Cambodia",
		"Cameroon",
		"Canada",
		"Central African Republic",
		"Chad",
		"Chile",
		"China",
		"Colombia",
		"Comoros",
		"Congo",
		"Costa Rica",
		"Croatia",
		"Cuba",
		"Cyprus",
		"Czech Republic",
		"Denmark",
		"Djibouti",
		"Dominica",
		"Dominican Republic",
		"East Timor",
		"Ecuador",
		"Egypt",
		"El Salvador",
		"Equatorial Guinea",
		"Eritrea",
		"Estonia",
		"Eswatini",
		"Ethiopia",
		"Fiji",
		"Finland",
		"France",
		"Gabon",
		"Gambia",
		"Georgia",
		"Germany",
		"Ghana",
		"Greece",
		"Grenada",
		"Guatemala",
		"Guinea",
		"Guinea-Bissau",
		"Guyana",
		"Haiti",
		"Honduras",
		"Hungary",
		"Iceland",
		"India",
		"Indonesia",
		"Iran",
		"Iraq",
		"Ireland",
		"Israel",
		"Italy",
		"Ivory Coast",
		"Jamaica",
		"Japan",
		"Jordan",
		"Kazakhstan",
		"Kenya",
		"Kiribati",
		"Kosovo",
		"Kuwait",
		"Kyrgyzstan",
		"Laos",
		"Latvia",
		"Lebanon",
		"Lesotho",
		"Liberia",
		"Libya",
		"Liechtenstein",
		"Lithuania",
		"Luxembourg",
		"Madagascar",
		"Malawi",
		"Malaysia",
		"Maldives",
		"Mali",
		"Malta",
		"Marshall Islands",
		"Mauritania",
		"Mauritius",
		"Mexico",
		"Micronesia",
		"Moldova",
		"Monaco",
		"Mongolia",
		"Montenegro",
		"Morocco",
		"Mozambique",
		"Myanmar",
		"Namibia",
		"Nauru",
		"Nepal",
		"Netherlands",
		"New Zealand",
		"Nicaragua",
		"Niger",
		"Nigeria",
		"North Korea",
		"North Macedonia",
		"Norway",
		"Oman",
		"Pakistan",
		"Palau",
		"Palestine",
		"Panama",
		"Papua New Guinea",
		"Paraguay",
		"Peru",
		"Philippines",
		"Poland",
		"Portugal",
		"Qatar",
		"Romania",
		"Russia",
		"Rwanda",
		"Saint Kitts and Nevis",
		"Saint Lucia",
		"Saint Vincent and the Grenadines",
		"Samoa",
		"San Marino",
		"Sao Tome and Principe",
		"Saudi Arabia",
		"Senegal",
		"Serbia",
		"Seychelles",
		"Sierra Leone",
		"Singapore",
		"Slovakia",
		"Slovenia",
		"Solomon Islands",
		"Somalia",
		"South Africa",
		"South Korea",
		"South Sudan",
		"Spain",
		"Sri Lanka",
		"Sudan",
		"Suriname",
		"Sweden",
		"Switzerland",
		"Syria",
		"Taiwan",
		"Tajikistan",
		"Tanzania",
		"Thailand",
		"Togo",
		"Tonga",
		"Trinidad and Tobago",
		"Tunisia",
		"Turkey",
		"Turkmenistan",
		"Tuvalu",
		"Uganda",
		"Ukraine",
		"United Arab Emirates",
		"United Kingdom",
		"United States",
		"Uruguay",
		"Uzbekistan",
		"Vanuatu",
		"Vatican City",
		"Venezuela",
		"Vietnam",
		"Yemen",
		"Zambia",
		"Zimbabwe"
	];

	$("#country").autocomplete({
		source: countries
	});
});

$(document).ready(function () {
	$('#phoneNumber').mask('(000) 000-0000');
});

$(document).ready(function () {
	$('#phone').mask('(000) 000-0000');
});


$(document).ready(function () {
	$('#birthday').mask('00/00/0000');
});

$(function () {
	$('.chosen-select').chosen({}).change(function (obj, result) {

	});
});
