---
title: "Graphical nix applictions on non NixOS systems"
date: 2025-12-21
draft: true
---

This is a nice easy guide on setting up Nix on a non Nix system with graphical application support.

The reason why you might want to do this is because you might want to make use of the large nix repositories on your system without installing
untrusted third party repositories which could do damage to your system 

<small>*note that you could also do damage to your system via Nix but let's ignore that for now*</small>

## Requirements

- A distro with systemd
- Not having an nvidia GPU(nvidia instructions are a bit more complicated)

# Installing and setting up nix.

While you could go with your distributions' nix package I recommend installing determinate nix because it provides us with flakes by default.
This is largely up to your preferences.

`curl -fsSL https://install.determinate.systems/nix | sh -s -- install`

<small>side note: if you are using SDDM make sure to limit the maximum user UID to 2000 or something because by default it's set to 60000 and this installer will create a bunch of users.</small>

You can immediately run this script file or create a new terminal, you should have access to the `nix` command

`. /nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh`

# Set up Home Manager

Create a folder, (I named mine hm) this is where your personal home-manager flake configuration will live.
Inside of said folder run the following:

`nix run nixpkgs#home-manager init .`

This will create a flake.nix and home.nix file

Now by build the configuration:

`nix run nixpkgs#home-manager -- switch --flake .`

<small>note: by running this command from now on you will have home-manager directly accessible in your path. this is due to the `programs.home-manager.enable = true;` option in your home.nix configuration. </small>

** If you do not want to set up graphical Nix apps in your non Nix Distro you can stop here **

# Setting up graphical Nix apps on your non-Nix system.

edit the home.nix file and add the following options

```nix
targets.genericLinux.enable = true;
targets.genericLinux.gpu.enable = true;
```

Ignoring all the comments the file should look like this:

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

At this point, you can even add a graphical application in your `home.packages` option like `pkgs.foot` for the foot terminal.

Rebuild your configuration by running:

`home-manager switch --flake .`

Finally enable the systemd service for non-nixOS gpus:

sudo /nix/store/*-non-nixos-gpu/bin/non-nixos-gpu-setup

You should only need to run this once.

It might be that at this point you will immediately be able to run GUI apps. But just in case Reboot.

