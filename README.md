# HelloAzureFunctions
This code is a sample using Azure Functions and Docker for this guide: https://medium.com/@schifferjulian/how-to-get-started-with-azure-functions-and-docker-ef96e96faa80

if you want to clone the repo just open a command prompt and run

git clone https://github.com/Zheoden/HelloAzureFunctions

Keep in mind that you need to have installed docker before.
Once you have the code, run the following commands:

docker build -t demoazurefunctions .

docker run --name helloazurefunctions -p 8080:80 demoazurefunctions

if you want more information you can check out my guide!

