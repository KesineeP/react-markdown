import React, { useState } from 'react';
import './App.css';
import marked from 'marked';

marked.setOptions({
    breaks: true
});
const renderer = new marked.Renderer();
renderer.link = function (href, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';

};


function App() {
    const [text, setText] = useState(placeholder);
    console.log(text)
    const handleOnEditText = (e) => {
        setText(e.target.value);
    };


    return (
        <div className="wrapper">
            <h1 style={{ textAlign: 'center', paddingTop: '15px' }} className="header">Markdown Preview</h1>
            <div className="markdown-container">
                <div className="editor-container">
                    <h4>Editor</h4>
                    <textarea
                        id="editor"
                        className="textarea"
                        type="text"
                        value={text}
                        onChange={(e) => handleOnEditText(e)} />
                </div>
                <div className="preview-container">
                    <h4>Preview</h4>
                    <Preview markdown={text} />
                </div>
            </div>
            <Footer />
        </div>

    )
}

const Preview = ({ markdown }) => {
    return <div id="preview" dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer })
    }} />
}
const Footer = () => {
    return <footer className="footer">Coded by Kesinee</footer>
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;

export default App;