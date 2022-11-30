import IconDelete from "../images/icon-delete.svg";
import IconEdit from "../images/icon-edit.svg";
import iconReply from "../images/icon-reply.svg";

function YourCard(props) {
  function deleteCard() {
    let yourCard = document.querySelector(".your-card-container");
    let deleteCard = document.querySelector(".delete-card-container");
    deleteCard.style.display = "none";
    yourCard.style.display = "none";
    console.log("Deleted");
  }
  function clickHandler() {
    let deleteCard = document.querySelector(".delete-card-container");
    deleteCard.style.display = "block";
    let overlay = document.querySelector(".overlay-background");
    overlay.style.display = "block";
    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
      deleteCard.style.display = "none";
    });
  }
  
  function cancelBtn() {
    console.log("Canceled");
    let overlay = document.querySelector(".overlay-background");
    overlay.style.display = "none";
    let deleteCard = document.querySelector(".delete-card-container");
    deleteCard.style.display = "none";
  }
  return (
    <div className="your-card-container">
      <div className="your-card-left-section">
        <div className="score-table" id="score-table" >
          <div className="plus-container"></div>
          <div className="score">
            <span>{props.score}</span>
          </div>
          <div className="minus-container"></div>
        </div>
        <div className="mobile-edit-container">
          <div className="delete-container" onClick={clickHandler}>
                <img src={IconDelete} alt="icon-delete" />
                <span className="delete-span">Delete</span>
              </div>
              <div className="edit-container">
                <img src={IconEdit} alt="icon-edit" />
                <span className="edit-span">Edit</span>
              </div>
        </div>
      </div>
      <div className="your-card-right-section">
        <div className="comment-right-section">
          <div className="right-section-header">
            <div className="user-container">
              <img src={props.image} alt="juliusomo" className="user-image" />
              <span className="user-username">{props.username}</span>
              <div className="your-card-icon">
                <span>you</span>
              </div>
              <span className="createdAt">{props.createdAt}</span>
            </div>
            <div className="changes-div">
              <div className="overlay-background"></div>
              <div className="delete-card-container">
                <div className="delete-content">
                  <span className="delete-content-header">Delete Comment</span>
                  <div className="delete-content-main-container">
                    <span className="delete-content-main">
                      Are you sure you want to delete this comment? This will
                      remove the comment and can't be undone.
                    </span>
                  </div>
                  <div className="delete-content-btns">
                    <button onClick={cancelBtn} className="cancel-btn">
                      no, cancel
                    </button>
                    <button onClick={deleteCard} className="delete-btn">
                      yes, delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="delete-container" onClick={clickHandler}>
                <img src={IconDelete} alt="icon-delete" />
                <span className="delete-span">Delete</span>
              </div>
              <div className="edit-container">
                <img src={IconEdit} alt="icon-edit" />
                <span className="edit-span">Edit</span>
              </div>
            </div>
          </div>
          <div className="card-content">
            <span>{props.content}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourCard;
