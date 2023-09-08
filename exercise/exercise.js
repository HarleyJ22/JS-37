const number = 15;
let promise = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve (`number is greater than 10`);
    } 
     reject (`number isn't greater tan 10`);
 });

    promise 
    .then((result) => console.log(result))
    .catch((err) => console.erros(err));

