import styles from './index.module.scss';

import ip1 from '../../../../assets/images/ip1.png';
import ip2 from '../../../../assets/images/ip2.png';


const Section3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.content_top}>
                    <div className={styles.view_text}>
                        <span className={styles.title}>Non-custodial Decentralized Exchange.</span>
                        <div className={styles.view}>
                            <span className={styles.text}>Scalability, Security, and User-oriented</span>
                            <span className={styles.text}>DeFi protocols that users can connect to without <br /> forsaking access to their cryptocurrencies.</span>
                        </div>
                    </div>

                    <div className={styles.view_img}>
                        <img className={styles.img} src={ip1} />
                    </div>

                </div>

                <div className={styles.content_bottom}>
                    <div className={styles.view_img}>
                        <img className={styles.img} src={ip2} />
                    </div>

                    <div className={styles.view_text}>
                        <span className={styles.title}>Trade anywhere, anytime</span>
                        <div className={styles.view}>
                            <span className={styles.text}>The better user-friendly application in Blockchain</span>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Section3;