import React from 'react';

import GitHub from './classes/GitHub';
import GitHubComponent from './component/github/GitHubComponent';

class Logo {
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

class allLogos extends Logo {
    getAll() {
        const logos = [
            new Logo('Github', new GitHub().getUser(), "fa fa-github fa-lg", <GitHubComponent />),
            new Logo('LinkedIn', 0, "fa fa-linkedin fa-lg"),
            new Logo('Twitter', 0, "fa fa-twitter fa-lg")
        ];
        return logos;
    }
}
export default allLogos;