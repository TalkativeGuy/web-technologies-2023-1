Vue.component("directory-item", {
	data: function() {
		return {
			childrenShown: false
		}
	},
	props: [ 'data' ],
	template: `
		<div class="list-item" :class="childrenShown ? 'list-item_open' : ''">
			<div class="list-item__inner" @click="childrenShown = !childrenShown && data.hasChildren">
				<img class="list-item__arrow" :class="!data.hasChildren ? 'list-item__arrow_invisible' : ''" src="img/chevron-down.png" alt="chevron-down">
				<img class="list-item__folder" src="img/folder.png" alt="folder">
				<span>{{ data.name }}</span>
			</div>
			<div class="list-item__items" v-show="childrenShown">
				<directory-item v-for="item in data.items" :data="item"></directory-item>
			</div>
		</div>
	`
})

var app = new Vue({
	el: '#app',
	data: {
	  	data: {
			name: 'Каталог товаров',
			hasChildren: true,
			items: [
				{
					name: 'Мойки',
					hasChildren: true,
					items: [
						{
							name: 'Ulgran1',
							hasChildren: true,
							items: [
								{
									name: 'SMT1',
									hasChildren: false,
									items: []
								},
								{
									name: 'SMT2',
									hasChildren: false,
									items: []
								}
							]
						},
						{
							name: 'Ulgran2',
							hasChildren: true,
							items: [
								{
									name: 'SMT3',
									hasChildren: false,
									items: []
								},
								{
									name: 'SMT4',
									hasChildren: false,
									items: []
								}
							]
						}
					]
				},
				{
					name: 'Фильтры',
					hasChildren: true,
					items: [
						{
							name: 'Ulgran3',
							hasChildren: true,
							items: [
								{
									name: 'SMT5',
									hasChildren: false,
									items: []
								},
								{
									name: 'SMT6',
									hasChildren: false,
									items: []
								}
							]
						}
					]
				}
			]
		}
	}
})