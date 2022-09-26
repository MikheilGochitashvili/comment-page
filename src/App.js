import CommentCard from "./components/CommentCard";
import ReplyCard from "./components/ReplyCard";
import SendComment from "./components/SendComment";
import data from "./data";
import replyData from "./replydata";
import YourCard from "./components/YourCard";
import yourdata from "./yourdata";

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="comment-section">
            {data.map((item) => {
              return (
                <CommentCard
                  id={item.id}
                  image={item.image}
                  content={item.content}
                  createdAt={item.createdAt}
                  username={item.username}
                  score={item.score}
                />
              );
            })}
          </div>
          <div className="reply-outer-container">
            <div className="reply-inner-container">
              {replyData.map((item) => {
                return (
                  <ReplyCard
                    id={item.id}
                    image={item.image}
                    content={item.content}
                    createdAt={item.createdAt}
                    username={item.username}
                    score={item.score}
                    replyingTo={item.replyingTo}
                  />
                );
              })}
              {yourdata.map((item) => {
                return (
                  <YourCard
                    createdAt={item.createdAt}
                    content={item.content}
                    username={item.username}
                    image={item.image}
                    score={item.score}
                  />
                );
              })}
            </div>
          </div>
          <SendComment/>
        </div>
      </body>
    </div>
  );
}

export default App;
