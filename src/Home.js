import { useState } from "react";

const Home = () => {

    const title = "Sveiki, cia title";
    const likes = 50;
    const person = {name: "Yoshi", age: 30};
    const link = "http://www.google.com";

    //vardo pakeitimas
    //let name = "Mano vardas"
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        console.log('zdras ' + e);
    }

    const handleClickAgain = (name, e) => {
        console.log("labas "+ name + e.target);
    }


    //vardo pakeitimas
    const vardoPakeitimas = () => {
       setName('Luigi');
       setAge('32');
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>

            {/* invokinam funkcija be parametru */}
            <button onClick={handleClick}>Click me</button>
            
            {/* invokinam funkcija su parametrais idedam funkcija i anonimine funkcija */}
            <button onClick={(e) => { handleClickAgain('Simonai ',e); }}>Click me again</button>
            <button onClick={ vardoPakeitimas}>Vardo pakeitimas</button>
            <p>{ name } yra { age } metų mažiaus</p>
            <p>likes: {likes}</p>
            <p>{ person.age }</p>
            <p>{ Math.random() * 10}</p>

            <a href={ link }>Google Site</a>
        </div>
     );
}
 
export default Home;