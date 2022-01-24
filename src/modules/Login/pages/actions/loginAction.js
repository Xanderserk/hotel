import { BaseActions } from '../../../Global/actions/baseActions';
import { AuthService } from '../authService/authService';
import { BaseService } from '../../../Global/services/baseServices';


export class LoginAction extends BaseActions {
    static DEFAULT_URL = 'https://rivenvss-hotel.herokuapp.com/oauth/';
    
    static getAuthorizationAccessUser = (username, password) => {
        console.log('started getAuthorizationAccessUser');

        let params = new FormData();
        params.append('grant_type', 'password');
        params.append('username', username);
        params.append('password', password);
        params.append('scope','openid');

        return LoginAction.apiResource(
            'token',
            BaseService.POST_METHOD,
            params,
            {
                'Authorization': 'Basic bXktY2xpZW50Om15LXNlY3JldA==',
            }
        )
    }
}
