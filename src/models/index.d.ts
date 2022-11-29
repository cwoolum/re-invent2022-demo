import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRecommendation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recommendation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly long?: number | null;
  readonly coverImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecommendation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recommendation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly long?: number | null;
  readonly coverImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Recommendation = LazyLoading extends LazyLoadingDisabled ? EagerRecommendation : LazyRecommendation

export declare const Recommendation: (new (init: ModelInit<Recommendation>) => Recommendation) & {
  copyOf(source: Recommendation, mutator: (draft: MutableModel<Recommendation>) => MutableModel<Recommendation> | void): Recommendation;
}