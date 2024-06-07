<template>
<div class="cart">
	<div class="cart__pizza-picker">
		<h2>Пицца</h2>
		<div class="cart__pizza-picker__list">
			<PizzaCard
				v-for="pizza in availablePizzas"
				:pizza="pizza"
				:pickedSize="pickedSize"
				class="cart__pizza-picker__list__item"
				:class="pickedPizza?.id == pizza.id ? 'cart__pizza-picker__list__item_picked' : ''"
				@click="pickedPizza = pizza"
			></PizzaCard>
		</div>
	</div>
	<aside class="cart-aside">
		<section class="cart-aside-section">
			<h2>Размер</h2>
			<div class="cart-aside__size-picker">
				<input type="radio" v-model="pickedSize" id="cart-aside__size-picker__radio_small" hidden :value="'small'">
				<input type="radio" v-model="pickedSize" id="cart-aside__size-picker__radio_big" hidden :value="'big'">
				<label for="cart-aside__size-picker__radio_small" class="cart-aside__size-picker__item" :class="sizePickerItemClass('small')">Маленькая</label>
				<label for="cart-aside__size-picker__radio_big" class="cart-aside__size-picker__item" :class="sizePickerItemClass('big')">Большая</label>
			</div>
		</section>
		<section class="cart-aside-section">
			<h2>Добавки</h2>
			<!-- На картинки забил... -->
			<div class="cart-aside__additions-list">
				<div class="cart-aside__additions-list__item"
					v-for="addition in availableAdditions"
					:class="additionsPickerItemClass(addition)"
					@click="alterAddition(addition)"
				>
					<div class="cart-aside__additions-list__item__name">{{ addition.name }}</div>
					<div class="cart-aside__additions-list__item__price">{{ addition.pricing[pickedSize] }}р</div>
				</div>
			</div>
		</section>
		<section class="cart-aside-section" v-if="pickedPizza">
			<h2>Итого</h2>
			<div class="cart-aside__results-list">
				<div class="cart-aside__results-list__item">
					<div class="cart-aside__results-list__item__key">Цена:</div>
					<div class="cart-aside__results-list__item__value">{{ totalPrice }}</div>
				</div>
				<div class="cart-aside__results-list__item">
					<div class="cart-aside__results-list__item__key">Килокалорий:</div>
					<div class="cart-aside__results-list__item__value">{{ totalKcal }}</div>
				</div>
			</div>
			<button>В корзину</button>
		</section>
	</aside>
</div>
</template>
	
	
<script lang="ts">
import { defineComponent } from 'vue';
import { Addition, Pizza, Size } from './types';
import { availableAdditions, availablePizzas } from './availableProducts';
import PizzaCard from './components/PizzaCard.vue';

export default defineComponent({
	components: { PizzaCard },
	data() {
		return {
			availablePizzas,
			availableAdditions,
			
			pickedSize: "small" as Size,
			pickedPizza: undefined as Pizza|undefined,
			pickedAdditions: [] as Array<Addition>,
		}
	},
	computed: {
		totalPrice() : number {
			if (!this.pickedPizza) return 0;
			return this.pickedPizza.price + (this.pickedSize == 'small' ? 100 : 200) + 
				this.pickedAdditions.reduce((acc, add) => acc+add.pricing[this.pickedSize], 0);
		},
		totalKcal() : number {
			if (!this.pickedPizza) return 0;
			return this.pickedPizza.kcal + this.pickedAdditions.reduce((acc, add) => acc+add.kcal[this.pickedSize], 0);
		},
	},
	mounted() {
	},
	methods: {
		sizePickerItemClass(size:Size) {
			return size == this.pickedSize ? 'cart-aside__size-picker__item_picked' : '';
		},
		additionsPickerItemClass(addition:Addition) {
			return this.pickedAdditions.find(a => a.id == addition.id) ? 'cart-aside__additions-list__item_picked' : '';
		},
		alterAddition(addition:Addition) {
			let index = this.pickedAdditions.findIndex(a => a.id == addition.id);
			if (index != -1) this.pickedAdditions.splice(index, 1)
			else this.pickedAdditions.push(addition);
		}
	},
})
</script>
	
	
<style lang="scss" scoped>
.cart {
	width: 85%;
	display: flex;
	justify-content: space-between;
	padding-top: 2rem;
}

h2 {
	font-weight: 500;
	margin: 0;
	margin-bottom: 1rem;
}

.cart__pizza-picker {
	width: 60%;
	.cart__pizza-picker__list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 1rem;
		.cart__pizza-picker__list__item {
			border: 2px solid #fff;
			&.cart__pizza-picker__list__item_picked {
				border-color: #ffa826;
			}
		}
	}
}

.cart-aside {
	width: 35%;
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	.cart-aside__size-picker {
		display: flex;
		justify-content: space-between;
		width: 100%;
		.cart-aside__size-picker__item {
			width: 48%;
			padding: .5rem;
			background: #fff;
			border: 2px solid #d7d7d7;
			border-radius: 10px;
			cursor: pointer;
			text-align: center;

			&_picked {
				border-color: #ffa826;
			}
		}
	}

	.cart-aside__additions-list {
		display: flex;
		flex-direction: column;
		row-gap: .75rem;
		.cart-aside__additions-list__item {
			display: flex;
			justify-content: start;
			border: 2px solid #fff;
			padding: 0.75rem 1.25rem;
			background: #fff;
			border-radius: 10px;
			cursor: pointer;

			&_picked {
				border-color: #ffa826;
			}

			.cart-aside__additions-list__item__name {
				margin-right: 1rem;
			}
			.cart-aside__additions-list__item__price {
				font-weight: 300;
			}
		}
	}
	
	.cart-aside__results-list {
		display: flex;
		flex-direction: column;
		row-gap: .5rem;
		margin-bottom: 1rem;
		.cart-aside__results-list__item {
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #ccc;
			padding-bottom: .5rem;
			.cart-aside__results-list__item__value {
				color: #444;
			}
		}
	}
}
</style>