export interface Pizza {
	id: string,
	name: string,
	price: number,
	kcal: number,
	img: string,
}

export interface Addition {
	id: string,
	name: string,
	pricing: { [key in Size]: number },
	kcal: { [key in Size]: number },
}

export type Size = "small"|"big";