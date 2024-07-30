/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			mdblue: {
				100: '#eaecee',
				200: '#caced5',
				300: '#aab0bc',
				400: '#6b758a',
				500: '#2D3750', // Base color
				600: '#283146',
				700: '#202939',
				800: '#181f2b',
				900: '#121726',
			},
			teal: {
				100: '#ccf5ff',
          		200: '#99eaff',
          		300: '#66dffb',
          		400: '#33d3f7',
          		500: '#05A9C7', // Base color
          		600: '#0597b3',
          		700: '#047a93',
          		800: '#035d73',
          		900: '#02455a',
			},
			sky: {
				100: '#e9f7fb',
				200: '#c8ecf6',
				300: '#a7e0f0',
				400: '#66c9e4',
				500: '#9FDDED', // Base color
				600: '#8fc7d5',
				700: '#77a5b0',
				800: '#5f838c',
				900: '#4d6b72',
			},
			peach: {
				100: '#fbf3f0',
				200: '#f5e2db',
				300: '#efd1c6',
				400: '#e4b09c',
				500: '#F4E5DE', // Base color
				600: '#d1c1b7',
				700: '#aca199',
				800: '#867f7a',
				900: '#6c6864',
			},
			gray: {
				100: '#F5F5F5',    // Brand White
				200: '#eaeaea',
				300: '#d5d5d5',
				400: '#a8a8a8',
				500: '#909090',
				600: '#787878',
				700: '#545859',   // Graphite
				800: '#414042',   // Gunmetal
				900: '#2b2b2b',
			},
			white: '#ffffff',
			black: '#000000',
			orange: {
				100: '#fbd8d6',
				200: '#f7b0ad',
				300: '#f38883',
				400: '#ef605a',
				500: '#F26F62', // Base color
				600: '#db5f58',
				700: '#b84f4a',
				800: '#94403b',
				900: '#78332f',
			},
			yellow: {
				100: '#fff5d1',
				200: '#ffec99',
				300: '#ffe462',
				400: '#ffdb2a',
				500: '#FFD700', // Base color
				600: '#e6c200',
				700: '#bfa200',
				800: '#998200',
				900: '#7d6a00',
			},
			purple: {
				100: '#ebe7f4',
				200: '#cec3e5',
				300: '#b19fd6',
				400: '#957bc7',
				500: '#8671B3', // Base color
				600: '#795fa1',
				700: '#634e84',
				800: '#4e3c68',
				900: '#3f3155',
			},
			red: {
				100: '#fbd9dc',
				200: '#f7b3ba',
				300: '#f28d97',
				400: '#ee6775',
				500: '#DC1D3E', // Base color
				600: '#c61937',
				700: '#a4152e',
				800: '#821124',
				900: '#6a0e1d',
			},
			green: {
				100: '#e9f7e9',
				200: '#c8eac8',
				300: '#a6dda6',
				400: '#84d084',
				500: '#70C169', // Base color
				600: '#65ae5f',
				700: '#558f4f',
				800: '#45713f',
				900: '#385c33',
			},
		},
		fontFamily: {
			sans: ['work-sans', 'sans-serif'],
		},
		fontSize: {
			sm: '.75rem',
			base: '1rem',
			lg: '1.5rem',
			xl: '2rem',
			'2xl': '3rem',
			'3xl': '4.5rem',
			'4xl': '5rem',
		},	
		},
		extend: {},
	}
	plugins: []
