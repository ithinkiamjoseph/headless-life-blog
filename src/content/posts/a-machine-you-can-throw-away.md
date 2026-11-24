---
title: A machine you can throw away
date: 2026-11-20
description: If rebuilding your laptop takes more than an hour, the laptop owns you. Notes on making a workstation disposable.
draft: false
---

The goal is simple: any machine I use should be **replaceable in under an hour**
without losing anything that matters.

## What has to survive

1. Data — notes, photos, documents.
2. Configuration — dotfiles, package lists.
3. Secrets — keys and tokens.

Everything else is cache.

## A bootstrap script

```bash
#!/usr/bin/env bash
set -euo pipefail

git clone https://example.com/dotfiles ~/.dotfiles
~/.dotfiles/install.sh
```

The machine becomes a `view` over state that lives somewhere else.
