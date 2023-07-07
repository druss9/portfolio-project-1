echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to webserver-1"
scp -r build/* druss9@192.168.0.148:/var/www/192.168.0.148/

echo "Done!"