import React from 'react'
import '../styles/Landing.css';
import { useNavigate} from 'react-router-dom';

function Landing() {
    let navigate = useNavigate();

  const trait = (e) => {
    navigate("/trait");
    localStorage.setItem("traitId", e.target.name);
  }

  return (
    <div>
        <header>Home</header>
        <div className='grid-container'>
            <div className='item1'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name="Head"> 
                    Head
                </button>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Eyes'>Eyes</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Mouth'>Mouth</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Hands'>Hands</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Feet'>Feet</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Panel'>Panel</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Background'>Background</button>
            </div>
            <div className='item2'>
                <img src='1.png' alt='This is sample.' width={900} height={800}></img>
            </div>
            <div className='item4'>
                <button className='reset'>Reset</button>
            </div>
            <div className='item3'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Helm'>Helm</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Weapon'>Weapon</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Armor'>Armor</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Ability'>Ability</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button className='generate'>Generate</button>
            </div>
        </div>
    </div>
  )
}

export default Landing;