import { lazy } from "react";
import { IRoute } from "./interfaces/generalInterface/route/route";

const SignIn = lazy(() => import("./pages/authenticaton/SignIn"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Chatollama = lazy(() => import("./pages/dashboard/ChatIlama"));



export const appRoutes: IRoute[] = [
    {
        path: "/",
        component: SignIn,
        requiresAuth: false,
    },
    {
        path: "/dashboard",
        component: Dashboard,
        requiresAuth: false,
    },
    {
        path: "/chatollama",
        component: Chatollama,
        requiresAuth: false,
    },

]