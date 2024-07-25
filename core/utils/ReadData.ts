// read all file mdx in data/blog
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Blog = {
    data: {
        title: string;
        date: string;
        tags: string[];
        summary: string;
        slug: string;
    };
    content: string;
};

export const ReadData = (): Blog[] => {
    const files = fs.readdirSync(path.join(process.cwd(), 'data/blog'));

    const posts: Blog[] = files.map((filename) => {
        const markdownWithMetadata = fs.readFileSync(
            path.join(process.cwd(), 'data/blog', filename),
            'utf-8'
        );

        const { data, content } = matter(markdownWithMetadata);

        return {
            data: {
                title: data.title || '',
                date: data.date || '',
                tags: data.tags || [],
                summary: data.summary || '',
                slug: data.slug || filename,
            },
            content,
        };
    });

    return posts;
};
