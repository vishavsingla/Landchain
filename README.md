# Description:
Anti corrupto implementes decentralised land registration system
- Blockchain-based Transactions: The system utilizes blockchain technology to create a secure and tamper-proof record of land ownership and transfers. This ensures:
- Immutability: Once a transaction is recorded on the blockchain, it cannot be altered or deleted.
- Transparency: Everyone with permission can access the land registry and verify ownership history.
- Machine Learning for Price Detection: An ML model analyzes various factors to estimate the fair market value of land in a specific location. This helps identify transactions with significantly lower declared values, potentially indicating tax evasion.
- Automated Inquiry System: If the ML model detects a significant discrepancy between the declared value and the estimated market value, an automated inquiry is raised. This eliminates human intervention and reduces the possibility of bribery.

Used Polygon Ethereum Blockchain for testing and deploying solidity smart contracts

![image](https://github.com/mayank-0407/Anticurropto-HACKOWASP6/assets/95279293/24ca309e-e5f6-4c63-9759-72d6fc29786e)



# Steps to run the project
- git clone https://github.com/mayank-0407/Anticurropto-HACKOWASP6.git //Clone the repository
- Go into repository and open vscode
- Install reboot terminal Extension ( it will automatically install everything to run the project )
- In terminal type cd web3
- Add private key and alchemy block url in hardhat config file
- Now deploy it npx hardhat run deploy/scripts.js --networks polygonAmoy
- Now copy the transaction address and paste in frontend/src/utils/web3/constants.js
- Now you are all set so open the url in browser with web3 wallet  ( http://localhost:5173/ )

# ML Model:
got 98.73% model accuracy for Polynomial Features

# OR

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
- npx hardhat run scripts/deploy.js --network polygonAmoy
