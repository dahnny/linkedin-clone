import styled from "styled-components";
import PostModal from "./PostModal";
import { useState, useEffect } from "react";
import { getArticlesAPI } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesAPI());
  }, [dispatch]);
  const articles = useSelector((state) => state.articles.articles);
  console.log(articles.length);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target, e.currentTarget, showModal);
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };
  return (
    <>
      {articles.length === 0 ? (
        <p>There are no articles</p>
      ) : (
        <Container>
          <ShareBox>
            Share
            <div>
              <img src="/images/user.svg" alt="" />
              <button onClick={(e) => handleClick(e)}>Start a post</button>
            </div>
            <div>
              <button>
                <img src="/images/photo-icon.svg" alt="" />
                <span>Photo</span>
              </button>
              <button>
                <img src="/images/video-icon.svg" alt="" />
                <span>Video</span>
              </button>
              <button>
                <img src="/images/event-icon.svg" alt="" />
                <span>Event</span>
              </button>
              <button>
                <img src="/images/article-icon.svg" alt="" />
                <span>Write Article</span>
              </button>
            </div>
          </ShareBox>
          {articles.length > 0 &&
            articles.map((article, key) => (
              <Article>
                <SharedActor>
                  <a>
                    <img src={article.actor.image} alt="" />
                    <div>
                      <span>{article.actor.title}</span>
                      <span>{article.actor.description}</span>
                      <span>
                        {article.actor.date.toDate().toLocaleDateString()}
                      </span>
                    </div>
                  </a>
                  <button>
                    <img src="/images/ellipsis.svg" alt="" />
                  </button>
                </SharedActor>
                <Description>{article.description}</Description>
                <SharedImg>
                  <a>
                    {!article.sharedImg && article.video ? (
                      <ReactPlayer width={"100%"} url={article.video} />
                    ) : (
                      <img src={article.sharedImg} alt="" />
                    )}
                  </a>
                </SharedImg>
                <SocialCounts>
                  <li>
                    <button>
                      <img
                        src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                        alt=""
                      />
                      <img
                        src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
                        alt=""
                      />
                      <img
                        src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                        alt=""
                      />
                      <span>7</span>
                    </button>
                  </li>
                  <li>
                    <a>{article.comments} comments</a>
                  </li>
                </SocialCounts>
                <SocialActions>
                  <button>
                    <img src="/images/like-icon.svg" alt="" />
                    <span>Like</span>
                  </button>
                  <button>
                    <img src="/images/comments-icon.svg" alt="" />
                    <span>Comments</span>
                  </button>
                  <button>
                    <img src="/images/share-icon.svg" alt="" />
                    <span>Share</span>
                  </button>
                  <button>
                    <img src="/images/send-icon.svg" alt="" />
                    <span>Send</span>
                  </button>
                </SocialActions>
              </Article>
            ))}

          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;

    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
    }
    span {
      text-align: left;
      &:first-child {
        font-size: 14px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }
      &:nth-child(n + 1) {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      border: none;
      background-color: white;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    background-color: white;

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

export default Main;
