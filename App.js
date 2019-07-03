/**
 * Author Safnaj on 03/07/2019
 * Project Github-User-Finder
 **/

const github = new Github;
const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
if(searchUser!=null){

    searchUser.addEventListener('keyup', (e) => {
        const userText = e.target.value;
        if(userText !== ''){
            // Make http call
            github.getUser(userText).then(data => {
               if(data.profile.message == 'Not Found'){
                   ui.showAlert('User Not Found..!' , 'alert alert-danger');
               }else{
                   //Show Profile
                   ui.showProfile(data.profile);
                   ui.showRepos(data.repos);
               }
             })
        }else{
            //Clear Profile
            ui.clearProfile();
        } 
    });

}else{
    console.log("No Response..!")
}
