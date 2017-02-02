let axios = require('axios');

// API
let id = 'YOUR_CLIENT_ID';
let sec = 'YOUR_SECRET_ID';
let param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param);
  //returns a promise of 1 user's data
}

let helpers = {

  // takes an array and returns an array of api data as a promise
  getPlayersInfo : function (players) {
    return axios.all(players.map( //for each player, get data
        function (username) {
            return getUserInfo(username)
        }) // end map gives an array
      // on .all promise of all players' data, then...
      ).then(function (info) {
        //return an array of player data as a promise
        return info.map(function (user) {
            return user.data;
          }) //end map
      }).catch(function(err) {
        console.warn('Error in getPlayersInfo', err);
      }) //end catch
  } // end getPlayersInfo

}; //end helpers

module.exports = helpers;