// const container;
const error=document.querySelector(".error").style.display="block";
const age=document.querySelector(".age").style.display="none"

let dateInput,monthInput,yearInput, day, month, year;

let dob=document.querySelector("#dob")
dob.addEventListener("change", getAge);

function getAge(){
        let dobInput=new Date(dob.value)
        yearInput=dobInput.getFullYear();
        monthInput=dobInput.getMonth();
        dateInput=dobInput.getDate()
        
        calcAge()
        displayAge()

}

function calcAge(){ 
    let currentFullDate=new Date();
    let currentDate=currentFullDate.getDate();
    let currentMonth=currentFullDate.getMonth()
    let currentYear=currentFullDate.getFullYear();
    let months=[31,28,31,30,31,30,31,31,30,31,30,31]
    
    
    if(dateInput>currentDate){
        currentDate=currentDate+months[currentMonth-1]
        currentMonth=currentMonth-1;
    }
    if(monthInput>currentMonth){
        currentMonth=currentMonth+12;
        currentYear=currentYear-1;
    }
    day=currentDate-dateInput;
    month=currentMonth-monthInput;
    year=currentYear-yearInput;
}

function displayAge(){
            if(day!=0){
                document.querySelector(".age").style.display="Block";
                document.querySelector(".error").style.display="none";
                document.getElementById("years").innerText=year;
                document.getElementById("months").innerText=month;
                document.getElementById("days").innerText=day; 
            }
        

}