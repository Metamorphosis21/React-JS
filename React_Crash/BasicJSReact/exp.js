// Destructuring Object and Array
const obj = {
    id: 1,
    name: 'Laptop',
    price: 1000,
    description: 'This is a laptop',
}
const { name, price } = obj
console.log(`${name} - ${price}`);

const arr = [1, 2, 3, 4, 5]
const [first, second, third] = arr
console.log(first, second, third);


// Default value of parameters , spread , rest operator
const f1 = (n1 = 10, n2 = 10) => (n1 + n2) // default parameter values
console.log(f1())
console.log(f1(20, 30))

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [10, 20, 30, 40, 50]
console.log([999, ...arr1, 999, ...arr2, 999]); // spread

const f2 = (a,b,...c) => { // rest 
    console.log(a,b,c);
    return 'End'
}
console.log(f2(1,2,3,4,5));


// ES6 array methods - map , filter , find , some , every , includes , indexOf , findIndex
const person = [
    {
        name : 'Person1',
        age : 25 ,
        city : 'USA'
    },
    {
        name : 'Person2',
        age : 55 ,
        city : 'Germany'
    },
    {
        name : 'Person3',
        age : 45 ,
        city : 'USA'
    },
    {
        name : 'Person4',
        age : 15 ,
        city : 'England'
    },
    {
        name : 'Person5',
        age : 30 ,
        city : 'india'
    }
]

const mapArr = person.map((p) => {
    return p.name + '-' + p.age + '-' + p.city
})
console.log(mapArr);

const findSingleElement = person.find((p) => {
    return p.name === 'Person3' && p.age === 45 && p.city === 'USA';
    // return p.city === 'USA'
})
console.log(findSingleElement);

const filterElement = person.filter((p) => {
    return p.age >= 30
})
console.log(filterElement);

const someSingleElement = person.some((p) => {
    return p.name === 'Person3' && p.age === 45 && p.city === 'USA';
    // return p.age >= 30
})
console.log(someSingleElement);

const everyElement = person.every((p) => {
    return p.age >= 30
})
console.log(everyElement);

console.log(person.includes({
    name : 'Person3',
    age : 45 ,
    city : 'USA'
})); // - false 
// In JavaScript, objects are compared by reference, not by value. This means that even if two objects have the same properties and values, they are considered different if they are not the same instance.


const fruits = ['apple' , 'banana' , 'grapes' , 'lemon']

console.log(fruits.includes('banana') , fruits.indexOf('grapes'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// async-await API call 
let apiFetch = document.querySelector('.api-fetch')

async function fetchAPI(){
    try {
        const apiResponse = await fetch("https://dummyjson.com/products")
        const result  = await apiResponse.json()

       console.log(result)

        if(result?.products?.length > 0)
            renderProducts(result?.products)
    } catch (error) {
        console.log(error); 
    }
}
fetchAPI()

function renderProducts(getProducts){
    apiFetch.innerHTML = getProducts.map((p) => {
        return `<p>${p.id} - ${p.title}</p>`
    }).join("")
}


