# Wikidrop
* Scrapes a requested Wikipedia article (by title)
* Bundles it into a web component (via Polymer)
* Drops it down to the client (hooray)

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