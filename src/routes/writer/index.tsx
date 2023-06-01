import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import MarkdownWriterPreview from "~/components/markdown-writer-preview";

export default component$(() => {

    return (
        <>
                <MarkdownWriterPreview />
        </>
    );
});

export const head: DocumentHead = {
    title: "mk",
    meta: [
        {
            name: "description",
            content: "qwik markdown editor",
        },
    ],
};
