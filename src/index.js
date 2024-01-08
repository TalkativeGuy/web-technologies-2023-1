const { createApp } = Vue

createApp({
	data() {
		return {
			cycleTechnologies: {
				web: [ "PHP", "Javascript", "Node.JS", "Web Socket", "Socket.io", "Vue.js", "Nuxt", "MySQL", "Laravel", "GO lang", "django", "Python" ],
				mobile : [ "Swift", "Kotlin", "Alamofire", "Firebase", "CoreData", "Room", "Realm", "Coroutine", "RxJava", "RxSwift", "Unit Test", "Navigation" ],
			},
			cycleCategoriesList: [ "iOS development", "Android development", "Web development", "UI/UX design", "Testing", "Launch", "IT consulting" ],
			industriesList: [
				{
					img: "narrative_active_outline_24.svg",
					name: "Social media",
				},
				{
					img: "ball_outline_24.svg",
					name: "Fitness and sport",
				},
				{
					img: "bank_outline_24.svg",
					name: "Bank",
				},
				{
					img: "employee_outline_24.svg",
					name: "Construction",
				},
				{
					img: "game_outline_24.svg",
					name: "Game projects",
				},
				{
					img: "education_outline_24.svg",
					name: "Education",
				},
				{
					img: "car_outline_24.svg",
					name: "Auto, transport",
				},
				{
					img: "health_outline_24.png",
					name: "Medicine, health",
				},
				{
					img: "bowl_sticks_outline_24.png",
					name: "Restaurants, food delivery",
				},
				{
					img: "market_outline_24.svg",
					name: "Marketplaces",
				},
				{
					img: "live_outline_24.svg",
					name: "AR technology",
				},
				{
					img: "video_outline_24.svg",
					name: "TV series",
				},
				{
					img: "work_outline_24.svg",
					name: "Startups",
				},
				{
					img: "magic_wand_outline_24.svg",
					name: "Religion",
				},
				{
					img: "video_circle_outline_24.svg",
					name: "Online cources",
				},
			],
			portfolioCompaniesList: [ 
				{
					name: "I-teka",
					areas: [ "Business analysis", "iOS", "Android", "QA", "UI/UX Design" ],
				},
				{
					name: "Dauletten",
					areas: [ "Business analysis", "iOS", "Android", "QA", "UI/UX Design" ],
				},
				{
					name: "Guru Bosch",
					areas: [ "Business analysis", "iOS", "Android", "QA", "UI/UX Design" ],
				},
				{
					name: "Santo",
					areas: [ "Business analysis", "iOS", "Android", "QA", "UI/UX Design" ],
				},
				{
					name: "Home Credit Bank",
					areas: [ "Business analysis", "iOS", "Android", "QA", "UI/UX Design" ],
				},
				{
					name: "BI Partners",
					areas: [ "Business analysis", "iOS", "Android", "QA", "UI/UX Design" ],
				},
				{
					name: "Europharma",
					areas: [ "Business analysis", "iOS", "Android", "QA", "UI/UX Design" ],
				},
			],
			portfolioCompanyPickedIndex: 0,
			faq: [
				{
					question: "What is the cost of a mobile application?",
					answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus facere minus, iste quod ad ab obcaecati mollitia dolores. Pariatur, recusandae accusamus laborum incidunt quam distinctio ipsam nulla alias nisi autem?"
				},
				{
					question: "Do you provide a guarantee for the mobile application?",
					answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus facere minus, iste quod ad ab obcaecati mollitia dolores. Pariatur, recusandae accusamus laborum incidunt quam distinctio ipsam nulla alias nisi autem?"
				},
				{
					question: "How long will development take?",
					answer: `
						Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.<br><br>
						Average development time from start to finished application:<br>
						Medium projects up to <b>3 months.</b><br>
						Large projects about <b>4-6 months.</b><br>
						To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.
					`,
				},
				{
					question: "I will not tell my idea, do you guarantee confidentiality?",
					answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus facere minus, iste quod ad ab obcaecati mollitia dolores. Pariatur, recusandae accusamus laborum incidunt quam distinctio ipsam nulla alias nisi autem?"
				},
			],
			footerInfoItems: [
				{
					name: "Contact nums",
					value: "+7 (778) 395 90 26",
					img: "src/assets/icons/footer/smartphone_outline_24.svg"
				},
				{
					name: "Post",
					value: "mail@mail.com",
					img: "src/assets/icons/footer/mail_outline_24.svg"
				},
				{
					name: "Address",
					value: "City city, steet st. 90",
					img: "src/assets/icons/footer/place_outline_24.svg"
				},
				{
					name: "Leave a request",
					value: "Leave a request",
					img: "src/assets/icons/footer/document_outline_24.svg"
				},
			],

			desktop: false,
		}
	},
	mounted() {
		this.desktop = window.innerWidth > 768;
		window.addEventListener("resize", () => {
			this.desktop = window.innerWidth > 768;
		});
	}
}).mount('#app');