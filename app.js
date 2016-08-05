(function() {
	var app = angular.module('workoutlog', [
		'btford.socket-io',
		'ui.router',
		'workoutlog.define',
		'workoutlog.logs',
		'workoutlog.feed',
		'workoutlog.history',
		'workoutlog.auth.signup',
		'workoutlog.auth.signin'
	])
	.factory('socket', function(socketFactory) {   // .factory is like .service, allows us to access the socket
		var myIoSocket = io.connect('http://localhost:3000');
		
		var socket = socketFactory({
			ioSocket: myIoSocket
		});

		return socket;
	});

	function config($urlRouterProvider) {
		$urlRouterProvider.otherwise('/define');
	}

	config.$inject = [ '$urlRouterProvider' ];
	app.config(config);
	app.constant('API_BASE', '//localhost:3000/api/');
})();
