import React from "react";
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import './App.css';
import { Close, Send, QuestionAnswer } from '@mui/icons-material';
import { getChatResponse } from "./api/api";
import BotIcon from "./components/BotIcon";
import UserIcon from "./components/UserIcon";
const AnimateBotMessage = React.forwardRef((props,ref) => {
  return (
    <div className="hover-widget-chat-message">
      <div ><BotIcon /></div>
      <span ref={ref} className="hover-widget-bouncing-loader" style={{ display: "flex" }}>
        <div></div>
        <div></div>
        <div></div>
      </span>
    </div>

  );
});

const UserMessage = ({ message }) => {
  return (
    <div className="hover-widget-chat-message">
      <div ><UserIcon /></div>
      <span >{message}</span>
    </div>
  )
}

const BotMessage = ({ message }) => {
  return (
    <div className="hover-widget-chat-message" >
      <div ><BotIcon /></div>
      <span >{message}</span>
    </div>
  )
}
function HoverWidget(props) {
  return (
    <div className="hover-widget-logo-container" onClick={() => props.onClick()}>
      <QuestionAnswer />
    </div>
  )
}
const HoverBox = ({ data, setData, onClick, product }) => {

  const [message, setMessage] = React.useState('')
  const [loader, setLoader] = React.useState(false)
  const inputRef = React.useRef()
  const messageRef = React.useRef()
  const animateMessageRef = React.useRef()

  React.useEffect(() => {
    setTimeout(() => {
      messageRef.current.scrollIntoView({ behavior: 'smooth' })
    }, 100);
  }, [data, loader])

  const getBotResponse = async () => {
    const userMessag = inputRef.current.value
    setMessage(() => "")
    setData((prev) => [...prev, { type: 'user', message: userMessag }])
    setLoader(true)
    const msg = await getChatResponse(userMessag, product)
    animateMessageRef.current.innerHTML = ''
    for await (let i of msg) {
      animateMessageRef.current.innerHTML += i; 
      await new Promise(r => setTimeout(r, 50));
    }
    setLoader(false)
    setData((prev) => [...prev, { type: 'bot', message: msg }])

  }

  const allMessage = React.useMemo(() => {
    return data.map((item, index) => item.type === 'user' ? <UserMessage key={index} message={item.message} /> : <BotMessage key={index} message={item.message} />)
  }, [data])

  const handler = (event) => {
    if (event.key === 'Enter') getBotResponse()
  };

  return (
    <div className="hover-widget-box-container"  >
      <div className="hover-widget-box-header">
        <div><BotIcon /><span>Hover AI</span></div>
        <button onClick={() => onClick(false)}><Close /></button>
      </div>
      <div className="hover-widget-box-message">
        {allMessage}
        {loader ? <AnimateBotMessage ref={animateMessageRef}/> : ""}
        <div ref={messageRef} />
      </div>
      <div className="hover-widget-box-input">
        <UserIcon />
        <textarea onKeyUp={(e) => handler(e)} placeholder="Type your message here ... " ref={inputRef} value={message} onChange={(e) => setMessage(e.target.value)} wrap="hard"></textarea>
        <button onClick={() => getBotResponse()} disabled={loader}><Send /></button>
      </div>
    </div>
  )
}

function App({ product }) {
  const [showMessage, setShowMessage] = React.useState(false);
  const [chatData, setChatData] = React.useState([{ type: 'bot', message: "Welcome to Hover AI chatbot, designed with our unique cognitive architecture to provide human-like responses. If you have any questions about our advanced AI solutions or want to know about our startup,  just type your message below, and let's get started! " }])

  const defaultState = {
    opacity: 0,
    scale: 0.2,
  };
  const exitState = {
    opacity: 0,
    scale: 0.2,
  };
  return (
    <AnimatePresence>
      {
        showMessage === false ?
          <HoverWidget onClick={() => setShowMessage(true)} />
          :
          <motion.div
            initial={defaultState}
            exit={exitState}
            transition={{ duration: 0.2 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
          >
            <HoverBox data={chatData} setData={setChatData} onClick={setShowMessage} product={product} />
          </motion.div>

      }

    </AnimatePresence>
  );
}

export default App;
