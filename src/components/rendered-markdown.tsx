import { type Signal, component$, useSignal, useTask$ } from "@builder.io/qwik";
import remarkGfm from "remark-gfm";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";

interface RenderedMarkdownProps {
  content: Signal<string>;
}
export default component$(({ content }: RenderedMarkdownProps) => {
  const mdContent = useSignal<string>();

  useTask$(async ({ track }) => {
    track(() => content.value);
    mdContent.value = String(
      await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .use(remarkFrontmatter, "yaml")
        .process(content.value)
    );
  });

  return (
    <>
      <div
        class="prose rounded-xl p-8 bg-slate-50 min-w-full"
        dangerouslySetInnerHTML={mdContent.value}
      />
    </>
  );
});
