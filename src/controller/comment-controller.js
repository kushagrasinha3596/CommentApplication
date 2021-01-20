import React, {Component} from 'react';
import Comment from '../component/comment-component';
import DataModel from '../common/comment-data-model';

class CommentBox extends Component{

    constructor(){
        super();

        //declaraing state
        this.state = {
            comments: [{
                defaultText: 'Comment...',
                text: '',
                likes: 0,
                dislikes: 0,
                replies: []
            }]
        }
        this.addComment = this.addComment.bind(this);
        this.addReply = this.addReply.bind(this);
        this.addLikes = this.addLikes.bind(this);
        this.addDislikes = this.addDislikes.bind(this);
    }

    addComment = (event) => {
    }

    addReply = (event) => {

    }

    addLikes = (event) => {

    }

    addDislikes = (event) => {
        
    }

    render(){
        return (
            <React.Fragment>
                {
                    this.state.comments.length ? (
                        this.state.comments.map((commentObj, commentIndex) => {
                            return (
                                <Comment
                                    key={Math.random()*commentIndex}
                                    defaultText={commentObj.defaultText}
                                    text={commentObj.text}
                                    likes={commentObj.likes}
                                    dislikes={commentObj.dislikes}
                                    replies={commentObj.replies}
                                    addComment={this.addComment}
                                ></Comment>
                            )
                        })
                    ) : null
                }
            </React.Fragment>
        )
    }
}

export default CommentBox;