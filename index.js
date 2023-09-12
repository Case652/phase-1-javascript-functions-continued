// code your solution here
function saturdayFun(fun = `roller-skate`) {
    return `This Saturday, I want to ${fun}!`
}
function mondayWork(sad = `go to the office`) {
    return `This Monday, I will ${sad}.`
}
function wrapAdjective(str = `*`) {
    return function(meter = `special`) {
        return `You are ${str}${meter}${str}!`
    }
}