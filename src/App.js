import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [itemDesc, setItemDesc] = useState('')
  const [awardTo, setAwardTo] = useState('')
  const [serialNum, setSerialNum] = useState('')
  const [issuedBy, setIssuedBy] = useState('')
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
    // let date = awardDate.toString();
    // console.log(awardDate);
    let awardInfo = `SparkLearn EdTech Property %0A MR to: ${awardTo}, %0A Item Description: ${itemDesc},%0A Serial Number: ${serialNum},%0A Issued by: ${issuedBy}`
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
                    setAwardTo(`${e.target.value}`)
                  }}
                  placeholder='MR To'
                />
                <br />
                <input
                  type='text'
                  onChange={e => {
                    setItemDesc(`${e.target.value}`)
                  }}
                  placeholder='Item Description'
                />
                <br />
                <input
                  type='text'
                  onChange={e => {
                    setSerialNum(e.target.value)
                  }}
                  placeholder='Serial Number'
                />
                <br />
                <input
                  type='text'
                  onChange={e => {
                    setIssuedBy(e.target.value)
                  }}
                  placeholder='Issued By'
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
