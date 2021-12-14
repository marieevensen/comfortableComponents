<template>
	<main class="home-contact-form">
		<h1 class="home-contact-form__title">Sign up for the Weekly Newsletter</h1>

		<input class="home-contact-form__input" type="name" placeholder="Name" v-model="form.name"/>
			
		<input class="home-contact-form__input" type="email" placeholder="E-mail" v-model="form.email"/>
			
		<input class="home-contact-form__input" type="dateOfBirth" placeholder="Date of birth (dd/mm/yy)" v-model="form.dateOfBirth"/>
			
		<input class="home-contact-form__input" type="country" placeholder="Country" v-model="form.country"/>
			
		<input class="home-contact-form__input" type="city" placeholder="City" v-model="form.city"/>
			
		<input class="home-contact-form__input" type="zipCode" placeholder="Zip Code" v-model="form.zipCode"/>
			
		<input class="home-contact-form__input" type="street" placeholder="Street" v-model="form.street"/>
			
		<input class="home-contact-form__input" type="houseNumber" placeholder="House Number" v-model="form.houseNumber"/>			

		<button class="home-contact-form__button" @click="submit_form" value="Reset" type="reset">
			Submit
		</button>
	</main>
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
	},

	methods: {
		submit_form() {
		alert(`Welcome to our newsletter, ${this.form.name}!`);
			},
		},
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
		font-size: 0.7em;
	}
</style>