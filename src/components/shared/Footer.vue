<template>
	<div>
		<footer
			class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
		>
			<div class="col-md-4 d-flex align-items-center">
				<a
					href="/"
					class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
				>
					<svg class="bi" width="30" height="24">
						<use xlink:href="#bootstrap"></use>
					</svg>
				</a>
				<span class="text-muted">© 2021 Company, Inc</span>
			</div>

			<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
				<li class="ms-3">
					<a class="text-muted" href="#"
						><svg class="bi" width="24" height="24">
							<use xlink:href="#twitter"></use></svg
					></a>
				</li>
				<li class="ms-3">
					<a class="text-muted" href="#"
						><svg class="bi" width="24" height="24">
							<use xlink:href="#instagram"></use></svg
					></a>
				</li>
				<li class="ms-3">
					<a class="text-muted" href="#"
						><svg class="bi" width="24" height="24">
							<use xlink:href="#facebook"></use></svg
					></a>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

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
