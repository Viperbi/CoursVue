import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			alias: "/home",
			name: "Home",
			component: () => import("../views/HomeView.vue"),
		},
		{
			path: "/lesson-text-interpolation-vue",
			name: "lesson-interpolation",
			component: () =>
				import("../views/lessons/LessonTextInterpolation.vue"),
		},
		{
			path: "/exo-text-interpolation",
			name: "exo-interpolation",
			component: () => import("../views/exo/ExoTextInterpolation.vue"),
		},
		{
			path: "/exo-methode",
			name: "exo-methode",
			component: () => import("../views/exo/MethodExecutionComp.vue"),
		},
		{
			path: "/lesson-attribute",
			name: "lesson-attrivute",
			component: () => import("../views/lessons/AttributeBinding.vue"),
		},
		{
			path: "/tp-dataBinding",
			name: "tp-dataBinding",
			component: () => import("../views/tp/DataBinding.vue"),
		},
		{
			path: "/exo-eventBinding",
			name: "exo-eventBinding",
			component: () => import("../views/exo/EventBinding.vue"),
		},
		{
			path: "/tp-eventBinding",
			name: "tp-eventBinding",
			component: () => import("../views/tp/EventBinding.vue"),
		},
		{
			path: "/lesson-Vmodel",
			name: "lesson-Vmodel",
			component: () => import("../views/lessons/Vmodel.vue"),
		},
		{
			path: "/exo-bug",
			name: "exo-bug",
			component: () => import("../views/exo/ExoBug.vue"),
		},
		{
			path: "/lesson-exempleWatchers",
			name: "lesson-exempleWatchers",
			component: () => import("../views/lessons/ExempleWatchers.vue"),
		},
		{
			path: "/tp-reactivite",
			name: "tp-reactivite",
			component: () => import("../views/tp/Reactivite.vue"),
		},
		{
			path: "/exo-dynamic",
			name: "exo-dynamic",
			component: () => import("../views/exo/DynamicStyling.vue"),
		},
		{
			path: "/tp-dynamic",
			name: "tp-dynamic",
			component: () => import("../views/tp/DynamicStyling.vue"),
		},
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: () => import("../views/NotFoundView.vue"),
		},
		//! ----------------------------Lessons Views routes ----------------------------
	],
});

export default router;
