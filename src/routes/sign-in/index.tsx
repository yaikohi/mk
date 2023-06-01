import { component$ } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';
import { useAuthSignin } from '~/routes/plugin@auth';
export default component$(() => {
    const signIn = useAuthSignin();
    return (
        <Form class="flex bg-muted p-3 rounded-xl" action={signIn}>
            <input type="hidden" name="providerId" value="github" />
            <button class="px-3 py-2 rounded-xl bg-slate-100 hover:slate-200">Sign In</button>
        </Form>
    )
});