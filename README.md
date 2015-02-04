# Wikidrop

Scrapes a requested Wikipedia article, bundles it into a web component, and drops it down to the client.

## Installation
#### Prerequisites (brew, node)
```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew update
$ brew doctor
$ brew install node
```
#### Local install
```
$ git clone https://github.com/alexburner/wikidrop.git:wikidrop
$ cd wikidrop
$ npm install
```

## Starting up
```
$ npm start
```

## Usage
```
http://localhost:1234/scrape?title={article title}
```