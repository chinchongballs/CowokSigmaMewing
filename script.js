body {
  background-color: #ffc0cb; /* Full pink background */
  font-family: "Segoe UI", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.container {
  text-align: center;
  max-width: 90%;
  width: 500px;
  padding: 2rem;
  background-color: #fff0f5;
  border-radius: 1rem;
  box-shadow: 0 0 25px rgba(255, 182, 193, 0.5);
}

h1 {
  color: #d63384;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

li {
  background-color: #ffe6f0;
  margin-bottom: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: 0.3s;
}

li:hover {
  background-color: #ffcde3;
}

.footer {
  margin-top: 2rem;
  color: #888;
  font-style: italic;
  font-size: 0.9rem;
}

/* Sharkcat gif styles */
.cat-gif {
  position: fixed;
  top: 50%;
  width: 100px;
  transform: translateY(-50%);
  z-index: 1;
  pointer-events: none;
  opacity: 0.9;
}

.cat-gif.left {
  left: 10px;
}

.cat-gif.right {
  right: 10px;
}

