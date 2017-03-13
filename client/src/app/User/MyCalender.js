(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:CalenderController
     * @description
     *
     * This is dashboard controller. It contains all the details about the user. It fetches the data of the user by using AuthFactory.
     **/
    module.controller('CalenderController', function ($scope, $filter, $rootScope, $location, $compile, $timeout, calenderEvents) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Calender");
            $scope.getEvent({});
        };

        $scope.month = moment().format('MMM');
        model.calendarView = 'month';
        model.viewDate = new Date();
        model.isCellOpen = true;
        $scope.$watch("model.calendarView", function(currentView){
            $timeout(function() {
                if(currentView === 'day'){
                    classElement = document.getElementsByClassName("day-highlight");
                    if(classElement.length > 0){
                        /* For Slot View Change */
                        angular.forEach(classElement, function (value, key) {
                            var spans = value.getElementsByTagName("span");
                            var span4th = spans[3].innerHTML;
                            var pixel = span4th.replace(':','')+'px';
                            value.style.top = pixel; 
                        });
                    }
                }
            }, 1000);
        });

        $scope.getEvent = function (params){
            calenderEvents.get(params).$promise.then(function (response) {
                model.events = eventBuild(response);
                $scope.prevMonth = response.prevMonth;
                $scope.nextMonth = response.nextMonth;
            });
        };
        $scope.prev = function (){
            $scope.getEvent({month:$scope.prevMonth});
        };
        $scope.today = function (){
            $scope.getEvent({});
        };
        $scope.next = function (){
            $scope.getEvent({month:$scope.nextMonth});
        };
        model.eventClicked = function(event) {
            $location.path('/appointment/'+event.id);
        };
        model.toggle = function($event, field, event) {
            $event.preventDefault();
            $event.stopPropagation();
            event[field] = !event[field];
        };
        Date.prototype.subHours= function(h){
            this.setHours(this.getHours()-h);
            return this;
        };
        $scope.setEvent = function (eventsLists, appointmentEvent) {
            $.each(appointmentEvent, function (index) {
                eventsList = {
                    title: appointmentEvent[index].first_name+ ' ' +appointmentEvent[index].last_name,
                    type: 'info',
                    startsAt: moment(appointmentEvent[index].appointment_date+' '+appointmentEvent[index].appointment_time).toDate(),
                    draggable: false,
                    resizable: false,
                    editable: false,
                    deletable: false,
                    id: appointmentEvent[index].id
                };
                eventsLists.push(eventsList);
            });
            return eventsLists;
        };

        function eventBuild(response){
            var eventsLists = [];
            if(response.appointmentEvent){
                appointmentEvent  = response.appointmentEvent;
                eventsLists = $scope.setEvent(eventsLists, appointmentEvent);
            }
            if(response.leaveEvent){
                leaveEvent  = response.leaveEvent;
                eventsLists = $scope.setEvent(eventsLists, leaveEvent);
            }else{
                eventsLists = '';
            }
            return eventsLists;
        }
        model.init();
    })
    /* If  the Day View Time Format Need to 12 Hour Uncomment the below code mugundhan_352at15 */
    /* .config(function(calendarConfig) {
        calendarConfig.dateFormatter = 'moment';
        calendarConfig.allDateFormats.moment.date.hour = 'HH:mm';
    }) */;
}(angular.module("Abs.user")));
