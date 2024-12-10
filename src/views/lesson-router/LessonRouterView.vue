<template>
	<div class="container py-5">
		<h1 align="center">Phrase instructive</h1>
		<ul>
			<li v-for="unItem in items" :key="unItem.name">
				{{ unItem.name }}
				<router-link
					:to="{ name: 'Details', params: { id: unItem.id } }"
					class="btn btn-primary btn-sm"
					>Voir les détails</router-link
				>
			</li>
		</ul>
	</div>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const items = [
  { id: 1, name: 'Élément 1' },
  { id: 2, name: 'Élément 2' },
  { id: 3, name: 'Élément 3' },
  { id: 44, name: 'Élément 44' }
];

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
