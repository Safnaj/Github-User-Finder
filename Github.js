class Github{
    constructor(){
        this.client_id = '8333fc3680f2476f6df5';
        this.client_secret = '233e425ed6e3e58bc61c608c17015266aefd91ad';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
    
        return {
          profile
        }
      }
}