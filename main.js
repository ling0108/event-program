fetch("event.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.event);
        let date = '';

        data.event.forEach(event => {
            date += `
            <div class="date">${event.day}<span class="month">${event.month}</span></div>
            `
                ;
        })
        document.getElementById('date').innerHTML = date;
    })