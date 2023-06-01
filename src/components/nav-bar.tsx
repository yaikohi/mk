import { component$ } from '@builder.io/qwik';

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
    return (<nav>
        <ul>
            {routes.map((route, id) => {
                return (<li key={id}>
                    <a href={route.path}>
                        {route.name}
                    </a>
                </li>)
            })}
            <li></li>
        </ul>
    </nav>)
});