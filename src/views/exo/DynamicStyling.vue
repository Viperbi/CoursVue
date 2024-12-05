<template>
	<div
		class="card"
		:style="{ backgroundColor: color1 }"
		v-on:click="div1()"
	></div>
	<div
		class="card"
		:style="{ backgroundColor: color2 }"
		v-on:click="div2()"
	></div>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount,ref } from 'vue'

const color1 = ref("");
const color2 = ref("");

function div1(){
  if (color1.value == "red"){
    color1.value = "white";
  }else{
    color1.value = "red";
  }
}

function div2(){
  if (color2.value == "blue"){
    color2.value = "white";
  }else{
    color2.value = "blue";
  }
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
