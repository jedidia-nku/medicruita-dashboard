import { lazy } from "react";
import { IRoute } from "./interfaces/generalInterface/route/route";
import Settings from "./pages/dashboard/Settings";

const SignIn = lazy(() => import("./pages/authenticaton/SignIn"));
const ForgotPassword = lazy(() => import("./pages/authenticaton/ForgotPassword"));
const ResetPssword = lazy(() => import("./pages/authenticaton/ResetPassword"));
const Overview = lazy(() => import("./pages/dashboard/Overview"));
const UserManagement = lazy(() => import("./pages/dashboard/UserManagement"));
const SavingsInvestment = lazy(() => import ("./pages/dashboard/Savings&investment"));
const Transactions = lazy(() => import ("./pages/dashboard/Transactions"));
const Insurance = lazy(() => import ("./pages/dashboard/Insurance"));
const Explore = lazy(() => import("./pages/dashboard/Explore"));
const Audit = lazy(() => import("./pages/dashboard/Audit"));



export const appRoutes: IRoute[] = [
    {
        path: "/",
        component: SignIn,
        requiresAuth: false,
    },
    {
        path: "/forgot-password",
        component: ForgotPassword,
        requiresAuth: false,
    },
    {
        path: "/reset-password",
        component: ResetPssword,
        requiresAuth: false,
    },
    {
        path: "/overview",
        component: Overview,
        requiresAuth: false,
    },
    {
        path: "/user-management",
        component: UserManagement,
        requiresAuth: false,
    },
    {
        path: "/savings&investment",
        component: SavingsInvestment,
        requiresAuth: false,
    },
    {
        path: "/transactions",
        component: Transactions,
        requiresAuth: false,
    },
    {
        path: "/insurance",
        component: Insurance,
        requiresAuth: false,
    },
    {
        path: "/settings",
        component: Settings,
        requiresAuth: false,
    },
    {
        path: "/explore",
        component: Explore,
        requiresAuth: false,
    },
    {
        path: "/logs",    
        component: Audit,    
        requiresAuth: false,
    },

]