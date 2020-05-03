import React from "react";
import {NavLink} from "react-router-dom";
import style from "./HomePage.module.scss";
import mobileSVG from "../../assets/img/main-page/mobile.png";
import clean_design from "../../assets/img/main-page/clean_design.svg";
import secure_data from "../../assets/img/main-page/secure_data.png";
import retina_ready from "../../assets/img/main-page/retina_ready.png";
import macbook from "../../assets/img/main-page/macbook.png";
import basic from "../../assets/img/main-page/basic.png";
import standard from "../../assets/img/main-page/standard.png";
import unlimited from "../../assets/img/main-page/unlimited.png";
import underline from "../../assets/img/main-page/line.svg";


export const HomePage = () => {
    return (
        <div className={style.body}>
            <header>
                <div><h2>AppCo</h2></div>
                <div>
                    <div className={style.description}>
                        <h1>
                            <b>Brainstorming</b> for desired perfect Usability
                        </h1>
                        <p>
                            <span>
                                Our design projects are fresh and simple and will benefit your business greatly. Learn more
                                about our work!
                            </span>
                        </p>
                        <NavLink to={"/users-list/1"}>View Stats</NavLink>
                    </div>
                    <div className={style.mobile}>
                        <img src={mobileSVG} alt=""/>
                    </div>
                </div>
            </header>
            <main>
                <div className={style.reasonsBlock}>
                    <h3>Why <b>small business owners love</b> AppCo?</h3>
                    <span>
                        Our design projects are fresh and simple and will benefit your business greatly. Learn more
                        about our work!
                    </span>
                    <div className={style.reasons}>
                        <div className={style.reason}>
                            <img src={clean_design} alt=""/>
                            <h4>Clean Design</h4>
                            <p>Increase sales by showing true dynamics of your website.</p>
                        </div>
                        <div className={style.reason}>
                            <img src={secure_data} alt=""/>
                            <h4>Secure Data</h4>
                            <p>Build your online store’s trust using Social Proof & Urgency.</p>
                        </div>
                        <div className={style.reason}>
                            <img src={retina_ready} alt=""/>
                            <h4>Retina Ready</h4>
                            <p>Realize importance of social proof in customer’s purchase decision.</p>
                        </div>
                    </div>
                </div>
                <div className={style.about}>
                    <div className={style.aboutFlex}>
                        <div className={style.aboutDescr}>
                            <h3>Start Managing your apps business, more faster</h3>
                            <p>Objectively deliver professional value with diverse web-readiness. Collaboratively
                                transition
                                wireless customer service without goal-oriented catalysts for change.
                                Collaboratively.</p>
                            <NavLink to={"/users-list/1"}>Learn more</NavLink>
                        </div>
                        <div className={style.macbook}>
                            <img src={macbook} alt=""/>
                        </div>
                    </div>
                </div>

                <div className={style.packages}>
                    <h3><b>Afforadble Pricing and Packages </b>
                        choose your best one</h3>
                    <p>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</p>
                    <div className={style.packItems}>
                        <div>
                            <h4>Basic</h4>
                            <img src={basic} alt=""/>
                            <h1>$29</h1>
                            <img src={underline} alt=""/>
                            <p>Push Notifications</p>
                            <p>Data Transfer</p>
                            <p>SQL Database</p>
                            <p>Search & SEO Analytics</p>
                            <p>24/7 Phone Support</p>
                            <p>2 months technical support</p>
                            <p>2+ profitable keyword</p>
                            <NavLink to={"/users-list/1"}>Purchase now</NavLink>
                        </div>
                        <div className={style.packCenter}>
                            <h4>Standard</h4>
                            <img src={standard} alt=""/>
                            <h1>$149</h1>
                            <img src={underline} alt=""/>
                            <p>Push Notifications</p>
                            <p>Data Transfer</p>
                            <p>SQL Database</p>
                            <p>Search & SEO Analytics</p>
                            <p>24/7 Phone Support</p>
                            <p>2 months technical support</p>
                            <p>2+ profitable keyword</p>
                            <NavLink to={"/users-list/1"}>Purchase now</NavLink>
                        </div>
                        <div>
                            <h4>Unlimited</h4>
                            <img src={unlimited} alt=""/>
                            <h1>$39</h1>
                            <img src={underline} alt=""/>
                            <p>Push Notifications</p>
                            <p>Data Transfer</p>
                            <p>SQL Database</p>
                            <p>Search & SEO Analytics</p>
                            <p>24/7 Phone Support</p>
                            <p>2 months technical support</p>
                            <p>2+ profitable keyword</p>
                            <NavLink to={"/users-list/1"}>Purchase now</NavLink>
                        </div>
                    </div>
                    <span>If you need custom services or Need more?
                        <NavLink to={"/users-list/1"} className={style.contactUs}> Contact us</NavLink></span>
                </div>
            </main>

            <footer>
                <div>
                    <div className={style.footerForm}>
                        <input type="text" placeholder="Enter your mail"/>
                        <button>Subscribe</button>
                    </div>
                    <div className={style.underFooter}>
                        <h3>AppCo</h3>
                        <span>All rights reserved by ThemeTags</span>
                        <span>Copyrights © 2019.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};