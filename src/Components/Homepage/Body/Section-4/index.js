import styles from './index.module.scss';


import React from 'react'

const Section4 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.view_content}>
                    <div className={styles.view_text}>
                        <span className={styles.textTitle}>Compass Share</span>
                        <span className={styles.textTitle2}>Decentralized Prediction Markets</span>
                        {/* <span className={styles.view_textTitle3}> */}
                        <p className={styles.textTitle3}>Decentralized Prediction Markets on the <br /> blockchain enables people to buy and sell <br /> contracts based on future events.</p>
                        {/* </span> */}

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Section4
