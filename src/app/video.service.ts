import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { listVideos } from '../graphql/';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }
}
