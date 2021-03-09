---
title: GitHub refuses to help me unsubscribe from thousands of notifications
date: 2021-03-09
---

Well, here we are again, relying on the court of public opinion to fix a problem
with some company's bad support. Today we look at GitHub.

**tl;dr** I am subscribed to thousands of discussions on GitHub that I no
longer participate in, and I receive several unwanted emails per week as a
consequence. After two weeks of frustrating negotiation with support, GitHub
ultimately suggests that I manually unsubscribe from each of 80+ pages of
notifications, then tells me they forwarded a request to improve the interface to
the product team, where it may or may not be addressed, and they will not be
getting back to me regardless.

*Disclaimer: I represent a company which competes with GitHub. However, I
frequently contribute to hundreds of FOSS projects, many of which are hosted on
GitHub, and as such I use GitHub in some respect almost every day.*

I started the [sway](https://github.com/swaywm/sway) and
[wlroots](https://github.com/swaywm/wlroots) projects back in 2015 and 2017
respectively, and oversaw them as their maintainer/BDFL up until [October of
last year][1], when I handed maintenance over to Simon Ser. Together these
projects have almost 9,000 issues and pull requests on GitHub, and I'm
subscribed to notifications for most of them.

[1]: https://drewdevault.com/2020/10/23/Im-handing-wlroots-and-sway-to-Simon.html

Since I handed over the reins and don't work directly with these projects
anymore, I have no reason to receive these notifications. I "unwatched" the
project, which stops automatically subscribing me to new threads unless I'm
explicitly mentioned[^1], but it does not unsubscribe me from all of the threads
I have participated in to date &mdash; i.e. most of them. I still receive
several emails per week for these projects, none of which require my attention,
and I reached out to GitHub support to find a way to address the problem.

[^1]: Even if I don't work with the projects anymore, I would like to know if I'm explicitly mentioned in discussion, so I can clarify the intent behind a decision, how some code I wrote works, etc. This is why I don't want to use GitHub's "ignore" option outright.

I opened a ticket with support, in the first contact of what would ultimately
take 13 days. After the requisite complaint about not being able to reach
support via email anymore, I explained:

> I am subscribed to a lot of individual discussions that I have participated in
> on the swaywm/sway and swaywm/wlroots issues. I have unsubscribed from the
> repos as a whole, but I still want to be notified when I'm explicitly
> mentioned in new discussions. However, I want to unsubscribe from all
> discussions that I'm already subscribed to - to start with a clean slate, as
> it were. There are thousands of issues so manually unsubscribing from each is
> not practical. Can you help?

GitHub agrees to forward my complaint about emailing support to the appropriate
team and then gets to work:

> You can unsubscribe using your inbox or on the subscriptions page:
>
> https://github.com/notifications/subscriptions
>
> On this page you can select all your current subscriptions and unsubscribe from being notified in one go. This means that you will only be notified when explicitly mentioned in issues, comments and PRs - unless you ignored the repository.
>
> By default, anytime you gain access to a new repository, you will automatically begin watching that repository. Anytime you join a new team, you will automatically be subscribed to updates and receive notifications when that team is @mentioned. If you don't want to automatically be subscribed, you can unselect the automatic watching options. You can disable the automatic watching feature here:
>
> https://github.com/settings/notifications
>
> You can also choose to ignore a repository. If you ignore a repository, you won't receive any notifications. We don't recommend ignoring repositories as you won't be notified if you're @mentioned.
>
> https://github.com/watching
>
> I hope this helps! Please feel free to reach out to me if you have further questions about this request.

I will spare you from the full 27 message exchange that follows, and just give
the highlights. The page they recommend has a bug which prevents me from
selecting the repositories in question from their filter list. They explain how
to use the UI, and I reiterate that the UI does not work as expected. Then they
hit me with this:

> I dug into the notification logs generated from swaywm/sway and swaywm/wlroots
> and neither show any notification sent to your account, ddevault, within the
> last 30 days. You are also not in any of the two repositories' watchlists.
>
> Can you check the X-GitHub-Recipient and X-GitHub-Recipient-Address headers of
> one of those emails? This link explains how to find email headers if you're
> not sure how:
>
> https://support.google.com/mail/answer/22454

I share one such email, and they give this:

> I took a look at the file and it appears these emails are being forwarded from a user $redacted[^2].
> 
>     X-GitHub-Sender: $redacted
>     X-GitHub-Recipient: ddevault
>
> You may have to reach out to the user to disable this forwarding rule. Let me know how you get along.

[^2]: I have redacted the username that appeared here.

...what?

> I don't understand. How is a user "forwarding" GitHub notifications to me?
> What is their remedy? This came from smtp.github.com. What the heck are you
> talking about?

The support tech realizes the mistake and apologises, then asks me for more
recent notifications. Given that I usually delete them right away, I have
nothing to offer, so I re-explain the cause of the issue &mdash; these are
discussions that I have previously participated in and was auto-subscribed to as
such &mdash; instead.  The second of several times that I will end up restating
the same problem.

The reply from GitHub on this is a short essay which first explains the solution
I said upfront that I don't want (ignoring the whole repo), followed by four
curl commands and links to API documentation which supposedly will help me write
some kind of script myself to address the problem.

---

This is a good time to share an example of how this typically goes when a user
of my own company's services asks for help unsubscribing from things:

> Subject: Can’t unsubscribe from srht-discuss
>
> I’ve tried the u. unsubscribe address but the system says I’m not
> subscribed, though I am. 
>
> I can’t use the tilde address. HEY.com doesn’t support it. 
>
> Also, the web interface says I’m not subscribed. 
>
> I’m at a bit of a loss of what to do. 
> 
> Could you unsubscribe me manually?

---

> I've just removed your subscription. You can thank me by writing to
> your mail provider to complain about their broken address parsing :)

---

> Haha! I will do, Drew. Thank you.

---

Back to GitHub. After expressing incredulity that they would expect me to write
a custom script myself to deal with the problem of simply unsubscribing from
unwanted emails, and being rewarded with a fifth suggested curl command, I
begrudgingly start to go through the motions. And none of them work! The
commands show that there are no subscriptions for these repositories. I tell
them as much, and:

> Hi Drew,
> 
> > Both of these examples you gave me return no results, i.e. an empty JSON array.
> 
> If you got no results, it would indicate that you are currently not subscribed
> to any threads on the repositories, and therefore you will not receive any
> notifications unless you comment on the thread or get an @mention.

So, I'm a liar. I simply await the next unwanted email and bump the thread again
a few days later.

> I just received a notification for this repository. I was not mentioned.
>
> > If you got no results, it would indicate that you are currently not
> > subscribed to any threads on the repositories, and therefore you will not
> > receive any notifications unless you comment on the thread or get an @mention.
>
> There is now one result for the GraphQL query you suggested, and it is the
> notification in question. If I'm not subscribed to anything, then why did I
> receive another notification?

GitHub unexplains how notifications work again, and suggests I unsubscribe from
the specific discussion in question.

> Yes, I understand. Please review my earlier communications in which I outlined
> the issue and desired resolution in detail.

After several more comments repeating much of the discussion we already had a
few days prior (with the same support person &mdash; they signed all of their
responses with the same name), they forward it to the engineering team and will
get back to me, without "a specific ETA". Thankfully that just means "tomorrow",
and with this, we arrive at the conclusion of our support exchange.

> Thank you for your patience while the team looked into this.
> 
> We've found that we do have a limitation on the /notifications/subscriptions
> page which is why the subscriptions for the repositories in question weren't
> showing up when filtered by the repository names. This is a something that we
> will be adding to our backlog for a fix.
> 
> In the meantime, the current workaround for you would be to use the links
> below to list subscriptions for a specific repository and unsubscribe from
> them. You can also substitute the repository_name with any other repository
> you may want to unsubscribe from.
> 
> [URLs removed]
>
> Please check and let me know if you get better results this time. If the situation is unchanged, please give us a shout and we'll continue looking into this.

I check the URLs, and respond with the following:

> I'm not going to unsubscribe from "1,000+" notifications, 25 at a time.
>
> ![](https://l.sr.ht/bQlK.png)

GitHub clarifies that they do, in fact, expect me to manually unsubscribe from a
minimum of 80 pages of subscriptions (likely much more: "1,000+" appears to be
the max number this UI will display, and there are nearly 9,000 issues and PRs
between these repos). I make a vague threat about invoking the CAN-SPAM act and
they helpfully tell me that these are not considered commercial emails and the
CAN-SPAM act does not apply. The support tech closes with this:

> I understand how frustrating it can be to go through the list 25 at a time but
> as I explained, this is a system limitation that only our Product team is
> better suited to help you out. We have forwarded your ticket to the Product
> team who reads and evaluates all feedback, however we cannot guarantee a
> response to every submission.
>
> Please note that this means the Developer Support team will no longer be able
> to see changes to the ticket, so if you have a follow up that requires further
> support, please create a new ticket. Thank you again for your feedback!

In closing, I wrote the following, then fired up my editor to write this blog
post.

> What's your work email address? I will set up a filter which forwards each
> unwanted email to you. I will prepare a web page where you can unsubscribe to
> them 25 issues at a time.

13 days and counting since I first reached out to support.
