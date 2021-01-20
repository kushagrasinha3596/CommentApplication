class CommentDataModel{
    getModel(){
        return {
            id:'',
            defaultText: 'Comment...',
            text:'',
            likes:0,
            dislikes:0,
            replies: []
        }
    }
}

export default CommentDataModel;