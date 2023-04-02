import logo from './logo.svg';
import './App.css';
import {FlashCardList} from "./flashcard.js"
import {FlashCardBuilder} from "./flashcard.js";
import { useState } from 'react';
import './flashcard.css';

function App() {
  const QUESTIONS = [{front: "What color is Tseten's eyes?", back:"Black"},
                    {front: "What is Tseten's middle name?", back:"Dolma"},
                    {front: "Does Tseten like apples or oranges more?", back:"Apples"},]

  const [contentList, setContentList] = useState(QUESTIONS);

  function onAdd(e){
    e.preventDefault();
    const newContent = {front: e.target.front.value, back: e.target.back.value};
    const newContentList = contentList.concat(newContent);
    setContentList(newContentList);

  }

  return (
    <div className="App">
      <FlashCardBuilder onAdd={onAdd}/>
      <FlashCardList cardContent={contentList}/>
    </div>
  );
}

export default App;
