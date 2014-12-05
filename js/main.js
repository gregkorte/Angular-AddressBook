;(function(){
  'use strict';

	angular.module('addBooApp', [//For importing other mods
		])
	.controller('AddressController', function(){
		var vm = this;
		vm.record = [
			{
				firstName:
				lastName:
				address:
				city:
				state:
				zip:
				phone:
				github:
				twitter:
				facebook:
				photo:
			},
			{
				priority: 'Medium',
				name: '3nd task',
				desc: '3nd task desc',
				due: '3nd due date'
			},
			{
				priority: 'Low',
				name: '2nd task',
				desc: '2nd task desc',
				due: '2nd due date'
			}
		]

		vm.addNewTask = function(){
			vm.tasks.push(vm.newTask);
			vm.newTask = _freshTask();
		};

		vm.removeTask = function(todo){
			var index = vm.tasks.indexOf(todo);
			vm.tasks.splice(index,1);
		};

		vm.newTask = _freshTask();

		vm.priorityOptions = {
			high: 'High',
			medium: 'Medium',
			low: 'Low'
		};

		function _freshTask(){
			return {
				priority: 'low'
			}
		};

	}); 

}());
