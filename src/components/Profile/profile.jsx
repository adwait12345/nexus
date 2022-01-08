import React from 'react'
import './profile.css';
export default function Profile() {
    return (
        <div className="__next">
        <div className="student-dashboard">
            <div className = "right-section">
                <div id="myProfile">
                    <div className="title-bar">
                        <h2 className="grow">
                            <b style="color: var(--grey-100);">My Profile</b>
                        </h2>
                    </div>
                    <div className="paper">
                        <div className="head">
                            <div className="image-overlay">
                                <span className ="img">
                                    <img src="lexa.jpg" alt="Profile Photo" />
                                </span>
                            </div>
                            <div style="margin-bottom:0.8rem;">
                                <h4 style="margin-bottom:0.5rem; padding-top: 20px;">
                                    Alex
                                    Abernathy
                                </h4>
                                @
                                alex_abernathy
                                <br/>
                                <div className="cta">
                                    <button className="primary-outlined">
                                        <div className ="flex j-center">
                                            Edit Profile
                                        </div>
                                    </button>
                                    <button className="grey-outlined">Follow/Following</button>
                                </div>
                            </div>
                        </div>
                        <p style="margin: 2rem 0px;">Enthusiast</p>
                        {/* <!--YAha roka hu div className="ant-tabs ant-tabs-top"--> */}
                        <div className="ant-tabs ant-tabs-top">
                            <div role="tablist" className ="ant-tabs-nav">
                                <div className="ant-tabs-tab ant-tabs-tab-active">
                                    <div role="tab" aria-selected="true" className ="ant-tabs-tab-btn" tableindex="0" id="rc-tabs-1-tab-1" aria-controls="rc-tabs-1-panel-1">Posts</div>
                                    {/* <!-- <div className="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style="left: 0px; width: 33px;"></div> --> */}
                                    <div className="ant-tabs-content-holder">
                                        <div className="posts">
                                            <span className="grey">There's nothing to show here.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
