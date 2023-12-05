import './Sharvari.css';
import React from 'react';

function Sharvari() {
  return (
    <div className="body">
      <div className="titleSharvari">
        <h1>
          <center>About Me: Sharvari Tirodkar</center>
        </h1>
      </div>

      <div className="content">
        <h3>
          <center>Favorite Movies</center>
        </h3>
        <ul>
          <li>Inception</li>
          <li>Interstellar</li>
          <li>Ratatouille</li>
        </ul>
      </div>
      <br />

      <div className="content">
        <h3>
          <center>Hobbies</center>
        </h3>
        <ul>
          <li>Reading</li>
          <li>Listening to Music</li>
          <li>Spending Time with Friends</li>
          <li>Playing Tennis</li>
        </ul>
      </div>
      <br />

      <div className="content">
        <h3>
          <center>Favorite Artists</center>
        </h3>
        <dl>
          <dt>Taylor Swift</dt>
          <dd>Favorite Song: You're On Your Own Kid</dd>
          <dt>OneRepublic</dt>
          <dd>Favorite Song: Counting Stars</dd>
          <dt>Imagine Dragons</dt>
          <dd>Favorite Song: Demons</dd>
          <dt>Noah Kahan</dt>
          <dd>If We Were Vampires</dd>
        </dl>
      </div>
    </div>
  );
}

export default Sharvari;
