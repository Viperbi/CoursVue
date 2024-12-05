<template>
	<div class="card">
		<div class="card">
			<input v-model="text1" type="text" />
			<p
				:class="{
					hello: helloClass(),
					world: worldClass(),
					hidden: isHide,
				}"
			>
				Hello World
			</p>
		</div>
		<div class="card">
			<input v-model="text2" type="text" />
			<p :style="{ backgroundColor: text2 }">Hello World</p>
		</div>
		<button class="button" v-on:click="hidde">Hidde Button</button>
	</div>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount,ref } from 'vue'

const isHide = ref(false);
const text1 = ref("");
const text2 = ref("");

function hidde(){
  isHide.value == false ? isHide.value = true : isHide.value = false;
  console.log(isHide)
}

function helloClass(){
  return text1.value == "hello";
}

function worldClass(){
  return text1.value == "world";
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
.button {
	background-color: black;
	color: white;
}

.hello {
	background-color: chartreuse;
}

.world {
	background-color: lightblue;
}

.hidden {
	display: none;
}
</style>
