/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.factory('DataShareService', function () {
    var savedData = {};

    return {
        set: function set(data) {
            savedData = data;
        },
        get: function get() {
            return savedData;
        }
    }
});