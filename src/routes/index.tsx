import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import RenderedMarkdown from "~/components/rendered-markdown";

export default component$(() => {
  const content = useSignal<string>(`
# h1

## h2

### h3

#### h4

##### h5

###### h6

**Bold**

*Italic*

> quoted content

[link](https://ykhi.xyz/)

You can use inline \`code\` as well as code blocks:

\`\`\`js 
const arr = new Array();
\`\`\` 

Lists:
- Apple
- Orange 
- Peach 
- Banana

Adding images:
![JavaScript](https://www.iconninja.com/files/541/586/346/command-language-software-develop-code-programming-javascript-icon.png)
  `);
  return (
    <>
      <div class=" grid grid-cols-2 grid-rows-1 gap-8 w-full">
        <div class="flex flex-col gap-1 col-span-1 overflow-y-auto">
          <label class="text-xs font-light" for="content">
            editor
          </label>
          <textarea
            class="h-full bg-slate-50 rounded-xl p-8"
            name="content"
            bind:value={content}
          />
        </div>

        <div class="flex flex-col gap-1 col-span-1 w-full">
          <p class="text-xs font-light">preview</p>
          <RenderedMarkdown content={content} />
        </div>
      </div>
      <div></div>
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
