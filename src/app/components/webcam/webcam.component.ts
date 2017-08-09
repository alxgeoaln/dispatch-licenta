import {Component, OnInit, ElementRef} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})


export class WebcamComponent implements OnInit {
  public videosrc: any;

  constructor(private sanitizer: DomSanitizer, private element: ElementRef) {
  }

  ngOnInit() {
    this.showCam();
  }

  private showCam() {
    // 1. Casting necessary because TypeScript doesn't
    // know object Type 'navigator';
    const nav = <any>navigator;

    // 2. Adjust for all browsers
    nav.getUserMedia = nav.getUserMedia || nav.mozGetUserMedia || nav.webkitGetUserMedia;

    // 4. Get stream from webcam
    nav.getUserMedia(
      {video: true},
      (stream) => {
        const webcamUrl = URL.createObjectURL(stream);

        // 4a. Tell Angular the stream comes from a trusted source
        this.videosrc = this.sanitizer.bypassSecurityTrustUrl(webcamUrl);

        // 4b. Start video element to stream automatically from webcam.
        this.element.nativeElement.querySelector('video').autoplay = true;
      },
      (err) => console.log(err));
  }
}
