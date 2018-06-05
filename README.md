# Shared Logs App

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/shared-logs/web-app/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/shared-logs/web-app/?branch=master)

### Install

  1. `npm install`
  2. Create `.env.local` with any necessary overrides of `.env` to match your environment.
  3. `npm run build`
  4. Move/symlink/whatevs the contents of the `build` directory to their destination

A sample `.env.local` file might be:

```dotenv
REACT_APP_API_URL=http://url/of/api
PUBLIC_URL=/path/to/build/dir/from/web/root
```

And a sample build script (i.e. the one I use) might look like

```bash
#!/usr/bin/env bash
npm install
npm run build
ln -s ~/shared-logs/api build/api

```