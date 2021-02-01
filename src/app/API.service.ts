/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateVideoInput = {
  id?: string | null;
  name: string;
  url: string;
};

export type ModelVideoConditionInput = {
  name?: ModelStringInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelVideoConditionInput | null> | null;
  or?: Array<ModelVideoConditionInput | null> | null;
  not?: ModelVideoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateVideoInput = {
  id: string;
  name?: string | null;
  url?: string | null;
};

export type DeleteVideoInput = {
  id?: string | null;
};

export type ModelVideoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelVideoFilterInput | null> | null;
  or?: Array<ModelVideoFilterInput | null> | null;
  not?: ModelVideoFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateVideoMutation = {
  __typename: "Video";
  id: string;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVideoMutation = {
  __typename: "Video";
  id: string;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVideoMutation = {
  __typename: "Video";
  id: string;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type GetVideoQuery = {
  __typename: "Video";
  id: string;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type ListVideosQuery = {
  __typename: "ModelVideoConnection";
  items: Array<{
    __typename: "Video";
    id: string;
    name: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateVideoSubscription = {
  __typename: "Video";
  id: string;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVideoSubscription = {
  __typename: "Video";
  id: string;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVideoSubscription = {
  __typename: "Video";
  id: string;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateVideo(
    input: CreateVideoInput,
    condition?: ModelVideoConditionInput
  ): Promise<CreateVideoMutation> {
    const statement = `mutation CreateVideo($input: CreateVideoInput!, $condition: ModelVideoConditionInput) {
        createVideo(input: $input, condition: $condition) {
          __typename
          id
          name
          url
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVideoMutation>response.data.createVideo;
  }
  async UpdateVideo(
    input: UpdateVideoInput,
    condition?: ModelVideoConditionInput
  ): Promise<UpdateVideoMutation> {
    const statement = `mutation UpdateVideo($input: UpdateVideoInput!, $condition: ModelVideoConditionInput) {
        updateVideo(input: $input, condition: $condition) {
          __typename
          id
          name
          url
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVideoMutation>response.data.updateVideo;
  }
  async DeleteVideo(
    input: DeleteVideoInput,
    condition?: ModelVideoConditionInput
  ): Promise<DeleteVideoMutation> {
    const statement = `mutation DeleteVideo($input: DeleteVideoInput!, $condition: ModelVideoConditionInput) {
        deleteVideo(input: $input, condition: $condition) {
          __typename
          id
          name
          url
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVideoMutation>response.data.deleteVideo;
  }
  async GetVideo(id: string): Promise<GetVideoQuery> {
    const statement = `query GetVideo($id: ID!) {
        getVideo(id: $id) {
          __typename
          id
          name
          url
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVideoQuery>response.data.getVideo;
  }
  async ListVideos(
    filter?: ModelVideoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVideosQuery> {
    const statement = `query ListVideos($filter: ModelVideoFilterInput, $limit: Int, $nextToken: String) {
        listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            url
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVideosQuery>response.data.listVideos;
  }
  OnCreateVideoListener: Observable<
    SubscriptionResponse<OnCreateVideoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVideo {
        onCreateVideo {
          __typename
          id
          name
          url
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateVideoSubscription>>;

  OnUpdateVideoListener: Observable<
    SubscriptionResponse<OnUpdateVideoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVideo {
        onUpdateVideo {
          __typename
          id
          name
          url
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateVideoSubscription>>;

  OnDeleteVideoListener: Observable<
    SubscriptionResponse<OnDeleteVideoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVideo {
        onDeleteVideo {
          __typename
          id
          name
          url
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteVideoSubscription>>;
}
