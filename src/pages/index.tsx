import React from 'react';
import clsx from 'clsx';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

import Card from '../components/homepage/card';

type cardListItem = {
    title: string;
    items: {
        name: string;
        href: string;
    }[];
};

const cardList: cardListItem[] = [
    {
        title: '家庭',
        items: [
            {
                name: '家庭网络设置',
                href: '/docs/home/network/intro',
            },
        ],
    },
    {
        title: '学习',
        items: [
            {
                name: '英国学习生活',
                href: '/docs/study/uk/intro',
            },
        ],
    },
];

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className='container'>
                <h1 className='hero__title'>{siteConfig.title}</h1>
                <p className='hero__subtitle'>{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout title={`${siteConfig.title}`} description='Okey 的生活日志'>
            <HomepageHeader />
            <main className='container'>
                {cardList.map((item) => (
                    <div key={item.title}>
                        <h2>{item.title}</h2>
                        {item.items.map((subItem) => (
                            <Card key={subItem.name} name={subItem.name} href={subItem.href} />
                        ))}
                    </div>
                ))}
            </main>
        </Layout>
    );
}
