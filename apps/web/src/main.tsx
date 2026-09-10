// Supports weights 100-900
import '@fontsource-variable/archivo/wdth.css';
// Supports weights 400-700
import '@fontsource-variable/archivo-narrow/wght.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './generated/tokens.css';
import './index.css';
import App from './App.tsx';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found.');
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
