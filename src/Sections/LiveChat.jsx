import { useEffect, useState } from 'react';

const LiveChat = () => {
    const [showMessenger, setShowMessenger] = useState(false);

    const toggleMessenger = () => {
        setShowMessenger(!showMessenger);
    };

    useEffect(() => {
        if (showMessenger) {
            console.log('Initializing Messenger Chat Plugin...');
            window.fbAsyncInit = function () {
                FB.init({
                    xfbml: true,
                    version: 'v16.0',
                });
                FB.XFBML.parse();
            };

            (function (d, s, id) {
                let js,
                    fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src =
                    'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
        } else {
            console.log('Removing Messenger Chat Plugin...');
            const fbRoot = document.getElementById('fb-root');
            const fbScript = document.getElementById('facebook-jssdk');
            if (fbRoot) fbRoot.innerHTML = '';
            if (fbScript) fbScript.remove();
        }
    }, [showMessenger]);

    return (
        <div>
            <button
                className="fixed left-4 bottom-4 z-50 btn btn-primary shadow-lg"
                onClick={toggleMessenger}
            >
                {showMessenger ? 'Hide Messenger' : 'Messenger'}
            </button>
            {showMessenger && (
                <div id="fb-root">
                    <div
                        className="fb-customerchat"
                        attribution="setup_tool"
                        page_id={import.meta.env.VITE_fbpageid}
                    ></div>
                </div>
            )}
        </div>
    );
};

export default LiveChat;
