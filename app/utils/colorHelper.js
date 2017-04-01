
const helper = {
  randomColor: () => {
    var colorArr = ['red','blue','green','orange','purple','yellow','navy','pink','tan','brown','violet','olive','gold','maroon','salmon','khaki','royal blue','crimson','plum'];
    var random = Math.floor(Math.random() * colorArr.length);
    console.log(colorArr[random], random);
    return colorArr[random];
  },
  randomFont: () => {
    var fontArray = ['macondo','anton','gloria','pacifico','revalia','spirax'];
    var random = Math.floor(Math.random() * fontArray.length);
    console.log(fontArray[random]);
    return fontArray[random];
  }
}

// @import url('https://fonts.googleapis.com/css?family=Anton
// |Gloria+Hallelujah|Macondo|Pacifico|Revalia|Spirax');

export default helper;
