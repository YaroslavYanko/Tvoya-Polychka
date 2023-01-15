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

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  /** An array relationship */
  goods_items: Array<Goods>;
  id: Scalars['uuid'];
  slug: Scalars['String'];
  title: Scalars['String'];
};


/** columns and relationships of "categories" */
export type CategoriesGoods_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  goods_items?: InputMaybe<Goods_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  goods_items_aggregate?: InputMaybe<Goods_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
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
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id: Scalars['uuid'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  image: Scalars['String'];
  price: Scalars['numeric'];
  shortName: Scalars['String'];
  title: Scalars['String'];
};

/** order by aggregate values of table "goods" */
export type Goods_Aggregate_Order_By = {
  avg?: InputMaybe<Goods_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Goods_Max_Order_By>;
  min?: InputMaybe<Goods_Min_Order_By>;
  stddev?: InputMaybe<Goods_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Goods_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Goods_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Goods_Sum_Order_By>;
  var_pop?: InputMaybe<Goods_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Goods_Var_Samp_Order_By>;
  variance?: InputMaybe<Goods_Variance_Order_By>;
};

/** order by avg() on columns of table "goods" */
export type Goods_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "goods". All fields are combined with a logical 'AND'. */
export type Goods_Bool_Exp = {
  _and?: InputMaybe<Array<Goods_Bool_Exp>>;
  _not?: InputMaybe<Goods_Bool_Exp>;
  _or?: InputMaybe<Array<Goods_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  shortName?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "goods" */
export type Goods_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  shortName?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "goods" */
export type Goods_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  shortName?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "goods". */
export type Goods_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
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
  CategoryId = 'category_id',
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

/** order by stddev() on columns of table "goods" */
export type Goods_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "goods" */
export type Goods_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "goods" */
export type Goods_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "goods" */
export type Goods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goods_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  shortName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "goods" */
export type Goods_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "goods" */
export type Goods_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "goods" */
export type Goods_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "goods" */
export type Goods_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
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
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "goods" */
  goods: Array<Goods>;
  /** fetch data from the table: "goods" using primary key columns */
  goods_by_pk?: Maybe<Goods>;
  /** fetch data from the table: "settings" */
  settings: Array<Settings>;
};


export type Query_RootAdminLoginArgs = {
  admin: AdminLoginInput;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Query_RootSettingsArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

/** columns and relationships of "settings" */
export type Settings = {
  __typename?: 'settings';
  masks_category?: Maybe<Scalars['uuid']>;
};

/** Boolean expression to filter rows from the table "settings". All fields are combined with a logical 'AND'. */
export type Settings_Bool_Exp = {
  _and?: InputMaybe<Array<Settings_Bool_Exp>>;
  _not?: InputMaybe<Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Settings_Bool_Exp>>;
  masks_category?: InputMaybe<Uuid_Comparison_Exp>;
};

/** Ordering options when selecting data from "settings". */
export type Settings_Order_By = {
  masks_category?: InputMaybe<Order_By>;
};

/** select columns of table "settings" */
export enum Settings_Select_Column {
  /** column name */
  MasksCategory = 'masks_category'
}

/** Streaming cursor of the table "settings" */
export type Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Settings_Stream_Cursor_Value_Input = {
  masks_category?: InputMaybe<Scalars['uuid']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "goods" */
  goods: Array<Goods>;
  /** fetch data from the table: "goods" using primary key columns */
  goods_by_pk?: Maybe<Goods>;
  /** fetch data from the table in a streaming manner: "goods" */
  goods_stream: Array<Goods>;
  /** fetch data from the table: "settings" */
  settings: Array<Settings>;
  /** fetch data from the table in a streaming manner: "settings" */
  settings_stream: Array<Settings>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
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


export type Subscription_RootSettingsArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};


export type Subscription_RootSettings_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<Settings_Bool_Exp>;
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

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: any, slug: string, title: string }> };

export type GetGoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGoodsQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: any, slug: string, title: string, goods_items: Array<{ __typename?: 'goods', id: any, image: string, description: string, price: any, shortName: string, title: string, category_id: any }> }> };

export type GetSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingsQuery = { __typename?: 'query_root', settings: Array<{ __typename?: 'settings', masks_category?: any | null }> };


export const GetCategoriesDocument = gql`
    query GetCategories {
  categories {
    id
    slug
    title
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetGoodsDocument = gql`
    query GetGoods {
  categories {
    id
    slug
    title
    goods_items {
      id
      image
      description
      price
      shortName
      title
      category_id
    }
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
export const GetSettingsDocument = gql`
    query GetSettings {
  settings {
    masks_category
  }
}
    `;

/**
 * __useGetSettingsQuery__
 *
 * To run a query within a React component, call `useGetSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSettingsQuery(baseOptions?: Apollo.QueryHookOptions<GetSettingsQuery, GetSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSettingsQuery, GetSettingsQueryVariables>(GetSettingsDocument, options);
      }
export function useGetSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSettingsQuery, GetSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSettingsQuery, GetSettingsQueryVariables>(GetSettingsDocument, options);
        }
export type GetSettingsQueryHookResult = ReturnType<typeof useGetSettingsQuery>;
export type GetSettingsLazyQueryHookResult = ReturnType<typeof useGetSettingsLazyQuery>;
export type GetSettingsQueryResult = Apollo.QueryResult<GetSettingsQuery, GetSettingsQueryVariables>;