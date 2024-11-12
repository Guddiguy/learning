//Asynchronous Javascript

const promise = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('success'), 1000);

    const sum = 2 + 3 
    if ( sum  === 5) {
        resolve(sum)
    } else {
        reject ("not correct")
    }

    console.log("Hardwork Before")
})

promise.then((result) => console.log(result)).catch((error) => console.log(error))