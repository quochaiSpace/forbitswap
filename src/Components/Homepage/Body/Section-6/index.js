import styles from './index.module.scss';

import icon1 from '../../../../assets/images/icon1.png';
import icon2 from '../../../../assets/images/icon2.png';
import icon3 from '../../../../assets/images/icon3.png';
import icon4 from '../../../../assets/images/icon4.png';
import icon5 from '../../../../assets/images/icon5.png';
import icon6 from '../../../../assets/images/icon6.png';
import icon7 from '../../../../assets/images/icon7.png';
import icon8 from '../../../../assets/images/icon8.png';
import icon9 from '../../../../assets/images/icon9.png';
import icon10 from '../../../../assets/images/icon10.png';
import icon11 from '../../../../assets/images/icon11.png';
import icon12 from '../../../../assets/images/icon12.png';




const Section6 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.body}>
                    <div className={styles.view_text_title}>
                        <span className={styles.text_title}>Strategic Partners</span>
                    </div>

                    <div className={styles.view_body_icon}>
                        <div className={styles.view_icon_1}>
                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon1} />
                                <span className={styles.text_icon}>Spacecy Wallet</span>
                            </div>
                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon2} />
                                <span className={styles.text_icon}>Martian</span>
                            </div>
                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon3} />
                                <span className={styles.text_icon}>Blocto App</span>
                            </div>


                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon4} />
                                <span className={styles.text_icon}>Pontem Network</span>
                            </div>
                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon5} />
                                <span className={styles.text_icon}>Petra Wallet</span>
                            </div>


                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon11} />
                                <span className={styles.text_icon}>Switchboard</span>
                            </div>

                        </div>

                        <div className={styles.view_icon_1}>
                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon6} />
                                <span className={styles.text_icon}>Aptos Stats</span>
                            </div>
                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon7} />
                                <span className={styles.text_icon}>Rise Wallet</span>
                            </div>
                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon8} />
                                <span className={styles.text_icon}>Hippo Labs</span>
                            </div>
                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon9} />
                                <span className={styles.text_icon}>Satay Labs</span>
                            </div>
                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon10} />
                                <span className={styles.text_icon}>Abel Finance</span>
                            </div>
                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon12} />
                                <span className={styles.text_icon}>Tsunami Finance</span>
                            </div>

                        </div>

                        {/* <div className={styles.view_icon_1}>

                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon11} />
                                <span className={styles.text_icon}>Switchboard</span>
                            </div>
                            <div className={styles.view_img}>
                                <img className={styles.img_icon} src={icon12} />
                                <span className={styles.text_icon}>Tsunami Finance</span>
                            </div>
                        </div> */}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section6;