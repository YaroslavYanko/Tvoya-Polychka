import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  uuid: any;
};

export type AdminLoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AdminLoginOutput = {
  __typename?: 'AdminLoginOutput';
  accessToken: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "goods" */
export type Goods = {
  __typename?: 'goods';
  description: Scalars['String'];
  id: Scalars['uuid'];
  image: Scalars['String'];
  price: Scalars['numeric'];
  shortName: Scalars['String'];
  title: Scalars['String'];
};

/** Boolean expression to filter rows from the table "goods". All fields are combined with a logical 'AND'. */
export type Goods_Bool_Exp = {
  _and?: InputMaybe<Array<Goods_Bool_Exp>>;
  _not?: InputMaybe<Goods_Bool_Exp>;
  _or?: InputMaybe<Array<Goods_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  shortName?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "goods". */
export type Goods_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  shortName?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "goods" */
export enum Goods_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Price = 'price',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  Title = 'title'
}

/** Streaming cursor of the table "goods" */
export type Goods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goods_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  shortName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** Login admin */
  adminLogin?: Maybe<AdminLoginOutput>;
  /** fetch data from the table: "goods" */
  goods: Array<Goods>;
  /** fetch data from the table: "goods" using primary key columns */
  goods_by_pk?: Maybe<Goods>;
};


export type Query_RootAdminLoginArgs = {
  admin: AdminLoginInput;
};


export type Query_RootGoodsArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};


export type Query_RootGoods_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "goods" */
  goods: Array<Goods>;
  /** fetch data from the table: "goods" using primary key columns */
  goods_by_pk?: Maybe<Goods>;
  /** fetch data from the table in a streaming manner: "goods" */
  goods_stream: Array<Goods>;
};


export type Subscription_RootGoodsArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};


export type Subscription_RootGoods_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGoods_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Goods_Stream_Cursor_Input>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetGoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGoodsQuery = { __typename?: 'query_root', goods: Array<{ __typename?: 'goods', id: any, image: string, description: string, price: any, shortName: string, title: string }> };


export const GetGoodsDocument = gql`
    query GetGoods {
  goods {
    id
    image
    description
    price
    shortName
    title
  }
}
    `;

/**
 * __useGetGoodsQuery__
 *
 * To run a query within a React component, call `useGetGoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGoodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGoodsQuery(baseOptions?: Apollo.QueryHookOptions<GetGoodsQuery, GetGoodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGoodsQuery, GetGoodsQueryVariables>(GetGoodsDocument, options);
      }
export function useGetGoodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGoodsQuery, GetGoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGoodsQuery, GetGoodsQueryVariables>(GetGoodsDocument, options);
        }
export type GetGoodsQueryHookResult = ReturnType<typeof useGetGoodsQuery>;
export type GetGoodsLazyQueryHookResult = ReturnType<typeof useGetGoodsLazyQuery>;
export type GetGoodsQueryResult = Apollo.QueryResult<GetGoodsQuery, GetGoodsQueryVariables>;