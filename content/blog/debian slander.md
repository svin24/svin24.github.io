---
title: "Debian slander"
date: 2024-05-05T12:04:12+03:00
draft: false
---

<small> *This article was written on my phone, expect issues and typos.* </small>

This is an article about the ways debian operates from the perspective of an _outsider_. I am not saying Debian is a bad distro. I would probably use it for server and maybe for a computer I don't update often. It has generally good support due to it's popularity and the efforts of both of debian members and canonical employees.

This is a list of **personal** grievances. What **I** consider to be issues, you should also note that I am coming from a Fedora background. Debian developers probably have their reasons for running debian this way, and this is no attack on them.

<small> *At the time of writing this. The current stable Debian release is Debian 12* </small>

## Debian uses rather archaic methods of communication

Debian currently uses mailing lists. There is nothing wrong inherently with using mailing lists, except from the fact that no one knows how to use them, this is not an age thing, this is simply a _no one cares to use such a thing_ issue. This is fine for Kernel dev since it actively wants to filter low effort spam, but debian doesn't/shouldn't want to do that at least for most cases. Browser front ends for mailing lists exist that make the experience much easier, and Debian should consider those. 

<small>**Alternative Solution:** Maybe set up a bugzilla instance.</small>

The same could also be said about forums (which currently use phpBB). But I know there are many people who like it. And frankly looking around I am not really liking any piece of forum software that currently exists either(discourse is not my favorite either).

To its credit, Debian has official matrix channels alongside IRC.

## The meaning of "stable" on the Desktop

Any debian release is stable. The packages do not generally get updates beyond security bugfixes that get backported. However that should probably not extend to the desktop. At least not completely. Because this approach only suits servers and embedded devices.

Prime example I like using: KDE Plasma 5.27 on Debian 12 - which specifically uses the 5th bugfix release. For context Plasma 5.27 was an LTS release, meaning it got [more bugfixes than other Plasma releases](https://community.kde.org/Schedules/Plasma_5#Support_status_by_Release_Series) until it reached EOL(probably) with its 11th bugfix release. Dependencies are largely the same. Debian 12 released with 5.27.5 and asside from a few debian specific bugfixes, **never updated it**.

I am not saying Debian should push Plasma 6 on Debian 12. However I am saying that they should probably push the latest bugfix of the desktops they decided to ship on their stable channel to minimize instability.

<small> _**Sidenote:** It doesn't seem like this issue has affected GNOME because GNOME 43 was already on its 10th bugfix by the time desktop packages froze for Debian 12.</small>

Now debian recommends you send bug fix requests directly to them before upstream, that is good! Distros should be those that handle bugs like this, howevever as we said before using the mailing list is a pain for most users, - They would rather just go to the KDE bugzilla or the GNOME gitlab!

<small> **Alternative suggestion:** put bugfix releases of desktops in debian backports as packages from there are optional. </small>

## Hard to find upcoming plans and changes. 

Fedora has these amazing things called [ChangeSets](https://fedoraproject.org/wiki/Releases/41/ChangeSets). A ChangeSet is essetially a Wiki page that automatically tracks Proposed/Accepted changes and goals for the next release, along with appropriate explanations of **_why_** this change is implemented, and **_where_** it's being discussed.

Finding what the plans for future debian releases are is... harder. Debian does have a changelog produced every release but it is harder to find out what the plans are for the next release. For example the [major change with Apt 3.0](https://www.phoronix.com/news/Debian-APT-2.9-Released) was largely a surprise. Probably even to diehard Debian fans.

## Release upgrades and noobs

![Upgrades on Fedora](https://docs.fedoraproject.org/en-US/quick-docs/_images/upgrade-gnome-software.png)
<div class="text-center"><small>Picture credit: Fedora Wiki</small></div>

I think one of the most important changes Ubuntu made to Debian was they implemented a tool to apply major upgrades in an easy and graphical way. Some kind of script that downloads all the instructions on how to upgrade from an older release to a newer release and is reliable.
I would also recommend these major upgrades be done offline, OpenBSD/Fedora/Windows style. That way you get less chances of something breaking because the user was doing something they shouldn't have while the update was happening.

Right now in order to upgrade debian you need to edit a file. While nothing about this is hard, most users of every day computer OSes kind of expect to be informed about major release upgrades, the same way their operating system informs them of smaller upgrades like firefox.

## New installer, new Standards

I don't have anything nice to say about the debian installer. At best it's useful for non graphical systems but even then, Ubuntu proved you can make TUI installers better, years ago.

![Ubuntu TUI installer](https://ubuntucommunity.s3.us-east-2.amazonaws.com/original/2X/e/e1d75e3584b6a3c23da39263fbf2f9ba6411de9a.png)
<div class="text-center"><small>Picture credit: Ubuntu Server Install Guide</small></div>

* There is no graphical tool for system partitioning. 
* For some reason it always seems to recommend 1GB of swap regardless of computer ram size. (It wont use a swapfile or zswap) 
* Most of the people reading this, probably do not even know you can add the user to wheel by default by leaving the root password blank. 
* This also locks the root user and makes your account act more akin to other Desktop distributions. 
* It doesn't run at the correct resolution, ever.

And people complain about the Fedora installer... 

Anyway these are my general issues with the way Debian operates. [Please do yell at me here](mailto:svin.mail.24@gmail.com). Your emails might be forwarded if they are funny. So do try to be funny.

<small>Images are loaded remotely, so if they break in the future assume they are still there</small>
