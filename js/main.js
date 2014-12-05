;(function(){
  'use strict';

	angular.module('addBooApp', [//For importing other mods
		])
	.controller('AddressController', function(){
		var vm = this;
		vm.records = [
			{
				firstName: 'A',
				lastName: 'Z',
				address: '',
				city: '',
				state: '',
				zip: '',
				phone: '',
				github: '',
				twitter: '',
				facebook: '',
				photo: '',
			},
			{
				firstName: 'B',
				lastName: 'Y',
				address: '',
				city: '',
				state: '',
				zip: '',
				phone: '',
				github: '',
				twitter: '',
				facebook: '',
				photo: '',
			},
			{
				firstName: 'C',
				lastName: 'X',
				address: '',
				city: '',
				state: '',
				zip: '',
				phone: '',
				github: '',
				twitter: '',
				facebook: '',
				photo: '',
			}
		]

		vm.addNewRecord = function(){
			vm.records.push(vm.newRecord);
			vm.newRecord = {};
		};

		vm.removeRecord = function(record){
			var index = vm.records.indexOf(record);
			vm.records.splice(index,1);
		};

		// vm.newRecord = null;

		// function _freshRecord(){
		// 	return {
		// 	}
		// };

	}); 

}());
