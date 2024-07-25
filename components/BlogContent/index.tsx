import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CodeCopyBtn from '../Customs/CopyBtn';

export default function index({ content }: { content: string }) {
    // Add the CodeCopyBtn component to our PRE element
    const Pre = ({ children }: { children?: any }) => (
        <pre className='blog-pre'>
            <CodeCopyBtn>{children}</CodeCopyBtn>
            {children}
        </pre>
    );

    return (
        <div>
            <div className='prose w-full lg:prose-xl'>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        pre: (props) => <Pre {...props} />,
                        code({
                            node,
                            inline,
                            className,
                            children,
                            ...props
                        }: any) {
                            const match = /language-(\w+)/.exec(
                                className || ''
                            );

                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={a11yDark}
                                    language={match[1]}
                                    PreTag='div'
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
}
