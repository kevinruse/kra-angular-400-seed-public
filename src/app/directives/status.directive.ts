import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef, HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef
} from '@angular/core';

import { StatusComponent } from '../status/status.component';

@Directive({

  // tslint:disable-next-line:directive-selector
  selector: '[status]',
  host: {
    '(click)': 'showStatus()',
    '(mouseleave)': 'hideStatus()'
  }

})
export class StatusDirective implements OnInit, OnDestroy {

  @Input()
  status: string = '';

  private element: HTMLElement;
  private statusRef: ComponentRef<StatusComponent>;

  constructor(private elementRef: ElementRef,
              private viewContainer: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.element = this.elementRef.nativeElement;
  }

  ngOnDestroy() {
    this.hideStatus();
  }

  hideStatus() {
    if (this.statusRef) {
      this.statusRef.destroy();
      this.statusRef = null;
    }
  }

  createStatus(content: string): ComponentRef<StatusComponent> {
    this.viewContainer.clear();
    const statusComponentFactory = this.componentFactoryResolver.resolveComponentFactory(StatusComponent);
    const statusComponentRef = this.viewContainer.createComponent(statusComponentFactory);
    statusComponentRef.instance.content = content;
    return statusComponentRef;
  }

  showStatus() {
    this.statusRef = this.createStatus(this.status);
    const statusEl = this.statusRef.location.nativeElement;
    console.log(this.status);
  }
}
