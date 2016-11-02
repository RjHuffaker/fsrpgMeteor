import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as ChronicleList } from '/imports/ui/components/chronicle/chronicle-list';
import { name as ChronicleDetails } from '/imports/ui/components/chronicle/chronicle-details';

const name = 'chronicle';

// create a module
export default angular.module(name, [
  angularMeteor, ChronicleList, ChronicleDetails
]);