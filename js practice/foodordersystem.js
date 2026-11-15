function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let available = true;

            if (available) {
                resolve("Your food order is confirmed!");
            } else {
                reject("Sorry, food is not available!");
            }
        }, 2000);
    });
}

async function orderFood() {
    try {
        console.log("Placing your order...");

        let result = await placeOrder();

        console.log(result);
        console.log("Your food is on the way!");

    } catch (error) {
        console.log(error);
    }
}

orderFood();
