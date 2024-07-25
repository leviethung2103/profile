import React from 'react';
import Image from 'next/image';
import { Coiny } from 'next/font/google';
import Link from 'next/link';

const coiny = Coiny({
    weight: '400',
    subsets: ['latin'],
});

const Logo: React.FC = () => {
    return (
        <Link href='/' className={coiny.className}>
            <div className='text-2xl dark:text-white'>Hung Le Viet</div>
        </Link>
    );
};

export default Logo;
