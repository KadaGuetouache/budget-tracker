import { randomUUID } from "crypto";
import crypto from "node:crypto"

export function tokenGenerator(): string {
  return `${randomUUID()}-${randomUUID()}`.replace(/-/g, "");
}

export function idGenerator(): string {
  return randomUUID();
}

export function getURL(): string {
  const url = window.location.href;
  const path = window.location.pathname

  return url.replace(path, "");
}

export function checkIfTokenIsValide(timestamp: Date): Boolean {
  // Get the current date
  const now = new Date();

  // Calculate the difference in milliseconds
  const difference = now.getTime() - timestamp.getTime();

  // Check if the difference is less than 24 hours in milliseconds
  return difference < (24 * 60 * 60 * 1000);
}
//
// Check for active link
export function activeLink(pathname: string, path: string): string {
  return path === pathname ? "border-b border-white" : "text-muted-foreground"
}

export function DateToUTCDate(date: Date) {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDay(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
  )
}
