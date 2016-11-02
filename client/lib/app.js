import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import { Session } from 'meteor/session';

import { name as Forum } from '/imports/ui/components/forum/forum';
import { name as Chronicle } from '/imports/ui/components/chronicle/chronicle';
import { name as FsCard } from '/imports/ui/components/fsCard/fs-card';
import { name as FsDropdown } from '/imports/ui/components/fsDropdown/fs-dropdown';
import { name as FsSelect } from '/imports/ui/components/fsSelect/fs-select';

angular.module('freedomsworn', [
  angularMeteor, uiRouter, ngAnimate, Forum, Chronicle, FsCard, FsDropdown, FsSelect
]);