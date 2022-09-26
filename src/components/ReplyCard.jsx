import iconReply from "../images/icon-reply.svg";

function ReplyCard(props) {
  return (
    <div className="reply-card-container">
      <div className="reply-card-left-section">
        <div className="score-table" id="score-table" >
          <div className="plus-container"></div>
          <div className="score">
            <span>{props.score}</span>
          </div>
          <div className="minus-container"></div>
        </div>
        <div className="mobile-reply">
            <img src={iconReply} alt="reply-btn" />
            <span className="reply-span">Reply</span>
        </div>
      </div>
      <div className="reply-card-right-section">
        <div className="reply-card-right-section-header">
          <div className="user-container">
            <img src={props.image} alt="juliusomo" className="user-image" />
            <span className="user-username">{props.username}</span>
            <span className="createdAt">{props.createdAt}</span>
          </div>
          <div className="reply-container">
            <img src={iconReply} alt="reply-btn"/>
            <span className="reply-span">Reply</span>
          </div>
        </div>
        <div className="card-content">
          <span>
            <span id="reply-to">{`@${props.replyingTo} `}</span>
            {props.content}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ReplyCard;
