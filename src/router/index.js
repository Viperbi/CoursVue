import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase";

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
			path: "/lesson-listRendering",
			name: "lesson-listRendering",
			component: () => import("../views/lessons/ListRendering.vue"),
		},
		{
			path: "/exo-vFor",
			name: "exo-vFor",
			component: () => import("../views/exo/VFor.vue"),
		},
		{
			path: "/tp-vIfvFor",
			name: "tp-vIfvFor",
			component: () => import("../views/tp/VIfVFor.vue"),
		},
		{
			path: "/lesson-router",
			name: "lesson-router",
			component: () =>
				import("../views/lesson-router/LessonRouterView.vue"),
		},
		{
			path: "/details/:id",
			name: "Details",
			component: () => import("../views/details/DetailsPage.vue"),
			props: true,
		},
		{
			path: "/exo-oneFriendv4",
			name: "exo-oneFriendv4",
			component: () => import("../views/exo/OneFriendv4.vue"),
			props: true,
		},
		{
			path: "/register",
			name: "Register",
			component: () => import("../views/RegisterPageView.vue"),
		},
		{
			path: "/login",
			name: "Login",
			component: () => import("../views/LoginPageView.vue"),
		},
		{
			path: "/tp-communication",
			name: "tp-communication",
			component: () => import("../views/tp/ActiveUser.vue"),
		},
		{
			path: "/dashboard",
			name: "Dashboard",
			component: () => import("../views/DashboardView.vue"),
			meta: { requiresAuth: true }, // Route protégée
		},
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: () => import("../views/NotFoundView.vue"),
		},
		//! ----------------------------Lessons Views routes ----------------------------
	],
});
router.beforeEach((to, from, next) => {
	const currentUser = auth.currentUser;

	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!currentUser) {
			next({ name: "Login" }); // Redirection vers la page de connexion si non authentifié
		} else {
			next();
		}
	} else {
		next();
	}
});
export default router;
