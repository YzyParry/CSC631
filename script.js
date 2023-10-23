
(function() {
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


        // var classInfo = courseInfoText.match(/(\d{2}:\d{2} [APM]{2} - \d{2}:\d{2} [APM]{2})\s+Type: (\w+)/);
        var classInfo = courseInfoText.match(/(\d{2}:\d{2} [APM]{2} - \d{2}:\d{2} [APM]{2})/);

        if (classInfo) {
            var classTime = classInfo[1];
            // var classType = classInfo[2];
            console.log('Time:', classTime);
            // console.log('Type:', classType);
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
})();
