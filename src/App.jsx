import { useState, useEffect } from 'react'
import {Layout, BasicCard} from './ui'

function App() {
  // const [count, setCount] = useState(0)
  // let code = 1234

  const [messages, setMessages] = useState([]);

  // useWebSocket()


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // const message = event.target.data;
  //   setMessages(event.target.data)
  //   // .emit('message', messages);
  //   // event.target.elements.message.value = '';
  // };

  return (
    <>
      <Layout>

        hello

       

        {/* <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul> */}
        {/* <form onSubmit={handleSubmit}>
          <input type="text" name="message" />
          <button>Отправить</button>
        </form> */}
        {/* <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{code}</h2>
            <p>We are using cookies for no reason.</p>
            <div className="card-actions justify-end">
              <button onClick={() => setCount((count) => count + 1)} className="btn btn-primary"> count is {count}</button>
            </div>
          </div>
        </div> */}

        <BasicCard />
      </Layout>
    </>
  )
}

export default App
