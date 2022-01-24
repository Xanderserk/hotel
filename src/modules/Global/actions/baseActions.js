import React from "react";
import { BaseService } from "../services/baseServices";
export class BaseActions extends React.Component {
    static DEFAULT_URL = '';
        
    static apiResource(url, method, params, headers) {
        let option = {
            method: method,
            headers: headers,
        };
        if (method === BaseService.POST_METHOD) {
            option.body = params;
        };

        let checkUrl = (url, method, params) => {
            let urlParams = '';
            Object.entries(params).forEach(([key, value]) => {
                urlParams += `${key}=${value}&`
            })
    
            return method === BaseService.POST_METHOD
                ? `${this.DEFAULT_URL}${url}`
                : `${this.DEFAULT_URL}${url}/?${urlParams.substring(0, urlParams.length - 1)}`
        }

        return fetch(`${checkUrl(url, method, params)}`, option)
            .then(res => res.json())
            .catch((err) => console.log(err))
    }
}
