class Github {
    constructor() {
        this.url = {
            user: 'https://api.github.com/users/anricoj1',
            repos: 'https://api.github.com/users/anricoj1/repos'
        }
    }

    async getUser() {
        return await fetch(this.url.user).then(response => response.json());
    }

    async getRepos() {
        return await fetch(this.url.repos).then(response => response.json());
    }
}

export default Github;