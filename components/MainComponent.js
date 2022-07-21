import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

. . .

  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))

. . .

            postComment={this.props.postComment}














