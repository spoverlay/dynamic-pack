import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	  ],
  theme: {
  	extend: {
		colors: {
			// Основные цвета
			transparent: 'transparent',
			background: '#15131a',
			secondary: '#23212b',
	  
			// Общие цвета
			black: '#0D0F11',
			red: '#F33131',
			green: '#10CF46',
			yellow: '#FFC01F',
			blue: '#2673EE',
			white: '#F0F6FF',
			purple: '#523480',
			secondpurple: '#8269B1',
	  
			// цвета сайтов
			spoverlay: '#2673ee',
			spemotes: '#73d14d',
			gallery: '#10c443',
			pawville: '#c195bd',
			spilya: '#00c4d5',
			dynamicpack: '#f21332',
		  },
  	}
  },
};
export default config;
