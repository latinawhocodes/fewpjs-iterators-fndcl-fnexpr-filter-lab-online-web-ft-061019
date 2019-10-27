// Code your solution here
function findMatching(drivers, data){
    return drivers.filter(driver => driver.toUpperCase() === data.toUpperCase())
}

function fuzzyMatch(drivers, filterData){
    return drivers.filter(name => name.startsWith(filterData))
}

function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver.name === name
    })
}