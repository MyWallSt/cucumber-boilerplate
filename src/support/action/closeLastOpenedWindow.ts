/**
 * Close the last opened window
 */
export default async () => {
	/**
	 * The current window handle
	 * @type {Object}
	 */
	const currentWindowHandle = await browser.getWindowHandle();
	/**
	 * The last opened window handle
	 * @type {Object}
	 */
	const lastWindowHandle = (await browser.getWindowHandles()).slice(-1)[0];

	if (currentWindowHandle === lastWindowHandle) {
		await browser.closeWindow();
	} else {
		await browser.switchToWindow(lastWindowHandle);
		await browser.closeWindow();
		await browser.switchToWindow(currentWindowHandle);
	}
};
