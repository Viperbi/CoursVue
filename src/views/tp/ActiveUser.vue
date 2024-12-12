<template>
	<div class="card container">
		<p class="p">{{ name }}</p>
		<br />
		<p class="p">{{ age }} ans</p>
	</div>
	<UserData @submitData="updateData" :name="name" :age="age"></UserData>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount,ref } from 'vue'
import UserData from './UserData.vue';

const name = ref()
const age = ref()


function updateData(newAge,newName){
  name.value = newName;
  age.value = newAge
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
.container {
	background-color: blue;
}

.p {
	color: white;
}
</style>
