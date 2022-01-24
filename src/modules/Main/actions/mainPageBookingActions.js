import React from 'react'
import { BaseActions } from '../../Global/actions/baseActions';

export class MainPageBookingAction extends BaseActions {
    static DEFAULT_URL = 'https://rivenvss-hotel.herokuapp.com/rooms/';

    static getAuthorizedUser = (params) => {
        
        return MainPageBookingAction.apiResource(
            'free',
            'GET',
            params,
            {
                'Content-type': 'application/json',
                'Authorization': 'Basic bXktY2xpZW50Om15LXNlY3JldA=='
            }
        )
    }
}
