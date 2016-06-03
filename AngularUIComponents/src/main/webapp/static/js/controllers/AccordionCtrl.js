/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.controller('AccordionCtrl', function ($scope) {
    $scope.menus = [
        {
            parent: 'Menu 1',
            children: [
                {
                    name: 'Child 1.1',
                    link: '#'
                },
                {
                    name: 'Child 1.2',
                    link: '#'
                }
            ]
        },
        {
            parent: 'Menu 2',
            children: [
                {
                    name: 'Child 2.1',
                    link: '#'
                },
                {
                    name: 'Child 2.2',
                    link: '#'
                },
                {
                    name: 'Child 2.3',
                    link: '#'
                }
            ]
        }
    ];
    
    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

});