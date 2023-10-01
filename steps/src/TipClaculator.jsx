/* eslint-disable no-unused-vars */
import { useState } from 'react'

export const TipClaculator = () => {
    return (
        <div>
            <TipCalculator />
        </div>
    )
}

const TipCalculator = () => {
    const [bill, setBill] = useState("")
    const [percentage1, setPercentage1] = useState(0)
    const [percentage2, setPercentage2] = useState(0)

    const tip = bill * ((percentage1 + percentage2) / 2 / 100)

    const reset = () => {
        setBill("")
        setPercentage1(0)
        setPercentage2(0)
        
    }
    return (
        <div>
            <Billinput bill={bill} onSetBill={setBill} />
            <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>How did you like service</SelectPercentage>
            <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>How did your friend like the service</SelectPercentage>
            <Output bill={bill} tip={tip}/>
            <Reset onReset={reset}/>
        </div>
    )
}

const Billinput = (props) => {
    const { bill, onSetBill } = props
    return (
        <div>
            <label>How much was the bill?</label>
            <input type="text" placeholder='Bill value' value={bill} onChange={(e) => onSetBill(e.target.value)} />
        </div>
    )
}

const SelectPercentage = (props) => {
    const { children, percentage, onSelect } = props;
    return (
        <div>
            <label>{children}</label>
            <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was oke (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing (20%)</option>
            </select>
        </div>
    )
}

const Output = (props) => {
    const { bill, tip } = props
    return (
        <h3>You pay ${+bill + tip} (${bill} + ${tip} tip)</h3>
    )
}

const Reset = ({onReset}) => {
    return(
        <button onClick={onReset}>Reset</button>
    )
}
