const albums = [
{
id:1,
group:"BLACKPINK",
album:"Born Pink",
price:250,
image:"images/albums/born-pink.png",
stock:5,
status:"instock"
},
{
id:2,
group:"BTS",
album:"Proof",
price:300,
image:"images/albums/proof.png",
stock:3,
status:"instock"
}
];

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiZf5_fETiXKMfNSWy6ECBgH5QNWiL-CA",
  authDomain: "kpop-album-shop.firebaseapp.com",
  projectId: "kpop-album-shop",
  storageBucket: "kpop-album-shop.firebasestorage.app",
  messagingSenderId: "365809659150",
  appId: "1:365809659150:web:c0d76829de67480216fb5f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadAlbums() {
  const snapshot = await getDocs(collection(db, "albums"));

  snapshot.forEach((doc) => {
    console.log(doc.data());
  });
}

loadAlbums();
