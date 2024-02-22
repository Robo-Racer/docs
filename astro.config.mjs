import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RoboRacer',
			social: {
				github: 'https://github.com/Robo-Racer',
			},
			sidebar: [
				{
					label: 'ESP32',
					items: [
						{ label: 'User Interface', link: '/esp32/ui' },
					],
				},
				{
					label: 'Portenta H7',
					items: []
				},
			],
		}),
	],
});
