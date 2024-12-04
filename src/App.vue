<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/shared/NavBar.vue";
import Footer from "./components/shared/Footer.vue";
</script>

<template>
	<NavBar></NavBar>
	<h1>On est dans App.vue</h1>
	<Footer></Footer>
</template>

<style scoped></style>

<template>
	<div>
		<router-view class="min-vh-100"></router-view>
		<a href="https://vite.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
