<template>
	<DoughnutChart></DoughnutChart>
	<BarChart></BarChart>
	<RadarChart></RadarChart>
</template>

<script setup lang="js">
import BarChart from './BarChart.vue';
import DoughnutChart from './DoughnutChart.vue';
import RadarChart from './RadarChart.vue';
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
</script>

<style scoped lang="css"></style>
