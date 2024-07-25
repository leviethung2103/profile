import { Blog } from '@/core/utils/ReadData';
import React from 'react';
import Tag from '../Tag';

export default function index({ blog }: { blog: Blog }) {
    return (
        <li className='list-none py-12'>
            <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                <dl>
                    <dt className='sr-only'>Published on</dt>
                    <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                        <time dateTime={blog.data.date}>
                            {new Date(blog.data.date).toLocaleDateString(
                                'en-US',
                                {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                }
                            )}
                        </time>
                    </dd>
                </dl>
                <div className='space-y-5 xl:col-span-3'>
                    <div className='space-y-6'>
                        <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                            <a
                                href={`/blog/${blog.data.slug}`}
                                className='text-gray-900 dark:text-gray-100'
                            >
                                {blog.data.title}
                            </a>
                        </h2>
                        <div className='flex flex-wrap'>
                            {blog.data.tags.map((tag: any) => (
                                <Tag key={tag} text={tag} />
                            ))}
                        </div>
                        <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                            <p>{blog.data.summary}</p>
                        </div>
                    </div>
                    <div className='text-base font-medium leading-6'>
                        <a
                            href={`/blog/${blog.data.slug}`}
                            className='text-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                            aria-label={`Read "${blog.data.title}"`}
                        >
                            Read more &rarr;
                        </a>
                    </div>
                </div>
            </article>
        </li>
    );
}
