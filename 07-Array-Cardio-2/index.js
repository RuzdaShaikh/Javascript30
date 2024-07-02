const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.some() // Is atleast 1 person 19?


    // const isAdult = people.some(function(person) {
    //     const currentYear = (new Date()).getFullYear()
    //     if(currentYear - person.year >= 19) {
    //         return true
    //     }
    // })

const isAdult = people.some(function(person) {
    const currentYear = (new Date()).getFullYear()
    return currentYear - person.year >= 19
})

// const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19)

let someBtn = document.getElementById('some-btn')
someBtn.addEventListener ('click', function() {
    console.log(isAdult)
})

// Array.prototype.every() // is everyone 19 or older?
const allAdult = people.every(function(person) {
    const currentYear = (new Date()).getFullYear()
    return currentYear - person.year >= 19
})

let everyBtn = document.getElementById('every-btn')
everyBtn.addEventListener ('click', function() {
    console.log(allAdult)
})

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423)

let findBtn = document.getElementById('find-btn')
findBtn.addEventListener ('click', function() {
    console.log(comment)
})

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(index => index.id === 823423)

comments.splice(index, 1)
    // const newComments = [
    //     ...comments.slice(0, index)
    //     ...comments.slice(index + 1)
    // ]

let findIdxBtn = document.getElementById('findIdx-btn')
findIdxBtn.addEventListener ('click', function() {
    console.log(index)
    console.table(comments)
})