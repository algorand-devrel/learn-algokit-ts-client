import * as algokit from '@algorandfoundation/algokit-utils'
import { CalculatorClient } from '../artifacts/calculator/client'

// Below is a showcase of various deployment options you can use in TypeScript Client
export async function deploy() {
  console.log('=== Deploying Calculator ===')

  const algod = algokit.getAlgoClient()
  const indexer = algokit.getAlgoIndexerClient()
  const deployer = await algokit.getAccount(
    { config: algokit.getAccountConfigFromEnvironment('DEPLOYER'), fundWith: algokit.algos(3) },
    algod,
  )
  await algokit.ensureFunded(
    {
      accountToFund: deployer,
      minSpendingBalance: algokit.algos(2),
      minFundingIncrement: algokit.algos(2),
    },
    algod,
  )

  const appClient = new CalculatorClient(
    {
      resolveBy: 'creatorAndName',
      findExistingUsing: indexer,
      sender: deployer,
      creatorAddress: deployer.addr,
    },
    algod,
  )
  const app = await appClient.deploy({
    onSchemaBreak: 'append',
    onUpdate: 'append',
  })

  // If app was just created fund the app account
  if (['create', 'replace'].includes(app.operationPerformed)) {
    algokit.transferAlgos(
      {
        amount: algokit.algos(1),
        from: deployer,
        to: app.appAddress,
      },
      algod,
    )
  }

  const method = 'add'
  const response = await appClient.add({ a: 10, b: 5 })
  console.log(`Called ${method} (${app.appId}) received: ${response.return}`)

  //write the app call to sub method using the appClient
  const subMethod = 'sub'
  const subResponse = await appClient.sub({ a: 20, b: 5 })
  console.log(`Called ${subMethod} (${app.appId}) received: ${subResponse.return}`)

  //write the app call to mul method using the appClient
  const mulMethod = 'mul'
  const mulResponse = await appClient.mul({ a: 3, b: 5 })
  console.log(`Called ${mulMethod} (${app.appId}) received: ${mulResponse.return}`)

  //write the app call to div method using the appClient
  const divMethod = 'div'
  const divResponse = await appClient.div({ a: 45, b: 3 })
  console.log(`Called ${divMethod} (${app.appId}) received: ${divResponse.return}`)
}
