(function() {
    function escapeText(text) {
        return text.replace(/[\n\r]/g, "\\n");
    }
    var courses = document.getElementsByClassName('listViewWrapper');
    for (var i = 0; i < courses.length; i++) {
        var courseInfoText = String(courses[i].outerText);

        // console.log(courseInfoText);

        var courseName = courseInfoText.match(/^(.*?)\|/);
        if (courseName) {
            courseName = courseName[1].trim();
            console.log('\nName:', courseName);
        }

        var dateRange = courseInfoText.match(/Class Begin: (\d{2}\/\d{2}\/\d{4}) \| Class End: (\d{2}\/\d{2}\/\d{4})/);
        if (dateRange) {
            var startDate = dateRange[1];
            var endDate = dateRange[2];
            console.log('Start Date:', startDate);
            console.log('End Date:', endDate);
        }

        const regex = /\b(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\b/g;
        const matches = courseInfoText.match(regex);
        if (matches) {
            const days = matches.join(", ");
            console.log(days); // Output: Tuesday, Thursday
        }

        var classInfo = courseInfoText.match(/(\d{2}:\d{2} [APM]{2} - \d{2}:\d{2} [APM]{2})/);
        if (classInfo) {
            var classTime = classInfo[1];
            console.log('Time:', classTime);
        }

        var daysOfWeek = courseInfoText.match(/Days: (.*?)\s+Time:/);
        if (daysOfWeek) {
            var days = daysOfWeek[1];
            console.log('Days:', days);
        }

        var locationMatch = courseInfoText.match(/Location: (.*?)\s+Building: (.*?)\s+Room: (\d+)/);
        if (locationMatch) {
            var location = locationMatch ? locationMatch[1] : null;
            var building = locationMatch ? locationMatch[2] : null;
            var room = locationMatch ? locationMatch[3] : null;
            console.log('Campus:', location);
            console.log('Building:', building);
            console.log('Room:', room);
        }

        var instructorInfo = courseInfoText.match(/Instructor: (.*?)\n/);
        if (instructorInfo) {
            var instructor = instructorInfo[1];
            console.log('Instructor:', instructor, '\n');
        }
    }

    // var courses = [
    //     {
    //         courseName: "Reinforcement Learning",
    //         startDate: "20230828T153000Z",  
    //         endDate: "20230828T164500Z",    
    //         location: "Reynolda Campus (UG)",
    //         building: "Manchester Hall",
    //         room: "17",
    //         byday: "MO,WE"
    //     },
    //     {
    //         courseName: "Operating Systems",
    //         startDate: "20230829T153000Z",  
    //         endDate: "20230829T164500Z",    
    //         location: "Reynolda Campus (UG)",
    //         building: "Manchester Hall",
    //         room: "17",
    //         byday: "TU,TH"
    //     }
    // ];
    
    // var icsContent = `
    // BEGIN:VCALENDAR
    // VERSION:2.0
    // `;
    
    // courses.forEach(course => {
    //     icsContent += `
    // BEGIN:VEVENT
    // SUMMARY:${escapeText(course.courseName)}
    // DTSTART:${course.startDate}
    // DTEND:${course.endDate}
    // RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20231112T155959Z;BYDAY=${course.byday}
    // LOCATION:${course.building} Room: ${course.room}
    // END:VEVENT
    // `;
    // });
    
    // icsContent += `
    // END:VCALENDAR
    // `;
    // var dataUri = "data:text/calendar;charset=utf-8," + encodeURIComponent(icsContent);
    // var downloadLink = document.createElement("a");
    // downloadLink.href = dataUri;
    // downloadLink.download = "courses.ics"; 
    // downloadLink.click();
    
})();