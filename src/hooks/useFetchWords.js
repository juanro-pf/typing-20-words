import { useState, useEffect } from "react";
import { getWords } from "../helpers/getWords";

export const useFetchWords = ( numberOfWords = 10, change ) => {
    
  const [state, setState] = useState([]);

  useEffect(() => {
      
    getWords( numberOfWords )
      .then( words => {
        setState(words)
      })

  }, [numberOfWords, change]);

  return state;

};