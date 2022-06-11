import Link from '@docusaurus/Link';
import React from 'react';

import styles from './card.styles.module.css';

const Card = (props: { name: string; href: string }) => {
    return (
        <section className={styles.features}>
            <div>
                <p>{props.name}</p>
                <span>
                    <Link to={props.href}>
                        <a>Go</a>
                    </Link>
                </span>
            </div>
        </section>
    );
};

export default Card;
