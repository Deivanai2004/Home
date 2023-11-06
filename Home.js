import React from 'react'
import './Home.css'

import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
function App() {
  

  

  return (
    <div>
      <header className='header'>
        <nav className='nav'>
        <img id='img' src='https://www.codebuilders.in/img/code-builders-logo.svg' height='50' width='50' alt='Codebuilders'></img>    
        <p className='logo-text'>VPS <br></br>CodeBuilders</p>
          <ul className='ul'>    
                   
           				<li id='li'><a id='a' href="#home">Home</a></li>
				          <li id='li'><a id='a' href="#link">Link</a></li>
				          <li id='li'><a id='a' href="#dropdown">Dropdown</a></li>
				          <li id='li'><a id='a' href="#disabled">Disabled</a></li>
                  <li id='logout'><a id='a' href='logout'>Log Out <LogoutIcon id='style'/></a></li>
          </ul>
        </nav>
        
      </header>
<div className='topic'>
  <h1>
    Invoices
  </h1>
  <hr className='line'></hr>
</div>
      <button className='btn1'><AddIcon/>Create Invoice</button>
      <button className='btn2'><SpeakerNotesIcon/>View Invoices</button>
    </div>
  )
}

export default App