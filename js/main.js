;(function(){
  'use strict';

	angular.module('addBooApp', ['ngRoute'])
		.config(function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl: 'views/list.html',
				controller: 'AddressController',
				controllerAs: 'add'
			})
			.when('/new', {
				templateUrl: 'views/form.html',
				controller: 'AddressController',
				controllerAs: 'add'
			})
			.when('/:id', {//Dynamic name for route
				templateUrl: 'views/table.html',
				controller: 'AddressController',
				controllerAs: 'add'
			})
			.when('/record', {//Dynamic name for route
				templateUrl: 'views/table.html',
				controller: 'AddressController',
				controllerAs: 'add'
			})
			.otherwise({redirectTo: '/'});
		})

	// .controller('ListController', function($http, $routeparams){
	// 	var vm = this;
	// 	var id = $routeParams.id;
	// 	$http.get('https://address-book-nss-gk.firebaseio.com/' + id + '.json')
	// 		.success(function(data){
	// 			vm.record = data;
	// 		})
	// 		.error(function(err){
	// 			console.log(err);
	// 		});
	// })

	.controller('AddressController', function($http){
	var vm = this;
	$http.get('https://address-book-nss-gk.firebaseio.com/.json')
		.success(function(data){
			vm.records = data;
		})
		.error(function(err){
			console.log(err);
		});

    vm.getAddresses = function() {
      $http.get('https://address-book-nss-gk.firebaseio.com/.json')
      .success(function(data){
        vm.records = data;
      });
    };

    // vm.fields = [["firstName", "First Name:"], ["lastName", "Last Name:"], ["address", "Address:"], ["city", "City:"], ["state", "State:"], ["zip", "Zip Code:"], ["phone", "Phone:"], ["github", "Github:"], ["twitter", "Twitter:"], ["photo", "Photo:"]];

   // vm.models = {};
   //  vm.$watch('input', function (newVal, oldVal) {
   //      if (vm.input) {
   //          vm.parameters = $scope.selectedQuery.fields;
   //      }

   // vm.fields = [{ 1: "First Name:"}, { 2: "Last Name:"}, { 3: "Address:"}, { 4: "City:"}, { 5: "State:"}, { 6: "Zip Code:"}, { 7: "Phone:"}, { 8: "Github:"}, { 9: "Twitter:"}, { 10: "Photo:"}];

   vm.getAddresses();


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

    // vm.showEntry = false;

    // vm.showRecords = false;

    // vm.recordIndex = [];

    // vm.displayEntry = function(){
    //   vm.showEntry = !vm.showEntry;
    //   vm.showRecords = false;
    // };

    // vm.displayRecords = function(){
    //   vm.showRecords = !vm.showRecords;
    //   vm.showEntry = false;
    // };

    // vm.showRecord = function(index){
    //   vm.recordIndex = index;
    // };

    vm.displayRecord = function(){
    	vm.getAddresses();
    }

		vm.addNewRecord = function(){
			$http.post('https://address-book-nss-gk.firebaseio.com/.json', vm.newRecord)
				.success(function(data){
					// vm.records[data.record] = vm.records;
					vm.getAddresses();
		      vm.newRecord = {};
		      alert('Your new contact has been added. Click on Records to view contact list.');
				})
				.error(function(err){
					console.log(err);
				});
    };
		// vm.removeRecord = function(record){
		// 	var index = vm.records.indexOf(record);
		// 	vm.records.splice(index,1);
		vm.removeRecord = function(recordId){
			var url = 'https://address-book-nss-gk.firebaseio.com/' + recordId + '.json';
			$http.delete(url)
				.success(function(){
				vm.getAddresses();
					// delete vm.records[recordId];
				})
				.error(function(err){
					console.log(err);
				});
		};

	// 	vm.newRecord = _freshRecord();

	// function _freshRecord(){
	// 		vm.getAddresses();
	// 		return {
	// 		}
	// 	};
	});

}());