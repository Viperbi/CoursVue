<template>
	<div>
		<button v-on:click="n++" type="button" class="btn btn-danger">
			+1
		</button>
		<button v-on:click="n += 5" type="button" class="btn btn-success">
			+5
		</button>
		<p>Le nombre est : {{ n }}</p>
		<div>
			<p>{{ indice }}</p>
			<br />
			<p>{{ alert }}</p>
		</div>
	</div>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount,ref } from 'vue'

const n = ref(0);
const indice = ref("Essaie encore");
const alert = ref("");

watch(n,(newValue) =>{
  if (newValue == 7){
    alert.value = "C'est gagné !"
    indice.value = `Le nombre mystère est bien ${n.value}`;
  }else if (newValue < 7 ){
    alert.value = "";
    indice.value = "Essaie encore";
  }
  else if (newValue > 7){
    alert.value ="";
    indice.value = "Tu as dépassé le nombre mystère"
  }
  if (newValue > 30){
    alert.value = "Je vais te ramener parmis nous"
    indice.value = "Oulah t'es parti loin là !"
    setTimeout(() => {
      n.value = 0;
    }, 2000);
  }

})

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

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

<style scoped lang="css"></style>
