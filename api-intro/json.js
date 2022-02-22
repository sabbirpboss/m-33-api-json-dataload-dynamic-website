//JSON-JavaScript Object Notation
const user = {id: 11, name: 'Gorib Amir', job: 'google'}

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Bablu store',
    address: 'New Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Bablur Baap',
        profession: 'dokandar'
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified); //again converted to main object, or we can say remove stringify
console.log(converted);