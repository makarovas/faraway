import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import { config as dotEnvConfig } from 'dotenv';
import { HardhatUserConfig, task } from 'hardhat/config';

dotEnvConfig();
const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const { API_URL } = process.env;

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
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
    dontOverrideCompile: false, // defaults to false
  },
};

export default config;
