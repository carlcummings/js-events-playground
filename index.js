



document.addEventListener('DOMContentLoaded', function(){
    console.log('hello world')
    let changeColorButton = document.querySelector('#changeColor')
    let changeColorButton2 = document.querySelector('#changeColor2')
    let colorDiv = document.querySelector('#colorDiv')
    let Selector = document.querySelector('#Selector')

    changeColorButton.addEventListener('click', function(){
        //if (colorDiv.style.background === 'green') {
        //    colorDiv.style.background = 'white'
        //} else {
        //colorDiv.style.background = 'green'
        //}

        changeColor (Selector.value)
    })
    changeColorButton2.addEventListener('click', function(){
        colorDiv.style.background = 'black'
        }
    )
    
    colorDiv.addEventListener('mouseover', function(){
        colorDiv.style.background = 'pink'
        }
    )
    
    function changeColor(color){
        console.log(color)
        colorDiv.style.background = color
    }
})

