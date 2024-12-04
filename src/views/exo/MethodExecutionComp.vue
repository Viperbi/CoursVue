<template>
	<div>
		<p>{{ calcul() }}</p>
	</div>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount,ref } from 'vue'

function calcul(){
  let nb = Math.random();
  if (nb<0.5){
    return "inférieur à 0,5";
  }
    return "supérieur à 0,5";
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
