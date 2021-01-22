import React from 'react';

const Post = (props) => {
    return (
        <React.Fragment>
                <div>
                    <p>Today is my birthday</p>
                </div>
                <div>
                    <button onClick={() => props.addCommentBox(new Date().getTime())}>Add Comment</button>
                </div>
        </React.Fragment>
    );
}

export default Post;