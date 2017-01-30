import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './chronicle-list.html';

class ChronicleList {
  constructor($scope, $rootScope, $reactive, $location, $timeout) {
    'ngInject';
    
    $reactive(this).attach($scope);
    
    this.subscribe('chronicles');
      
      this.helpers({
        itemList(){
          return Chronicles.find({});
        }
      });
      
      this.currentItem ='';
      
      this.selectItem = function(row){
        this.currentItem = row;
        console.log(row);
      };
      
      this.orderBy = 'title';
      
      this.reverse = false;
      
      this.toggleOrder = function(column){
        if(this.orderBy !== column){
          this.orderBy = column;
          this.reverse = false;
        } else {
          this.reverse = !this.reverse;
        }
      };
      
      this.addItem = function(){
        
        var newItem = {
          name: 'A New Chronicle',
          timerSpeed: 25,
          startTime: new Date().getTime(),
          pauseOnAction: true,
          timeline: [],
          pause: true,
          players: [
            {count: 0, timer: undefined, actions: []},
            {count: 0, timer: undefined, actions: []},
            {count: 0, timer: undefined, actions: []}
          ]
        };
        
        newItem._id = Random.id();
        newItem.owner = $rootScope.currentUser._id;
        newItem.createdOn = new Date();
        newItem.lastModified = new Date();
        
        newItem = new chronicleObject(newItem);
        
        Chronicles.insert(newItem, function(error, result){
          if(error){
            console.log(error);
          } else if(result) {
            console.log(result);
            $timeout(function(){
              $location.path('/chronicles/'+result);
            }, 0);
          }
        });
      };
      
      this.deleteItem = function(chronicle){
        Chronicles.remove(chronicle._id);
        this.currentItem = '';
      };
  }
}

const name = 'chronicleList';

// create a module
export default angular.module(name, [
  angularMeteor
])
  .component(name, {
    templateUrl,
    controllerAs: 'vm',
    controller: ChronicleList
  });