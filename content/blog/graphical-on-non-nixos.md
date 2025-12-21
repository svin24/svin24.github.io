---
title: "Graphical Nix applications on non-NixOS systems"
date: 2025-12-21
draft: false
---

<small>*AI was used for grammatical corrections and formatting suggestions.*</small>

This is a guide on setting up Nix on a non-NixOS system with graphical application support.

The main reason you might want to do this is to take advantage of the large Nix package repositories without installing
untrusted third-party repositories that could potentially damage your system.

<small>*Note: you could also do damage to your system via Nix,but let’s ignore that for now.*</small>

## Requirements

- A Linux distribution using systemd
- No NVIDIA GPU (NVIDIA instructions are a bit more complicated)

## Installing and setting up Nix

While you *could* use your distribution’s Nix package, I recommend installing **Determinate Nix**, as it enables flakes by default.
That said, this choice ultimately comes down to personal preference.

```sh
curl -fsSL https://install.determinate.systems/nix | sh -s -- install
```

<small>
Side note: if you are using SDDM, make sure to limit the maximum user UID to something like 2000. A reasonable amount as most home computers don't have over 1000 desktop users.

By default it is set to 60000, and this installer will create a large number of users, which will cause issues for SDDM.

In KDE this can be done via the SDDM KCM.
</small>

You can either restart your terminal or source the following script to immediately gain access to the `nix` command:

```sh
. /nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh
```

## Setting up Home Manager

Create a directory (I named mine `hm`) where your personal Home Manager flake configuration will live.
Inside that directory, run:

```sh
nix run nixpkgs#home-manager init .
```

This will create both a `flake.nix` and a `home.nix` file.

Now build and apply the configuration:

```sh
nix run nixpkgs#home-manager -- switch --flake .
```

<small>
Note: after running this command, **home-manager** will be directly accessible in your PATH.

This is due to the *programs.home-manager.enable = true;* option in your *home.nix* configuration.
Which you'll see bellow.
</small>

**If you do not want to set up graphical Nix applications on your non-NixOS system, you can stop here.**

## Setting up graphical Nix applications on a non-NixOS system

Edit your `home.nix` file and add the following options:

```nix
targets.genericLinux.enable = true;
targets.genericLinux.gpu.enable = true;
```

Ignoring comments, your file should look roughly like this:

```nix
{ config, pkgs, ... }:

{
  targets.genericLinux.enable = true;
  targets.genericLinux.gpu.enable = true;

  home.username = "username";
  home.homeDirectory = "/home/username";

  home.stateVersion = "25.11";

  home.packages = [
  ];

  home.file = {
  };

  home.sessionVariables = {
  };

  programs.home-manager.enable = true;
}
```

At this point, you can add a graphical application to `home.packages`, such as `pkgs.foot` for the Foot terminal.

Rebuild your configuration:

```sh
home-manager switch --flake .
```

Finally, enable the systemd service required for non-NixOS GPU support:

```sh
sudo /nix/store/*-non-nixos-gpu/bin/non-nixos-gpu-setup
```

**You should only need to run this once.**

At this point, graphical applications may already work. If not, reboot your system to be safe.

## Additional options for desktop integration

* Add `xdg.enable = true;` to help generate desktop entries.
* After installing applications, it may be helpful to run `update-desktop-database`.

The first time you set this up, you may need to restart your desktop session.
After that, it should no longer be necessary. 
However I have found that I frequently end up using the `update-desktop-database` command.

## NVIDIA (proprietary drivers)

If you are using proprietary NVIDIA drivers, refer to the official
[Home Manager GPU configuration guide](https://nix-community.github.io/home-manager/index.xhtml#sec-usage-gpu-non-nixos).

The process is significantly more involved.

I can't provide an NVIDIA guide myself, as I have no system with an an NVIDIA GPU in order to test it.

## Additional information:

[Vimjoyer](https://www.youtube.com/@vimjoyer) on Youtube has some great videos on Nix.
