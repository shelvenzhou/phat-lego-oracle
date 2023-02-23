import type * as PhalaSdk from "@phala/sdk";
import type * as DevPhase from "devphase";
import type * as DPT from "devphase/etc/typings";
import type { ContractCallResult, ContractQuery } from "@polkadot/api-contract/base/types";
import type { ContractCallOutcome, ContractOptions } from "@polkadot/api-contract/types";
import type { Codec } from "@polkadot/types/types";

export namespace ActionEvmTransaction {
    type InkEnv_Types_AccountId = any;
    type ActionEvmTransaction_ActionEvmTransaction_Error = { BadOrigin: null } | { NotConfigured: null } | { BadAbi: null } | { BadParams: string } | { BadToAddress: null } | { BadTransaction: null } | { FailedToSendTransaction: null };
    type Result = { Ok: PrimitiveTypes_H256 } | { Err: ActionEvmTransaction_ActionEvmTransaction_Error };
    type PrimitiveTypes_H256 = any;

    /** */
    /** Queries */
    /** */
    namespace ContractQuery {
        export interface Owner extends DPT.ContractQuery {
            (certificateData: PhalaSdk.CertificateData, options: ContractOptions): DPT.CallResult<DPT.CallOutcome<DPT.IJson<InkEnv_Types_AccountId>>>;
        }

        export interface BuildTransaction extends DPT.ContractQuery {
            (certificateData: PhalaSdk.CertificateData, options: ContractOptions, to: string, abi: number[], func: string, params: number[][]): DPT.CallResult<DPT.CallOutcome<DPT.IJson<Result>>>;
        }

        export interface MaybeSendTransaction extends DPT.ContractQuery {
            (certificateData: PhalaSdk.CertificateData, options: ContractOptions, rlp: number[]): DPT.CallResult<DPT.CallOutcome<DPT.IJson<Result>>>;
        }
    }

    export interface MapMessageQuery extends DPT.MapMessageQuery {
        owner: ContractQuery.Owner;
        buildTransaction: ContractQuery.BuildTransaction;
        maybeSendTransaction: ContractQuery.MaybeSendTransaction;
    }

    /** */
    /** Transactions */
    /** */
    namespace ContractTx {
        export interface Config extends DPT.ContractTx {
            (options: ContractOptions, rpc: string): DPT.SubmittableExtrinsic;
        }
    }

    export interface MapMessageTx extends DPT.MapMessageTx {
        config: ContractTx.Config;
    }

    /** */
    /** Contract */
    /** */
    export declare class Contract extends DPT.Contract {
        get query(): MapMessageQuery;
        get tx(): MapMessageTx;
    }

    /** */
    /** Contract factory */
    /** */
    export declare class Factory extends DevPhase.ContractFactory {
        instantiate<T = Contract>(constructor: "default", params: never[], options?: DevPhase.InstantiateOptions): Promise<T>;
    }
}