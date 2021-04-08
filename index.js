// Your code here
const mapToNegativize = (sourceArray) => {
    const newArray = []
    sourceArray.forEach((element) => {newArray.push(element * -1)})
    return newArray
};

function mapToNoChange(sourceArray){
    const newArray = [...sourceArray]
    return newArray
}

const mapToDouble = (sourceArray) => {
    const newArray = []
    sourceArray.forEach((element) => {newArray.push(element * 2)})
    return newArray
};

const mapToSquare = (sourceArray) => {
    const newArray = []
    sourceArray.forEach((element) => {newArray.push(element ** 2)})
    return newArray
};