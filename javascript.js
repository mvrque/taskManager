window.addEventListener('load', showCurrentDate())
function showCurrentDate(){   
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    now.setMilliseconds(null)
    now.setSeconds(null)
    document.getElementById('meetingTime').value = now.toISOString().slice(0, -1);
    
};

document.querySelector("button").addEventListener("click", addTask)

function addTask() {
    let taskDate = document.querySelector("#meetingTime").value.split(":00.000").join(" ")
    let taskHeading = document.querySelector("#addTaskHeading").value
    let taskDescription = document.querySelector("#addTaskDescription").value
    console.log(taskDate)
    

    if(document.querySelector("#taskResultHeading1").innerHTML === ""  && document.querySelector("#taskResultDate1").innerHTML === "" && document.querySelector("#taskResultDescription1").innerText === ""
    ){
        document.querySelector("#taskResultHeading1").innerText = taskHeading
        document.querySelector("#taskResultDescription1").innerText = taskDescription
        document.querySelector("#taskResultDate1").innerText = taskDate.split("T").join('   ')
        document.querySelector("#deleteFirst").classList.toggle("hidden")

    }else if(document.querySelector("#taskResultHeading2").innerHTML === ""  && document.querySelector("#taskResultDate2").innerHTML === "" && document.querySelector("#taskResultDescription2").innerText === ""){
        document.querySelector("#taskResultHeading2").innerText = taskHeading
        document.querySelector("#taskResultDescription2").innerText = taskDescription
        document.querySelector("#taskResultDate2").innerText = taskDate.split("T").join('   ')
        document.querySelector("#deleteSecond").classList.toggle("hidden")
    }else if(document.querySelector("#taskResultHeading3").innerHTML === ""  && document.querySelector("#taskResultDate3").innerHTML === "" && document.querySelector("#taskResultDescription3").innerText === ""){
        document.querySelector("#taskResultHeading3").innerText = taskHeading
        document.querySelector("#taskResultDescription3").innerText = taskDescription
        document.querySelector("#taskResultDate3").innerText = taskDate.split("T").join('   ')
        document.querySelector("#deleteThird").classList.toggle("hidden")
    }
    else if(document.querySelector("#taskResultHeading4").innerHTML === ""  && document.querySelector("#taskResultDate4").innerHTML === "" && document.querySelector("#taskResultDescription4").innerText === ""){
        document.querySelector("#taskResultHeading4").innerText = taskHeading
        document.querySelector("#taskResultDescription4").innerText = taskDescription
        document.querySelector("#taskResultDate4").innerText = taskDate.split("T").join('   ')
        document.querySelector("#deleteFourth").classList.toggle("hidden")
    }else if(document.querySelector("#taskResultHeading5").innerHTML === ""  && document.querySelector("#taskResultDate5").innerHTML === "" && document.querySelector("#taskResultDescription5").innerText === ""){
        document.querySelector("#taskResultHeading5").innerText = taskHeading
        document.querySelector("#taskResultDescription5").innerText = taskDescription
        document.querySelector("#taskResultDate5").innerText = taskDate.split("T").join('   ')
        document.querySelector("#deleteFifth").classList.toggle("hidden")
    }
    


    console.log(taskHeading + taskDate.split("T"))
}

// function showTask(){
//     let attribute = document.getElementsByClassName('task');
//     for (let i = 0; i < attribute.length; i++) {

//         if (attribute[i].innerText === "") {
//             attribute[i].style.display = 'none';
//         }
//     }   
// }


document.querySelector("#deleteFirst").addEventListener("click", deleteFirst)

function deleteFirst(){
    document.querySelector("#taskResultHeading1").innerText = ""
    document.querySelector("#taskResultDate1").innerText = ""
    document.querySelector("#taskResultDescription1").innerText = ""
    document.querySelector("#deleteFirst").classList.toggle("hidden")
}

document.querySelector("#deleteSecond").addEventListener("click", deleteSecond)

function deleteSecond(){
    document.querySelector("#taskResultHeading2").innerText = ""
    document.querySelector("#taskResultDate2").innerText = ""
    document.querySelector("#taskResultDescription2").innerText = ""
    document.querySelector("#deleteSecond").classList.toggle("hidden")
}

document.querySelector("#deleteThird").addEventListener("click", deleteThird)

function deleteThird(){
    document.querySelector("#taskResultHeading3").innerText = ""
    document.querySelector("#taskResultDate3").innerText = ""
    document.querySelector("#taskResultDescription3").innerText = ""
    document.querySelector("#deleteThird").classList.toggle("hidden")
}

document.querySelector("#deleteFourth").addEventListener("click", deleteFourth)

function deleteFourth(){
    document.querySelector("#taskResultHeading4").innerText = ""
    document.querySelector("#taskResultDate4").innerText = ""
    document.querySelector("#taskResultDescription4").innerText = ""
    document.querySelector("#deleteFourth").classList.toggle("hidden")
}

document.querySelector("#deleteFifth").addEventListener("click", deleteFifth)

function deleteFifth(){
    document.querySelector("#taskResultHeading5").innerText = ""
    document.querySelector("#taskResultDate5").innerText = ""
    document.querySelector("#taskResultDescription5").innerText = ""
    document.querySelector("#deleteFifth").classList.toggle("hidden")
    
}