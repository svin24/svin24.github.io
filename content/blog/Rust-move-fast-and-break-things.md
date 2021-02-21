---
title: 'Rust: "Move fast and break things" as a moral imperative'
date: 2021-02-09
outputs: [html, gemtext]
---

Rust breaks a lot of stuff, and in ways that are difficult to fix. This can have
a chilling effect on users, particularly those on older or slower hardware. Rust
has only one implementation, with a very narrow set of supported platforms, tens
of millions of lines of C++ code, and no specification. Rust [ostensibly
supports][0] several dozen targets, but only the tier 1 platforms can be
reasonably expected to work. As someone who has tried to bootstrap Rust (and
failed) for even a tier-two platform, I can assure you that it's a nightmare.
Bringing it up for an entirely new target would be a hellish experience. Ask any
distribution packager who works with Rust to share their horror stories &mdash;
they have many.

[0]: https://doc.rust-lang.org/nightly/rustc/platform-support.html

<strong>The Rust
<abbr title="Used in software to refer to those who follow trends without understanding them, seeking their perceived benefits without understanding how they work or any of their trade-offs. Also, the Rust build tool is called Cargo, haha get it?">cargo cult</abbr>
needs to pause and re-evaluate.</strong> Switching to Rust breaks things for
anyone who steps even a toe out of the norm of Linux/macOS/Windows on x86_64 or
aarch64. Even on the supported platforms it comes with a substantial burden on
build requirements, calling for 10&times; to 100&times; or more RAM, CPU time,
and power usage. Whatever its benefits, choosing Rust is ultimately choosing to
lock a large group of people out of your project, and dooming many more to
struggle and frustration. These are real trade-offs that you need to seriously
consider.

Rewrite-it-in-Rust has become a moral imperative. Well, here's a moral argument:
throwing away serviceable computers every couple of years to upgrade is a
privilege that not all of your users have, contributes to climate change, and
fills up landfills. As far as security is concerned, some matters *demand*
leaving the norm: old hardware is the only kind that can avoid proprietary
firmware blobs, Intel ME or AMD PSP, and UEFI. Novel hardware which addresses
issues like microcode and open hardware, like POWER9 and RISC-V, are also
suffering under Rust's mainstream-or-bust regime. Anyone left behind is forced
to use the legacy C codebase you've abandoned, which is much worse for their
security than the hypothetical bugs you're trying to save them from.

C is not memory safe. It suffers from undefined behavior. These are valid
complaints. However, C code *can be secure*! Just look at [seL4][1], which I
guarantee you has fewer bugs than, say, [RedoxOS][2]. There are plenty of C
programs which aren't formally verified that work fine, too. Rewriting your code
in Rust is *always* going to introduce new bugs, including security bugs, that
wouldn't be there if you just maintained the C code. Maybe there are
undiscovered bugs lurking in your C codebase, but as your codebase ages under
continuous maintenance, that number will only shrink.

[1]: https://sel4.systems/
[2]: https://www.redox-os.org/

A working C toolchain (say, [cproc][3] and [qbe][4]) can be written in a couple
tens of thousands of lines of code. The only working Rust toolchain is tens of
millions of lines of C++ and Rust code. How many undiscovered bugs do you think
these two toolchains have when compared? How many of those are security issues?
How much relative work would it be to debug them, or port them to new &mdash; or
old &mdash; platforms? How often do these respective codebases churn, creating a
larger maintenance burden and introducing new bugs/vulnerabilities? I can
bootstrap a working C toolchain in about 10 minutes. I spent a week trying to do
that for Rust, and failed. That matters.

[3]: https://sr.ht/~mcf/cproc/
[4]: https://c9x.me/compile/

Rust is kind of cool, but it's not a panacea. There are legitimate reasons to
prefer C, both technical and moral, and Rust still needs a lot of work before
it's ready for the prime time in systems which prioritize stability,
reliability, simplicity, and accessibility. Those of us who work with such
systems, we feel like the Rust community has put its thumbs into its collective
ears, sung "la la la" to our problems, and proceeded to stomp all over the
software ecosystem like a toddler playing "Godzilla" with their Lego, all the
while yelling at us old fogies for being old and fogey.

To the Rust team: it's time to calm down. Slow down the language, write a
specification, focus on improving your tier 2 and tier 3 targets, expand to more
platforms, and work on performance, stability, and accessibility. Invest more in
third-party implementations like rust-gcc. I spent almost a week, full-time,
trying to bring up Rust for riscv64-musl. The bootstrap process is absolutely
miserable. Your ecosystem has real problems that affect real people. It's time
to stop ignoring them.