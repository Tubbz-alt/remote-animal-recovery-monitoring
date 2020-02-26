# Remote Animal Recovery Monitoring

## Brief

Like humans, dogs often suffer from injuries and joint problems but, unlike humans, there is no data resource to monitor postoperative recovery in small animals. Your task is to create a mobile phone app enabling dog carers to monitor progress of their dogs during recovery after orthopaedic surgery, provide information on what to expect, and connect them with their consultant. You will work with a leading veterinary orthopaedic surgeon specialising in treatment of these conditions, with the potential to significantly improve the quality of life for many animals with this new form of remote patient support.

## TODO

- [ ] Agree on a more memorable app name
- [x] Decide core technologies for app
- [x] Design sketches
- [ ] Create an app icon

## Core Features
- Ability to login (Tom)
- CMS (Agni)
- Chat client - supports images and videos (Andreea)
- Verified questionnares
- Sending out surveys
- Discharge information
- Weekly checkups
- Exporting to excel & pdf (Masha)
- Database (Masha)
- Front end (Archie & Dominic)

## Technologies
- JavaScript
- Node.js (Back-End)
- React (Front-End)

## Setup
Clone the git repository, change into the created directory and enter the following into a terminal:
```shell
yarn install
```
Then ensure the API and Chat server are running:
```shell
node src/components/server.js
node src/chat-server/chat-server.js
```
Finally, start the app:
```shell
yarn start
```
(Can also use npm in place of yarn!)
You can then access the app at [localhost:8080](http://localhost:8080)
