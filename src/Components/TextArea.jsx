import { useState } from "react";
import Warning from "./Warning.jsx";
import { warnings } from "../helper/Validations.js";

export default function TextArea({ text, setText }) {
    const [warningText, setWarningText] = useState("");

    const handleTextChange = (e) => {
        let value = e.target.value;
        let warningShown = false;

        for (const { condition, text, action } of warnings) {
            if (condition.test(value)) {
                setWarningText(text);

                value = action(value);
                warningShown = true;
                break;
            }
        }

        if (!warningShown) setWarningText(null);

        setText(value);
    };

    return (
        <div className="textarea">
            <textarea value={text} onChange={handleTextChange} placeholder="Enter your text here..." spellCheck={false} />
            {warningText && <Warning warningText={warningText} />}
        </div>
    );
}
