import React from 'react';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and playing our Mahjong online game, you agree to be bound by these
          Terms of Service. If you do not agree to these terms, please do not use our game.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Game Usage</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>The game is provided free of charge for personal entertainment</li>
          <li>No registration or account creation is required</li>
          <li>The game is accessible through modern web browsers</li>
          <li>We reserve the right to modify or discontinue the game at any time</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Game Rules</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Players must follow standard Mahjong solitaire rules</li>
          <li>The game is designed for single-player entertainment</li>
          <li>We reserve the right to modify game rules and mechanics</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Browser Storage</h2>
        <p className="mb-4">
          The game may use your browser's local storage to save game preferences
          and settings. You can clear this data at any time through your browser
          settings. No personal information is stored or transmitted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. User Conduct</h2>
        <p className="mb-4">Users must not:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Attempt to hack or modify the game code</li>
          <li>Use automated tools or bots to play the game</li>
          <li>Distribute modified versions of the game</li>
          <li>Use the game for any commercial purpose</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
        <p className="mb-4">
          All game content, including graphics, sound effects, music, and code,
          is protected by copyright and other intellectual property rights.
          You may not copy, modify, or distribute our content without permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Disclaimers</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>The game is provided "as is" without warranties</li>
          <li>We are not responsible for any browser compatibility issues</li>
          <li>We may update these terms at any time</li>
          <li>Game availability is not guaranteed</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
        <p className="mb-4">
          For any questions about these terms or the game, please contact us at
          legal@mahjonggame.com
        </p>
      </section>

      <footer className="text-sm text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}
