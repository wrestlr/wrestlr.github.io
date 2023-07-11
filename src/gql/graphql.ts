import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> =
    | T
    | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    Gender: { input: any; output: any };
    bigint: { input: any; output: any };
    bytea: { input: any; output: any };
    citext: { input: any; output: any };
    jsonb: { input: any; output: any };
    timestamptz: { input: any; output: any };
    uuid: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['Boolean']['input']>;
    _gt?: InputMaybe<Scalars['Boolean']['input']>;
    _gte?: InputMaybe<Scalars['Boolean']['input']>;
    _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['Boolean']['input']>;
    _lte?: InputMaybe<Scalars['Boolean']['input']>;
    _neq?: InputMaybe<Scalars['Boolean']['input']>;
    _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Gender". All fields are combined with logical 'AND'. */
export type Gender_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['Gender']['input']>;
    _gt?: InputMaybe<Scalars['Gender']['input']>;
    _gte?: InputMaybe<Scalars['Gender']['input']>;
    _in?: InputMaybe<Array<Scalars['Gender']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['Gender']['input']>;
    _lte?: InputMaybe<Scalars['Gender']['input']>;
    _neq?: InputMaybe<Scalars['Gender']['input']>;
    _nin?: InputMaybe<Array<Scalars['Gender']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['Int']['input']>;
    _gt?: InputMaybe<Scalars['Int']['input']>;
    _gte?: InputMaybe<Scalars['Int']['input']>;
    _in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['Int']['input']>;
    _lte?: InputMaybe<Scalars['Int']['input']>;
    _neq?: InputMaybe<Scalars['Int']['input']>;
    _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['String']['input']>;
    _gt?: InputMaybe<Scalars['String']['input']>;
    _gte?: InputMaybe<Scalars['String']['input']>;
    /** does the column match the given case-insensitive pattern */
    _ilike?: InputMaybe<Scalars['String']['input']>;
    _in?: InputMaybe<Array<Scalars['String']['input']>>;
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: InputMaybe<Scalars['String']['input']>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    /** does the column match the given pattern */
    _like?: InputMaybe<Scalars['String']['input']>;
    _lt?: InputMaybe<Scalars['String']['input']>;
    _lte?: InputMaybe<Scalars['String']['input']>;
    _neq?: InputMaybe<Scalars['String']['input']>;
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: InputMaybe<Scalars['String']['input']>;
    _nin?: InputMaybe<Array<Scalars['String']['input']>>;
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: InputMaybe<Scalars['String']['input']>;
    /** does the column NOT match the given pattern */
    _nlike?: InputMaybe<Scalars['String']['input']>;
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: InputMaybe<Scalars['String']['input']>;
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: InputMaybe<Scalars['String']['input']>;
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: InputMaybe<Scalars['String']['input']>;
    /** does the column match the given SQL regular expression */
    _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
    __typename?: 'authProviderRequests';
    id: Scalars['uuid']['output'];
    options?: Maybe<Scalars['jsonb']['output']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
    path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
    __typename?: 'authProviderRequests_aggregate';
    aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
    nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
    __typename?: 'authProviderRequests_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<AuthProviderRequests_Max_Fields>;
    min?: Maybe<AuthProviderRequests_Min_Fields>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
    options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
    _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
    _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
    _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
    /** unique or primary key constraint on columns "id" */
    ProviderRequestsPkey = 'provider_requests_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
    options?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
    options?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
    options?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
    id?: InputMaybe<Scalars['uuid']['input']>;
    options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
    __typename?: 'authProviderRequests_max_fields';
    id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
    __typename?: 'authProviderRequests_min_fields';
    id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
    __typename?: 'authProviderRequests_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
    constraint: AuthProviderRequests_Constraint;
    update_columns?: Array<AuthProviderRequests_Update_Column>;
    where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
    id?: InputMaybe<Order_By>;
    options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
    options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
    /** column name */
    Id = 'id',
    /** column name */
    Options = 'options',
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
    id?: InputMaybe<Scalars['uuid']['input']>;
    options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
    id?: InputMaybe<Scalars['uuid']['input']>;
    options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
    /** column name */
    Id = 'id',
    /** column name */
    Options = 'options',
}

