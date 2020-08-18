/* import react to use components in constructor */
import React from 'react';

/* GitHub */
import GitHubComponent from './component/github/GitHubComponent';

/* Twitter */
import TwitterComponent from './component/twitter/TwitterComponent';

/* LinkedIn */
import LinkedInComponent from './component/linkedin/LinkedInComponent';

class API {
    constructor(name, icon, component) {
        this.name = name;
        this.icon = icon;
        this.component = component;
    }

    getName() {
        return this.name;
    }

    getIcon() {
        return this.icon;
    }

    getComponent() {
        return this.component;
    }
}

class APIs extends API {

    getAll() {
        return [
            new API('Github', "fa fa-github fa-lg", <GitHubComponent />),
            new API('LinkedIn', "fa fa-linkedin fa-lg", <LinkedInComponent />),
            new API('Twitter', "fa fa-twitter fa-lg", <TwitterComponent />)
        ];
    }
}
export default APIs;