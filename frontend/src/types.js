/**
 * @typedef {Object} Message
 * @property {string} id
 * @property {string} text
 * @property {'user' | 'ai' | 'other'} sender
 * @property {Date} timestamp
 */

/**
 * @typedef {Object} Chat
 * @property {string} id
 * @property {string} name
 * @property {string} [lastMessage]
 * @property {string} [avatar]
 * @property {number} [unreadCount]
 * @property {boolean} [isOnline]
 */