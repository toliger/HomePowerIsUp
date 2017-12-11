install:
	# Install dependencies
	sudo apt update
	sudo apt upgrade -y
	sudo apt install -y curl git zsh

	# Set zsh
	sudo echo "zsh" >> ~/.bashrc

	# Install docker
	sudo curl -sSL get.docker.com | sudo sh

	# Pull & start docker image
	sudo docker run -d --restart=unless-stopped
