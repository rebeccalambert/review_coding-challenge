import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';

function App() {

  const [info, setInfo] = useState([
    {number: ""},
    {text: ""}
  ]);

  const updateInfo = (num, newText) => {
    const newInfo = [
      {number: num},
      {text: newText}
    ]
    setInfo(newInfo);
  }

  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <section className="app-left">
          <Form updateInfo={updateInfo}/>
        </section>
        <section className="app-right">
          <Preview guests={info.number} review={info.text} />
        </section>
      </main>
    </div>
  );
}

export default App;
