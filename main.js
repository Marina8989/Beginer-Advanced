const divMain = document.createElement('div')
const decrease = document.createElement('h2')
const increase = document.createElement('h2')
const counter = document.createElement('h1')
const divEven = document.createElement('div')
const divOdd = document.createElement('div')
const div = document.createElement('div')

let counterNum = 0

decrease.innerText = 'decrease'
increase.innerText = 'increase'
counter.innerText = counterNum

divMain.classList.add('display')
div.classList.add('divDisplay')


decrease.addEventListener('click', function(){
    counterNum =  counterNum - 1
    counter.innerText = counterNum

    if(counterNum % 2 === 1){
       divOdd.append(counterNum)
    }
})

increase.addEventListener('click', function(){
    counterNum += 1
    counter.innerText = counterNum

    if(counterNum % 2 === 0){
       divEven.append(counterNum)
    }
     
})

div.append(divOdd)
div.append(divEven)

divMain.append(decrease)
divMain.append(counter)
divMain.append(increase)


document.body.append(divMain)

document.body.append(divOdd)
document.body.append(divEven)