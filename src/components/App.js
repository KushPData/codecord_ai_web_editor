import React, { useState } from "react";
import Button from "./Button";

function App() {
    const [openedEditor, setOpenedEditor] = useState('html');

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
                        <p>The HTML editor is open</p>
                    ) : openedEditor === 'css' ? (
                        <p>The CSS editor is open</p>
                    ) : (
                        <p>The JavaScript editor is open</p>
                    )
                }
            </div>
        </div>
    )
}
export default App;