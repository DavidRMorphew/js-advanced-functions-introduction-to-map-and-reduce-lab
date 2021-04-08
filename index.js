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

const reduceToTotal = (sourceArray, startingPoint = 0) => {
    sourceArray.forEach((element) => (startingPoint += element))
    return startingPoint
};

const reduceToAllTrue = (sourceArray) => {
    let allTrueEvaluator = true
    sourceArray.forEach(element => {
        if (!!element === false) {
            allTrueEvaluator = false
        }
    })
    return allTrueEvaluator    
};

const reduceToAnyTrue = (sourceArray) => {
    let allTrueEvaluator = false
    sourceArray.forEach(element => {
        if (!!element === true) {
            allTrueEvaluator = true
        }
    })
    return allTrueEvaluator    
};