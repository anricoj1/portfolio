/* import react to use components in constructor */
import React from 'react';

/* GitHub */
import GitHub from './classes/GitHub';
import GitHubComponent from './component/github/GitHubComponent';

/* Twitter */
import TwitterComponent from './component/twitter/TwitterComponent';

/* LinkedIn */
import LinkedInComponent from './component/linkedin/LinkedInComponent';

class API {
    constructor(name, data, icon, component) {
        this.name = name;
        this.data = data;
        this.icon = icon;
        this.component = component;
    }

    getName() {
        return this.name;
    }

    getData() {
        return this.data;
    }

    getIcon() {
        return this.icon;
    }

    getComponent() {
        return this.component;
    }
}

class allAPIs extends API {

    getAll() {
        const logos = [
            new API('Github', new GitHub().getUser(), "fa fa-github fa-lg", <GitHubComponent />),
            new API('LinkedIn', 0, "fa fa-linkedin fa-lg", <LinkedInComponent />),
            new API('Twitter', 0, "fa fa-twitter fa-lg", <TwitterComponent />)
        ];
        return logos;
    }
}
export default allAPIs;