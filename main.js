import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCybLXpHSdFLPlPBxecMpmzStuSxOIDJ6Y",
  authDomain: "sbor-7a773.firebaseapp.com",
  databaseURL: "https://sbor-7a773-default-rtdb.firebaseio.com/",
  projectId: "sbor-7a773",
  storageBucket: "sbor-7a773.firebasestorage.app",
  messagingSenderId: "382666971780",
  appId: "1:382666971780:web:459692ab479de35d0dc0d1",
  measurementId: "G-N4E3ZT2ZRB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("messages");

document.getElementById("send").addEventListener("click", () => {
    let message = document.getElementById("message").value;
    if (message) {
        db.push().set({ text: message });
        document.getElementById("message").value = "";
    }
});

db.on("child_added", snapshot => {
    let msg = snapshot.val().text;
    let p = document.createElement("p");
    p.textContent = msg;
    document.getElementById("chat-box").appendChild(p);
});
