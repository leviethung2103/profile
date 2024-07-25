import { ReadTags } from '@/core/utils/ReadTags';
import React from 'react';
import { Tags } from '../page';
import { notFound } from 'next/navigation';
import { ReadData } from '@/core/utils/ReadData';
import BlogComponent from '@/components/Blog';

export const generateStaticParams = async () => {
    const tags = ReadTags().map((tag: Tags) => ({
        params: { slug: tag.tag },
    }));
    return tags;
};

export default function page({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    // check tag from params
    const tags = ReadTags().findIndex((tag: Tags) => tag.tag === params.slug);

    if (tags === -1) {
        return notFound();
    }

    const blog = ReadData().filter((item) =>
        item.data.tags.includes(params.slug)
    );

    return (
        <div className='divide-y divide-gray-200 dark:divide-gray-700'>
            <div className='space-y-2 pb-8 pt-6 md:space-y-5'>
                <h1 className='md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl'>
                    Tags: <span className='uppercase'>{params.slug}</span>
                </h1>
            </div>
            {blog.map((item, index) => (
                <BlogComponent key={index} blog={item} />
            ))}
        </div>
    );
}
