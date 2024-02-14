/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  AppState,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom, SendTransactionParams } from '@algorandfoundation/algokit-utils/types/transaction'
import type { ABIResult, TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer, modelsv2 } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "add(uint64,uint64)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "sub(uint64,uint64)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "div(uint64,uint64)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "mul(uint64,uint64)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMQpieXRlY2Jsb2NrIDB4MTUxZjdjNzUKdHhuIE51bUFwcEFyZ3MKaW50Y18wIC8vIDAKPT0KYm56IG1haW5fbDEwCnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4ZmU2YmRmNjkgLy8gImFkZCh1aW50NjQsdWludDY0KXVpbnQ2NCIKPT0KYm56IG1haW5fbDkKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHg3OGI0ODhiNyAvLyAic3ViKHVpbnQ2NCx1aW50NjQpdWludDY0Igo9PQpibnogbWFpbl9sOAp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDE2ZTgwZjA4IC8vICJkaXYodWludDY0LHVpbnQ2NCl1aW50NjQiCj09CmJueiBtYWluX2w3CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4ZTJmMTg4YzUgLy8gIm11bCh1aW50NjQsdWludDY0KXVpbnQ2NCIKPT0KYm56IG1haW5fbDYKZXJyCm1haW5fbDY6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgbXVsY2FzdGVyXzcKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDc6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgZGl2Y2FzdGVyXzYKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDg6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgc3ViY2FzdGVyXzUKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDk6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgYWRkY2FzdGVyXzQKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDEwOgp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CmJueiBtYWluX2wxMgplcnIKbWFpbl9sMTI6CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCj09CmFzc2VydAppbnRjXzEgLy8gMQpyZXR1cm4KCi8vIGFkZAphZGRfMDoKcHJvdG8gMiAxCmludGNfMCAvLyAwCmZyYW1lX2RpZyAtMgpmcmFtZV9kaWcgLTEKKwpmcmFtZV9idXJ5IDAKcmV0c3ViCgovLyBzdWIKc3ViXzE6CnByb3RvIDIgMQppbnRjXzAgLy8gMApmcmFtZV9kaWcgLTIKZnJhbWVfZGlnIC0xCi0KZnJhbWVfYnVyeSAwCnJldHN1YgoKLy8gZGl2CmRpdl8yOgpwcm90byAyIDEKaW50Y18wIC8vIDAKZnJhbWVfZGlnIC0yCmZyYW1lX2RpZyAtMQovCmZyYW1lX2J1cnkgMApyZXRzdWIKCi8vIG11bAptdWxfMzoKcHJvdG8gMiAxCmludGNfMCAvLyAwCmZyYW1lX2RpZyAtMgpmcmFtZV9kaWcgLTEKKgpmcmFtZV9idXJ5IDAKcmV0c3ViCgovLyBhZGRfY2FzdGVyCmFkZGNhc3Rlcl80Ogpwcm90byAwIDAKaW50Y18wIC8vIDAKZHVwbiAyCnR4bmEgQXBwbGljYXRpb25BcmdzIDEKYnRvaQpmcmFtZV9idXJ5IDEKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgpidG9pCmZyYW1lX2J1cnkgMgpmcmFtZV9kaWcgMQpmcmFtZV9kaWcgMgpjYWxsc3ViIGFkZF8wCmZyYW1lX2J1cnkgMApieXRlY18wIC8vIDB4MTUxZjdjNzUKZnJhbWVfZGlnIDAKaXRvYgpjb25jYXQKbG9nCnJldHN1YgoKLy8gc3ViX2Nhc3RlcgpzdWJjYXN0ZXJfNToKcHJvdG8gMCAwCmludGNfMCAvLyAwCmR1cG4gMgp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCmJ0b2kKZnJhbWVfYnVyeSAxCnR4bmEgQXBwbGljYXRpb25BcmdzIDIKYnRvaQpmcmFtZV9idXJ5IDIKZnJhbWVfZGlnIDEKZnJhbWVfZGlnIDIKY2FsbHN1YiBzdWJfMQpmcmFtZV9idXJ5IDAKYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CmZyYW1lX2RpZyAwCml0b2IKY29uY2F0CmxvZwpyZXRzdWIKCi8vIGRpdl9jYXN0ZXIKZGl2Y2FzdGVyXzY6CnByb3RvIDAgMAppbnRjXzAgLy8gMApkdXBuIDIKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpidG9pCmZyYW1lX2J1cnkgMQp0eG5hIEFwcGxpY2F0aW9uQXJncyAyCmJ0b2kKZnJhbWVfYnVyeSAyCmZyYW1lX2RpZyAxCmZyYW1lX2RpZyAyCmNhbGxzdWIgZGl2XzIKZnJhbWVfYnVyeSAwCmJ5dGVjXzAgLy8gMHgxNTFmN2M3NQpmcmFtZV9kaWcgMAppdG9iCmNvbmNhdApsb2cKcmV0c3ViCgovLyBtdWxfY2FzdGVyCm11bGNhc3Rlcl83Ogpwcm90byAwIDAKaW50Y18wIC8vIDAKZHVwbiAyCnR4bmEgQXBwbGljYXRpb25BcmdzIDEKYnRvaQpmcmFtZV9idXJ5IDEKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgpidG9pCmZyYW1lX2J1cnkgMgpmcmFtZV9kaWcgMQpmcmFtZV9kaWcgMgpjYWxsc3ViIG11bF8zCmZyYW1lX2J1cnkgMApieXRlY18wIC8vIDB4MTUxZjdjNzUKZnJhbWVfZGlnIDAKaXRvYgpjb25jYXQKbG9nCnJldHN1Yg==",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDgKcHVzaGludCAwIC8vIDAKcmV0dXJu"
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "schema": {
    "global": {
      "declared": {},
      "reserved": {}
    },
    "local": {
      "declared": {},
      "reserved": {}
    }
  },
  "contract": {
    "name": "calculator",
    "methods": [
      {
        "name": "add",
        "args": [
          {
            "type": "uint64",
            "name": "a"
          },
          {
            "type": "uint64",
            "name": "b"
          }
        ],
        "returns": {
          "type": "uint64"
        },
        "desc": "Add b to a"
      },
      {
        "name": "sub",
        "args": [
          {
            "type": "uint64",
            "name": "a"
          },
          {
            "type": "uint64",
            "name": "b"
          }
        ],
        "returns": {
          "type": "uint64"
        },
        "desc": "Subtract b from a"
      },
      {
        "name": "div",
        "args": [
          {
            "type": "uint64",
            "name": "a"
          },
          {
            "type": "uint64",
            "name": "b"
          }
        ],
        "returns": {
          "type": "uint64"
        },
        "desc": "Divide a by b"
      },
      {
        "name": "mul",
        "args": [
          {
            "type": "uint64",
            "name": "a"
          },
          {
            "type": "uint64",
            "name": "b"
          }
        ],
        "returns": {
          "type": "uint64"
        },
        "desc": "Multiply a and b"
      }
    ],
    "networks": {}
  },
  "bare_call_config": {
    "no_op": "CREATE"
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt.
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

export type AppCreateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult> & AppReference
export type AppUpdateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult>

export type AppClientComposeCallCoreParams = Omit<AppClientCallCoreParams, 'sendParams'> & {
  sendParams?: Omit<SendTransactionParams, 'skipSending' | 'atc' | 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources'>
}
export type AppClientComposeExecuteParams = Pick<SendTransactionParams, 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources' | 'suppressLog'>

/**
 * Defines the types of available calls and state of the Calculator smart contract.
 */
export type Calculator = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'add(uint64,uint64)uint64' | 'add', {
      argsObj: {
        a: bigint | number
        b: bigint | number
      }
      argsTuple: [a: bigint | number, b: bigint | number]
      returns: bigint
    }>
    & Record<'sub(uint64,uint64)uint64' | 'sub', {
      argsObj: {
        a: bigint | number
        b: bigint | number
      }
      argsTuple: [a: bigint | number, b: bigint | number]
      returns: bigint
    }>
    & Record<'div(uint64,uint64)uint64' | 'div', {
      argsObj: {
        a: bigint | number
        b: bigint | number
      }
      argsTuple: [a: bigint | number, b: bigint | number]
      returns: bigint
    }>
    & Record<'mul(uint64,uint64)uint64' | 'mul', {
      argsObj: {
        a: bigint | number
        b: bigint | number
      }
      argsTuple: [a: bigint | number, b: bigint | number]
      returns: bigint
    }>
}
/**
 * Defines the possible abi call signatures
 */
