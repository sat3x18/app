/* Creditspage.js */
import './CreditsPage.css';

const Creditspage = () => {
    return (
        <div className="credits-container">
            <div className="background-overlay"></div>

            {/* Upper Bar with Back Link */}
            <div className="upper-bar">
                <a href="/" className="back-link">Back to Landing Page</a>
            </div>

            {/* Credits Section */}
            <div className="credits-section">
                {/* Roblox Avatar */}
                <img 
                    src="/avatar.png" // This points to the avatar image in the public folder
                    alt="Your Roblox Avatar"
                    className="avatar"
                />
                <div className="creator-name">Sat3x</div>
                <div className="creator-info">owner</div>
            </div>

            {/* Footer */}
            <div className="footer">
                <p>&copy; 2025 TbHood | All rights reserved</p>
            </div>
        </div>
    );
}

export default Creditspage;
