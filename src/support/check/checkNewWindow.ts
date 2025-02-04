/**
 * Check if a new window or tab is opened
 * @param  {String}   _  The type of opened object (window or tab)
 * @param  {String}   falseCase Whether to check if a new window/tab was opened
 *                              or not
 */
export default async (_: unknown, falseCase: boolean) => {
	/**
	 * The handles of all open windows/tabs
	 * @type {Object}
	 */
	const windowHandles = await browser.getWindowHandles();

	if (falseCase) {
		expect(windowHandles).toHaveLength(
			1,
			// @ts-expect-error
			'A new window should not have been opened'
		);
	} else {
		expect(windowHandles).not.toHaveLength(
			1,
			// @ts-expect-error
			'A new window has been opened'
		);
	}
};
