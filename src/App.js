import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [propName, setPropName] = useState('')
  const [awardTo, setAwardTo] = useState('')
  const [awardBy, setAwardBy] = useState('')
  const [awardDate, setAwardDate] = useState('')
  const [word, setWord] = useState('')
  const [size, setSize] = useState(400)
  const [bgColor, setBgColor] = useState('ffffff')
  const [qrCode, setQrCode] = useState('')

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`
    )
  }, [word, size, bgColor])

  // Updating the input word when user
  // click on the generate button
  function handleClick () {
    let date = awardDate.toString();
    console.log(awardDate);
    let awardInfo = `SparkLearn EdTech Property: \n${propName},\n Awarded to: ${awardTo}, \n Awarded By: ${awardBy}, \n Awarded On: ${date}`
    // let awardInfo = `
    setWord(awardInfo)
    console.log(awardInfo);

  }

  return (
    <div className='App'>
      <div className='container text-center'>
      <h2>QR Code Generator</h2>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='input-box'>
              <div className='gen text-center'>
                <input
                  type='text'
                  onChange={e => {
                    setPropName(`${e.target.value}\n`)
                  }}
                  placeholder='Property Name'
                />
                <br />
                <input
                  type='text'
                  onChange={e => {
                    setAwardTo(`${e.target.value}\n`)
                  }}
                  placeholder='Awarded to'
                />
                <br />
                <input
                  type='text'
                  onChange={e => {
                    setAwardBy(e.target.value)
                  }}
                  placeholder='Awarded by'
                />
                <br />
                <input
                  type='date'
                  onChange={e => {
                    setAwardDate(e.target.value)
                  }}
                  placeholder='Date awarded'
                />
                <br />
                <div className='text-center'>
                  <button className='button' onClick={handleClick}>
                    Generate
                  </button>
                </div>
              </div>
              <div className='extra'></div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='output-box'>
              <img src={qrCode} alt='' />
              <a href={qrCode} download='QRCode'>
                <button type='button'>Download</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
