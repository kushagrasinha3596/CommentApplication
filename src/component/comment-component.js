import React from 'react';

const comment = (props) => {

    return (
        <React.Fragment>
            <div>
                <div>
                    <div>
                    <input type="text" onChange={props.addComment} value={(props.text.length > 0) ? props.text : props.defaultText}></input>
                    </div>
                    {
                       props.replies.length ? (
                        props.replies.map((replyObj, replyIndex) => (
                            <div key={Math.random()*replyIndex}>
                                <input type="text">{replyObj.content ? replyObj.content: ''}</input>
                                <p>
                                    <span>Likes {replyObj.like ? replyObj.like: ''}</span>
                                    <span>Dislikes {replyObj.dislikes ? replyObj.dislikes: ''}</span>
                                </p>
                            </div>
                        ))) : null
                    }
                </div>
                <div style={{
                    display: 'flex'
                }}>
                    <div>
                        <button>Like {(props.likes > 0 ? props.likes : '')}</button>
                        <button>Dislike {(props.dislikes > 0 ? props.dislikes : '')}</button>
                    </div>
                    <div>
                        <button>Reply</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default comment;