let axios = require('axios');

// API
let id = 'YOUR_CLIENT_ID';
let sec = 'YOUR_SECRET_ID';
let param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo (username) {
  console.log('made it to the getUserInfo function');
  return axios.get('https://api.github.com/users/' + username + param);
  //returns a promise
}

let helpers = {
  getPlayersInfo : function (players) { //array of usernames
    axios.all(players.map( //for each player, get data
      function (username) {
        return getUserInfo(username)
      }) // end map
    // on .all promise of all players' data, then...
    ).then((info)=>{
      console.log(info);
      //return (info.map(()=>return user.data))) //return an array of github data for players
    }).catch((err)=>{
      console.log(err);
    }) // end catch
  }

}

module.exports = helpers;