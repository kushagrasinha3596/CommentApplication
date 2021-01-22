import React, {Component} from 'react';
import Comment from '../component/comment-component';
import CommentDataModel from '../common/comment-data-model';
import Post from '../component/post-component';

class CommentBox extends Component{

    constructor(){
        super();

        //declaraing state
        this.state = {
            comments: []
        }
        this.addCommentBox = this.addCommentBox.bind(this);
        this.addReply = this.addReply.bind(this);
        this.addLikes = this.addLikes.bind(this);
        this.addDislikes = this.addDislikes.bind(this);
    }

    addCommentBox = (commentId) => {
        let newCommentDataModel = CommentDataModel;
        if(newCommentDataModel && commentId){
            newCommentDataModel['id'] = commentId;
            this.setState((currState) => {
                currState.comments.push(newCommentDataModel);
                return currState;
            });
        }
    }

    addCommentContent = (event, commentId) => {
        let currentCommentObj = this.state.comments.find((commentObj) => {
            return commentObj['id'] === commentId;
        });
        if(currentCommentObj){
            currentCommentObj['text'] = event.target.value;
        }
    }

    addReply = (event) => {

    }

    addLikes = (event) => {

    }

    addDislikes = (event) => {
        
    }

    render(){
        return (
            <div style={{
                height: 'auto',
                width: '25%',
                border: '2px dashed black',
                padding: '1%',
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, 0%)'
            }}>

                <Post addCommentBox={this.addCommentBox}></Post>
                {
                    this.state.comments.length ? (
                        this.state.comments.map((commentObj, commentIndex) => {
                            return (
                                <Comment
                                    key={Math.random()*commentIndex}
                                    id={commentObj.id}
                                    defaultText={commentObj.defaultText}
                                    text={commentObj.text}
                                    likes={commentObj.likes}
                                    dislikes={commentObj.dislikes}
                                    replies={commentObj.replies}
                                    addCommentContent={this.addCommentContent}
                                ></Comment>
                            )
                        })
                    ) : null
                }
            </div>
        )
    }
}

export default CommentBox;