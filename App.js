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
                   //window.alert('User Not Found');
               }else{
                   //Show Profile
               }
             })
           } 
    });

}else{
    console.log("No Response..!")
}
