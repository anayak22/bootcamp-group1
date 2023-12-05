import './Margaret.css'
import React from 'react';

function Margaret() {
    return (
        <div className="App">
        <h1>About Me</h1>
        <h2>Margaret Kato (she/her)</h2>
 
        <div className="Movies"> 
        <h3 className="title">Favorite Movies</h3>
 
       <div className="Images-Container">
         <div className="Movie-Section">
             <img className="myImage" src="https://images.pexels.com/photos/18333493/pexels-photo-18333493/free-photo-of-gandalf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="LOTR" />
             <p>Lord of the Rings</p>
         </div>
       
         <div className="Movie-Section">
           <img className="myImage" src="https://media.istockphoto.com/id/956069948/photo/black-cat-chilling-on-a-gray-sofa-at-home.jpg?s=612x612&w=is&k=20&c=3rDslu6by0AdcwSe-YsFYkbusuZLi_uKcY4OTMlWFlI=" alt="pretend-this-is-toothless"/>
           <p>How to Train Your Dragon</p>
         </div>
 
         <div className="Movie-Section">
           <img className="myImage" src="https://media.istockphoto.com/id/1054864282/photo/bagel-with-poppy-seeds-directly-above.jpg?s=612x612&w=is&k=20&c=MyvYzub1FM0Jnw_VpWH-B9A7dd8hvWZNUfUuSZzAl0k=" alt="the-everything-bagel"/>
           <p>Everything Everywhere All At Once</p>
         </div>
       </div>
 
        </div>
        
        <div className="Hobbies">
         <h3>Hobbies</h3>
         <ul>
           <li>Drawing</li>
           <li>Reading fantasy/sci-fi</li>
           <li>Playing piano</li>
           <li>Gaming</li>
         </ul>
        </div>
        
     </div>
    );
}
export default Margaret;