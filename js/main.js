;(function(){
  'use strict';

	angular.module('addBooApp', [//For importing other mods
		])

  
	.controller('AddressController',[ '$http', function($http){
		var vm = this;

    vm.getAddresses = function() {
      $http.get('https://addressbookgsb.firebaseio.com/.json').success(function(data){
        vm.records = data;
      });
    }


    vm.getAddresses();

    vm.fields = [["firstName", "First Name:"], ["lastName", "Last Name:"], ["address", "Address:"], ["city", "City:"], ["state", "State:"], ["zip", "Zip Code:"], ["phone", "Phone:"], ["github", "Github:"], ["twitter", "Twitter:"], ["photo", "Photo:"]];

   // vm.fields = [{ 1: "First Name:"}, { 2: "Last Name:"}, { 3: "Address:"}, { 4: "City:"}, { 5: "State:"}, { 6: "Zip Code:"}, { 7: "Phone:"}, { 8: "Github:"}, { 9: "Twitter:"}, { 10: "Photo:"}];




	/*	vm.records = [
			{
				firstName: "Ali",
				lastName: "Baba",
				address: "asdf",
				city: "asdfasdf",
				state: "sdf",
				zip: "sdfsd",
				phone: "asdf",
				email: "jhgj",
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
				email: "jhgj",
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
				email: "jhgj",
				github: "sdf",
				twitter: "sdf",
				facebook: "sdf",
				photo: ""
			}
		] */
    
    vm.showEntry = false;

    vm.showRecords = false;
    
    vm.recordIndex = [];

    vm.displayEntry = function(){
      vm.showEntry = !vm.showEntry;
      vm.showRecords = false;
    };

    vm.displayRecords = function(){
      vm.showRecords = !vm.showRecords;
      vm.showEntry = false;
    };

    vm.showRecord = function(index){
      vm.recordIndex = index;
    };

		vm.addNewRecord = function(){
      $http.post('https://addressbookgsb.firebaseio.com/.json', vm.newRecord).success(function(data){
        console.log(data);
      
      }).error(function(err){console.log(err)});
      vm.getAddresses();
      vm.newRecord = {};
    };

		vm.removeRecord = function(record){
			var index = vm.records.indexOf(record);
			vm.records.splice(index,1);
		};

	} ])
 
  .controller('FieldGenerator', function(){
  
  });

}());
