// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { User, Plant, OfferItem, Offer, Donor } from "./prisma-client";
import { Context } from "../types";

type Role = "ADMIN" | "USER";
type OfferItemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";
type DonorOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "number_ASC"
  | "number_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";
type OfferOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface OfferWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    items_every: OfferItemWhereInput | null;
    items_some: OfferItemWhereInput | null;
    items_none: OfferItemWhereInput | null;
    AND: OfferWhereInput[];
    OR: OfferWhereInput[];
    NOT: OfferWhereInput[];
  }
  export interface OfferItemWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    offer: OfferWhereInput | null;
    donors_every: DonorWhereInput | null;
    donors_some: DonorWhereInput | null;
    donors_none: DonorWhereInput | null;
    plant: PlantWhereInput | null;
    AND: OfferItemWhereInput[];
    OR: OfferItemWhereInput[];
    NOT: OfferItemWhereInput[];
  }
  export interface DonorWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    number: string | null;
    number_not: string | null;
    number_in: string[];
    number_not_in: string[];
    number_lt: string | null;
    number_lte: string | null;
    number_gt: string | null;
    number_gte: string | null;
    number_contains: string | null;
    number_not_contains: string | null;
    number_starts_with: string | null;
    number_not_starts_with: string | null;
    number_ends_with: string | null;
    number_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    OfferItems_every: OfferItemWhereInput | null;
    OfferItems_some: OfferItemWhereInput | null;
    OfferItems_none: OfferItemWhereInput | null;
    AND: DonorWhereInput[];
    OR: DonorWhereInput[];
    NOT: DonorWhereInput[];
  }
  export interface PlantWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    offerItems_every: OfferItemWhereInput | null;
    offerItems_some: OfferItemWhereInput | null;
    offerItems_none: OfferItemWhereInput | null;
    AND: PlantWhereInput[];
    OR: PlantWhereInput[];
    NOT: PlantWhereInput[];
  }

  export interface ArgsOffer {
    id: string;
  }

  export interface ArgsOffers {
    where: OfferWhereInput | null;
    orderBy: OfferOrderByInput | null;
  }

  export type MeResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export type UsersResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User[] | Promise<User[]>;

  export type PlantsResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Plant[] | Promise<Plant[]>;

  export type DonorsResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Donor[] | Promise<Donor[]>;

  export type OfferResolver = (
    parent: undefined,
    args: ArgsOffer,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Offer | null | Promise<Offer | null>;

  export type OffersResolver = (
    parent: undefined,
    args: ArgsOffers,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Offer[] | Promise<Offer[]>;

  export interface Type {
    me: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;

    users: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User[] | Promise<User[]>;

    plants: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Plant[] | Promise<Plant[]>;

    donors: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Donor[] | Promise<Donor[]>;

    offer: (
      parent: undefined,
      args: ArgsOffer,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Offer | null | Promise<Offer | null>;

    offers: (
      parent: undefined,
      args: ArgsOffers,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Offer[] | Promise<Offer[]>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    email: (parent: User) => parent.email,
    name: (parent: User) => parent.name,
    role: (parent: User) => parent.role
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type RoleResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Role | Promise<Role>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    email: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    role: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Role | Promise<Role>;
  }
}

export namespace PlantResolvers {
  export const defaultResolvers = {
    id: (parent: Plant) => parent.id,
    name: (parent: Plant) => parent.name
  };

  export interface OfferItemWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    offer: OfferWhereInput | null;
    donors_every: DonorWhereInput | null;
    donors_some: DonorWhereInput | null;
    donors_none: DonorWhereInput | null;
    plant: PlantWhereInput | null;
    AND: OfferItemWhereInput[];
    OR: OfferItemWhereInput[];
    NOT: OfferItemWhereInput[];
  }
  export interface OfferWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    items_every: OfferItemWhereInput | null;
    items_some: OfferItemWhereInput | null;
    items_none: OfferItemWhereInput | null;
    AND: OfferWhereInput[];
    OR: OfferWhereInput[];
    NOT: OfferWhereInput[];
  }
  export interface DonorWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    number: string | null;
    number_not: string | null;
    number_in: string[];
    number_not_in: string[];
    number_lt: string | null;
    number_lte: string | null;
    number_gt: string | null;
    number_gte: string | null;
    number_contains: string | null;
    number_not_contains: string | null;
    number_starts_with: string | null;
    number_not_starts_with: string | null;
    number_ends_with: string | null;
    number_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    OfferItems_every: OfferItemWhereInput | null;
    OfferItems_some: OfferItemWhereInput | null;
    OfferItems_none: OfferItemWhereInput | null;
    AND: DonorWhereInput[];
    OR: DonorWhereInput[];
    NOT: DonorWhereInput[];
  }
  export interface PlantWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    offerItems_every: OfferItemWhereInput | null;
    offerItems_some: OfferItemWhereInput | null;
    offerItems_none: OfferItemWhereInput | null;
    AND: PlantWhereInput[];
    OR: PlantWhereInput[];
    NOT: PlantWhereInput[];
  }

  export interface ArgsOfferItems {
    where: OfferItemWhereInput | null;
    orderBy: OfferItemOrderByInput | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type IdResolver = (
    parent: Plant,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Plant,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type OfferItemsResolver = (
    parent: Plant,
    args: ArgsOfferItems,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => OfferItem[] | Promise<OfferItem[]>;

  export interface Type {
    id: (
      parent: Plant,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Plant,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    offerItems: (
      parent: Plant,
      args: ArgsOfferItems,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => OfferItem[] | Promise<OfferItem[]>;
  }
}

export namespace OfferItemResolvers {
  export const defaultResolvers = {
    id: (parent: OfferItem) => parent.id
  };

  export interface DonorWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    number: string | null;
    number_not: string | null;
    number_in: string[];
    number_not_in: string[];
    number_lt: string | null;
    number_lte: string | null;
    number_gt: string | null;
    number_gte: string | null;
    number_contains: string | null;
    number_not_contains: string | null;
    number_starts_with: string | null;
    number_not_starts_with: string | null;
    number_ends_with: string | null;
    number_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    OfferItems_every: OfferItemWhereInput | null;
    OfferItems_some: OfferItemWhereInput | null;
    OfferItems_none: OfferItemWhereInput | null;
    AND: DonorWhereInput[];
    OR: DonorWhereInput[];
    NOT: DonorWhereInput[];
  }
  export interface OfferItemWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    offer: OfferWhereInput | null;
    donors_every: DonorWhereInput | null;
    donors_some: DonorWhereInput | null;
    donors_none: DonorWhereInput | null;
    plant: PlantWhereInput | null;
    AND: OfferItemWhereInput[];
    OR: OfferItemWhereInput[];
    NOT: OfferItemWhereInput[];
  }
  export interface OfferWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    items_every: OfferItemWhereInput | null;
    items_some: OfferItemWhereInput | null;
    items_none: OfferItemWhereInput | null;
    AND: OfferWhereInput[];
    OR: OfferWhereInput[];
    NOT: OfferWhereInput[];
  }
  export interface PlantWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    offerItems_every: OfferItemWhereInput | null;
    offerItems_some: OfferItemWhereInput | null;
    offerItems_none: OfferItemWhereInput | null;
    AND: PlantWhereInput[];
    OR: PlantWhereInput[];
    NOT: PlantWhereInput[];
  }

  export interface ArgsDonors {
    where: DonorWhereInput | null;
    orderBy: DonorOrderByInput | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type IdResolver = (
    parent: OfferItem,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type OfferResolver = (
    parent: OfferItem,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Offer | Promise<Offer>;

  export type DonorsResolver = (
    parent: OfferItem,
    args: ArgsDonors,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Donor[] | Promise<Donor[]>;

  export type PlantResolver = (
    parent: OfferItem,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Plant | Promise<Plant>;

  export interface Type {
    id: (
      parent: OfferItem,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    offer: (
      parent: OfferItem,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Offer | Promise<Offer>;

    donors: (
      parent: OfferItem,
      args: ArgsDonors,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Donor[] | Promise<Donor[]>;

    plant: (
      parent: OfferItem,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Plant | Promise<Plant>;
  }
}

export namespace OfferResolvers {
  export const defaultResolvers = {
    id: (parent: Offer) => parent.id,
    name: (parent: Offer) => parent.name
  };

  export interface OfferItemWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    offer: OfferWhereInput | null;
    donors_every: DonorWhereInput | null;
    donors_some: DonorWhereInput | null;
    donors_none: DonorWhereInput | null;
    plant: PlantWhereInput | null;
    AND: OfferItemWhereInput[];
    OR: OfferItemWhereInput[];
    NOT: OfferItemWhereInput[];
  }
  export interface OfferWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    items_every: OfferItemWhereInput | null;
    items_some: OfferItemWhereInput | null;
    items_none: OfferItemWhereInput | null;
    AND: OfferWhereInput[];
    OR: OfferWhereInput[];
    NOT: OfferWhereInput[];
  }
  export interface DonorWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    number: string | null;
    number_not: string | null;
    number_in: string[];
    number_not_in: string[];
    number_lt: string | null;
    number_lte: string | null;
    number_gt: string | null;
    number_gte: string | null;
    number_contains: string | null;
    number_not_contains: string | null;
    number_starts_with: string | null;
    number_not_starts_with: string | null;
    number_ends_with: string | null;
    number_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    OfferItems_every: OfferItemWhereInput | null;
    OfferItems_some: OfferItemWhereInput | null;
    OfferItems_none: OfferItemWhereInput | null;
    AND: DonorWhereInput[];
    OR: DonorWhereInput[];
    NOT: DonorWhereInput[];
  }
  export interface PlantWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    offerItems_every: OfferItemWhereInput | null;
    offerItems_some: OfferItemWhereInput | null;
    offerItems_none: OfferItemWhereInput | null;
    AND: PlantWhereInput[];
    OR: PlantWhereInput[];
    NOT: PlantWhereInput[];
  }

  export interface ArgsItems {
    where: OfferItemWhereInput | null;
    orderBy: OfferItemOrderByInput | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type IdResolver = (
    parent: Offer,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Offer,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ItemsResolver = (
    parent: Offer,
    args: ArgsItems,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => OfferItem[] | Promise<OfferItem[]>;

  export interface Type {
    id: (
      parent: Offer,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Offer,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    items: (
      parent: Offer,
      args: ArgsItems,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => OfferItem[] | Promise<OfferItem[]>;
  }
}

export namespace DonorResolvers {
  export const defaultResolvers = {
    id: (parent: Donor) => parent.id,
    number: (parent: Donor) => parent.number,
    name: (parent: Donor) => parent.name
  };

  export interface OfferItemWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    offer: OfferWhereInput | null;
    donors_every: DonorWhereInput | null;
    donors_some: DonorWhereInput | null;
    donors_none: DonorWhereInput | null;
    plant: PlantWhereInput | null;
    AND: OfferItemWhereInput[];
    OR: OfferItemWhereInput[];
    NOT: OfferItemWhereInput[];
  }
  export interface OfferWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    items_every: OfferItemWhereInput | null;
    items_some: OfferItemWhereInput | null;
    items_none: OfferItemWhereInput | null;
    AND: OfferWhereInput[];
    OR: OfferWhereInput[];
    NOT: OfferWhereInput[];
  }
  export interface DonorWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    number: string | null;
    number_not: string | null;
    number_in: string[];
    number_not_in: string[];
    number_lt: string | null;
    number_lte: string | null;
    number_gt: string | null;
    number_gte: string | null;
    number_contains: string | null;
    number_not_contains: string | null;
    number_starts_with: string | null;
    number_not_starts_with: string | null;
    number_ends_with: string | null;
    number_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    OfferItems_every: OfferItemWhereInput | null;
    OfferItems_some: OfferItemWhereInput | null;
    OfferItems_none: OfferItemWhereInput | null;
    AND: DonorWhereInput[];
    OR: DonorWhereInput[];
    NOT: DonorWhereInput[];
  }
  export interface PlantWhereInput {
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    name: string | null;
    name_not: string | null;
    name_in: string[];
    name_not_in: string[];
    name_lt: string | null;
    name_lte: string | null;
    name_gt: string | null;
    name_gte: string | null;
    name_contains: string | null;
    name_not_contains: string | null;
    name_starts_with: string | null;
    name_not_starts_with: string | null;
    name_ends_with: string | null;
    name_not_ends_with: string | null;
    offerItems_every: OfferItemWhereInput | null;
    offerItems_some: OfferItemWhereInput | null;
    offerItems_none: OfferItemWhereInput | null;
    AND: PlantWhereInput[];
    OR: PlantWhereInput[];
    NOT: PlantWhereInput[];
  }

  export interface ArgsOfferItems {
    where: OfferItemWhereInput | null;
    orderBy: OfferItemOrderByInput | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type IdResolver = (
    parent: Donor,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NumberResolver = (
    parent: Donor,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Donor,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type OfferItemsResolver = (
    parent: Donor,
    args: ArgsOfferItems,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => OfferItem[] | Promise<OfferItem[]>;

  export interface Type {
    id: (
      parent: Donor,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    number: (
      parent: Donor,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Donor,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    OfferItems: (
      parent: Donor,
      args: ArgsOfferItems,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => OfferItem[] | Promise<OfferItem[]>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsSignup {
    email: string;
    password: string;
    name: string;
  }

  export interface ArgsSignin {
    email: string;
    password: string;
  }

  export interface ArgsCreateDonor {
    number: string;
    name: string;
  }

  export interface ArgsUpdateDonor {
    id: string;
    number: string | null;
    name: string | null;
  }

  export interface ArgsDeleteDonor {
    id: string;
  }

  export interface ArgsCreatePlant {
    name: string;
  }

  export interface ArgsUpdatePlant {
    id: string;
    name: string | null;
  }

  export interface ArgsDeletePlant {
    id: string;
  }

  export interface ArgsCreateOffer {
    name: string;
  }

  export interface ArgsUpdateOffer {
    id: string;
    name: string | null;
  }

  export interface ArgsDeleteOffer {
    id: string;
  }

  export type SignupResolver = (
    parent: undefined,
    args: ArgsSignup,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export type SigninResolver = (
    parent: undefined,
    args: ArgsSignin,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export type SignoutResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type CreateDonorResolver = (
    parent: undefined,
    args: ArgsCreateDonor,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Donor | Promise<Donor>;

  export type UpdateDonorResolver = (
    parent: undefined,
    args: ArgsUpdateDonor,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Donor | Promise<Donor>;

  export type DeleteDonorResolver = (
    parent: undefined,
    args: ArgsDeleteDonor,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Donor | null | Promise<Donor | null>;

  export type CreatePlantResolver = (
    parent: undefined,
    args: ArgsCreatePlant,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Plant | Promise<Plant>;

  export type UpdatePlantResolver = (
    parent: undefined,
    args: ArgsUpdatePlant,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Plant | Promise<Plant>;

  export type DeletePlantResolver = (
    parent: undefined,
    args: ArgsDeletePlant,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Plant | null | Promise<Plant | null>;

  export type CreateOfferResolver = (
    parent: undefined,
    args: ArgsCreateOffer,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Offer | Promise<Offer>;

  export type UpdateOfferResolver = (
    parent: undefined,
    args: ArgsUpdateOffer,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Offer | Promise<Offer>;

  export type DeleteOfferResolver = (
    parent: undefined,
    args: ArgsDeleteOffer,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Offer | null | Promise<Offer | null>;

  export interface Type {
    signup: (
      parent: undefined,
      args: ArgsSignup,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;

    signin: (
      parent: undefined,
      args: ArgsSignin,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;

    signout: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    createDonor: (
      parent: undefined,
      args: ArgsCreateDonor,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Donor | Promise<Donor>;

    updateDonor: (
      parent: undefined,
      args: ArgsUpdateDonor,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Donor | Promise<Donor>;

    deleteDonor: (
      parent: undefined,
      args: ArgsDeleteDonor,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Donor | null | Promise<Donor | null>;

    createPlant: (
      parent: undefined,
      args: ArgsCreatePlant,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Plant | Promise<Plant>;

    updatePlant: (
      parent: undefined,
      args: ArgsUpdatePlant,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Plant | Promise<Plant>;

    deletePlant: (
      parent: undefined,
      args: ArgsDeletePlant,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Plant | null | Promise<Plant | null>;

    createOffer: (
      parent: undefined,
      args: ArgsCreateOffer,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Offer | Promise<Offer>;

    updateOffer: (
      parent: undefined,
      args: ArgsUpdateOffer,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Offer | Promise<Offer>;

    deleteOffer: (
      parent: undefined,
      args: ArgsDeleteOffer,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Offer | null | Promise<Offer | null>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  User: UserResolvers.Type;
  Plant: PlantResolvers.Type;
  OfferItem: OfferItemResolvers.Type;
  Offer: OfferResolvers.Type;
  Donor: DonorResolvers.Type;
  Mutation: MutationResolvers.Type;
}
