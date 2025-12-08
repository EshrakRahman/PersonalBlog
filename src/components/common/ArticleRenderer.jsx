import ReactMarkdown from "react-markdown";

export default function ArticleRenderer({ content }) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        components={{
          a: ({ href, children }) => {
            if (!href) return <>{children}</>;
            return (
              <a href={href} className="text-blue-600 hover:underline">
                {children}
              </a>
            );
          },
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold my-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold my-3" {...props} />
          ),
          p: ({ node, ...props }) => <p className="my-2" {...props} />,
          li: ({ node, ...props }) => (
            <li className="ml-6 list-disc my-1" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
