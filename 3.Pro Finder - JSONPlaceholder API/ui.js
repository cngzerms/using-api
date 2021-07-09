class UI{
    constructor(){
        this.profileContainer = document.querySelector("#profile-container");
        this.alert = document.querySelector("#alert");
    }
    showProfile(profile){
        this.profileContainer.innerHTML = `
        <div class="card-grid">
            <div class="item1">
                <a href="#">
                    <img src="https://via.placeholder.com/300x300"
                </a>
            </div>
            <div class="item2">
                <h4>Contact</h4>
                <ul>
                    <li>
                        Name: ${profile.name}
                    </li>
                    <li>
                        Username: ${profile.username}
                    </li>
                    <li>
                        Email: ${profile.email}
                    </li>
                    <li>
                        Address: 
                            ${profile.address.street}
                            ${profile.address.city}
                            ${profile.address.zipcode}
                            ${profile.address.suite}
                    </li>
                    <li>
                        Phone: ${profile.phone}
                    </li>
                    <li>
                        Website: ${profile.website}
                    </li>
                    <li>
                        Company: ${profile.company.name}
                    </li>
                    
                </ul>
            </div>
        </div>
        <div class="card">
            <h4>Todo List </h4>
            <ul id="todo">
            
            </ul>
        </div>
        `;
    }
    showAlert(text){
        this.alert.innerHTML += `${text} is not found`
    }
    clear(){
        this.profileContainer.innerHTML = "";
        this.alert.innerHTML = "";
    }
    showTodos(todo){
        let html = "";
        todo.forEach(item => {
            if(item.completed){
                html += `
                <li class="success-todo"> ${item.title} </li>
                `
            }else {
                html += `
                <li class="unsuccess-todo"> ${item.title} </li>
                `
            }
        })
        this.profileContainer.querySelector("#todo").innerHTML = html;
    }
}