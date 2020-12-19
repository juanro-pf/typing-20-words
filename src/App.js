import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useFetchWords } from './hooks/useFetchWords';

const styles= {
  button: {
    backgroundColor: 'blue',
    border: '1px solid white',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '25px',
    textDecoration: 'none'
  }
}

export const App = () => {

  const [change, setChange] = useState(true);
  const [input, setInput] = useState('');
  const [savedText, setSavedText] = useState('');
  const [currentWord, setCurrentWord] = useState(0);
  const [miliseconds, setMiliseconds] = useState(-500);
  const [intervalRef, setIntervalRef] = useState();

  const inputRef = useRef();
  
  const words= useFetchWords(20, change);
  const wordsString= words.join(' ');
  const letters= wordsString.split('');
  
  const seconds= Math.floor(miliseconds/100);

  useEffect(() => {
    if(words.length !== 0){
      setMiliseconds(-300);
      setIntervalRef(setInterval(() => {
        setMiliseconds(prevMilis => prevMilis + 1);
      }, 10))
    }
  }, [words]);

  useEffect(() => {
    if(savedText === `${wordsString} `){
      clearInterval(intervalRef);
    }
  }, [savedText, wordsString, intervalRef]);

  const handleInputChange= e => {
    if(e.target.value === `${words[currentWord]} `){
      setInput('');
      setSavedText(prevSavedText => `${prevSavedText}${words[currentWord]} `);
      setCurrentWord(prevWord => prevWord + 1);
    } else{
      setInput(e.target.value);
    }
  }

  const handleBlur= () => {
    inputRef.current.focus();
  }

  const handleClic= () => {
    setChange(prevChange => !prevChange);
    clearInterval(intervalRef);
    setInput('');
    setSavedText('');
    setCurrentWord(0);
    setMiliseconds(-500);
  }

  const showTimeAndButton= () => {
    if(savedText === `${wordsString} `){
      return (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '30px', textAlign: 'center' }}>It took you <span style={{ color: 'red' }}>{seconds<10 && '0'}{seconds}:{miliseconds - (seconds * 100)<10 && '0'}{miliseconds - (seconds * 100)}</span> seconds to type 20 words</h1>
          <button
            onClick={handleClic}
            style={styles.button}
          >Try again</button>
        </div>
      )
    }else if(miliseconds === -500){
      return <h1 style={{ textAlign: 'center' }}>READY?</h1>
    } else if(miliseconds>=0){
      inputRef.current.focus();
      return (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ textAlign: 'left' }}>{seconds<10 && '0'}{seconds}:{miliseconds - (seconds * 100)<10 && '0'}{miliseconds - (seconds * 100)}</h1>
          <button
            onClick={handleClic}
            style={styles.button}
          >Try again</button>
        </div>
      )
    } else{
      return (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ textAlign: 'center' }}>{Math.abs(seconds)}</h1>
          <button
            onClick={handleClic}
            style={styles.button}
          >Try again</button>
        </div>
      )
    }
  }

  return (
    <div>
      <p style={{ fontSize: '30px', textAlign: 'center' }}>
        {
          letters.map((letter, i) => {
            if(savedText.length + input.length <= i){
              return <span key={i}>{letter}</span>
            } else if(letter === input[i - savedText.length] || savedText.length > i){
              return <span key={i} style={{ color: 'blue' }}>{letter}</span>
            } else {
              return <span key={i} style={{ color: 'red' }}>{letter}</span>
            }
          })
        }
      </p>
      {
        words.length !== 0
        &&
        <input
          ref={inputRef}
          autoFocus
          onBlur={handleBlur}
          disabled= {
            currentWord === words.length || miliseconds<=0
            ?
            'disabled'
            :
            ''
          }
          style={{ fontSize: '30px', textAlign: 'center', margin: '0 auto', display: 'block' }}
          type='text'
          value={input}
          onChange={handleInputChange}
        />
      }
      {
        showTimeAndButton()
      }
    </div>
  );
};