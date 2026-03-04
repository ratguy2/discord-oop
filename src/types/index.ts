/**
 * Custom TypeScript types that extend discord.js
 */

import type { PermissionResolvable } from 'discord.js';

/**
 * Example type: A more specific permission resolvable
 * Use this when you want to define permissions with clearer intent
 */
export type RolePermission = 'manage_channels' | 'manage_roles' | 'kick_members' | 'ban_members';

/**
 * Example type: Configuration for a moderation bot
 */
export interface ModerationConfig {
  /** The role that can use moderation commands */
  moderatorRoleId: string;
  /** Log channel where actions are recorded */
  logChannelId: string;
  /** Whether to DM users before taking action */
  dmUsers: boolean;
  /** Default reason for actions when none provided */
  defaultReason: string;
}

/**
 * Example type: Guild-specific settings for this bot
 */
export interface GuildSettings {
  /** Prefix for text commands (if using them) */
  prefix: string;
  /** Moderation configuration for this guild */
  moderation: ModerationConfig | null;
  /** Custom emotes that the bot can reference */
  customEmotes: Record<string, string>;
}

// Add more custom types as needed!
