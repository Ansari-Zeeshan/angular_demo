import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  btndt:any = [];
  gbdtActive:any = [];
  alldtBtn:any = [];
  aLink:any = [];
  openPanel:any = [];
  iconrevRot:any = [];
  asinglelink:any = [];
  panelOverlay:any;
  storeInd:number;

  navbarItems = [
    {
      label: 'Common Things',
      visible: true,
      items:
      [
        {
          label: 'Entity',
          visible: true,
    
          items: [
            { label: 'Accordian', visible: true, routerLink: "/accordian",
              command: (e) => {
                this.disableEvery(e);
              }
            },
            { label: 'View Entities', visible: true, routerLink: "/nexera/pages/viewentity", 
              command: (e) => {
                this.disableEvery(e);
              }
            },
          ]
        }, 
        {
          label: 'If Else',
          visible: true,
    
          items: [
            { label: 'ifelse', visible: true, routerLink: "/ifelse",
              command: (e) => {
                this.disableEvery(e);
              }
            },
            { label: 'View Opportunities', visible: true, routerLink: "/nexera/pages/opportunitylist",
              command: (e) => {
                this.disableEvery(e);
              }
            },
          ]
        },
        {
          label: 'Style Things',
          visible: true,
    
          items: [
            { label: 'Style Binding', visible: true, routerLink: "/stylethings",
              command: (e) => {
                this.disableEvery(e);
              }  
            },
            { label: 'Grid Layout', visible: true, routerLink: "/gridlayout", 
              command: (e) => {
                this.disableEvery(e);
              }
            }
          ]
        },
        {
          label: 'Hide & Show',
          visible: true,
    
          items: [
            { label: 'Dropdown', visible: true, routerLink: "/hideshow",
              command: (e) => {
                this.disableEvery(e);
              }
            },
            { label: 'View Banker Meetings', visible: true, routerLink: "/nexera/pages/bankermeetinglisting",
              command: (e) => {
                this.disableEvery(e);
              }
            }
          ]
        },
        {
          label: 'Data Binding',
          visible: true,
          routerLink: "/sendingdata",
          command: (e) => {
            this.disableEvery(e);
          }
        }
      ]
    },
    {
      label: 'Todo List',
      visible: true,
      routerLink: '/todolist',
      items: []
    },
    {
      label: 'Calculator',
      visible: true,
      routerLink: '/calculator',
      items: []
    },
    {
      label: 'Backoffice',
      visible: true,
      prefixPath: "/backoffice",
      items:
      [
        {
          label: "Angular Pipe Concept",
          visible: true,
          routerLink: '/pipecomp',
          command: (e) => {        
            this.disableEvery(e);
            // this.checkUserHierarcyScope();
          }
        },
        {
          label: "Show Message",
          visible: true,
          routerLink: '/showmessage',
          command: (e) => {
            this.disableEvery(e);
            // this.checkRole();
          }
        },
        {
          label: "Browser Specific",
          visible: true,
          routerLink: '/browserspecific',
          command: (e) => {
            this.disableEvery(e);
            // this.checkAllocationScope();
          }
        },
        {
          label: "Parent & Child",
          visible: true,
          routerLink: '/parentcomp',
          command: (e) => {
            this.disableEvery(e);
            // this.checkReportScope();
          }
        },
        {
          label: "ROW Table",
          visible: true,
          routerLink: '/rowtable',
          command: (e) => {
            this.disableEvery(e);
            // this.checkReportScope();
          }
        },
        {
          label: "Toggle Table",
          visible: true,
          routerLink: '/toggletable',
          command: (e) => {
            this.disableEvery(e);
            // this.checkReportScope();
          }
        }
      ]
    }
  ]

  disableActive(ev){    
    let dtActive = ev.target.closest('.menubar').querySelector('.dt-navigate.active');
    this.asinglelink = ev.target.closest('.menubar').querySelector('.panel-nav-btn a.single-link.active');
    if(dtActive!=null){
      dtActive.classList.remove('active');
    }
    if(this.asinglelink?.classList.contains('active')){
      this.asinglelink.classList.remove('active');
    }
  }

  disableEvery(ev){    
    if(innerWidth>1024){
      this.asinglelink = ev.target.closest('.navbar').querySelector('.panel-nav-btn a.single-link.active');
      this.gbdtActive = ev.target.closest('.navbar').querySelectorAll('.dt-navigate.active');
      let dtMakeActive = ev.target.closest('.panel-nav-btn').querySelector('button.dt-navigate'),
      dticon = dtMakeActive.querySelector('i'),
      clpanel = ev.target.closest('.panelbar'),
      currelem = ev.target,
      currelemactive = ev.target.closest('.panelbar-elem').querySelector('.single-link.active');
  
      if(this.gbdtActive!=null){
        this.gbdtActive.forEach((elem)=>{
          elem.classList.remove('active');
        })
        clpanel.classList.remove('active');
        dticon.classList.remove('rotate180');
        dtMakeActive.classList.add('active');
        this.panelOverlay.classList.remove('active');
      }
      if(!currelem.classList.contains('active')){
        currelemactive?.classList.remove('active');
        currelem.classList.add('active');
      }
      if(this.asinglelink?.classList.contains('active')){
        this.asinglelink.classList.remove('active');
      }
    }
  }

  redirectPage(ev){
    this.asinglelink = ev.target.closest('.navbar').querySelector('.panel-nav-btn a.single-link.active');
    let dtNavActive = ev.target.closest('.navbar').querySelector('.dt-navigate.active');
    let dtNav = ev.target.closest('.panel-nav-btn').querySelector('.dt-navigate');
    let text = ev.target.innerText.toLowerCase().trim();       
    localStorage.setItem('lasturlname', text);    

    if(!dtNav.classList.contains('active')){
      dtNav.classList.add('active');
      if(dtNavActive!=null){
        dtNavActive.classList.remove('active');
      }
    }
    if(this.asinglelink?.classList.contains('active')){
      this.asinglelink.classList.remove('active');
    }
  }
  
  openChildPanel(e){
    let closeul = e.target.closest('.elem-combined').querySelector('.panelbar-elem-child'),
    closeulact = e.target.closest('.panelbar-elem').querySelector('.panelbar-elem-child.active'),
    closeulli = closeulact?.previousElementSibling,
    closeulacticon = closeulact?.previousElementSibling.querySelector('.panel-main-li i'),
    arrowIcon = e.target.closest('.panel-main-li').querySelector('i'),
    closeli = e.target.closest('.panel-main-li');
    
     if(closeul!=null){
        if(!closeul.classList.contains('active')){
          closeli.classList.add('active');
          closeul.classList.add('active'); 
          arrowIcon.classList.add('rotate90'); 
          closeul.style.height = `${closeul.scrollHeight}px`;
          if(closeulact!=null){
            this.disableChildelem(closeulli,closeulact,closeulacticon);
          }
        }
        else{
          this.disableChildelem(closeli,closeul,arrowIcon);
        }
     }
  }

  disableChildelem(elem1,elem2,elem3){
    elem1.classList.remove('active');
    elem2.classList.remove('active');
    elem3.classList.remove('rotate90');
    elem2.style.height = `0px`;
  }

  ngOnInit(){
    
  }
  
  ngAfterViewInit() {
    this.aLink = this.elementRef.nativeElement.querySelectorAll('.panel-nav-btn .openPanelBtn');
      this.alldtBtn = this.elementRef.nativeElement.querySelectorAll('.navbar .panel-nav-btn .dt-navigate');
      this.iconrevRot = this.elementRef.nativeElement.querySelectorAll('.navbar .panel-nav-btn .openPanelBtn i');
      this.panelOverlay = this.elementRef.nativeElement.querySelector('.navbar .panel-overlay');       
      this.activeOnLoad();     

      this.aLink.forEach((elem:any,ind)=>{
        elem.addEventListener('click',(e:any)=>{
          e.stopPropagation();
          this.storeInd = ind;
          this.openPanel = e.target.closest('.panel-nav-btn').querySelector('.panelbar');
          let check = e.target.closest('.panel-nav-btn').querySelector('.openPanelBtn i');
          let text = e.target.innerText.toLowerCase().trim();
          let compareText = this.alldtBtn[this.alldtBtn.length-1].innerText.toLowerCase().trim();          
          localStorage.setItem('lasturlname', text);

          if(!check.classList.contains('rotate180')){            
            this.aLink[ind].classList.add('active');
            this.openPanel.classList.add('active');
            this.iconrevRot[ind].classList.add('rotate180');
            this.panelOverlay.classList.add('active');
            if(text==compareText){
              this.openPanel.querySelector('.panelbar-elem').style.cssText = 'right: 22px; left: unset';
            }
          }
          this.hideChildElement(e);
        })
      })

      this.panelOverlay.addEventListener('click',(e)=>{    
        this.gbdtActive = e.target.closest('.navbar').querySelectorAll('.panel-nav-btn .dt-navigate.active');
        this.openPanel.classList.remove('active');
        this.handlealinkswitch();
      })
  }

  activeOnLoad(){
    let localurl = window.location.href.toLowerCase();    
    let geturlname = localStorage.getItem('lasturlname');
    geturlname = geturlname?.replace(/\s/g,'');
    let lasturlind;

    this.alldtBtn.forEach((elem,ind) => {
      if(elem.innerText.toLowerCase().indexOf(geturlname)!=-1){
        lasturlind = ind;
      }
    });
    
    switch (true) {
      case localurl.indexOf('home')!=-1:
        this.alldtBtn.forEach((elem)=>elem.classList.remove('active'));
        break;
      case localurl.indexOf(geturlname)!=-1:
        this.alldtBtn[lasturlind].classList.add('active');
        break;      

      default:
        break;
    }
  }

  hideChildElement(e){  
    this.gbdtActive = document.querySelectorAll('.navbar .panel-nav-btn .dt-navigate.active');
    let localurl = window.location.href,
    clElem = this.aLink[this.storeInd].nextElementSibling?.querySelector('.panel-main-li.active'),
    clElemPanel = clElem?.nextElementSibling,
    clElemIcon = clElem?.querySelector('i');
    this.asinglelink = e.target.closest('.panel-nav-btn').querySelector('.panelbar-elem a.single-link.active');

    if((clElem!=null && clElemPanel!=null && clElemIcon!=null)){
      switch(true){
        case localurl.indexOf('home')!=-1:
          this.asinglelink?.classList.remove('active');
          this.disableChildelem(clElem,clElemPanel,clElemIcon);
          break;

        case localurl.indexOf('home')==-1 && this.gbdtActive.length==1 && !this.asinglelink?.classList.contains('active'):
          clElem.classList.add('active');
          break;
  
        case localurl.indexOf('home')==-1 && this.gbdtActive.length>1:
          this.asinglelink?.classList.remove('active');
          this.disableChildelem(clElem,clElemPanel,clElemIcon);
          break;

        case localurl.indexOf('home')==-1 && this.gbdtActive.length==1 && this.asinglelink?.classList.contains('active'):          
          this.disableChildelem(clElem,clElemPanel,clElemIcon);
          break;
      }
    }
  }

  handlealinkswitch(){
    let localurl = window.location.href.toLowerCase();
    let text = this.aLink[this.storeInd].innerText.toLowerCase().trim();
    
    if(this.aLink!=null){
      this.iconrevRot[this.storeInd].classList.remove('rotate180');   
      this.panelOverlay.classList.remove('active');
    }

    switch(true){
      case(localurl.indexOf('home')!=-1):
        this.aLink[this.storeInd].classList.remove('active');
        break;

      case(localurl.indexOf('home')==-1 && this.gbdtActive.length==1 && localurl.indexOf(text)!=-1):
        this.aLink[this.storeInd].classList.add('active');
        break;
      
      case(localurl.indexOf('home')==-1 && this.gbdtActive.length==1 && localurl.indexOf(text)==-1):
        this.aLink[this.storeInd].classList.remove('active');
        break;
  
      case(localurl.indexOf('home')==-1 && this.gbdtActive.length>1):
        this.aLink[this.storeInd].classList.remove('active');
        break;
    }
  }


}
