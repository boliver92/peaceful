import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import videojs from 'video.js';

@Component({
  selector: 'app-background-video',
  template: `<video #target class="video-js vjs-16-9" controls muted playsinline preload="none"></video>`,
  styleUrls: ['./background-video.component.css']
})
export class BackgroundVideoComponent implements OnInit, OnDestroy {


  @ViewChild('target', {static: true}) target: ElementRef;

  @Input() options: {
    fluid: boolean,
    aspectRatio: string,
    autoplay: boolean,
    sources: {
      src: string,
      type: string,
    }[],
  };

  player: videojs.Player;

  constructor(private elementRef: ElementRef) { }


  ngOnDestroy(): void {
    if(this.player)
    this.player.dispose();
  }

  ngOnInit(): void {
    this.player = videojs(this.target.nativeElement, 
      this.options, 
      function onPlayerReady() {
        console.log(`onPlayerReady`, this);
      });
  }

}
