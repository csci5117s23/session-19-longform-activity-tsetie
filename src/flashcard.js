import { useState } from 'react';
import './flashcard.css';

function FlashCard(props){
  const [front, setFront] = useState(true);
  const content = props.cardContent;

  const flipCard = () => {
    if(front){
      setFront(false);
    }else{
      setFront(true);
    }
  }

  return (
    <div className="container">
      <button onClick={flipCard} className={front ? "flashCard front" : "flashCard back"}>
        <div>
          {front ? props.cardContent.front : props.cardContent.back}
        </div>    
      </button>

    </div>
  );
}

export default FlashCard;