import styles from './index.module.scss';

import logo from '../../../assets/images/logo.png';
import vector1 from '../../../assets/images/vector1.png';
import vector2 from '../../../assets/images/vector2.png';
import vector3 from '../../../assets/images/vector3.png';
import vector4 from '../../../assets/images/vector4.png';
import vector5 from '../../../assets/images/vector5.png';
import vector6 from '../../../assets/images/vector6.png';


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <div className={styles.body_footer}>
                    <div className={styles.footer_div1}>
                        <img className={styles.img_logo} src={logo} />
                        <span className={styles.title}>All-in-one DeFi platform that provides both <br /> AMM and Decentralized Prediction Market</span>
                        <span className={styles.text}>Powered by forbitspace foundation LLC</span>
                        <span className={styles.text}>© 2022 @forbitswap, All Rights Reserved,</span>

                        <div className={styles.view_icon}>
                            <img className={styles.img_vector} src={vector1} />
                            <img className={styles.img_vector} src={vector2} />
                            <img className={styles.img_vector} src={vector3} />
                            <img className={styles.img_vector} src={vector4} />
                            <img className={styles.img_vector} src={vector5} />
                            <img className={styles.img_vector} src={vector6} />

                        </div>
                    </div>

                    <div className={styles.col1}>
                        <div className={styles.footer_div2}>
                            <span className={styles.title}>Protocol</span>
                            <span className={styles.text}>Swap Earn Liquidity Staking Farms Bridge Analytics</span>
                        </div>

                        <div className={styles.footer_div2}>
                            <span className={styles.title}>Compass Share</span>
                            <span className={styles.text}>Crypto Sports Economics Esport Polictics</span>
                        </div>
                    </div>


                    <div className={styles.col1}>
                        <div className={styles.footer_div2}>
                            <span className={styles.title}>Devlopers</span>
                            <span className={styles.text}>Github Docs BugBounty Audits Blog</span>
                        </div>

                        <div className={styles.footer_div2}>
                            <span className={styles.title}>DAO</span>
                            <span className={styles.text}>Governance Voting Forum</span>
                        </div>
                    </div>

                    <div className={styles.col1}>
                        <div className={styles.footer_div2}>
                            <span className={styles.title}>About</span>
                            <span className={styles.text}>Docs Team Brandkit Disclaimer Contact us</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer;