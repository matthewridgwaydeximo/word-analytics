import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

const INSTAGRAM_MAX_LENGTH = 280;
const FACEBOOK_MAX_LENGTH = 2200;

export default function Main() {
    const [text, setText] = useState("");

    const numberOfWords = text.split(" ").filter((word) => word !== "").length;
    const numberOfCharacters = text.length;
    const instagramCharactersLeft = INSTAGRAM_MAX_LENGTH - numberOfCharacters;
    const facebookCharactersLeft = FACEBOOK_MAX_LENGTH - numberOfCharacters;

    return (
        <main className="container">
            <TextArea text={text} setText={setText} />
            <Stats
                numberOfWords={numberOfWords}
                numberOfCharacters={numberOfCharacters}
                instagramCharactersLeft={instagramCharactersLeft}
                facebookCharactersLeft={facebookCharactersLeft}
            />
        </main>
    );
}
