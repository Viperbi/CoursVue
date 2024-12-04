<template>
	<div class="d-flex justify-content-center align-items-center my-2">
		<div
			class="btn-group"
			role="group"
			aria-label="Basic mixed styles example"
		>
			<button v-on:click="retrait()" type="button" class="btn btn-danger">
				-
			</button>
			<h3 class="mx-3">Le nombre : {{ n }}</h3>
			<button v-on:click="ajout()" type="button" class="btn btn-success">
				+
			</button>
		</div>
	</div>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount,ref } from 'vue'

let n = ref(0);
function ajout(){
  n.value+=1;
}
function retrait(){
  n.value-=1;
}

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
