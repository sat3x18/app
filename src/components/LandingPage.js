// LandingPage.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Link for navigation
import './LandingPage.css'; // Import the CSS for styling

function LandingPage() {
  const handlePlayClick = () => {
    window.open('https://www.roblox.com/games/YOUR_GAME_ID_HERE', '_blank'); // Link to the game
  };

  return (
    <div className="landing-container">
      {/* Upper Bar with Credits link */}
      <div className="upper-bar">
        <Link to="/credits" className="credits-link">CREDITS</Link>
      </div>

      {/* Background overlay */}
      <div className="background-overlay" style={{ backgroundImage: 'url(/bg.png)' }} />

      {/* Header section with Play button */}
      <motion.div
        className="header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/hoodmoddededited.png"
          alt="TB Hood Logo"
          className="game-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          JOIN THE MOST THRILLING ROBLOX EXPERIENCE
        </motion.p>

        <motion.button
          className="play-button"
          onClick={handlePlayClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          PLAY NOW
        </motion.button>
      </motion.div>

      {/* Features section */}
      <motion.section
        className="features"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <h2>WHY PLAY TB HOOD?</h2>
        <ul>
          <li>🔥 Intense PvP Action</li>
          <li>💰 Stomp Effects, Streak Tags</li>
          <li>🔫 Exclusive Gun skins</li>
          <li>🕶️ Urban Vibes. Elite Style.</li>
        </ul>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.2 }}
      >
        <p>© 2025 TB Hood. All rights reserved.</p>
        <p>Follow us for updates.</p>
      </motion.footer>
    </div>
  );
}

export default LandingPage;
