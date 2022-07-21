import Home from './HomeComponent';



import { Switch, Route, Redirect } from 'react-router-dom';



  render() {

    const HomePage = () => {
      return(
          <Home 
          />
      );
    }

  }

          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>



