let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportCopy = R.cloneDeep(passportWithAddress);

passportCopy.address.city = "Bobryisk";

console.log(passportWithAddress.address.city); 
console.log(passportCopy.address.city); 