import { useState } from "react";
import axios from "axios";

function App() {
  const [fact, setFact] = useState("");

  const generateFact = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Generate five different random facts about the planet Neptune and seperate each fact by a -. Ensure you do not use a - anywhere else other than to seperate the facts.' }],
        temperature: 0.7
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPEN_AI_API_KEY}`
        }
      });

      setFact(response.data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="container">
      <h1>Phobos</h1>
      <button onClick={ generateFact }>Learn more about Neptune</button>
      {fact && <p>{ fact }</p>}
      <img src="icon2.png" alt="Graphic icon of a blue planet" />
    </div>
  )
}

export default App
