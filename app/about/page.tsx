import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Hung-Dev',
    description: 'Better than nothing',
};

export default function About() {
    return (
        <div className='h-full space-y-5'>
            <p className='text-[2.0em] font-semibold '>About me </p>
            <p>Location: Da Nang, Viet Nam 🇻🇳 </p>
            <p>Experienced AI Engineer with a focus on Computer Vision and Natural Language Processing having worked on multiple projects for over 6 years. Skilled in developing and deploying models using a range of tools and frameworks, including Python, TensorFlow, PyTorch and OpenCV. Adept at working with large datasets, optimizing model performance and integrating AI solutions into existing systems. Strong ability to communicate technical concepts to both technical and non-technical audiences. Committed to staying current with industry developments and continuously improving skills.</p>
            <p>
                Facebook: {' '}
                <a
                    className='custom-a dark:text-white'
                    href='https://www.facebook.com/hungpro8800/'
                >
                    Hung
                </a>
            </p>
            <p>
                Email: {' '}
                <a
                    className='custom-a dark:text-white'
                    href='leviethung1280@gmail.com'
                >
                    Hung
                </a>
            </p>
        </div>
    );
}
