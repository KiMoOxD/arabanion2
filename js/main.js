let days = document.querySelector('#days'),
    hours = document.querySelector('#hours'),
    mins = document.querySelector('#mins'),
    secs = document.querySelector('#secs')


    setInterval(() => {
        let Odate = new Date('1 May 2024'),
            diff = Odate - Date.now(),
            day = Math.floor(diff / 1000 / 60 / 60 / 24),
            hour = Math.floor(diff / 1000 / 60 / 60 % 24),
            min = Math.floor(diff / 1000 / 60 % 60 ),
            sec = Math.floor(diff / 1000 % 60 )

        days.textContent = day < 10 ? '0' + day : day;;
        hours.textContent = hour < 10 ? '0' + hour : hour;;
        mins.textContent = min < 10 ? '0' + min : min;;
        secs.textContent = sec < 10 ? '0' + sec : sec;
    }, 1000)
