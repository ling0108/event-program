let eventProgram;

fetch("event.json")
    .then((res) => res.json())
    .then((data) => {
        eventProgram = data;
        console.log(eventProgram[0].day);
        let date = '';
        
        eventProgram.forEach(post => {
            date += `
            <div class="date">${eventProgram[0].day}<span class="month">${eventProgram[0].month}</span></div>
            ` ;
            
        })
         document.getElementById('date').innerHTML = date;
    })