export type AuthProviderRequests_Updates = {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: InputMaybe<AuthProviderRequests_Append_Input>;
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<AuthProviderRequests_Set_Input>;
    /** filter the rows which have to be updated */
    where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
    __typename?: 'authProviders';
    id: Scalars['String']['output'];
    /** An array relationship */
    userProviders: Array<AuthUserProviders>;
    /** An aggregate relationship */
    userProviders_aggregate: AuthUserProviders_Aggregate;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
    distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
    where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
    where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
    __typename?: 'authProviders_aggregate';
    aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
    nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
    __typename?: 'authProviders_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<AuthProviders_Max_Fields>;
    min?: Maybe<AuthProviders_Min_Fields>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
    _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
    _not?: InputMaybe<AuthProviders_Bool_Exp>;
    _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
    id?: InputMaybe<String_Comparison_Exp>;
    userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
    userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
    /** unique or primary key constraint on columns "id" */
    ProvidersPkey = 'providers_pkey',
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
    id?: InputMaybe<Scalars['String']['input']>;
    userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
    __typename?: 'authProviders_max_fields';
    id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
    __typename?: 'authProviders_min_fields';
    id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
    __typename?: 'authProviders_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
    data: AuthProviders_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
    constraint: AuthProviders_Constraint;
    update_columns?: Array<AuthProviders_Update_Column>;
    where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
    id?: InputMaybe<Order_By>;
    userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
    id: Scalars['String']['input'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
    /** column name */
    Id = 'id',
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
    id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: AuthProviders_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
    id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
    /** column name */
    Id = 'id',
}

export type AuthProviders_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<AuthProviders_Set_Input>;
    /** filter the rows which have to be updated */
    where: AuthProviders_Bool_Exp;
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes = {
    __typename?: 'authRefreshTokenTypes';
    comment?: Maybe<Scalars['String']['output']>;
    /** An array relationship */
    refreshTokens: Array<AuthRefreshTokens>;
    /** An aggregate relationship */
    refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
    value: Scalars['String']['output'];
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokensArgs = {
    distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
    where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokens_AggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
    where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** aggregated selection of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate = {
    __typename?: 'authRefreshTokenTypes_aggregate';
    aggregate?: Maybe<AuthRefreshTokenTypes_Aggregate_Fields>;
    nodes: Array<AuthRefreshTokenTypes>;
};

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_Fields = {
    __typename?: 'authRefreshTokenTypes_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<AuthRefreshTokenTypes_Max_Fields>;
    min?: Maybe<AuthRefreshTokenTypes_Min_Fields>;
};

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokenTypes_Bool_Exp = {
    _and?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
    _not?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
    _or?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
    comment?: InputMaybe<String_Comparison_Exp>;
    refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
    refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
    value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Constraint {
    /** unique or primary key constraint on columns "value" */
    RefreshTokenTypesPkey = 'refresh_token_types_pkey',
}

export enum AuthRefreshTokenTypes_Enum {
    /** Personal access token */
    Pat = 'pat',
    /** Regular refresh token */
    Regular = 'regular',
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
    _eq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
    _in?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _neq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
    _nin?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
};

/** input type for inserting data into table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Insert_Input = {
    comment?: InputMaybe<Scalars['String']['input']>;
    refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
    value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokenTypes_Max_Fields = {
    __typename?: 'authRefreshTokenTypes_max_fields';
    comment?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRefreshTokenTypes_Min_Fields = {
    __typename?: 'authRefreshTokenTypes_min_fields';
    comment?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Mutation_Response = {
    __typename?: 'authRefreshTokenTypes_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<AuthRefreshTokenTypes>;
};

/** on_conflict condition type for table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_On_Conflict = {
    constraint: AuthRefreshTokenTypes_Constraint;
    update_columns?: Array<AuthRefreshTokenTypes_Update_Column>;
    where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_token_types". */
export type AuthRefreshTokenTypes_Order_By = {
    comment?: InputMaybe<Order_By>;
    refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
    value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_token_types */
export type AuthRefreshTokenTypes_Pk_Columns_Input = {
    value: Scalars['String']['input'];
};

/** select columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Select_Column {
    /** column name */
    Comment = 'comment',
    /** column name */
    Value = 'value',
}

/** input type for updating data in table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Set_Input = {
    comment?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRefreshTokenTypes" */
export type AuthRefreshTokenTypes_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: AuthRefreshTokenTypes_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokenTypes_Stream_Cursor_Value_Input = {
    comment?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Update_Column {
    /** column name */
    Comment = 'comment',
    /** column name */
    Value = 'value',
}

export type AuthRefreshTokenTypes_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
    /** filter the rows which have to be updated */
    where: AuthRefreshTokenTypes_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
    __typename?: 'authRefreshTokens';
    createdAt: Scalars['timestamptz']['output'];
    expiresAt: Scalars['timestamptz']['output'];
    id: Scalars['uuid']['output'];
    metadata?: Maybe<Scalars['jsonb']['output']>;
    refreshTokenHash?: Maybe<Scalars['String']['output']>;
    type: AuthRefreshTokenTypes_Enum;
    /** An object relationship */
    user: Users;
    userId: Scalars['uuid']['output'];
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
    path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
    __typename?: 'authRefreshTokens_aggregate';
    aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
    nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
    count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
    __typename?: 'authRefreshTokens_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<AuthRefreshTokens_Max_Fields>;
    min?: Maybe<AuthRefreshTokens_Min_Fields>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
    min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
    data: Array<AuthRefreshTokens_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
    _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
    _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
    _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
    createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    metadata?: InputMaybe<Jsonb_Comparison_Exp>;
    refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
    type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>;
    user?: InputMaybe<Users_Bool_Exp>;
    userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
    /** unique or primary key constraint on columns "id" */
    RefreshTokensPkey = 'refresh_tokens_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
    metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
    metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
    metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
    refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
    user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
    __typename?: 'authRefreshTokens_max_fields';
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    expiresAt?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    refreshTokenHash?: Maybe<Scalars['String']['output']>;
    userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
    createdAt?: InputMaybe<Order_By>;
    expiresAt?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    refreshTokenHash?: InputMaybe<Order_By>;
    userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
    __typename?: 'authRefreshTokens_min_fields';
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    expiresAt?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    refreshTokenHash?: Maybe<Scalars['String']['output']>;
    userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
    createdAt?: InputMaybe<Order_By>;
    expiresAt?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    refreshTokenHash?: InputMaybe<Order_By>;
    userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
    __typename?: 'authRefreshTokens_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
    constraint: AuthRefreshTokens_Constraint;
    update_columns?: Array<AuthRefreshTokens_Update_Column>;
    where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
    createdAt?: InputMaybe<Order_By>;
    expiresAt?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    metadata?: InputMaybe<Order_By>;
    refreshTokenHash?: InputMaybe<Order_By>;
    type?: InputMaybe<Order_By>;
    user?: InputMaybe<Users_Order_By>;
    userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    ExpiresAt = 'expiresAt',
    /** column name */
    Id = 'id',
    /** column name */
    Metadata = 'metadata',
    /** column name */
    RefreshTokenHash = 'refreshTokenHash',
    /** column name */
    Type = 'type',
    /** column name */
    UserId = 'userId',
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
    refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
    refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    ExpiresAt = 'expiresAt',
    /** column name */
    Id = 'id',
    /** column name */
    Metadata = 'metadata',
    /** column name */
    RefreshTokenHash = 'refreshTokenHash',
    /** column name */
    Type = 'type',
    /** column name */
    UserId = 'userId',
}

export type AuthRefreshTokens_Updates = {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
    /** filter the rows which have to be updated */
    where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
    __typename?: 'authRoles';
    role: Scalars['String']['output'];
    /** An array relationship */
    userRoles: Array<AuthUserRoles>;
    /** An aggregate relationship */
    userRoles_aggregate: AuthUserRoles_Aggregate;
    /** An array relationship */
    usersByDefaultRole: Array<Users>;
    /** An aggregate relationship */
    usersByDefaultRole_aggregate: Users_Aggregate;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
    distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
    where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
    where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
    distinct_on?: InputMaybe<Array<Users_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Users_Order_By>>;
    where?: InputMaybe<Users_Bool_Exp>;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Users_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Users_Order_By>>;
    where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
    __typename?: 'authRoles_aggregate';
    aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
    nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
    __typename?: 'authRoles_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<AuthRoles_Max_Fields>;
    min?: Maybe<AuthRoles_Min_Fields>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
    _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
    _not?: InputMaybe<AuthRoles_Bool_Exp>;
    _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
    role?: InputMaybe<String_Comparison_Exp>;
    userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
    userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
    usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
    usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
    /** unique or primary key constraint on columns "role" */
    RolesPkey = 'roles_pkey',
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
    role?: InputMaybe<Scalars['String']['input']>;
    userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
    usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
    __typename?: 'authRoles_max_fields';
    role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
    __typename?: 'authRoles_min_fields';
    role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
    __typename?: 'authRoles_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
    data: AuthRoles_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
    constraint: AuthRoles_Constraint;
    update_columns?: Array<AuthRoles_Update_Column>;
    where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
    role?: InputMaybe<Order_By>;
    userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
    usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
    role: Scalars['String']['input'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
    /** column name */
    Role = 'role',
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
    role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: AuthRoles_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
    role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
    /** column name */
    Role = 'role',
}

export type AuthRoles_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<AuthRoles_Set_Input>;
    /** filter the rows which have to be updated */
    where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
    __typename?: 'authUserProviders';
    accessToken: Scalars['String']['output'];
    createdAt: Scalars['timestamptz']['output'];
    id: Scalars['uuid']['output'];
    /** An object relationship */
    provider: AuthProviders;
    providerId: Scalars['String']['output'];
    providerUserId: Scalars['String']['output'];
    refreshToken?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['timestamptz']['output'];
    /** An object relationship */
    user: Users;
    userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
    __typename?: 'authUserProviders_aggregate';
    aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
    nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
    count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
    __typename?: 'authUserProviders_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<AuthUserProviders_Max_Fields>;
    min?: Maybe<AuthUserProviders_Min_Fields>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<AuthUserProviders_Max_Order_By>;
    min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
    data: Array<AuthUserProviders_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
    _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
    _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
    _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
    accessToken?: InputMaybe<String_Comparison_Exp>;
    createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    provider?: InputMaybe<AuthProviders_Bool_Exp>;
    providerId?: InputMaybe<String_Comparison_Exp>;
    providerUserId?: InputMaybe<String_Comparison_Exp>;
    refreshToken?: InputMaybe<String_Comparison_Exp>;
    updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    user?: InputMaybe<Users_Bool_Exp>;
    userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
    /** unique or primary key constraint on columns "id" */
    UserProvidersPkey = 'user_providers_pkey',
    /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
    UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
    /** unique or primary key constraint on columns "provider_id", "user_id" */
    UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key',
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
    accessToken?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
    providerId?: InputMaybe<Scalars['String']['input']>;
    providerUserId?: InputMaybe<Scalars['String']['input']>;
    refreshToken?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
    __typename?: 'authUserProviders_max_fields';
    accessToken?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    providerId?: Maybe<Scalars['String']['output']>;
    providerUserId?: Maybe<Scalars['String']['output']>;
    refreshToken?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
    userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
    accessToken?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    providerId?: InputMaybe<Order_By>;
    providerUserId?: InputMaybe<Order_By>;
    refreshToken?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
    __typename?: 'authUserProviders_min_fields';
    accessToken?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    providerId?: Maybe<Scalars['String']['output']>;
    providerUserId?: Maybe<Scalars['String']['output']>;
    refreshToken?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
    userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
    accessToken?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    providerId?: InputMaybe<Order_By>;
    providerUserId?: InputMaybe<Order_By>;
    refreshToken?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
    __typename?: 'authUserProviders_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
    constraint: AuthUserProviders_Constraint;
    update_columns?: Array<AuthUserProviders_Update_Column>;
    where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
    accessToken?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    provider?: InputMaybe<AuthProviders_Order_By>;
    providerId?: InputMaybe<Order_By>;
    providerUserId?: InputMaybe<Order_By>;
    refreshToken?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    user?: InputMaybe<Users_Order_By>;
    userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
    /** column name */
    AccessToken = 'accessToken',
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    Id = 'id',
    /** column name */
    ProviderId = 'providerId',
    /** column name */
    ProviderUserId = 'providerUserId',
    /** column name */
    RefreshToken = 'refreshToken',
    /** column name */
    UpdatedAt = 'updatedAt',
    /** column name */
    UserId = 'userId',
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
    accessToken?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    providerId?: InputMaybe<Scalars['String']['input']>;
    providerUserId?: InputMaybe<Scalars['String']['input']>;
    refreshToken?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
    accessToken?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    providerId?: InputMaybe<Scalars['String']['input']>;
    providerUserId?: InputMaybe<Scalars['String']['input']>;
    refreshToken?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
    /** column name */
    AccessToken = 'accessToken',
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    Id = 'id',
    /** column name */
    ProviderId = 'providerId',
    /** column name */
    ProviderUserId = 'providerUserId',
    /** column name */
    RefreshToken = 'refreshToken',
    /** column name */
    UpdatedAt = 'updatedAt',
    /** column name */
    UserId = 'userId',
}

export type AuthUserProviders_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<AuthUserProviders_Set_Input>;
    /** filter the rows which have to be updated */
    where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
    __typename?: 'authUserRoles';
    createdAt: Scalars['timestamptz']['output'];
    id: Scalars['uuid']['output'];
    role: Scalars['String']['output'];
    /** An object relationship */
    roleByRole: AuthRoles;
    /** An object relationship */
    user: Users;
    userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
    __typename?: 'authUserRoles_aggregate';
    aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
    nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
    count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
    __typename?: 'authUserRoles_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<AuthUserRoles_Max_Fields>;
    min?: Maybe<AuthUserRoles_Min_Fields>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<AuthUserRoles_Max_Order_By>;
    min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
    data: Array<AuthUserRoles_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
    _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
    _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
    _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
    createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    role?: InputMaybe<String_Comparison_Exp>;
    roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
    user?: InputMaybe<Users_Bool_Exp>;
    userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
    /** unique or primary key constraint on columns "id" */
    UserRolesPkey = 'user_roles_pkey',
    /** unique or primary key constraint on columns "user_id", "role" */
    UserRolesUserIdRoleKey = 'user_roles_user_id_role_key',
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    role?: InputMaybe<Scalars['String']['input']>;
    roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
    user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
    __typename?: 'authUserRoles_max_fields';
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    role?: Maybe<Scalars['String']['output']>;
    userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
    createdAt?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    role?: InputMaybe<Order_By>;
    userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
    __typename?: 'authUserRoles_min_fields';
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    role?: Maybe<Scalars['String']['output']>;
    userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
    createdAt?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    role?: InputMaybe<Order_By>;
    userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
    __typename?: 'authUserRoles_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
    constraint: AuthUserRoles_Constraint;
    update_columns?: Array<AuthUserRoles_Update_Column>;
    where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
    createdAt?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    role?: InputMaybe<Order_By>;
    roleByRole?: InputMaybe<AuthRoles_Order_By>;
    user?: InputMaybe<Users_Order_By>;
    userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    Id = 'id',
    /** column name */
    Role = 'role',
    /** column name */
    UserId = 'userId',
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    role?: InputMaybe<Scalars['String']['input']>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    role?: InputMaybe<Scalars['String']['input']>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    Id = 'id',
    /** column name */
    Role = 'role',
    /** column name */
    UserId = 'userId',
}

export type AuthUserRoles_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<AuthUserRoles_Set_Input>;
    /** filter the rows which have to be updated */
    where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
    __typename?: 'authUserSecurityKeys';
    counter: Scalars['bigint']['output'];
    credentialId: Scalars['String']['output'];
    credentialPublicKey?: Maybe<Scalars['bytea']['output']>;
    id: Scalars['uuid']['output'];
    nickname?: Maybe<Scalars['String']['output']>;
    transports: Scalars['String']['output'];
    /** An object relationship */
    user: Users;
    userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
    __typename?: 'authUserSecurityKeys_aggregate';
    aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
    nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
    count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
    __typename?: 'authUserSecurityKeys_aggregate_fields';
    avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
    min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
    stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
    stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
    sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
    var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
    var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
    variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
    avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
    min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
    stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
    stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
    sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
    var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
    var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
    variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
    data: Array<AuthUserSecurityKeys_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
    __typename?: 'authUserSecurityKeys_avg_fields';
    counter?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
    counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
    _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
    _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
    _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
    counter?: InputMaybe<Bigint_Comparison_Exp>;
    credentialId?: InputMaybe<String_Comparison_Exp>;
    credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    nickname?: InputMaybe<String_Comparison_Exp>;
    transports?: InputMaybe<String_Comparison_Exp>;
    user?: InputMaybe<Users_Bool_Exp>;
    userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
    /** unique or primary key constraint on columns "credential_id" */
    UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
    /** unique or primary key constraint on columns "id" */
    UserSecurityKeysPkey = 'user_security_keys_pkey',
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
    counter?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
    counter?: InputMaybe<Scalars['bigint']['input']>;
    credentialId?: InputMaybe<Scalars['String']['input']>;
    credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    nickname?: InputMaybe<Scalars['String']['input']>;
    transports?: InputMaybe<Scalars['String']['input']>;
    user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
    __typename?: 'authUserSecurityKeys_max_fields';
    counter?: Maybe<Scalars['bigint']['output']>;
    credentialId?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    nickname?: Maybe<Scalars['String']['output']>;
    transports?: Maybe<Scalars['String']['output']>;
    userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
    counter?: InputMaybe<Order_By>;
    credentialId?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    nickname?: InputMaybe<Order_By>;
    transports?: InputMaybe<Order_By>;
    userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
    __typename?: 'authUserSecurityKeys_min_fields';
    counter?: Maybe<Scalars['bigint']['output']>;
    credentialId?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    nickname?: Maybe<Scalars['String']['output']>;
    transports?: Maybe<Scalars['String']['output']>;
    userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
    counter?: InputMaybe<Order_By>;
    credentialId?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    nickname?: InputMaybe<Order_By>;
    transports?: InputMaybe<Order_By>;
    userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
    __typename?: 'authUserSecurityKeys_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
    constraint: AuthUserSecurityKeys_Constraint;
    update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
    where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
    counter?: InputMaybe<Order_By>;
    credentialId?: InputMaybe<Order_By>;
    credentialPublicKey?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    nickname?: InputMaybe<Order_By>;
    transports?: InputMaybe<Order_By>;
    user?: InputMaybe<Users_Order_By>;
    userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
    /** column name */
    Counter = 'counter',
    /** column name */
    CredentialId = 'credentialId',
    /** column name */
    CredentialPublicKey = 'credentialPublicKey',
    /** column name */
    Id = 'id',
    /** column name */
    Nickname = 'nickname',
    /** column name */
    Transports = 'transports',
    /** column name */
    UserId = 'userId',
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
    counter?: InputMaybe<Scalars['bigint']['input']>;
    credentialId?: InputMaybe<Scalars['String']['input']>;
    credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    nickname?: InputMaybe<Scalars['String']['input']>;
    transports?: InputMaybe<Scalars['String']['input']>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
    __typename?: 'authUserSecurityKeys_stddev_fields';
    counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
    counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
    __typename?: 'authUserSecurityKeys_stddev_pop_fields';
    counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
    counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
    __typename?: 'authUserSecurityKeys_stddev_samp_fields';
    counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
    counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
    counter?: InputMaybe<Scalars['bigint']['input']>;
    credentialId?: InputMaybe<Scalars['String']['input']>;
    credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    nickname?: InputMaybe<Scalars['String']['input']>;
    transports?: InputMaybe<Scalars['String']['input']>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
    __typename?: 'authUserSecurityKeys_sum_fields';
    counter?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
    counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
    /** column name */
    Counter = 'counter',
    /** column name */
    CredentialId = 'credentialId',
    /** column name */
    CredentialPublicKey = 'credentialPublicKey',
    /** column name */
    Id = 'id',
    /** column name */
    Nickname = 'nickname',
    /** column name */
    Transports = 'transports',
    /** column name */
    UserId = 'userId',
}

export type AuthUserSecurityKeys_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
    /** filter the rows which have to be updated */
    where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
    __typename?: 'authUserSecurityKeys_var_pop_fields';
    counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
    counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
    __typename?: 'authUserSecurityKeys_var_samp_fields';
    counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
    counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
    __typename?: 'authUserSecurityKeys_variance_fields';
    counter?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
    counter?: InputMaybe<Order_By>;
};

/** columns and relationships of "belt_types" */
export type Belt_Types = {
    __typename?: 'belt_types';
    created_at: Scalars['timestamptz']['output'];
    gender: Scalars['Gender']['output'];
    id: Scalars['Int']['output'];
    name: Scalars['String']['output'];
    tag_team: Scalars['Boolean']['output'];
    updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "belt_types" */
export type Belt_Types_Aggregate = {
    __typename?: 'belt_types_aggregate';
    aggregate?: Maybe<Belt_Types_Aggregate_Fields>;
    nodes: Array<Belt_Types>;
};

/** aggregate fields of "belt_types" */
export type Belt_Types_Aggregate_Fields = {
    __typename?: 'belt_types_aggregate_fields';
    avg?: Maybe<Belt_Types_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Belt_Types_Max_Fields>;
    min?: Maybe<Belt_Types_Min_Fields>;
    stddev?: Maybe<Belt_Types_Stddev_Fields>;
    stddev_pop?: Maybe<Belt_Types_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Belt_Types_Stddev_Samp_Fields>;
    sum?: Maybe<Belt_Types_Sum_Fields>;
    var_pop?: Maybe<Belt_Types_Var_Pop_Fields>;
    var_samp?: Maybe<Belt_Types_Var_Samp_Fields>;
    variance?: Maybe<Belt_Types_Variance_Fields>;
};

/** aggregate fields of "belt_types" */
export type Belt_Types_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Belt_Types_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Belt_Types_Avg_Fields = {
    __typename?: 'belt_types_avg_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "belt_types". All fields are combined with a logical 'AND'. */
export type Belt_Types_Bool_Exp = {
    _and?: InputMaybe<Array<Belt_Types_Bool_Exp>>;
    _not?: InputMaybe<Belt_Types_Bool_Exp>;
    _or?: InputMaybe<Array<Belt_Types_Bool_Exp>>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    gender?: InputMaybe<Gender_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    tag_team?: InputMaybe<Boolean_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "belt_types" */
export enum Belt_Types_Constraint {
    /** unique or primary key constraint on columns "id" */
    BeltTypesPkey = 'belt_types_pkey',
}

/** input type for incrementing numeric columns in table "belt_types" */
export type Belt_Types_Inc_Input = {
    id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "belt_types" */
export type Belt_Types_Insert_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    gender?: InputMaybe<Scalars['Gender']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    tag_team?: InputMaybe<Scalars['Boolean']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Belt_Types_Max_Fields = {
    __typename?: 'belt_types_max_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    gender?: Maybe<Scalars['Gender']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Belt_Types_Min_Fields = {
    __typename?: 'belt_types_min_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    gender?: Maybe<Scalars['Gender']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "belt_types" */
export type Belt_Types_Mutation_Response = {
    __typename?: 'belt_types_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Belt_Types>;
};

/** input type for inserting object relation for remote table "belt_types" */
export type Belt_Types_Obj_Rel_Insert_Input = {
    data: Belt_Types_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Belt_Types_On_Conflict>;
};

/** on_conflict condition type for table "belt_types" */
export type Belt_Types_On_Conflict = {
    constraint: Belt_Types_Constraint;
    update_columns?: Array<Belt_Types_Update_Column>;
    where?: InputMaybe<Belt_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "belt_types". */
export type Belt_Types_Order_By = {
    created_at?: InputMaybe<Order_By>;
    gender?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    tag_team?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: belt_types */
export type Belt_Types_Pk_Columns_Input = {
    id: Scalars['Int']['input'];
};

/** select columns of table "belt_types" */
export enum Belt_Types_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Gender = 'gender',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    TagTeam = 'tag_team',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** input type for updating data in table "belt_types" */
export type Belt_Types_Set_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    gender?: InputMaybe<Scalars['Gender']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    tag_team?: InputMaybe<Scalars['Boolean']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Belt_Types_Stddev_Fields = {
    __typename?: 'belt_types_stddev_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Belt_Types_Stddev_Pop_Fields = {
    __typename?: 'belt_types_stddev_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Belt_Types_Stddev_Samp_Fields = {
    __typename?: 'belt_types_stddev_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "belt_types" */
export type Belt_Types_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Belt_Types_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Belt_Types_Stream_Cursor_Value_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    gender?: InputMaybe<Scalars['Gender']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    tag_team?: InputMaybe<Scalars['Boolean']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Belt_Types_Sum_Fields = {
    __typename?: 'belt_types_sum_fields';
    id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "belt_types" */
export enum Belt_Types_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Gender = 'gender',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    TagTeam = 'tag_team',
    /** column name */
    UpdatedAt = 'updated_at',
}

export type Belt_Types_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Belt_Types_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Belt_Types_Set_Input>;
    /** filter the rows which have to be updated */
    where: Belt_Types_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Belt_Types_Var_Pop_Fields = {
    __typename?: 'belt_types_var_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Belt_Types_Var_Samp_Fields = {
    __typename?: 'belt_types_var_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Belt_Types_Variance_Fields = {
    __typename?: 'belt_types_variance_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['bigint']['input']>;
    _gt?: InputMaybe<Scalars['bigint']['input']>;
    _gte?: InputMaybe<Scalars['bigint']['input']>;
    _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['bigint']['input']>;
    _lte?: InputMaybe<Scalars['bigint']['input']>;
    _neq?: InputMaybe<Scalars['bigint']['input']>;
    _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "body_types" */
export type Body_Types = {
    __typename?: 'body_types';
    created_at: Scalars['timestamptz']['output'];
    id: Scalars['Int']['output'];
    max_weight: Scalars['Int']['output'];
    min_weight: Scalars['Int']['output'];
    name: Scalars['String']['output'];
    updated_at: Scalars['timestamptz']['output'];
    /** An array relationship */
    wrestlers: Array<Wrestlers>;
    /** An aggregate relationship */
    wrestlers_aggregate: Wrestlers_Aggregate;
};

/** columns and relationships of "body_types" */
export type Body_TypesWrestlersArgs = {
    distinct_on?: InputMaybe<Array<Wrestlers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Wrestlers_Order_By>>;
    where?: InputMaybe<Wrestlers_Bool_Exp>;
};

/** columns and relationships of "body_types" */
export type Body_TypesWrestlers_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Wrestlers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Wrestlers_Order_By>>;
    where?: InputMaybe<Wrestlers_Bool_Exp>;
};

/** aggregated selection of "body_types" */
export type Body_Types_Aggregate = {
    __typename?: 'body_types_aggregate';
    aggregate?: Maybe<Body_Types_Aggregate_Fields>;
    nodes: Array<Body_Types>;
};

/** aggregate fields of "body_types" */
export type Body_Types_Aggregate_Fields = {
    __typename?: 'body_types_aggregate_fields';
    avg?: Maybe<Body_Types_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Body_Types_Max_Fields>;
    min?: Maybe<Body_Types_Min_Fields>;
    stddev?: Maybe<Body_Types_Stddev_Fields>;
    stddev_pop?: Maybe<Body_Types_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Body_Types_Stddev_Samp_Fields>;
    sum?: Maybe<Body_Types_Sum_Fields>;
    var_pop?: Maybe<Body_Types_Var_Pop_Fields>;
    var_samp?: Maybe<Body_Types_Var_Samp_Fields>;
    variance?: Maybe<Body_Types_Variance_Fields>;
};

/** aggregate fields of "body_types" */
export type Body_Types_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Body_Types_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Body_Types_Avg_Fields = {
    __typename?: 'body_types_avg_fields';
    id?: Maybe<Scalars['Float']['output']>;
    max_weight?: Maybe<Scalars['Float']['output']>;
    min_weight?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "body_types". All fields are combined with a logical 'AND'. */
export type Body_Types_Bool_Exp = {
    _and?: InputMaybe<Array<Body_Types_Bool_Exp>>;
    _not?: InputMaybe<Body_Types_Bool_Exp>;
    _or?: InputMaybe<Array<Body_Types_Bool_Exp>>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    max_weight?: InputMaybe<Int_Comparison_Exp>;
    min_weight?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    wrestlers?: InputMaybe<Wrestlers_Bool_Exp>;
    wrestlers_aggregate?: InputMaybe<Wrestlers_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "body_types" */
export enum Body_Types_Constraint {
    /** unique or primary key constraint on columns "id" */
    BodyTypesPkey = 'body_types_pkey',
}

/** input type for incrementing numeric columns in table "body_types" */
export type Body_Types_Inc_Input = {
    id?: InputMaybe<Scalars['Int']['input']>;
    max_weight?: InputMaybe<Scalars['Int']['input']>;
    min_weight?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "body_types" */
export type Body_Types_Insert_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    max_weight?: InputMaybe<Scalars['Int']['input']>;
    min_weight?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    wrestlers?: InputMaybe<Wrestlers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Body_Types_Max_Fields = {
    __typename?: 'body_types_max_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    max_weight?: Maybe<Scalars['Int']['output']>;
    min_weight?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Body_Types_Min_Fields = {
    __typename?: 'body_types_min_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    max_weight?: Maybe<Scalars['Int']['output']>;
    min_weight?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "body_types" */
export type Body_Types_Mutation_Response = {
    __typename?: 'body_types_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Body_Types>;
};

/** input type for inserting object relation for remote table "body_types" */
export type Body_Types_Obj_Rel_Insert_Input = {
    data: Body_Types_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Body_Types_On_Conflict>;
};

/** on_conflict condition type for table "body_types" */
export type Body_Types_On_Conflict = {
    constraint: Body_Types_Constraint;
    update_columns?: Array<Body_Types_Update_Column>;
    where?: InputMaybe<Body_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "body_types". */
export type Body_Types_Order_By = {
    created_at?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    max_weight?: InputMaybe<Order_By>;
    min_weight?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    wrestlers_aggregate?: InputMaybe<Wrestlers_Aggregate_Order_By>;
};

/** primary key columns input for table: body_types */
export type Body_Types_Pk_Columns_Input = {
    id: Scalars['Int']['input'];
};

/** select columns of table "body_types" */
export enum Body_Types_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Id = 'id',
    /** column name */
    MaxWeight = 'max_weight',
    /** column name */
    MinWeight = 'min_weight',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** input type for updating data in table "body_types" */
export type Body_Types_Set_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    max_weight?: InputMaybe<Scalars['Int']['input']>;
    min_weight?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Body_Types_Stddev_Fields = {
    __typename?: 'body_types_stddev_fields';
    id?: Maybe<Scalars['Float']['output']>;
    max_weight?: Maybe<Scalars['Float']['output']>;
    min_weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Body_Types_Stddev_Pop_Fields = {
    __typename?: 'body_types_stddev_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
    max_weight?: Maybe<Scalars['Float']['output']>;
    min_weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Body_Types_Stddev_Samp_Fields = {
    __typename?: 'body_types_stddev_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
    max_weight?: Maybe<Scalars['Float']['output']>;
    min_weight?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "body_types" */
export type Body_Types_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Body_Types_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Body_Types_Stream_Cursor_Value_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    max_weight?: InputMaybe<Scalars['Int']['input']>;
    min_weight?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Body_Types_Sum_Fields = {
    __typename?: 'body_types_sum_fields';
    id?: Maybe<Scalars['Int']['output']>;
    max_weight?: Maybe<Scalars['Int']['output']>;
    min_weight?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "body_types" */
export enum Body_Types_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Id = 'id',
    /** column name */
    MaxWeight = 'max_weight',
    /** column name */
    MinWeight = 'min_weight',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
}

export type Body_Types_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Body_Types_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Body_Types_Set_Input>;
    /** filter the rows which have to be updated */
    where: Body_Types_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Body_Types_Var_Pop_Fields = {
    __typename?: 'body_types_var_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
    max_weight?: Maybe<Scalars['Float']['output']>;
    min_weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Body_Types_Var_Samp_Fields = {
    __typename?: 'body_types_var_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
    max_weight?: Maybe<Scalars['Float']['output']>;
    min_weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Body_Types_Variance_Fields = {
    __typename?: 'body_types_variance_fields';
    id?: Maybe<Scalars['Float']['output']>;
    max_weight?: Maybe<Scalars['Float']['output']>;
    min_weight?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "brands" */
export type Brands = {
    __typename?: 'brands';
    active: Scalars['Boolean']['output'];
    color: Scalars['String']['output'];
    created_at: Scalars['timestamptz']['output'];
    /** An array relationship */
    events: Array<Events>;
    /** An aggregate relationship */
    events_aggregate: Events_Aggregate;
    icon?: Maybe<Scalars['String']['output']>;
    id: Scalars['Int']['output'];
    name: Scalars['String']['output'];
    /** An object relationship */
    promotion: Promotions;
    promotion_id: Scalars['Int']['output'];
    updated_at: Scalars['timestamptz']['output'];
    /** An array relationship */
    wrestlers: Array<Wrestlers>;
    /** An aggregate relationship */
    wrestlers_aggregate: Wrestlers_Aggregate;
};

/** columns and relationships of "brands" */
export type BrandsEventsArgs = {
    distinct_on?: InputMaybe<Array<Events_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Events_Order_By>>;
    where?: InputMaybe<Events_Bool_Exp>;
};

/** columns and relationships of "brands" */
export type BrandsEvents_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Events_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Events_Order_By>>;
    where?: InputMaybe<Events_Bool_Exp>;
};

/** columns and relationships of "brands" */
export type BrandsWrestlersArgs = {
    distinct_on?: InputMaybe<Array<Wrestlers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Wrestlers_Order_By>>;
    where?: InputMaybe<Wrestlers_Bool_Exp>;
};

/** columns and relationships of "brands" */
export type BrandsWrestlers_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Wrestlers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Wrestlers_Order_By>>;
    where?: InputMaybe<Wrestlers_Bool_Exp>;
};

/** aggregated selection of "brands" */
export type Brands_Aggregate = {
    __typename?: 'brands_aggregate';
    aggregate?: Maybe<Brands_Aggregate_Fields>;
    nodes: Array<Brands>;
};

export type Brands_Aggregate_Bool_Exp = {
    bool_and?: InputMaybe<Brands_Aggregate_Bool_Exp_Bool_And>;
    bool_or?: InputMaybe<Brands_Aggregate_Bool_Exp_Bool_Or>;
    count?: InputMaybe<Brands_Aggregate_Bool_Exp_Count>;
};

export type Brands_Aggregate_Bool_Exp_Bool_And = {
    arguments: Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Brands_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};

export type Brands_Aggregate_Bool_Exp_Bool_Or = {
    arguments: Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Brands_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};

export type Brands_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Brands_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Brands_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "brands" */
export type Brands_Aggregate_Fields = {
    __typename?: 'brands_aggregate_fields';
    avg?: Maybe<Brands_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Brands_Max_Fields>;
    min?: Maybe<Brands_Min_Fields>;
    stddev?: Maybe<Brands_Stddev_Fields>;
    stddev_pop?: Maybe<Brands_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Brands_Stddev_Samp_Fields>;
    sum?: Maybe<Brands_Sum_Fields>;
    var_pop?: Maybe<Brands_Var_Pop_Fields>;
    var_samp?: Maybe<Brands_Var_Samp_Fields>;
    variance?: Maybe<Brands_Variance_Fields>;
};

/** aggregate fields of "brands" */
export type Brands_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Brands_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "brands" */
export type Brands_Aggregate_Order_By = {
    avg?: InputMaybe<Brands_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Brands_Max_Order_By>;
    min?: InputMaybe<Brands_Min_Order_By>;
    stddev?: InputMaybe<Brands_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Brands_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Brands_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Brands_Sum_Order_By>;
    var_pop?: InputMaybe<Brands_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Brands_Var_Samp_Order_By>;
    variance?: InputMaybe<Brands_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "brands" */
export type Brands_Arr_Rel_Insert_Input = {
    data: Array<Brands_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Brands_On_Conflict>;
};

/** aggregate avg on columns */
export type Brands_Avg_Fields = {
    __typename?: 'brands_avg_fields';
    id?: Maybe<Scalars['Float']['output']>;
    promotion_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "brands" */
export type Brands_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    promotion_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "brands". All fields are combined with a logical 'AND'. */
export type Brands_Bool_Exp = {
    _and?: InputMaybe<Array<Brands_Bool_Exp>>;
    _not?: InputMaybe<Brands_Bool_Exp>;
    _or?: InputMaybe<Array<Brands_Bool_Exp>>;
    active?: InputMaybe<Boolean_Comparison_Exp>;
    color?: InputMaybe<String_Comparison_Exp>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    events?: InputMaybe<Events_Bool_Exp>;
    events_aggregate?: InputMaybe<Events_Aggregate_Bool_Exp>;
    icon?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    promotion?: InputMaybe<Promotions_Bool_Exp>;
    promotion_id?: InputMaybe<Int_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    wrestlers?: InputMaybe<Wrestlers_Bool_Exp>;
    wrestlers_aggregate?: InputMaybe<Wrestlers_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "brands" */
export enum Brands_Constraint {
    /** unique or primary key constraint on columns "id" */
    BrandsPkey = 'brands_pkey',
}

/** input type for incrementing numeric columns in table "brands" */
export type Brands_Inc_Input = {
    id?: InputMaybe<Scalars['Int']['input']>;
    promotion_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "brands" */
export type Brands_Insert_Input = {
    active?: InputMaybe<Scalars['Boolean']['input']>;
    color?: InputMaybe<Scalars['String']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    events?: InputMaybe<Events_Arr_Rel_Insert_Input>;
    icon?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    promotion?: InputMaybe<Promotions_Obj_Rel_Insert_Input>;
    promotion_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    wrestlers?: InputMaybe<Wrestlers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Brands_Max_Fields = {
    __typename?: 'brands_max_fields';
    color?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    icon?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    promotion_id?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "brands" */
export type Brands_Max_Order_By = {
    color?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    icon?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    promotion_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Brands_Min_Fields = {
    __typename?: 'brands_min_fields';
    color?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    icon?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    promotion_id?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "brands" */
export type Brands_Min_Order_By = {
    color?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    icon?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    promotion_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "brands" */
export type Brands_Mutation_Response = {
    __typename?: 'brands_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Brands>;
};

/** input type for inserting object relation for remote table "brands" */
export type Brands_Obj_Rel_Insert_Input = {
    data: Brands_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Brands_On_Conflict>;
};

/** on_conflict condition type for table "brands" */
export type Brands_On_Conflict = {
    constraint: Brands_Constraint;
    update_columns?: Array<Brands_Update_Column>;
    where?: InputMaybe<Brands_Bool_Exp>;
};

/** Ordering options when selecting data from "brands". */
export type Brands_Order_By = {
    active?: InputMaybe<Order_By>;
    color?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    events_aggregate?: InputMaybe<Events_Aggregate_Order_By>;
    icon?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    promotion?: InputMaybe<Promotions_Order_By>;
    promotion_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    wrestlers_aggregate?: InputMaybe<Wrestlers_Aggregate_Order_By>;
};

/** primary key columns input for table: brands */
export type Brands_Pk_Columns_Input = {
    id: Scalars['Int']['input'];
};

/** select columns of table "brands" */
export enum Brands_Select_Column {
    /** column name */
    Active = 'active',
    /** column name */
    Color = 'color',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Icon = 'icon',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    PromotionId = 'promotion_id',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** select "brands_aggregate_bool_exp_bool_and_arguments_columns" columns of table "brands" */
export enum Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
    /** column name */
    Active = 'active',
}

/** select "brands_aggregate_bool_exp_bool_or_arguments_columns" columns of table "brands" */
export enum Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
    /** column name */
    Active = 'active',
}

/** input type for updating data in table "brands" */
export type Brands_Set_Input = {
    active?: InputMaybe<Scalars['Boolean']['input']>;
    color?: InputMaybe<Scalars['String']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    promotion_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Brands_Stddev_Fields = {
    __typename?: 'brands_stddev_fields';
    id?: Maybe<Scalars['Float']['output']>;
    promotion_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "brands" */
export type Brands_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    promotion_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Brands_Stddev_Pop_Fields = {
    __typename?: 'brands_stddev_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
    promotion_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "brands" */
export type Brands_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    promotion_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Brands_Stddev_Samp_Fields = {
    __typename?: 'brands_stddev_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
    promotion_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "brands" */
export type Brands_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    promotion_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "brands" */
export type Brands_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Brands_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Brands_Stream_Cursor_Value_Input = {
    active?: InputMaybe<Scalars['Boolean']['input']>;
    color?: InputMaybe<Scalars['String']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    promotion_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Brands_Sum_Fields = {
    __typename?: 'brands_sum_fields';
    id?: Maybe<Scalars['Int']['output']>;
    promotion_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "brands" */
export type Brands_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    promotion_id?: InputMaybe<Order_By>;
};

/** update columns of table "brands" */
export enum Brands_Update_Column {
    /** column name */
    Active = 'active',
    /** column name */
    Color = 'color',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Icon = 'icon',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    PromotionId = 'promotion_id',
    /** column name */
    UpdatedAt = 'updated_at',
}

export type Brands_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Brands_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Brands_Set_Input>;
    /** filter the rows which have to be updated */
    where: Brands_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Brands_Var_Pop_Fields = {
    __typename?: 'brands_var_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
    promotion_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "brands" */
export type Brands_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    promotion_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Brands_Var_Samp_Fields = {
    __typename?: 'brands_var_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
    promotion_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "brands" */
export type Brands_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    promotion_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Brands_Variance_Fields = {
    __typename?: 'brands_variance_fields';
    id?: Maybe<Scalars['Float']['output']>;
    promotion_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "brands" */
export type Brands_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    promotion_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
    __typename?: 'buckets';
    cacheControl?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['timestamptz']['output'];
    downloadExpiration: Scalars['Int']['output'];
    /** An array relationship */
    files: Array<Files>;
    /** An aggregate relationship */
    files_aggregate: Files_Aggregate;
    id: Scalars['String']['output'];
    maxUploadFileSize: Scalars['Int']['output'];
    minUploadFileSize: Scalars['Int']['output'];
    presignedUrlsEnabled: Scalars['Boolean']['output'];
    updatedAt: Scalars['timestamptz']['output'];
};

/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
    distinct_on?: InputMaybe<Array<Files_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Files_Order_By>>;
    where?: InputMaybe<Files_Bool_Exp>;
};

/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Files_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Files_Order_By>>;
    where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
    __typename?: 'buckets_aggregate';
    aggregate?: Maybe<Buckets_Aggregate_Fields>;
    nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
    __typename?: 'buckets_aggregate_fields';
    avg?: Maybe<Buckets_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Buckets_Max_Fields>;
    min?: Maybe<Buckets_Min_Fields>;
    stddev?: Maybe<Buckets_Stddev_Fields>;
    stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
    sum?: Maybe<Buckets_Sum_Fields>;
    var_pop?: Maybe<Buckets_Var_Pop_Fields>;
    var_samp?: Maybe<Buckets_Var_Samp_Fields>;
    variance?: Maybe<Buckets_Variance_Fields>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Buckets_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
    __typename?: 'buckets_avg_fields';
    downloadExpiration?: Maybe<Scalars['Float']['output']>;
    maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
    minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
    _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
    _not?: InputMaybe<Buckets_Bool_Exp>;
    _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
    cacheControl?: InputMaybe<String_Comparison_Exp>;
    createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
    files?: InputMaybe<Files_Bool_Exp>;
    files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
    id?: InputMaybe<String_Comparison_Exp>;
    maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
    minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
    presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
    updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
    /** unique or primary key constraint on columns "id" */
    BucketsPkey = 'buckets_pkey',
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
    downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
    maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
    minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
    cacheControl?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
    files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
    id?: InputMaybe<Scalars['String']['input']>;
    maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
    minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
    presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
    __typename?: 'buckets_max_fields';
    cacheControl?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    downloadExpiration?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
    minUploadFileSize?: Maybe<Scalars['Int']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
    __typename?: 'buckets_min_fields';
    cacheControl?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    downloadExpiration?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
    minUploadFileSize?: Maybe<Scalars['Int']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
    __typename?: 'buckets_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
    data: Buckets_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
    constraint: Buckets_Constraint;
    update_columns?: Array<Buckets_Update_Column>;
    where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
    cacheControl?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    downloadExpiration?: InputMaybe<Order_By>;
    files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
    id?: InputMaybe<Order_By>;
    maxUploadFileSize?: InputMaybe<Order_By>;
    minUploadFileSize?: InputMaybe<Order_By>;
    presignedUrlsEnabled?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
    id: Scalars['String']['input'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
    /** column name */
    CacheControl = 'cacheControl',
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    DownloadExpiration = 'downloadExpiration',
    /** column name */
    Id = 'id',
    /** column name */
    MaxUploadFileSize = 'maxUploadFileSize',
    /** column name */
    MinUploadFileSize = 'minUploadFileSize',
    /** column name */
    PresignedUrlsEnabled = 'presignedUrlsEnabled',
    /** column name */
    UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
    cacheControl?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
    minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
    presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
    __typename?: 'buckets_stddev_fields';
    downloadExpiration?: Maybe<Scalars['Float']['output']>;
    maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
    minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
    __typename?: 'buckets_stddev_pop_fields';
    downloadExpiration?: Maybe<Scalars['Float']['output']>;
    maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
    minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
    __typename?: 'buckets_stddev_samp_fields';
    downloadExpiration?: Maybe<Scalars['Float']['output']>;
    maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
    minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Buckets_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
    cacheControl?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
    minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
    presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
    __typename?: 'buckets_sum_fields';
    downloadExpiration?: Maybe<Scalars['Int']['output']>;
    maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
    minUploadFileSize?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
    /** column name */
    CacheControl = 'cacheControl',
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    DownloadExpiration = 'downloadExpiration',
    /** column name */
    Id = 'id',
    /** column name */
    MaxUploadFileSize = 'maxUploadFileSize',
    /** column name */
    MinUploadFileSize = 'minUploadFileSize',
    /** column name */
    PresignedUrlsEnabled = 'presignedUrlsEnabled',
    /** column name */
    UpdatedAt = 'updatedAt',
}

export type Buckets_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Buckets_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Buckets_Set_Input>;
    /** filter the rows which have to be updated */
    where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
    __typename?: 'buckets_var_pop_fields';
    downloadExpiration?: Maybe<Scalars['Float']['output']>;
    maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
    minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
    __typename?: 'buckets_var_samp_fields';
    downloadExpiration?: Maybe<Scalars['Float']['output']>;
    maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
    minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
    __typename?: 'buckets_variance_fields';
    downloadExpiration?: Maybe<Scalars['Float']['output']>;
    maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
    minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['bytea']['input']>;
    _gt?: InputMaybe<Scalars['bytea']['input']>;
    _gte?: InputMaybe<Scalars['bytea']['input']>;
    _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['bytea']['input']>;
    _lte?: InputMaybe<Scalars['bytea']['input']>;
    _neq?: InputMaybe<Scalars['bytea']['input']>;
    _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** columns and relationships of "champions" */
export type Champions = {
    __typename?: 'champions';
    /** An object relationship */
    championship: Championships;
    championship_id: Scalars['Int']['output'];
    created_at: Scalars['timestamptz']['output'];
    event_count: Scalars['Int']['output'];
    updated_at: Scalars['timestamptz']['output'];
    /** An object relationship */
    wrestler: Wrestlers;
    wrestler_id: Scalars['Int']['output'];
};

/** aggregated selection of "champions" */
export type Champions_Aggregate = {
    __typename?: 'champions_aggregate';
    aggregate?: Maybe<Champions_Aggregate_Fields>;
    nodes: Array<Champions>;
};

export type Champions_Aggregate_Bool_Exp = {
    count?: InputMaybe<Champions_Aggregate_Bool_Exp_Count>;
};

export type Champions_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Champions_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Champions_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "champions" */
export type Champions_Aggregate_Fields = {
    __typename?: 'champions_aggregate_fields';
    avg?: Maybe<Champions_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Champions_Max_Fields>;
    min?: Maybe<Champions_Min_Fields>;
    stddev?: Maybe<Champions_Stddev_Fields>;
    stddev_pop?: Maybe<Champions_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Champions_Stddev_Samp_Fields>;
    sum?: Maybe<Champions_Sum_Fields>;
    var_pop?: Maybe<Champions_Var_Pop_Fields>;
    var_samp?: Maybe<Champions_Var_Samp_Fields>;
    variance?: Maybe<Champions_Variance_Fields>;
};

/** aggregate fields of "champions" */
export type Champions_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Champions_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "champions" */
export type Champions_Aggregate_Order_By = {
    avg?: InputMaybe<Champions_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Champions_Max_Order_By>;
    min?: InputMaybe<Champions_Min_Order_By>;
    stddev?: InputMaybe<Champions_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Champions_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Champions_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Champions_Sum_Order_By>;
    var_pop?: InputMaybe<Champions_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Champions_Var_Samp_Order_By>;
    variance?: InputMaybe<Champions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "champions" */
export type Champions_Arr_Rel_Insert_Input = {
    data: Array<Champions_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Champions_On_Conflict>;
};

/** aggregate avg on columns */
export type Champions_Avg_Fields = {
    __typename?: 'champions_avg_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_count?: Maybe<Scalars['Float']['output']>;
    wrestler_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "champions" */
export type Champions_Avg_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_count?: InputMaybe<Order_By>;
    wrestler_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "champions". All fields are combined with a logical 'AND'. */
export type Champions_Bool_Exp = {
    _and?: InputMaybe<Array<Champions_Bool_Exp>>;
    _not?: InputMaybe<Champions_Bool_Exp>;
    _or?: InputMaybe<Array<Champions_Bool_Exp>>;
    championship?: InputMaybe<Championships_Bool_Exp>;
    championship_id?: InputMaybe<Int_Comparison_Exp>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    event_count?: InputMaybe<Int_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    wrestler?: InputMaybe<Wrestlers_Bool_Exp>;
    wrestler_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "champions" */
export enum Champions_Constraint {
    /** unique or primary key constraint on columns "wrestler_id", "championship_id" */
    ChampionsPkey = 'champions_pkey',
}

/** input type for incrementing numeric columns in table "champions" */
export type Champions_Inc_Input = {
    championship_id?: InputMaybe<Scalars['Int']['input']>;
    event_count?: InputMaybe<Scalars['Int']['input']>;
    wrestler_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "champions" */
export type Champions_Insert_Input = {
    championship?: InputMaybe<Championships_Obj_Rel_Insert_Input>;
    championship_id?: InputMaybe<Scalars['Int']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    event_count?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    wrestler?: InputMaybe<Wrestlers_Obj_Rel_Insert_Input>;
    wrestler_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Champions_Max_Fields = {
    __typename?: 'champions_max_fields';
    championship_id?: Maybe<Scalars['Int']['output']>;
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    event_count?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
    wrestler_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "champions" */
export type Champions_Max_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    event_count?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    wrestler_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Champions_Min_Fields = {
    __typename?: 'champions_min_fields';
    championship_id?: Maybe<Scalars['Int']['output']>;
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    event_count?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
    wrestler_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "champions" */
export type Champions_Min_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    event_count?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    wrestler_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "champions" */
export type Champions_Mutation_Response = {
    __typename?: 'champions_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Champions>;
};

/** on_conflict condition type for table "champions" */
export type Champions_On_Conflict = {
    constraint: Champions_Constraint;
    update_columns?: Array<Champions_Update_Column>;
    where?: InputMaybe<Champions_Bool_Exp>;
};

/** Ordering options when selecting data from "champions". */
export type Champions_Order_By = {
    championship?: InputMaybe<Championships_Order_By>;
    championship_id?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    event_count?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    wrestler?: InputMaybe<Wrestlers_Order_By>;
    wrestler_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: champions */
export type Champions_Pk_Columns_Input = {
    championship_id: Scalars['Int']['input'];
    wrestler_id: Scalars['Int']['input'];
};

/** select columns of table "champions" */
export enum Champions_Select_Column {
    /** column name */
    ChampionshipId = 'championship_id',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    EventCount = 'event_count',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    WrestlerId = 'wrestler_id',
}

/** input type for updating data in table "champions" */
export type Champions_Set_Input = {
    championship_id?: InputMaybe<Scalars['Int']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    event_count?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    wrestler_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Champions_Stddev_Fields = {
    __typename?: 'champions_stddev_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_count?: Maybe<Scalars['Float']['output']>;
    wrestler_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "champions" */
export type Champions_Stddev_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_count?: InputMaybe<Order_By>;
    wrestler_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Champions_Stddev_Pop_Fields = {
    __typename?: 'champions_stddev_pop_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_count?: Maybe<Scalars['Float']['output']>;
    wrestler_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "champions" */
export type Champions_Stddev_Pop_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_count?: InputMaybe<Order_By>;
    wrestler_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Champions_Stddev_Samp_Fields = {
    __typename?: 'champions_stddev_samp_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_count?: Maybe<Scalars['Float']['output']>;
    wrestler_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "champions" */
export type Champions_Stddev_Samp_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_count?: InputMaybe<Order_By>;
    wrestler_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "champions" */
export type Champions_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Champions_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Champions_Stream_Cursor_Value_Input = {
    championship_id?: InputMaybe<Scalars['Int']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    event_count?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    wrestler_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Champions_Sum_Fields = {
    __typename?: 'champions_sum_fields';
    championship_id?: Maybe<Scalars['Int']['output']>;
    event_count?: Maybe<Scalars['Int']['output']>;
    wrestler_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "champions" */
export type Champions_Sum_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_count?: InputMaybe<Order_By>;
    wrestler_id?: InputMaybe<Order_By>;
};

/** update columns of table "champions" */
export enum Champions_Update_Column {
    /** column name */
    ChampionshipId = 'championship_id',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    EventCount = 'event_count',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    WrestlerId = 'wrestler_id',
}

export type Champions_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Champions_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Champions_Set_Input>;
    /** filter the rows which have to be updated */
    where: Champions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Champions_Var_Pop_Fields = {
    __typename?: 'champions_var_pop_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_count?: Maybe<Scalars['Float']['output']>;
    wrestler_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "champions" */
export type Champions_Var_Pop_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_count?: InputMaybe<Order_By>;
    wrestler_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Champions_Var_Samp_Fields = {
    __typename?: 'champions_var_samp_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_count?: Maybe<Scalars['Float']['output']>;
    wrestler_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "champions" */
export type Champions_Var_Samp_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_count?: InputMaybe<Order_By>;
    wrestler_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Champions_Variance_Fields = {
    __typename?: 'champions_variance_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_count?: Maybe<Scalars['Float']['output']>;
    wrestler_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "champions" */
export type Champions_Variance_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_count?: InputMaybe<Order_By>;
    wrestler_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "championships" */
export type Championships = {
    __typename?: 'championships';
    active: Scalars['Boolean']['output'];
    /** An object relationship */
    belt_type: Belt_Types;
    created_at: Scalars['timestamptz']['output'];
    current_belt_type_id: Scalars['Int']['output'];
    /** An array relationship */
    current_champions: Array<Champions>;
    /** An aggregate relationship */
    current_champions_aggregate: Champions_Aggregate;
    id: Scalars['Int']['output'];
    image?: Maybe<Scalars['String']['output']>;
    /** An array relationship */
    matches: Array<Matches>;
    /** An aggregate relationship */
    matches_aggregate: Matches_Aggregate;
    name: Scalars['String']['output'];
    updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "championships" */
export type ChampionshipsCurrent_ChampionsArgs = {
    distinct_on?: InputMaybe<Array<Champions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Champions_Order_By>>;
    where?: InputMaybe<Champions_Bool_Exp>;
};

/** columns and relationships of "championships" */
export type ChampionshipsCurrent_Champions_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Champions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Champions_Order_By>>;
    where?: InputMaybe<Champions_Bool_Exp>;
};

/** columns and relationships of "championships" */
export type ChampionshipsMatchesArgs = {
    distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Matches_Order_By>>;
    where?: InputMaybe<Matches_Bool_Exp>;
};

/** columns and relationships of "championships" */
export type ChampionshipsMatches_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Matches_Order_By>>;
    where?: InputMaybe<Matches_Bool_Exp>;
};

/** aggregated selection of "championships" */
export type Championships_Aggregate = {
    __typename?: 'championships_aggregate';
    aggregate?: Maybe<Championships_Aggregate_Fields>;
    nodes: Array<Championships>;
};

/** aggregate fields of "championships" */
export type Championships_Aggregate_Fields = {
    __typename?: 'championships_aggregate_fields';
    avg?: Maybe<Championships_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Championships_Max_Fields>;
    min?: Maybe<Championships_Min_Fields>;
    stddev?: Maybe<Championships_Stddev_Fields>;
    stddev_pop?: Maybe<Championships_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Championships_Stddev_Samp_Fields>;
    sum?: Maybe<Championships_Sum_Fields>;
    var_pop?: Maybe<Championships_Var_Pop_Fields>;
    var_samp?: Maybe<Championships_Var_Samp_Fields>;
    variance?: Maybe<Championships_Variance_Fields>;
};

/** aggregate fields of "championships" */
export type Championships_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Championships_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Championships_Avg_Fields = {
    __typename?: 'championships_avg_fields';
    current_belt_type_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "championships". All fields are combined with a logical 'AND'. */
export type Championships_Bool_Exp = {
    _and?: InputMaybe<Array<Championships_Bool_Exp>>;
    _not?: InputMaybe<Championships_Bool_Exp>;
    _or?: InputMaybe<Array<Championships_Bool_Exp>>;
    active?: InputMaybe<Boolean_Comparison_Exp>;
    belt_type?: InputMaybe<Belt_Types_Bool_Exp>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    current_belt_type_id?: InputMaybe<Int_Comparison_Exp>;
    current_champions?: InputMaybe<Champions_Bool_Exp>;
    current_champions_aggregate?: InputMaybe<Champions_Aggregate_Bool_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    image?: InputMaybe<String_Comparison_Exp>;
    matches?: InputMaybe<Matches_Bool_Exp>;
    matches_aggregate?: InputMaybe<Matches_Aggregate_Bool_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "championships" */
export enum Championships_Constraint {
    /** unique or primary key constraint on columns "id" */
    ChampionshipsPkey = 'championships_pkey',
}

/** input type for incrementing numeric columns in table "championships" */
export type Championships_Inc_Input = {
    current_belt_type_id?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "championships" */
export type Championships_Insert_Input = {
    active?: InputMaybe<Scalars['Boolean']['input']>;
    belt_type?: InputMaybe<Belt_Types_Obj_Rel_Insert_Input>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    current_belt_type_id?: InputMaybe<Scalars['Int']['input']>;
    current_champions?: InputMaybe<Champions_Arr_Rel_Insert_Input>;
    id?: InputMaybe<Scalars['Int']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    matches?: InputMaybe<Matches_Arr_Rel_Insert_Input>;
    name?: InputMaybe<Scalars['String']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Championships_Max_Fields = {
    __typename?: 'championships_max_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    current_belt_type_id?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    image?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Championships_Min_Fields = {
    __typename?: 'championships_min_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    current_belt_type_id?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    image?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "championships" */
export type Championships_Mutation_Response = {
    __typename?: 'championships_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Championships>;
};

/** input type for inserting object relation for remote table "championships" */
export type Championships_Obj_Rel_Insert_Input = {
    data: Championships_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Championships_On_Conflict>;
};

/** on_conflict condition type for table "championships" */
export type Championships_On_Conflict = {
    constraint: Championships_Constraint;
    update_columns?: Array<Championships_Update_Column>;
    where?: InputMaybe<Championships_Bool_Exp>;
};

/** Ordering options when selecting data from "championships". */
export type Championships_Order_By = {
    active?: InputMaybe<Order_By>;
    belt_type?: InputMaybe<Belt_Types_Order_By>;
    created_at?: InputMaybe<Order_By>;
    current_belt_type_id?: InputMaybe<Order_By>;
    current_champions_aggregate?: InputMaybe<Champions_Aggregate_Order_By>;
    id?: InputMaybe<Order_By>;
    image?: InputMaybe<Order_By>;
    matches_aggregate?: InputMaybe<Matches_Aggregate_Order_By>;
    name?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: championships */
export type Championships_Pk_Columns_Input = {
    id: Scalars['Int']['input'];
};

/** select columns of table "championships" */
export enum Championships_Select_Column {
    /** column name */
    Active = 'active',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    CurrentBeltTypeId = 'current_belt_type_id',
    /** column name */
    Id = 'id',
    /** column name */
    Image = 'image',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** input type for updating data in table "championships" */
export type Championships_Set_Input = {
    active?: InputMaybe<Scalars['Boolean']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    current_belt_type_id?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Championships_Stddev_Fields = {
    __typename?: 'championships_stddev_fields';
    current_belt_type_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Championships_Stddev_Pop_Fields = {
    __typename?: 'championships_stddev_pop_fields';
    current_belt_type_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Championships_Stddev_Samp_Fields = {
    __typename?: 'championships_stddev_samp_fields';
    current_belt_type_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "championships" */
export type Championships_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Championships_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Championships_Stream_Cursor_Value_Input = {
    active?: InputMaybe<Scalars['Boolean']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    current_belt_type_id?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Championships_Sum_Fields = {
    __typename?: 'championships_sum_fields';
    current_belt_type_id?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "championships" */
export enum Championships_Update_Column {
    /** column name */
    Active = 'active',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    CurrentBeltTypeId = 'current_belt_type_id',
    /** column name */
    Id = 'id',
    /** column name */
    Image = 'image',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
}

export type Championships_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Championships_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Championships_Set_Input>;
    /** filter the rows which have to be updated */
    where: Championships_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Championships_Var_Pop_Fields = {
    __typename?: 'championships_var_pop_fields';
    current_belt_type_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Championships_Var_Samp_Fields = {
    __typename?: 'championships_var_samp_fields';
    current_belt_type_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Championships_Variance_Fields = {
    __typename?: 'championships_variance_fields';
    current_belt_type_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['citext']['input']>;
    _gt?: InputMaybe<Scalars['citext']['input']>;
    _gte?: InputMaybe<Scalars['citext']['input']>;
    /** does the column match the given case-insensitive pattern */
    _ilike?: InputMaybe<Scalars['citext']['input']>;
    _in?: InputMaybe<Array<Scalars['citext']['input']>>;
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: InputMaybe<Scalars['citext']['input']>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    /** does the column match the given pattern */
    _like?: InputMaybe<Scalars['citext']['input']>;
    _lt?: InputMaybe<Scalars['citext']['input']>;
    _lte?: InputMaybe<Scalars['citext']['input']>;
    _neq?: InputMaybe<Scalars['citext']['input']>;
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: InputMaybe<Scalars['citext']['input']>;
    _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: InputMaybe<Scalars['citext']['input']>;
    /** does the column NOT match the given pattern */
    _nlike?: InputMaybe<Scalars['citext']['input']>;
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: InputMaybe<Scalars['citext']['input']>;
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: InputMaybe<Scalars['citext']['input']>;
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: InputMaybe<Scalars['citext']['input']>;
    /** does the column match the given SQL regular expression */
    _similar?: InputMaybe<Scalars['citext']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
    /** ascending ordering of the cursor */
    Asc = 'ASC',
    /** descending ordering of the cursor */
    Desc = 'DESC',
}

/** columns and relationships of "events" */
export type Events = {
    __typename?: 'events';
    /** An object relationship */
    brand?: Maybe<Brands>;
    brand_id?: Maybe<Scalars['Int']['output']>;
    created_at: Scalars['timestamptz']['output'];
    id: Scalars['Int']['output'];
    /** An array relationship */
    matches: Array<Matches>;
    /** An aggregate relationship */
    matches_aggregate: Matches_Aggregate;
    name: Scalars['String']['output'];
    ppv: Scalars['Boolean']['output'];
    updated_at: Scalars['timestamptz']['output'];
    year: Scalars['Int']['output'];
};

/** columns and relationships of "events" */
export type EventsMatchesArgs = {
    distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Matches_Order_By>>;
    where?: InputMaybe<Matches_Bool_Exp>;
};

/** columns and relationships of "events" */
export type EventsMatches_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Matches_Order_By>>;
    where?: InputMaybe<Matches_Bool_Exp>;
};

/** aggregated selection of "events" */
export type Events_Aggregate = {
    __typename?: 'events_aggregate';
    aggregate?: Maybe<Events_Aggregate_Fields>;
    nodes: Array<Events>;
};

export type Events_Aggregate_Bool_Exp = {
    bool_and?: InputMaybe<Events_Aggregate_Bool_Exp_Bool_And>;
    bool_or?: InputMaybe<Events_Aggregate_Bool_Exp_Bool_Or>;
    count?: InputMaybe<Events_Aggregate_Bool_Exp_Count>;
};

export type Events_Aggregate_Bool_Exp_Bool_And = {
    arguments: Events_Select_Column_Events_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Events_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};

export type Events_Aggregate_Bool_Exp_Bool_Or = {
    arguments: Events_Select_Column_Events_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Events_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};

export type Events_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Events_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Events_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "events" */
export type Events_Aggregate_Fields = {
    __typename?: 'events_aggregate_fields';
    avg?: Maybe<Events_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Events_Max_Fields>;
    min?: Maybe<Events_Min_Fields>;
    stddev?: Maybe<Events_Stddev_Fields>;
    stddev_pop?: Maybe<Events_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Events_Stddev_Samp_Fields>;
    sum?: Maybe<Events_Sum_Fields>;
    var_pop?: Maybe<Events_Var_Pop_Fields>;
    var_samp?: Maybe<Events_Var_Samp_Fields>;
    variance?: Maybe<Events_Variance_Fields>;
};

/** aggregate fields of "events" */
export type Events_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Events_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "events" */
export type Events_Aggregate_Order_By = {
    avg?: InputMaybe<Events_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Events_Max_Order_By>;
    min?: InputMaybe<Events_Min_Order_By>;
    stddev?: InputMaybe<Events_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Events_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Events_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Events_Sum_Order_By>;
    var_pop?: InputMaybe<Events_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Events_Var_Samp_Order_By>;
    variance?: InputMaybe<Events_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "events" */
export type Events_Arr_Rel_Insert_Input = {
    data: Array<Events_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Events_On_Conflict>;
};

/** aggregate avg on columns */
export type Events_Avg_Fields = {
    __typename?: 'events_avg_fields';
    brand_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "events" */
export type Events_Avg_Order_By = {
    brand_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
    _and?: InputMaybe<Array<Events_Bool_Exp>>;
    _not?: InputMaybe<Events_Bool_Exp>;
    _or?: InputMaybe<Array<Events_Bool_Exp>>;
    brand?: InputMaybe<Brands_Bool_Exp>;
    brand_id?: InputMaybe<Int_Comparison_Exp>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    matches?: InputMaybe<Matches_Bool_Exp>;
    matches_aggregate?: InputMaybe<Matches_Aggregate_Bool_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    ppv?: InputMaybe<Boolean_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    year?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "events" */
export enum Events_Constraint {
    /** unique or primary key constraint on columns "id" */
    EventsPkey = 'events_pkey',
}

/** input type for incrementing numeric columns in table "events" */
export type Events_Inc_Input = {
    brand_id?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "events" */
export type Events_Insert_Input = {
    brand?: InputMaybe<Brands_Obj_Rel_Insert_Input>;
    brand_id?: InputMaybe<Scalars['Int']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    matches?: InputMaybe<Matches_Arr_Rel_Insert_Input>;
    name?: InputMaybe<Scalars['String']['input']>;
    ppv?: InputMaybe<Scalars['Boolean']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
    __typename?: 'events_max_fields';
    brand_id?: Maybe<Scalars['Int']['output']>;
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
    year?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "events" */
export type Events_Max_Order_By = {
    brand_id?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
    __typename?: 'events_min_fields';
    brand_id?: Maybe<Scalars['Int']['output']>;
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
    year?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "events" */
export type Events_Min_Order_By = {
    brand_id?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    year?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "events" */
export type Events_Mutation_Response = {
    __typename?: 'events_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Events>;
};

/** input type for inserting object relation for remote table "events" */
export type Events_Obj_Rel_Insert_Input = {
    data: Events_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Events_On_Conflict>;
};

/** on_conflict condition type for table "events" */
export type Events_On_Conflict = {
    constraint: Events_Constraint;
    update_columns?: Array<Events_Update_Column>;
    where?: InputMaybe<Events_Bool_Exp>;
};

/** Ordering options when selecting data from "events". */
export type Events_Order_By = {
    brand?: InputMaybe<Brands_Order_By>;
    brand_id?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    matches_aggregate?: InputMaybe<Matches_Aggregate_Order_By>;
    name?: InputMaybe<Order_By>;
    ppv?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: events */
export type Events_Pk_Columns_Input = {
    id: Scalars['Int']['input'];
};

/** select columns of table "events" */
export enum Events_Select_Column {
    /** column name */
    BrandId = 'brand_id',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    Ppv = 'ppv',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    Year = 'year',
}

/** select "events_aggregate_bool_exp_bool_and_arguments_columns" columns of table "events" */
export enum Events_Select_Column_Events_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
    /** column name */
    Ppv = 'ppv',
}

/** select "events_aggregate_bool_exp_bool_or_arguments_columns" columns of table "events" */
export enum Events_Select_Column_Events_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
    /** column name */
    Ppv = 'ppv',
}

/** input type for updating data in table "events" */
export type Events_Set_Input = {
    brand_id?: InputMaybe<Scalars['Int']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    ppv?: InputMaybe<Scalars['Boolean']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Events_Stddev_Fields = {
    __typename?: 'events_stddev_fields';
    brand_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "events" */
export type Events_Stddev_Order_By = {
    brand_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Events_Stddev_Pop_Fields = {
    __typename?: 'events_stddev_pop_fields';
    brand_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "events" */
export type Events_Stddev_Pop_Order_By = {
    brand_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Events_Stddev_Samp_Fields = {
    __typename?: 'events_stddev_samp_fields';
    brand_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "events" */
export type Events_Stddev_Samp_Order_By = {
    brand_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    year?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "events" */
export type Events_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Events_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Events_Stream_Cursor_Value_Input = {
    brand_id?: InputMaybe<Scalars['Int']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    ppv?: InputMaybe<Scalars['Boolean']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Events_Sum_Fields = {
    __typename?: 'events_sum_fields';
    brand_id?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    year?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "events" */
export type Events_Sum_Order_By = {
    brand_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    year?: InputMaybe<Order_By>;
};

/** update columns of table "events" */
export enum Events_Update_Column {
    /** column name */
    BrandId = 'brand_id',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    Ppv = 'ppv',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    Year = 'year',
}

export type Events_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Events_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Events_Set_Input>;
    /** filter the rows which have to be updated */
    where: Events_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Events_Var_Pop_Fields = {
    __typename?: 'events_var_pop_fields';
    brand_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "events" */
export type Events_Var_Pop_Order_By = {
    brand_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Events_Var_Samp_Fields = {
    __typename?: 'events_var_samp_fields';
    brand_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "events" */
export type Events_Var_Samp_Order_By = {
    brand_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Events_Variance_Fields = {
    __typename?: 'events_variance_fields';
    brand_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "events" */
export type Events_Variance_Order_By = {
    brand_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    year?: InputMaybe<Order_By>;
};

/** columns and relationships of "storage.files" */
export type Files = {
    __typename?: 'files';
    /** An object relationship */
    bucket: Buckets;
    bucketId: Scalars['String']['output'];
    createdAt: Scalars['timestamptz']['output'];
    etag?: Maybe<Scalars['String']['output']>;
    id: Scalars['uuid']['output'];
    isUploaded?: Maybe<Scalars['Boolean']['output']>;
    mimeType?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    size?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['timestamptz']['output'];
    uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
    __typename?: 'files_aggregate';
    aggregate?: Maybe<Files_Aggregate_Fields>;
    nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
    bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
    bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
    count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
    arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Files_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
    arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Files_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Files_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Files_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
    __typename?: 'files_aggregate_fields';
    avg?: Maybe<Files_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Files_Max_Fields>;
    min?: Maybe<Files_Min_Fields>;
    stddev?: Maybe<Files_Stddev_Fields>;
    stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
    sum?: Maybe<Files_Sum_Fields>;
    var_pop?: Maybe<Files_Var_Pop_Fields>;
    var_samp?: Maybe<Files_Var_Samp_Fields>;
    variance?: Maybe<Files_Variance_Fields>;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Files_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
    avg?: InputMaybe<Files_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Files_Max_Order_By>;
    min?: InputMaybe<Files_Min_Order_By>;
    stddev?: InputMaybe<Files_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Files_Sum_Order_By>;
    var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
    variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
    data: Array<Files_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
    __typename?: 'files_avg_fields';
    size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
    size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
    _and?: InputMaybe<Array<Files_Bool_Exp>>;
    _not?: InputMaybe<Files_Bool_Exp>;
    _or?: InputMaybe<Array<Files_Bool_Exp>>;
    bucket?: InputMaybe<Buckets_Bool_Exp>;
    bucketId?: InputMaybe<String_Comparison_Exp>;
    createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    etag?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
    mimeType?: InputMaybe<String_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    size?: InputMaybe<Int_Comparison_Exp>;
    updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
    /** unique or primary key constraint on columns "id" */
    FilesPkey = 'files_pkey',
}

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
    size?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
    bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
    bucketId?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    etag?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    size?: InputMaybe<Scalars['Int']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
    __typename?: 'files_max_fields';
    bucketId?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    etag?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    mimeType?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    size?: Maybe<Scalars['Int']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
    uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
    bucketId?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    etag?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    mimeType?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    size?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
    __typename?: 'files_min_fields';
    bucketId?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    etag?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    mimeType?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    size?: Maybe<Scalars['Int']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
    uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
    bucketId?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    etag?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    mimeType?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    size?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
    __typename?: 'files_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Files>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
    constraint: Files_Constraint;
    update_columns?: Array<Files_Update_Column>;
    where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
    bucket?: InputMaybe<Buckets_Order_By>;
    bucketId?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    etag?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    isUploaded?: InputMaybe<Order_By>;
    mimeType?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    size?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
    /** column name */
    BucketId = 'bucketId',
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    Etag = 'etag',
    /** column name */
    Id = 'id',
    /** column name */
    IsUploaded = 'isUploaded',
    /** column name */
    MimeType = 'mimeType',
    /** column name */
    Name = 'name',
    /** column name */
    Size = 'size',
    /** column name */
    UpdatedAt = 'updatedAt',
    /** column name */
    UploadedByUserId = 'uploadedByUserId',
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
    /** column name */
    IsUploaded = 'isUploaded',
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
    /** column name */
    IsUploaded = 'isUploaded',
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
    bucketId?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    etag?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    size?: InputMaybe<Scalars['Int']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
    __typename?: 'files_stddev_fields';
    size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
    size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
    __typename?: 'files_stddev_pop_fields';
    size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
    size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
    __typename?: 'files_stddev_samp_fields';
    size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
    size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Files_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
    bucketId?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    etag?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    size?: InputMaybe<Scalars['Int']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
    __typename?: 'files_sum_fields';
    size?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
    size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
    /** column name */
    BucketId = 'bucketId',
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    Etag = 'etag',
    /** column name */
    Id = 'id',
    /** column name */
    IsUploaded = 'isUploaded',
    /** column name */
    MimeType = 'mimeType',
    /** column name */
    Name = 'name',
    /** column name */
    Size = 'size',
    /** column name */
    UpdatedAt = 'updatedAt',
    /** column name */
    UploadedByUserId = 'uploadedByUserId',
}

export type Files_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Files_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Files_Set_Input>;
    /** filter the rows which have to be updated */
    where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
    __typename?: 'files_var_pop_fields';
    size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
    size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
    __typename?: 'files_var_samp_fields';
    size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
    size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
    __typename?: 'files_variance_fields';
    size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
    size?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
    String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
    _cast?: InputMaybe<Jsonb_Cast_Exp>;
    /** is the column contained in the given json value */
    _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
    /** does the column contain the given json value at the top level */
    _contains?: InputMaybe<Scalars['jsonb']['input']>;
    _eq?: InputMaybe<Scalars['jsonb']['input']>;
    _gt?: InputMaybe<Scalars['jsonb']['input']>;
    _gte?: InputMaybe<Scalars['jsonb']['input']>;
    /** does the string exist as a top-level key in the column */
    _has_key?: InputMaybe<Scalars['String']['input']>;
    /** do all of these strings exist as top-level keys in the column */
    _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
    /** do any of these strings exist as top-level keys in the column */
    _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
    _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['jsonb']['input']>;
    _lte?: InputMaybe<Scalars['jsonb']['input']>;
    _neq?: InputMaybe<Scalars['jsonb']['input']>;
    _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "match_participants" */
export type Match_Participants = {
    __typename?: 'match_participants';
    created_at: Scalars['timestamptz']['output'];
    /** An object relationship */
    match: Matches;
    match_id: Scalars['Int']['output'];
    /** An object relationship */
    participant: Wrestlers;
    participant_id: Scalars['Int']['output'];
    /** An object relationship */
    tag_team?: Maybe<Tag_Teams>;
    tag_team_id?: Maybe<Scalars['Int']['output']>;
    updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "match_participants" */
export type Match_Participants_Aggregate = {
    __typename?: 'match_participants_aggregate';
    aggregate?: Maybe<Match_Participants_Aggregate_Fields>;
    nodes: Array<Match_Participants>;
};

export type Match_Participants_Aggregate_Bool_Exp = {
    count?: InputMaybe<Match_Participants_Aggregate_Bool_Exp_Count>;
};

export type Match_Participants_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Match_Participants_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Match_Participants_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "match_participants" */
export type Match_Participants_Aggregate_Fields = {
    __typename?: 'match_participants_aggregate_fields';
    avg?: Maybe<Match_Participants_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Match_Participants_Max_Fields>;
    min?: Maybe<Match_Participants_Min_Fields>;
    stddev?: Maybe<Match_Participants_Stddev_Fields>;
    stddev_pop?: Maybe<Match_Participants_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Match_Participants_Stddev_Samp_Fields>;
    sum?: Maybe<Match_Participants_Sum_Fields>;
    var_pop?: Maybe<Match_Participants_Var_Pop_Fields>;
    var_samp?: Maybe<Match_Participants_Var_Samp_Fields>;
    variance?: Maybe<Match_Participants_Variance_Fields>;
};

/** aggregate fields of "match_participants" */
export type Match_Participants_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Match_Participants_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "match_participants" */
export type Match_Participants_Aggregate_Order_By = {
    avg?: InputMaybe<Match_Participants_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Match_Participants_Max_Order_By>;
    min?: InputMaybe<Match_Participants_Min_Order_By>;
    stddev?: InputMaybe<Match_Participants_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Match_Participants_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Match_Participants_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Match_Participants_Sum_Order_By>;
    var_pop?: InputMaybe<Match_Participants_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Match_Participants_Var_Samp_Order_By>;
    variance?: InputMaybe<Match_Participants_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "match_participants" */
export type Match_Participants_Arr_Rel_Insert_Input = {
    data: Array<Match_Participants_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Match_Participants_On_Conflict>;
};

/** aggregate avg on columns */
export type Match_Participants_Avg_Fields = {
    __typename?: 'match_participants_avg_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    participant_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "match_participants" */
export type Match_Participants_Avg_Order_By = {
    match_id?: InputMaybe<Order_By>;
    participant_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "match_participants". All fields are combined with a logical 'AND'. */
export type Match_Participants_Bool_Exp = {
    _and?: InputMaybe<Array<Match_Participants_Bool_Exp>>;
    _not?: InputMaybe<Match_Participants_Bool_Exp>;
    _or?: InputMaybe<Array<Match_Participants_Bool_Exp>>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    match?: InputMaybe<Matches_Bool_Exp>;
    match_id?: InputMaybe<Int_Comparison_Exp>;
    participant?: InputMaybe<Wrestlers_Bool_Exp>;
    participant_id?: InputMaybe<Int_Comparison_Exp>;
    tag_team?: InputMaybe<Tag_Teams_Bool_Exp>;
    tag_team_id?: InputMaybe<Int_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "match_participants" */
export enum Match_Participants_Constraint {
    /** unique or primary key constraint on columns "participant_id", "match_id" */
    MatchParticipantsPkey = 'match_participants_pkey',
}

/** input type for incrementing numeric columns in table "match_participants" */
export type Match_Participants_Inc_Input = {
    match_id?: InputMaybe<Scalars['Int']['input']>;
    participant_id?: InputMaybe<Scalars['Int']['input']>;
    tag_team_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "match_participants" */
export type Match_Participants_Insert_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    match?: InputMaybe<Matches_Obj_Rel_Insert_Input>;
    match_id?: InputMaybe<Scalars['Int']['input']>;
    participant?: InputMaybe<Wrestlers_Obj_Rel_Insert_Input>;
    participant_id?: InputMaybe<Scalars['Int']['input']>;
    tag_team?: InputMaybe<Tag_Teams_Obj_Rel_Insert_Input>;
    tag_team_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Match_Participants_Max_Fields = {
    __typename?: 'match_participants_max_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    match_id?: Maybe<Scalars['Int']['output']>;
    participant_id?: Maybe<Scalars['Int']['output']>;
    tag_team_id?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "match_participants" */
export type Match_Participants_Max_Order_By = {
    created_at?: InputMaybe<Order_By>;
    match_id?: InputMaybe<Order_By>;
    participant_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Match_Participants_Min_Fields = {
    __typename?: 'match_participants_min_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    match_id?: Maybe<Scalars['Int']['output']>;
    participant_id?: Maybe<Scalars['Int']['output']>;
    tag_team_id?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "match_participants" */
export type Match_Participants_Min_Order_By = {
    created_at?: InputMaybe<Order_By>;
    match_id?: InputMaybe<Order_By>;
    participant_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "match_participants" */
export type Match_Participants_Mutation_Response = {
    __typename?: 'match_participants_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Match_Participants>;
};

/** on_conflict condition type for table "match_participants" */
export type Match_Participants_On_Conflict = {
    constraint: Match_Participants_Constraint;
    update_columns?: Array<Match_Participants_Update_Column>;
    where?: InputMaybe<Match_Participants_Bool_Exp>;
};

/** Ordering options when selecting data from "match_participants". */
export type Match_Participants_Order_By = {
    created_at?: InputMaybe<Order_By>;
    match?: InputMaybe<Matches_Order_By>;
    match_id?: InputMaybe<Order_By>;
    participant?: InputMaybe<Wrestlers_Order_By>;
    participant_id?: InputMaybe<Order_By>;
    tag_team?: InputMaybe<Tag_Teams_Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: match_participants */
export type Match_Participants_Pk_Columns_Input = {
    match_id: Scalars['Int']['input'];
    participant_id: Scalars['Int']['input'];
};

/** select columns of table "match_participants" */
export enum Match_Participants_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    MatchId = 'match_id',
    /** column name */
    ParticipantId = 'participant_id',
    /** column name */
    TagTeamId = 'tag_team_id',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** input type for updating data in table "match_participants" */
export type Match_Participants_Set_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    match_id?: InputMaybe<Scalars['Int']['input']>;
    participant_id?: InputMaybe<Scalars['Int']['input']>;
    tag_team_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Match_Participants_Stddev_Fields = {
    __typename?: 'match_participants_stddev_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    participant_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "match_participants" */
export type Match_Participants_Stddev_Order_By = {
    match_id?: InputMaybe<Order_By>;
    participant_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Match_Participants_Stddev_Pop_Fields = {
    __typename?: 'match_participants_stddev_pop_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    participant_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "match_participants" */
export type Match_Participants_Stddev_Pop_Order_By = {
    match_id?: InputMaybe<Order_By>;
    participant_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Match_Participants_Stddev_Samp_Fields = {
    __typename?: 'match_participants_stddev_samp_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    participant_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "match_participants" */
export type Match_Participants_Stddev_Samp_Order_By = {
    match_id?: InputMaybe<Order_By>;
    participant_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "match_participants" */
export type Match_Participants_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Match_Participants_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Match_Participants_Stream_Cursor_Value_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    match_id?: InputMaybe<Scalars['Int']['input']>;
    participant_id?: InputMaybe<Scalars['Int']['input']>;
    tag_team_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Match_Participants_Sum_Fields = {
    __typename?: 'match_participants_sum_fields';
    match_id?: Maybe<Scalars['Int']['output']>;
    participant_id?: Maybe<Scalars['Int']['output']>;
    tag_team_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "match_participants" */
export type Match_Participants_Sum_Order_By = {
    match_id?: InputMaybe<Order_By>;
    participant_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** update columns of table "match_participants" */
export enum Match_Participants_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    MatchId = 'match_id',
    /** column name */
    ParticipantId = 'participant_id',
    /** column name */
    TagTeamId = 'tag_team_id',
    /** column name */
    UpdatedAt = 'updated_at',
}

export type Match_Participants_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Match_Participants_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Match_Participants_Set_Input>;
    /** filter the rows which have to be updated */
    where: Match_Participants_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Match_Participants_Var_Pop_Fields = {
    __typename?: 'match_participants_var_pop_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    participant_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "match_participants" */
export type Match_Participants_Var_Pop_Order_By = {
    match_id?: InputMaybe<Order_By>;
    participant_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Match_Participants_Var_Samp_Fields = {
    __typename?: 'match_participants_var_samp_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    participant_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "match_participants" */
export type Match_Participants_Var_Samp_Order_By = {
    match_id?: InputMaybe<Order_By>;
    participant_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Match_Participants_Variance_Fields = {
    __typename?: 'match_participants_variance_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    participant_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "match_participants" */
export type Match_Participants_Variance_Order_By = {
    match_id?: InputMaybe<Order_By>;
    participant_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "match_type_names" */
export type Match_Type_Names = {
    __typename?: 'match_type_names';
    created_at: Scalars['timestamptz']['output'];
    id: Scalars['Int']['output'];
    /** An array relationship */
    match_types: Array<Match_Types>;
    /** An aggregate relationship */
    match_types_aggregate: Match_Types_Aggregate;
    name: Scalars['String']['output'];
    tag_team: Scalars['Boolean']['output'];
    updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "match_type_names" */
export type Match_Type_NamesMatch_TypesArgs = {
    distinct_on?: InputMaybe<Array<Match_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Types_Order_By>>;
    where?: InputMaybe<Match_Types_Bool_Exp>;
};

/** columns and relationships of "match_type_names" */
export type Match_Type_NamesMatch_Types_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Types_Order_By>>;
    where?: InputMaybe<Match_Types_Bool_Exp>;
};

/** aggregated selection of "match_type_names" */
export type Match_Type_Names_Aggregate = {
    __typename?: 'match_type_names_aggregate';
    aggregate?: Maybe<Match_Type_Names_Aggregate_Fields>;
    nodes: Array<Match_Type_Names>;
};

/** aggregate fields of "match_type_names" */
export type Match_Type_Names_Aggregate_Fields = {
    __typename?: 'match_type_names_aggregate_fields';
    avg?: Maybe<Match_Type_Names_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Match_Type_Names_Max_Fields>;
    min?: Maybe<Match_Type_Names_Min_Fields>;
    stddev?: Maybe<Match_Type_Names_Stddev_Fields>;
    stddev_pop?: Maybe<Match_Type_Names_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Match_Type_Names_Stddev_Samp_Fields>;
    sum?: Maybe<Match_Type_Names_Sum_Fields>;
    var_pop?: Maybe<Match_Type_Names_Var_Pop_Fields>;
    var_samp?: Maybe<Match_Type_Names_Var_Samp_Fields>;
    variance?: Maybe<Match_Type_Names_Variance_Fields>;
};

/** aggregate fields of "match_type_names" */
export type Match_Type_Names_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Match_Type_Names_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Match_Type_Names_Avg_Fields = {
    __typename?: 'match_type_names_avg_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "match_type_names". All fields are combined with a logical 'AND'. */
export type Match_Type_Names_Bool_Exp = {
    _and?: InputMaybe<Array<Match_Type_Names_Bool_Exp>>;
    _not?: InputMaybe<Match_Type_Names_Bool_Exp>;
    _or?: InputMaybe<Array<Match_Type_Names_Bool_Exp>>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    match_types?: InputMaybe<Match_Types_Bool_Exp>;
    match_types_aggregate?: InputMaybe<Match_Types_Aggregate_Bool_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    tag_team?: InputMaybe<Boolean_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "match_type_names" */
export enum Match_Type_Names_Constraint {
    /** unique or primary key constraint on columns "id" */
    MatchTypeNamesPkey = 'match_type_names_pkey',
}

/** input type for incrementing numeric columns in table "match_type_names" */
export type Match_Type_Names_Inc_Input = {
    id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "match_type_names" */
export type Match_Type_Names_Insert_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    match_types?: InputMaybe<Match_Types_Arr_Rel_Insert_Input>;
    name?: InputMaybe<Scalars['String']['input']>;
    tag_team?: InputMaybe<Scalars['Boolean']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Match_Type_Names_Max_Fields = {
    __typename?: 'match_type_names_max_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Match_Type_Names_Min_Fields = {
    __typename?: 'match_type_names_min_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "match_type_names" */
export type Match_Type_Names_Mutation_Response = {
    __typename?: 'match_type_names_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Match_Type_Names>;
};

/** input type for inserting object relation for remote table "match_type_names" */
export type Match_Type_Names_Obj_Rel_Insert_Input = {
    data: Match_Type_Names_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Match_Type_Names_On_Conflict>;
};

/** on_conflict condition type for table "match_type_names" */
export type Match_Type_Names_On_Conflict = {
    constraint: Match_Type_Names_Constraint;
    update_columns?: Array<Match_Type_Names_Update_Column>;
    where?: InputMaybe<Match_Type_Names_Bool_Exp>;
};

/** Ordering options when selecting data from "match_type_names". */
export type Match_Type_Names_Order_By = {
    created_at?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_types_aggregate?: InputMaybe<Match_Types_Aggregate_Order_By>;
    name?: InputMaybe<Order_By>;
    tag_team?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: match_type_names */
export type Match_Type_Names_Pk_Columns_Input = {
    id: Scalars['Int']['input'];
};

/** select columns of table "match_type_names" */
export enum Match_Type_Names_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    TagTeam = 'tag_team',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** input type for updating data in table "match_type_names" */
export type Match_Type_Names_Set_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    tag_team?: InputMaybe<Scalars['Boolean']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Match_Type_Names_Stddev_Fields = {
    __typename?: 'match_type_names_stddev_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Match_Type_Names_Stddev_Pop_Fields = {
    __typename?: 'match_type_names_stddev_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Match_Type_Names_Stddev_Samp_Fields = {
    __typename?: 'match_type_names_stddev_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "match_type_names" */
export type Match_Type_Names_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Match_Type_Names_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Match_Type_Names_Stream_Cursor_Value_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    tag_team?: InputMaybe<Scalars['Boolean']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Match_Type_Names_Sum_Fields = {
    __typename?: 'match_type_names_sum_fields';
    id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "match_type_names" */
export enum Match_Type_Names_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    TagTeam = 'tag_team',
    /** column name */
    UpdatedAt = 'updated_at',
}

export type Match_Type_Names_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Match_Type_Names_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Match_Type_Names_Set_Input>;
    /** filter the rows which have to be updated */
    where: Match_Type_Names_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Match_Type_Names_Var_Pop_Fields = {
    __typename?: 'match_type_names_var_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Match_Type_Names_Var_Samp_Fields = {
    __typename?: 'match_type_names_var_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Match_Type_Names_Variance_Fields = {
    __typename?: 'match_type_names_variance_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "match_types" */
export type Match_Types = {
    __typename?: 'match_types';
    created_at: Scalars['timestamptz']['output'];
    id: Scalars['Int']['output'];
    /** An object relationship */
    match_type_name: Match_Type_Names;
    match_type_name_id: Scalars['Int']['output'];
    /** An array relationship */
    matches: Array<Matches>;
    /** An aggregate relationship */
    matches_aggregate: Matches_Aggregate;
    no_of_participants: Scalars['Int']['output'];
    tag_team: Scalars['Boolean']['output'];
    updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "match_types" */
export type Match_TypesMatchesArgs = {
    distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Matches_Order_By>>;
    where?: InputMaybe<Matches_Bool_Exp>;
};

/** columns and relationships of "match_types" */
export type Match_TypesMatches_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Matches_Order_By>>;
    where?: InputMaybe<Matches_Bool_Exp>;
};

/** aggregated selection of "match_types" */
export type Match_Types_Aggregate = {
    __typename?: 'match_types_aggregate';
    aggregate?: Maybe<Match_Types_Aggregate_Fields>;
    nodes: Array<Match_Types>;
};

export type Match_Types_Aggregate_Bool_Exp = {
    bool_and?: InputMaybe<Match_Types_Aggregate_Bool_Exp_Bool_And>;
    bool_or?: InputMaybe<Match_Types_Aggregate_Bool_Exp_Bool_Or>;
    count?: InputMaybe<Match_Types_Aggregate_Bool_Exp_Count>;
};

export type Match_Types_Aggregate_Bool_Exp_Bool_And = {
    arguments: Match_Types_Select_Column_Match_Types_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Match_Types_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};

export type Match_Types_Aggregate_Bool_Exp_Bool_Or = {
    arguments: Match_Types_Select_Column_Match_Types_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Match_Types_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};

export type Match_Types_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Match_Types_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Match_Types_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "match_types" */
export type Match_Types_Aggregate_Fields = {
    __typename?: 'match_types_aggregate_fields';
    avg?: Maybe<Match_Types_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Match_Types_Max_Fields>;
    min?: Maybe<Match_Types_Min_Fields>;
    stddev?: Maybe<Match_Types_Stddev_Fields>;
    stddev_pop?: Maybe<Match_Types_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Match_Types_Stddev_Samp_Fields>;
    sum?: Maybe<Match_Types_Sum_Fields>;
    var_pop?: Maybe<Match_Types_Var_Pop_Fields>;
    var_samp?: Maybe<Match_Types_Var_Samp_Fields>;
    variance?: Maybe<Match_Types_Variance_Fields>;
};

/** aggregate fields of "match_types" */
export type Match_Types_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Match_Types_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "match_types" */
export type Match_Types_Aggregate_Order_By = {
    avg?: InputMaybe<Match_Types_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Match_Types_Max_Order_By>;
    min?: InputMaybe<Match_Types_Min_Order_By>;
    stddev?: InputMaybe<Match_Types_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Match_Types_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Match_Types_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Match_Types_Sum_Order_By>;
    var_pop?: InputMaybe<Match_Types_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Match_Types_Var_Samp_Order_By>;
    variance?: InputMaybe<Match_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "match_types" */
export type Match_Types_Arr_Rel_Insert_Input = {
    data: Array<Match_Types_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Match_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Match_Types_Avg_Fields = {
    __typename?: 'match_types_avg_fields';
    id?: Maybe<Scalars['Float']['output']>;
    match_type_name_id?: Maybe<Scalars['Float']['output']>;
    no_of_participants?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "match_types" */
export type Match_Types_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    match_type_name_id?: InputMaybe<Order_By>;
    no_of_participants?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "match_types". All fields are combined with a logical 'AND'. */
export type Match_Types_Bool_Exp = {
    _and?: InputMaybe<Array<Match_Types_Bool_Exp>>;
    _not?: InputMaybe<Match_Types_Bool_Exp>;
    _or?: InputMaybe<Array<Match_Types_Bool_Exp>>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    match_type_name?: InputMaybe<Match_Type_Names_Bool_Exp>;
    match_type_name_id?: InputMaybe<Int_Comparison_Exp>;
    matches?: InputMaybe<Matches_Bool_Exp>;
    matches_aggregate?: InputMaybe<Matches_Aggregate_Bool_Exp>;
    no_of_participants?: InputMaybe<Int_Comparison_Exp>;
    tag_team?: InputMaybe<Boolean_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "match_types" */
export enum Match_Types_Constraint {
    /** unique or primary key constraint on columns "id" */
    MatchTypesPkey = 'match_types_pkey',
}

/** input type for incrementing numeric columns in table "match_types" */
export type Match_Types_Inc_Input = {
    id?: InputMaybe<Scalars['Int']['input']>;
    match_type_name_id?: InputMaybe<Scalars['Int']['input']>;
    no_of_participants?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "match_types" */
export type Match_Types_Insert_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    match_type_name?: InputMaybe<Match_Type_Names_Obj_Rel_Insert_Input>;
    match_type_name_id?: InputMaybe<Scalars['Int']['input']>;
    matches?: InputMaybe<Matches_Arr_Rel_Insert_Input>;
    no_of_participants?: InputMaybe<Scalars['Int']['input']>;
    tag_team?: InputMaybe<Scalars['Boolean']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Match_Types_Max_Fields = {
    __typename?: 'match_types_max_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    match_type_name_id?: Maybe<Scalars['Int']['output']>;
    no_of_participants?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "match_types" */
export type Match_Types_Max_Order_By = {
    created_at?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_name_id?: InputMaybe<Order_By>;
    no_of_participants?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Match_Types_Min_Fields = {
    __typename?: 'match_types_min_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    match_type_name_id?: Maybe<Scalars['Int']['output']>;
    no_of_participants?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "match_types" */
export type Match_Types_Min_Order_By = {
    created_at?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_name_id?: InputMaybe<Order_By>;
    no_of_participants?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "match_types" */
export type Match_Types_Mutation_Response = {
    __typename?: 'match_types_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Match_Types>;
};

/** input type for inserting object relation for remote table "match_types" */
export type Match_Types_Obj_Rel_Insert_Input = {
    data: Match_Types_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Match_Types_On_Conflict>;
};

/** on_conflict condition type for table "match_types" */
export type Match_Types_On_Conflict = {
    constraint: Match_Types_Constraint;
    update_columns?: Array<Match_Types_Update_Column>;
    where?: InputMaybe<Match_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "match_types". */
export type Match_Types_Order_By = {
    created_at?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_name?: InputMaybe<Match_Type_Names_Order_By>;
    match_type_name_id?: InputMaybe<Order_By>;
    matches_aggregate?: InputMaybe<Matches_Aggregate_Order_By>;
    no_of_participants?: InputMaybe<Order_By>;
    tag_team?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: match_types */
export type Match_Types_Pk_Columns_Input = {
    id: Scalars['Int']['input'];
};

/** select columns of table "match_types" */
export enum Match_Types_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Id = 'id',
    /** column name */
    MatchTypeNameId = 'match_type_name_id',
    /** column name */
    NoOfParticipants = 'no_of_participants',
    /** column name */
    TagTeam = 'tag_team',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** select "match_types_aggregate_bool_exp_bool_and_arguments_columns" columns of table "match_types" */
export enum Match_Types_Select_Column_Match_Types_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
    /** column name */
    TagTeam = 'tag_team',
}

/** select "match_types_aggregate_bool_exp_bool_or_arguments_columns" columns of table "match_types" */
export enum Match_Types_Select_Column_Match_Types_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
    /** column name */
    TagTeam = 'tag_team',
}

/** input type for updating data in table "match_types" */
export type Match_Types_Set_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    match_type_name_id?: InputMaybe<Scalars['Int']['input']>;
    no_of_participants?: InputMaybe<Scalars['Int']['input']>;
    tag_team?: InputMaybe<Scalars['Boolean']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Match_Types_Stddev_Fields = {
    __typename?: 'match_types_stddev_fields';
    id?: Maybe<Scalars['Float']['output']>;
    match_type_name_id?: Maybe<Scalars['Float']['output']>;
    no_of_participants?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "match_types" */
export type Match_Types_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    match_type_name_id?: InputMaybe<Order_By>;
    no_of_participants?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Match_Types_Stddev_Pop_Fields = {
    __typename?: 'match_types_stddev_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
    match_type_name_id?: Maybe<Scalars['Float']['output']>;
    no_of_participants?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "match_types" */
export type Match_Types_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    match_type_name_id?: InputMaybe<Order_By>;
    no_of_participants?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Match_Types_Stddev_Samp_Fields = {
    __typename?: 'match_types_stddev_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
    match_type_name_id?: Maybe<Scalars['Float']['output']>;
    no_of_participants?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "match_types" */
export type Match_Types_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    match_type_name_id?: InputMaybe<Order_By>;
    no_of_participants?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "match_types" */
export type Match_Types_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Match_Types_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Match_Types_Stream_Cursor_Value_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    match_type_name_id?: InputMaybe<Scalars['Int']['input']>;
    no_of_participants?: InputMaybe<Scalars['Int']['input']>;
    tag_team?: InputMaybe<Scalars['Boolean']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Match_Types_Sum_Fields = {
    __typename?: 'match_types_sum_fields';
    id?: Maybe<Scalars['Int']['output']>;
    match_type_name_id?: Maybe<Scalars['Int']['output']>;
    no_of_participants?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "match_types" */
export type Match_Types_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    match_type_name_id?: InputMaybe<Order_By>;
    no_of_participants?: InputMaybe<Order_By>;
};

/** update columns of table "match_types" */
export enum Match_Types_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Id = 'id',
    /** column name */
    MatchTypeNameId = 'match_type_name_id',
    /** column name */
    NoOfParticipants = 'no_of_participants',
    /** column name */
    TagTeam = 'tag_team',
    /** column name */
    UpdatedAt = 'updated_at',
}

export type Match_Types_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Match_Types_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Match_Types_Set_Input>;
    /** filter the rows which have to be updated */
    where: Match_Types_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Match_Types_Var_Pop_Fields = {
    __typename?: 'match_types_var_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
    match_type_name_id?: Maybe<Scalars['Float']['output']>;
    no_of_participants?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "match_types" */
export type Match_Types_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    match_type_name_id?: InputMaybe<Order_By>;
    no_of_participants?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Match_Types_Var_Samp_Fields = {
    __typename?: 'match_types_var_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
    match_type_name_id?: Maybe<Scalars['Float']['output']>;
    no_of_participants?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "match_types" */
export type Match_Types_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    match_type_name_id?: InputMaybe<Order_By>;
    no_of_participants?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Match_Types_Variance_Fields = {
    __typename?: 'match_types_variance_fields';
    id?: Maybe<Scalars['Float']['output']>;
    match_type_name_id?: Maybe<Scalars['Float']['output']>;
    no_of_participants?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "match_types" */
export type Match_Types_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    match_type_name_id?: InputMaybe<Order_By>;
    no_of_participants?: InputMaybe<Order_By>;
};

/** columns and relationships of "match_winners" */
export type Match_Winners = {
    __typename?: 'match_winners';
    created_at: Scalars['timestamptz']['output'];
    /** An object relationship */
    match: Matches;
    match_id: Scalars['Int']['output'];
    updated_at: Scalars['timestamptz']['output'];
    /** An object relationship */
    winner: Wrestlers;
    winner_id: Scalars['Int']['output'];
};

/** aggregated selection of "match_winners" */
export type Match_Winners_Aggregate = {
    __typename?: 'match_winners_aggregate';
    aggregate?: Maybe<Match_Winners_Aggregate_Fields>;
    nodes: Array<Match_Winners>;
};

export type Match_Winners_Aggregate_Bool_Exp = {
    count?: InputMaybe<Match_Winners_Aggregate_Bool_Exp_Count>;
};

export type Match_Winners_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Match_Winners_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Match_Winners_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "match_winners" */
export type Match_Winners_Aggregate_Fields = {
    __typename?: 'match_winners_aggregate_fields';
    avg?: Maybe<Match_Winners_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Match_Winners_Max_Fields>;
    min?: Maybe<Match_Winners_Min_Fields>;
    stddev?: Maybe<Match_Winners_Stddev_Fields>;
    stddev_pop?: Maybe<Match_Winners_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Match_Winners_Stddev_Samp_Fields>;
    sum?: Maybe<Match_Winners_Sum_Fields>;
    var_pop?: Maybe<Match_Winners_Var_Pop_Fields>;
    var_samp?: Maybe<Match_Winners_Var_Samp_Fields>;
    variance?: Maybe<Match_Winners_Variance_Fields>;
};

/** aggregate fields of "match_winners" */
export type Match_Winners_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Match_Winners_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "match_winners" */
export type Match_Winners_Aggregate_Order_By = {
    avg?: InputMaybe<Match_Winners_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Match_Winners_Max_Order_By>;
    min?: InputMaybe<Match_Winners_Min_Order_By>;
    stddev?: InputMaybe<Match_Winners_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Match_Winners_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Match_Winners_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Match_Winners_Sum_Order_By>;
    var_pop?: InputMaybe<Match_Winners_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Match_Winners_Var_Samp_Order_By>;
    variance?: InputMaybe<Match_Winners_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "match_winners" */
export type Match_Winners_Arr_Rel_Insert_Input = {
    data: Array<Match_Winners_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Match_Winners_On_Conflict>;
};

/** aggregate avg on columns */
export type Match_Winners_Avg_Fields = {
    __typename?: 'match_winners_avg_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    winner_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "match_winners" */
export type Match_Winners_Avg_Order_By = {
    match_id?: InputMaybe<Order_By>;
    winner_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "match_winners". All fields are combined with a logical 'AND'. */
export type Match_Winners_Bool_Exp = {
    _and?: InputMaybe<Array<Match_Winners_Bool_Exp>>;
    _not?: InputMaybe<Match_Winners_Bool_Exp>;
    _or?: InputMaybe<Array<Match_Winners_Bool_Exp>>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    match?: InputMaybe<Matches_Bool_Exp>;
    match_id?: InputMaybe<Int_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    winner?: InputMaybe<Wrestlers_Bool_Exp>;
    winner_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "match_winners" */
export enum Match_Winners_Constraint {
    /** unique or primary key constraint on columns "winner_id", "match_id" */
    MatchWinnersPkey = 'match_winners_pkey',
}

/** input type for incrementing numeric columns in table "match_winners" */
export type Match_Winners_Inc_Input = {
    match_id?: InputMaybe<Scalars['Int']['input']>;
    winner_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "match_winners" */
export type Match_Winners_Insert_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    match?: InputMaybe<Matches_Obj_Rel_Insert_Input>;
    match_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    winner?: InputMaybe<Wrestlers_Obj_Rel_Insert_Input>;
    winner_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Match_Winners_Max_Fields = {
    __typename?: 'match_winners_max_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    match_id?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
    winner_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "match_winners" */
export type Match_Winners_Max_Order_By = {
    created_at?: InputMaybe<Order_By>;
    match_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    winner_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Match_Winners_Min_Fields = {
    __typename?: 'match_winners_min_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    match_id?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
    winner_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "match_winners" */
export type Match_Winners_Min_Order_By = {
    created_at?: InputMaybe<Order_By>;
    match_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    winner_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "match_winners" */
export type Match_Winners_Mutation_Response = {
    __typename?: 'match_winners_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Match_Winners>;
};

/** on_conflict condition type for table "match_winners" */
export type Match_Winners_On_Conflict = {
    constraint: Match_Winners_Constraint;
    update_columns?: Array<Match_Winners_Update_Column>;
    where?: InputMaybe<Match_Winners_Bool_Exp>;
};

/** Ordering options when selecting data from "match_winners". */
export type Match_Winners_Order_By = {
    created_at?: InputMaybe<Order_By>;
    match?: InputMaybe<Matches_Order_By>;
    match_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    winner?: InputMaybe<Wrestlers_Order_By>;
    winner_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: match_winners */
export type Match_Winners_Pk_Columns_Input = {
    match_id: Scalars['Int']['input'];
    winner_id: Scalars['Int']['input'];
};

/** select columns of table "match_winners" */
export enum Match_Winners_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    MatchId = 'match_id',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    WinnerId = 'winner_id',
}

/** input type for updating data in table "match_winners" */
export type Match_Winners_Set_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    match_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    winner_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Match_Winners_Stddev_Fields = {
    __typename?: 'match_winners_stddev_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    winner_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "match_winners" */
export type Match_Winners_Stddev_Order_By = {
    match_id?: InputMaybe<Order_By>;
    winner_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Match_Winners_Stddev_Pop_Fields = {
    __typename?: 'match_winners_stddev_pop_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    winner_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "match_winners" */
export type Match_Winners_Stddev_Pop_Order_By = {
    match_id?: InputMaybe<Order_By>;
    winner_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Match_Winners_Stddev_Samp_Fields = {
    __typename?: 'match_winners_stddev_samp_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    winner_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "match_winners" */
export type Match_Winners_Stddev_Samp_Order_By = {
    match_id?: InputMaybe<Order_By>;
    winner_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "match_winners" */
export type Match_Winners_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Match_Winners_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Match_Winners_Stream_Cursor_Value_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    match_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    winner_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Match_Winners_Sum_Fields = {
    __typename?: 'match_winners_sum_fields';
    match_id?: Maybe<Scalars['Int']['output']>;
    winner_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "match_winners" */
export type Match_Winners_Sum_Order_By = {
    match_id?: InputMaybe<Order_By>;
    winner_id?: InputMaybe<Order_By>;
};

/** update columns of table "match_winners" */
export enum Match_Winners_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    MatchId = 'match_id',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    WinnerId = 'winner_id',
}

export type Match_Winners_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Match_Winners_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Match_Winners_Set_Input>;
    /** filter the rows which have to be updated */
    where: Match_Winners_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Match_Winners_Var_Pop_Fields = {
    __typename?: 'match_winners_var_pop_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    winner_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "match_winners" */
export type Match_Winners_Var_Pop_Order_By = {
    match_id?: InputMaybe<Order_By>;
    winner_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Match_Winners_Var_Samp_Fields = {
    __typename?: 'match_winners_var_samp_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    winner_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "match_winners" */
export type Match_Winners_Var_Samp_Order_By = {
    match_id?: InputMaybe<Order_By>;
    winner_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Match_Winners_Variance_Fields = {
    __typename?: 'match_winners_variance_fields';
    match_id?: Maybe<Scalars['Float']['output']>;
    winner_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "match_winners" */
export type Match_Winners_Variance_Order_By = {
    match_id?: InputMaybe<Order_By>;
    winner_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "matches" */
export type Matches = {
    __typename?: 'matches';
    /** An object relationship */
    championship?: Maybe<Championships>;
    championship_id?: Maybe<Scalars['Int']['output']>;
    created_at: Scalars['timestamptz']['output'];
    /** An object relationship */
    event: Events;
    event_id: Scalars['Int']['output'];
    id: Scalars['Int']['output'];
    /** An object relationship */
    match_type: Match_Types;
    match_type_id: Scalars['Int']['output'];
    /** An array relationship */
    participants: Array<Match_Participants>;
    /** An aggregate relationship */
    participants_aggregate: Match_Participants_Aggregate;
    updated_at: Scalars['timestamptz']['output'];
    /** An array relationship */
    winners: Array<Match_Winners>;
    /** An aggregate relationship */
    winners_aggregate: Match_Winners_Aggregate;
};

/** columns and relationships of "matches" */
export type MatchesParticipantsArgs = {
    distinct_on?: InputMaybe<Array<Match_Participants_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Participants_Order_By>>;
    where?: InputMaybe<Match_Participants_Bool_Exp>;
};

/** columns and relationships of "matches" */
export type MatchesParticipants_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Participants_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Participants_Order_By>>;
    where?: InputMaybe<Match_Participants_Bool_Exp>;
};

/** columns and relationships of "matches" */
export type MatchesWinnersArgs = {
    distinct_on?: InputMaybe<Array<Match_Winners_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Winners_Order_By>>;
    where?: InputMaybe<Match_Winners_Bool_Exp>;
};

/** columns and relationships of "matches" */
export type MatchesWinners_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Winners_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Winners_Order_By>>;
    where?: InputMaybe<Match_Winners_Bool_Exp>;
};

/** aggregated selection of "matches" */
export type Matches_Aggregate = {
    __typename?: 'matches_aggregate';
    aggregate?: Maybe<Matches_Aggregate_Fields>;
    nodes: Array<Matches>;
};

export type Matches_Aggregate_Bool_Exp = {
    count?: InputMaybe<Matches_Aggregate_Bool_Exp_Count>;
};

export type Matches_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Matches_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Matches_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "matches" */
export type Matches_Aggregate_Fields = {
    __typename?: 'matches_aggregate_fields';
    avg?: Maybe<Matches_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Matches_Max_Fields>;
    min?: Maybe<Matches_Min_Fields>;
    stddev?: Maybe<Matches_Stddev_Fields>;
    stddev_pop?: Maybe<Matches_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Matches_Stddev_Samp_Fields>;
    sum?: Maybe<Matches_Sum_Fields>;
    var_pop?: Maybe<Matches_Var_Pop_Fields>;
    var_samp?: Maybe<Matches_Var_Samp_Fields>;
    variance?: Maybe<Matches_Variance_Fields>;
};

/** aggregate fields of "matches" */
export type Matches_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Matches_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "matches" */
export type Matches_Aggregate_Order_By = {
    avg?: InputMaybe<Matches_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Matches_Max_Order_By>;
    min?: InputMaybe<Matches_Min_Order_By>;
    stddev?: InputMaybe<Matches_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Matches_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Matches_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Matches_Sum_Order_By>;
    var_pop?: InputMaybe<Matches_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Matches_Var_Samp_Order_By>;
    variance?: InputMaybe<Matches_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "matches" */
export type Matches_Arr_Rel_Insert_Input = {
    data: Array<Matches_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Matches_On_Conflict>;
};

/** aggregate avg on columns */
export type Matches_Avg_Fields = {
    __typename?: 'matches_avg_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    match_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "matches" */
export type Matches_Avg_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "matches". All fields are combined with a logical 'AND'. */
export type Matches_Bool_Exp = {
    _and?: InputMaybe<Array<Matches_Bool_Exp>>;
    _not?: InputMaybe<Matches_Bool_Exp>;
    _or?: InputMaybe<Array<Matches_Bool_Exp>>;
    championship?: InputMaybe<Championships_Bool_Exp>;
    championship_id?: InputMaybe<Int_Comparison_Exp>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    event?: InputMaybe<Events_Bool_Exp>;
    event_id?: InputMaybe<Int_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    match_type?: InputMaybe<Match_Types_Bool_Exp>;
    match_type_id?: InputMaybe<Int_Comparison_Exp>;
    participants?: InputMaybe<Match_Participants_Bool_Exp>;
    participants_aggregate?: InputMaybe<Match_Participants_Aggregate_Bool_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    winners?: InputMaybe<Match_Winners_Bool_Exp>;
    winners_aggregate?: InputMaybe<Match_Winners_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "matches" */
export enum Matches_Constraint {
    /** unique or primary key constraint on columns "id" */
    MatchesPkey = 'matches_pkey',
}

/** input type for incrementing numeric columns in table "matches" */
export type Matches_Inc_Input = {
    championship_id?: InputMaybe<Scalars['Int']['input']>;
    event_id?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    match_type_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "matches" */
export type Matches_Insert_Input = {
    championship?: InputMaybe<Championships_Obj_Rel_Insert_Input>;
    championship_id?: InputMaybe<Scalars['Int']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    event?: InputMaybe<Events_Obj_Rel_Insert_Input>;
    event_id?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    match_type?: InputMaybe<Match_Types_Obj_Rel_Insert_Input>;
    match_type_id?: InputMaybe<Scalars['Int']['input']>;
    participants?: InputMaybe<Match_Participants_Arr_Rel_Insert_Input>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    winners?: InputMaybe<Match_Winners_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Matches_Max_Fields = {
    __typename?: 'matches_max_fields';
    championship_id?: Maybe<Scalars['Int']['output']>;
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    event_id?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    match_type_id?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "matches" */
export type Matches_Max_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    event_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Matches_Min_Fields = {
    __typename?: 'matches_min_fields';
    championship_id?: Maybe<Scalars['Int']['output']>;
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    event_id?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    match_type_id?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "matches" */
export type Matches_Min_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    event_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "matches" */
export type Matches_Mutation_Response = {
    __typename?: 'matches_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Matches>;
};

/** input type for inserting object relation for remote table "matches" */
export type Matches_Obj_Rel_Insert_Input = {
    data: Matches_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Matches_On_Conflict>;
};

/** on_conflict condition type for table "matches" */
export type Matches_On_Conflict = {
    constraint: Matches_Constraint;
    update_columns?: Array<Matches_Update_Column>;
    where?: InputMaybe<Matches_Bool_Exp>;
};

/** Ordering options when selecting data from "matches". */
export type Matches_Order_By = {
    championship?: InputMaybe<Championships_Order_By>;
    championship_id?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    event?: InputMaybe<Events_Order_By>;
    event_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type?: InputMaybe<Match_Types_Order_By>;
    match_type_id?: InputMaybe<Order_By>;
    participants_aggregate?: InputMaybe<Match_Participants_Aggregate_Order_By>;
    updated_at?: InputMaybe<Order_By>;
    winners_aggregate?: InputMaybe<Match_Winners_Aggregate_Order_By>;
};

/** primary key columns input for table: matches */
export type Matches_Pk_Columns_Input = {
    id: Scalars['Int']['input'];
};

/** select columns of table "matches" */
export enum Matches_Select_Column {
    /** column name */
    ChampionshipId = 'championship_id',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    EventId = 'event_id',
    /** column name */
    Id = 'id',
    /** column name */
    MatchTypeId = 'match_type_id',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** input type for updating data in table "matches" */
export type Matches_Set_Input = {
    championship_id?: InputMaybe<Scalars['Int']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    event_id?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    match_type_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Matches_Stddev_Fields = {
    __typename?: 'matches_stddev_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    match_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "matches" */
export type Matches_Stddev_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Matches_Stddev_Pop_Fields = {
    __typename?: 'matches_stddev_pop_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    match_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "matches" */
export type Matches_Stddev_Pop_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Matches_Stddev_Samp_Fields = {
    __typename?: 'matches_stddev_samp_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    match_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "matches" */
export type Matches_Stddev_Samp_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "matches" */
export type Matches_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Matches_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Matches_Stream_Cursor_Value_Input = {
    championship_id?: InputMaybe<Scalars['Int']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    event_id?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    match_type_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Matches_Sum_Fields = {
    __typename?: 'matches_sum_fields';
    championship_id?: Maybe<Scalars['Int']['output']>;
    event_id?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    match_type_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "matches" */
export type Matches_Sum_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_id?: InputMaybe<Order_By>;
};

/** update columns of table "matches" */
export enum Matches_Update_Column {
    /** column name */
    ChampionshipId = 'championship_id',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    EventId = 'event_id',
    /** column name */
    Id = 'id',
    /** column name */
    MatchTypeId = 'match_type_id',
    /** column name */
    UpdatedAt = 'updated_at',
}

export type Matches_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Matches_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Matches_Set_Input>;
    /** filter the rows which have to be updated */
    where: Matches_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Matches_Var_Pop_Fields = {
    __typename?: 'matches_var_pop_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    match_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "matches" */
export type Matches_Var_Pop_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Matches_Var_Samp_Fields = {
    __typename?: 'matches_var_samp_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    match_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "matches" */
export type Matches_Var_Samp_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Matches_Variance_Fields = {
    __typename?: 'matches_variance_fields';
    championship_id?: Maybe<Scalars['Float']['output']>;
    event_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    match_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "matches" */
export type Matches_Variance_Order_By = {
    championship_id?: InputMaybe<Order_By>;
    event_id?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    match_type_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
    __typename?: 'mutation_root';
    /** delete single row from the table: "auth.providers" */
    deleteAuthProvider?: Maybe<AuthProviders>;
    /** delete single row from the table: "auth.provider_requests" */
    deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
    /** delete data from the table: "auth.provider_requests" */
    deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
    /** delete data from the table: "auth.providers" */
    deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
    /** delete single row from the table: "auth.refresh_tokens" */
    deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
    /** delete single row from the table: "auth.refresh_token_types" */
    deleteAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
    /** delete data from the table: "auth.refresh_token_types" */
    deleteAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
    /** delete data from the table: "auth.refresh_tokens" */
    deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
    /** delete single row from the table: "auth.roles" */
    deleteAuthRole?: Maybe<AuthRoles>;
    /** delete data from the table: "auth.roles" */
    deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
    /** delete single row from the table: "auth.user_providers" */
    deleteAuthUserProvider?: Maybe<AuthUserProviders>;
    /** delete data from the table: "auth.user_providers" */
    deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
    /** delete single row from the table: "auth.user_roles" */
    deleteAuthUserRole?: Maybe<AuthUserRoles>;
    /** delete data from the table: "auth.user_roles" */
    deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
    /** delete single row from the table: "auth.user_security_keys" */
    deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
    /** delete data from the table: "auth.user_security_keys" */
    deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
    /** delete single row from the table: "storage.buckets" */
    deleteBucket?: Maybe<Buckets>;
    /** delete data from the table: "storage.buckets" */
    deleteBuckets?: Maybe<Buckets_Mutation_Response>;
    /** delete single row from the table: "storage.files" */
    deleteFile?: Maybe<Files>;
    /** delete data from the table: "storage.files" */
    deleteFiles?: Maybe<Files_Mutation_Response>;
    /** delete single row from the table: "auth.users" */
    deleteUser?: Maybe<Users>;
    /** delete data from the table: "auth.users" */
    deleteUsers?: Maybe<Users_Mutation_Response>;
    /** delete data from the table: "belt_types" */
    delete_belt_types?: Maybe<Belt_Types_Mutation_Response>;
    /** delete single row from the table: "belt_types" */
    delete_belt_types_by_pk?: Maybe<Belt_Types>;
    /** delete data from the table: "body_types" */
    delete_body_types?: Maybe<Body_Types_Mutation_Response>;
    /** delete single row from the table: "body_types" */
    delete_body_types_by_pk?: Maybe<Body_Types>;
    /** delete data from the table: "brands" */
    delete_brands?: Maybe<Brands_Mutation_Response>;
    /** delete single row from the table: "brands" */
    delete_brands_by_pk?: Maybe<Brands>;
    /** delete data from the table: "champions" */
    delete_champions?: Maybe<Champions_Mutation_Response>;
    /** delete single row from the table: "champions" */
    delete_champions_by_pk?: Maybe<Champions>;
    /** delete data from the table: "championships" */
    delete_championships?: Maybe<Championships_Mutation_Response>;
    /** delete single row from the table: "championships" */
    delete_championships_by_pk?: Maybe<Championships>;
    /** delete data from the table: "events" */
    delete_events?: Maybe<Events_Mutation_Response>;
    /** delete single row from the table: "events" */
    delete_events_by_pk?: Maybe<Events>;
    /** delete data from the table: "match_participants" */
    delete_match_participants?: Maybe<Match_Participants_Mutation_Response>;
    /** delete single row from the table: "match_participants" */
    delete_match_participants_by_pk?: Maybe<Match_Participants>;
    /** delete data from the table: "match_type_names" */
    delete_match_type_names?: Maybe<Match_Type_Names_Mutation_Response>;
    /** delete single row from the table: "match_type_names" */
    delete_match_type_names_by_pk?: Maybe<Match_Type_Names>;
    /** delete data from the table: "match_types" */
    delete_match_types?: Maybe<Match_Types_Mutation_Response>;
    /** delete single row from the table: "match_types" */
    delete_match_types_by_pk?: Maybe<Match_Types>;
    /** delete data from the table: "match_winners" */
    delete_match_winners?: Maybe<Match_Winners_Mutation_Response>;
    /** delete single row from the table: "match_winners" */
    delete_match_winners_by_pk?: Maybe<Match_Winners>;
    /** delete data from the table: "matches" */
    delete_matches?: Maybe<Matches_Mutation_Response>;
    /** delete single row from the table: "matches" */
    delete_matches_by_pk?: Maybe<Matches>;
    /** delete data from the table: "promotions" */
    delete_promotions?: Maybe<Promotions_Mutation_Response>;
    /** delete single row from the table: "promotions" */
    delete_promotions_by_pk?: Maybe<Promotions>;
    /** delete data from the table: "tag_team_members" */
    delete_tag_team_members?: Maybe<Tag_Team_Members_Mutation_Response>;
    /** delete single row from the table: "tag_team_members" */
    delete_tag_team_members_by_pk?: Maybe<Tag_Team_Members>;
    /** delete data from the table: "tag_teams" */
    delete_tag_teams?: Maybe<Tag_Teams_Mutation_Response>;
    /** delete single row from the table: "tag_teams" */
    delete_tag_teams_by_pk?: Maybe<Tag_Teams>;
    /** delete data from the table: "wrestlers" */
    delete_wrestlers?: Maybe<Wrestlers_Mutation_Response>;
    /** delete single row from the table: "wrestlers" */
    delete_wrestlers_by_pk?: Maybe<Wrestlers>;
    /** insert a single row into the table: "auth.providers" */
    insertAuthProvider?: Maybe<AuthProviders>;
    /** insert a single row into the table: "auth.provider_requests" */
    insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
    /** insert data into the table: "auth.provider_requests" */
    insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
    /** insert data into the table: "auth.providers" */
    insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
    /** insert a single row into the table: "auth.refresh_tokens" */
    insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
    /** insert a single row into the table: "auth.refresh_token_types" */
    insertAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
    /** insert data into the table: "auth.refresh_token_types" */
    insertAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
    /** insert data into the table: "auth.refresh_tokens" */
    insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
    /** insert a single row into the table: "auth.roles" */
    insertAuthRole?: Maybe<AuthRoles>;
    /** insert data into the table: "auth.roles" */
    insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
    /** insert a single row into the table: "auth.user_providers" */
    insertAuthUserProvider?: Maybe<AuthUserProviders>;
    /** insert data into the table: "auth.user_providers" */
    insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
    /** insert a single row into the table: "auth.user_roles" */
    insertAuthUserRole?: Maybe<AuthUserRoles>;
    /** insert data into the table: "auth.user_roles" */
    insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
    /** insert a single row into the table: "auth.user_security_keys" */
    insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
    /** insert data into the table: "auth.user_security_keys" */
    insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
    /** insert a single row into the table: "storage.buckets" */
    insertBucket?: Maybe<Buckets>;
    /** insert data into the table: "storage.buckets" */
    insertBuckets?: Maybe<Buckets_Mutation_Response>;
    /** insert a single row into the table: "storage.files" */
    insertFile?: Maybe<Files>;
    /** insert data into the table: "storage.files" */
    insertFiles?: Maybe<Files_Mutation_Response>;
    /** insert a single row into the table: "auth.users" */
    insertUser?: Maybe<Users>;
    /** insert data into the table: "auth.users" */
    insertUsers?: Maybe<Users_Mutation_Response>;
    /** insert data into the table: "belt_types" */
    insert_belt_types?: Maybe<Belt_Types_Mutation_Response>;
    /** insert a single row into the table: "belt_types" */
    insert_belt_types_one?: Maybe<Belt_Types>;
    /** insert data into the table: "body_types" */
    insert_body_types?: Maybe<Body_Types_Mutation_Response>;
    /** insert a single row into the table: "body_types" */
    insert_body_types_one?: Maybe<Body_Types>;
    /** insert data into the table: "brands" */
    insert_brands?: Maybe<Brands_Mutation_Response>;
    /** insert a single row into the table: "brands" */
    insert_brands_one?: Maybe<Brands>;
    /** insert data into the table: "champions" */
    insert_champions?: Maybe<Champions_Mutation_Response>;
    /** insert a single row into the table: "champions" */
    insert_champions_one?: Maybe<Champions>;
    /** insert data into the table: "championships" */
    insert_championships?: Maybe<Championships_Mutation_Response>;
    /** insert a single row into the table: "championships" */
    insert_championships_one?: Maybe<Championships>;
    /** insert data into the table: "events" */
    insert_events?: Maybe<Events_Mutation_Response>;
    /** insert a single row into the table: "events" */
    insert_events_one?: Maybe<Events>;
    /** insert data into the table: "match_participants" */
    insert_match_participants?: Maybe<Match_Participants_Mutation_Response>;
    /** insert a single row into the table: "match_participants" */
    insert_match_participants_one?: Maybe<Match_Participants>;
    /** insert data into the table: "match_type_names" */
    insert_match_type_names?: Maybe<Match_Type_Names_Mutation_Response>;
    /** insert a single row into the table: "match_type_names" */
    insert_match_type_names_one?: Maybe<Match_Type_Names>;
    /** insert data into the table: "match_types" */
    insert_match_types?: Maybe<Match_Types_Mutation_Response>;
    /** insert a single row into the table: "match_types" */
    insert_match_types_one?: Maybe<Match_Types>;
    /** insert data into the table: "match_winners" */
    insert_match_winners?: Maybe<Match_Winners_Mutation_Response>;
    /** insert a single row into the table: "match_winners" */
    insert_match_winners_one?: Maybe<Match_Winners>;
    /** insert data into the table: "matches" */
    insert_matches?: Maybe<Matches_Mutation_Response>;
    /** insert a single row into the table: "matches" */
    insert_matches_one?: Maybe<Matches>;
    /** insert data into the table: "promotions" */
    insert_promotions?: Maybe<Promotions_Mutation_Response>;
    /** insert a single row into the table: "promotions" */
    insert_promotions_one?: Maybe<Promotions>;
    /** insert data into the table: "tag_team_members" */
    insert_tag_team_members?: Maybe<Tag_Team_Members_Mutation_Response>;
    /** insert a single row into the table: "tag_team_members" */
    insert_tag_team_members_one?: Maybe<Tag_Team_Members>;
    /** insert data into the table: "tag_teams" */
    insert_tag_teams?: Maybe<Tag_Teams_Mutation_Response>;
    /** insert a single row into the table: "tag_teams" */
    insert_tag_teams_one?: Maybe<Tag_Teams>;
    /** insert data into the table: "wrestlers" */
    insert_wrestlers?: Maybe<Wrestlers_Mutation_Response>;
    /** insert a single row into the table: "wrestlers" */
    insert_wrestlers_one?: Maybe<Wrestlers>;
    /** update single row of the table: "auth.providers" */
    updateAuthProvider?: Maybe<AuthProviders>;
    /** update single row of the table: "auth.provider_requests" */
    updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
    /** update data of the table: "auth.provider_requests" */
    updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
    /** update data of the table: "auth.providers" */
    updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
    /** update single row of the table: "auth.refresh_tokens" */
    updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
    /** update single row of the table: "auth.refresh_token_types" */
    updateAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
    /** update data of the table: "auth.refresh_token_types" */
    updateAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
    /** update data of the table: "auth.refresh_tokens" */
    updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
    /** update single row of the table: "auth.roles" */
    updateAuthRole?: Maybe<AuthRoles>;
    /** update data of the table: "auth.roles" */
    updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
    /** update single row of the table: "auth.user_providers" */
    updateAuthUserProvider?: Maybe<AuthUserProviders>;
    /** update data of the table: "auth.user_providers" */
    updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
    /** update single row of the table: "auth.user_roles" */
    updateAuthUserRole?: Maybe<AuthUserRoles>;
    /** update data of the table: "auth.user_roles" */
    updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
    /** update single row of the table: "auth.user_security_keys" */
    updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
    /** update data of the table: "auth.user_security_keys" */
    updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
    /** update single row of the table: "storage.buckets" */
    updateBucket?: Maybe<Buckets>;
    /** update data of the table: "storage.buckets" */
    updateBuckets?: Maybe<Buckets_Mutation_Response>;
    /** update single row of the table: "storage.files" */
    updateFile?: Maybe<Files>;
    /** update data of the table: "storage.files" */
    updateFiles?: Maybe<Files_Mutation_Response>;
    /** update single row of the table: "auth.users" */
    updateUser?: Maybe<Users>;
    /** update data of the table: "auth.users" */
    updateUsers?: Maybe<Users_Mutation_Response>;
    /** update multiples rows of table: "auth.provider_requests" */
    update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
    /** update multiples rows of table: "auth.providers" */
    update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
    /** update multiples rows of table: "auth.refresh_token_types" */
    update_authRefreshTokenTypes_many?: Maybe<
        Array<Maybe<AuthRefreshTokenTypes_Mutation_Response>>
    >;
    /** update multiples rows of table: "auth.refresh_tokens" */
    update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
    /** update multiples rows of table: "auth.roles" */
    update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
    /** update multiples rows of table: "auth.user_providers" */
    update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
    /** update multiples rows of table: "auth.user_roles" */
    update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
    /** update multiples rows of table: "auth.user_security_keys" */
    update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
    /** update data of the table: "belt_types" */
    update_belt_types?: Maybe<Belt_Types_Mutation_Response>;
    /** update single row of the table: "belt_types" */
    update_belt_types_by_pk?: Maybe<Belt_Types>;
    /** update multiples rows of table: "belt_types" */
    update_belt_types_many?: Maybe<Array<Maybe<Belt_Types_Mutation_Response>>>;
    /** update data of the table: "body_types" */
    update_body_types?: Maybe<Body_Types_Mutation_Response>;
    /** update single row of the table: "body_types" */
    update_body_types_by_pk?: Maybe<Body_Types>;
    /** update multiples rows of table: "body_types" */
    update_body_types_many?: Maybe<Array<Maybe<Body_Types_Mutation_Response>>>;
    /** update data of the table: "brands" */
    update_brands?: Maybe<Brands_Mutation_Response>;
    /** update single row of the table: "brands" */
    update_brands_by_pk?: Maybe<Brands>;
    /** update multiples rows of table: "brands" */
    update_brands_many?: Maybe<Array<Maybe<Brands_Mutation_Response>>>;
    /** update multiples rows of table: "storage.buckets" */
    update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
    /** update data of the table: "champions" */
    update_champions?: Maybe<Champions_Mutation_Response>;
    /** update single row of the table: "champions" */
    update_champions_by_pk?: Maybe<Champions>;
    /** update multiples rows of table: "champions" */
    update_champions_many?: Maybe<Array<Maybe<Champions_Mutation_Response>>>;
    /** update data of the table: "championships" */
    update_championships?: Maybe<Championships_Mutation_Response>;
    /** update single row of the table: "championships" */
    update_championships_by_pk?: Maybe<Championships>;
    /** update multiples rows of table: "championships" */
    update_championships_many?: Maybe<Array<Maybe<Championships_Mutation_Response>>>;
    /** update data of the table: "events" */
    update_events?: Maybe<Events_Mutation_Response>;
    /** update single row of the table: "events" */
    update_events_by_pk?: Maybe<Events>;
    /** update multiples rows of table: "events" */
    update_events_many?: Maybe<Array<Maybe<Events_Mutation_Response>>>;
    /** update multiples rows of table: "storage.files" */
    update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
    /** update data of the table: "match_participants" */
    update_match_participants?: Maybe<Match_Participants_Mutation_Response>;
    /** update single row of the table: "match_participants" */
    update_match_participants_by_pk?: Maybe<Match_Participants>;
    /** update multiples rows of table: "match_participants" */
    update_match_participants_many?: Maybe<Array<Maybe<Match_Participants_Mutation_Response>>>;
    /** update data of the table: "match_type_names" */
    update_match_type_names?: Maybe<Match_Type_Names_Mutation_Response>;
    /** update single row of the table: "match_type_names" */
    update_match_type_names_by_pk?: Maybe<Match_Type_Names>;
    /** update multiples rows of table: "match_type_names" */
    update_match_type_names_many?: Maybe<Array<Maybe<Match_Type_Names_Mutation_Response>>>;
    /** update data of the table: "match_types" */
    update_match_types?: Maybe<Match_Types_Mutation_Response>;
    /** update single row of the table: "match_types" */
    update_match_types_by_pk?: Maybe<Match_Types>;
    /** update multiples rows of table: "match_types" */
    update_match_types_many?: Maybe<Array<Maybe<Match_Types_Mutation_Response>>>;
    /** update data of the table: "match_winners" */
    update_match_winners?: Maybe<Match_Winners_Mutation_Response>;
    /** update single row of the table: "match_winners" */
    update_match_winners_by_pk?: Maybe<Match_Winners>;
    /** update multiples rows of table: "match_winners" */
    update_match_winners_many?: Maybe<Array<Maybe<Match_Winners_Mutation_Response>>>;
    /** update data of the table: "matches" */
    update_matches?: Maybe<Matches_Mutation_Response>;
    /** update single row of the table: "matches" */
    update_matches_by_pk?: Maybe<Matches>;
    /** update multiples rows of table: "matches" */
    update_matches_many?: Maybe<Array<Maybe<Matches_Mutation_Response>>>;
    /** update data of the table: "promotions" */
    update_promotions?: Maybe<Promotions_Mutation_Response>;
    /** update single row of the table: "promotions" */
    update_promotions_by_pk?: Maybe<Promotions>;
    /** update multiples rows of table: "promotions" */
    update_promotions_many?: Maybe<Array<Maybe<Promotions_Mutation_Response>>>;
    /** update data of the table: "tag_team_members" */
    update_tag_team_members?: Maybe<Tag_Team_Members_Mutation_Response>;
    /** update single row of the table: "tag_team_members" */
    update_tag_team_members_by_pk?: Maybe<Tag_Team_Members>;
    /** update multiples rows of table: "tag_team_members" */
    update_tag_team_members_many?: Maybe<Array<Maybe<Tag_Team_Members_Mutation_Response>>>;
    /** update data of the table: "tag_teams" */
    update_tag_teams?: Maybe<Tag_Teams_Mutation_Response>;
    /** update single row of the table: "tag_teams" */
    update_tag_teams_by_pk?: Maybe<Tag_Teams>;
    /** update multiples rows of table: "tag_teams" */
    update_tag_teams_many?: Maybe<Array<Maybe<Tag_Teams_Mutation_Response>>>;
    /** update multiples rows of table: "auth.users" */
    update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
    /** update data of the table: "wrestlers" */
    update_wrestlers?: Maybe<Wrestlers_Mutation_Response>;
    /** update single row of the table: "wrestlers" */
    update_wrestlers_by_pk?: Maybe<Wrestlers>;
    /** update multiples rows of table: "wrestlers" */
    update_wrestlers_many?: Maybe<Array<Maybe<Wrestlers_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
    id: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
    id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
    where: AuthProviderRequests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
    where: AuthProviders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
    id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypeArgs = {
    value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypesArgs = {
    where: AuthRefreshTokenTypes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
    where: AuthRefreshTokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
    role: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
    where: AuthRoles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
    id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
    where: AuthUserProviders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
    id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
    where: AuthUserRoles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
    id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
    where: AuthUserSecurityKeys_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
    id: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
    where: Buckets_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteFileArgs = {
    id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
    where: Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteUserArgs = {
    id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
    where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Belt_TypesArgs = {
    where: Belt_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Belt_Types_By_PkArgs = {
    id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Body_TypesArgs = {
    where: Body_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Body_Types_By_PkArgs = {
    id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_BrandsArgs = {
    where: Brands_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Brands_By_PkArgs = {
    id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ChampionsArgs = {
    where: Champions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Champions_By_PkArgs = {
    championship_id: Scalars['Int']['input'];
    wrestler_id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ChampionshipsArgs = {
    where: Championships_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Championships_By_PkArgs = {
    id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_EventsArgs = {
    where: Events_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Events_By_PkArgs = {
    id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Match_ParticipantsArgs = {
    where: Match_Participants_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Match_Participants_By_PkArgs = {
    match_id: Scalars['Int']['input'];
    participant_id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Match_Type_NamesArgs = {
    where: Match_Type_Names_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Match_Type_Names_By_PkArgs = {
    id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Match_TypesArgs = {
    where: Match_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Match_Types_By_PkArgs = {
    id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Match_WinnersArgs = {
    where: Match_Winners_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Match_Winners_By_PkArgs = {
    match_id: Scalars['Int']['input'];
    winner_id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_MatchesArgs = {
    where: Matches_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Matches_By_PkArgs = {
    id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_PromotionsArgs = {
    where: Promotions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Promotions_By_PkArgs = {
    id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Tag_Team_MembersArgs = {
    where: Tag_Team_Members_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tag_Team_Members_By_PkArgs = {
    member_id: Scalars['Int']['input'];
    tag_team_id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Tag_TeamsArgs = {
    where: Tag_Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tag_Teams_By_PkArgs = {
    id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_WrestlersArgs = {
    where: Wrestlers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Wrestlers_By_PkArgs = {
    id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
    object: AuthProviders_Insert_Input;
    on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
    object: AuthProviderRequests_Insert_Input;
    on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
    objects: Array<AuthProviderRequests_Insert_Input>;
    on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
    objects: Array<AuthProviders_Insert_Input>;
    on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
    object: AuthRefreshTokens_Insert_Input;
    on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypeArgs = {
    object: AuthRefreshTokenTypes_Insert_Input;
    on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypesArgs = {
    objects: Array<AuthRefreshTokenTypes_Insert_Input>;
    on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
    objects: Array<AuthRefreshTokens_Insert_Input>;
    on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
    object: AuthRoles_Insert_Input;
    on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
    objects: Array<AuthRoles_Insert_Input>;
    on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
    object: AuthUserProviders_Insert_Input;
    on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
    objects: Array<AuthUserProviders_Insert_Input>;
    on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
    object: AuthUserRoles_Insert_Input;
    on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
    objects: Array<AuthUserRoles_Insert_Input>;
    on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
    object: AuthUserSecurityKeys_Insert_Input;
    on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
    objects: Array<AuthUserSecurityKeys_Insert_Input>;
    on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertBucketArgs = {
    object: Buckets_Insert_Input;
    on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
    objects: Array<Buckets_Insert_Input>;
    on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertFileArgs = {
    object: Files_Insert_Input;
    on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertFilesArgs = {
    objects: Array<Files_Insert_Input>;
    on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertUserArgs = {
    object: Users_Insert_Input;
    on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertUsersArgs = {
    objects: Array<Users_Insert_Input>;
    on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Belt_TypesArgs = {
    objects: Array<Belt_Types_Insert_Input>;
    on_conflict?: InputMaybe<Belt_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Belt_Types_OneArgs = {
    object: Belt_Types_Insert_Input;
    on_conflict?: InputMaybe<Belt_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Body_TypesArgs = {
    objects: Array<Body_Types_Insert_Input>;
    on_conflict?: InputMaybe<Body_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Body_Types_OneArgs = {
    object: Body_Types_Insert_Input;
    on_conflict?: InputMaybe<Body_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BrandsArgs = {
    objects: Array<Brands_Insert_Input>;
    on_conflict?: InputMaybe<Brands_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Brands_OneArgs = {
    object: Brands_Insert_Input;
    on_conflict?: InputMaybe<Brands_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ChampionsArgs = {
    objects: Array<Champions_Insert_Input>;
    on_conflict?: InputMaybe<Champions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Champions_OneArgs = {
    object: Champions_Insert_Input;
    on_conflict?: InputMaybe<Champions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ChampionshipsArgs = {
    objects: Array<Championships_Insert_Input>;
    on_conflict?: InputMaybe<Championships_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Championships_OneArgs = {
    object: Championships_Insert_Input;
    on_conflict?: InputMaybe<Championships_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_EventsArgs = {
    objects: Array<Events_Insert_Input>;
    on_conflict?: InputMaybe<Events_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Events_OneArgs = {
    object: Events_Insert_Input;
    on_conflict?: InputMaybe<Events_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Match_ParticipantsArgs = {
    objects: Array<Match_Participants_Insert_Input>;
    on_conflict?: InputMaybe<Match_Participants_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Match_Participants_OneArgs = {
    object: Match_Participants_Insert_Input;
    on_conflict?: InputMaybe<Match_Participants_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Match_Type_NamesArgs = {
    objects: Array<Match_Type_Names_Insert_Input>;
    on_conflict?: InputMaybe<Match_Type_Names_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Match_Type_Names_OneArgs = {
    object: Match_Type_Names_Insert_Input;
    on_conflict?: InputMaybe<Match_Type_Names_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Match_TypesArgs = {
    objects: Array<Match_Types_Insert_Input>;
    on_conflict?: InputMaybe<Match_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Match_Types_OneArgs = {
    object: Match_Types_Insert_Input;
    on_conflict?: InputMaybe<Match_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Match_WinnersArgs = {
    objects: Array<Match_Winners_Insert_Input>;
    on_conflict?: InputMaybe<Match_Winners_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Match_Winners_OneArgs = {
    object: Match_Winners_Insert_Input;
    on_conflict?: InputMaybe<Match_Winners_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MatchesArgs = {
    objects: Array<Matches_Insert_Input>;
    on_conflict?: InputMaybe<Matches_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Matches_OneArgs = {
    object: Matches_Insert_Input;
    on_conflict?: InputMaybe<Matches_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PromotionsArgs = {
    objects: Array<Promotions_Insert_Input>;
    on_conflict?: InputMaybe<Promotions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Promotions_OneArgs = {
    object: Promotions_Insert_Input;
    on_conflict?: InputMaybe<Promotions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tag_Team_MembersArgs = {
    objects: Array<Tag_Team_Members_Insert_Input>;
    on_conflict?: InputMaybe<Tag_Team_Members_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tag_Team_Members_OneArgs = {
    object: Tag_Team_Members_Insert_Input;
    on_conflict?: InputMaybe<Tag_Team_Members_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tag_TeamsArgs = {
    objects: Array<Tag_Teams_Insert_Input>;
    on_conflict?: InputMaybe<Tag_Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tag_Teams_OneArgs = {
    object: Tag_Teams_Insert_Input;
    on_conflict?: InputMaybe<Tag_Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_WrestlersArgs = {
    objects: Array<Wrestlers_Insert_Input>;
    on_conflict?: InputMaybe<Wrestlers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Wrestlers_OneArgs = {
    object: Wrestlers_Insert_Input;
    on_conflict?: InputMaybe<Wrestlers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
    _set?: InputMaybe<AuthProviders_Set_Input>;
    pk_columns: AuthProviders_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
    _append?: InputMaybe<AuthProviderRequests_Append_Input>;
    _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
    _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
    _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
    _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
    _set?: InputMaybe<AuthProviderRequests_Set_Input>;
    pk_columns: AuthProviderRequests_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
    _append?: InputMaybe<AuthProviderRequests_Append_Input>;
    _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
    _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
    _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
    _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
    _set?: InputMaybe<AuthProviderRequests_Set_Input>;
    where: AuthProviderRequests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
    _set?: InputMaybe<AuthProviders_Set_Input>;
    where: AuthProviders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
    _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
    _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
    _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
    _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
    _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
    _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
    pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypeArgs = {
    _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
    pk_columns: AuthRefreshTokenTypes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypesArgs = {
    _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
    where: AuthRefreshTokenTypes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
    _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
    _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
    _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
    _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
    _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
    _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
    where: AuthRefreshTokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
    _set?: InputMaybe<AuthRoles_Set_Input>;
    pk_columns: AuthRoles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
    _set?: InputMaybe<AuthRoles_Set_Input>;
    where: AuthRoles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
    _set?: InputMaybe<AuthUserProviders_Set_Input>;
    pk_columns: AuthUserProviders_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
    _set?: InputMaybe<AuthUserProviders_Set_Input>;
    where: AuthUserProviders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
    _set?: InputMaybe<AuthUserRoles_Set_Input>;
    pk_columns: AuthUserRoles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
    _set?: InputMaybe<AuthUserRoles_Set_Input>;
    where: AuthUserRoles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
    _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
    _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
    pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
    _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
    _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
    where: AuthUserSecurityKeys_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
    _inc?: InputMaybe<Buckets_Inc_Input>;
    _set?: InputMaybe<Buckets_Set_Input>;
    pk_columns: Buckets_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
    _inc?: InputMaybe<Buckets_Inc_Input>;
    _set?: InputMaybe<Buckets_Set_Input>;
    where: Buckets_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateFileArgs = {
    _inc?: InputMaybe<Files_Inc_Input>;
    _set?: InputMaybe<Files_Set_Input>;
    pk_columns: Files_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
    _inc?: InputMaybe<Files_Inc_Input>;
    _set?: InputMaybe<Files_Set_Input>;
    where: Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateUserArgs = {
    _append?: InputMaybe<Users_Append_Input>;
    _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
    _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
    _delete_key?: InputMaybe<Users_Delete_Key_Input>;
    _prepend?: InputMaybe<Users_Prepend_Input>;
    _set?: InputMaybe<Users_Set_Input>;
    pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
    _append?: InputMaybe<Users_Append_Input>;
    _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
    _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
    _delete_key?: InputMaybe<Users_Delete_Key_Input>;
    _prepend?: InputMaybe<Users_Prepend_Input>;
    _set?: InputMaybe<Users_Set_Input>;
    where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
    updates: Array<AuthProviderRequests_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
    updates: Array<AuthProviders_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokenTypes_ManyArgs = {
    updates: Array<AuthRefreshTokenTypes_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
    updates: Array<AuthRefreshTokens_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
    updates: Array<AuthRoles_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
    updates: Array<AuthUserProviders_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
    updates: Array<AuthUserRoles_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
    updates: Array<AuthUserSecurityKeys_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Belt_TypesArgs = {
    _inc?: InputMaybe<Belt_Types_Inc_Input>;
    _set?: InputMaybe<Belt_Types_Set_Input>;
    where: Belt_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Belt_Types_By_PkArgs = {
    _inc?: InputMaybe<Belt_Types_Inc_Input>;
    _set?: InputMaybe<Belt_Types_Set_Input>;
    pk_columns: Belt_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Belt_Types_ManyArgs = {
    updates: Array<Belt_Types_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Body_TypesArgs = {
    _inc?: InputMaybe<Body_Types_Inc_Input>;
    _set?: InputMaybe<Body_Types_Set_Input>;
    where: Body_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Body_Types_By_PkArgs = {
    _inc?: InputMaybe<Body_Types_Inc_Input>;
    _set?: InputMaybe<Body_Types_Set_Input>;
    pk_columns: Body_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Body_Types_ManyArgs = {
    updates: Array<Body_Types_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_BrandsArgs = {
    _inc?: InputMaybe<Brands_Inc_Input>;
    _set?: InputMaybe<Brands_Set_Input>;
    where: Brands_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Brands_By_PkArgs = {
    _inc?: InputMaybe<Brands_Inc_Input>;
    _set?: InputMaybe<Brands_Set_Input>;
    pk_columns: Brands_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Brands_ManyArgs = {
    updates: Array<Brands_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
    updates: Array<Buckets_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ChampionsArgs = {
    _inc?: InputMaybe<Champions_Inc_Input>;
    _set?: InputMaybe<Champions_Set_Input>;
    where: Champions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Champions_By_PkArgs = {
    _inc?: InputMaybe<Champions_Inc_Input>;
    _set?: InputMaybe<Champions_Set_Input>;
    pk_columns: Champions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Champions_ManyArgs = {
    updates: Array<Champions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ChampionshipsArgs = {
    _inc?: InputMaybe<Championships_Inc_Input>;
    _set?: InputMaybe<Championships_Set_Input>;
    where: Championships_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Championships_By_PkArgs = {
    _inc?: InputMaybe<Championships_Inc_Input>;
    _set?: InputMaybe<Championships_Set_Input>;
    pk_columns: Championships_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Championships_ManyArgs = {
    updates: Array<Championships_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_EventsArgs = {
    _inc?: InputMaybe<Events_Inc_Input>;
    _set?: InputMaybe<Events_Set_Input>;
    where: Events_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Events_By_PkArgs = {
    _inc?: InputMaybe<Events_Inc_Input>;
    _set?: InputMaybe<Events_Set_Input>;
    pk_columns: Events_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Events_ManyArgs = {
    updates: Array<Events_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
    updates: Array<Files_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Match_ParticipantsArgs = {
    _inc?: InputMaybe<Match_Participants_Inc_Input>;
    _set?: InputMaybe<Match_Participants_Set_Input>;
    where: Match_Participants_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Match_Participants_By_PkArgs = {
    _inc?: InputMaybe<Match_Participants_Inc_Input>;
    _set?: InputMaybe<Match_Participants_Set_Input>;
    pk_columns: Match_Participants_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Match_Participants_ManyArgs = {
    updates: Array<Match_Participants_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Match_Type_NamesArgs = {
    _inc?: InputMaybe<Match_Type_Names_Inc_Input>;
    _set?: InputMaybe<Match_Type_Names_Set_Input>;
    where: Match_Type_Names_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Match_Type_Names_By_PkArgs = {
    _inc?: InputMaybe<Match_Type_Names_Inc_Input>;
    _set?: InputMaybe<Match_Type_Names_Set_Input>;
    pk_columns: Match_Type_Names_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Match_Type_Names_ManyArgs = {
    updates: Array<Match_Type_Names_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Match_TypesArgs = {
    _inc?: InputMaybe<Match_Types_Inc_Input>;
    _set?: InputMaybe<Match_Types_Set_Input>;
    where: Match_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Match_Types_By_PkArgs = {
    _inc?: InputMaybe<Match_Types_Inc_Input>;
    _set?: InputMaybe<Match_Types_Set_Input>;
    pk_columns: Match_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Match_Types_ManyArgs = {
    updates: Array<Match_Types_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Match_WinnersArgs = {
    _inc?: InputMaybe<Match_Winners_Inc_Input>;
    _set?: InputMaybe<Match_Winners_Set_Input>;
    where: Match_Winners_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Match_Winners_By_PkArgs = {
    _inc?: InputMaybe<Match_Winners_Inc_Input>;
    _set?: InputMaybe<Match_Winners_Set_Input>;
    pk_columns: Match_Winners_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Match_Winners_ManyArgs = {
    updates: Array<Match_Winners_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_MatchesArgs = {
    _inc?: InputMaybe<Matches_Inc_Input>;
    _set?: InputMaybe<Matches_Set_Input>;
    where: Matches_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Matches_By_PkArgs = {
    _inc?: InputMaybe<Matches_Inc_Input>;
    _set?: InputMaybe<Matches_Set_Input>;
    pk_columns: Matches_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Matches_ManyArgs = {
    updates: Array<Matches_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PromotionsArgs = {
    _inc?: InputMaybe<Promotions_Inc_Input>;
    _set?: InputMaybe<Promotions_Set_Input>;
    where: Promotions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Promotions_By_PkArgs = {
    _inc?: InputMaybe<Promotions_Inc_Input>;
    _set?: InputMaybe<Promotions_Set_Input>;
    pk_columns: Promotions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Promotions_ManyArgs = {
    updates: Array<Promotions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Tag_Team_MembersArgs = {
    _inc?: InputMaybe<Tag_Team_Members_Inc_Input>;
    _set?: InputMaybe<Tag_Team_Members_Set_Input>;
    where: Tag_Team_Members_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tag_Team_Members_By_PkArgs = {
    _inc?: InputMaybe<Tag_Team_Members_Inc_Input>;
    _set?: InputMaybe<Tag_Team_Members_Set_Input>;
    pk_columns: Tag_Team_Members_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Tag_Team_Members_ManyArgs = {
    updates: Array<Tag_Team_Members_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Tag_TeamsArgs = {
    _inc?: InputMaybe<Tag_Teams_Inc_Input>;
    _set?: InputMaybe<Tag_Teams_Set_Input>;
    where: Tag_Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tag_Teams_By_PkArgs = {
    _inc?: InputMaybe<Tag_Teams_Inc_Input>;
    _set?: InputMaybe<Tag_Teams_Set_Input>;
    pk_columns: Tag_Teams_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Tag_Teams_ManyArgs = {
    updates: Array<Tag_Teams_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
    updates: Array<Users_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_WrestlersArgs = {
    _inc?: InputMaybe<Wrestlers_Inc_Input>;
    _set?: InputMaybe<Wrestlers_Set_Input>;
    where: Wrestlers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Wrestlers_By_PkArgs = {
    _inc?: InputMaybe<Wrestlers_Inc_Input>;
    _set?: InputMaybe<Wrestlers_Set_Input>;
    pk_columns: Wrestlers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Wrestlers_ManyArgs = {
    updates: Array<Wrestlers_Updates>;
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
    DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "promotions" */
export type Promotions = {
    __typename?: 'promotions';
    active: Scalars['Boolean']['output'];
    /** An array relationship */
    brands: Array<Brands>;
    /** An aggregate relationship */
    brands_aggregate: Brands_Aggregate;
    created_at: Scalars['timestamptz']['output'];
    full_name: Scalars['String']['output'];
    id: Scalars['Int']['output'];
    /** An array relationship */
    irl_wrestlers: Array<Wrestlers>;
    /** An aggregate relationship */
    irl_wrestlers_aggregate: Wrestlers_Aggregate;
    short_name: Scalars['String']['output'];
    updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "promotions" */
export type PromotionsBrandsArgs = {
    distinct_on?: InputMaybe<Array<Brands_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Brands_Order_By>>;
    where?: InputMaybe<Brands_Bool_Exp>;
};

/** columns and relationships of "promotions" */
export type PromotionsBrands_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Brands_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Brands_Order_By>>;
    where?: InputMaybe<Brands_Bool_Exp>;
};

/** columns and relationships of "promotions" */
export type PromotionsIrl_WrestlersArgs = {
    distinct_on?: InputMaybe<Array<Wrestlers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Wrestlers_Order_By>>;
    where?: InputMaybe<Wrestlers_Bool_Exp>;
};

/** columns and relationships of "promotions" */
export type PromotionsIrl_Wrestlers_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Wrestlers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Wrestlers_Order_By>>;
    where?: InputMaybe<Wrestlers_Bool_Exp>;
};

/** aggregated selection of "promotions" */
export type Promotions_Aggregate = {
    __typename?: 'promotions_aggregate';
    aggregate?: Maybe<Promotions_Aggregate_Fields>;
    nodes: Array<Promotions>;
};

/** aggregate fields of "promotions" */
export type Promotions_Aggregate_Fields = {
    __typename?: 'promotions_aggregate_fields';
    avg?: Maybe<Promotions_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Promotions_Max_Fields>;
    min?: Maybe<Promotions_Min_Fields>;
    stddev?: Maybe<Promotions_Stddev_Fields>;
    stddev_pop?: Maybe<Promotions_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Promotions_Stddev_Samp_Fields>;
    sum?: Maybe<Promotions_Sum_Fields>;
    var_pop?: Maybe<Promotions_Var_Pop_Fields>;
    var_samp?: Maybe<Promotions_Var_Samp_Fields>;
    variance?: Maybe<Promotions_Variance_Fields>;
};

/** aggregate fields of "promotions" */
export type Promotions_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Promotions_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Promotions_Avg_Fields = {
    __typename?: 'promotions_avg_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "promotions". All fields are combined with a logical 'AND'. */
export type Promotions_Bool_Exp = {
    _and?: InputMaybe<Array<Promotions_Bool_Exp>>;
    _not?: InputMaybe<Promotions_Bool_Exp>;
    _or?: InputMaybe<Array<Promotions_Bool_Exp>>;
    active?: InputMaybe<Boolean_Comparison_Exp>;
    brands?: InputMaybe<Brands_Bool_Exp>;
    brands_aggregate?: InputMaybe<Brands_Aggregate_Bool_Exp>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    full_name?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    irl_wrestlers?: InputMaybe<Wrestlers_Bool_Exp>;
    irl_wrestlers_aggregate?: InputMaybe<Wrestlers_Aggregate_Bool_Exp>;
    short_name?: InputMaybe<String_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "promotions" */
export enum Promotions_Constraint {
    /** unique or primary key constraint on columns "id" */
    PromotionsPkey = 'promotions_pkey',
}

/** input type for incrementing numeric columns in table "promotions" */
export type Promotions_Inc_Input = {
    id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "promotions" */
export type Promotions_Insert_Input = {
    active?: InputMaybe<Scalars['Boolean']['input']>;
    brands?: InputMaybe<Brands_Arr_Rel_Insert_Input>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    full_name?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    irl_wrestlers?: InputMaybe<Wrestlers_Arr_Rel_Insert_Input>;
    short_name?: InputMaybe<Scalars['String']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Promotions_Max_Fields = {
    __typename?: 'promotions_max_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    full_name?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    short_name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Promotions_Min_Fields = {
    __typename?: 'promotions_min_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    full_name?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    short_name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "promotions" */
export type Promotions_Mutation_Response = {
    __typename?: 'promotions_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Promotions>;
};

/** input type for inserting object relation for remote table "promotions" */
export type Promotions_Obj_Rel_Insert_Input = {
    data: Promotions_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Promotions_On_Conflict>;
};

/** on_conflict condition type for table "promotions" */
export type Promotions_On_Conflict = {
    constraint: Promotions_Constraint;
    update_columns?: Array<Promotions_Update_Column>;
    where?: InputMaybe<Promotions_Bool_Exp>;
};

/** Ordering options when selecting data from "promotions". */
export type Promotions_Order_By = {
    active?: InputMaybe<Order_By>;
    brands_aggregate?: InputMaybe<Brands_Aggregate_Order_By>;
    created_at?: InputMaybe<Order_By>;
    full_name?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    irl_wrestlers_aggregate?: InputMaybe<Wrestlers_Aggregate_Order_By>;
    short_name?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: promotions */
export type Promotions_Pk_Columns_Input = {
    id: Scalars['Int']['input'];
};

/** select columns of table "promotions" */
export enum Promotions_Select_Column {
    /** column name */
    Active = 'active',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    FullName = 'full_name',
    /** column name */
    Id = 'id',
    /** column name */
    ShortName = 'short_name',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** input type for updating data in table "promotions" */
export type Promotions_Set_Input = {
    active?: InputMaybe<Scalars['Boolean']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    full_name?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    short_name?: InputMaybe<Scalars['String']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Promotions_Stddev_Fields = {
    __typename?: 'promotions_stddev_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Promotions_Stddev_Pop_Fields = {
    __typename?: 'promotions_stddev_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Promotions_Stddev_Samp_Fields = {
    __typename?: 'promotions_stddev_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "promotions" */
export type Promotions_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Promotions_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Promotions_Stream_Cursor_Value_Input = {
    active?: InputMaybe<Scalars['Boolean']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    full_name?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    short_name?: InputMaybe<Scalars['String']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Promotions_Sum_Fields = {
    __typename?: 'promotions_sum_fields';
    id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "promotions" */
export enum Promotions_Update_Column {
    /** column name */
    Active = 'active',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    FullName = 'full_name',
    /** column name */
    Id = 'id',
    /** column name */
    ShortName = 'short_name',
    /** column name */
    UpdatedAt = 'updated_at',
}

export type Promotions_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Promotions_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Promotions_Set_Input>;
    /** filter the rows which have to be updated */
    where: Promotions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Promotions_Var_Pop_Fields = {
    __typename?: 'promotions_var_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Promotions_Var_Samp_Fields = {
    __typename?: 'promotions_var_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Promotions_Variance_Fields = {
    __typename?: 'promotions_variance_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
    __typename?: 'query_root';
    /** fetch data from the table: "auth.providers" using primary key columns */
    authProvider?: Maybe<AuthProviders>;
    /** fetch data from the table: "auth.provider_requests" using primary key columns */
    authProviderRequest?: Maybe<AuthProviderRequests>;
    /** fetch data from the table: "auth.provider_requests" */
    authProviderRequests: Array<AuthProviderRequests>;
    /** fetch aggregated fields from the table: "auth.provider_requests" */
    authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
    /** fetch data from the table: "auth.providers" */
    authProviders: Array<AuthProviders>;
    /** fetch aggregated fields from the table: "auth.providers" */
    authProvidersAggregate: AuthProviders_Aggregate;
    /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
    authRefreshToken?: Maybe<AuthRefreshTokens>;
    /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
    authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
    /** fetch data from the table: "auth.refresh_token_types" */
    authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
    /** fetch aggregated fields from the table: "auth.refresh_token_types" */
    authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
    /** fetch data from the table: "auth.refresh_tokens" */
    authRefreshTokens: Array<AuthRefreshTokens>;
    /** fetch aggregated fields from the table: "auth.refresh_tokens" */
    authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
    /** fetch data from the table: "auth.roles" using primary key columns */
    authRole?: Maybe<AuthRoles>;
    /** fetch data from the table: "auth.roles" */
    authRoles: Array<AuthRoles>;
    /** fetch aggregated fields from the table: "auth.roles" */
    authRolesAggregate: AuthRoles_Aggregate;
    /** fetch data from the table: "auth.user_providers" using primary key columns */
    authUserProvider?: Maybe<AuthUserProviders>;
    /** fetch data from the table: "auth.user_providers" */
    authUserProviders: Array<AuthUserProviders>;
    /** fetch aggregated fields from the table: "auth.user_providers" */
    authUserProvidersAggregate: AuthUserProviders_Aggregate;
    /** fetch data from the table: "auth.user_roles" using primary key columns */
    authUserRole?: Maybe<AuthUserRoles>;
    /** fetch data from the table: "auth.user_roles" */
    authUserRoles: Array<AuthUserRoles>;
    /** fetch aggregated fields from the table: "auth.user_roles" */
    authUserRolesAggregate: AuthUserRoles_Aggregate;
    /** fetch data from the table: "auth.user_security_keys" using primary key columns */
    authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
    /** fetch data from the table: "auth.user_security_keys" */
    authUserSecurityKeys: Array<AuthUserSecurityKeys>;
    /** fetch aggregated fields from the table: "auth.user_security_keys" */
    authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
    /** fetch data from the table: "belt_types" */
    belt_types: Array<Belt_Types>;
    /** fetch aggregated fields from the table: "belt_types" */
    belt_types_aggregate: Belt_Types_Aggregate;
    /** fetch data from the table: "belt_types" using primary key columns */
    belt_types_by_pk?: Maybe<Belt_Types>;
    /** fetch data from the table: "body_types" */
    body_types: Array<Body_Types>;
    /** fetch aggregated fields from the table: "body_types" */
    body_types_aggregate: Body_Types_Aggregate;
    /** fetch data from the table: "body_types" using primary key columns */
    body_types_by_pk?: Maybe<Body_Types>;
    /** An array relationship */
    brands: Array<Brands>;
    /** An aggregate relationship */
    brands_aggregate: Brands_Aggregate;
    /** fetch data from the table: "brands" using primary key columns */
    brands_by_pk?: Maybe<Brands>;
    /** fetch data from the table: "storage.buckets" using primary key columns */
    bucket?: Maybe<Buckets>;
    /** fetch data from the table: "storage.buckets" */
    buckets: Array<Buckets>;
    /** fetch aggregated fields from the table: "storage.buckets" */
    bucketsAggregate: Buckets_Aggregate;
    /** fetch data from the table: "champions" */
    champions: Array<Champions>;
    /** fetch aggregated fields from the table: "champions" */
    champions_aggregate: Champions_Aggregate;
    /** fetch data from the table: "champions" using primary key columns */
    champions_by_pk?: Maybe<Champions>;
    /** fetch data from the table: "championships" */
    championships: Array<Championships>;
    /** fetch aggregated fields from the table: "championships" */
    championships_aggregate: Championships_Aggregate;
    /** fetch data from the table: "championships" using primary key columns */
    championships_by_pk?: Maybe<Championships>;
    /** An array relationship */
    events: Array<Events>;
    /** An aggregate relationship */
    events_aggregate: Events_Aggregate;
    /** fetch data from the table: "events" using primary key columns */
    events_by_pk?: Maybe<Events>;
    /** fetch data from the table: "storage.files" using primary key columns */
    file?: Maybe<Files>;
    /** An array relationship */
    files: Array<Files>;
    /** fetch aggregated fields from the table: "storage.files" */
    filesAggregate: Files_Aggregate;
    /** fetch data from the table: "match_participants" */
    match_participants: Array<Match_Participants>;
    /** fetch aggregated fields from the table: "match_participants" */
    match_participants_aggregate: Match_Participants_Aggregate;
    /** fetch data from the table: "match_participants" using primary key columns */
    match_participants_by_pk?: Maybe<Match_Participants>;
    /** fetch data from the table: "match_type_names" */
    match_type_names: Array<Match_Type_Names>;
    /** fetch aggregated fields from the table: "match_type_names" */
    match_type_names_aggregate: Match_Type_Names_Aggregate;
    /** fetch data from the table: "match_type_names" using primary key columns */
    match_type_names_by_pk?: Maybe<Match_Type_Names>;
    /** An array relationship */
    match_types: Array<Match_Types>;
    /** An aggregate relationship */
    match_types_aggregate: Match_Types_Aggregate;
    /** fetch data from the table: "match_types" using primary key columns */
    match_types_by_pk?: Maybe<Match_Types>;
    /** fetch data from the table: "match_winners" */
    match_winners: Array<Match_Winners>;
    /** fetch aggregated fields from the table: "match_winners" */
    match_winners_aggregate: Match_Winners_Aggregate;
    /** fetch data from the table: "match_winners" using primary key columns */
    match_winners_by_pk?: Maybe<Match_Winners>;
    /** An array relationship */
    matches: Array<Matches>;
    /** An aggregate relationship */
    matches_aggregate: Matches_Aggregate;
    /** fetch data from the table: "matches" using primary key columns */
    matches_by_pk?: Maybe<Matches>;
    /** fetch data from the table: "promotions" */
    promotions: Array<Promotions>;
    /** fetch aggregated fields from the table: "promotions" */
    promotions_aggregate: Promotions_Aggregate;
    /** fetch data from the table: "promotions" using primary key columns */
    promotions_by_pk?: Maybe<Promotions>;
    /** fetch data from the table: "tag_team_members" */
    tag_team_members: Array<Tag_Team_Members>;
    /** fetch aggregated fields from the table: "tag_team_members" */
    tag_team_members_aggregate: Tag_Team_Members_Aggregate;
    /** fetch data from the table: "tag_team_members" using primary key columns */
    tag_team_members_by_pk?: Maybe<Tag_Team_Members>;
    /** fetch data from the table: "tag_teams" */
    tag_teams: Array<Tag_Teams>;
    /** fetch aggregated fields from the table: "tag_teams" */
    tag_teams_aggregate: Tag_Teams_Aggregate;
    /** fetch data from the table: "tag_teams" using primary key columns */
    tag_teams_by_pk?: Maybe<Tag_Teams>;
    /** fetch data from the table: "auth.users" using primary key columns */
    user?: Maybe<Users>;
    /** fetch data from the table: "auth.users" */
    users: Array<Users>;
    /** fetch aggregated fields from the table: "auth.users" */
    usersAggregate: Users_Aggregate;
    /** An array relationship */
    wrestlers: Array<Wrestlers>;
    /** An aggregate relationship */
    wrestlers_aggregate: Wrestlers_Aggregate;
    /** fetch data from the table: "wrestlers" using primary key columns */
    wrestlers_by_pk?: Maybe<Wrestlers>;
};

export type Query_RootAuthProviderArgs = {
    id: Scalars['String']['input'];
};

export type Query_RootAuthProviderRequestArgs = {
    id: Scalars['uuid']['input'];
};

export type Query_RootAuthProviderRequestsArgs = {
    distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
    where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

export type Query_RootAuthProviderRequestsAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
    where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

export type Query_RootAuthProvidersArgs = {
    distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
    where?: InputMaybe<AuthProviders_Bool_Exp>;
};

export type Query_RootAuthProvidersAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
    where?: InputMaybe<AuthProviders_Bool_Exp>;
};

export type Query_RootAuthRefreshTokenArgs = {
    id: Scalars['uuid']['input'];
};

export type Query_RootAuthRefreshTokenTypeArgs = {
    value: Scalars['String']['input'];
};

export type Query_RootAuthRefreshTokenTypesArgs = {
    distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
    where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

export type Query_RootAuthRefreshTokenTypesAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
    where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

export type Query_RootAuthRefreshTokensArgs = {
    distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
    where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Query_RootAuthRefreshTokensAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
    where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Query_RootAuthRoleArgs = {
    role: Scalars['String']['input'];
};

export type Query_RootAuthRolesArgs = {
    distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
    where?: InputMaybe<AuthRoles_Bool_Exp>;
};

export type Query_RootAuthRolesAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
    where?: InputMaybe<AuthRoles_Bool_Exp>;
};

export type Query_RootAuthUserProviderArgs = {
    id: Scalars['uuid']['input'];
};

export type Query_RootAuthUserProvidersArgs = {
    distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
    where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

export type Query_RootAuthUserProvidersAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
    where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

export type Query_RootAuthUserRoleArgs = {
    id: Scalars['uuid']['input'];
};

export type Query_RootAuthUserRolesArgs = {
    distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
    where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

export type Query_RootAuthUserRolesAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
    where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

export type Query_RootAuthUserSecurityKeyArgs = {
    id: Scalars['uuid']['input'];
};

export type Query_RootAuthUserSecurityKeysArgs = {
    distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
    where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Query_RootAuthUserSecurityKeysAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
    where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Query_RootBelt_TypesArgs = {
    distinct_on?: InputMaybe<Array<Belt_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Belt_Types_Order_By>>;
    where?: InputMaybe<Belt_Types_Bool_Exp>;
};

export type Query_RootBelt_Types_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Belt_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Belt_Types_Order_By>>;
    where?: InputMaybe<Belt_Types_Bool_Exp>;
};

export type Query_RootBelt_Types_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Query_RootBody_TypesArgs = {
    distinct_on?: InputMaybe<Array<Body_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Body_Types_Order_By>>;
    where?: InputMaybe<Body_Types_Bool_Exp>;
};

export type Query_RootBody_Types_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Body_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Body_Types_Order_By>>;
    where?: InputMaybe<Body_Types_Bool_Exp>;
};

export type Query_RootBody_Types_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Query_RootBrandsArgs = {
    distinct_on?: InputMaybe<Array<Brands_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Brands_Order_By>>;
    where?: InputMaybe<Brands_Bool_Exp>;
};

export type Query_RootBrands_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Brands_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Brands_Order_By>>;
    where?: InputMaybe<Brands_Bool_Exp>;
};

export type Query_RootBrands_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Query_RootBucketArgs = {
    id: Scalars['String']['input'];
};

export type Query_RootBucketsArgs = {
    distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Buckets_Order_By>>;
    where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Query_RootBucketsAggregateArgs = {
    distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Buckets_Order_By>>;
    where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Query_RootChampionsArgs = {
    distinct_on?: InputMaybe<Array<Champions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Champions_Order_By>>;
    where?: InputMaybe<Champions_Bool_Exp>;
};

export type Query_RootChampions_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Champions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Champions_Order_By>>;
    where?: InputMaybe<Champions_Bool_Exp>;
};

export type Query_RootChampions_By_PkArgs = {
    championship_id: Scalars['Int']['input'];
    wrestler_id: Scalars['Int']['input'];
};

export type Query_RootChampionshipsArgs = {
    distinct_on?: InputMaybe<Array<Championships_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Championships_Order_By>>;
    where?: InputMaybe<Championships_Bool_Exp>;
};

export type Query_RootChampionships_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Championships_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Championships_Order_By>>;
    where?: InputMaybe<Championships_Bool_Exp>;
};

export type Query_RootChampionships_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Query_RootEventsArgs = {
    distinct_on?: InputMaybe<Array<Events_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Events_Order_By>>;
    where?: InputMaybe<Events_Bool_Exp>;
};

export type Query_RootEvents_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Events_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Events_Order_By>>;
    where?: InputMaybe<Events_Bool_Exp>;
};

export type Query_RootEvents_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Query_RootFileArgs = {
    id: Scalars['uuid']['input'];
};

export type Query_RootFilesArgs = {
    distinct_on?: InputMaybe<Array<Files_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Files_Order_By>>;
    where?: InputMaybe<Files_Bool_Exp>;
};

export type Query_RootFilesAggregateArgs = {
    distinct_on?: InputMaybe<Array<Files_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Files_Order_By>>;
    where?: InputMaybe<Files_Bool_Exp>;
};

export type Query_RootMatch_ParticipantsArgs = {
    distinct_on?: InputMaybe<Array<Match_Participants_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Participants_Order_By>>;
    where?: InputMaybe<Match_Participants_Bool_Exp>;
};

export type Query_RootMatch_Participants_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Participants_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Participants_Order_By>>;
    where?: InputMaybe<Match_Participants_Bool_Exp>;
};

export type Query_RootMatch_Participants_By_PkArgs = {
    match_id: Scalars['Int']['input'];
    participant_id: Scalars['Int']['input'];
};

export type Query_RootMatch_Type_NamesArgs = {
    distinct_on?: InputMaybe<Array<Match_Type_Names_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Type_Names_Order_By>>;
    where?: InputMaybe<Match_Type_Names_Bool_Exp>;
};

export type Query_RootMatch_Type_Names_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Type_Names_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Type_Names_Order_By>>;
    where?: InputMaybe<Match_Type_Names_Bool_Exp>;
};

export type Query_RootMatch_Type_Names_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Query_RootMatch_TypesArgs = {
    distinct_on?: InputMaybe<Array<Match_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Types_Order_By>>;
    where?: InputMaybe<Match_Types_Bool_Exp>;
};

export type Query_RootMatch_Types_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Types_Order_By>>;
    where?: InputMaybe<Match_Types_Bool_Exp>;
};

export type Query_RootMatch_Types_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Query_RootMatch_WinnersArgs = {
    distinct_on?: InputMaybe<Array<Match_Winners_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Winners_Order_By>>;
    where?: InputMaybe<Match_Winners_Bool_Exp>;
};

export type Query_RootMatch_Winners_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Winners_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Winners_Order_By>>;
    where?: InputMaybe<Match_Winners_Bool_Exp>;
};

export type Query_RootMatch_Winners_By_PkArgs = {
    match_id: Scalars['Int']['input'];
    winner_id: Scalars['Int']['input'];
};

export type Query_RootMatchesArgs = {
    distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Matches_Order_By>>;
    where?: InputMaybe<Matches_Bool_Exp>;
};

export type Query_RootMatches_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Matches_Order_By>>;
    where?: InputMaybe<Matches_Bool_Exp>;
};

export type Query_RootMatches_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Query_RootPromotionsArgs = {
    distinct_on?: InputMaybe<Array<Promotions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Promotions_Order_By>>;
    where?: InputMaybe<Promotions_Bool_Exp>;
};

export type Query_RootPromotions_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Promotions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Promotions_Order_By>>;
    where?: InputMaybe<Promotions_Bool_Exp>;
};

export type Query_RootPromotions_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Query_RootTag_Team_MembersArgs = {
    distinct_on?: InputMaybe<Array<Tag_Team_Members_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Tag_Team_Members_Order_By>>;
    where?: InputMaybe<Tag_Team_Members_Bool_Exp>;
};

export type Query_RootTag_Team_Members_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Tag_Team_Members_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Tag_Team_Members_Order_By>>;
    where?: InputMaybe<Tag_Team_Members_Bool_Exp>;
};

export type Query_RootTag_Team_Members_By_PkArgs = {
    member_id: Scalars['Int']['input'];
    tag_team_id: Scalars['Int']['input'];
};

export type Query_RootTag_TeamsArgs = {
    distinct_on?: InputMaybe<Array<Tag_Teams_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Tag_Teams_Order_By>>;
    where?: InputMaybe<Tag_Teams_Bool_Exp>;
};

export type Query_RootTag_Teams_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Tag_Teams_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Tag_Teams_Order_By>>;
    where?: InputMaybe<Tag_Teams_Bool_Exp>;
};

export type Query_RootTag_Teams_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Query_RootUserArgs = {
    id: Scalars['uuid']['input'];
};

export type Query_RootUsersArgs = {
    distinct_on?: InputMaybe<Array<Users_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Users_Order_By>>;
    where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsersAggregateArgs = {
    distinct_on?: InputMaybe<Array<Users_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Users_Order_By>>;
    where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootWrestlersArgs = {
    distinct_on?: InputMaybe<Array<Wrestlers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Wrestlers_Order_By>>;
    where?: InputMaybe<Wrestlers_Bool_Exp>;
};

export type Query_RootWrestlers_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Wrestlers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Wrestlers_Order_By>>;
    where?: InputMaybe<Wrestlers_Bool_Exp>;
};

export type Query_RootWrestlers_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Subscription_Root = {
    __typename?: 'subscription_root';
    /** fetch data from the table: "auth.providers" using primary key columns */
    authProvider?: Maybe<AuthProviders>;
    /** fetch data from the table: "auth.provider_requests" using primary key columns */
    authProviderRequest?: Maybe<AuthProviderRequests>;
    /** fetch data from the table: "auth.provider_requests" */
    authProviderRequests: Array<AuthProviderRequests>;
    /** fetch aggregated fields from the table: "auth.provider_requests" */
    authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
    /** fetch data from the table in a streaming manner: "auth.provider_requests" */
    authProviderRequests_stream: Array<AuthProviderRequests>;
    /** fetch data from the table: "auth.providers" */
    authProviders: Array<AuthProviders>;
    /** fetch aggregated fields from the table: "auth.providers" */
    authProvidersAggregate: AuthProviders_Aggregate;
    /** fetch data from the table in a streaming manner: "auth.providers" */
    authProviders_stream: Array<AuthProviders>;
    /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
    authRefreshToken?: Maybe<AuthRefreshTokens>;
    /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
    authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
    /** fetch data from the table: "auth.refresh_token_types" */
    authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
    /** fetch aggregated fields from the table: "auth.refresh_token_types" */
    authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
    /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
    authRefreshTokenTypes_stream: Array<AuthRefreshTokenTypes>;
    /** fetch data from the table: "auth.refresh_tokens" */
    authRefreshTokens: Array<AuthRefreshTokens>;
    /** fetch aggregated fields from the table: "auth.refresh_tokens" */
    authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
    /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
    authRefreshTokens_stream: Array<AuthRefreshTokens>;
    /** fetch data from the table: "auth.roles" using primary key columns */
    authRole?: Maybe<AuthRoles>;
    /** fetch data from the table: "auth.roles" */
    authRoles: Array<AuthRoles>;
    /** fetch aggregated fields from the table: "auth.roles" */
    authRolesAggregate: AuthRoles_Aggregate;
    /** fetch data from the table in a streaming manner: "auth.roles" */
    authRoles_stream: Array<AuthRoles>;
    /** fetch data from the table: "auth.user_providers" using primary key columns */
    authUserProvider?: Maybe<AuthUserProviders>;
    /** fetch data from the table: "auth.user_providers" */
    authUserProviders: Array<AuthUserProviders>;
    /** fetch aggregated fields from the table: "auth.user_providers" */
    authUserProvidersAggregate: AuthUserProviders_Aggregate;
    /** fetch data from the table in a streaming manner: "auth.user_providers" */
    authUserProviders_stream: Array<AuthUserProviders>;
    /** fetch data from the table: "auth.user_roles" using primary key columns */
    authUserRole?: Maybe<AuthUserRoles>;
    /** fetch data from the table: "auth.user_roles" */
    authUserRoles: Array<AuthUserRoles>;
    /** fetch aggregated fields from the table: "auth.user_roles" */
    authUserRolesAggregate: AuthUserRoles_Aggregate;
    /** fetch data from the table in a streaming manner: "auth.user_roles" */
    authUserRoles_stream: Array<AuthUserRoles>;
    /** fetch data from the table: "auth.user_security_keys" using primary key columns */
    authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
    /** fetch data from the table: "auth.user_security_keys" */
    authUserSecurityKeys: Array<AuthUserSecurityKeys>;
    /** fetch aggregated fields from the table: "auth.user_security_keys" */
    authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
    /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
    authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
    /** fetch data from the table: "belt_types" */
    belt_types: Array<Belt_Types>;
    /** fetch aggregated fields from the table: "belt_types" */
    belt_types_aggregate: Belt_Types_Aggregate;
    /** fetch data from the table: "belt_types" using primary key columns */
    belt_types_by_pk?: Maybe<Belt_Types>;
    /** fetch data from the table in a streaming manner: "belt_types" */
    belt_types_stream: Array<Belt_Types>;
    /** fetch data from the table: "body_types" */
    body_types: Array<Body_Types>;
    /** fetch aggregated fields from the table: "body_types" */
    body_types_aggregate: Body_Types_Aggregate;
    /** fetch data from the table: "body_types" using primary key columns */
    body_types_by_pk?: Maybe<Body_Types>;
    /** fetch data from the table in a streaming manner: "body_types" */
    body_types_stream: Array<Body_Types>;
    /** An array relationship */
    brands: Array<Brands>;
    /** An aggregate relationship */
    brands_aggregate: Brands_Aggregate;
    /** fetch data from the table: "brands" using primary key columns */
    brands_by_pk?: Maybe<Brands>;
    /** fetch data from the table in a streaming manner: "brands" */
    brands_stream: Array<Brands>;
    /** fetch data from the table: "storage.buckets" using primary key columns */
    bucket?: Maybe<Buckets>;
    /** fetch data from the table: "storage.buckets" */
    buckets: Array<Buckets>;
    /** fetch aggregated fields from the table: "storage.buckets" */
    bucketsAggregate: Buckets_Aggregate;
    /** fetch data from the table in a streaming manner: "storage.buckets" */
    buckets_stream: Array<Buckets>;
    /** fetch data from the table: "champions" */
    champions: Array<Champions>;
    /** fetch aggregated fields from the table: "champions" */
    champions_aggregate: Champions_Aggregate;
    /** fetch data from the table: "champions" using primary key columns */
    champions_by_pk?: Maybe<Champions>;
    /** fetch data from the table in a streaming manner: "champions" */
    champions_stream: Array<Champions>;
    /** fetch data from the table: "championships" */
    championships: Array<Championships>;
    /** fetch aggregated fields from the table: "championships" */
    championships_aggregate: Championships_Aggregate;
    /** fetch data from the table: "championships" using primary key columns */
    championships_by_pk?: Maybe<Championships>;
    /** fetch data from the table in a streaming manner: "championships" */
    championships_stream: Array<Championships>;
    /** An array relationship */
    events: Array<Events>;
    /** An aggregate relationship */
    events_aggregate: Events_Aggregate;
    /** fetch data from the table: "events" using primary key columns */
    events_by_pk?: Maybe<Events>;
    /** fetch data from the table in a streaming manner: "events" */
    events_stream: Array<Events>;
    /** fetch data from the table: "storage.files" using primary key columns */
    file?: Maybe<Files>;
    /** An array relationship */
    files: Array<Files>;
    /** fetch aggregated fields from the table: "storage.files" */
    filesAggregate: Files_Aggregate;
    /** fetch data from the table in a streaming manner: "storage.files" */
    files_stream: Array<Files>;
    /** fetch data from the table: "match_participants" */
    match_participants: Array<Match_Participants>;
    /** fetch aggregated fields from the table: "match_participants" */
    match_participants_aggregate: Match_Participants_Aggregate;
    /** fetch data from the table: "match_participants" using primary key columns */
    match_participants_by_pk?: Maybe<Match_Participants>;
    /** fetch data from the table in a streaming manner: "match_participants" */
    match_participants_stream: Array<Match_Participants>;
    /** fetch data from the table: "match_type_names" */
    match_type_names: Array<Match_Type_Names>;
    /** fetch aggregated fields from the table: "match_type_names" */
    match_type_names_aggregate: Match_Type_Names_Aggregate;
    /** fetch data from the table: "match_type_names" using primary key columns */
    match_type_names_by_pk?: Maybe<Match_Type_Names>;
    /** fetch data from the table in a streaming manner: "match_type_names" */
    match_type_names_stream: Array<Match_Type_Names>;
    /** An array relationship */
    match_types: Array<Match_Types>;
    /** An aggregate relationship */
    match_types_aggregate: Match_Types_Aggregate;
    /** fetch data from the table: "match_types" using primary key columns */
    match_types_by_pk?: Maybe<Match_Types>;
    /** fetch data from the table in a streaming manner: "match_types" */
    match_types_stream: Array<Match_Types>;
    /** fetch data from the table: "match_winners" */
    match_winners: Array<Match_Winners>;
    /** fetch aggregated fields from the table: "match_winners" */
    match_winners_aggregate: Match_Winners_Aggregate;
    /** fetch data from the table: "match_winners" using primary key columns */
    match_winners_by_pk?: Maybe<Match_Winners>;
    /** fetch data from the table in a streaming manner: "match_winners" */
    match_winners_stream: Array<Match_Winners>;
    /** An array relationship */
    matches: Array<Matches>;
    /** An aggregate relationship */
    matches_aggregate: Matches_Aggregate;
    /** fetch data from the table: "matches" using primary key columns */
    matches_by_pk?: Maybe<Matches>;
    /** fetch data from the table in a streaming manner: "matches" */
    matches_stream: Array<Matches>;
    /** fetch data from the table: "promotions" */
    promotions: Array<Promotions>;
    /** fetch aggregated fields from the table: "promotions" */
    promotions_aggregate: Promotions_Aggregate;
    /** fetch data from the table: "promotions" using primary key columns */
    promotions_by_pk?: Maybe<Promotions>;
    /** fetch data from the table in a streaming manner: "promotions" */
    promotions_stream: Array<Promotions>;
    /** fetch data from the table: "tag_team_members" */
    tag_team_members: Array<Tag_Team_Members>;
    /** fetch aggregated fields from the table: "tag_team_members" */
    tag_team_members_aggregate: Tag_Team_Members_Aggregate;
    /** fetch data from the table: "tag_team_members" using primary key columns */
    tag_team_members_by_pk?: Maybe<Tag_Team_Members>;
    /** fetch data from the table in a streaming manner: "tag_team_members" */
    tag_team_members_stream: Array<Tag_Team_Members>;
    /** fetch data from the table: "tag_teams" */
    tag_teams: Array<Tag_Teams>;
    /** fetch aggregated fields from the table: "tag_teams" */
    tag_teams_aggregate: Tag_Teams_Aggregate;
    /** fetch data from the table: "tag_teams" using primary key columns */
    tag_teams_by_pk?: Maybe<Tag_Teams>;
    /** fetch data from the table in a streaming manner: "tag_teams" */
    tag_teams_stream: Array<Tag_Teams>;
    /** fetch data from the table: "auth.users" using primary key columns */
    user?: Maybe<Users>;
    /** fetch data from the table: "auth.users" */
    users: Array<Users>;
    /** fetch aggregated fields from the table: "auth.users" */
    usersAggregate: Users_Aggregate;
    /** fetch data from the table in a streaming manner: "auth.users" */
    users_stream: Array<Users>;
    /** An array relationship */
    wrestlers: Array<Wrestlers>;
    /** An aggregate relationship */
    wrestlers_aggregate: Wrestlers_Aggregate;
    /** fetch data from the table: "wrestlers" using primary key columns */
    wrestlers_by_pk?: Maybe<Wrestlers>;
    /** fetch data from the table in a streaming manner: "wrestlers" */
    wrestlers_stream: Array<Wrestlers>;
};

export type Subscription_RootAuthProviderArgs = {
    id: Scalars['String']['input'];
};

export type Subscription_RootAuthProviderRequestArgs = {
    id: Scalars['uuid']['input'];
};

export type Subscription_RootAuthProviderRequestsArgs = {
    distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
    where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

export type Subscription_RootAuthProviderRequestsAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
    where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

export type Subscription_RootAuthProviderRequests_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
    where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

export type Subscription_RootAuthProvidersArgs = {
    distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
    where?: InputMaybe<AuthProviders_Bool_Exp>;
};

export type Subscription_RootAuthProvidersAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
    where?: InputMaybe<AuthProviders_Bool_Exp>;
};

export type Subscription_RootAuthProviders_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
    where?: InputMaybe<AuthProviders_Bool_Exp>;
};

export type Subscription_RootAuthRefreshTokenArgs = {
    id: Scalars['uuid']['input'];
};

export type Subscription_RootAuthRefreshTokenTypeArgs = {
    value: Scalars['String']['input'];
};

export type Subscription_RootAuthRefreshTokenTypesArgs = {
    distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
    where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

export type Subscription_RootAuthRefreshTokenTypesAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
    where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

export type Subscription_RootAuthRefreshTokenTypes_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<AuthRefreshTokenTypes_Stream_Cursor_Input>>;
    where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

export type Subscription_RootAuthRefreshTokensArgs = {
    distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
    where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Subscription_RootAuthRefreshTokensAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
    where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Subscription_RootAuthRefreshTokens_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
    where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Subscription_RootAuthRoleArgs = {
    role: Scalars['String']['input'];
};

export type Subscription_RootAuthRolesArgs = {
    distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
    where?: InputMaybe<AuthRoles_Bool_Exp>;
};

export type Subscription_RootAuthRolesAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
    where?: InputMaybe<AuthRoles_Bool_Exp>;
};

export type Subscription_RootAuthRoles_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
    where?: InputMaybe<AuthRoles_Bool_Exp>;
};

export type Subscription_RootAuthUserProviderArgs = {
    id: Scalars['uuid']['input'];
};

export type Subscription_RootAuthUserProvidersArgs = {
    distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
    where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

export type Subscription_RootAuthUserProvidersAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
    where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

export type Subscription_RootAuthUserProviders_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
    where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

export type Subscription_RootAuthUserRoleArgs = {
    id: Scalars['uuid']['input'];
};

export type Subscription_RootAuthUserRolesArgs = {
    distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
    where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

export type Subscription_RootAuthUserRolesAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
    where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

export type Subscription_RootAuthUserRoles_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
    where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

export type Subscription_RootAuthUserSecurityKeyArgs = {
    id: Scalars['uuid']['input'];
};

export type Subscription_RootAuthUserSecurityKeysArgs = {
    distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
    where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
    where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
    where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Subscription_RootBelt_TypesArgs = {
    distinct_on?: InputMaybe<Array<Belt_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Belt_Types_Order_By>>;
    where?: InputMaybe<Belt_Types_Bool_Exp>;
};

export type Subscription_RootBelt_Types_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Belt_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Belt_Types_Order_By>>;
    where?: InputMaybe<Belt_Types_Bool_Exp>;
};

export type Subscription_RootBelt_Types_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Subscription_RootBelt_Types_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Belt_Types_Stream_Cursor_Input>>;
    where?: InputMaybe<Belt_Types_Bool_Exp>;
};

export type Subscription_RootBody_TypesArgs = {
    distinct_on?: InputMaybe<Array<Body_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Body_Types_Order_By>>;
    where?: InputMaybe<Body_Types_Bool_Exp>;
};

export type Subscription_RootBody_Types_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Body_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Body_Types_Order_By>>;
    where?: InputMaybe<Body_Types_Bool_Exp>;
};

export type Subscription_RootBody_Types_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Subscription_RootBody_Types_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Body_Types_Stream_Cursor_Input>>;
    where?: InputMaybe<Body_Types_Bool_Exp>;
};

export type Subscription_RootBrandsArgs = {
    distinct_on?: InputMaybe<Array<Brands_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Brands_Order_By>>;
    where?: InputMaybe<Brands_Bool_Exp>;
};

export type Subscription_RootBrands_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Brands_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Brands_Order_By>>;
    where?: InputMaybe<Brands_Bool_Exp>;
};

export type Subscription_RootBrands_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Subscription_RootBrands_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Brands_Stream_Cursor_Input>>;
    where?: InputMaybe<Brands_Bool_Exp>;
};

export type Subscription_RootBucketArgs = {
    id: Scalars['String']['input'];
};

export type Subscription_RootBucketsArgs = {
    distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Buckets_Order_By>>;
    where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Subscription_RootBucketsAggregateArgs = {
    distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Buckets_Order_By>>;
    where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Subscription_RootBuckets_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
    where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Subscription_RootChampionsArgs = {
    distinct_on?: InputMaybe<Array<Champions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Champions_Order_By>>;
    where?: InputMaybe<Champions_Bool_Exp>;
};

export type Subscription_RootChampions_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Champions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Champions_Order_By>>;
    where?: InputMaybe<Champions_Bool_Exp>;
};

export type Subscription_RootChampions_By_PkArgs = {
    championship_id: Scalars['Int']['input'];
    wrestler_id: Scalars['Int']['input'];
};

export type Subscription_RootChampions_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Champions_Stream_Cursor_Input>>;
    where?: InputMaybe<Champions_Bool_Exp>;
};

export type Subscription_RootChampionshipsArgs = {
    distinct_on?: InputMaybe<Array<Championships_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Championships_Order_By>>;
    where?: InputMaybe<Championships_Bool_Exp>;
};

export type Subscription_RootChampionships_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Championships_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Championships_Order_By>>;
    where?: InputMaybe<Championships_Bool_Exp>;
};

export type Subscription_RootChampionships_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Subscription_RootChampionships_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Championships_Stream_Cursor_Input>>;
    where?: InputMaybe<Championships_Bool_Exp>;
};

export type Subscription_RootEventsArgs = {
    distinct_on?: InputMaybe<Array<Events_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Events_Order_By>>;
    where?: InputMaybe<Events_Bool_Exp>;
};

export type Subscription_RootEvents_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Events_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Events_Order_By>>;
    where?: InputMaybe<Events_Bool_Exp>;
};

export type Subscription_RootEvents_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Subscription_RootEvents_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Events_Stream_Cursor_Input>>;
    where?: InputMaybe<Events_Bool_Exp>;
};

export type Subscription_RootFileArgs = {
    id: Scalars['uuid']['input'];
};

export type Subscription_RootFilesArgs = {
    distinct_on?: InputMaybe<Array<Files_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Files_Order_By>>;
    where?: InputMaybe<Files_Bool_Exp>;
};

export type Subscription_RootFilesAggregateArgs = {
    distinct_on?: InputMaybe<Array<Files_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Files_Order_By>>;
    where?: InputMaybe<Files_Bool_Exp>;
};

export type Subscription_RootFiles_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
    where?: InputMaybe<Files_Bool_Exp>;
};

export type Subscription_RootMatch_ParticipantsArgs = {
    distinct_on?: InputMaybe<Array<Match_Participants_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Participants_Order_By>>;
    where?: InputMaybe<Match_Participants_Bool_Exp>;
};

export type Subscription_RootMatch_Participants_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Participants_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Participants_Order_By>>;
    where?: InputMaybe<Match_Participants_Bool_Exp>;
};

export type Subscription_RootMatch_Participants_By_PkArgs = {
    match_id: Scalars['Int']['input'];
    participant_id: Scalars['Int']['input'];
};

export type Subscription_RootMatch_Participants_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Match_Participants_Stream_Cursor_Input>>;
    where?: InputMaybe<Match_Participants_Bool_Exp>;
};

export type Subscription_RootMatch_Type_NamesArgs = {
    distinct_on?: InputMaybe<Array<Match_Type_Names_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Type_Names_Order_By>>;
    where?: InputMaybe<Match_Type_Names_Bool_Exp>;
};

export type Subscription_RootMatch_Type_Names_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Type_Names_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Type_Names_Order_By>>;
    where?: InputMaybe<Match_Type_Names_Bool_Exp>;
};

export type Subscription_RootMatch_Type_Names_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Subscription_RootMatch_Type_Names_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Match_Type_Names_Stream_Cursor_Input>>;
    where?: InputMaybe<Match_Type_Names_Bool_Exp>;
};

export type Subscription_RootMatch_TypesArgs = {
    distinct_on?: InputMaybe<Array<Match_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Types_Order_By>>;
    where?: InputMaybe<Match_Types_Bool_Exp>;
};

export type Subscription_RootMatch_Types_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Types_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Types_Order_By>>;
    where?: InputMaybe<Match_Types_Bool_Exp>;
};

export type Subscription_RootMatch_Types_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Subscription_RootMatch_Types_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Match_Types_Stream_Cursor_Input>>;
    where?: InputMaybe<Match_Types_Bool_Exp>;
};

export type Subscription_RootMatch_WinnersArgs = {
    distinct_on?: InputMaybe<Array<Match_Winners_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Winners_Order_By>>;
    where?: InputMaybe<Match_Winners_Bool_Exp>;
};

export type Subscription_RootMatch_Winners_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Winners_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Winners_Order_By>>;
    where?: InputMaybe<Match_Winners_Bool_Exp>;
};

export type Subscription_RootMatch_Winners_By_PkArgs = {
    match_id: Scalars['Int']['input'];
    winner_id: Scalars['Int']['input'];
};

export type Subscription_RootMatch_Winners_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Match_Winners_Stream_Cursor_Input>>;
    where?: InputMaybe<Match_Winners_Bool_Exp>;
};

export type Subscription_RootMatchesArgs = {
    distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Matches_Order_By>>;
    where?: InputMaybe<Matches_Bool_Exp>;
};

export type Subscription_RootMatches_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Matches_Order_By>>;
    where?: InputMaybe<Matches_Bool_Exp>;
};

export type Subscription_RootMatches_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Subscription_RootMatches_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Matches_Stream_Cursor_Input>>;
    where?: InputMaybe<Matches_Bool_Exp>;
};

export type Subscription_RootPromotionsArgs = {
    distinct_on?: InputMaybe<Array<Promotions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Promotions_Order_By>>;
    where?: InputMaybe<Promotions_Bool_Exp>;
};

export type Subscription_RootPromotions_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Promotions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Promotions_Order_By>>;
    where?: InputMaybe<Promotions_Bool_Exp>;
};

export type Subscription_RootPromotions_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Subscription_RootPromotions_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Promotions_Stream_Cursor_Input>>;
    where?: InputMaybe<Promotions_Bool_Exp>;
};

export type Subscription_RootTag_Team_MembersArgs = {
    distinct_on?: InputMaybe<Array<Tag_Team_Members_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Tag_Team_Members_Order_By>>;
    where?: InputMaybe<Tag_Team_Members_Bool_Exp>;
};

export type Subscription_RootTag_Team_Members_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Tag_Team_Members_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Tag_Team_Members_Order_By>>;
    where?: InputMaybe<Tag_Team_Members_Bool_Exp>;
};

export type Subscription_RootTag_Team_Members_By_PkArgs = {
    member_id: Scalars['Int']['input'];
    tag_team_id: Scalars['Int']['input'];
};

export type Subscription_RootTag_Team_Members_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Tag_Team_Members_Stream_Cursor_Input>>;
    where?: InputMaybe<Tag_Team_Members_Bool_Exp>;
};

export type Subscription_RootTag_TeamsArgs = {
    distinct_on?: InputMaybe<Array<Tag_Teams_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Tag_Teams_Order_By>>;
    where?: InputMaybe<Tag_Teams_Bool_Exp>;
};

export type Subscription_RootTag_Teams_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Tag_Teams_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Tag_Teams_Order_By>>;
    where?: InputMaybe<Tag_Teams_Bool_Exp>;
};

export type Subscription_RootTag_Teams_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Subscription_RootTag_Teams_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Tag_Teams_Stream_Cursor_Input>>;
    where?: InputMaybe<Tag_Teams_Bool_Exp>;
};

export type Subscription_RootUserArgs = {
    id: Scalars['uuid']['input'];
};

export type Subscription_RootUsersArgs = {
    distinct_on?: InputMaybe<Array<Users_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Users_Order_By>>;
    where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsersAggregateArgs = {
    distinct_on?: InputMaybe<Array<Users_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Users_Order_By>>;
    where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
    where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootWrestlersArgs = {
    distinct_on?: InputMaybe<Array<Wrestlers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Wrestlers_Order_By>>;
    where?: InputMaybe<Wrestlers_Bool_Exp>;
};

export type Subscription_RootWrestlers_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Wrestlers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Wrestlers_Order_By>>;
    where?: InputMaybe<Wrestlers_Bool_Exp>;
};

export type Subscription_RootWrestlers_By_PkArgs = {
    id: Scalars['Int']['input'];
};

export type Subscription_RootWrestlers_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Wrestlers_Stream_Cursor_Input>>;
    where?: InputMaybe<Wrestlers_Bool_Exp>;
};

/** columns and relationships of "tag_team_members" */
export type Tag_Team_Members = {
    __typename?: 'tag_team_members';
    created_at: Scalars['timestamptz']['output'];
    /** An object relationship */
    member: Wrestlers;
    member_id: Scalars['Int']['output'];
    /** An object relationship */
    tag_team: Tag_Teams;
    tag_team_id: Scalars['Int']['output'];
    updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "tag_team_members" */
export type Tag_Team_Members_Aggregate = {
    __typename?: 'tag_team_members_aggregate';
    aggregate?: Maybe<Tag_Team_Members_Aggregate_Fields>;
    nodes: Array<Tag_Team_Members>;
};

export type Tag_Team_Members_Aggregate_Bool_Exp = {
    count?: InputMaybe<Tag_Team_Members_Aggregate_Bool_Exp_Count>;
};

export type Tag_Team_Members_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Tag_Team_Members_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Tag_Team_Members_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "tag_team_members" */
export type Tag_Team_Members_Aggregate_Fields = {
    __typename?: 'tag_team_members_aggregate_fields';
    avg?: Maybe<Tag_Team_Members_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Tag_Team_Members_Max_Fields>;
    min?: Maybe<Tag_Team_Members_Min_Fields>;
    stddev?: Maybe<Tag_Team_Members_Stddev_Fields>;
    stddev_pop?: Maybe<Tag_Team_Members_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Tag_Team_Members_Stddev_Samp_Fields>;
    sum?: Maybe<Tag_Team_Members_Sum_Fields>;
    var_pop?: Maybe<Tag_Team_Members_Var_Pop_Fields>;
    var_samp?: Maybe<Tag_Team_Members_Var_Samp_Fields>;
    variance?: Maybe<Tag_Team_Members_Variance_Fields>;
};

/** aggregate fields of "tag_team_members" */
export type Tag_Team_Members_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Tag_Team_Members_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "tag_team_members" */
export type Tag_Team_Members_Aggregate_Order_By = {
    avg?: InputMaybe<Tag_Team_Members_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Tag_Team_Members_Max_Order_By>;
    min?: InputMaybe<Tag_Team_Members_Min_Order_By>;
    stddev?: InputMaybe<Tag_Team_Members_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Tag_Team_Members_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Tag_Team_Members_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Tag_Team_Members_Sum_Order_By>;
    var_pop?: InputMaybe<Tag_Team_Members_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Tag_Team_Members_Var_Samp_Order_By>;
    variance?: InputMaybe<Tag_Team_Members_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tag_team_members" */
export type Tag_Team_Members_Arr_Rel_Insert_Input = {
    data: Array<Tag_Team_Members_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Tag_Team_Members_On_Conflict>;
};

/** aggregate avg on columns */
export type Tag_Team_Members_Avg_Fields = {
    __typename?: 'tag_team_members_avg_fields';
    member_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "tag_team_members" */
export type Tag_Team_Members_Avg_Order_By = {
    member_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tag_team_members". All fields are combined with a logical 'AND'. */
export type Tag_Team_Members_Bool_Exp = {
    _and?: InputMaybe<Array<Tag_Team_Members_Bool_Exp>>;
    _not?: InputMaybe<Tag_Team_Members_Bool_Exp>;
    _or?: InputMaybe<Array<Tag_Team_Members_Bool_Exp>>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    member?: InputMaybe<Wrestlers_Bool_Exp>;
    member_id?: InputMaybe<Int_Comparison_Exp>;
    tag_team?: InputMaybe<Tag_Teams_Bool_Exp>;
    tag_team_id?: InputMaybe<Int_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tag_team_members" */
export enum Tag_Team_Members_Constraint {
    /** unique or primary key constraint on columns "member_id", "tag_team_id" */
    TagTeamMembersPkey = 'tag_team_members_pkey',
}

/** input type for incrementing numeric columns in table "tag_team_members" */
export type Tag_Team_Members_Inc_Input = {
    member_id?: InputMaybe<Scalars['Int']['input']>;
    tag_team_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "tag_team_members" */
export type Tag_Team_Members_Insert_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    member?: InputMaybe<Wrestlers_Obj_Rel_Insert_Input>;
    member_id?: InputMaybe<Scalars['Int']['input']>;
    tag_team?: InputMaybe<Tag_Teams_Obj_Rel_Insert_Input>;
    tag_team_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Tag_Team_Members_Max_Fields = {
    __typename?: 'tag_team_members_max_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    member_id?: Maybe<Scalars['Int']['output']>;
    tag_team_id?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "tag_team_members" */
export type Tag_Team_Members_Max_Order_By = {
    created_at?: InputMaybe<Order_By>;
    member_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tag_Team_Members_Min_Fields = {
    __typename?: 'tag_team_members_min_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    member_id?: Maybe<Scalars['Int']['output']>;
    tag_team_id?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "tag_team_members" */
export type Tag_Team_Members_Min_Order_By = {
    created_at?: InputMaybe<Order_By>;
    member_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tag_team_members" */
export type Tag_Team_Members_Mutation_Response = {
    __typename?: 'tag_team_members_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Tag_Team_Members>;
};

/** on_conflict condition type for table "tag_team_members" */
export type Tag_Team_Members_On_Conflict = {
    constraint: Tag_Team_Members_Constraint;
    update_columns?: Array<Tag_Team_Members_Update_Column>;
    where?: InputMaybe<Tag_Team_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "tag_team_members". */
export type Tag_Team_Members_Order_By = {
    created_at?: InputMaybe<Order_By>;
    member?: InputMaybe<Wrestlers_Order_By>;
    member_id?: InputMaybe<Order_By>;
    tag_team?: InputMaybe<Tag_Teams_Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tag_team_members */
export type Tag_Team_Members_Pk_Columns_Input = {
    member_id: Scalars['Int']['input'];
    tag_team_id: Scalars['Int']['input'];
};

/** select columns of table "tag_team_members" */
export enum Tag_Team_Members_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    MemberId = 'member_id',
    /** column name */
    TagTeamId = 'tag_team_id',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** input type for updating data in table "tag_team_members" */
export type Tag_Team_Members_Set_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    member_id?: InputMaybe<Scalars['Int']['input']>;
    tag_team_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Tag_Team_Members_Stddev_Fields = {
    __typename?: 'tag_team_members_stddev_fields';
    member_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "tag_team_members" */
export type Tag_Team_Members_Stddev_Order_By = {
    member_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tag_Team_Members_Stddev_Pop_Fields = {
    __typename?: 'tag_team_members_stddev_pop_fields';
    member_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "tag_team_members" */
export type Tag_Team_Members_Stddev_Pop_Order_By = {
    member_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tag_Team_Members_Stddev_Samp_Fields = {
    __typename?: 'tag_team_members_stddev_samp_fields';
    member_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "tag_team_members" */
export type Tag_Team_Members_Stddev_Samp_Order_By = {
    member_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "tag_team_members" */
export type Tag_Team_Members_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Tag_Team_Members_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tag_Team_Members_Stream_Cursor_Value_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    member_id?: InputMaybe<Scalars['Int']['input']>;
    tag_team_id?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Tag_Team_Members_Sum_Fields = {
    __typename?: 'tag_team_members_sum_fields';
    member_id?: Maybe<Scalars['Int']['output']>;
    tag_team_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "tag_team_members" */
export type Tag_Team_Members_Sum_Order_By = {
    member_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** update columns of table "tag_team_members" */
export enum Tag_Team_Members_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    MemberId = 'member_id',
    /** column name */
    TagTeamId = 'tag_team_id',
    /** column name */
    UpdatedAt = 'updated_at',
}

export type Tag_Team_Members_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Tag_Team_Members_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Tag_Team_Members_Set_Input>;
    /** filter the rows which have to be updated */
    where: Tag_Team_Members_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tag_Team_Members_Var_Pop_Fields = {
    __typename?: 'tag_team_members_var_pop_fields';
    member_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "tag_team_members" */
export type Tag_Team_Members_Var_Pop_Order_By = {
    member_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tag_Team_Members_Var_Samp_Fields = {
    __typename?: 'tag_team_members_var_samp_fields';
    member_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "tag_team_members" */
export type Tag_Team_Members_Var_Samp_Order_By = {
    member_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tag_Team_Members_Variance_Fields = {
    __typename?: 'tag_team_members_variance_fields';
    member_id?: Maybe<Scalars['Float']['output']>;
    tag_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "tag_team_members" */
export type Tag_Team_Members_Variance_Order_By = {
    member_id?: InputMaybe<Order_By>;
    tag_team_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "tag_teams" */
export type Tag_Teams = {
    __typename?: 'tag_teams';
    created_at: Scalars['timestamptz']['output'];
    id: Scalars['Int']['output'];
    /** An array relationship */
    matches_participated: Array<Match_Participants>;
    /** An aggregate relationship */
    matches_participated_aggregate: Match_Participants_Aggregate;
    /** An array relationship */
    members: Array<Tag_Team_Members>;
    /** An aggregate relationship */
    members_aggregate: Tag_Team_Members_Aggregate;
    name: Scalars['String']['output'];
    updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "tag_teams" */
export type Tag_TeamsMatches_ParticipatedArgs = {
    distinct_on?: InputMaybe<Array<Match_Participants_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Participants_Order_By>>;
    where?: InputMaybe<Match_Participants_Bool_Exp>;
};

/** columns and relationships of "tag_teams" */
export type Tag_TeamsMatches_Participated_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Participants_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Participants_Order_By>>;
    where?: InputMaybe<Match_Participants_Bool_Exp>;
};

/** columns and relationships of "tag_teams" */
export type Tag_TeamsMembersArgs = {
    distinct_on?: InputMaybe<Array<Tag_Team_Members_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Tag_Team_Members_Order_By>>;
    where?: InputMaybe<Tag_Team_Members_Bool_Exp>;
};

/** columns and relationships of "tag_teams" */
export type Tag_TeamsMembers_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Tag_Team_Members_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Tag_Team_Members_Order_By>>;
    where?: InputMaybe<Tag_Team_Members_Bool_Exp>;
};

/** aggregated selection of "tag_teams" */
export type Tag_Teams_Aggregate = {
    __typename?: 'tag_teams_aggregate';
    aggregate?: Maybe<Tag_Teams_Aggregate_Fields>;
    nodes: Array<Tag_Teams>;
};

/** aggregate fields of "tag_teams" */
export type Tag_Teams_Aggregate_Fields = {
    __typename?: 'tag_teams_aggregate_fields';
    avg?: Maybe<Tag_Teams_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Tag_Teams_Max_Fields>;
    min?: Maybe<Tag_Teams_Min_Fields>;
    stddev?: Maybe<Tag_Teams_Stddev_Fields>;
    stddev_pop?: Maybe<Tag_Teams_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Tag_Teams_Stddev_Samp_Fields>;
    sum?: Maybe<Tag_Teams_Sum_Fields>;
    var_pop?: Maybe<Tag_Teams_Var_Pop_Fields>;
    var_samp?: Maybe<Tag_Teams_Var_Samp_Fields>;
    variance?: Maybe<Tag_Teams_Variance_Fields>;
};

/** aggregate fields of "tag_teams" */
export type Tag_Teams_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Tag_Teams_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Tag_Teams_Avg_Fields = {
    __typename?: 'tag_teams_avg_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "tag_teams". All fields are combined with a logical 'AND'. */
export type Tag_Teams_Bool_Exp = {
    _and?: InputMaybe<Array<Tag_Teams_Bool_Exp>>;
    _not?: InputMaybe<Tag_Teams_Bool_Exp>;
    _or?: InputMaybe<Array<Tag_Teams_Bool_Exp>>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    matches_participated?: InputMaybe<Match_Participants_Bool_Exp>;
    matches_participated_aggregate?: InputMaybe<Match_Participants_Aggregate_Bool_Exp>;
    members?: InputMaybe<Tag_Team_Members_Bool_Exp>;
    members_aggregate?: InputMaybe<Tag_Team_Members_Aggregate_Bool_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tag_teams" */
export enum Tag_Teams_Constraint {
    /** unique or primary key constraint on columns "id" */
    TagTeamsPkey = 'tag_teams_pkey',
}

/** input type for incrementing numeric columns in table "tag_teams" */
export type Tag_Teams_Inc_Input = {
    id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "tag_teams" */
export type Tag_Teams_Insert_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    matches_participated?: InputMaybe<Match_Participants_Arr_Rel_Insert_Input>;
    members?: InputMaybe<Tag_Team_Members_Arr_Rel_Insert_Input>;
    name?: InputMaybe<Scalars['String']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Tag_Teams_Max_Fields = {
    __typename?: 'tag_teams_max_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Tag_Teams_Min_Fields = {
    __typename?: 'tag_teams_min_fields';
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "tag_teams" */
export type Tag_Teams_Mutation_Response = {
    __typename?: 'tag_teams_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Tag_Teams>;
};

/** input type for inserting object relation for remote table "tag_teams" */
export type Tag_Teams_Obj_Rel_Insert_Input = {
    data: Tag_Teams_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Tag_Teams_On_Conflict>;
};

/** on_conflict condition type for table "tag_teams" */
export type Tag_Teams_On_Conflict = {
    constraint: Tag_Teams_Constraint;
    update_columns?: Array<Tag_Teams_Update_Column>;
    where?: InputMaybe<Tag_Teams_Bool_Exp>;
};

/** Ordering options when selecting data from "tag_teams". */
export type Tag_Teams_Order_By = {
    created_at?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    matches_participated_aggregate?: InputMaybe<Match_Participants_Aggregate_Order_By>;
    members_aggregate?: InputMaybe<Tag_Team_Members_Aggregate_Order_By>;
    name?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tag_teams */
export type Tag_Teams_Pk_Columns_Input = {
    id: Scalars['Int']['input'];
};

/** select columns of table "tag_teams" */
export enum Tag_Teams_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** input type for updating data in table "tag_teams" */
export type Tag_Teams_Set_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Tag_Teams_Stddev_Fields = {
    __typename?: 'tag_teams_stddev_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Tag_Teams_Stddev_Pop_Fields = {
    __typename?: 'tag_teams_stddev_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Tag_Teams_Stddev_Samp_Fields = {
    __typename?: 'tag_teams_stddev_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "tag_teams" */
export type Tag_Teams_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Tag_Teams_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tag_Teams_Stream_Cursor_Value_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Tag_Teams_Sum_Fields = {
    __typename?: 'tag_teams_sum_fields';
    id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "tag_teams" */
export enum Tag_Teams_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
}

export type Tag_Teams_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Tag_Teams_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Tag_Teams_Set_Input>;
    /** filter the rows which have to be updated */
    where: Tag_Teams_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tag_Teams_Var_Pop_Fields = {
    __typename?: 'tag_teams_var_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Tag_Teams_Var_Samp_Fields = {
    __typename?: 'tag_teams_var_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Tag_Teams_Variance_Fields = {
    __typename?: 'tag_teams_variance_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['timestamptz']['input']>;
    _gt?: InputMaybe<Scalars['timestamptz']['input']>;
    _gte?: InputMaybe<Scalars['timestamptz']['input']>;
    _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['timestamptz']['input']>;
    _lte?: InputMaybe<Scalars['timestamptz']['input']>;
    _neq?: InputMaybe<Scalars['timestamptz']['input']>;
    _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
    __typename?: 'users';
    activeMfaType?: Maybe<Scalars['String']['output']>;
    avatarUrl: Scalars['String']['output'];
    createdAt: Scalars['timestamptz']['output'];
    currentChallenge?: Maybe<Scalars['String']['output']>;
    defaultRole: Scalars['String']['output'];
    /** An object relationship */
    defaultRoleByRole: AuthRoles;
    disabled: Scalars['Boolean']['output'];
    displayName: Scalars['String']['output'];
    email?: Maybe<Scalars['citext']['output']>;
    emailVerified: Scalars['Boolean']['output'];
    id: Scalars['uuid']['output'];
    isAnonymous: Scalars['Boolean']['output'];
    lastSeen?: Maybe<Scalars['timestamptz']['output']>;
    locale: Scalars['String']['output'];
    metadata?: Maybe<Scalars['jsonb']['output']>;
    newEmail?: Maybe<Scalars['citext']['output']>;
    otpHash?: Maybe<Scalars['String']['output']>;
    otpHashExpiresAt: Scalars['timestamptz']['output'];
    otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
    passwordHash?: Maybe<Scalars['String']['output']>;
    phoneNumber?: Maybe<Scalars['String']['output']>;
    phoneNumberVerified: Scalars['Boolean']['output'];
    /** An array relationship */
    refreshTokens: Array<AuthRefreshTokens>;
    /** An aggregate relationship */
    refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
    /** An array relationship */
    roles: Array<AuthUserRoles>;
    /** An aggregate relationship */
    roles_aggregate: AuthUserRoles_Aggregate;
    /** An array relationship */
    securityKeys: Array<AuthUserSecurityKeys>;
    /** An aggregate relationship */
    securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
    ticket?: Maybe<Scalars['String']['output']>;
    ticketExpiresAt: Scalars['timestamptz']['output'];
    totpSecret?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['timestamptz']['output'];
    /** An array relationship */
    userProviders: Array<AuthUserProviders>;
    /** An aggregate relationship */
    userProviders_aggregate: AuthUserProviders_Aggregate;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
    path?: InputMaybe<Scalars['String']['input']>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
    distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
    where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
    where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
    distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
    where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
    where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
    distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
    where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
    where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
    distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
    where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
    distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
    where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
    __typename?: 'users_aggregate';
    aggregate?: Maybe<Users_Aggregate_Fields>;
    nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
    bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
    bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
    count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
    arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Users_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
    arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Users_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Users_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Users_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
    __typename?: 'users_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<Users_Max_Fields>;
    min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Users_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Users_Max_Order_By>;
    min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
    data: Array<Users_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
    _and?: InputMaybe<Array<Users_Bool_Exp>>;
    _not?: InputMaybe<Users_Bool_Exp>;
    _or?: InputMaybe<Array<Users_Bool_Exp>>;
    activeMfaType?: InputMaybe<String_Comparison_Exp>;
    avatarUrl?: InputMaybe<String_Comparison_Exp>;
    createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    currentChallenge?: InputMaybe<String_Comparison_Exp>;
    defaultRole?: InputMaybe<String_Comparison_Exp>;
    defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
    disabled?: InputMaybe<Boolean_Comparison_Exp>;
    displayName?: InputMaybe<String_Comparison_Exp>;
    email?: InputMaybe<Citext_Comparison_Exp>;
    emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
    lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
    locale?: InputMaybe<String_Comparison_Exp>;
    metadata?: InputMaybe<Jsonb_Comparison_Exp>;
    newEmail?: InputMaybe<Citext_Comparison_Exp>;
    otpHash?: InputMaybe<String_Comparison_Exp>;
    otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
    passwordHash?: InputMaybe<String_Comparison_Exp>;
    phoneNumber?: InputMaybe<String_Comparison_Exp>;
    phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
    refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
    refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
    roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
    roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
    securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
    securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
    ticket?: InputMaybe<String_Comparison_Exp>;
    ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    totpSecret?: InputMaybe<String_Comparison_Exp>;
    updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
    userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
    /** unique or primary key constraint on columns "email" */
    UsersEmailKey = 'users_email_key',
    /** unique or primary key constraint on columns "phone_number" */
    UsersPhoneNumberKey = 'users_phone_number_key',
    /** unique or primary key constraint on columns "id" */
    UsersPkey = 'users_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
    metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
    metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
    metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
    activeMfaType?: InputMaybe<Scalars['String']['input']>;
    avatarUrl?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    currentChallenge?: InputMaybe<Scalars['String']['input']>;
    defaultRole?: InputMaybe<Scalars['String']['input']>;
    defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
    disabled?: InputMaybe<Scalars['Boolean']['input']>;
    displayName?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['citext']['input']>;
    emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
    lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
    newEmail?: InputMaybe<Scalars['citext']['input']>;
    otpHash?: InputMaybe<Scalars['String']['input']>;
    otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
    otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
    passwordHash?: InputMaybe<Scalars['String']['input']>;
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
    phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
    refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
    roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
    securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
    ticket?: InputMaybe<Scalars['String']['input']>;
    ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
    totpSecret?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
    __typename?: 'users_max_fields';
    activeMfaType?: Maybe<Scalars['String']['output']>;
    avatarUrl?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    currentChallenge?: Maybe<Scalars['String']['output']>;
    defaultRole?: Maybe<Scalars['String']['output']>;
    displayName?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['citext']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    lastSeen?: Maybe<Scalars['timestamptz']['output']>;
    locale?: Maybe<Scalars['String']['output']>;
    newEmail?: Maybe<Scalars['citext']['output']>;
    otpHash?: Maybe<Scalars['String']['output']>;
    otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
    otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
    passwordHash?: Maybe<Scalars['String']['output']>;
    phoneNumber?: Maybe<Scalars['String']['output']>;
    ticket?: Maybe<Scalars['String']['output']>;
    ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
    totpSecret?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
    activeMfaType?: InputMaybe<Order_By>;
    avatarUrl?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    currentChallenge?: InputMaybe<Order_By>;
    defaultRole?: InputMaybe<Order_By>;
    displayName?: InputMaybe<Order_By>;
    email?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    lastSeen?: InputMaybe<Order_By>;
    locale?: InputMaybe<Order_By>;
    newEmail?: InputMaybe<Order_By>;
    otpHash?: InputMaybe<Order_By>;
    otpHashExpiresAt?: InputMaybe<Order_By>;
    otpMethodLastUsed?: InputMaybe<Order_By>;
    passwordHash?: InputMaybe<Order_By>;
    phoneNumber?: InputMaybe<Order_By>;
    ticket?: InputMaybe<Order_By>;
    ticketExpiresAt?: InputMaybe<Order_By>;
    totpSecret?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
    __typename?: 'users_min_fields';
    activeMfaType?: Maybe<Scalars['String']['output']>;
    avatarUrl?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    currentChallenge?: Maybe<Scalars['String']['output']>;
    defaultRole?: Maybe<Scalars['String']['output']>;
    displayName?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['citext']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    lastSeen?: Maybe<Scalars['timestamptz']['output']>;
    locale?: Maybe<Scalars['String']['output']>;
    newEmail?: Maybe<Scalars['citext']['output']>;
    otpHash?: Maybe<Scalars['String']['output']>;
    otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
    otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
    passwordHash?: Maybe<Scalars['String']['output']>;
    phoneNumber?: Maybe<Scalars['String']['output']>;
    ticket?: Maybe<Scalars['String']['output']>;
    ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
    totpSecret?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
    activeMfaType?: InputMaybe<Order_By>;
    avatarUrl?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    currentChallenge?: InputMaybe<Order_By>;
    defaultRole?: InputMaybe<Order_By>;
    displayName?: InputMaybe<Order_By>;
    email?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    lastSeen?: InputMaybe<Order_By>;
    locale?: InputMaybe<Order_By>;
    newEmail?: InputMaybe<Order_By>;
    otpHash?: InputMaybe<Order_By>;
    otpHashExpiresAt?: InputMaybe<Order_By>;
    otpMethodLastUsed?: InputMaybe<Order_By>;
    passwordHash?: InputMaybe<Order_By>;
    phoneNumber?: InputMaybe<Order_By>;
    ticket?: InputMaybe<Order_By>;
    ticketExpiresAt?: InputMaybe<Order_By>;
    totpSecret?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
    __typename?: 'users_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
    data: Users_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
    constraint: Users_Constraint;
    update_columns?: Array<Users_Update_Column>;
    where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
    activeMfaType?: InputMaybe<Order_By>;
    avatarUrl?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    currentChallenge?: InputMaybe<Order_By>;
    defaultRole?: InputMaybe<Order_By>;
    defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
    disabled?: InputMaybe<Order_By>;
    displayName?: InputMaybe<Order_By>;
    email?: InputMaybe<Order_By>;
    emailVerified?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    isAnonymous?: InputMaybe<Order_By>;
    lastSeen?: InputMaybe<Order_By>;
    locale?: InputMaybe<Order_By>;
    metadata?: InputMaybe<Order_By>;
    newEmail?: InputMaybe<Order_By>;
    otpHash?: InputMaybe<Order_By>;
    otpHashExpiresAt?: InputMaybe<Order_By>;
    otpMethodLastUsed?: InputMaybe<Order_By>;
    passwordHash?: InputMaybe<Order_By>;
    phoneNumber?: InputMaybe<Order_By>;
    phoneNumberVerified?: InputMaybe<Order_By>;
    refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
    roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
    securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
    ticket?: InputMaybe<Order_By>;
    ticketExpiresAt?: InputMaybe<Order_By>;
    totpSecret?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
    /** column name */
    ActiveMfaType = 'activeMfaType',
    /** column name */
    AvatarUrl = 'avatarUrl',
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    CurrentChallenge = 'currentChallenge',
    /** column name */
    DefaultRole = 'defaultRole',
    /** column name */
    Disabled = 'disabled',
    /** column name */
    DisplayName = 'displayName',
    /** column name */
    Email = 'email',
    /** column name */
    EmailVerified = 'emailVerified',
    /** column name */
    Id = 'id',
    /** column name */
    IsAnonymous = 'isAnonymous',
    /** column name */
    LastSeen = 'lastSeen',
    /** column name */
    Locale = 'locale',
    /** column name */
    Metadata = 'metadata',
    /** column name */
    NewEmail = 'newEmail',
    /** column name */
    OtpHash = 'otpHash',
    /** column name */
    OtpHashExpiresAt = 'otpHashExpiresAt',
    /** column name */
    OtpMethodLastUsed = 'otpMethodLastUsed',
    /** column name */
    PasswordHash = 'passwordHash',
    /** column name */
    PhoneNumber = 'phoneNumber',
    /** column name */
    PhoneNumberVerified = 'phoneNumberVerified',
    /** column name */
    Ticket = 'ticket',
    /** column name */
    TicketExpiresAt = 'ticketExpiresAt',
    /** column name */
    TotpSecret = 'totpSecret',
    /** column name */
    UpdatedAt = 'updatedAt',
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
    /** column name */
    Disabled = 'disabled',
    /** column name */
    EmailVerified = 'emailVerified',
    /** column name */
    IsAnonymous = 'isAnonymous',
    /** column name */
    PhoneNumberVerified = 'phoneNumberVerified',
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
    /** column name */
    Disabled = 'disabled',
    /** column name */
    EmailVerified = 'emailVerified',
    /** column name */
    IsAnonymous = 'isAnonymous',
    /** column name */
    PhoneNumberVerified = 'phoneNumberVerified',
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
    activeMfaType?: InputMaybe<Scalars['String']['input']>;
    avatarUrl?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    currentChallenge?: InputMaybe<Scalars['String']['input']>;
    defaultRole?: InputMaybe<Scalars['String']['input']>;
    disabled?: InputMaybe<Scalars['Boolean']['input']>;
    displayName?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['citext']['input']>;
    emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
    lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
    newEmail?: InputMaybe<Scalars['citext']['input']>;
    otpHash?: InputMaybe<Scalars['String']['input']>;
    otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
    otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
    passwordHash?: InputMaybe<Scalars['String']['input']>;
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
    phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
    ticket?: InputMaybe<Scalars['String']['input']>;
    ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
    totpSecret?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Users_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
    activeMfaType?: InputMaybe<Scalars['String']['input']>;
    avatarUrl?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    currentChallenge?: InputMaybe<Scalars['String']['input']>;
    defaultRole?: InputMaybe<Scalars['String']['input']>;
    disabled?: InputMaybe<Scalars['Boolean']['input']>;
    displayName?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['citext']['input']>;
    emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
    lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
    newEmail?: InputMaybe<Scalars['citext']['input']>;
    otpHash?: InputMaybe<Scalars['String']['input']>;
    otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
    otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
    passwordHash?: InputMaybe<Scalars['String']['input']>;
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
    phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
    ticket?: InputMaybe<Scalars['String']['input']>;
    ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
    totpSecret?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
    /** column name */
    ActiveMfaType = 'activeMfaType',
    /** column name */
    AvatarUrl = 'avatarUrl',
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    CurrentChallenge = 'currentChallenge',
    /** column name */
    DefaultRole = 'defaultRole',
    /** column name */
    Disabled = 'disabled',
    /** column name */
    DisplayName = 'displayName',
    /** column name */
    Email = 'email',
    /** column name */
    EmailVerified = 'emailVerified',
    /** column name */
    Id = 'id',
    /** column name */
    IsAnonymous = 'isAnonymous',
    /** column name */
    LastSeen = 'lastSeen',
    /** column name */
    Locale = 'locale',
    /** column name */
    Metadata = 'metadata',
    /** column name */
    NewEmail = 'newEmail',
    /** column name */
    OtpHash = 'otpHash',
    /** column name */
    OtpHashExpiresAt = 'otpHashExpiresAt',
    /** column name */
    OtpMethodLastUsed = 'otpMethodLastUsed',
    /** column name */
    PasswordHash = 'passwordHash',
    /** column name */
    PhoneNumber = 'phoneNumber',
    /** column name */
    PhoneNumberVerified = 'phoneNumberVerified',
    /** column name */
    Ticket = 'ticket',
    /** column name */
    TicketExpiresAt = 'ticketExpiresAt',
    /** column name */
    TotpSecret = 'totpSecret',
    /** column name */
    UpdatedAt = 'updatedAt',
}

export type Users_Updates = {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: InputMaybe<Users_Append_Input>;
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: InputMaybe<Users_Delete_Key_Input>;
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: InputMaybe<Users_Prepend_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Users_Set_Input>;
    /** filter the rows which have to be updated */
    where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['uuid']['input']>;
    _gt?: InputMaybe<Scalars['uuid']['input']>;
    _gte?: InputMaybe<Scalars['uuid']['input']>;
    _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['uuid']['input']>;
    _lte?: InputMaybe<Scalars['uuid']['input']>;
    _neq?: InputMaybe<Scalars['uuid']['input']>;
    _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "wrestlers" */
export type Wrestlers = {
    __typename?: 'wrestlers';
    /** An object relationship */
    body_type: Body_Types;
    body_type_id: Scalars['Int']['output'];
    /** An object relationship */
    brand?: Maybe<Brands>;
    brand_id?: Maybe<Scalars['Int']['output']>;
    country?: Maybe<Scalars['String']['output']>;
    created_at: Scalars['timestamptz']['output'];
    /** An array relationship */
    current_championships: Array<Champions>;
    /** An aggregate relationship */
    current_championships_aggregate: Champions_Aggregate;
    debut_month?: Maybe<Scalars['Int']['output']>;
    debut_year: Scalars['Int']['output'];
    game_active: Scalars['Boolean']['output'];
    game_primary: Scalars['Int']['output'];
    game_secondary: Scalars['Int']['output'];
    game_tag_team: Scalars['Int']['output'];
    game_tertiary: Scalars['Int']['output'];
    gender: Scalars['Gender']['output'];
    height: Scalars['Int']['output'];
    id: Scalars['Int']['output'];
    image?: Maybe<Scalars['String']['output']>;
    /** An array relationship */
    matches_participated: Array<Match_Participants>;
    /** An aggregate relationship */
    matches_participated_aggregate: Match_Participants_Aggregate;
    /** An array relationship */
    matches_won: Array<Match_Winners>;
    /** An aggregate relationship */
    matches_won_aggregate: Match_Winners_Aggregate;
    name: Scalars['String']['output'];
    original_active: Scalars['Boolean']['output'];
    original_name: Scalars['String']['output'];
    original_primary: Scalars['Int']['output'];
    /** An object relationship */
    original_promotion?: Maybe<Promotions>;
    original_promotion_id?: Maybe<Scalars['Int']['output']>;
    original_secondary: Scalars['Int']['output'];
    original_tag_team: Scalars['Int']['output'];
    original_tertiary: Scalars['Int']['output'];
    ovr: Scalars['Int']['output'];
    /** An array relationship */
    tag_teams: Array<Tag_Team_Members>;
    /** An aggregate relationship */
    tag_teams_aggregate: Tag_Team_Members_Aggregate;
    updated_at: Scalars['timestamptz']['output'];
    weight: Scalars['Int']['output'];
};

/** columns and relationships of "wrestlers" */
export type WrestlersCurrent_ChampionshipsArgs = {
    distinct_on?: InputMaybe<Array<Champions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Champions_Order_By>>;
    where?: InputMaybe<Champions_Bool_Exp>;
};

/** columns and relationships of "wrestlers" */
export type WrestlersCurrent_Championships_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Champions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Champions_Order_By>>;
    where?: InputMaybe<Champions_Bool_Exp>;
};

/** columns and relationships of "wrestlers" */
export type WrestlersMatches_ParticipatedArgs = {
    distinct_on?: InputMaybe<Array<Match_Participants_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Participants_Order_By>>;
    where?: InputMaybe<Match_Participants_Bool_Exp>;
};

/** columns and relationships of "wrestlers" */
export type WrestlersMatches_Participated_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Participants_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Participants_Order_By>>;
    where?: InputMaybe<Match_Participants_Bool_Exp>;
};

/** columns and relationships of "wrestlers" */
export type WrestlersMatches_WonArgs = {
    distinct_on?: InputMaybe<Array<Match_Winners_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Winners_Order_By>>;
    where?: InputMaybe<Match_Winners_Bool_Exp>;
};

/** columns and relationships of "wrestlers" */
export type WrestlersMatches_Won_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Match_Winners_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Match_Winners_Order_By>>;
    where?: InputMaybe<Match_Winners_Bool_Exp>;
};

/** columns and relationships of "wrestlers" */
export type WrestlersTag_TeamsArgs = {
    distinct_on?: InputMaybe<Array<Tag_Team_Members_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Tag_Team_Members_Order_By>>;
    where?: InputMaybe<Tag_Team_Members_Bool_Exp>;
};

/** columns and relationships of "wrestlers" */
export type WrestlersTag_Teams_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Tag_Team_Members_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Tag_Team_Members_Order_By>>;
    where?: InputMaybe<Tag_Team_Members_Bool_Exp>;
};

/** aggregated selection of "wrestlers" */
export type Wrestlers_Aggregate = {
    __typename?: 'wrestlers_aggregate';
    aggregate?: Maybe<Wrestlers_Aggregate_Fields>;
    nodes: Array<Wrestlers>;
};

export type Wrestlers_Aggregate_Bool_Exp = {
    bool_and?: InputMaybe<Wrestlers_Aggregate_Bool_Exp_Bool_And>;
    bool_or?: InputMaybe<Wrestlers_Aggregate_Bool_Exp_Bool_Or>;
    count?: InputMaybe<Wrestlers_Aggregate_Bool_Exp_Count>;
};

export type Wrestlers_Aggregate_Bool_Exp_Bool_And = {
    arguments: Wrestlers_Select_Column_Wrestlers_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Wrestlers_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};

export type Wrestlers_Aggregate_Bool_Exp_Bool_Or = {
    arguments: Wrestlers_Select_Column_Wrestlers_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Wrestlers_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};

export type Wrestlers_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Wrestlers_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Wrestlers_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "wrestlers" */
export type Wrestlers_Aggregate_Fields = {
    __typename?: 'wrestlers_aggregate_fields';
    avg?: Maybe<Wrestlers_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Wrestlers_Max_Fields>;
    min?: Maybe<Wrestlers_Min_Fields>;
    stddev?: Maybe<Wrestlers_Stddev_Fields>;
    stddev_pop?: Maybe<Wrestlers_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Wrestlers_Stddev_Samp_Fields>;
    sum?: Maybe<Wrestlers_Sum_Fields>;
    var_pop?: Maybe<Wrestlers_Var_Pop_Fields>;
    var_samp?: Maybe<Wrestlers_Var_Samp_Fields>;
    variance?: Maybe<Wrestlers_Variance_Fields>;
};

/** aggregate fields of "wrestlers" */
export type Wrestlers_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Wrestlers_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "wrestlers" */
export type Wrestlers_Aggregate_Order_By = {
    avg?: InputMaybe<Wrestlers_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Wrestlers_Max_Order_By>;
    min?: InputMaybe<Wrestlers_Min_Order_By>;
    stddev?: InputMaybe<Wrestlers_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Wrestlers_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Wrestlers_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Wrestlers_Sum_Order_By>;
    var_pop?: InputMaybe<Wrestlers_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Wrestlers_Var_Samp_Order_By>;
    variance?: InputMaybe<Wrestlers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "wrestlers" */
export type Wrestlers_Arr_Rel_Insert_Input = {
    data: Array<Wrestlers_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Wrestlers_On_Conflict>;
};

/** aggregate avg on columns */
export type Wrestlers_Avg_Fields = {
    __typename?: 'wrestlers_avg_fields';
    body_type_id?: Maybe<Scalars['Float']['output']>;
    brand_id?: Maybe<Scalars['Float']['output']>;
    debut_month?: Maybe<Scalars['Float']['output']>;
    debut_year?: Maybe<Scalars['Float']['output']>;
    game_primary?: Maybe<Scalars['Float']['output']>;
    game_secondary?: Maybe<Scalars['Float']['output']>;
    game_tag_team?: Maybe<Scalars['Float']['output']>;
    game_tertiary?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    original_primary?: Maybe<Scalars['Float']['output']>;
    original_promotion_id?: Maybe<Scalars['Float']['output']>;
    original_secondary?: Maybe<Scalars['Float']['output']>;
    original_tag_team?: Maybe<Scalars['Float']['output']>;
    original_tertiary?: Maybe<Scalars['Float']['output']>;
    ovr?: Maybe<Scalars['Float']['output']>;
    weight?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "wrestlers" */
export type Wrestlers_Avg_Order_By = {
    body_type_id?: InputMaybe<Order_By>;
    brand_id?: InputMaybe<Order_By>;
    debut_month?: InputMaybe<Order_By>;
    debut_year?: InputMaybe<Order_By>;
    game_primary?: InputMaybe<Order_By>;
    game_secondary?: InputMaybe<Order_By>;
    game_tag_team?: InputMaybe<Order_By>;
    game_tertiary?: InputMaybe<Order_By>;
    height?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    original_primary?: InputMaybe<Order_By>;
    original_promotion_id?: InputMaybe<Order_By>;
    original_secondary?: InputMaybe<Order_By>;
    original_tag_team?: InputMaybe<Order_By>;
    original_tertiary?: InputMaybe<Order_By>;
    ovr?: InputMaybe<Order_By>;
    weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "wrestlers". All fields are combined with a logical 'AND'. */
export type Wrestlers_Bool_Exp = {
    _and?: InputMaybe<Array<Wrestlers_Bool_Exp>>;
    _not?: InputMaybe<Wrestlers_Bool_Exp>;
    _or?: InputMaybe<Array<Wrestlers_Bool_Exp>>;
    body_type?: InputMaybe<Body_Types_Bool_Exp>;
    body_type_id?: InputMaybe<Int_Comparison_Exp>;
    brand?: InputMaybe<Brands_Bool_Exp>;
    brand_id?: InputMaybe<Int_Comparison_Exp>;
    country?: InputMaybe<String_Comparison_Exp>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    current_championships?: InputMaybe<Champions_Bool_Exp>;
    current_championships_aggregate?: InputMaybe<Champions_Aggregate_Bool_Exp>;
    debut_month?: InputMaybe<Int_Comparison_Exp>;
    debut_year?: InputMaybe<Int_Comparison_Exp>;
    game_active?: InputMaybe<Boolean_Comparison_Exp>;
    game_primary?: InputMaybe<Int_Comparison_Exp>;
    game_secondary?: InputMaybe<Int_Comparison_Exp>;
    game_tag_team?: InputMaybe<Int_Comparison_Exp>;
    game_tertiary?: InputMaybe<Int_Comparison_Exp>;
    gender?: InputMaybe<Gender_Comparison_Exp>;
    height?: InputMaybe<Int_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    image?: InputMaybe<String_Comparison_Exp>;
    matches_participated?: InputMaybe<Match_Participants_Bool_Exp>;
    matches_participated_aggregate?: InputMaybe<Match_Participants_Aggregate_Bool_Exp>;
    matches_won?: InputMaybe<Match_Winners_Bool_Exp>;
    matches_won_aggregate?: InputMaybe<Match_Winners_Aggregate_Bool_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    original_active?: InputMaybe<Boolean_Comparison_Exp>;
    original_name?: InputMaybe<String_Comparison_Exp>;
    original_primary?: InputMaybe<Int_Comparison_Exp>;
    original_promotion?: InputMaybe<Promotions_Bool_Exp>;
    original_promotion_id?: InputMaybe<Int_Comparison_Exp>;
    original_secondary?: InputMaybe<Int_Comparison_Exp>;
    original_tag_team?: InputMaybe<Int_Comparison_Exp>;
    original_tertiary?: InputMaybe<Int_Comparison_Exp>;
    ovr?: InputMaybe<Int_Comparison_Exp>;
    tag_teams?: InputMaybe<Tag_Team_Members_Bool_Exp>;
    tag_teams_aggregate?: InputMaybe<Tag_Team_Members_Aggregate_Bool_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    weight?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "wrestlers" */
export enum Wrestlers_Constraint {
    /** unique or primary key constraint on columns "id" */
    WrestlersPkey = 'wrestlers_pkey',
}

/** input type for incrementing numeric columns in table "wrestlers" */
export type Wrestlers_Inc_Input = {
    body_type_id?: InputMaybe<Scalars['Int']['input']>;
    brand_id?: InputMaybe<Scalars['Int']['input']>;
    debut_month?: InputMaybe<Scalars['Int']['input']>;
    debut_year?: InputMaybe<Scalars['Int']['input']>;
    game_primary?: InputMaybe<Scalars['Int']['input']>;
    game_secondary?: InputMaybe<Scalars['Int']['input']>;
    game_tag_team?: InputMaybe<Scalars['Int']['input']>;
    game_tertiary?: InputMaybe<Scalars['Int']['input']>;
    height?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    original_primary?: InputMaybe<Scalars['Int']['input']>;
    original_promotion_id?: InputMaybe<Scalars['Int']['input']>;
    original_secondary?: InputMaybe<Scalars['Int']['input']>;
    original_tag_team?: InputMaybe<Scalars['Int']['input']>;
    original_tertiary?: InputMaybe<Scalars['Int']['input']>;
    ovr?: InputMaybe<Scalars['Int']['input']>;
    weight?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "wrestlers" */
export type Wrestlers_Insert_Input = {
    body_type?: InputMaybe<Body_Types_Obj_Rel_Insert_Input>;
    body_type_id?: InputMaybe<Scalars['Int']['input']>;
    brand?: InputMaybe<Brands_Obj_Rel_Insert_Input>;
    brand_id?: InputMaybe<Scalars['Int']['input']>;
    country?: InputMaybe<Scalars['String']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    current_championships?: InputMaybe<Champions_Arr_Rel_Insert_Input>;
    debut_month?: InputMaybe<Scalars['Int']['input']>;
    debut_year?: InputMaybe<Scalars['Int']['input']>;
    game_active?: InputMaybe<Scalars['Boolean']['input']>;
    game_primary?: InputMaybe<Scalars['Int']['input']>;
    game_secondary?: InputMaybe<Scalars['Int']['input']>;
    game_tag_team?: InputMaybe<Scalars['Int']['input']>;
    game_tertiary?: InputMaybe<Scalars['Int']['input']>;
    gender?: InputMaybe<Scalars['Gender']['input']>;
    height?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    matches_participated?: InputMaybe<Match_Participants_Arr_Rel_Insert_Input>;
    matches_won?: InputMaybe<Match_Winners_Arr_Rel_Insert_Input>;
    name?: InputMaybe<Scalars['String']['input']>;
    original_active?: InputMaybe<Scalars['Boolean']['input']>;
    original_name?: InputMaybe<Scalars['String']['input']>;
    original_primary?: InputMaybe<Scalars['Int']['input']>;
    original_promotion?: InputMaybe<Promotions_Obj_Rel_Insert_Input>;
    original_promotion_id?: InputMaybe<Scalars['Int']['input']>;
    original_secondary?: InputMaybe<Scalars['Int']['input']>;
    original_tag_team?: InputMaybe<Scalars['Int']['input']>;
    original_tertiary?: InputMaybe<Scalars['Int']['input']>;
    ovr?: InputMaybe<Scalars['Int']['input']>;
    tag_teams?: InputMaybe<Tag_Team_Members_Arr_Rel_Insert_Input>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Wrestlers_Max_Fields = {
    __typename?: 'wrestlers_max_fields';
    body_type_id?: Maybe<Scalars['Int']['output']>;
    brand_id?: Maybe<Scalars['Int']['output']>;
    country?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    debut_month?: Maybe<Scalars['Int']['output']>;
    debut_year?: Maybe<Scalars['Int']['output']>;
    game_primary?: Maybe<Scalars['Int']['output']>;
    game_secondary?: Maybe<Scalars['Int']['output']>;
    game_tag_team?: Maybe<Scalars['Int']['output']>;
    game_tertiary?: Maybe<Scalars['Int']['output']>;
    gender?: Maybe<Scalars['Gender']['output']>;
    height?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    image?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    original_name?: Maybe<Scalars['String']['output']>;
    original_primary?: Maybe<Scalars['Int']['output']>;
    original_promotion_id?: Maybe<Scalars['Int']['output']>;
    original_secondary?: Maybe<Scalars['Int']['output']>;
    original_tag_team?: Maybe<Scalars['Int']['output']>;
    original_tertiary?: Maybe<Scalars['Int']['output']>;
    ovr?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
    weight?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "wrestlers" */
export type Wrestlers_Max_Order_By = {
    body_type_id?: InputMaybe<Order_By>;
    brand_id?: InputMaybe<Order_By>;
    country?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    debut_month?: InputMaybe<Order_By>;
    debut_year?: InputMaybe<Order_By>;
    game_primary?: InputMaybe<Order_By>;
    game_secondary?: InputMaybe<Order_By>;
    game_tag_team?: InputMaybe<Order_By>;
    game_tertiary?: InputMaybe<Order_By>;
    gender?: InputMaybe<Order_By>;
    height?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    image?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    original_name?: InputMaybe<Order_By>;
    original_primary?: InputMaybe<Order_By>;
    original_promotion_id?: InputMaybe<Order_By>;
    original_secondary?: InputMaybe<Order_By>;
    original_tag_team?: InputMaybe<Order_By>;
    original_tertiary?: InputMaybe<Order_By>;
    ovr?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Wrestlers_Min_Fields = {
    __typename?: 'wrestlers_min_fields';
    body_type_id?: Maybe<Scalars['Int']['output']>;
    brand_id?: Maybe<Scalars['Int']['output']>;
    country?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['timestamptz']['output']>;
    debut_month?: Maybe<Scalars['Int']['output']>;
    debut_year?: Maybe<Scalars['Int']['output']>;
    game_primary?: Maybe<Scalars['Int']['output']>;
    game_secondary?: Maybe<Scalars['Int']['output']>;
    game_tag_team?: Maybe<Scalars['Int']['output']>;
    game_tertiary?: Maybe<Scalars['Int']['output']>;
    gender?: Maybe<Scalars['Gender']['output']>;
    height?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    image?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    original_name?: Maybe<Scalars['String']['output']>;
    original_primary?: Maybe<Scalars['Int']['output']>;
    original_promotion_id?: Maybe<Scalars['Int']['output']>;
    original_secondary?: Maybe<Scalars['Int']['output']>;
    original_tag_team?: Maybe<Scalars['Int']['output']>;
    original_tertiary?: Maybe<Scalars['Int']['output']>;
    ovr?: Maybe<Scalars['Int']['output']>;
    updated_at?: Maybe<Scalars['timestamptz']['output']>;
    weight?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "wrestlers" */
export type Wrestlers_Min_Order_By = {
    body_type_id?: InputMaybe<Order_By>;
    brand_id?: InputMaybe<Order_By>;
    country?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    debut_month?: InputMaybe<Order_By>;
    debut_year?: InputMaybe<Order_By>;
    game_primary?: InputMaybe<Order_By>;
    game_secondary?: InputMaybe<Order_By>;
    game_tag_team?: InputMaybe<Order_By>;
    game_tertiary?: InputMaybe<Order_By>;
    gender?: InputMaybe<Order_By>;
    height?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    image?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    original_name?: InputMaybe<Order_By>;
    original_primary?: InputMaybe<Order_By>;
    original_promotion_id?: InputMaybe<Order_By>;
    original_secondary?: InputMaybe<Order_By>;
    original_tag_team?: InputMaybe<Order_By>;
    original_tertiary?: InputMaybe<Order_By>;
    ovr?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "wrestlers" */
export type Wrestlers_Mutation_Response = {
    __typename?: 'wrestlers_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Wrestlers>;
};

/** input type for inserting object relation for remote table "wrestlers" */
export type Wrestlers_Obj_Rel_Insert_Input = {
    data: Wrestlers_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Wrestlers_On_Conflict>;
};

/** on_conflict condition type for table "wrestlers" */
export type Wrestlers_On_Conflict = {
    constraint: Wrestlers_Constraint;
    update_columns?: Array<Wrestlers_Update_Column>;
    where?: InputMaybe<Wrestlers_Bool_Exp>;
};

/** Ordering options when selecting data from "wrestlers". */
export type Wrestlers_Order_By = {
    body_type?: InputMaybe<Body_Types_Order_By>;
    body_type_id?: InputMaybe<Order_By>;
    brand?: InputMaybe<Brands_Order_By>;
    brand_id?: InputMaybe<Order_By>;
    country?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    current_championships_aggregate?: InputMaybe<Champions_Aggregate_Order_By>;
    debut_month?: InputMaybe<Order_By>;
    debut_year?: InputMaybe<Order_By>;
    game_active?: InputMaybe<Order_By>;
    game_primary?: InputMaybe<Order_By>;
    game_secondary?: InputMaybe<Order_By>;
    game_tag_team?: InputMaybe<Order_By>;
    game_tertiary?: InputMaybe<Order_By>;
    gender?: InputMaybe<Order_By>;
    height?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    image?: InputMaybe<Order_By>;
    matches_participated_aggregate?: InputMaybe<Match_Participants_Aggregate_Order_By>;
    matches_won_aggregate?: InputMaybe<Match_Winners_Aggregate_Order_By>;
    name?: InputMaybe<Order_By>;
    original_active?: InputMaybe<Order_By>;
    original_name?: InputMaybe<Order_By>;
    original_primary?: InputMaybe<Order_By>;
    original_promotion?: InputMaybe<Promotions_Order_By>;
    original_promotion_id?: InputMaybe<Order_By>;
    original_secondary?: InputMaybe<Order_By>;
    original_tag_team?: InputMaybe<Order_By>;
    original_tertiary?: InputMaybe<Order_By>;
    ovr?: InputMaybe<Order_By>;
    tag_teams_aggregate?: InputMaybe<Tag_Team_Members_Aggregate_Order_By>;
    updated_at?: InputMaybe<Order_By>;
    weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: wrestlers */
export type Wrestlers_Pk_Columns_Input = {
    id: Scalars['Int']['input'];
};

/** select columns of table "wrestlers" */
export enum Wrestlers_Select_Column {
    /** column name */
    BodyTypeId = 'body_type_id',
    /** column name */
    BrandId = 'brand_id',
    /** column name */
    Country = 'country',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    DebutMonth = 'debut_month',
    /** column name */
    DebutYear = 'debut_year',
    /** column name */
    GameActive = 'game_active',
    /** column name */
    GamePrimary = 'game_primary',
    /** column name */
    GameSecondary = 'game_secondary',
    /** column name */
    GameTagTeam = 'game_tag_team',
    /** column name */
    GameTertiary = 'game_tertiary',
    /** column name */
    Gender = 'gender',
    /** column name */
    Height = 'height',
    /** column name */
    Id = 'id',
    /** column name */
    Image = 'image',
    /** column name */
    Name = 'name',
    /** column name */
    OriginalActive = 'original_active',
    /** column name */
    OriginalName = 'original_name',
    /** column name */
    OriginalPrimary = 'original_primary',
    /** column name */
    OriginalPromotionId = 'original_promotion_id',
    /** column name */
    OriginalSecondary = 'original_secondary',
    /** column name */
    OriginalTagTeam = 'original_tag_team',
    /** column name */
    OriginalTertiary = 'original_tertiary',
    /** column name */
    Ovr = 'ovr',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    Weight = 'weight',
}

/** select "wrestlers_aggregate_bool_exp_bool_and_arguments_columns" columns of table "wrestlers" */
export enum Wrestlers_Select_Column_Wrestlers_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
    /** column name */
    GameActive = 'game_active',
    /** column name */
    OriginalActive = 'original_active',
}

/** select "wrestlers_aggregate_bool_exp_bool_or_arguments_columns" columns of table "wrestlers" */
export enum Wrestlers_Select_Column_Wrestlers_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
    /** column name */
    GameActive = 'game_active',
    /** column name */
    OriginalActive = 'original_active',
}

/** input type for updating data in table "wrestlers" */
export type Wrestlers_Set_Input = {
    body_type_id?: InputMaybe<Scalars['Int']['input']>;
    brand_id?: InputMaybe<Scalars['Int']['input']>;
    country?: InputMaybe<Scalars['String']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    debut_month?: InputMaybe<Scalars['Int']['input']>;
    debut_year?: InputMaybe<Scalars['Int']['input']>;
    game_active?: InputMaybe<Scalars['Boolean']['input']>;
    game_primary?: InputMaybe<Scalars['Int']['input']>;
    game_secondary?: InputMaybe<Scalars['Int']['input']>;
    game_tag_team?: InputMaybe<Scalars['Int']['input']>;
    game_tertiary?: InputMaybe<Scalars['Int']['input']>;
    gender?: InputMaybe<Scalars['Gender']['input']>;
    height?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    original_active?: InputMaybe<Scalars['Boolean']['input']>;
    original_name?: InputMaybe<Scalars['String']['input']>;
    original_primary?: InputMaybe<Scalars['Int']['input']>;
    original_promotion_id?: InputMaybe<Scalars['Int']['input']>;
    original_secondary?: InputMaybe<Scalars['Int']['input']>;
    original_tag_team?: InputMaybe<Scalars['Int']['input']>;
    original_tertiary?: InputMaybe<Scalars['Int']['input']>;
    ovr?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Wrestlers_Stddev_Fields = {
    __typename?: 'wrestlers_stddev_fields';
    body_type_id?: Maybe<Scalars['Float']['output']>;
    brand_id?: Maybe<Scalars['Float']['output']>;
    debut_month?: Maybe<Scalars['Float']['output']>;
    debut_year?: Maybe<Scalars['Float']['output']>;
    game_primary?: Maybe<Scalars['Float']['output']>;
    game_secondary?: Maybe<Scalars['Float']['output']>;
    game_tag_team?: Maybe<Scalars['Float']['output']>;
    game_tertiary?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    original_primary?: Maybe<Scalars['Float']['output']>;
    original_promotion_id?: Maybe<Scalars['Float']['output']>;
    original_secondary?: Maybe<Scalars['Float']['output']>;
    original_tag_team?: Maybe<Scalars['Float']['output']>;
    original_tertiary?: Maybe<Scalars['Float']['output']>;
    ovr?: Maybe<Scalars['Float']['output']>;
    weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "wrestlers" */
export type Wrestlers_Stddev_Order_By = {
    body_type_id?: InputMaybe<Order_By>;
    brand_id?: InputMaybe<Order_By>;
    debut_month?: InputMaybe<Order_By>;
    debut_year?: InputMaybe<Order_By>;
    game_primary?: InputMaybe<Order_By>;
    game_secondary?: InputMaybe<Order_By>;
    game_tag_team?: InputMaybe<Order_By>;
    game_tertiary?: InputMaybe<Order_By>;
    height?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    original_primary?: InputMaybe<Order_By>;
    original_promotion_id?: InputMaybe<Order_By>;
    original_secondary?: InputMaybe<Order_By>;
    original_tag_team?: InputMaybe<Order_By>;
    original_tertiary?: InputMaybe<Order_By>;
    ovr?: InputMaybe<Order_By>;
    weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Wrestlers_Stddev_Pop_Fields = {
    __typename?: 'wrestlers_stddev_pop_fields';
    body_type_id?: Maybe<Scalars['Float']['output']>;
    brand_id?: Maybe<Scalars['Float']['output']>;
    debut_month?: Maybe<Scalars['Float']['output']>;
    debut_year?: Maybe<Scalars['Float']['output']>;
    game_primary?: Maybe<Scalars['Float']['output']>;
    game_secondary?: Maybe<Scalars['Float']['output']>;
    game_tag_team?: Maybe<Scalars['Float']['output']>;
    game_tertiary?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    original_primary?: Maybe<Scalars['Float']['output']>;
    original_promotion_id?: Maybe<Scalars['Float']['output']>;
    original_secondary?: Maybe<Scalars['Float']['output']>;
    original_tag_team?: Maybe<Scalars['Float']['output']>;
    original_tertiary?: Maybe<Scalars['Float']['output']>;
    ovr?: Maybe<Scalars['Float']['output']>;
    weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "wrestlers" */
export type Wrestlers_Stddev_Pop_Order_By = {
    body_type_id?: InputMaybe<Order_By>;
    brand_id?: InputMaybe<Order_By>;
    debut_month?: InputMaybe<Order_By>;
    debut_year?: InputMaybe<Order_By>;
    game_primary?: InputMaybe<Order_By>;
    game_secondary?: InputMaybe<Order_By>;
    game_tag_team?: InputMaybe<Order_By>;
    game_tertiary?: InputMaybe<Order_By>;
    height?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    original_primary?: InputMaybe<Order_By>;
    original_promotion_id?: InputMaybe<Order_By>;
    original_secondary?: InputMaybe<Order_By>;
    original_tag_team?: InputMaybe<Order_By>;
    original_tertiary?: InputMaybe<Order_By>;
    ovr?: InputMaybe<Order_By>;
    weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Wrestlers_Stddev_Samp_Fields = {
    __typename?: 'wrestlers_stddev_samp_fields';
    body_type_id?: Maybe<Scalars['Float']['output']>;
    brand_id?: Maybe<Scalars['Float']['output']>;
    debut_month?: Maybe<Scalars['Float']['output']>;
    debut_year?: Maybe<Scalars['Float']['output']>;
    game_primary?: Maybe<Scalars['Float']['output']>;
    game_secondary?: Maybe<Scalars['Float']['output']>;
    game_tag_team?: Maybe<Scalars['Float']['output']>;
    game_tertiary?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    original_primary?: Maybe<Scalars['Float']['output']>;
    original_promotion_id?: Maybe<Scalars['Float']['output']>;
    original_secondary?: Maybe<Scalars['Float']['output']>;
    original_tag_team?: Maybe<Scalars['Float']['output']>;
    original_tertiary?: Maybe<Scalars['Float']['output']>;
    ovr?: Maybe<Scalars['Float']['output']>;
    weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "wrestlers" */
export type Wrestlers_Stddev_Samp_Order_By = {
    body_type_id?: InputMaybe<Order_By>;
    brand_id?: InputMaybe<Order_By>;
    debut_month?: InputMaybe<Order_By>;
    debut_year?: InputMaybe<Order_By>;
    game_primary?: InputMaybe<Order_By>;
    game_secondary?: InputMaybe<Order_By>;
    game_tag_team?: InputMaybe<Order_By>;
    game_tertiary?: InputMaybe<Order_By>;
    height?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    original_primary?: InputMaybe<Order_By>;
    original_promotion_id?: InputMaybe<Order_By>;
    original_secondary?: InputMaybe<Order_By>;
    original_tag_team?: InputMaybe<Order_By>;
    original_tertiary?: InputMaybe<Order_By>;
    ovr?: InputMaybe<Order_By>;
    weight?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "wrestlers" */
export type Wrestlers_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Wrestlers_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Wrestlers_Stream_Cursor_Value_Input = {
    body_type_id?: InputMaybe<Scalars['Int']['input']>;
    brand_id?: InputMaybe<Scalars['Int']['input']>;
    country?: InputMaybe<Scalars['String']['input']>;
    created_at?: InputMaybe<Scalars['timestamptz']['input']>;
    debut_month?: InputMaybe<Scalars['Int']['input']>;
    debut_year?: InputMaybe<Scalars['Int']['input']>;
    game_active?: InputMaybe<Scalars['Boolean']['input']>;
    game_primary?: InputMaybe<Scalars['Int']['input']>;
    game_secondary?: InputMaybe<Scalars['Int']['input']>;
    game_tag_team?: InputMaybe<Scalars['Int']['input']>;
    game_tertiary?: InputMaybe<Scalars['Int']['input']>;
    gender?: InputMaybe<Scalars['Gender']['input']>;
    height?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['Int']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    original_active?: InputMaybe<Scalars['Boolean']['input']>;
    original_name?: InputMaybe<Scalars['String']['input']>;
    original_primary?: InputMaybe<Scalars['Int']['input']>;
    original_promotion_id?: InputMaybe<Scalars['Int']['input']>;
    original_secondary?: InputMaybe<Scalars['Int']['input']>;
    original_tag_team?: InputMaybe<Scalars['Int']['input']>;
    original_tertiary?: InputMaybe<Scalars['Int']['input']>;
    ovr?: InputMaybe<Scalars['Int']['input']>;
    updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
    weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Wrestlers_Sum_Fields = {
    __typename?: 'wrestlers_sum_fields';
    body_type_id?: Maybe<Scalars['Int']['output']>;
    brand_id?: Maybe<Scalars['Int']['output']>;
    debut_month?: Maybe<Scalars['Int']['output']>;
    debut_year?: Maybe<Scalars['Int']['output']>;
    game_primary?: Maybe<Scalars['Int']['output']>;
    game_secondary?: Maybe<Scalars['Int']['output']>;
    game_tag_team?: Maybe<Scalars['Int']['output']>;
    game_tertiary?: Maybe<Scalars['Int']['output']>;
    height?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    original_primary?: Maybe<Scalars['Int']['output']>;
    original_promotion_id?: Maybe<Scalars['Int']['output']>;
    original_secondary?: Maybe<Scalars['Int']['output']>;
    original_tag_team?: Maybe<Scalars['Int']['output']>;
    original_tertiary?: Maybe<Scalars['Int']['output']>;
    ovr?: Maybe<Scalars['Int']['output']>;
    weight?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "wrestlers" */
export type Wrestlers_Sum_Order_By = {
    body_type_id?: InputMaybe<Order_By>;
    brand_id?: InputMaybe<Order_By>;
    debut_month?: InputMaybe<Order_By>;
    debut_year?: InputMaybe<Order_By>;
    game_primary?: InputMaybe<Order_By>;
    game_secondary?: InputMaybe<Order_By>;
    game_tag_team?: InputMaybe<Order_By>;
    game_tertiary?: InputMaybe<Order_By>;
    height?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    original_primary?: InputMaybe<Order_By>;
    original_promotion_id?: InputMaybe<Order_By>;
    original_secondary?: InputMaybe<Order_By>;
    original_tag_team?: InputMaybe<Order_By>;
    original_tertiary?: InputMaybe<Order_By>;
    ovr?: InputMaybe<Order_By>;
    weight?: InputMaybe<Order_By>;
};

/** update columns of table "wrestlers" */
export enum Wrestlers_Update_Column {
    /** column name */
    BodyTypeId = 'body_type_id',
    /** column name */
    BrandId = 'brand_id',
    /** column name */
    Country = 'country',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    DebutMonth = 'debut_month',
    /** column name */
    DebutYear = 'debut_year',
    /** column name */
    GameActive = 'game_active',
    /** column name */
    GamePrimary = 'game_primary',
    /** column name */
    GameSecondary = 'game_secondary',
    /** column name */
    GameTagTeam = 'game_tag_team',
    /** column name */
    GameTertiary = 'game_tertiary',
    /** column name */
    Gender = 'gender',
    /** column name */
    Height = 'height',
    /** column name */
    Id = 'id',
    /** column name */
    Image = 'image',
    /** column name */
    Name = 'name',
    /** column name */
    OriginalActive = 'original_active',
    /** column name */
    OriginalName = 'original_name',
    /** column name */
    OriginalPrimary = 'original_primary',
    /** column name */
    OriginalPromotionId = 'original_promotion_id',
    /** column name */
    OriginalSecondary = 'original_secondary',
    /** column name */
    OriginalTagTeam = 'original_tag_team',
    /** column name */
    OriginalTertiary = 'original_tertiary',
    /** column name */
    Ovr = 'ovr',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    Weight = 'weight',
}

export type Wrestlers_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Wrestlers_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Wrestlers_Set_Input>;
    /** filter the rows which have to be updated */
    where: Wrestlers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Wrestlers_Var_Pop_Fields = {
    __typename?: 'wrestlers_var_pop_fields';
    body_type_id?: Maybe<Scalars['Float']['output']>;
    brand_id?: Maybe<Scalars['Float']['output']>;
    debut_month?: Maybe<Scalars['Float']['output']>;
    debut_year?: Maybe<Scalars['Float']['output']>;
    game_primary?: Maybe<Scalars['Float']['output']>;
    game_secondary?: Maybe<Scalars['Float']['output']>;
    game_tag_team?: Maybe<Scalars['Float']['output']>;
    game_tertiary?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    original_primary?: Maybe<Scalars['Float']['output']>;
    original_promotion_id?: Maybe<Scalars['Float']['output']>;
    original_secondary?: Maybe<Scalars['Float']['output']>;
    original_tag_team?: Maybe<Scalars['Float']['output']>;
    original_tertiary?: Maybe<Scalars['Float']['output']>;
    ovr?: Maybe<Scalars['Float']['output']>;
    weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "wrestlers" */
export type Wrestlers_Var_Pop_Order_By = {
    body_type_id?: InputMaybe<Order_By>;
    brand_id?: InputMaybe<Order_By>;
    debut_month?: InputMaybe<Order_By>;
    debut_year?: InputMaybe<Order_By>;
    game_primary?: InputMaybe<Order_By>;
    game_secondary?: InputMaybe<Order_By>;
    game_tag_team?: InputMaybe<Order_By>;
    game_tertiary?: InputMaybe<Order_By>;
    height?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    original_primary?: InputMaybe<Order_By>;
    original_promotion_id?: InputMaybe<Order_By>;
    original_secondary?: InputMaybe<Order_By>;
    original_tag_team?: InputMaybe<Order_By>;
    original_tertiary?: InputMaybe<Order_By>;
    ovr?: InputMaybe<Order_By>;
    weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Wrestlers_Var_Samp_Fields = {
    __typename?: 'wrestlers_var_samp_fields';
    body_type_id?: Maybe<Scalars['Float']['output']>;
    brand_id?: Maybe<Scalars['Float']['output']>;
    debut_month?: Maybe<Scalars['Float']['output']>;
    debut_year?: Maybe<Scalars['Float']['output']>;
    game_primary?: Maybe<Scalars['Float']['output']>;
    game_secondary?: Maybe<Scalars['Float']['output']>;
    game_tag_team?: Maybe<Scalars['Float']['output']>;
    game_tertiary?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    original_primary?: Maybe<Scalars['Float']['output']>;
    original_promotion_id?: Maybe<Scalars['Float']['output']>;
    original_secondary?: Maybe<Scalars['Float']['output']>;
    original_tag_team?: Maybe<Scalars['Float']['output']>;
    original_tertiary?: Maybe<Scalars['Float']['output']>;
    ovr?: Maybe<Scalars['Float']['output']>;
    weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "wrestlers" */
export type Wrestlers_Var_Samp_Order_By = {
    body_type_id?: InputMaybe<Order_By>;
    brand_id?: InputMaybe<Order_By>;
    debut_month?: InputMaybe<Order_By>;
    debut_year?: InputMaybe<Order_By>;
    game_primary?: InputMaybe<Order_By>;
    game_secondary?: InputMaybe<Order_By>;
    game_tag_team?: InputMaybe<Order_By>;
    game_tertiary?: InputMaybe<Order_By>;
    height?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    original_primary?: InputMaybe<Order_By>;
    original_promotion_id?: InputMaybe<Order_By>;
    original_secondary?: InputMaybe<Order_By>;
    original_tag_team?: InputMaybe<Order_By>;
    original_tertiary?: InputMaybe<Order_By>;
    ovr?: InputMaybe<Order_By>;
    weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Wrestlers_Variance_Fields = {
    __typename?: 'wrestlers_variance_fields';
    body_type_id?: Maybe<Scalars['Float']['output']>;
    brand_id?: Maybe<Scalars['Float']['output']>;
    debut_month?: Maybe<Scalars['Float']['output']>;
    debut_year?: Maybe<Scalars['Float']['output']>;
    game_primary?: Maybe<Scalars['Float']['output']>;
    game_secondary?: Maybe<Scalars['Float']['output']>;
    game_tag_team?: Maybe<Scalars['Float']['output']>;
    game_tertiary?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    original_primary?: Maybe<Scalars['Float']['output']>;
    original_promotion_id?: Maybe<Scalars['Float']['output']>;
    original_secondary?: Maybe<Scalars['Float']['output']>;
    original_tag_team?: Maybe<Scalars['Float']['output']>;
    original_tertiary?: Maybe<Scalars['Float']['output']>;
    ovr?: Maybe<Scalars['Float']['output']>;
    weight?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "wrestlers" */
export type Wrestlers_Variance_Order_By = {
    body_type_id?: InputMaybe<Order_By>;
    brand_id?: InputMaybe<Order_By>;
    debut_month?: InputMaybe<Order_By>;
    debut_year?: InputMaybe<Order_By>;
    game_primary?: InputMaybe<Order_By>;
    game_secondary?: InputMaybe<Order_By>;
    game_tag_team?: InputMaybe<Order_By>;
    game_tertiary?: InputMaybe<Order_By>;
    height?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    original_primary?: InputMaybe<Order_By>;
    original_promotion_id?: InputMaybe<Order_By>;
    original_secondary?: InputMaybe<Order_By>;
    original_tag_team?: InputMaybe<Order_By>;
    original_tertiary?: InputMaybe<Order_By>;
    ovr?: InputMaybe<Order_By>;
    weight?: InputMaybe<Order_By>;
};
