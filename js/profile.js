let local = localStorage.getItem("user");
// let local = 2;
let body = document.querySelector("body");

fetch("../json/users.json")
    .then(response => {
        return response.json();
    })
    .then(data =>{
        data.forEach(e=>{
            if(!local){ 
                body.innerHTML=/*html*/`<div class="container">
                    <div class="login-title">Login</div>
                    <form class="form" action="profile.html">
                        <label>Email:</label>
                        <input type="email" id="email" required>
                        <label>Password:</label>
                        <input type="password" id="password" required>
                        <input type="submit" value="Login">
                    </form>
                </div>
                <nav>
                    <a class="button" href="main.html"><i class="fa-solid fa-house"></i></a>
                    <a class="button" href=""><i class="fa-solid fa-briefcase"></i></a>
                    <a class="button" href=""><i  class="fa-solid fa-bell"></i></a>
                    <a class="button active" href="profile.html"><i class="fa-solid fa-user button-active"></i></a>
                </nav>`
            }else if(e.id==local){
                body.innerHTML=/*html*/`<header>
                <div class="user">
                    <img class="user_img" src=${(e.avatar)?(e.avatar):("https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.webp")}>
                    <div class="mid">
                        <div class="mid_name">${e.name+" "+e.surname}</div>
                        <div class="mid_a">@${e.username}</div>
                    </div>
                    <div class="btn_opt"><i class="fa-solid fa-bars"></i></div>
                </div>
            </header>
            <main>
                <div class="cuadro">
                    <div class="title">Settings</div>
                    <section>
                        <div class="sec-title">Account</div>
                        <div class="content">
                            <div class="left">
                                <div class="left-up">Username</div>
                                <div class="left-bot">${e.username}</div>
                            </div>
                            <div class="btn-content">Edit</div>
                        </div>
                    </section>
                    <section>
                        <div class="sec-title">Notifications</div>
                        <div class="content">
                            <div class="left">
                                <div class="left-up">Email Notifications</div>
                                <div class="left-bot">Enabled</div>
                            </div>
                            <div class="btn-content">Manage</div>
                        </div>
                    </section>
                    <section>
                        <div class="sec-title">Security</div>
                        <div class="content">
                            <div class="left">
                                <div class="left-up">Two-Factor Authentication</div>
                                <div class="left-bot">Enabled</div>
                            </div>
                            <div class="btn-content">Manage</div>
                        </div>
                    </section>
                </div>
                <div class="cuadro">
                    <div class="logout"><div class="btn-logout">Logout</div></div>
                </div>
            </main>
            <nav>
                <a class="button" href="main.html"><i class="fa-solid fa-house"></i></a>
                <a class="button" href=""><i class="fa-solid fa-briefcase"></i></a>
                <a class="button" href=""><i  class="fa-solid fa-bell"></i></a>
                <a class="button active" href="profile.html"><i class="fa-solid fa-user button-active"></i></a>
            </nav>`
            }else{0};
        })
    })