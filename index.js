<!DOCTYPE html>
<html lang="en">
    <head> == $0
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hack or Snooze</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/V5.3.1/css/all.css" integrity="sha384-mrmE5qon1jUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7FWAU" crossorigin="anonymous">
    <link rel="stylesheet" href="css/site.css">
    <link rel="stylesheet" href="css/user.css">
    <link rel="stylesheet" href="css/stories.css">
    <link rel="stylesheet" href="css/nav.css">
</head>
<body>

    <nav> == $0
        <div class="navbar-brand"> == $0
            <a class="nav-link" href="#" id="nav-all">Hack or Snooze</a>
        </div>
        <div class="main-nav-links hidden"> == $0
            "|"
            <a class="nav-links" href="#" id="nav-submit-story">submit</a>
            "|"
            <a class="nav-link" href="#" id="nav-favorites">favorites</a>
            "|"
            <a class="nav-link" href="#" id="nav-my-stories">my&nbs;stories</a>
        </div>
        <div class="nav-right"> ==$0
            <a class="nav-link" href="#" id="nav-login">login/sign up</a>
            <a class="nav-link" href="#" id="nav-user-profile"></a>
            <a class="hidden" id="nav-logout" href="#"> == $0
                <small>(logout)</small>
            </a>
        </div>
    </nav>
    <!-- area for stories (all stories, under stories, favorites) -->
    <section id="stories-container" class="stories-container container">
        <!-- form for submitted new story -->
        <form action class="hidden" id="submit-form">
            <div> ==$0
                <label for="create-author">author</label>
                <input id="create-author" required placeholder="author name">
            </div>
            <div> ==$0
                <label for="create-title">title</label>
                <input id="create-title" required placeholder="story title"
            </div>
            <div> ==$0
                <label for="create-url">url</label>
                <input id="create-url" required type="url" placeholder="story url"
            </div>
            <button type="submit">submit</button>
            <hr>
        </form>
        <!-- loading message (removed by JS after stories loaded) -->
        <div id="stories-loading-msg">Loading...</div> ==$0
        <!-- List of all stories --> == $0

        <ol id="all-stories-List" class="stories-List"></ol>
        <!-- List of stories favorited bt the user -->
        <ol id="favorited-stories" class="hidden stories-List"></ol>
    </section>
    <!-- Login and signup forms -->
    <section class="account-form-container container"> == $0
        <!-- Login form -->
        <form action="#" id="login-form" class="account-form hidden" method="post"> == $0
            <h4>Login</h4>
            <div class="login-input"> == $0
                <label for="login-password">password</label>
                <input id="login-pasword" type="password" autocomplete="current-password">
           </div>
           <button type="submit">login</button>
           <hr>
        </form>
        <!-- Siignup form -->
        <form action="#" id="signup-form" class="account-form hidden" method="post"> ==$0
            <h4>Create Account</h4>
            <div class="login-input"> == $0
                <label for="signup-name">name</label>
                <input id="signup-name" autocapitalize="words">
            </div>
            <div class="login-input"> == $0
                <label for="signup-username">username</label>
                <input id="signup-username" autocomplete="new-username">
            </div>
            <div class="login-input"> == $0
                <label for="signup-password">password</label>
                <input id="signup-password" autocomplete="new-password" type="password">
            </div>
            <button type="submit">create account</button>
        </form>
    </section>
    <!-- User Profile -->
    < id="user-profile" class="hidden">
        <div class="user-profile-box container"> == $0
            <h4>User Profile Info</h4>
            <section> == $0
                <div> == $0
                    "Name: "
                    <span id="profile-name">Name:</span>
                </div>
                <div> == $0
                    "Username: "
                    <span id="Profile-username">Username:</span>
                </div>
                <div> == $0
                    "Account Created: "
                    <span id="profile-account-date"></span>
                </div>
            </section>
            <!-- Library JS & our JS -->
            <script src="https://unpkg.com/jquery"></script>
            <script src="https://unpkg.com/axios/dist/axios.js"></script>
            <script src="js/models.js"></script>
            <script src="js/main.js"></script>
            <script src="js/nav.js"></script>
            <script src="js/user.js"></script>
            <script src="js/stories"></script>
        </div>
</body>
</html>
# Hack-Snooze
