import profileImage from "../images/image-juliusomo.png";

function SendComment() {
  return (
    <div className="comment-container" id="send-comment-container">
      <div className="send-comment-user-section">
        <img src={profileImage} alt="profile" className="profile" />
        <div className="mobile-send-container">
        <button className="send-btn">send</button>
      </div>
      </div>
      <div className="add-comment-section">
        <textarea
          name=""
          id="textarea"
          cols="30"
          rows="10"
          className="add-comment-input"
          placeholder="Add a comment..."
        ></textarea>
      </div>
      <div className="send-comment-section">
        <button className="send-btn">send</button>
      </div>
    </div>
  );
}

export default SendComment;
