<template>
	<div class="card">
		<h1>TP Data Binding - Profile User</h1>
		<img :src="img" alt="" />
		<br />
		<p>{{ nom }}</p>
		<input class="card-text" type="text" :value="nom" />
		<p>{{ age }} ans</p>
		<p>Age + 10 = {{ age10() }} ans</p>
		<p>Nombre favoris : {{ nbFav() }}</p>
	</div>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount,ref } from 'vue'

const img = ref('https://media.gettyimages.com/id/458606053/fr/photo/mario-en-forme.jpg?s=612x612&w=0&k=20&c=NEPa47xcWoj59mo8GV1M6B15akG-bOEtgYN6hgLS9Rg=')
const nom = ref('Dr.Mario')
const age = ref(45)
const age10 = () =>{
  return age.value +10;
}
const nbFav = () =>{
  return Math.random()
}
</script>

<style scoped lang="css"></style>
