const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const courseName = document.querySelector("#course-name");
const credit = document.querySelector("#credit");
const grade = document.querySelector("#grade");
const table_body = document.querySelector("#table-body");
const table_foot = document.querySelector("#table-foot");
const table = document.querySelector("#table");
const CalGpa = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");

let GPA = [];

add.addEventListener("click", () =>{
    if (courseCode.value === "" || courseName ==="" || credit <= 0 || grade.selectedIndex === 0)
    {
        alert("Wrong input,check and try again");
    } 
    else
    {
        const row = document.createElement("tr");
        const CCode = document.createElement("td");
        CCode.innerHTML = courseCode.value;
        const CName = document.createElement("td");
        CName.innerHTML = courseName.value;
        const Cred = document.createElement("td");
        Cred.innerHTML = credit.value;
        const Grade = document.createElement("td");
        Grade.innerHTML = grade.options[grade.selectedIndex].text;
        row.appendChild(CCode);
        row.appendChild(CName);
        row.appendChild(Cred);
        row.appendChild(Grade);
        table_body.appendChild(row);
        table.classList.remove("display-none");
        CalGpa.classList.remove("display-none");
        clear.classList.remove("display-none");
        GPA.push({
            credit: credit.value,
            grade: grade.options[grade.selectedIndex].value,
        });
        console.log(GPA);
        courseCode.value = "";
        courseName.value=""
        credit.value = "";
        grade.selectedIndex = "0";
    }
});

CalGpa.addEventListener("click", () => {
    let credits = 0;
    let pcreditgrade = 0;
    let sum = 0;
    let arrear=1;
    const tra=document.createElement("tr")
    GPA.forEach((result) => {
        arrear *= parseInt(result.grade);
    });
    if(arrear==0)
    {
        tra.innerHTML="Clear Arrear for GPA"
        table_foot.appendChild(tra);
    }
    else
    {
        console.log(arrear)
        GPA.forEach((result) => {
            credits += parseInt(result.credit);
            pcreditgrade  = parseInt(result.credit) * parseInt(result.grade);
            sum += pcreditgrade ;
        });
        
        const tr = document.createElement("tr");
    
        tdCredit = document.createElement("td");
        tdCredit.innerHTML = `Your total credit is ${credits}`;
    
        tdGpa = document.createElement("td");
        tdGpa.setAttribute("colspan", "3");
        tdGpa.innerHTML = `Your GPA is ${(sum / credits).toFixed(2)} `;
    
        tr.appendChild(tdCredit);
        tr.appendChild(tdGpa);
        if (table_foot.querySelector("tr") !== null) {
            table_foot.querySelector("tr").remove();
        }
        table_foot.appendChild(tr);
    }
    
});

clear.addEventListener("click", () => {
    GPA = [];
    table_body.querySelectorAll("*").forEach((child) => child.remove());
    if (table_foot.querySelector("tr") !== null) 
    {
        table_foot.querySelector("tr").remove();
    }
    table.classList.add("display-none");
    CalGpa.classList.add("display-none");
    clear.classList.add("display-none");
});



var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });