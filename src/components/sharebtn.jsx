import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {MdShare} from "react-icons/md";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function MyButton(props) {
    return <button {...props} />
}

// const App = () => {
//     return (
//       <div className="app-container">
//         <ReactNotifications />
//         <Application />
//       </div>
//     )
//   };

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