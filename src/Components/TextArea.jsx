import { useState } from "react";
import Warning from "./Warning.jsx";
import { warnings } from "../helper/Validations.js";

export default function TextArea() {
    const [text, setText] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const [warningText, setWarningText] = useState("");

    const handleTextChange = (e) => {
        let value = e.target.value;
        let isWarning = false;

        for (const { condition, text, action } of warnings) {
            if (condition.test(value)) {
                setShowWarning(true);
                setWarningText(text);

                value = action(value);
                isWarning = true;

                break;
            }
        }

        if (!isWarning) {
            setShowWarning(false);
        }

        setText(value);
    };

    return (
        <div className="textarea">
            <textarea value={text} onChange={handleTextChange} placeholder="Enter your text here..." spellCheck={false} />
            {showWarning && <Warning warningText={warningText} />}
        </div>
    );
}
