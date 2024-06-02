import React, { useRef, useState, useEffect } from "react";

import Editor from "@monaco-editor/react";
import { Button, Card, Select, Row, Col, Layout } from "antd";
import axios from "axios";

const { Content } = Layout;
const { Option } = Select;

const defaultValues = {
  javascript: "// Welcome to the JavaScript code editor",
  java: "// Welcome to the Java code editor \nclass Solution{\n\tpublic static void main(String[] args){\n\t\t//Code Here\n\t}\n}",
  c: "// Welcome to the C code editor",
  cpp: "// Welcome to the C++ code editor",
  python: "# Welcome to the Python code editor",
  php: "<?php\n// Welcome to the PHP code editor\n\techo 'Hello, World!';\n?>",
};

const supportedLanguages = [
  { id: "javascript", label: "JavaScript" },
  { id: "java", label: "Java" },
  { id: "c", label: "C" },
  { id: "cpp", label: "C++" },
  { id: "python", label: "Python" },
  { id: "php", label: "PHP" },
];

export default function CodeEditor() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(""); // State to store the output text
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [editorValue, setEditorValue] = useState(""); // State to manage editor value
  const editorRef = useRef(null); // Ref to hold the Monaco Editor instance

  useEffect(() => {
    if (editorRef.current && editorRef.current.editor) {
      console.log(selectedLanguage);
      editorRef.current.editor.setModelLanguage(
        editorRef.current.editor.getModel(),
        selectedLanguage
      );
    }
  }, [selectedLanguage]);

  useEffect(() => {
    // Update the editor value when selected language changes
    setEditorValue(defaultValues[selectedLanguage]);
  }, [selectedLanguage]);

  const handleRunCode = async () => {
    // This is just a placeholder for running the code and updating the output
    // You would implement the actual logic to run the code here
    const code = editorRef.current.getValue();
    setOutput("");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/execute/${selectedLanguage}`,
        {
          code,
          input: input,
        }
      );
      if (response.data.output) setOutput(response.data.output);
      else setOutput(response.data.error);
    } catch (error) {
      console.error(error);
      if (
        error != null &&
        error.response != null &&
        error.response.data != null &&
        error.response.data.error != null
      ) {
        setOutput(error.response.data.error);
      } else {
        setOutput("Unknown Error!");
      }
    }
  };

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
  };
  return (
    <div className="border-black border-[1px] w-1/2 m-2 bg-gray-200">
      <Content className="content ">
        <div className="top-menu flex gap-4">
          <Select
            defaultValue={selectedLanguage}
            style={{ width: 120 }}
            onChange={handleLanguageChange}
          >
            {supportedLanguages.map((language) => (
              <Option key={language.id} value={language.id}>
                {language.label}
              </Option>
            ))}
          </Select>
          <Button
            className="submit-button"
            type="primary"
            onClick={handleRunCode}
          >
            Run Code
          </Button>
        </div>
        <Col>
          <div className="editor-container">
            <Editor
              height="50vh"
              language={selectedLanguage}
              value={editorValue}
              onMount={(editor) => {
                editorRef.current = editor;
              }}
            />
          </div>
        </Col>
        <hr className="bg-black h-[1px]" />
        <Row span={24} className="h-[150px] ">
          <Col span={12} className="h-full">
            <Card className="input-card h-full">
              <h2>Input</h2>
              <textarea
                id="program-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-[100px] outline-none text-gray-400"
              />
            </Card>
          </Col>
          <Col span={12} className="h-full">
            <Card className="output-card h-full">
              <h2>Output</h2>
              <pre>{output}</pre>
            </Card>
          </Col>
        </Row>
      </Content>
    </div>
  );
}
