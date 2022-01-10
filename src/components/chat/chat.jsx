import React from 'react'
// import './chat.css';
export default function Chat() {
    return (
<div className="grid">
      {/* <!-- App background --> */}
      <div className="top-chat"></div>
      <div className="bottom"></div>
      {/* <!-- App --> */}
      <div className="app">
        <div className="sidebar">
          {/* <!-- Sidebar header --> */}
          <div className="sidebar-header">
            <img src="images/me.jpg" />
            <span className = "profile-header">Friend List</span>
            <div className="sidebar-header-icons">
              <img src="images/menu-icon.svg" />
            </div>
          </div>
          {/* <!-- Sidebar notifications --> */}
          <div className="sidebar-notifications">
            <img src="images/notifications.svg" />
            <div className="sidebar-notifications-message">
              <a href="#"
                >Get Notified of Recent Happenings <img src="images/gt-arrow.svg"
              /></a>
            </div>
          </div>
          {/* <!-- Sidebar search chat --> */}
          <div className="search-chat">
            <div className="search-bar">
              <img src="images/search-icon.svg" />
              <input type="text" placeholder="Search for a friend" />
            </div>
          </div>
          {/* <!-- Chats --> */}
          <div className="chats">
            {/* <!-- Alice --> */}
            <div className="chat">
              <div className="chat-left">
                <img src="images/alice.jpg" />
              </div>
              <div className="chat-right">
                <div className="chat-right-top">
                  <span className="contact-name">Alice</span>
                </div>
                <div className="chat-right-bottom">
                  <div className="chat-right-bottom-left">
                    <span className="chat-message-typing">online</span>
                  </div>
                  <div className="chat-right-bottom-right">
                    <span className="chat-options">
                      <img src="images/down-arrow.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Henry --> */}
            <div className="chat">
              <div className="chat-left">
                <img src="images/Henry.jpg" />
              </div>
              <div className="chat-right">
                <div className="chat-right-top">
                  <span className="contact-name">Henry</span>
                </div>
                <div className="chat-right-bottom">
                  <div className="chat-right-bottom-left">
                    <span className="chat-message-group"
                      >offline</span
                    >
                  </div>
                  <div className="chat-right-bottom-right">
                    <span className="chat-options">
                      <img src="images/down-arrow.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- David --> */}
            <div className="chat">
              <div className="chat-left">
                <img src="images/david.jpg" />
              </div>
              <div className="chat-right">
                <div className="chat-right-top">
                  <span className="contact-name">David</span>
                </div>
                <div className="chat-right-bottom">
                  <div className="chat-right-bottom-left">
                    <span className="chat-message">offline</span>
                  </div>
                  <div className="chat-right-bottom-right">
                    <span className="chat-options">
                      <img src="images/down-arrow.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Harley --> */}
            <div className="chat active-chat">
              <div className="chat-left">
                <img src="images/harley.jpg" />
              </div>
              <div className="chat-right">
                <div className="chat-right-top">
                  <span className="contact-name">Harley</span>
                </div>
                <div className="chat-right-bottom">
                  <div className="chat-right-bottom-left">
                    <span className ="chat-message-typing">online</span>
                  </div>
                  <div className="chat-right-bottom-right">
                    <span className="chat-options">
                      <img src="images/down-arrow.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Lexa --> */}
            <div className="chat">
              <div className="chat-left">
                <img src="images/lexa.jpg" />
              </div>
              <div className="chat-right">
                <div className="chat-right-top">
                  <span className="contact-name">Lexa 💛</span>
                </div>
                <div className="chat-right-bottom">
                  <div className="chat-right-bottom-left">
                    <span className ="chat-message-typing">online</span>
                  </div>
                  <div className="chat-right-bottom-right">
                    <span className="chat-options">
                      <img src="images/down-arrow.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Cristy  --> */}
            <div className="chat">
              <div className="chat-left">
                <img src="images/cristy.jpg" />
              </div>
              <div className="chat-right">
                <div className="chat-right-top">
                  <span className="contact-name">Cristy</span>
                </div>
                <div className="chat-right-bottom">
                  <div className="chat-right-bottom-left">
                    <span className="chat-message">offline</span>
                  </div>
                  <div className="chat-right-bottom-right">
                    <span className="chat-options">
                      <img src="images/down-arrow.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Jason --> */}
            <div className="chat">
              <div className="chat-left">
                <img src="images/jason.jpg" />
              </div>
              <div className="chat-right">
                <div className="chat-right-top">
                  <span className="contact-name">Jason</span>
                </div>
                <div className="chat-right-bottom">
                  <div className="chat-right-bottom-left">
                    <span className="chat-message-typing">online</span>
                  </div>
                  <div className="chat-right-bottom-right">
                    <span className="chat-options">
                      <img src="images/down-arrow.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Marsha --> */}
            <div className="chat">
              <div className="chat-left">
                <img src="images/marsha.jpg" />
              </div>
              <div className="chat-right">
                <div className="chat-right-top">
                  <span className="contact-name">Marsha</span>
                </div>
                <div className="chat-right-bottom">
                  <div className="chat-right-bottom-left">
                    <span className="chat-message">offline</span>
                  </div>
                  <div className="chat-right-bottom-right">
                    <span className="chat-options">
                      <img src="images/down-arrow.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          {/* <!-- Main chat window header --> */}
          <div className="chat-window-header">
            <div className="chat-window-header-left">
              <img
                className="chat-window-contact-image"
                src="images/harley.jpg"
              />
              <div className="contact-name-and-status-container">
                <span className="chat-window-contact-name">Harley</span>
                <span className="main-header-right-text">Online</span>
              </div>
            </div>
            <div className="chat-window-header-right">

              <img className="chat-window-menu-icon" src="images/menu-icon.svg" />
            </div>
          </div>
          {/* <!-- Chat window --> */}
          <div className="chat-window">
            <div className="sender">
              <span className="sender-message">Hello, How are you?</span>
              <span className="message-time">21:32</span>
            </div>
            <div className="receiver">
              <span className="receiver-message"
                >I'm doing fine! What about you??</span
              >
              <span className="message-time">21:35</span>
            </div>
            <div className="sender">
              <span className="sender-message"
                >I'm good but too</span
              >
              <span className="message-time">21:35</span>
            </div>
            <div className="receiver">
              <span className="receiver-message">Check this</span>
              <span className="message-time">21:36</span>
            </div>
            <div className="receiver">
              <span className="receiver-message">😝😝😝</span>
              <span className="message-time">21:36</span>
            </div>
            <div className="receiver image-message">
              <span className="receiver-message"
                ><img src="./images/meme-coding.png"
              /></span>
              <span className="message-time">21:36</span>
            </div>
            <div className="receiver image-message">
              <span className="receiver-message"
                ><img src="./images/meme-khaleesi.jpg"
              /></span>
              <span className="message-time">21:36</span>
            </div>
            
            <div className="sender">

              <span className="sender-message">hahahahahah</span>
              <span className="message-time">21:39</span>
            </div>
            <div className="sender">
              <span className="sender-message">🤣🤣🤣🤣</span>
              <span className="message-time">21:39</span>
            </div>
            {/* <!-- Type message bar --> */}
            <div className="type-message-bar">
              <div className="type-message-bar-center">
                <input type="text" placeholder="Type a message" />
              </div>
              <div className="type-message-bar-right">
                <img src="images/play-audio-icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
