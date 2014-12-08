;(function(){
  'use strict';

	angular.module('addBooApp', [//For importing other mods
		])
	.controller('AddressController',[ '$http', function($http){
		var vm = this;

    vm.fields = [["firstName", "First Name:"], ["lastName", "Last Name:"], ["address", "Address:"], ["city", "City:"], ["state", "State:"], ["zip", "Zip Code:"], ["phone", "Phone:"], ["github", "Github:"], ["twitter", "Twitter:"], ["photo", "Photo:"]];

		vm.records = [
			{
				firstName: "Ali",
				lastName: "Baba",
				address: "asdf",
				city: "asdfasdf",
				state: "sdf",
				zip: "sdfsd",
				phone: "asdf", 
				github: "sdfdg", 
				twitter: "dfg",
				facebook: "dfgdfg",
				photo: ""
			},
			{
        firstName: "Basdf",
				lastName: "Yurt",
				address: "asdf",
				city: "asdfsadf",
				state: "asdf",
				zip: "sdf",
				phone: "gwt2345", 
				github: "sdf", 
				twitter: "aasdf",
				facebook: "sdf",
				photo: ""

			},
			{
        firstName: "Call",
				lastName: "Memaw",
				address: "sdfsdf",
				city: "sdf",
				state: "sdfsdf",
				zip: "sdf",
				phone: "sdf", 
				github: "sdf", 
				twitter: "sdf",
				facebook: "sdf",
				photo: ""

			}
		]
    
    vm.recordIndex = [];
    
    vm.displayEntry = function(){
    
    };

    vm.displayRecords = function(){
    
    };

    vm.showRecord = function(index){
      vm.recordIndex = index;
    };

		vm.addNewRecord = function(){
			vm.records.push(vm.newRecord);
      vm.newRecord = {};
    };

		vm.removeRecord = function(record){
			var index = vm.records.indexOf(record);
			vm.records.splice(index,1);
		};

	} ]); 

}());
