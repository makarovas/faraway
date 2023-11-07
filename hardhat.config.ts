import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import { config as dotEnvConfig } from 'dotenv';
import { HardhatUserConfig, task } from 'hardhat/config';

dotEnvConfig();
const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const { API_URL } = process.env;
console.log(process.env);

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  solidity: '0.8.4',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  typechain: {
    outDir: 'src/typechain-types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false,
    externalArtifacts: ['externalArtifacts/*.json'],
    dontOverrideCompile: false,
  },
};

export default config;
