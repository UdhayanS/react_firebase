import React from 'react';
import './WebViewExample.css'; // Import CSS for styling

const WebViewExample = () => {
  return (
    <div className="container">
      <iframe
        src="https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint"
        title="WebView Example"
        className="webview"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default WebViewExample;
