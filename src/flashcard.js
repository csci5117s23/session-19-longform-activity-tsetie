import { useState } from 'react';
import './flashcard.css';

function FlashCard(prop){
  const [front, setFront] = useState(true);
  // When user clicks the card this will make it flip 
  const flipCard = () => {
    if(front){
      setFront(false);
    }else{
      setFront(true);
    }
  }

  return (
    <div>
      <button onClick={flipCard} className={front ? "flashCard front" : "flashCard back"}>
        <div>
          {front ? prop.content.front : prop.content.back}
        </div>    
      </button>

    </div>
  );
}


export function FlashCardList(props){
  // Holds questions and answers (list of objects)
  const contents = props.cardContent;
  return (
    <div>
      {contents.map((c) => (
        <FlashCard content={c}/>
      ))}
    </div>
  );
}


export function FlashCardBuilder(props){

  return (
    <div>
      <form method='post' onSubmit={props.onAdd} className="formContainer">
        <label className='inputs'>
          Enter the question: <input name="front" />
        </label>
        <label className='inputs'>
          Enter the answer: <input name="back" />
        </label>
        <button type="submit" className='submitBtn'>Build new flashcard</button>
      </form>
    </div>
  )
}
