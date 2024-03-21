import { useState } from "react";
import axios from "axios";

function App() {
  const [fact, setFact] = useState("");

  const generateFact = async () => {
    console.log('API called');
    console.log(import.meta.env.VITE_OPEN_AI_API_KEY);

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Generate a randomised fact about the planet Mars. If you have told me this fact before please generate a new different one' }],
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
    <div>
      <h1>Phobos</h1>
      <button onClick={ generateFact }>Generate a fact about Mars</button>
      {fact && <p>{ fact }</p>}
    </div>
  )
}

export default App
