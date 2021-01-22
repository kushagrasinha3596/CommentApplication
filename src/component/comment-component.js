import React from 'react';

const comment = (props) => {

    return (
        <div style={{
            width: '100%',
            height: 'auto',
            border: '2px solid grey',
            margin: '2% 0 2% 0'
        }}
        id={`comment-${props.commentIndex}`}>
            <div>
                <div>
                    <input type="text"  value={(props.text.length > 0) ? props.text : props.defaultText}></input>
                </div>
                {
                    props.replies.length ? (
                        props.replies.map((replyObj, replyIndex) => (
                            <div key={Math.random() * replyIndex}>
                                <input type="text">{replyObj.content ? replyObj.content : ''}</input>
                                <p>
                                    <span>Likes {replyObj.like ? replyObj.like : ''}</span>
                                    <span>Dislikes {replyObj.dislikes ? replyObj.dislikes : ''}</span>
                                </p>
                            </div>
                        ))) : null
                }
            </div>
                <div style={{
                    display:'flex'
                }}>
                    <button style={{
                        margin:'1%'
                    }}>Like {(props.likes > 0 ? props.likes : '')}</button>
                    <button style={{
                        margin:'1%'
                    }}>Dislike {(props.dislikes > 0 ? props.dislikes : '')}</button>
                    <button style={{
                        margin:'1%'
                    }}>Reply</button>
                </div>
        </div>
    );
}

export default comment;