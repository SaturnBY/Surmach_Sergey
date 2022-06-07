var firstName = prompt('Введите фамилию:')
var myName = prompt('Введите имя:')
var secondName = prompt('Введите отчество:')
var ageStr = prompt('Введите ваш возраст:');
while (true) {
	var age = parseInt(ageStr);
	if (!isNaN(age))
		break; // введено корректное число - выходим из цикла
	ageStr = prompt('Введите ваш возраст корректно:');
}
var ageDay = (age * 365);
var ageEar = (age + 5);
var gender = prompt('Введите пол (мужской или женский):'); {
	if (gender == 'мужской')
		gender = ('мужской');
	else
		gender = ('женский');
}
var ageM
ageM = age
if (age <= 62) {
	if (gender == 'мужской')
		ageM = ('нет');
	else
		ageM = ('нет');
}
else {
	if (gender == 'мужской')
		ageM = ('да');
	else
		ageM = ('да');
}
alert('Ваше ФИО: ' + firstName + ' ' + myName + ' ' + secondName + '\nВаш возраст в годах: ' + age + ' лет' + '\n' + 'Ваш возраст в днях: ' + ageDay + ' дней' + '\n' + 'Ваш возраст через 5 лет: ' + ageEar + ' лет' + '\n' + 'Ваш пол: ' + gender + ' ' + '\n' + 'Вы на пенсии: ' + ageM + ' ')