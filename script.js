const el = (selector) => document.querySelector(selector);

const textAreaEl = el(".textarea");
const characterCountEl = el(".stat_number--characters");
const wordCountEl = el(".stat_number--words");
const twitterCountEl = el(".stat_number--twitter");
const facebookCountEl = el(".stat_number--facebook");

const MAX_TWITTER_COUNT = 280;
const MAX_FACEBOOK_COUNT = 2200;

const handleInput = () => {
    const text = textAreaEl.value;
    const characterCount = text.length;

    const words = text.trim().split(/\s+/);
    const wordCount = text ? words.length : 0;

    let twitterCount = MAX_TWITTER_COUNT - characterCount;
    let facebookCount = MAX_FACEBOOK_COUNT - characterCount;

    wordCountEl.textContent = wordCount;
    characterCountEl.textContent = characterCount;
    twitterCountEl.textContent = twitterCount;
    facebookCountEl.textContent = facebookCount;

    twitterCount < 0 ? twitterCountEl.classList.add("stat__number--limit") : twitterCountEl.classList.remove("stat__number--limit");
    facebookCount < 0 ? facebookCountEl.classList.add("stat__number--limit") : facebookCountEl.classList.remove("stat__number--limit");
};

textAreaEl.addEventListener("input", handleInput);
