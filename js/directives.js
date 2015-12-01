postControllers.directive('counter', function() {
	return {
		restrict: 'A',
		scope: { value: '=value' },
		template: '<div class="counter">\
				  <a href="javascript:;" ng-click="plus()"><i class="fa fa-thumbs-o-up fa-2x"></i></a>\
				  <input type="text" ng-model="value" ng-change="changed()" ng-readonly="readonly">\
				  <a  href="javascript:;" ng-click="minus()"><i class="fa fa-thumbs-o-down fa-2x"></i></a>\
				  </div>',
		link: function( scope , element , attributes ) {

			var min = angular.isUndefined(attributes.min) ? null : parseInt(attributes.min);
			var max = angular.isUndefined(attributes.max) ? null : parseInt(attributes.max);
			var step = angular.isUndefined(attributes.step) ? 1 : parseInt(attributes.step);

			element.addClass('counter-container');
			scope.readonly = angular.isUndefined(attributes.editable) ? true : false;

			var setValue = function(val) {
				scope.value = parseInt( val );
			}

			setValue(scope.value);
			scope.minus = function() {
				if ( min && (scope.value <= min || scope.value - step <= min) || min === 0 && scope.value < 1 ) {
					setValue( min );
					return false;
				}
				setValue(scope.value - step);
			};

			scope.plus = function() {
				if ( max && (scope.value >= max || scope.value + step >= max) ) {
					setValue( max );
					return false;
				}
				setValue(scope.value + step);
			};

			scope.changed = function() {
				if ( !scope.value ) setValue( 0 );
				if ( /[0-9]/.test(scope.value) ) {
					setValue( scope.value );
				}
				else {
					setValue(scope.min);
				}
				if ( min && (scope.value <= min || scope.value - step <= min) ) {
					setValue( min );
					return false;
				}
				if ( max && (scope.value >= max || scope.value + step >= max) ) {
					setValue( max );
					return false;
				}
				setValue(scope.value);
			};
		}
	}
});