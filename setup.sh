#!/bin/bash

# Check if episode number is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <episode-number>"
  exit 1
fi

EPISODE_NUM=$1
EPISODE_DIR="episodes/episode-$EPISODE_NUM"
NOTES_DIR="notes"
NOTES_FILE="$NOTES_DIR/episode-$EPISODE_NUM.md"

# Create episode-x folder in episodes directory
mkdir -p "$EPISODE_DIR"

# Create episode-x.md file in notes directory
mkdir -p "$NOTES_DIR"
touch "$NOTES_FILE"

# Create index.html in the episode-x folder
echo "<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset=\"UTF-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
    <title>Episode $EPISODE_NUM</title>
  </head>
  <body>
    <div id=\"root\"></div>
    <script type=\"module\" src=\"./index.js\"></script>
  </body>
</html>" > "$EPISODE_DIR/index.html"

echo "import React from \"react\";
import { createRoot } from \"react-dom/client\";
import App from \"./src/App\";

const root = createRoot(document.getElementById(\"root\"));
root.render(<App />);" > "$EPISODE_DIR/index.js"

# Initialize npm and install dependencies
cd "$EPISODE_DIR" || exit
npm init -y
jq 'del(.main) | del(.keywords) | del(.scripts.test) | .description = "This is react episode '"$EPISODE_NUM"'." | .scripts.start = "parcel index.html" | .author = "Shashidhar Nagaral" | .repository = {"type": "git", "url": "https://github.com/ShashidharNagaral/learn-react"}' package.json > package.json.tmp && mv package.json.tmp package.json


npm install parcel react react-dom

# Create src folder and App.js file
mkdir -p "src"

echo "const App = () => {
  return <div>Welcome to React Episode $EPISODE_NUM!</div>;
};

export default App;" > "src/App.js"

echo "Episode $EPISODE_NUM setup complete."