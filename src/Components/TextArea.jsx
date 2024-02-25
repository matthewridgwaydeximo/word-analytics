import Stats from "./Stats";

export default function TextArea() {
    return (
        <>
            <textarea className="textarea" placeholder="Enter your text here..." spellCheck={false} />
            <Stats />
        </>
    );
}
