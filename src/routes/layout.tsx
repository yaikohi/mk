import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/nav-bar";
import { useAuthSession } from '~/routes/plugin@auth';

export default component$(() => {
  const session = useAuthSession()
  console.log(session)

  return (
    <>
    <Navbar/>
      <main class="w-full">
        <Slot />
      </main>
    </>
  );
});
