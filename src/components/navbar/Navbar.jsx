import React, {useState}from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import Menu from '../menu/Menu';

// BEM -> Block Element Modifier
// const Menu = () =>{
//   <>
//     <p><a href="#home">Home</a></p>
//     <p><a href="#wgpt3">What is GPT3?</a></p>
//     <p><a href="#possibility">Open AI</a></p>
//     <p><a href="#features">Case Studies</a></p>
//     <p><a href="#blog">Library</a></p>
//   </>
// }

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar-links'>
        <div className='gpt3_navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3_navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className='gpt3_navbar-menu'>
        {toggleMenu 
        ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(!toggleMenu)}/>
        : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(!toggleMenu)}/>
      }
      {toggleMenu && (
        <div className='gpt3_navbar-menu_container scale-up-center'>
          <div className='gpt3_navbar-menu_container-links'>
            <Menu/>
          </div>
          <div className='gpt3_navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
          </div>
        </div>
        
      )}
      </div>
    </div>
  )
}

export default Navbar
