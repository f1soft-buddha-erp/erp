app.controller('UserController', [
    '$scope',
    'UserService',
    'ModalService',
    'NgTableParams',
    '$route',
    function ($scope, UserService, ModalService, NgTableParams, $route) {
        console.log('In user controller.');
        // initializing values
        var self = this;
        self.user = {
            id: null,
            firstName: '',
            lastName: '',
            mobileNumber: '',
            emailAddress: '',
            password: '',
            userName: '',
            dob: '',
            gender: '',
            active: ''
        };
        self.mapValues = [{
                radioLabel: 'Male',
                radioValue: 'M'
            },
            {
                radioLabel: 'Female',
                radioValue: 'F'
            }];

        self.type = '';
        self.msg = '';

        //table params
        self.users = new NgTableParams({}, {getData: getData});

        function getData() {
            return self.fetchAllUsers();
        }

        //initializing alerts
        self.alerts = [];
        // fetching users
        self.fetchAllUsers = function () {
            console.log('fetching users');
            UserService.fetchAllUsers().then(function (d) {
                self.users = d;
                return self.users;
            }, function (errResponse) {
                console.error('Error while fetching users.');
            });
        };
        // creating user
        self.createUser = function (user) {
            UserService.createUser(user)
                    .then(
                            self.type = 'success',
                            self.msg = 'User Created Successfully.',
                            self.fetchAllUsers(),
                            function (errResponse) {
                                self.alerts.push({type: 'danger', msg: 'User not created successfully'});
                                console.error('Error while creating user.');
                            });
//            location.reload();
            $route.reload();
            self.alerts.push({type: self.type, msg: self.msg});
        };
        self.fetchAllUsers();
        //updating user
        self.updateUser = function (user, id) {
            UserService.updateUser(user, id)
                    .then(
                            self.fetchAllUsers(),
                            function (errResponse) {
                                console.error('Error while updating user');
                            }
                    );
        };
        self.fetchAllUsers();
        // perform submit action
        self.submit = function () {
//            alert('Submitting.....')
            if (self.user.id === null) {
                console.log('Saving new user ', self.user);
                self.createUser(self.user);
            } else {
                console.log('Updating user');
                self.updateUser(self.user, self.user.id);
            }
            self.reset();
        };
        //getting the values for editing:
        self.edit = function (id) {
            console.log('Updating user with user id ', id);
            for (var i = 0; i < self.users.length; i++) {
                if (self.users[i].id === id) {
                    self.user = angular.copy(self.users[i]);
                    break;
                }
            }
        };
        //deleting a user
        self.deleteUser = function (id) {
            var fullName = self.user.firstName + ' ' + self.user.lastName;
            var modalOptions = {
                closeButtonText: 'Cancel',
                actionButtonText: 'Delete User',
                headerText: 'Delete ' + fullName + ' ?',
                bodyText: 'Are you sure you want to delete this user?'
            };
            ModalService.showModal({}, modalOptions).then(function (result) {
                UserService.deleteUser(id)
                        .then(
                                self.alerts.push({type: 'success', msg: 'User deleted successfully'}),
                                self.fetchAllUsers(),
                                function (errResponse) {
                                    self.alerts.push({type: 'danger', msg: 'User not deleted successfully'});
                                    console.error('Error deleting the user.');
                                }
                        );
                $route.reload();
            });
        };

        //closig the alerts
        self.closeAlert = function (index) {
            self.alerts.splice(index, 1);
        };

        // reset form values
        self.reset = function () {
//            alert('Restting all values');
            self.user = {
                id: null,
                firstName: '',
                lastName: '',
                mobileNumber: '',
                emailAddress: '',
                password: '',
                userName: '',
                dob: ''
            };
            $scope.myForm.$setPristine(); // reset form action
        };

        //reloading the table after adding
        self.reloadRoute = function () {
            $route.reload();
        };

    }]);