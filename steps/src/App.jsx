/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { TipClaculator } from "./TipClaculator";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


export const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true)

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  return (
    // <div>
    //   {
    //     isOpen ? (
    //       <button className="close"
    //         onClick={() => setIsOpen(!isOpen)}
    //       ><AiOutlineClose /></button>
    //     ) : (
    //       <button className="close"
    //         onClick={() => setIsOpen(!isOpen)}
    //       ><AiOutlineMenu /></button>
    //     )
    //   }

    //   {
    //     isOpen && (
    //       <div className="steps">
    //         <div className="numbers">
    //           <div className={step >= 1 ? "active" : ""}>1</div>
    //           <div className={step >= 2 ? "active" : ""}>2</div>
    //           <div className={step >= 3 ? "active" : ""}>3</div>
    //         </div>

    //         {/* <p className="message">Step {step}: {messages[step - 1]}</p> */}

    //         <StepMessage step={step}>
    //           {messages[step - 1]}
    //         </StepMessage>

    //         <div className="buttons">
    //           <Button
    //             textColor="#fff"
    //             bgColor="#7950f2"
    //             onClick={handlePrevious}
    //           > <span>👈</span> Previous</Button>
    //           <Button
    //             textColor="#fff"
    //             bgColor="#7950f2"
    //             onClick={handleNext}
    //           > Next <span>👉</span></Button>
    //         </div>
    //       </div>
    //     )
    //   }
    // </div>

    <TipClaculator/>
  )
}

const StepMessage = ({ step, children }) => {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  )
}

// tạo button có thể tái sử dụng thay đổi dựa vào props của func cha - children props
const Button = (props) => {
  const { textColor, bgColor, onClick, children } = props;
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
