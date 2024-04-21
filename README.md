# Steps to run the project
- git clone https://github.com/mayank-0407/Anticurropto-HACKOWASP6.git //Clone the repository
- Go into repository and open vscode
- Install reboot terminal Extension ( it will automatically install everything to run the project )
- In terminal type cd web3
- Add private key and alchemy block url in hardhat config file
- Now deploy it npx hardhat run deploy/scripts.js --networks sepolia
- Now copy the transaction address and paste in frontend/src/utils/web3/constants.js
- Now you are all set so open the url in browser with web3 wallet  ( http://localhost:5173/ )

# ML Model:
got 98.73% model accuracy for Polynomial Features

OR

# Frontend:
- cd frontend
- npm i
- npm run dev

# Database:
- cd backend
- docker compose up

# Backend:
- cd backend
- npm i
- npx prisma migrate dev
- npx prisma generate
- nodemon

# ML model python app:
- cd mlapi
- pip install -r requirements.txt
- python app.py

# web3:
- cd web3
- npm I
- npx hardhat run deploy/scripts.js --networks sepolia
...
