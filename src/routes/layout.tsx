import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <main class="w-full bg-slate-100">
        <Slot />
      </main>
    </>
  );
});
