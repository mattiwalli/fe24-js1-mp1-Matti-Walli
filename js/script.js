

const rader = ['Rad 1', 'Rad 2', 'Rad 3', 'Rad 4', 'Rad 5'];

for(let i = 0; i < rader.length; i++){




    const h1El = document.createElement('h1')

    h1El.innerText = rader[i];

    document.body.append(h1El)

    if(i === 0){

        h1El.style.fontSize = '16px'
    }
    else if(i === 1){

        h1El.style.fontSize = '24px'
    }
    else if(i === 2){

        h1El.style.fontSize = '32px'
    }
    else if(i === 3){

        h1El.style.fontSize = '40px'
    }
    else if(i === 4){

        h1El.style.fontSize = '48px'
    }

    
    
    

}