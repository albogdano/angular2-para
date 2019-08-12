import { Component } from '@angular/core';

/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent {
  version: string;
  constructor() {
    this.version = this.appVersion();
  }

  /**
   * Returns the applications version as defined in the `package.json`.
   * @return The applications version.
   */
  appVersion(): string {
    const pkg = require('../../../../package.json');
    return pkg.version;
  }
}

