import {
  TuiDirectiveStylesService,
  tuiCreateTokenFromFactory
} from "./chunk-UVSTSVFF.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Inject,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵstyleProp
} from "./chunk-NRRYG2BE.js";

// node_modules/@taiga-ui/experimental/fesm2015/taiga-ui-experimental-tokens.js
var TUI_ICON_RESOLVER = tuiCreateTokenFromFactory(
  // TODO: Remove backwards compatibility in 4.0
  () => (icon) => !icon || icon.includes("/") ? icon : `/assets/taiga-ui/icons/${icon.includes("Outline") ? icon : icon.replace("Large", "").concat("Outline")}.svg`
);
function tuiIconResolverProvider(useValue) {
  return {
    provide: TUI_ICON_RESOLVER,
    useValue
  };
}

// node_modules/@taiga-ui/experimental/fesm2015/taiga-ui-experimental-directives-icons.js
var TuiIconsComponent = class {
};
TuiIconsComponent.ɵfac = function TuiIconsComponent_Factory(t) {
  return new (t || TuiIconsComponent)();
};
TuiIconsComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiIconsComponent,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-icons"],
  decls: 0,
  vars: 0,
  template: function TuiIconsComponent_Template(rf, ctx) {
  },
  styles: ['[tuiIcons]:before,[tuiIcons]:after{font-size:1.5rem}[tuiIcons]._icon-left:before,[tuiIcons]._icon-right:after{content:"";width:1em;height:1em;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-mask-left) no-repeat center / contain;mask:var(--t-mask-left) no-repeat center / contain}[tuiIcons]._icon-right:after{-webkit-mask:var(--t-mask-right) no-repeat center / contain;mask:var(--t-mask-right) no-repeat center / contain}\n'],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconsComponent, [{
    type: Component,
    args: [{
      template: "",
      styleUrls: ["./icons.styles.less"],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-icons"
      }
    }]
  }], null, null);
})();
var TuiIconsDirective = class {
  constructor(resolver, directiveStyles) {
    this.resolver = resolver;
    this.iconLeft = "";
    this.iconRight = "";
    directiveStyles.addComponent(TuiIconsComponent);
  }
};
TuiIconsDirective.ɵfac = function TuiIconsDirective_Factory(t) {
  return new (t || TuiIconsDirective)(ɵɵdirectiveInject(TUI_ICON_RESOLVER), ɵɵdirectiveInject(TuiDirectiveStylesService));
};
TuiIconsDirective.ɵdir = ɵɵdefineDirective({
  type: TuiIconsDirective,
  selectors: [["a", "iconLeft", ""], ["button"], ["tui-badge"], ["tui-chip"], ["a", "iconRight", ""], ["button"], ["tui-badge"], ["tui-chip"], ["", "tuiBadge", "", "iconLeft", ""], ["", "tuiBadge", "", "iconRight", ""], ["", "tuiChip", "", "iconLeft", ""], ["", "tuiChip", "", "iconRight", ""], ["", "tuiButtonClose", ""]],
  hostAttrs: ["tuiIcons", ""],
  hostVars: 8,
  hostBindings: function TuiIconsDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("--t-mask-left", "url(" + ctx.resolver(ctx.iconLeft) + ")")("--t-mask-right", "url(" + ctx.resolver(ctx.iconRight) + ")");
      ɵɵclassProp("_icon-left", ctx.iconLeft)("_icon-right", ctx.iconRight);
    }
  },
  inputs: {
    iconLeft: "iconLeft",
    iconRight: "iconRight"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconsDirective, [{
    type: Directive,
    args: [{
      selector: "[iconLeft]:is(a,button,tui-badge,tui-chip),[iconRight]:is(a,button,tui-badge,tui-chip),[tuiBadge][iconLeft],[tuiBadge][iconRight],[tuiChip][iconLeft],[tuiChip][iconRight],[tuiButtonClose]",
      host: {
        tuiIcons: "",
        "[class._icon-left]": "iconLeft",
        "[class._icon-right]": "iconRight",
        "[style.--t-mask-left]": '"url(" + resolver(iconLeft) + ")"',
        "[style.--t-mask-right]": '"url(" + resolver(iconRight) + ")"'
      }
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ICON_RESOLVER]
      }]
    }, {
      type: TuiDirectiveStylesService,
      decorators: [{
        type: Inject,
        args: [TuiDirectiveStylesService]
      }]
    }];
  }, {
    iconLeft: [{
      type: Input
    }],
    iconRight: [{
      type: Input
    }]
  });
})();
var TuiIconsModule = class {
};
TuiIconsModule.ɵfac = function TuiIconsModule_Factory(t) {
  return new (t || TuiIconsModule)();
};
TuiIconsModule.ɵmod = ɵɵdefineNgModule({
  type: TuiIconsModule,
  declarations: [TuiIconsComponent, TuiIconsDirective],
  exports: [TuiIconsDirective]
});
TuiIconsModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconsModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiIconsComponent, TuiIconsDirective],
      exports: [TuiIconsDirective]
    }]
  }], null, null);
})();

export {
  TUI_ICON_RESOLVER,
  tuiIconResolverProvider,
  TuiIconsComponent,
  TuiIconsDirective,
  TuiIconsModule
};
//# sourceMappingURL=chunk-CM3RBTE3.js.map
