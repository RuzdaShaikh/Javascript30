const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello')

// Interpolated
console.log('Hello I am a %s string', '💩')

// warning!
console.warn('Oh no!')

// Error :|
console.error('Shit!')

// Info
console.info('You are looking at the console')

// Testing
const p = document.querySelector('p')

console.assert(p.classList.contains('ouch'), 'That is wrong!')

// clearing
const btn = document.querySelector('button')

function clearConsole() {
    console.clear()
}

btn.addEventListener('click', clearConsole())

// Viewing DOM Elements
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}.`)
    console.log(`${dog.name} is ${dog.years} years old.`)
    console.groupEnd(`${dog.name}`)
})

// counting
console.count('Dog')
console.count('Dog')
console.count('Cat')
console.count('Cat')
console.count('Dog')
console.count('Cat')
console.count('Cat')
console.count('Dog')
console.count('Cat')
console.count('Dog')
console.count('Dog')
console.count('Cat')
console.count('Dog')
console.count('Cat')
console.count('Cat')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/RuzdaShaikh')
    .then(data => data.json)
    .then( data => {
        console.timeEnd('fetching data')
        console.log(data)
    })

// Styled
console.log('%c I am some great text', 'font-size:40px; background:blue; text-shadow:4px 10px 5px yellow')

// table
console.table(dogs)