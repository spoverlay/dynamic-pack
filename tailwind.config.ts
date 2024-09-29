import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			transparent: 'transparent',
  			colorBackground: '#0D0F11',
  			colorBackgroundSecondary: '#1B1D21',
  			colorMenu: '#303036',
  			colorBackgroundInput: '#282C30',
  			colorBorderInput: '#26282B',
  			colorTextPrimary: '#F0F6FF',
  			accentGreen: '#10CF46',
  			accentYellow: '#FFC01F',
  			accentBlue: '#2673EE',
  			accentRed: '#F33131',
  			colorMenuHover: '#3D3D46',
  			colorTextPrimaryHover: '#C8CCD3',
  			accentGreenHover: '#239544',
  			accentYellowHover: '#DAA41A',
  			accentBlueHover: '#1E5EC5',
  			accentRedHover: '#BF2B2B',
  			black: '#0D0F11',
  			red: '#F33131',
  			green: '#10CF46',
  			yellow: '#FFC01F',
  			blue: '#2673EE',
  			white: '#F0F6FF',
  			redhover: '#BF2B2B',
  			greenhover: '#239544',
  			yellowhover: '#DAA41A',
  			bluehover: '#1E5EC5',
  			whitehover: '#C8CCD3',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