export type CalculatorSig = keyof Calculator['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends CalculatorSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the Calculator smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends CalculatorSig> = Calculator['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the Calculator smart contract to the method's return type
 */
export type MethodReturn<TSignature extends CalculatorSig> = Calculator['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type CalculatorCreateCalls = (typeof CalculatorCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type CalculatorCreateCallParams =
  | (TypedCallParams<undefined> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type CalculatorDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: CalculatorCreateCalls) => CalculatorCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class CalculatorCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the calculator smart contract using a bare call
       *
       * @param params Any parameters for the call
       * @returns A TypedCallParams object for the call
       */
      bare(params: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: undefined,
          methodArgs: undefined,
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the add(uint64,uint64)uint64 ABI method
   *
   * Add b to a
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static add(args: MethodArgs<'add(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'add(uint64,uint64)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the sub(uint64,uint64)uint64 ABI method
   *
   * Subtract b from a
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static sub(args: MethodArgs<'sub(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'sub(uint64,uint64)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the div(uint64,uint64)uint64 ABI method
   *
   * Divide a by b
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static div(args: MethodArgs<'div(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'div(uint64,uint64)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the mul(uint64,uint64)uint64 ABI method
   *
   * Multiply a and b
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static mul(args: MethodArgs<'mul(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'mul(uint64,uint64)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b],
      ...params,
    }
  }
}

/**
 * A client to make calls to the calculator smart contract
 */
export class CalculatorClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `CalculatorClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue } as AppCallTransactionResultOfType<TReturn> & TResult
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof Calculator['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the calculator smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: CalculatorDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(CalculatorCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the calculator smart contract using a bare call.
       *
       * @param args The arguments for the bare call
       * @returns The create result
       */
      async bare(args: BareCallArgs & AppClientCallCoreParams & AppClientCompilationParams & CoreAppCallArgs & (OnCompleteNoOp) = {}) {
        return $this.mapReturnValue<undefined, AppCreateCallTransactionResult>(await $this.appClient.create(args))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the calculator smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the add(uint64,uint64)uint64 ABI method.
   *
   * Add b to a
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public add(args: MethodArgs<'add(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(CalculatorCallFactory.add(args, params))
  }

  /**
   * Calls the sub(uint64,uint64)uint64 ABI method.
   *
   * Subtract b from a
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public sub(args: MethodArgs<'sub(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(CalculatorCallFactory.sub(args, params))
  }

  /**
   * Calls the div(uint64,uint64)uint64 ABI method.
   *
   * Divide a by b
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public div(args: MethodArgs<'div(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(CalculatorCallFactory.div(args, params))
  }

  /**
   * Calls the mul(uint64,uint64)uint64 ABI method.
   *
   * Multiply a and b
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public mul(args: MethodArgs<'mul(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(CalculatorCallFactory.mul(args, params))
  }

  public compose(): CalculatorComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      add(args: MethodArgs<'add(uint64,uint64)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.add(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      sub(args: MethodArgs<'sub(uint64,uint64)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.sub(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      div(args: MethodArgs<'div(uint64,uint64)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.div(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      mul(args: MethodArgs<'mul(uint64,uint64)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.mul(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await atc.simulate(client.algod, new modelsv2.SimulateRequest({ txnGroups: [], ...options }))
        return {
          ...result,
          returns: result.methodResults?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      },
      async execute(sendParams?: AppClientComposeExecuteParams) {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as CalculatorComposer
  }
}
export type CalculatorComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the add(uint64,uint64)uint64 ABI method.
   *
   * Add b to a
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  add(args: MethodArgs<'add(uint64,uint64)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): CalculatorComposer<[...TReturns, MethodReturn<'add(uint64,uint64)uint64'>]>

  /**
   * Calls the sub(uint64,uint64)uint64 ABI method.
   *
   * Subtract b from a
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  sub(args: MethodArgs<'sub(uint64,uint64)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): CalculatorComposer<[...TReturns, MethodReturn<'sub(uint64,uint64)uint64'>]>

  /**
   * Calls the div(uint64,uint64)uint64 ABI method.
   *
   * Divide a by b
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  div(args: MethodArgs<'div(uint64,uint64)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): CalculatorComposer<[...TReturns, MethodReturn<'div(uint64,uint64)uint64'>]>

  /**
   * Calls the mul(uint64,uint64)uint64 ABI method.
   *
   * Multiply a and b
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  mul(args: MethodArgs<'mul(uint64,uint64)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): CalculatorComposer<[...TReturns, MethodReturn<'mul(uint64,uint64)uint64'>]>

  /**
   * Makes a clear_state call to an existing instance of the calculator smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs): CalculatorComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): CalculatorComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<CalculatorComposerSimulateResult<TReturns>>
  /**
   * Executes the transaction group and returns the results
   */
  execute(sendParams?: AppClientComposeExecuteParams): Promise<CalculatorComposerResults<TReturns>>
}
export type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>
export type CalculatorComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns
  methodResults: ABIResult[]
  simulateResponse: modelsv2.SimulateResponse
}
export type CalculatorComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}