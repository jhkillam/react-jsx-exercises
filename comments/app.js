let ProfilePic = () => {
    return <span><img src="https://www.w3schools.com/howto/img_avatar.png" width="100" /><br/>
    </span>
}

let CommentBody = () => {
    return <span>
      <b>User name</b>
      <br/>
      Now attack human yet flex claws on the human's belly and purr like a lawnmower
    </span>
}

let Comment = () => {
    return <span>
      <div className="container">
        <ProfilePic/>
        <CommentBody/><hr/>
      </div>
    </span>
}

let Comments = () => {
    return <span>
      <Comment/>
      <Comment/>
      <Comment/>
      </span>
}

ReactDOM.render(<Comments />, document.getElementById('root'))