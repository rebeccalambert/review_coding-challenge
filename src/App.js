import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';

function App() {

  const [info, setInfo] = useState(["2", "Let us know what we did well or could improve...", "😍"]);

  const updateInfo = (guests, newText, newEmoji) => {
    const newInfo = [guests, newText, newEmoji]
    setInfo(newInfo);
  }

  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <section className="app-left">
          <Form guests={info[0]} review={info[1]} emoji={info[2]} updateInfo={updateInfo} />
        </section>
        <section className="app-right">
          <Preview guests={info[0]} review={info[1]} emoji={info[2]} />
        </section>
      </main>
    </div>
  );
}

export default App;
