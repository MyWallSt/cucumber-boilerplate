import { Selector } from 'webdriverio';

export default async (selector: Selector, key: string) => {
	await $(selector).click();
	for (const char of key) {
		await browser.keys(char);
		await browser.pause(10);
	}
};
