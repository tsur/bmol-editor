'use strict';

import _ from 'lodash';

class MenuPaletteCtrl {

  constructor($scope, SpritesManager){

    $scope.sprFile = {

      loading: false,
      error: false,
      ready: false,

      onLoading: function() {

        $scope.sprFile.loading = true;
        $scope.sprFile.error = false;
      },

      onError: function(err) {

        $scope.sprFile.error = true;
        $scope.sprFile.errorMsg = err.message;
        $scope.sprFile.loading = false;
      },

      onData: function(data) {

        $scope.sprFile.error = false;

        SpritesManager.load(data, error => {

            $scope.sprFile.loading = false;

            if(error){

              $scope.sprFile.error = true;
              return $scope.sprFile.errorMsg = error.message;

            }

            $scope.sprFile.ready = true;

            console.log('start painting');


        });

        // SpriteManager.loadSpr(file['data']);
        //
        // if (SpriteManager.sprLoaded() && SpriteManager.dataLoaded()) {
        //   $scope.sprFile.loaded = true;
        //   $scope.sprFile.groundsRange = {
        //     from: 1,
        //     to: SpriteManager.read().groundsTotal,
        //     type: 1
        //   };
        //   // $scope.sprFile.bordersRange     = {from:1000,to:SpriteManager.read().bordersTotal};
        //   // $scope.sprFile.itemsRange       = {from:2000,to:SpriteManager.read().itemsTotal};
        //   // $scope.sprFile.creaturesRange   = {from:3000,to:SpriteManager.read().creaturesTotal};
        //   // $scope.sprFile.effectsRange     = {from:4000,to:SpriteManager.read().effectsTotal};
        //   // $scope.sprFile.missilesRange    = {from:5000,to:SpriteManager.read().missilesTotal};
        //   console.log($scope.sprFile.groundsRange);
        // }
      }
    };

    // SpriteManager.loadData(function(err) {
    //
    //   if (!err) {
    //     $scope.progress = false;
    //   }
    // });

  }


}

MenuPaletteCtrl.$inject = ['$scope', 'SpritesManager'];

export default MenuPaletteCtrl;