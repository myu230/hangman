var foods = [
    "pizza",
    "pasta",
    "sandwich",
    "bagel",
    "waffle",
    "chicken",
    "sushi",
    "eggs",
    "cake"
]

function randomWord(){
    return foods[Math.floor(Math.random()* foods.length)]
}

export {randomWord}