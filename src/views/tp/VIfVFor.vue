<template>
	<div class="container">
		<div class="m-3">
			<h2>La liste des courses</h2>
			<input v-model="nomProduit" type="text" class="form-control" />
			<button @click="ajouterProduit" class="btn btn-primary mt-3">
				Ajouter à votre Liste
			</button>
			<hr />

			<ul>
				<!-- avec la directive v-for on répète un template en fonction de data (généralement tableaux ou listes) -->
				<li
					:class="{
						hidden: isHide,
					}"
					v-for="(unProduit, index) in mesProduits"
					v-on:click="supprimerProduit(index)"
				>
					{{ index }}-{{ unProduit }}
				</li>
			</ul>
			<button class="button" v-on:click="hidde">Hidde Button</button>
		</div>
	</div>
</template>

<script setup lang="js">
import { ref } from 'vue'
const isHide = ref(false);
const nomProduit = ref('')
const mesProduits = ref([])

function ajouterProduit() {
  mesProduits.value.push(nomProduit.value);
  nomProduit.value = '';
}

function hidde(){
  isHide.value == false ? isHide.value = true : isHide.value = false;
  console.log(isHide)
}

function supprimerProduit(index){
  mesProduits.value.splice(index, 1);
}
</script>
<style>
.hidden {
	display: none;
}
</style>
