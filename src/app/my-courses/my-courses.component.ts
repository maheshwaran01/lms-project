import { HttpClient } from '@angular/common/http';
import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {
newVideoLink: any;
constructor(private sanitizer:DomSanitizer,private http: HttpClient){
}
expand(index: number) {
    this.modules[index].isShowTopic = !this.modules[index].isShowTopic;
  }
modules = [
    { name: 'HTML & CSS', isShowTopic: false },
    { name: 'HTML & CSS', isShowTopic: false },
    { name: 'HTML & CSS', isShowTopic: false },
    { name: 'HTML & CSS', isShowTopic: false },
    { name: 'HTML & CSS', isShowTopic: false },
    { name: 'HTML & CSS', isShowTopic: false },
    { name: 'HTML & CSS', isShowTopic: false },
    { name: 'HTML & CSS', isShowTopic: false },
    { name: 'HTML & CSS', isShowTopic: false }, 
    { name: 'HTML & CSS', isShowTopic: false },
  ];
    subtopics = [
    {
      name: '19 June 2023',
      video: "https://www.youtube.com/embed/jFezGsCCOnw?si=ZBepIB5x83CaLLUL",
    },
    {
      name: '20 June 2023',
      video: "https://www.youtube.com/embed/KJfdOZAxJqM?si=8UMqqi6mifzLCJjE",
    },
    {
      name: '21 June 2023',
      video:"https://www.youtube.com/embed/qcIWlOf_3S4?si=u1LagojSTqdLJfhE",
    },
    {
      name: '22 June 2023',
      video: "https://www.youtube.com/embed/hQcFE0RD0cQ?si=XQ-6h6zHwRcl2Kmf" ,
    },
    {
      name: '23 June 2023',
      video:"https://www.youtube.com/embed/tDuruX7XSac?si=b8Vo5fqsRIGDbIJq" ,
    },
  ];
isShowVideo = false;
  selectedTopic: any;
  safeVideoUrl: SafeUrl | undefined;
  showVideo(subtopic: any) {
    this.isShowVideo = true;
    this.selectedTopic = subtopic;
    if (this.selectedTopic && this.selectedTopic.video) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.selectedTopic.video
      );
    }
  }
  uploadVideoLink(videoLink: string) {
    // Call the backend API to upload video links
    this.http.post('/api/uploadVideoLink', { link: videoLink }).subscribe(
        (response) => {
            console.log('Video link uploaded successfully:', response);
            // You can update your frontend as needed
        },
        (error) => {
            console.error('Error uploading video link:', error);
            // Handle errors
        }
    );
}


tabStates: { [key: string]: boolean } = {
    courseInfo: true,
    resources: false,
    projects: false,
    resume: false,
    askAI: false,
  };
1:41
style(tab: string) {
    return {
      color: this.tabStates[tab] ? 'black' : 'grey',
      'border-bottom': this.tabStates[tab]
        ? '2px solid #1F2937'
        : '2px #8F949B solid',
    };
  }
  active(tab: string) {
    Object.keys(this.tabStates).forEach((key) => (this.tabStates[key] = false));
    this.tabStates[tab] = true;
  }
}

