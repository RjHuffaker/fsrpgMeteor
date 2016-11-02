import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './chronicle-list.html';

class ChronicleList {
  constructor($scope, $reactive) {
    'ngInject';
    
    $reactive(this).attach($scope);
    
    this.subscribe('chronicles');
      
      this.currentRow ='';
      
      this.helpers({
        chronicleList(){
          return Chronicles.find({});
        }
      });
      
      this.selectRow = function(row){
        this.currentRow = row;
        console.log(row);
      };
      
      this.addChronicle = function(){
        var newChronicle = {
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
        
        newChronicle._id = Random.id();
        newChronicle.owner = $rootScope.currentUser._id;
        newChronicle.createdOn = new Date();
        newChronicle.lastModified = new Date();
        
        newChronicle = new chronicleObject(newChronicle);
        
        Chronicles.insert(newChronicle, function(error, result){
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
      
      this.deleteChronicle = function(chronicle){
        Chronicles.remove(chronicleId);
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