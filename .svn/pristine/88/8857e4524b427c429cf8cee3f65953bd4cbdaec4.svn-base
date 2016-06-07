app.factory('UserService', [
    '$http',
    '$q',
    function ($http, $q) {
        return {
            // list all users
            fetchAllUsers: function () {
                return $http.get(
                        'http://localhost:9090/SpringAngular/user/').then(
                        function (response) {
                            return response.data;
                        }, function (errResponse) {
                    console.error('Error while fetching users');
                    return $q.reject(errResponse);
                });
            },
            // create user
            createUser: function (user) {
                return $http.post(
                        'http://localhost:9090/SpringAngular/user/', user)
                        .then(function (response) {
                            return response.data;
                        }, function (errResponse) {
                            console.error('Error while creating user ');
                            return $q.reject(errResponse);
                        });
            },
            //updating the user
            updateUser: function (user, id) {
                return $http.post('http://localhost:9090/SpringAngular/user/' + id, user)
                        .then(
                                function (response) {
                                    return response.data;
                                },
                                function (errResponse) {
                                    console.error('Error while updating user');
                                    return $q.reject(errResponse);
                                }
                        );
            },
            //delete user
            deleteUser: function (id) {
                return $http.delete('http://localhost:9090/SpringAngular/user/' + id)
                        .then(function (response) {
                            return response.data;
                        },
                                function (errResponse) {
                                    console.error('Error While deleting the user');
                                    return $q.reject(errResponse);
                                });
            },
            //get radio buttons
            getRadioButton: function () {
                return $http.get('http://localhost:9090/SpringAngular/getRadio/').then(
                        function (response) {
                            return response.data;
                        }
                );
            }

        };
    }])