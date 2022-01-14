import slowInput from './slowInput';

export default async () => {
	await slowInput('#cardNumber', '4242424242424242');
	await $('#cardExpiry').setValue('1233');
	await $('#cardCvc').setValue('123');
	await $('#billingName').setValue('Test');
	await $('button[type="submit"]').click();
};
