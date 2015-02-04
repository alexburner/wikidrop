## Wikidrop

Scrapes a requested Wikipedia article, bundles it into a web component, and drops it down to the client.

#### Installation
#####Prerequisites
From command line:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew doctor
brew install node
git clone https://github.com/alexburner/wikidrop.git:wikidrop
cd wikidrop
npm install
```

#### Starting up
From command line:
```
npm start
```

#### Usage
From browser:
```
http://localhost:1234/scrape?title={article title}
```