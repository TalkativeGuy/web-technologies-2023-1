<template>
<div class="pizza-card">
	<div class="pizza-card-inner">
		<img :src="pizza.img" alt="" class="pizza-card__img">
		<div class="pizza-card__name">{{ pizza.name }}</div>
		<div class="pizza-card__price">{{ pizza.price + (pickedSize == 'small' ? 100 : 200) }} р</div>
	</div>
</div>
</template>
	
	
<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Pizza, Size } from '../types';

export default defineComponent({
	props: {
		pizza: {
			type: Object as PropType<Pizza>,
			required: true,
		},
		pickedSize: {
			type: String as PropType<Size>,
			required: true,
		}
	},
	data() {
		return {
		}
	},
	computed: {
	},
	mounted() {
	},
	methods: {
	},
})
</script>
	
	
<style lang="scss" scoped>
.pizza-card {
	background: #fff;
	border-radius: 10px;
	box-shadow: 0 0 5px 1px #0000000a;
	cursor: pointer;
	user-select: none;
}

.pizza-card-inner {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: .75rem;
	.pizza-card__img {
		width: 100%;
		pointer-events: none;
	}
	.pizza-card__name {
		font-weight: 500;
	}
	.pizza-card__price {
		font-weight: 200;
	}
}
</style>