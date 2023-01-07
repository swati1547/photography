import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { BsShareFill } from "react-icons/bs";

function MyButton(props) {
    return <button {...props} />
}

function Sharebtn() {
    const [value, setValue] = React.useState('i am a link');
    const [copied, setCopied] = React.useState(false);
    const onChange = React.useCallback(({target: {value}}) => {
        setValue(value);
        setCopied(true);
    }, [])
    const onClick = React.useCallback(({target: {innerText}}) => {
        console.log(`Clicked on "${innerText}"!`);
    }, [])
    const onCopy = React.useCallback(() => {
        setCopied(true);
    }, [])
    
    return (
        <div>
            <section className="share-btn">
                <CopyToClipboard onCopy={onCopy} text={value}>
                    <BsShareFill className='share-icon'/>
                </CopyToClipboard>
            </section>
            <alert className="copied-alert">
                {copied ? <span>Copied.</span> : null}
            </alert>
        </div>
    );
}
export default Sharebtn;