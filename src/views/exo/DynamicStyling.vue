<template>
	<div
		class="card"
		:class="{ div1Color: red, baseColor: base }"
		v-on:click="div1"
	></div>
	<div
		class="card"
		:class="{ div2Color: blue, baseColor: base2 }"
		v-on:click="div2"
	></div>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount,ref } from 'vue'

const red = ref(false);
const blue = ref(false);
const base = ref(true);
const base2 = ref(true);

function div1(){
  if(base.value == true){
    red.value = true;
    base.value = false;
  }else{
    red.value = false;
    base.value = true;
  }
}

function div2(){
  if(base2.value == true){
    blue.value = true;
    base2.value = false;
  }else{
    blue.value = false;
    base2.value = true;
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

<style scoped lang="css">
.div1Color {
	background-color: red;
}
.div2Color {
	background-color: blue;
}
.baseColor {
	background-color: white;
}
</style>
