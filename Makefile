.PHONY: install start build serve deploy clean

i install:
	npm install

s start:
	npm run start

b build:
	npm run build

se serve:
	npm run serve

d deploy:
	USE_SSH=true npm run deploy

c clean:
	npm run clear
