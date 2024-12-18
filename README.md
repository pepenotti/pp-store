# My Static Store

This is a static store built with Jekyll to showcase items with their image, description, price, and status (In stock, reserved, sold). The data comes from a JSON file that gets updated manually in the repository.

## Pre-requisites

### Windows

1. [RubyInstaller](https://rubyinstaller.org/)
2. Jekyll and Bundler gems

### Linux

1. Ruby
2. RubyGems
3. Jekyll and Bundler gems

## Installation

### Windows

1. Install Ruby from [RubyInstaller](https://rubyinstaller.org/).
2. Open a command prompt and run:
   ```sh
   gem install jekyll bundler
   ```

### Linux

1. Install Ruby and RubyGems using your package manager. For example, on Ubuntu:
   ```sh
   sudo apt-get install ruby-full build-essential zlib1g-dev
   ```
2. Add the following lines to your ~/.bashrc file to set up the gem installation path:
   ```sh
   echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
   echo 'export GEM_HOME="```HOME/gems"' >> ~/.bashrc
   echo 'export PATH="```HOME/gems/bin:```PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```
3. Install Jekyll and Bundler:
   ```sh
   gem install jekyll bundler
   ```

## Running Locally

1. Clone the repository:
   ```sh
   git clonettps://github.com/pepenotti/pp-store.git
   cd pp-store
   ```
2. Install the dependencies:
   ```sh
   bundle install
   ```
3. Serve the site:
   ```sh
   bundle exec jekyll serve
   ```
4. Open your browser and go to http://localhost:4000 to see your site.

## Creating the Page

1. Fork the repository on GitHub.
2. Clone your forked repository:
   ```sh
   git clone https://github.com/your-username/pp-store.git
   cd my-static-store
   ```
3. Follow the steps in the "Running Locally" section to set up and run the site.
4. Push your changes to your forked repository.
5. Enable GitHub Pages in your repository settings to publish your site.