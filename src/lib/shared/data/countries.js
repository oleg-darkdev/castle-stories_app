const countries = [
	{
		region: 'Eastern Europe',
		desc: [
			`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],

		href: '/',
		castles: 3880,
		scenarios: 0,
		id: 0,

		subregions: [
			{
				name: 'Czech Republic',
				notableAreas: [],
				castlesAmount: 2000
			},
			{
				name: 'Poland',
				notableAreas: [],
				castlesAmount: 450
			},
			{
				name: 'Hungary',
				notableAreas: [],
				castlesAmount: 750
			},
			{
				name: 'Slovakia',
				notableAreas: [],
				castlesAmount: 100
			},
			{
				name: 'Romania',
				notableAreas: [],
				castlesAmount: 300
			},
			{
				name: 'Slovenia',
				notableAreas: [],
				castlesAmount: 100
			},

			{
				name: 'Bulgaria',
				notableAreas: [],
				castlesAmount: 50
			},

			{
				name: 'Ukraine',
				notableAreas: [],
				castlesAmount: 1000
			},
			{
				name: 'Belarus',
				notableAreas: [],
				castlesAmount: 50
			},
			{
				name: 'Serbia',
				notableAreas: [],
				castlesAmount: 50
			}
		]
	},
	{
		region: 'Western Europe',
		desc: [
			`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],
		href: '/',
		castles: 40000,
		scenarios: 0,
		id: 0,
		subregions: [
			{
				name: 'Britain',
				notableAreas: [],
				castlesAmount: 4000
			},
			{
				name: 'France',
				notableAreas: [],
				castlesAmount: 12000
			},
			{
				name: 'Germany',
				notableAreas: [],
				castlesAmount: 20000
			},

			{
				name: 'Austria',
				notableAreas: [],
				castlesAmount: 2000
			},
			{
				name: 'Switzerland',
				notableAreas: [],
				castlesAmount: 1000
			},
			{
				name: 'Belgium',
				notableAreas: [],
				castlesAmount: 300
			},
			{
				name: 'Netherlands',
				notableAreas: [],
				castlesAmount: 200
			}
		]
	},
	// {
	// 	region: 'Central Europe',
	// 	desc: [
	// 		`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
	// 	],

	// 	href: '/',
	// 	castles: ,
	// 	scenarios: 0,
	// 	id: 0,
	// 	subregions: [
	// 		{
	// 			name: 'Czechia',
	// 			notableAreas: [], castlesAmount: 0,
	// 		},
	// 		{
	// 			name: 'Austria',
	// 			notableAreas: [], castlesAmount: 0,
	// 		},
	// 		{
	// 			name: 'Poland',
	// 			notableAreas: [], castlesAmount: 0,
	// 		}
	// 	]
	// },
	{
		region: 'Southern Europe',
		desc: [
			`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],

		href: '/',
		castles: 3000,
		scenarios: 0,
		id: 0,

		subregions: [
			{
				name: 'Spain',
				notableAreas: [],
				castlesAmount: 2500
			},
			{
				name: 'Italy',
				notableAreas: [],
				castlesAmount: 1000
			},
			{
				name: 'Portugal',
				notableAreas: [],
				castlesAmount: 500
			}
		]
	},

	{
		region: 'Northern Europe',
		desc: [
			`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],

		href: '/',
		castles: 2000,
		scenarios: 0,
		id: 0,

		subregions: [
			{
				name: 'Scandinavia',
				notableAreas: [],
				castlesAmount: 0
			},
			{
				name: 'Baltic States',
				notableAreas: [],
				castlesAmount: 0
			}
		]
	},
	{
		region: 'Middle East',
		desc: [
			`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],

		href: '/',
		castles: 2000,
		scenarios: 0,
		id: 0,

		subregions: [
			{
				name: 'Levant',
				notableAreas: [],
				castlesAmount: 0
			},
			{
				name: 'Mesopotamia',
				notableAreas: [],
				castlesAmount: 0
			}
		]
	},
	{
		region: 'South Asia',
		href: '/',
		castles: 1500,
		scenarios: 0,
		id: 0,
		desc: [
			`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],

		subregions: [
			{
				name: 'Indian Subcontinent',
				notableAreas: [],
				castlesAmount: 0
			}
		]
	},
	{
		region: 'East Asia',
		subregions: [
			{
				name: 'China',
				notableAreas: [],
				castlesAmount: 0
			}
		]
	},
	{
		region: 'North America',
		href: '/',
		castles: 950,
		scenarios: 0,
		id: 0,
		desc: [
			`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],

		subregions: [
			{
				name: 'Northeastern USA',
				notableAreas: [],
				castlesAmount: 0
			},
			{
				name: 'Canada',
				notableAreas: [],
				castlesAmount: 0
			}
		]
	},
	{
		region: 'Africa',
		href: '/',
		castles: 862,
		scenarios: 0,
		id: 0,
		desc: [
			`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],

		subregions: [
			{
				name: 'North Africa',
				notableAreas: [],
				castlesAmount: 0
			}
		]
	},
	{
		region: 'Latin America',
		href: '/',
		castles: 375,
		scenarios: 0,
		id: 0,
		desc: [
			`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],

		subregions: [
			{
				name: 'Caribbean',
				notableAreas: [],
				castlesAmount: 0
			}
		]
	},
	{
		region: 'Russia',
		desc: [
			`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],

		href: '/',
		castles: 3880,
		scenarios: 0,
		id: 0,

		subregions: [
			{
				name: 'Russia',
				notableAreas: [],
				castlesAmount: 2000
			}
		]
	}
];

export default countries;
