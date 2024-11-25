function describe_city(city:string , country:string = "Pakistan"){
    if(city == "Karachi"){console.log("Karachi is a city of pakistan")}
    else if(city == "Lahore"){console.log("Lahore is a city of Pakistan")}
    else (console.log(`${city} is not a city of pakistan`))

}

describe_city("Karachi")
describe_city("Lahore")
describe_city("America")