function RenderComments({comments, addComment, dishId}) {


    . . .
    
          <CommentForm dishId={dishId} addComment={addComment} />
    
    . . .
    
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    
    
    . . .
    
          <RenderComments comments={props.comments}
            addComment={props.addComment}
            dishId={props.dish.id}
          />
    

