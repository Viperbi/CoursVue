<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Navbar</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link
							class="nav-link active"
							aria-current="page"
							to="/home"
							>Home</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link active"
							aria-current="page"
							to="/register"
							>Register</router-link
						>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Exos
						</a>
						<ul class="dropdown-menu">
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/exo-text-interpolation"
									>Exo interpolation</router-link
								>
							</li>
							<li></li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/exo-methode"
									>Exo méthode</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/exo-eventBinding"
									>Event Binding</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/exo-bug"
									>Bug</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/exo-dynamic"
									>Dynamic Styling</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/exo-vFor"
									>VFor</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/exo-oneFriendv4"
									>One Friend V4</router-link
								>
							</li>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Lessons
						</a>
						<ul class="dropdown-menu">
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/lesson-text-interpolation-vue"
									>Text-Interpolation</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/lesson-attribute"
									>Attribute Binding</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/lesson-Vmodel"
									>Vmodel</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/lesson-exempleWatchers"
									>Exemple Watchers</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/lesson-listRendering"
									>List Rendering</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/chartJS"
									>ChartJS</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/counterPinia"
									>Counter Pinia</router-link
								>
							</li>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							TP
						</a>
						<ul class="dropdown-menu">
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/tp-dataBinding"
									>Data Binding</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/tp-eventBinding"
									>Event Binding</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/tp-reactivite"
									>Reactivité</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/tp-dynamic"
									>Dynamic Styling</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/tp-vIfvFor"
									>V-if & V-for</router-link
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/tp-communication"
									>Communication</router-link
								>
							</li>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Autre
						</a>
						<ul class="dropdown-menu">
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/lesson-router"
									>Router</router-link
								>
							</li>
						</ul>
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button class="btn btn-outline-success" type="submit">
						Search
					</button>
				</form>
			</div>
		</div>
	</nav>
</template>

<script setup lang="js">
import { RouterLink } from 'vue-router'
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
