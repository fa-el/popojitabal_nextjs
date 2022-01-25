export const getInitials = (string) => {
  if(typeof string == 'string'){
    const split = string.split(" ");
    const firstLetter = split.map(item => item[0].toString().toUpperCase());
    return firstLetter.join('');
  }else{
    console.log(string, 'Is not a STRING');
    return '';
  }
}