import Head from 'next/head'
import { useState } from 'react'

const images = [
  '/gift_01.png',
  '/gift_02.png',
  '/gift_03.png',
  '/gift_04.jpeg',
  '/gift_05_a.png',
  '/gift_06_a.png',
  '/gift_08.jpg',
  '/gift_09.jpg',
]
const info = [
  (<div>click to open</div>),
  (<div>click to unwrap</div>),
  (<div>click to see what's inside</div>),
  (<div>click to unbox</div>),
  (<div>click to read new message</div>),
  (<div>click to read user guide</div>),
  (<div>click for page two</div>),
  (<div></div>),
]

export default function Home() {
  const [ step, setStep ] = useState(0)
  const clickHandler = () => {
    if (step === images.length -1) {
      return
    }

    setStep((step + 1))
  }

  const reset = () => {
    setStep(0)
  }

  return (
    <div className="container">
      <Head>
        <title>Marisol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>HAPPY 30th BIRTHDAY <br />CHOLECHITO!!</h1>
        <br />
        <div className='frame' onClick={clickHandler}>
          {images.map((image, index) => (
            <div className={step !== index ? 'hide' : ''}>
              <img key={index} src={image} />
              <div className='info'>
                {info[index]}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className='reset' onClick={reset}>reset</div>
        </div>
        
      </main>
      <style jsx>{`
        h1 {
          text-align: center;
        }
        .reset {
          position: fixed;
          right: 4px;
          bottom: 4px;
          font-size: 20px;
        }
        .reset:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        .info {
          max-width: 400px;
          text-align: center;
          padding-top: 20px;
          font-size: 30px;
        }
        .hide {
          display: none;
        }
        img {
          position: relative;
          width: 400px;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

          .reset {
            font-size: 20px;
            right: 4px;
            bottom: 4px;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
