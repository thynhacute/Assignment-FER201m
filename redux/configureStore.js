import {createStore, combineReducers, applyMiddleware } from 'redux';

. . .

import thunk from 'redux-thunk';
import logger from 'redux-logger';
 
. . .

        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)


