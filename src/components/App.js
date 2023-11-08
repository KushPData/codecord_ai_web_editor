import React, { useState } from "react";
import Button from "./Button";
import Editor from "./Editor";

function App() {
    const [openedEditor, setOpenedEditor] = useState('html');
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    const onTabClick = (editorName) => {
        setOpenedEditor(editorName);
    }

    return (
        <div className="App">
            <p>Welcome to CodeCord!</p>
            <div className="tab-button-container">
                <Button title="HTML" onClick={() => {
                    onTabClick('html')
                }} />

                <Button title="CSS" onClick={() => {
                    onTabClick('css')
                }} />

                <Button title="JavaScript" onClick={() => {
                    onTabClick('js')
                }} />
            </div>

            <div className="editor-container">
                {
                    openedEditor === 'html' ? (
                        <Editor 
                            language="xml"
                            value={html}
                            setEditorState={setHtml}
                        />
                    ) : openedEditor === 'css' ? (
                        <Editor
                            language="css"
                            value={css}
                            setEditorState={setCss}
                        />
                    ) : (
                        <Editor 
                            language="javascript"
                            value={js}
                            setEditorState={setJs}
                        />
                    )
                }
            </div>
        </div>
    )
}
export default App;