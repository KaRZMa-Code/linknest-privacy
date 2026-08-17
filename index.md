---
title: LinkNest Privacy Policy
description: How LinkNest handles your data.
---

# LinkNest — Privacy Policy

**Publisher:** KaRZMa Code
**Contact:** karzma.code@gmail.com
**Applies to:** the LinkNest application for Android and Windows
**Effective date:** August 17, 2026
**Last updated:** August 17, 2026

---

## Summary

LinkNest is an offline-first app for saving and organizing links. Your links
live on your own device, in a database only LinkNest uses.

- **No account is required**, and LinkNest has no server of its own.
- **LinkNest does not collect your information.** The app has no server of its
  own, and nothing you save is transmitted to KaRZMa Code. There is no
  analytics, no crash reporting, no advertising, and no tracking identifier of
  any kind in it. This is separate from the ordinary web requests described
  below, which go directly to the websites you save — never to us.
- **Nothing is sold or shared**, because none of it ever reaches us.
- LinkNest connects to the internet in only three situations, all described
  below, and one of them is entirely optional and off until you turn it on.

The rest of this policy explains exactly what is stored and when the app
communicates with anything outside your device.

---

## 1. What LinkNest stores on your device

Everything you create in LinkNest is written to local storage on the device you
are using, in a folder belonging to the app rather than among your own files —
on Android, the app's private storage; on Windows, LinkNest's own folder under
your user profile's application data:

- **Links** — the web address, the title, an optional description and note,
  whether it is a favourite, and when it was added, changed, or last opened.
- **Categories** — their names, icons, colours, ordering, nesting, and how
  recently each was used.
- **Site icons (favicons)** — a small image file downloaded from each website
  so your list still shows icons when you are offline.
- **Trash** — items you delete are kept until you delete them permanently or
  empty the Trash.
- **Your preferences** — theme (light or dark), language, sorting and grouping
  choices, recent search terms, whether App Lock is on and its timeout, and
  whether the first-run welcome has been dismissed.

This data stays on the device unless you turn on Google Drive backup and sync
(section 3).

**We have no access to any of it.** LinkNest has no backend server, so this
data is never transmitted to the publisher.

---

## 2. What LinkNest does *not* do

- No analytics or usage statistics.
- No crash or error reporting.
- No advertising, and no advertising identifiers.
- No device fingerprinting, tracking pixels, or third-party tracking SDKs.
- No user account, profile, or registration.
- No sale or sharing of personal information.
- No location access, contacts access, microphone, or camera.

These are deliberate product decisions, not omissions.

---

## 3. When LinkNest connects to the internet

LinkNest is usable entirely offline. Network requests happen in exactly three
situations.

### 3.1 Reading a link's title and icon

When you save a link — or edit one — LinkNest requests that page from **the
website you saved**, in order to read its title and find its icon.

- The request goes **directly to that website**, not through us.
- Like any request from a browser, it reveals your device's **IP address** and
  the address you requested to that website and its hosting or CDN provider.
  That is unavoidable for any app that fetches a page, and it is the same
  information the site would receive if you opened the link yourself.
- The request identifies the app in its `User-Agent` header. It carries **no
  personal information, no account details, and no identifier for you or your
  device** beyond what any ordinary web request contains.
- The icon is saved locally so your list works offline. Nothing else from the
  page is stored.
- If the request fails or you are offline, the link is saved anyway, without a
  title or icon.

### 3.2 Google Drive backup and sync — optional, off by default

Described in section 4.

### 3.3 Opening a link

When you open a saved link, LinkNest hands it to your browser or to whichever
app your device is set to use. From that point the link is out of LinkNest's
hands and the other app's own privacy policy applies.

---

## 4. Google Drive backup and sync (optional)

This feature is **off until you sign in**, and LinkNest is fully functional
without it.

**What it does.** It keeps a single backup file — a snapshot of your links,
categories, and preferences — in your own Google Drive, so you can restore it
or move it to another device.

**What LinkNest can access in your Drive.** Sign-in requests only the
`drive.file` scope. This is the narrowest Drive permission Google offers: it
grants access **only to files this app itself created**. LinkNest cannot see,
read, or list any other file in your Google Drive, and it does not ask to.

**Where your data goes.** Into your own Google Drive account. The publisher has
no access to it. Google's handling of it is governed by the
[Google Privacy Policy](https://policies.google.com/privacy).

**What LinkNest keeps about your Google account.**

- **On Android**, the email address of the signed-in account is shown in the
  app so you can tell which account is connected. It is held in memory for the
  session and is **not written into the app's own storage**. The sign-in session
  itself is managed by Google Play services on your device, not by LinkNest.
- **On Windows**, sign-in uses a browser-based consent flow, and the resulting
  credentials are held **in memory only**. They are discarded when the app
  closes, which is why Windows asks you to authorize again after a restart.
  Nothing about your Google account is written to disk by LinkNest.

**How to disconnect.** Sign out inside LinkNest at any time. You can also
revoke the app's access entirely from your Google Account's
[third-party access settings](https://myaccount.google.com/permissions). To
remove the backup itself, delete the LinkNest backup file from your Google
Drive.

---

## 5. App Lock

If you enable App Lock, LinkNest asks the operating system to confirm your
identity — using the fingerprint, face, or device PIN/password you have already
set up — before showing your links.

The check is performed entirely by Android or Windows. **LinkNest never
receives, sees, or stores your biometric data, PIN, or password.** The app only
learns whether the system reported success or failure. Nothing about it leaves
your device.

If your device has no screen lock or biometric enrolled, App Lock disables
itself and explains why, rather than locking you out of your own data.

---

## 6. Clipboard and sharing

- **Sharing a link to LinkNest** (Android): when you share a link from another
  app, that link is passed to LinkNest so you can save it. It is used only for
  that purpose.
- **Reading the clipboard** (Windows): LinkNest reads the clipboard **only at
  the moment you use the "add from clipboard" action**. It does not monitor or
  read the clipboard in the background.
- **Copying a link** places that link on your clipboard at your request.

Clipboard content is never transmitted anywhere.

---

## 7. Keeping and deleting your data

- **Deleting** a link or category moves it to Trash, where it stays until you
  remove it permanently or empty the Trash.
- **Permanent deletion** removes the record from the database. Cached site icons
  that no remaining link uses are deleted at the same time.
- **Restoring from a backup** replaces the entire current library with the
  contents of that backup. LinkNest warns you before doing this, and it cannot
  be undone.
- **Uninstalling LinkNest** removes the app's local data on **Android**, where
  the system deletes app-private storage as part of uninstalling. On
  **Windows**, uninstalling may leave LinkNest's application-data folder
  behind — Windows does not guarantee that files an app created are removed
  with it. To be certain nothing remains, delete LinkNest's folder under your
  user profile's roaming application data after uninstalling.
- **Your Google Drive backup is not removed by uninstalling.** If you want it
  gone, delete the LinkNest backup file from your Google Drive, and optionally
  revoke the app's access from your Google Account settings.

Because there is no server, there is nothing held about you anywhere else to
request, correct, or delete. Your data is in your hands: on your device, and —
only if you chose to enable it — in your own Google Drive.

---

## 8. Children

LinkNest is a general-purpose utility and is not directed at children. It does
not knowingly collect information from anyone, of any age.

---

## 9. Changes to this policy

If this policy changes, the updated version will be published at this same
address with a new "Last updated" date. Material changes to how the app handles
data will also be reflected in the app's release notes.

---

## 10. Contact

Questions about this policy or about privacy in LinkNest:

**KaRZMa Code** — karzma.code@gmail.com
