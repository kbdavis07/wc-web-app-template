import { SimplrRouter, SimplrRouterOptions } from "@simplr-wc/router";

const routerOptions: SimplrRouterOptions = {
    routes: [
        {
            name: "Home",
            path: "/",
            component: "landing-page",
            // \\wsl.localhost\Ubuntu-24.04\home\kbdavis07\repos\wc-web-app-template\src\pages\LandingPage
            import: () => import("../pages/LandingPage/LandingPage"),
        },
    ],
    transitionSpeed: 50,
};

const router = new SimplrRouter(routerOptions);
router.init();