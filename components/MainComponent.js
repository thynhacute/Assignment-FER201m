import { actions } from 'react-redux-form';

. . .

  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
  
. . .

              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />












