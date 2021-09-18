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

document.getElementById("user_name").innerHTML = "Welcome " + UserName + "!";

function AddRoom() {

  RoomName = document.getElementById("Roomname").value

  localStorage.setItem("RoomName", RoomName);

  firebase.database().ref("/").child(RoomName).update({

    WhyWeMakeThis: "To Make Room"

  });

  window.location = "kwitter_message_page.html";

}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("Output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      RoomNames = childKey;

      console.log("RoomNames - " + RoomNames);

      Row = "<div class='RoomName' id=" + RoomNames + " onclick = 'RedirectToRoomName(this.id)'> # " + RoomNames + "</div><hr>";

      document.getElementById("Output").innerHTML += Row

    });
  });
}
getData();

function RedirectToRoomName(name){

  console.log(name);

  localStorage.setItem("RoomNames",name);

  window.location = "kwitter_message_page.html";

}

function Logout() {

  localStorage.removeItem("User");

  localStorage.removeItem("RoomName");

  window.location = "index.html";
  
}