import './header.css';
import { createButton } from './button.js';

export function createHeader () {
  const domHeader = document.createElement('header');
  domHeader.innerHTML = `
    <nav>
      <div id="nav-left">
        <input type="text" id="search-term" placeholder="Search">
        ${createButton({
          icon: 'fas fa-arrow-up',
          tooltip: 'Find previous',
          id: 'search-previous',
          returnAsString: true
        })}
        ${createButton({
          icon: 'fas fa-arrow-down',
          tooltip: 'Find next',
          id: 'search-next',
          returnAsString: true
        })}
      </div>
      <div id="nav-right">
        ${createButton({
          icon: 'fas fa-cog',
          tooltip: 'Open settings',
          id: 'open-settings',
          returnAsString: true
        })}
      </div>
    </nav>
  `;
  document.body.appendChild(domHeader);

  const domOpenSettingsButton = document.getElementById('open-settings');
  domOpenSettingsButton.addEventListener('click', () => {
    chrome?.runtime?.openOptionsPage();
  });
}