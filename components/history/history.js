(function() {
	angular.module('workoutlog.history', [ 'ui.router' ])
	.config(historyConfig);

	function historyConfig($stateProvider) {
		$stateProvider
			.state('history', {
				url: '/history',
				templateUrl: '/components/history/history.html',
				controller: HistoryController,
				controllerAs: 'ctrl',
				bindToController: this,
				resolve: {
					fetchHistory: [
						'LogsService',
						function(LogsService) {
							return LogsService.fetch();
						}
					]
				}

			});
	}

	historyConfig.$inject = [ '$stateProvider' ];

HistoryController.$inject = [ 'LogsService' ];
function HistoryController(LogsService) {
	var vm = this;
	vm.history = LogsService.get();
}

})();