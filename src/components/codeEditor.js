import React, { useState, useRef } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function CodeEditor() {
  const [htmlCode, setHtmlCode] = useState('<h1>Hello, world!</h1>');
  const [cssCode, setCssCode] = useState('h1 { color: blue; }');
  const [jsCode, setJsCode] = useState('console.log("Hello World")');

  const iframeRef = useRef();

  const updateCode = (type, code) => {
    switch (type) {
      case 'html':
        setHtmlCode(code);
        break;
      case 'css':
        setCssCode(code);
        break;
      case 'js':
        setJsCode(code);
        break;
      default:
        break;
    }
  };

  const runCode = () => {
    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(`
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `);
    iframeDoc.close();
  };

  return (
    <div className="code-editor">
      <div className="editor-container">
        <div className="editor">
          <h3>HTML</h3>
          <textarea
            value={htmlCode}
            onChange={(e) => updateCode('html', e.target.value)}
            placeholder="Write your HTML here..."
          />
        </div>

        <div className="editor">
          <h3>CSS</h3>
          <textarea
            value={cssCode}
            onChange={(e) => updateCode('css', e.target.value)}
            placeholder="Write your CSS here..."
          />
        </div>

        <div className="editor">
          <h3>JavaScript</h3>
          <textarea
            value={jsCode}
            onChange={(e) => updateCode('js', e.target.value)}
            placeholder="Write your JS here..."
          />
        </div>
      </div>

      <div className="run-container">
        <button onClick={runCode}>Run Code</button>
      </div>

      <div className="output-container">
        <h3>Output:</h3>
        <iframe ref={iframeRef} className="output" title="output"></iframe>
      </div>

      <div className="preview-code">
        <h3>Preview Code:</h3>
        <div className="preview">
          <div className="html-preview">
            <h3>HTML</h3>
            <SyntaxHighlighter language="html" style={docco}>
              {htmlCode}
            </SyntaxHighlighter>
          </div>
          <div className="css-preview">
            <h3>CSS</h3>
            <SyntaxHighlighter language="css" style={docco}>
              {cssCode}
            </SyntaxHighlighter>
          </div>
          <div className="js-preview">
            <h3>JavaScript</h3>
            <SyntaxHighlighter language="javascript" style={docco}>
              {jsCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
