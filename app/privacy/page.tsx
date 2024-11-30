import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">When you use our Mahjong online game, we collect minimal information:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Basic device information (browser type, screen resolution)</li>
          <li>Game preferences (if stored in local storage)</li>
          <li>Anonymous usage statistics</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
        <p className="mb-4">We use the collected information to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Improve game performance and compatibility</li>
          <li>Save your game preferences locally in your browser</li>
          <li>Analyze general usage patterns to enhance the game experience</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Data Storage</h2>
        <p className="mb-4">
          Our game uses local storage in your browser to save game preferences and settings.
          No personal information is collected or stored on our servers. You can clear this
          data at any time by clearing your browser data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Cookies and Local Storage</h2>
        <p className="mb-4">
          We use local storage to enhance your gaming experience by remembering your
          game preferences. This data remains on your device and is not shared with us
          or any third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
        <p className="mb-4">
          Our game may use third-party services for analytics purposes only. These
          services collect anonymous usage data to help us improve the game. No
          personal information is shared with these services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Children's Privacy</h2>
        <p className="mb-4">
          Our game is suitable for all ages and does not collect any personal
          information from children or adults. We encourage parents and guardians
          to monitor their children's internet usage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have questions about this privacy policy, please contact us at
          support@mahjonggame.com
        </p>
      </section>

      <footer className="text-sm text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}
