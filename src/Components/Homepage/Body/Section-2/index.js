import styles from './index.module.scss';

import img1 from '../../../../assets/images/img-section3.png';
import section1 from '../../../../assets/images/section2-1.png';
import section2 from '../../../../assets/images/section2-2.png';
import icon1 from '../../../../assets/images/icon-section2-1.png';
import icon2 from '../../../../assets/images/icon-section2-2.png';
import icon3 from '../../../../assets/images/icon-section2-3.png';
import icon4 from '../../../../assets/images/icon-section2-4.png';



const Section2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.div_title_content}>
                    <img className={styles.img_title} src={img1} />
                    <span className={styles.title}>Move Language - Move Power</span>
                </div>
                <div className={styles.view_text}>
                    <span className={styles.text}>The Move - A safe and flexible programming language for Blockchain application <br /> development with resources, has many advantages over other blockchains. Move <br /> Language achieves security, performance, and fairness, which is crucial if we want to <br /> bring the next billion users onto the blockchain.</span>
                </div>


                <div className={styles.body}>
                    <div className={styles.content_body}>
                        <div className={styles.view_img_body}>
                            <img className={styles.img_body} src={section1} />
                        </div>

                        <span className={styles.text_body}>The safest and most scalable Layer 1 Blockchain <br /> for the next 1 billion crypto users. The Block-STM <br /> approach enables fast transactions with sub- <br /> second finality at extremely low gas fees.</span>

                    </div>

                    <div className={styles.content_body_2}>
                        <img className={styles.img_body} src={section2} />
                        <span className={styles.text_body_2}>Sui is the first permissionless Layer 1 Blockchain <br /> designed from the ground up to enable <br /> creators and developers to build experiences <br /> that cater to the next billion users in web3.</span>
                    </div>
                </div>



                <div className={styles.content_body_bottom}>
                    <div className={styles.view_icon_bottom}>
                        <img className={styles.icon} src={icon1} />
                        <span className={styles.text_icon}>Resources</span>
                    </div>

                    <div className={styles.view_icon_bottom}>
                        <img className={styles.icon} src={icon2} />
                        <span className={styles.text_icon}>Flexibility</span>
                    </div>

                    <div className={styles.view_icon_bottom}>
                        <img className={styles.icon} src={icon3} />
                        <span className={styles.text_icon}>Safety</span>
                    </div>

                    <div className={styles.view_icon_bottom}>
                        <img className={styles.icon} src={icon4} />
                        <span className={styles.text_icon}>Verifiability</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section2;