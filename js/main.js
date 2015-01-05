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
			.when('/record', {
				templateUrl: 'views/form.html',
				controller: 'AddressController',
				controllerAs: 'add'
			})
			.when('/:id', {//Dynamic name for route
				templateUrl: 'views/record.html',
				controller: 'RecordController',
				controllerAs: 'record'
			})
			.when('/:id/edit', {//Dynamic name for route
				templateUrl: 'views/form.html',
				controller: 'EditController',
				controllerAs: 'add'
			})
			.otherwise({redirectTo: '/'});
		})

		.controller('EditController', function($http, $routeParams, $location){
		var vm = this;
		var id = $routeParams.id;
		var url = 'https://address-book-nss-gk.firebaseio.com/' + id + '.json'
		$http.get(url)
			.success(function(data){
				vm.newRecord = data;
			})
			.error(function(err){
				console.log(err);
			});

		vm.addNewRecord = function(){
			$http.put(url, vm.newRecord)
			.success(function(data){
	      vm.newRecord = {};
	      $location.path('/');
			})
			.error(function(err){
				console.log(err);
			});
  	};
	})

	.controller('RecordController', function($http, $routeParams, $location){
		var vm = this;
		var id = $routeParams.id;
		var url = 'https://address-book-nss-gk.firebaseio.com/' + id + '.json'
		$http.get(url)
			.success(function(data){
				vm.record = data;
			})
			.error(function(err){
				console.log(err);
			});
	})

	.controller('AddressController', function($http, $location){
	var vm = this;
	var url = 'https://address-book-nss-gk.firebaseio.com/.json'
	$http.get(url)
		.success(function(data){
			vm.records = data;
		})
		.error(function(err){
			console.log(err);
		});

    // vm.getAddresses = function() {
    //   $http.get('https://address-book-nss-gk.firebaseio.com/.json')
    //   .success(function(data){
    //     vm.records = data;
    //   });
    // };

   // vm.getAddresses();

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

    // vm.displayRecord = function(){
    // 	vm.getAddresses();
    // }

		vm.addNewRecord = function(){
			var url = 'https://address-book-nss-gk.firebaseio.com/.json'
				$http.post(url, vm.newRecord)
				.success(function(data){
					// vm.records[data.record] = vm.records;
					// vm.getAddresses();
		      vm.newRecord = {};
		      $location.path('/')
				})
				.error(function(err){
					console.log(err);
				});
    };

    vm.getAddresses = function() {
      $http.get('https://address-book-nss-gk.firebaseio.com/.json')
      .success(function(data){
        vm.records = data;
      });
    };

		vm.removeRecord = function(recordId){
			var url = 'https://address-book-nss-gk.firebaseio.com/' + recordId + '.json'
			$http.delete(url)
				.success(function(){
				vm.getAddresses();
					// delete vm.records[recordId];
				})
				.error(function(err){
					console.log(err);
				});
		};
	});

}());