<template>
	<div class="card">
		<p>Nom</p>
		<input type="text" v-model="name" />
		<br />
		<p>Age</p>
		<input type="text" v-model="age" />
		<br />
		<button @click="submit" class="btn btn-outline-dark">
			Actualiser les données
		</button>
	</div>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount,ref,defineEmits } from 'vue'

const name=ref()
const age =ref()
const submit = () =>{
  emit ('submitData', age.value, name.value)
}


const props = defineProps({
});

const emit = defineEmits(
  ['submitData']
);

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});
</script>

<style scoped lang="css">
.card {
	background-color: darkgoldenrod;
}
.btn-outline-dark {
	background-color: lightgray;
}
</style>
