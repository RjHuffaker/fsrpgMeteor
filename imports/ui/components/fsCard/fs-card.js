import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as ActionSuccess } from '/imports/ui/components/fsCard/action-success';
import { name as CardAction } from '/imports/ui/components/fsCard/card-action';
import { name as CardFooter } from '/imports/ui/components/fsCard/card-footer';
import { name as CardHeader } from '/imports/ui/components/fsCard/card-header';
import { name as CardProperties } from '/imports/ui/components/fsCard/card-properties';

const name = 'fsCard';

// create a module
export default angular.module(name, [
  angularMeteor, ActionSuccess, CardAction, CardFooter, CardHeader, CardProperties
]);