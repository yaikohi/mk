import { component$, useSignal } from "@builder.io/qwik";
import RenderedMarkdown from "./rendered-markdown";

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
  
  [my websiteXDDD](https://ykhi.xyz/)
    
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
            <div class="grid grid-cols-2 gap-8 w-full">
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
