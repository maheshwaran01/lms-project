import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})  
export class AdminPortalComponent {
  isShowTopic = false;
  selectedListItem:number|null =null;
    isShowTopic2 = false;
    isShowTopic3= false;
  
 list = [
    { title: 'Adv Java -2303 7 AM' },
    { title: 'Adv- Java 2401 9 AM' },
    { title: 'Adv-Java-2301-9 AM' },
    { title: 'Advance Java-2302-12PM' },
    { title: 'Ansible' },
    { title: 'Archived' },
    { title: 'AWS - 2302 - 10AM' },
    { title: 'AWS - 2304 7:15 AM' },
    { title: 'AWS - 2305 9 AM' },
    { title: 'AWS-2301-07 AM' },
    { title: 'AWS-2405 10:15 AM' },
    { title: 'Azure Cloud - 2301 10:15 AM' },
    { title: 'Azure Cloud - 2302 - 7PM' },
    { title: 'Azure Cloud - 2303 7 PM' },
  ];
  newCourse: { title: string } = { title: ''}; 
  addCourse(newCourse:{title:string}) {
    this.list.push({ title:newCourse.title });
    // Optionally, you can clear the form after adding the new course
    this.newCourse={title:'',};
  }
     filteredList = this.list;
     searchTerm:string='';

      onSearchChange(): void {
    this.filteredList = this.list.filter(course =>
      course.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

   selectListItem(index: number): void {
    this.selectedListItem = index;
    this.isShowTopic2=true;
    

  }
    listItem(): void {}
    add() {
    this.isShowTopic = true;
    this.isShowTopic2 = true;
    this.selectedListItem = null;
  }
  class1(){
  this.isShowTopic2= false;
  }
  create(){
  this.isShowTopic=true;
  }
  users(){
  this.isShowTopic3=true;
  this.isShowTopic=false;
  this.isShowTopic2=true;

  }
tabStates: { [key: string]: boolean } = {
    courseInfo: true,
    modules:true,
    resources: false,
    projects: false,
    resume: false,
    enrolled: false,
  };
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
