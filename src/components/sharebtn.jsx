import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {MdShare} from "react-icons/md";
import 'react-notifications-component/dist/theme.css'


function Sharebtn() {
    const [value] = React.useState('i am a link');
    const [copied, setCopied] = React.useState(false);
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
                    <MdShare className='share-icon'/>
                </CopyToClipboard>
            </section>
            <alert onClick={onClick} className="copied-alert">
                {copied ? <span className="copied">Copied</span> : null}
            </alert>
        </div>
    );
}
export default Sharebtn;