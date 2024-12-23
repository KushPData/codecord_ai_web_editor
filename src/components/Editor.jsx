import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/night.css';
import { Controlled as ControlledEditorComponent } from 'react-codemirror2';

const Editor = ({ language, value, setEditorState }) => {
    const handleChange = (editor, data, value) => {
        setEditorState(value);
    }

    const themeArray = ['dracula', 'material', 'mdn-like', 'the-matrix', 'night']

    const [theme, setTheme] = useState('dracula')

    return (
        <div className="editor-container">
            <p>The {language} editor is open</p>
            <div className="editor-container">

                <div style={{ marginBottom: "10px" }}>
                    <label for="themes">Choose a theme: </label>
                    <select name="themes" onChange={(el) => {
                        setTheme(el.target.value)
                    }}>
                        {
                            themeArray.map(theme => (
                                <option value={theme}>{theme}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <ControlledEditorComponent
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: theme,
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                }}>

            </ControlledEditorComponent>
        </div>
    )
}
export default Editor