let eventProgram;

fetch("events.json")
    .then((res) => res.json())
    .then((data) => {
        eventProgram = data;
        console.log(eventProgram);
        let cal = '';
        let program = '';
        
        eventProgram.forEach(calendars => {
            cal += `
             <div class="circle" id="${(calendars.calendar.may.id)}">${(calendars.calendar.may.id)}</div>
          
            ` ;
           
        })
         document.getElementById('cal').innerHTML = cal;
    })