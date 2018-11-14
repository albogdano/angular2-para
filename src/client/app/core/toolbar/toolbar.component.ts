import { Component } from '@angular/core';
import { Config } from '../../shared/config/env.config';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent {
  version: string;
  constructor() {
    this.version = Config.VERSION;
  }
}

