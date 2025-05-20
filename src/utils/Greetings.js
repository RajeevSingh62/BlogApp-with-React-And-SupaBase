// function for greetings to the users 
export const greet = () => {
  const ct = new Date().getHours();
  if (ct < 12) {
    return "Good Morning";
  } else if (ct < 18) {
    return "good after noon ";
  } else {
    return "good Evening ";
  }
};
