---
title: What should the next chat app look like?
date: 2021-04-07
outputs: [html, gemtext]
---

As you're surely aware, Signal has officially jumped the shark with the
introduction of cryptocurrency to their chat app. Back in 2018, I [wrote about
my concerns with Signal][0], and those concerns were unfortunately validated by
this week's announcement. Moxie's insistence on centralized ownership,
governance, and servers for Signal puts him in a position of power which is
easily, and inevitably, abused. In that 2018 article, and in [articles since][1],
I have spoken about the important of federation to address these problems. In
addition to federation, what else does a chat app need?

[0]: https://drewdevault.com/2018/08/08/Signal.html
[1]: https://drewdevault.com/2020/09/20/The-potential-of-federation.html

Well, first, the next chat app should be **a protocol**, not just an app. A lush
ecosystem of client and server implementations, along with bots and other
integrations, adds a tremendous amount of value and longevity to a system. A
chat app which has only one implementation and a private protocol can only ever
meet the needs that its developers (1) foresee, (2) care about, and (3) have the
capacity to address; thus, such a protocol cannot be ubiquitous. I would also
recommend that this protocol is not needlessly stapled to the beached whale that
is the web: *maybe* JSON can come, but if it's served with HTTP polling to
appease our Android overlords I will be very cross with you. JSON also offers
convenient extensibility, and a protocol designer who limits extensibility is a
wise one.

Crucially, that protocol *must* be **federated**. This is Signal's largest
failure. We simply cannot trust a single entity, even you, dear reader, to have
such a large degree of influence over the ecosystem.[^1] I do not trust you not
to add some crypto Ponzi scheme of your own 5 years from now. A federated system
allows multiple independent server operators to stand up their own servers which
can communicate with each other and exchange messages on behalf of their
respective users, which distributes ownership, responsibility, and governance
within the community at large, making the system less vulnerable to all kinds of
issues. You need to be prepared to relinquish control to the community. Signal
wasn't, and has had problems ranging from 502 Server Gone errors to 404
Ethics Not Found errors, both of which are solved by federation.

[^1]: Even if that ecosystem is "moving". Ugh.

The next chat app also needs **end-to-end encryption**. This should be fairly
obvious, but it's worth re-iterating because this will occupy a *majority* of
the design work that goes into the app. There are complex semantics involved in
encrypting user-to-user chats, group chats (which could add or remove users at
any time), perfect forward secrecy, or multiple devices under one account; many
of these issues have implications for the user experience. This is complicated
further by the concerns of a federated design, and if you want to support voice
or video chat (please don't), that'll complicate things even more. You'll spend
the bulk of your time solving these problems. I would advise, however, that you
let users dial down the privacy (after explaining to them the trade-offs) in
exchange for convenience. For instance, to replace IRC you would need to support
channels which anyone can join at any time and which might make chat logs
available to the public.

A new chat app also needs **anonymity**. None of this nonsense where users have
to install your app and give you their phone number to register. In fact, you
should know next to nothing about each user, given that the most secure data is
the data you don't have. This is made more difficult when you consider that
you'll also strive to provide an authentic identity for users to establish
between themselves &mdash; but not with you. Users should also be able to
establish a pseudonymous identity, or wear multiple identities. You need to
provide (1) a strong guarantee of consistent identity from session to
session, (2) without sharing that guarantee with your servers, and (3) offering
the ability to able to change to a new identity at will. The full implications
of anonymity are a complex issue which is out of scope for this article, but for
now it suffices to say that you should at refrain from asking for the user's
phone number.

Finally, it needs to be **robust, reliable, and performant**. Focus on the
basics: delivering messages quickly and reliably. The first thing you need to
produce is a reliable messenger which works in a variety of situations, on a
variety of platforms, in various network conditions, and so on, with the
underlying concerns of federation, end-to-end encryption, protocol
standardization, group and individual chats, multi-device support, and so on, in
place and working. You can try to deliver this in a moderately attractive
interface, but sinking a lot of time into fancy animations, stickers, GIF
lookups, typing notifications and read receipts &mdash; all of this is a
distraction until you get the real work done. You can have all of these things,
but if you don't have a reliable system underlying them, the result is
worthless.

I would also recommend leaving a lot of those features at the door, anyway.
Typing notifications and read receipts are pretty toxic, if you examine them
critically. A lot of chat apps have a problem with cargo-culting bad ideas from
each other. Try to resist that. Anyway, you have a lot of work to do, so I'll
leave you to it. [Let me know](mailto:sir@cmpwn.com) what you're working on when
you've got something to show for it.

And don't put a fucking cryptocurrency in it.

<details>
  <summary>Regarding Matrix, IRC, etc</summary>
  <p>
    Let's quickly address the present state of the ecosystem. Matrix rates well
    in most of these respects, much better than others. However, their software
    is way too complicated. They are federated, but the software is far from
    reliable or robust, so the ecosystem tends to be centralized because
    Matrix.org are the only ones who have the knowledge and bandwidth to keep it
    up and running. The performance sucks, client and server both, and their UX
    for E2EE is confusing and difficult to use.

  <p>
    It's a good attempt, but too complex and brittle. Also, their bridge
    is a major nuisance to IRC, which biases me against them. Please don't
    integrate your next chat app with IRC; just leave us alone, thanks.

  <p>
    Speaking of IRC, it is still my main chat program, and has been for 15+
    years. The lack of E2EE, which unacceptable for any new protocol, is not
    important enough to get me to switch to anything else until it presents a
    compelling alternative to IRC.
</details>