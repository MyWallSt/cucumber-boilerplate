import checkIfElementExists from '../lib/checkIfElementExists';

export default async () => {
	await checkIfElementExists('#username', false, 1);
	await checkIfElementExists('#password', false, 1);
	await checkIfElementExists('input[name="agree"] + *', false, 1);
	await checkIfElementExists('button[type="submit"]', false, 1);

	await $('#username').setValue(`automation-random-${Math.floor(1e12 * Math.random())}@mwstesting.com`);
	await $('#password').setValue('rubicoin1234');
	await $('input[name="agree"] + *').click();
	await $('button[type="submit"]').click();
};
