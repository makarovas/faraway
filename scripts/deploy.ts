import { ethers } from 'hardhat';

async function main() {
  const baseTokenURI = 'ipfs://QmPz4f9RY2pwgiQ34UrQ8ZtLf31QTTS8FSSJ9GCWvktXtg/';
  const contractFactory = await ethers.getContractFactory('NFTCollectible');
  const contract = await contractFactory.deploy(baseTokenURI);

  await contract.deployed();

  console.log('NFTCollectible deployed to:', contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
