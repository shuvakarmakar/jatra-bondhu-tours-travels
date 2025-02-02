import { useEffect } from 'react';

const LiveChat = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://embed.tawk.to/679f1edf825083258e0f0289/1ij2p176h";
        script.charset = "UTF-8";
        script.async = true;
        script.setAttribute("crossorigin", "*");

        document.getElementsByTagName("head")[0].appendChild(script);

        return () => {
            document.getElementsByTagName("head")[0].removeChild(script);
        };
    }, []);

    return null;
};

export default LiveChat;
