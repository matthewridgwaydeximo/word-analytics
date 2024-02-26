import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

const INSTAGRAM_MAX_LENGTH = 280;
const FACEBOOK_MAX_LENGTH = 2200;

export default function Main() {
    const [text, setText] = useState("");

    const stats = {
        numberOfWords: text.split(" ").filter((word) => word !== "").length,
        numberOfCharacters: text.length,
        instagramCharactersLeft: INSTAGRAM_MAX_LENGTH - text.length,
        facebookCharactersLeft: FACEBOOK_MAX_LENGTH - text.length,
    };

    return (
        <main className="container">
            <TextArea text={text} setText={setText} />
            <Stats stats={stats} />
        </main>
    );
}
