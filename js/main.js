;(function(){
  'use strict';

	angular.module('addBooApp', [//For importing other mods
		])
	.controller('AddressController', function($http){
		// .controller('AddressController', function(){
		var vm = this;
		// vm.records = [
		// 	{
		// 		firstName: "Ali",
		// 		lastName: "Baba",
		// 		address: "asdf",
		// 		city: "asdfasdf",
		// 		state: "sdf",
		// 		zip: "sdfsd",
		// 		phone: "asdf",
		// 		email: "jhgj",
		// 		github: "sdfdg",
		// 		twitter: "dfg",
		// 		facebook: "dfgdfg",
		// 		photo: ""
		// 	},
		// 	{
  //       firstName: "Basdf",
		// 		lastName: "Yurt",
		// 		address: "asdf",
		// 		city: "asdfsadf",
		// 		state: "asdf",
		// 		zip: "sdf",
		// 		phone: "gwt2345",
		// 		email: "jhgj",
		// 		github: "sdf",
		// 		twitter: "aasdf",
		// 		facebook: "sdf",
		// 		photo: ""
		// 	},
		// 	{
  //       firstName: "Call",
		// 		lastName: "Memaw",
		// 		address: "sdfsdf",
		// 		city: "sdf",
		// 		state: "sdfsdf",
		// 		zip: "sdf",
		// 		phone: "sdf",
		// 		email: "jhgj",
		// 		github: "sdf",
		// 		twitter: "sdf",
		// 		facebook: "sdf",
		// 		photo: ""
		// 	}
		// ];

		$http.get('https://address-book-nss-gk.firebaseio.com/.json')
		.success(function(data){
			vm.records = data;
		})
		.error(function(err){
			console.log(err);
		});

    vm.recordIndex = [];

    vm.displayEntry = function(){

    };

    vm.displayRecords = function(){

    };

    vm.showRecord = function(index){
      vm.recordIndex = index;
    };

		vm.addNewRecord = function(){
			$http.post('https://address-book-nss-gk.firebaseio.com/.json', vm.newRecord)
				.success(function(data){
					vm.records[data.record] = vm.records;
					vm.newRecord = _freshRecord();
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
					delete vm.records[data];
				})
				.error(function(err){
					console.log(err);
				});
		};

		vm.newRecord = _freshRecord();

	});

	function _freshRecord(){
			return {
			}
		};

}());
