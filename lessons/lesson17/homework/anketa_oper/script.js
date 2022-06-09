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

var gender = confirm('Ваш пол мужской:');
gender == true ? gender = ('мужской') : gender = ('женский');

var ageM
ageM = age
age <= 62 && gender == 'мужской' ? ageM = ('нет') : age > 62 && gender == 'мужской' ? ageM = ('да') : age <= 58 ? gender == 'женский' && age < 58 ? ageM = ('нет') : ageM = ('нет') : gender == 'женский' && age > 58 ? ageM = ('да') : ageM = ('да');

alert('Ваше ФИО: ' + firstName + ' ' + myName + ' ' + secondName + '\nВаш возраст в годах: ' + age + ' лет' + '\n' + 'Ваш возраст в днях: ' + ageDay + ' дней' + '\n' + 'Ваш возраст через 5 лет: ' + ageEar + ' лет' + '\n' + 'Ваш пол: ' + gender + ' ' + '\n' + 'Вы на пенсии: ' + ageM + ' ')
