function calculateAge()
{
    const today= new Date();
    const birthDateInput=document.getElementById("birthdate").value;
    const birthDatePart=birthDateInput.split("-");
    const birthDay=birthDatePart[2];
    const birthMonth=birthDatePart[1] - 1;
    const birthYear=birthDatePart[0];
    const birthDate=new Date(birthYear,birthMonth, birthDay);
    console.log(birthDateInput);
    console.log(birthDatePart);
    console.log(birthDay);
    console.log(birthMonth);
    console.log(birthYear);
    console.log(birthDate);
    const ageInMilliSeconds=today - birthDate;
    console.log(ageInMilliSeconds);
    const ageInSeconds=Math.floor(ageInMilliSeconds/1000);
    const ageInMinutes=Math.floor(ageInSeconds/60);
    const ageInHours=Math.floor(ageInMinutes/60);
    const ageInDays=Math.floor(ageInHours/24);
    const ageInWeeks=Math.floor(ageInDays/7);
    const ageInMonths=Math.floor(ageInDays/30.436875);
    const ageInYears=Math.floor(ageInDays/365.25);
    const resulContainer=document.getElementById("rescontainer");
    const result=document.getElementById("result");
    result.innerHTML=`
    <div class="result-item">
        <h3>Age:</h3>
        <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days </p>
    </div>
    <div class="result-item">
        <h3>Month Passed:</h3>
        <p>${ageInMonths}</p>
    </div>
    <div class="result-item">
        <h3>Weeks Passed:</h3>
        <p>${ageInWeeks}</p>
    </div>
    <div class="result-item">
        <h3>Days Passed:</h3>
        <p>${ageInDays}</p>
    </div>
    <div class="result-item">
        <h3>Hours Passed:</h3>
        <p>${ageInHours}</p>
    </div>
    <div class="result-item">
        <h3>Seconds Passed:</h3>
        <p>${ageInSeconds}</p>
    </div>
    `;
}

const ageCalculatorForm=document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit",(Event)=>
{
   Event.preventDefault();
    calculateAge();
})