import styles from './index.module.scss';

import avatar1 from '../../../../assets/images/avatar1.png';
import avatar2 from '../../../../assets/images/avatar2.png';
import avatar3 from '../../../../assets/images/avatar3.png';
import avatar4 from '../../../../assets/images/avatar4.png';
import group1 from '../../../../assets/images/Group1.png';
import group2 from '../../../../assets/images/Group2.png';
import group3 from '../../../../assets/images/Group3.png';
import group4 from '../../../../assets/images/Group4.png';
import group5 from '../../../../assets/images/Group5.png';


const Section5 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.body}>
                    <div className={styles.view_content_left}>
                        <div className={styles.content_left}>
                            <img className={styles.img} src={avatar1} />
                            <div className={styles.view_title_avatar}>
                                <span className={styles.title_Avatar}>VITALIK BUTERIN</span>
                                <span className={styles.title2_Avatar}>Ethereum co-founder</span>
                            </div>

                        </div>

                        <div className={styles.view_text_avatar1}>
                            <span className={styles.text_avatar1}>The biggest remaining thing I want out of defi at this <br /> point is "make a prediction market that people actually <br /> want to participate in". And that's already pretty niche,<br /> and prediction markets are already a public epistemic <br /> technology more than just a finance technology. <br />
                                Crypto’s prediction markets are proving more reliable <br /> than traditional polls in this election.</span>
                        </div>
                    </div>

                    <div className={styles.view_content_left}>
                        <div className={styles.content_left}>
                            <img className={styles.img} src={avatar2} />
                            <div className={styles.view_title_avatar}>
                                <span className={styles.title_Avatar}>BALAJI S. SRINIVASAN</span>
                                <span className={styles.title2_Avatar}>Former CTO of Coinbase</span>
                            </div>

                        </div>

                        <div className={styles.view_text_avatar1}>
                            <span className={styles.text_avatar1}>"Blockchain-based prediction markets may be the one <br /> force strong enough to counterbalance the spread of <br /> incorrect information on social media. They give people a <br /> financial incentive to seek the truth and then protect <br /> them with the twin shields of pseudonymity and <br /> decentralization."</span>
                        </div>
                    </div>

                </div>

                <div className={styles.view_text_center}>
                    <span className={styles.text_center}>Wanna Bet? Crypto Prediction Markets Could <br /> Be a New ‘Source of Truth’</span>
                </div>


                <div className={styles.body}>
                    <div className={styles.view_content_left}>
                        <div className={styles.content_left}>
                            <img className={styles.img} src={avatar3} />
                            <div className={styles.view_title_avatar}>
                                <span className={styles.title_Avatar}>CLAY GRAUBARD</span>
                                <span className={styles.title2_Avatar}>Co_founders of Baserate</span>
                            </div>

                        </div>

                        <div className={styles.view_text_avatar1}>
                            <span className={styles.text_avatar1}>"Crypto-based Prediction Markets make this “bet” <br /> explicit, by offering an opportunity for everyone to <br /> stake money on what they think that will happen."</span>
                        </div>
                    </div>

                    <div className={styles.view_content_left}>
                        <div className={styles.content_left}>
                            <img className={styles.img} src={avatar4} />
                            <div className={styles.view_title_avatar}>
                                <span className={styles.title_Avatar}>ANDREW EADDY</span>
                                <span className={styles.title2_Avatar}>Co_founders of Baserate</span>
                            </div>

                        </div>

                        <div className={styles.view_text_avatar1}>
                            <span className={styles.text_avatar1}>"Blockchain Technology will allow forecasts to be <br /> transparent, secure, immutable and more easily tracked.”</span>
                        </div>
                    </div>

                </div>

                <div className={styles.view_text_center_bottom}>
                    <span className={styles.text_center_bottom}>The Universal Trading Protocol <br /> specializes in multichain</span>
                </div>

                <div className={styles.view_group}>
                    <img className={styles.img_group} src={group1} />
                    <img className={styles.img_group} src={group2} />
                    <img className={styles.img_group} src={group3} />
                    <img className={styles.img_group} src={group4} />
                    <img className={styles.img_group} src={group5} />
                </div>

            </div>
        </div>
    )
}

export default Section5;