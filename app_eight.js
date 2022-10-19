//Task
let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let count = 0;
let sum = 0;
let multiplicate = 1;
let anyway = arr[0];
let anywayMax = arr[0];
let countMin = 0;
let countPlusOdd = 0;
let countPlusEven = 0;
let sumPlusEven = 0;
let sumPlusOdd = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0) {
		count += 1;
		sum += arr[i];
		//console.log(arr[i]);
		multiplicate *= arr[i];
	} else {
		countMin += 1;
	}
	if (anyway > arr[i]) {
		anyway = arr[i];
	}
	if (anywayMax < arr[i]) {
		anywayMax = arr[i];
	}
	if (arr[i] > 0 && arr[i] % 2 !== 0) {
		countPlusOdd += 1;
		//console.log(arr[i]);
		sumPlusOdd += arr[i];
	}
	if (arr[i] > 0 && arr[i] % 2 === 0) {
		countPlusEven += 1;
		sumPlusEven += arr[i];
		//console.log(arr[i]);
	}

}
console.log(`Количество всех положительных элем. - ${count}`);
console.log(`Сумма всех положительных элем. - ${sum}`);
console.log('Произведение положительных элементов - ' + multiplicate);
console.log('Минимальный элемент массива - ' + anyway);
console.log('Минимальный элемент массива,порядковый номер - ' + arr.indexOf(anyway));
console.log('Максимальный элемент массива - ' + anywayMax);
console.log('Максимальный элемент массива,порядковый номер - ' + arr.indexOf(anywayMax));
console.log('Количество отрицательных элементов - ' + countMin);
console.log('Количество нечетных положительных элементов - ' + countPlusOdd);
console.log('Количество четных положительных элементов - ' + countPlusEven);
console.log('Сумма четных положительных элементов - ' + sumPlusEven);
console.log('Сумма нечетных положительных элементов - ' + sumPlusOdd);

let maximumNumber = arr[0];
let maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
	if (arr[i] > maximumNumber) {
		maximumNumber = arr[i];
		arr[maxIndex] = 0;
		maxIndex = i;
	} else {
		arr[i] = 0;
	}
}
console.log(arr);
