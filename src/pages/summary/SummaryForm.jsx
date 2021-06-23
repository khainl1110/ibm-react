import { useState } from "react";

export default function SummaryForm() {
    let [disabled, setDisabled ] = useState(true);
    return (
        <div>
            <input 
                type = "checkbox" 
                data-testid = "checkbox-agree"
                onChange = {(e) => setDisabled(!e.target.checked)}
            />
            <button disabled = {disabled}>Click here to continue</button>
        </div>
    );
}