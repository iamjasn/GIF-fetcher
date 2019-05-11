const apiKey = process.env.REACT_APP_API_KEY;

export const getUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&limit=1`;