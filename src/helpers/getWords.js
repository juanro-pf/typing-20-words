export const getWords= async(numberOfWords) => {

  const url= `https://random-word-api.herokuapp.com/word?number=${numberOfWords}`
  const resp= await fetch( url );
  const words = await resp.json();
  // const words= data.join(' ');

  return words;
}