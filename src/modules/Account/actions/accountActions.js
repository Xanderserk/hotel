import { BaseActions } from '../../Global/actions/baseActions';
import { BaseService } from '../../Global/services/baseServices';

export class AccountAction extends BaseActions {
    static DEFAULT_URL = 'https://rivenvss-hotel.herokuapp.com/users/';

    static getAuthorizedUser = (params) => {
        return AccountAction.apiResource(
            'registration',
            BaseService.POST_METHOD,
            params,
            {
                'Content-type': 'application/json',
                'Authorization': 'Basic bXktY2xpZW50Om15LXNlY3JldA=='
            }
        )
    }
}
