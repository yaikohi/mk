import { component$, Slot } from "@builder.io/qwik";
import Navbar from "~/components/nav-bar";

export default component$(() => {
  return (
    <>
      <Navbar />
      <main class="w-full p-8">
        <Slot />
      </main>
    </>
  );
});
