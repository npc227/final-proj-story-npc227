//function to add to stress factor
//use local storage to persist across tabs/on same device
function smallStressEvent() {

    //if stress has never been added, set level to 0 for clean slate
    if (localStorage.getItem("StressLvl") === null) {
        localStorage.setItem("StressLvl", 0)
    }

    //get the stress level from storage, add to it. clear storage,
    //then put the stress level back in using the same key
    //nts:: you probably don't want to clear localstorage every time
    //nts:: especially if you plan to use it to track story progress...
    let lvl = parseInt(localStorage.getItem("StressLvl"))
    lvl = lvl + 1
    console.log(lvl)
    localStorage.clear()
    localStorage.setItem("StressLvl", lvl)
    return lvl
}

document.addEventListener('DOMContentLoaded', () => {

    //if content loaded, update stress level if found
    console.log(localStorage.getItem("StressLvl"))
    let tempNum = localStorage.getItem("StressLvl")
    document.getElementById("stressLevel").innerHTML = parseInt(localStorage.getItem("StressLvl"))

    const btnSmallStress = document.getElementById('B1')

    btnSmallStress.addEventListener('click', () => {
        let result = smallStressEvent()
        console.log(result)
        console.log("clicked")
        
    })

})