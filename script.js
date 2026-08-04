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
  const container = document.querySelector(".albums");

  container.innerHTML = "";

  snapshot.forEach((doc) => {
    const album = doc.data();
    console.log(album);

    container.innerHTML += `
      <div class="album-card">
        <h3>${album.group}</h3>
        <p>${album.album}</p>
        <p>${album.price} MAD</p>
      </div>
    `;
  });
}

loadAlbums();
