import React from "react";
import "./App.css";
import { dummyTweets } from "./static/dummyData";
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets); // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = (props) => {
  // props => 부모 클래스에서 뭔가를 받아온다는 뜻

  const { onClick } = props;
  // 구조 분해 할당
  return (
    <section className="sidebar">
      <i className="far fa-comment-dots" onClick={onClick}></i>
      <i className="far fa-bell" onClick={onClick}></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          {'total: ' + dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <footer className="footer">Copyright @ 2021 Jae</footer>;
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        const isParkHacker = tweet.username === "parkhacker";
        const tweetUserNameClass = isParkHacker
          ? "tweet__username tweet__username--purple"
          : "tweet__username";

        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">{<img src={tweet.picture} />}</div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                <span className={tweetUserNameClass}>{tweet.username}</span>
                <span className="tweet__createdAt">{tweet.createdAt}</span>
                <div className="tweet__message">{tweet.content}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      <Footer />
    </section>
  );
};

const App = () => {
  const handleOnClick = (event) => {
    if (event.target.classList.contains("fa-comment-dots"));
  };

  return (
    <div className="App">
      <main>
        <Sidebar onClick={handleOnClick} />
        <Features />
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };