app.controller('DatePickerController', function ($scope) {
    var self = $scope;

    //initializing today's date
    self.today = function () {
        self.selectedDate = new Date();
    };

    //calling today's date function
    self.today();

    //clearing the value of date:
    self.clearDate = function () {
        self.selectedDate = null;
    };

    self.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    //date options
    self.dateOptions = {
        //if weekend are to be diabled then we set the following in dateDisabled
        //dateDisabled = disabled
        dateDisabled: false,
        formatYear: 'yy',
        maxDate: new Date(),
        minDate: new Date(1916, 1, 1),
        startingDay: 1
    };

    //for disabling weekend selection
    function disabled(data) {
        var date = data.date,
                mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    //opening the popup
    self.openDatePopUp = function () {
        console.log('opening date popup');
        self.popup1.opened = true;
    };

    //setting the date after selecting
    self.setDate = function (year, month, day) {
        self.selectedDate = new Date(year, month, day);
    };

    //date pop up being set to false in the begining
    self.popup1 = {
        opened: false
    };

    //declaring and setting the values of tommorow and day after tommorow
    var tommorow = new Date();
    tommorow.setDate(tommorow.getDate() + 1);
    var dayAfterTommorow = new Date();
    dayAfterTommorow.setDate(tommorow.getDate() + 1);

    //setting the event type for tommorow and day after tommorow
    self.events = [{
            date: tommorow,
            status: 'full'
        },
        {
            date: dayAfterTommorow,
            status: 'partial'
        }
    ];
    
    //custom class for inline fuction
    function getDayClass(data){
        var date = data.date,
                mode = data.mode;
        
        if(mode === 'day'){
            var dayToCheck = new Date(date).setHours(0,0,0,0);
            
            for(var i =0 ; i< self.events.length ; i++){
                var currentDay = new Date(this.events[i].date.setHours(0,0,0,0));
                
                if(dayToCheck === currentDay){
                    return this.events[i].status;
                }
                
            }
        }
        return '';
    }

});