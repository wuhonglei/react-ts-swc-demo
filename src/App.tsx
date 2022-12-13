import { useState } from "react";
import { Modal, Form, Input, Button, InputNumber } from "antd";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setOpen(!open)}>toggle 弹窗</Button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Modal open={open} title="Refresh Demo" onCancel={() => setOpen(!open)}>
        <Form form={form}>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="budget" label="Budget">
            <Input />
          </Form.Item>
          <Form.Item name="count" label="Count">
            <Input />
          </Form.Item>
          <Form.Item name="count1" label="Count1">
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
