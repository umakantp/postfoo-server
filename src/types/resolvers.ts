/* IMP NOTE: This file is auto-generated by npm run gql:codegen, don't change manually */
import * as t from 'src/types'
import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
import type { GraphQLContext } from 'src/types'
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }


export type ResolverTypeWrapper<T> = Promise<T> | T

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>,
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>,
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>,
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>,
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info?: GraphQLResolveInfo
) => t.Maybe<TTypes> | Promise<t.Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info?: GraphQLResolveInfo) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => TResult | Promise<TResult>


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Node: ( t.Code ) | ( t.User ),
}

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BigInt: ResolverTypeWrapper<t.Scalars['BigInt']['output']>,
  Boolean: ResolverTypeWrapper<t.Scalars['Boolean']['output']>,
  Code: ResolverTypeWrapper<t.Code>,
  Date: ResolverTypeWrapper<t.Scalars['Date']['output']>,
  DateTime: ResolverTypeWrapper<t.Scalars['DateTime']['output']>,
  EmailAddress: ResolverTypeWrapper<t.Scalars['EmailAddress']['output']>,
  ErrorCode: t.ErrorCode,
  ID: ResolverTypeWrapper<t.Scalars['ID']['output']>,
  Int: ResolverTypeWrapper<t.Scalars['Int']['output']>,
  JWT: ResolverTypeWrapper<t.Scalars['JWT']['output']>,
  Mutation: ResolverTypeWrapper<undefined>,
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>,
  NonEmptyString: ResolverTypeWrapper<t.Scalars['NonEmptyString']['output']>,
  PageInfo: ResolverTypeWrapper<t.PageInfo>,
  PageInput: t.PageInput,
  PhoneNumber: ResolverTypeWrapper<t.Scalars['PhoneNumber']['output']>,
  Query: ResolverTypeWrapper<undefined>,
  ResendCodeInput: t.ResendCodeInput,
  SignInInput: t.SignInInput,
  SignUpInput: t.SignUpInput,
  String: ResolverTypeWrapper<t.Scalars['String']['output']>,
  SuccessPayload: ResolverTypeWrapper<t.SuccessPayload>,
  URL: ResolverTypeWrapper<t.Scalars['URL']['output']>,
  User: ResolverTypeWrapper<t.User>,
  UserStatus: t.UserStatus,
  VerifyCodeInput: t.VerifyCodeInput,
  Void: ResolverTypeWrapper<t.Scalars['Void']['output']>,
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: t.Scalars['BigInt']['output'],
  Boolean: t.Scalars['Boolean']['output'],
  Code: t.Code,
  Date: t.Scalars['Date']['output'],
  DateTime: t.Scalars['DateTime']['output'],
  EmailAddress: t.Scalars['EmailAddress']['output'],
  ID: t.Scalars['ID']['output'],
  Int: t.Scalars['Int']['output'],
  JWT: t.Scalars['JWT']['output'],
  Mutation: undefined,
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'],
  NonEmptyString: t.Scalars['NonEmptyString']['output'],
  PageInfo: t.PageInfo,
  PageInput: t.PageInput,
  PhoneNumber: t.Scalars['PhoneNumber']['output'],
  Query: undefined,
  ResendCodeInput: t.ResendCodeInput,
  SignInInput: t.SignInInput,
  SignUpInput: t.SignUpInput,
  String: t.Scalars['String']['output'],
  SuccessPayload: t.SuccessPayload,
  URL: t.Scalars['URL']['output'],
  User: t.User,
  VerifyCodeInput: t.VerifyCodeInput,
  Void: t.Scalars['Void']['output'],
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt',
}

export type CodeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Code'] = ResolversParentTypes['Code']> = {
  code?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  expireAt?: Resolver<t.Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date',
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime',
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress',
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JWT'], any> {
  name: 'JWT',
}

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  resendCode?: Resolver<ResolversTypes['SuccessPayload'], ParentType, ContextType, RequireFields<t.MutationResendCodeArgs, 'input'>>,
  signIn?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<t.MutationSignInArgs, 'input'>>,
  signUp?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<t.MutationSignUpArgs, 'input'>>,
  verifyCode?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<t.MutationVerifyCodeArgs, 'input'>>,
}

export type NodeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Code' | 'User', ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
}

export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString',
}

export type PageInfoResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<t.Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<t.Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
}

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber',
}

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  add?: Resolver<t.Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<t.QueryAddArgs>>,
  me?: Resolver<t.Maybe<ResolversTypes['User']>, ParentType, ContextType>,
}

export type SuccessPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SuccessPayload'] = ResolversParentTypes['SuccessPayload']> = {
  error?: Resolver<t.Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
}

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL',
}

export type UserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  codes?: Resolver<ReadonlyArray<ResolversTypes['Code']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  isBlocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lastName?: Resolver<t.Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>,
  mobile?: Resolver<ResolversTypes['PhoneNumber'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>,
  salt?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>,
  status?: Resolver<ResolversTypes['UserStatus'], ParentType, ContextType>,
  token?: Resolver<ResolversTypes['JWT'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
}

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void',
}

export type Resolvers<ContextType = GraphQLContext> = {
  BigInt?: GraphQLScalarType,
  Code?: CodeResolvers<ContextType>,
  Date?: GraphQLScalarType,
  DateTime?: GraphQLScalarType,
  EmailAddress?: GraphQLScalarType,
  JWT?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  Node?: NodeResolvers<ContextType>,
  NonEmptyString?: GraphQLScalarType,
  PageInfo?: PageInfoResolvers<ContextType>,
  PhoneNumber?: GraphQLScalarType,
  Query?: QueryResolvers<ContextType>,
  SuccessPayload?: SuccessPayloadResolvers<ContextType>,
  URL?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
  Void?: GraphQLScalarType,
}

