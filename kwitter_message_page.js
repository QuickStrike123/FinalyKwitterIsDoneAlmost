const firebaseConfig = {
      apiKey: "AIzaSyCeaEh72UFmUg_rR4mHR6IWWjj-gRpLouo",
      authDomain: "kwitter-d3827.firebaseapp.com",
      databaseURL: "https://kwitter-d3827-default-rtdb.firebaseio.com",
      projectId: "kwitter-d3827",
      storageBucket: "kwitter-d3827.appspot.com",
      messagingSenderId: "851858381403",
      appId: "1:851858381403:web:e51c7c68d21bbd2d1f3d7e"
    };
  
    firebase.initializeApp(firebaseConfig);

    UserName = localStorage.getItem("User");

    RoomName = localStorage.getItem("RoomName");

    function Send(){

      msg = document.getElementById("MSG").value;

      firebase.database().ref(RoomName).push({

            name:UserName,

            message:msg,

            likes:0

      });

      document.getElementById("MSG").value = "";

    }

function getData() { firebase.database().ref("/"+RoomName).on('value', function(snapshot) { document.getElementById("Output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

console.log(firebase_message_id);

console.log(message_data);

Like = message_data['likes'];

Message = message_data['message'];

Name = message_data['name'];

Name_With_Tag = "<h4> " + Name + " <img class='user_tick' src='tick.png'> </h4>";

Message_With_Tag = "<h4 class='message_h4'> " + Message + " </h4>";

Like_Button = "<button class = 'btn btn-warning' id = " + firebase_message_id + " value = " + Like + " onclick = ' updatelikes(this.id) '>";

Span_With_Tag = "<span class='glyphicon glyphicon-thumbs-up'> Like : " + Like + "</span></button><hr>"

Row = Name_With_Tag + Message_With_Tag + Like_Button + Span_With_Tag;

document.getElementById("Output").innerHTML += Row;

      } });  }); }
getData();

function updatelikes(MessageId) {

      console.log(" Clicked On The Like Button : " + MessageId);

      ButtonId = MessageId;

      Likes = document.getElementById(ButtonId).value;

      UpdatedLikes = Number(Like) + 1;

      console.log(" Updated Likes : " + UpdatedLikes);

      firebase.database().ref(RoomName).child(MessageId).update({

            like:updatelikes

      });

}

function Logout() {

      localStorage.removeItem("User");

      localStorage.removeItem("RoomName");

      window.location = "index.html"
      
}