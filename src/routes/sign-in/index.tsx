import { component$ } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';
import Button from '~/components/router-head/button';
import { useAuthSignin } from '~/routes/plugin@auth';
export default component$(() => {
    const signIn = useAuthSignin();
    return (
        <Form class="flex p-3 rounded-xl place-items-center justify-middle" action={signIn}>
            <input type="hidden" name="providerId" value="github" />
            <Button variant={"default"}>Sign In</Button>
        </Form>
    )
});