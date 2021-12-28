---
title: Please don't use Discord for FOSS projects
date: 2021-12-28
outputs: [html, gemtext]
---

Six years ago, I wrote a post speaking out against the use of Slack for the
instant messaging needs of FOSS projects. In retrospect, this article is not
very good, and in the years since, another proprietary chat fad has stepped up
to bat: Discord. It's time to revisit this discussion.

[previously]: https://drewdevault.com/2015/11/01/Please-stop-using-slack.html

In short, using Discord for your free software/open source (FOSS) software
project is a very bad idea. Free software matters &mdash; that's why you're
writing it, after all. Using Discord partitions your community on either side of
a walled garden, with one side that's willing to use the proprietary Discord
client, and one side that isn't. It sets up users who are passionate about free
software &mdash; i.e. your most passionate contributors or potential
contributors &mdash; as second-class citizens.

By choosing Discord, you also lock out users with accessibility needs, for whom
the proprietary Discord client is often a nightmare to use.[^1] Users who cannot
afford new enough hardware to make the resource-intensive client pleasant to use
are also left by the wayside. Choosing Discord is a choice that excludes poor
and disabled users from your community. Users of novel or unusual operating
systems or devices (i.e. innovators and early adopters) are also locked out of
the client until Discord sees fit to port it to their platform. Discord also
declines service to users in countries under US sanctions, such as Iran.
Privacy-concious users will think twice before using Discord to participate in
your project, or will be denied outright if they rely on Tor or VPNs. All of
these groups are excluded from your community.

[^1]: Discord [had to be sued](https://www.lflegal.com/2021/10/discord-agreement/) to take this seriously.

These problems are driven by a conflict of interest between you and Discord.
Ownership over your chat logs, the right to set up useful bots, or to moderate
your project's space according to your discretion; all of these are rights
reserved by Discord and denied to you. The FOSS community, including users with
accessibility needs or low-end computing devices, are unable to work together to
innovate on the proprietary client, or to build improved clients which better
suit their needs, because Discord insists on total control over the experience.
Discord seeks to [domesticate its users][0], where FOSS treats users as peers
and collaborators. These ideologies are fundamentally in conflict with one
another.

[0]: https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html

You are making an investment when you choose to use one service over another.
When you choose Discord, you are legitimizing their platform and divesting from
FOSS platforms. Even if you think they have a bigger reach and a bigger
audience,[^2] choosing them is a short-term, individualist play which signals a
lack of faith in and support for the long-term goals of the FOSS ecosystem as a
whole. The FOSS ecosystem needs your investment. FOSS platforms generally don't
have access to venture capital or large marketing budgets, and are less willing
to use dark patterns and predatory tactics to secure their market segment. They
need your support to succeed, and you need theirs. Why should someone choose to
use your FOSS project when you refused to choose theirs? Solidarity and mutual
support is the key to success.

[^2]: Discord appears to inflate its participation numbers compared to other services. It shows all users who have ever joined the server, rather than all users who are actively using the server. Be careful not to optimize for non-participants when choosing your tools.

There are great FOSS alternatives to Discord or Slack. SourceHut has been
investing in IRC by building more accessible services like [chat.sr.ht]. Other
great options include [Matrix] and [Zulip]. Please consider these services
before you reach for their proprietary competitors.

[chat.sr.ht]: https://sourcehut.org/blog/2021-11-29-announcing-the-chat.sr.ht-public-beta/
[Matrix]: https://matrix.org
[Zulip]: https://zulip.com

Perceptive readers might have noticed that most of these arguments can be
generalized. This article is much the same if we replace "Discord" with
"GitHub", for instance, or "Twitter" or "YouTube". If your project depends on
proprietary infrastructure, I want you to have a serious discussion with your
collaborators about why. What do your choices mean for the long-term success of
your project and the ecosystem in which it resides? Are you making smart
investments, or just using tools which are popular or that you're already used
to?

If you use GitHub, consider [SourceHut](https://sourcehut.org)[^3] or
[Codeberg]. If you use Twitter, consider [Mastodon] instead. If you use YouTube,
try [PeerTube]. If you use Facebook... don't.

Your choices matter. Choose wisely.

[codeberg]: https://codeberg.org
[GitLab]: https://gitlab.com
[Mastodon]: https://joinmastodon.org
[PeerTube]: https://joinpeertube.org

[^3]: Disclaimer: I am the founder of SourceHut.
