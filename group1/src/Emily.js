import './Emily.css';

function Emily() {
  return (
    <div class="background">
        <header>
            <h1> Welcome to My Page! </h1>
        </header>

        <body>
            <div id="container">
                <div class="left">
                    <div class="box">
                        <img src={"./Emily.JPEG"} alt="pic"/>
                    </div>
                    <h3 class="box"> My name is Emily </h3>
                    <p class="box"> I'm a junior CS student</p>
                </div>
                <div class="right">
                    <h3 class="box"> Here are some quick facts about me: </h3>
                    <p class="topic box"> Favorite Movies </p>
                    <ul>
                        <li> La La Land </li>
                        <li> Pride and Prejudice </li>
                        <li> Kung Fu Panda </li>
                    </ul>
                    <p class="topic box"> Hobbies </p>
                    <ul>
                        <li> Line Dancing </li>
                        <li> Hiking </li>
                        <li> Sleeping </li>
                    </ul>
                    <p class="topic box"> Favorite Foods </p>
                    <ul>
                        <li> Ice Cream </li>
                        <li> Mangos </li>
                        <li> Blueberries </li>
                    </ul>
                </div>
            </div>
        </body>
    </div>
  );
}

export default Emily;