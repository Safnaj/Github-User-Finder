class Github{
    
/**
 * Author Safnaj on 03/07/2019
 * Project Github-User-Finder
 **/

    constructor(){
        this.client_id = '8333fc3680f2476f6df5';
        this.client_secret = '233e425ed6e3e58bc61c608c17015266aefd91ad';
        this.repos_count = 5;
        this.repos_sort = 'created : asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
            
        const profile = await profileResponse.json(); //Storing Profile Response
        const repos = await repoResponse.json();      //Storing Repo Response
    
        return {
          profile,
          repos
        }
      }
}
