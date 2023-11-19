import qrCode from './assets/image-qr-code.png'

import './App.css'

function App() {

  return (
    <div className='main-container'>
      <div className='mainCard'>
        <div className='card'>
          <img className='qrcode' src={qrCode} alt="img" />
          <div className='text'>
            <h3>Improve your front-end skills by building projects</h3>
            <p>Scan the QR Code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
