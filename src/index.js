module.exports = function check(str, bracketsConfig) {
  // your solution
  
  for (let row = 0; row < bracketsConfig.length; row++) {
      for (let col = 0; col < bracketsConfig[row].length; col++) {
          if ((str[row] == bracketsConfig[row][col] || str[row] == bracketsConfig[row + 1][col]) && str[str.length - 1] == bracketsConfig[row][bracketsConfig[col].length - 1] || str[str.length - 1] == bracketsConfig[row+1][bracketsConfig[col].length - 1]) {
            
            return true;
          }
          else { return false; }
      }
  }  
}


