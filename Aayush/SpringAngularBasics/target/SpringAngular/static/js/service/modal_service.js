app.service('ModalService' , ['$uibModal' , function($uibModal){
        var modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: 'static/view/modal.html'
        };
        
        var modalOptions ={
            closeButtonText: 'Cancel',
            actionButtonText: 'Confirm',
            headerText: 'Confirm Deletion?',
            bodyText: 'Are you sure?'
        };
        
        this.showModal = function(customModalDefaults, customModalOptions){
            if(!customModalDefaults) customModalDefaults = {};
            customModalDefaults.backdrop = 'static';
            return this.show(customModalDefaults , customModalOptions);
        };
        
        this.show = function(customModalDefaults , customModalOptions){
            //create temp objects to work with because we are in a singleton service
            var tempModalDefaults = {};
            var tempModalOptions = {};
            
            //map angular-ui modal custom defaults defined in the service
            angular.extend(tempModalDefaults , modalDefaults , customModalDefaults);
            
            //map modal.html $scope custom properties to defaults defined in service
            angular.extend(tempModalOptions , modalOptions , customModalOptions);
            
            if(!tempModalDefaults.controller){
                tempModalDefaults.controller = function($scope , $uibModalInstance){
                    $scope.modalOptions = tempModalOptions;
                    $scope.modalOptions.ok = function(result){
                        $uibModalInstance.close(result);
                    };
                    $scope.modalOptions.close = function (result){
                        $uibModalInstance.dismiss('cancel');
                    };
                };
            }
            return $uibModal.open(tempModalDefaults).result;
        };
        
}]);