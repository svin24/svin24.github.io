---
title: "General guide to annoying parts of Tiling Window Managers"
date: 2024-04-30T09:25:40+03:00
draft: true
---

<small>Learning how to write articles. If you have any tips please tell me, for me this is all an exercise in writing.</small>

Hyprland is probably one of the easier to setup tiling window managers for Wayland. 
It is well documented. As such this example assumes Hyprland.

This article wants to help the reader fix up some of the annoyances. 
Generally this information might be useful for people setting up other kinds of window manager based systems. 
**It also helps the reader pick up some wayland concepts**

### My file picker is crap(GTK)

Back in the day in the Linux space you were largely forced to use the file picker of the application's tool:wkit.
That was a miserable state of being because the GTK file picker(The file picker created by the GNOME project) 
is a largely archaic tool at the time of writing. (There are hopes of an overhaul).

Anyone coming from the KDE site and especially the Windows side will agree with this statement.

In the case of Hyprland the default file picker that is used as fallback is the GTK file picker changing the file picker is as easy as writing the following:
*~/.config/xdg-desktop-portal/hyprland-portals.conf*
```
[preferred]
default=hyprland;gtk
org.freedesktop.impl.portal.FileChooser=kde
```

Make sure you have **xdg-desktop-portal-kde** installed

### Secrets management - a.k.a. why the heck is network manager forgetting the wifi password



