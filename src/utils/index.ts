/**
 * Utility functions that wrap or extend discord.js functionality
 */

import { Channel, Guild, TextChannel } from 'discord.js';

/**
 * Example utility: Safely get a text channel by ID
 */
export function getTextChannel(guild: Guild, channelId: string): TextChannel | null {
  const channel = guild.channels.cache.get(channelId);
  return channel instanceof TextChannel ? channel : null;
}

/**
 * Example utility: Check if a channel is a thread
 */
export function isThread(channel: Channel): boolean {
  return channel.isThread();
}

// Add more utilities as you need them!
