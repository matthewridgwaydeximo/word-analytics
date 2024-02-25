import { useState } from "react";
import Stats from "./Stats";

export default function TextArea() {
    const [text, setText] = useState("");

    const handleOnChanged = (e) => {
        const { value } = e.target;
        setText(value);
    };

    return (
        <>
            <textarea value={text} onChange={handleOnChanged} className="textarea" placeholder="Enter your text here..." spellCheck={false} />
            <Stats />
        </>
    );
}
