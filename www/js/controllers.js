angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $http, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };

    //Llamo al servidor de los países y almaceno la información en $scope.paises
    $http.get('https://restcountries.eu/rest/v1/region/americas')
        .then(function(data){
          $scope.paises = data.data;
        },
        function(error){
          alert("Error: "+error);
    });

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
