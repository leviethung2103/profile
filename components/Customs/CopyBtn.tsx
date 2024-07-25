'use client';

import React from 'react';

export default function CodeCopyBtn({ children }: { children: any }) {
    const [copyOk, setCopyOk] = React.useState(false);

    const handleClick = (e: any) => {
        console.log(children.props.children.props.children[1]);
        const copy = children.props.children.props.children[1]
            .map((item: any) => {
                if (item.props) {
                    return item.props.children;
                }
                return '\n';
            })
            .join('');

        console.log(copy);

        navigator.clipboard.writeText(copy);

        setCopyOk(true);
        setTimeout(() => {
            setCopyOk(false);
        }, 500);
    };

    return (
        <div className='code-copy-btn' onClick={handleClick}>
            {copyOk ? (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                    <path d='M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                </svg>
            ) : (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                    <path d='M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z' />
                </svg>
            )}
        </div>
    );
}
