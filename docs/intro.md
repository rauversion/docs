---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Rauversion in less than 5 minutes**.

## Getting Started

Get started by **installing Rauversion**.

Or **try Rauversion immediately** creating an account on **[rauversion.com](https://rauversion.com)**.

### What you'll need

- [Elixir 13 (OTP 25)](https://elixir-lang.org/): Rauversion is made using the wonderful _Elixir_ language and [Phoenix Framework](https://www.phoenixframework.org/).

Additional libraries are needed for better sound and image processing:

- [lame](https://lame.sourceforge.io/)
- [ffmpeg](https://ffmpeg.org/)
- [imagemagick](https://imagemagick.org/)

The chosen database is [Postgres](https://www.postgresql.org).
We use [Makefiles](https://opensource.com/article/18/8/what-how-makefile) too.

Finally [yarn](https://yarnpkg.com/getting-started/install) is needed to install some javascript deps. Download [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.


We highly recommend using [Docker](https://www.docker.com/) and the [VSCode Dev Container](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) or [NeoVim Dev Container](https://github.com/jamestthompson3/nvim-remote-containers) plugins. If you prefer to install without _Docker_ then [asdfvm](https://asdf-vm.com) for installing dependencies and managing versions is a good choice too.

Example Installation (Debian)

```bash
apt update
apt install elixir
apt install postgresql postgresql-contrib
apt install -y nodejs npm
npm install --global yarn
apt install -y inotify-tools

mix local.hex --force
apt install -y ffmpeg
apt install -y libmad0-dev libid3tag0-dev libsndfile1-dev libgd-dev
apt install -y lame
```

## Start a new Rauversion server

### 1. Download 

Download the latest version from _Github_.

```bash
git clone git@github.com:rauversion/rauversion-phx.git
cd rauversion-phx
```

### 2. Run the Postgres Daemon

Ensure you are running the Postgres database. And that
the default user `postgres` and password are set.

```bash
postgres -D /usr/local/var/postgres &
```

If you want to connect with other database credentials 
Please check [dev.exs](https://github.com/rauversion/rauversion-phx/blob/main/config/dev.exs) file.

You can also configure the `.env` file by renaming [.env.example](https://github.com/rauversion/rauversion-phx/blob/main/.env.example) to `.env` and add your variable configurations.

### 3. Install Dependencies

We provide a special _Makefile_ with some useful commands.
To install all the deps and create the database just do:

```bash
make install
```

### 4. Start the Server

When all the deps and migrations are in place. We can start the server.

```bash
make start
```

Now you can visit [http://localhost:4000/](http://localhost:4000/) to see Rauversion!.
