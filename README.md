# npm rebuild --runtime=electron --target=1.4.15 --disturl=https://atom.io/download/atom-shell --build-from-source

# electron-serialport
An example of how to use serialport in an electron app

**Clone and run for a quick way to see Electron and Serialport in action.**

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/zhongwuhuang/serial-port-assistant.git
# Go into the repository
cd serial-port-assistant
# Install dependencies
npm install
# Run the app
npm start

# package
npm run-script package---
```


Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/).

## Other Example Apps

For more example apps, see the
[list of boilerplates](http://electron.atom.io/community/#boilerplates)
created by the awesome electron community.

#### License [CC0 1.0 (Public Domain)](LICENSE.md)
