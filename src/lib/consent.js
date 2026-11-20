import { writable } from 'svelte/store';
export const externalConsent = writable(false);
export const consentKey = 'spbb-consent-v1';
export const consentDuration = 180 * 24 * 60 * 60 * 1000;
export function openConsentSettings() { window.dispatchEvent(new Event('spbb:consent-settings')); }
