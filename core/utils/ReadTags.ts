import { ReadData } from './ReadData';

type Tags = {
    tag: string;
    count: number;
};

export const ReadTags = () => {
    const blog = ReadData();

    // return tag, count
    let tags: Tags[] = [];

    blog.forEach((item) => {
        item.data.tags.forEach((tag) => {
            const index = tags.findIndex((x) => x.tag === tag);
            if (index === -1) {
                tags.push({ tag: tag, count: 1 });
            } else {
                tags[index].count++;
            }
        });
    });

    return tags;
};
