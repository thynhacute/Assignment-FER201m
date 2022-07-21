import { createForms } from 'react-redux-form';

. . .

import { InitialFeedback } from './forms';

. . .

        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),


