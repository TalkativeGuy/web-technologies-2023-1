// по-хорошему, кнш, это в vuex store, но неохота было париться (хотя, кнш чё там париться)

import { Addition, Pizza } from "./types";

export const availablePizzas : Array<Pizza> = [
	{
		id: 'mar',
		name: "Маргарита",
		price: 500,
		kcal: 300,
		img: '/img/pizza-margarita.png',
	},
	{
		id: 'pep',
		name: "Пепперони",
		price: 800,
		kcal: 400,
		img: '/img/pizza-pepperoni.png',
	},
	{
		id: 'bav',
		name: "Баварская",
		price: 700,
		kcal: 450,
		img: '/img/pizza-bavarian.png',
	},
];

export const availableAdditions : Array<Addition> = [
	{
		id: "1",
		name: "Cливочная моцарелла",
		pricing: {
			small: 50,
			big: 100,
		},
		kcal: {
			small: 20,
			big: 20
		}
	},
	{
		id: "2",
		name: "Cырный борт",
		 pricing: {
			small: 150,
			big: 300,
		},
		kcal: {
			small: 50,
			big: 50
		}
	},
	{
		id: "3",
		name: "Чедер и пармезан",
		pricing: {
			small: 150,
			big: 300,
		},
		kcal: {
			small: 50,
			big: 50
		}
	},
];