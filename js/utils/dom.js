/**
 * DOM Utility Functions
 * Helper functions for DOM manipulation
 */

/**
 * Query selector shorthand
 * @param {string} selector - CSS selector
 * @param {Element} parent - Parent element (default: document)
 * @returns {Element|null} First matching element
 */
export const $ = (selector, parent = document) => parent.querySelector(selector);

/**
 * Query selector all shorthand
 * @param {string} selector - CSS selector
 * @param {Element} parent - Parent element (default: document)
 * @returns {NodeList} All matching elements
 */
export const $$ = (selector, parent = document) => parent.querySelectorAll(selector);

/**
 * Create element with attributes and children
 * @param {string} tag - HTML tag name
 * @param {Object} attrs - Element attributes
 * @param {Array|string} children - Child elements or text
 * @returns {Element} Created element
 */
export function createElement(tag, attrs = {}, children = []) {
    const element = document.createElement(tag);

    // Set attributes
    Object.entries(attrs).forEach(([key, value]) => {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'dataset') {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                element.dataset[dataKey] = dataValue;
            });
        } else if (key.startsWith('on')) {
            const event = key.slice(2).toLowerCase();
            element.addEventListener(event, value);
        } else {
            element.setAttribute(key, value);
        }
    });

    // Add children
    const childArray = Array.isArray(children) ? children : [children];
    childArray.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Element) {
            element.appendChild(child);
        }
    });

    return element;
}

/**
 * Add event listener with delegation
 * @param {Element} parent - Parent element
 * @param {string} eventType - Event type
 * @param {string} selector - Child selector
 * @param {Function} handler - Event handler
 */
export function delegate(parent, eventType, selector, handler) {
    parent.addEventListener(eventType, (event) => {
        const target = event.target.closest(selector);
        if (target && parent.contains(target)) {
            handler.call(target, event);
        }
    });
}

/**
 * Remove all children from element
 * @param {Element} element - Element to clear
 */
export function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

/**
 * Toggle class on element
 * @param {Element} element - Target element
 * @param {string} className - Class name to toggle
 * @param {boolean} force - Force add/remove
 */
export function toggleClass(element, className, force) {
    element.classList.toggle(className, force);
}

/**
 * Show element
 * @param {Element} element - Element to show
 * @param {string} display - Display style (default: 'block')
 */
export function show(element, display = 'block') {
    element.style.display = display;
}

/**
 * Hide element
 * @param {Element} element - Element to hide
 */
export function hide(element) {
    element.style.display = 'none';
}
