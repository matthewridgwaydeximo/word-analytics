export default function Warning({ warningText }) {
    console.log(warningText);

    return <p className="warning">{warningText}</p>;
}
