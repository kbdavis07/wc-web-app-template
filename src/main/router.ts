import { SimplrRouter, SimplrRouterOptions } from "@simplr-wc/router";

const routerOptions: SimplrRouterOptions = {
    routes: [
        {
            name: "Home",
            path: "/",
            component: "landing-page",
            import: () => import("../pages/LandingPage/LandingPage"),
        },
    ],
    transitionSpeed: 50,
};

const router = new SimplrRouter(routerOptions);
router.init();