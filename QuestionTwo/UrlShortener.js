const QuestionTwo=()=>{
// Declare an array to store the URLs
const urls = [];
// Function to generate a random short URL from some characters
const generateShortURL = () => {
  let result = "https://";
  const characters =
    "longurlrABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
// Function to create a short URL for a given long URL
const createShortURL = (longURL) => {
  const shortURL = generateShortURL();
  urls.push({ shortURL, longURL });
  return shortURL;
};

// Function to get the long URL for a given short URL
const getLongURL = (shortURL) => {
  const url = urls.find((url) => url.shortURL === shortURL);
  return url ? url.longURL : null;
};
//functions calling this function
const longURL = "https://www.ffacebook.com/findfreindsgshdhdjffj";
const shortURL = createShortURL(longURL);
console.log("Short URL:", shortURL);
const retrievedURL = getLongURL(shortURL);
console.log("Long URL:", retrievedURL);
}
module.exports={QuestionTwo}