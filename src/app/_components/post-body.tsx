import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string; // Raw JSX/HTML string
};

export function PostBody({ content }: Props) {
  return (
    <div
      // className={markdownStyles["markdown"]}
      id="post-body"
      className="max-w-full mx-auto"
      dangerouslySetInnerHTML={{ __html: content }}
      >
    </div>
  );
}
