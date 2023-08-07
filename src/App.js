import Header from './Header/header';
import './App.css';

function App() {
  return (
    < div className='main_bg'>
      <Header />
      <h1 className='h1 d-flex align-items-center justify-content-center mt-5'>Material Kit 2 React</h1>
      <div className='col-12 d-flex justify-content-center mb-5'>
        <p className='col-4 d-flex justify-content-center p1'>Free & Open Source Web UI Kit built over ReactJS & MUI. Join over 1.6 million developers around the world.</p>
      </div>
    </div>
  );
}

export default App;
