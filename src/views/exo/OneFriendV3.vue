<template>
	<PropsOneFriendOptiComp
		unAmiPhone="0987654"
		unAmiMail="eric@reptile.com"
		premium="10000"
	></PropsOneFriendOptiComp>
</template>

<script setup lang="js">
import { defineAsyncComponent } from 'vue'
const PropsOneFriendOptiComp = defineAsyncComponent(() => import('../../components/PropsOneFriendOptiComp.vue'))
</script>
