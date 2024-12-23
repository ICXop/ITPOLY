import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Header />  {/* Render the Header component */}
      
      <main className="main-content">
        <h2>Welcome to My Website</h2>
        <p>This is a simple React application with a header and footer.</p>
        <p>You can add more content here.</p>
      </main>
      
      <Footer />  {/* Render the Footer component */}
    </div>
  );
};

export default App;
