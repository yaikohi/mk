import { component$ } from '@builder.io/qwik';
import { LuGithub, LuMoon, LuTwitter } from "@qwikest/icons/lucide";
import { LuSun } from "@qwikest/icons/lucide";
export const Navbar = component$(() => {
    const routes = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Writer",
            path: "/writer"
        },
        {
            name: "Sign in",
            path: "/sign-in"
        }
    ]
    return (
        <nav class="container flex h-14 items-center justify-between border-b-2">
            <div class="flex gap-8 items-center">
                <h1>\mk</h1>
                <ul class="flex text-sm gap-4 font-light">
                    {routes.map((route, id) => {
                        return (
                            <li key={id} class="">
                                <a href={route.path}>
                                    {route.name}
                                </a>
                            </li>)
                    })}
                </ul>
            </div>
            <div class="flex gap-8 items-center">
                <LuGithub />
                <LuTwitter />
                <LuMoon />
                <LuSun />
            </div>
        </nav>)
});