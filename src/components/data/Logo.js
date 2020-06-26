class Logo {
    constructor(name, data, icon) {
        this.name = name;
        this.data = data;
        this.icon = icon;
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
}

class allLogos extends Logo {
    getAll() {
        const logos = [
            new Logo('Github', 0, "fa fa-github fa-lg"),
            new Logo('LinkedIn', 0, "fa fa-linkedin fa-lg"),
            new Logo('Twitter', 0, "fa fa-twitter fa-lg")
        ];
        return logos;
    }
}
export default allLogos;