let eventProgram;

fetch("events.json")
    .then((res) => res.json())
    .then((data) => {
        eventProgram = data;
        // console.log(eventProgram[0].day);
        let cal = '';
        let program = '';
        
        eventProgram.forEach(post => {
            cal += `
             <div class="circle" id="${(eventProgram.may.id)}">${(eventProgram.may.id)}</div>
          
            ` ;
           
        })
         document.getElementById('cal').innerHTML = cal;
    })