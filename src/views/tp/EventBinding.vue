<template>
	<div class="card">
		<input v-on:keyup="getKey" type="text" />
		<p>{{ text1 }}</p>
		<input v-on:keyup.esc="afficherText" type="text" />
		<p>{{ text2 }}</p>
	</div>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount,ref } from 'vue'

const text1 = ref("");
const text2 = ref("");
function getKey(event){
  text1.value = event.target.value;
}
function afficherText(event){
  text2.value = event.target.value;
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
