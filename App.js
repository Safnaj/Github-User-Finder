//init Github.js
const github = new Github

//Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    if(e){
        const userText = e.target.value;
    }
    if(userText !== ''){
        //Make HTTP Call
        Github.getUser(userText).then(data => {
            console.log(data);
        })
    }
});
