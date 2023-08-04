import logo from './logo.svg';
import './App.css';
import review3 from './review3.jpg'

function App() {
  return (
    <div className="App">
      
        <nav className='nav-bar'>
          <a href='#Home'>Home</a>
          <a href='#About'>About</a>
          <a href='#service'>services</a>
          <a href='#contacts'>contacts</a>
        </nav>
        <div className='App-content'>
          <h1>Taka limited</h1>
          <img src={review3}alt=''></img>
        </div>
        <div className='Home'>
         <h1>Taka kazi</h1>
         <p>Supporting cleanup activities</p>
        </div>
        <div className='About'>
          <h1>More about us</h1>
          <p>Taka Kazi Africa is a social enterprise that puts people and the planet we live in first.<br></br> We adopt sustainable approaches to business in the interest of present and future generations.</p>

        </div>
        <div className='services'>
          <h1>What We Do</h1>
          <p>We tackle waste mainly from plastic bottles like drink <br>
           </br>containers at source to prevent littering and spread of plastic<br></br>and other related waste in the wider environment and thus 
           <br></br>keeping our homes, workplaces, businesses, and public places clean <br></br>
            </p>
            <img src={review3}alt=''></img>
        </div>
        <div className='contacts'>
        <div className='col'>
        <h1>CONTACTS</h1>
        <p>P.O Box 5820,</p>
        <p>City Square,
00200</p>
        </div>
        <div className='col'>
         <h1>LINKS</h1>
         <a href='https://twitter.com/home'>Twitter</a>
         <a href='https://github.com/ekaranjustus12'>github</a>
        </div>
        </div>
    
    </div>
  );
}

export default App;
