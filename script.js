import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "kpop-album-shop.firebaseapp.com",
  projectId: "kpop-album-shop",
  storageBucket: "kpop-album-shop.firebasestorage.app",
  messagingSenderId: "365809659150",
  appId: "1:365809659150:web:c0d76829de67480216fb5f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadAlbums() {

  const container = document.querySelector(".albums");

  container.innerHTML = "";

  const snapshot = await getDocs(collection(db,"albums"));

  snapshot.forEach(doc=>{

      const album = doc.data();

      container.innerHTML += `

      <div class="album-card">

     ${album.image ? `<img src="${album.image}" class="album-image">` : ""}
      <h3>${album.group}</h3>

      <h2>${album.album}</h2>

      <p>${album.price} MAD</p>

      <button class="buy-btn">Add to Cart</button>

      </div>

      `;

  });

}

loadAlbums();
