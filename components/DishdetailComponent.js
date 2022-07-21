function RenderComments({comments, postComment, dishId}) {
      
    . . .
    
                        <CommentForm dishId={dishId} postComment={postComment} />
                        
    . . .
    
                this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
                
    . . .
    
                                postComment={props.postComment}
    

    

