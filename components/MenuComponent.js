import { baseUrl } from '../shared/baseUrl';

. . .

                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    
. . .

Then, open HomeComponent.js and update it as follows:
. . .

import { baseUrl } from '../shared/baseUrl';

. . .

                <CardImg src={baseUrl + item.image} alt={item.name} />
                
. . .

                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />




