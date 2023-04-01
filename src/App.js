import logo from './logo.svg';
import './App.css';
import FlashCard from "./flashcard.js";

function App() {
  const QUESTIONS = [{front: "What color is Tseten's eyes?", back:"Black"},
                    {front: "question2", back:"answer2"},
                    {front: "question3", back:"answer3"},]

  return (
    <div className="App">
      <FlashCard cardContent={QUESTIONS[0]}/>
    </div>
  );
}

export default App;
