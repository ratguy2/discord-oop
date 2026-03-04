/**
 * Custom enums that extend or complement discord.js
 */

/**
 * Example enum: Log levels for bot operations
 */
export enum LogLevel {
  Debug = 'debug',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
  Silent = 'silent'
}

/**
 * Example enum: Types of moderation actions for logging/tracking
 */
export enum ModerationAction {
  Kick = 'kick',
  Ban = 'ban',
  Timeout = 'timeout',
  Warn = 'warn',
  Unban = 'unban',
  Untimeout = 'untimeout'
}

/**
 * Example enum: Preferred channel types for automated posts
 * (Pick a specific subset of channel types your bot will use)
 */
export enum BotChannelType {
  Announcements = 'announcements',
  Rules = 'rules',
  Welcome = 'welcome',
  Logs = 'logs',
  General = 'general'
}

/**
 * Example enum: Time units for duration parsing
 */
export enum TimeUnit {
  Seconds = 's',
  Minutes = 'm',
  Hours = 'h',
  Days = 'd',
  Weeks = 'w'
}

// Add more enums as your bot's domain requires!
