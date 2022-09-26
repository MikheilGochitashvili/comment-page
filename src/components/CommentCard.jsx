import iconReply from "../images/icon-reply.svg";

function CommentCard(props) {
  return (
    <div className="comment-container">
      <div className="comment-left-section">
        <div className="score-table" id="score-table">
          <div className="plus-container"></div>
          <div className="score">
            <span id={props.id}>{props.score}</span>
          </div>
          <div className="minus-container"></div>
        </div>
        <div className="mobile-reply">
            <img src={iconReply} alt="reply-btn" />
            <span className="reply-span">Reply</span>
          </div>
      </div>
      <div className="comment-right-section">
        <div className="right-section-header">
          <div className="user-container">
            <img src={props.image} alt="juliusomo" className="user-image" />
            <span className="user-username">{props.username}</span>
            <span className="createdAt">{props.createdAt}</span>
          </div>
          <div className="reply-container">
            <img src={iconReply} alt="reply-btn" />
            <span className="reply-span">Reply</span>
          </div>
        </div>
        <div className="card-content">
          <span>{props.content}</span>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
