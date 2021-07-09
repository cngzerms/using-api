const ui = new UI();
const searchProfile = document.querySelector("#search-profile");

searchProfile.addEventListener("keyup",(event) => {
    ui.clear();
    let text = event.target.value;

    if(text !== "") {
        text = text.charAt(0).toUpperCase() + text.slice(1);
        getProfile(text);
    }
})

function getProfile(username){
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/users?username=${username}`,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(profile){
            if(profile.length === 0){
                ui.showAlert(username);
            }
            if(profile.length > 0) {
                ui.showProfile(profile[0]);
                getTodos(profile[0].id);
            }
        },
        error: function(error) {
            console.log(error);
        }
    })
}

function getTodos(id){
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/todos?userId=${id}`,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(todos){
            ui.showTodos(todos);
        },
        error: function(error) {
            console.log(error);
        }
    })
}