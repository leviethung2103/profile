import { ReadData } from '@/core/utils/ReadData';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    let map: MetadataRoute.Sitemap = [];

    map.push({
        url: 'https://hungleviet.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.1,
    });

    map.push({
        url: 'https://www.hungleviet.com/about',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.2,
    });

    map.push({
        url: 'https://www.hungleviet.com/tags',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
    });

    const blog = ReadData();

    blog.forEach((item) => {
        map.push({
            url: `https://www.hungleviet.com.dev/blog/${item.data.slug}`,
            lastModified: new Date(item.data.date),
            changeFrequency: 'monthly',
            priority: 0.5,
        });
    });

    return map;
}
