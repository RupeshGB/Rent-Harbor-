const moment  = require("moment");

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS : [
        {title : "Product call", theme : "GREEN", startTime : moment().add(-12, 'd').startOf('day'), endTime : moment().add(-12, 'd').endOf('day')},
        {title : "Meeting with tech team", theme : "PINK", startTime : moment().add(-8, 'd').startOf('day'), endTime : moment().add(-8, 'd').endOf('day')},
        {title : "Meeting with Cristina", theme : "PURPLE", startTime : moment().add(-2, 'd').startOf('day'), endTime : moment().add(-2, 'd').endOf('day')},
        {title : "Meeting with Alex", theme : "BLUE", startTime : moment().startOf('day'), endTime : moment().endOf('day')}, 
        {title : "Product Call", theme : "GREEN", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "PURPLE", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "ORANGE", startTime : moment().add(3, 'd').startOf('day'), endTime : moment().add(3, 'd').endOf('day')},
        {title : "Product meeting", theme : "PINK", startTime : moment().add(5, 'd').startOf('day'), endTime : moment().add(5, 'd').endOf('day')},
        {title : "Sales Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Product Meeting", theme : "ORANGE", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Marketing Meeting", theme : "PINK", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Client Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Sales meeting", theme : "BLUE", startTime : moment().add(12, 'd').startOf('day'), endTime : moment().add(12, 'd').endOf('day')},
        {title : "Client meeting", theme : "PURPLE", startTime : moment().add(16, 'd').startOf('day'), endTime : moment().add(16, 'd').endOf('day')},
    ],

    RECENT_TRANSACTIONS : [
        {name : "Alex Smith", email : "alex@gmail.com", location : "Atlanta", amount : 1250, date : moment().endOf('day')},
        {name : "Ereena Njigba", email : "ereena@gmail.com", location : "Atlanta", amount : 1300, date : moment().add(-1, 'd').endOf('day')},
        {name : "John Doe", email : "jhon@gmail.com", location : "Alpharetta", amount : 975, date : moment().add(-1, 'd').endOf('day')},
        {name : "AJ Brown", email : "matrix@gmail.com", location : "Decatur", amount : 1039, date : moment().add(-1, 'd').endOf('day')},
        {name : "Garrett Wilson", email : "virat@gmail.com", location : "Atlanta", amount : 1150, date : moment().add(-2, 'd').endOf('day')},
        {name : "Miya Monroe", email : "miya@gmail.com", location : "Suwanee", amount : 1000, date : moment().add(-2, 'd').endOf('day')},
        {name : "Virat Patel", email : "virat@gmail.com", location : "Alpharetta", amount : 950, date : moment().add(-2, 'd').endOf('day')},
    ]
});
