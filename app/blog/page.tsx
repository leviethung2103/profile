import BlogComponent from '@/components/Blog';
import { ReadData } from '@/core/utils/ReadData';
import { Metadata } from 'next';

// SEO
export const metadata: Metadata = {
    title: 'Blog',
    description:
        'This is my blog. I will share about my life, my experiences, and my knowledge.',
};

export default function page() {
    const blog = ReadData();
    blog.sort((a, b) => {
        return (
            new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
        );
    });

    return (
        <div>
            <div className='divide-y divide-gray-200 dark:divide-gray-700'>
                <div className='space-y-2 pb-8 pt-6 md:space-y-5'>
                    <h1 className='md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl'>
                        Blogs
                    </h1>
                    <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
                        This is my blog. I will share about my life, my
                        experiences, and my knowledge.
                    </p>
                </div>
                {blog.map((item, index) => (
                    <BlogComponent key={index} blog={item} />
                ))}
            </div>
        </div>
    );
}
