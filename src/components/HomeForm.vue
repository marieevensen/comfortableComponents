<template>
	<form class="home-contact-form">
		<h1 class="home-contact-form__title">Sign up for the Weekly Newsletter</h1>

			<input class="home-contact-form__input" type="text" placeholder="Name" v-model="form.name" value required />
			
			<input class="home-contact-form__input" type="email" placeholder="E-mail" v-model="form.email" value required/>
			
			<input class="home-contact-form__input" type="text" placeholder="Country" v-model="form.country" value required/>
			
			<input class="home-contact-form__input" type="text" placeholder="City" v-model="form.city" value required/>
			
			<input class="home-contact-form__input" type="number" placeholder="Zip Code" v-model="form.zipCode" value required/>
			
			<input class="home-contact-form__input" type="text" placeholder="Street" v-model="form.street" value required/>
			
			<input class="home-contact-form__input" type="number" placeholder="House Number" v-model="form.houseNumber" value required/>	
			
			<button class="home-contact-info__button">Submit</button>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: null,
					email: null,
					dateOfBirth: null,
					country: null,
					city: null,
					zipCode: null,
					street: null,
					houseNumber: null,
					area: null,
					message: null,
				},
			};
		}
	};
</script>

<style>
	.home-contact-form {
		padding: 10px;
		margin-top: 0;
		display: flex;
		flex-flow: column nowrap;
	}

	.home-contact-form__title {
		font-size: 0.8em;
	}

	.home-contact-form__input {
		margin: 2.5px;
		margin-top: 6px;
		font-size: 0.7em;
	}
</style>