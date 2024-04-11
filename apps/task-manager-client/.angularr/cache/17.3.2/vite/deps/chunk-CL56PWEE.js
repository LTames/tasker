import {
  ChangeDetectorRef,
  ComponentFactoryResolver$1,
  Directive,
  InjectionToken,
  Injector,
  InputFlags,
  NgModule,
  Self,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-NRRYG2BE.js";

// node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var POLYMORPHEUS_CONTEXT = new InjectionToken("POLYMORPHEUS_CONTEXT");
var PolymorpheusComponent = class {
  constructor(component, i) {
    this.component = component;
    this.i = i;
  }
  createInjector(injector, useValue) {
    return Injector.create({
      parent: this.i || injector,
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }]
    });
  }
};
var PolymorpheusTemplate = class {
  constructor(template, cdr) {
    this.template = template;
    this.cdr = cdr;
    this.polymorpheus = "";
  }
  check() {
    this.cdr.markForCheck();
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
};
PolymorpheusTemplate.ɵfac = function PolymorpheusTemplate_Factory(t) {
  return new (t || PolymorpheusTemplate)(ɵɵdirectiveInject(TemplateRef, 2), ɵɵdirectiveInject(ChangeDetectorRef));
};
PolymorpheusTemplate.ɵdir = ɵɵdefineDirective({
  type: PolymorpheusTemplate,
  selectors: [["ng-template", "polymorpheus", ""]],
  inputs: {
    polymorpheus: "polymorpheus"
  },
  exportAs: ["polymorpheus"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusTemplate, [{
    type: Directive,
    args: [{
      selector: "ng-template[polymorpheus]",
      exportAs: "polymorpheus",
      inputs: ["polymorpheus"]
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Self
      }]
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var PolymorpheusContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
  get polymorpheusOutlet() {
    return this.$implicit;
  }
};
var PolymorpheusOutletDirective = class {
  constructor(vcr, i, t) {
    this.vcr = vcr;
    this.i = i;
    this.t = t;
    this.content = "";
  }
  get template() {
    if (isDirective(this.content)) {
      return this.content.template;
    }
    return this.content instanceof TemplateRef ? this.content : this.t;
  }
  ngOnChanges({
    content
  }) {
    var _a;
    const context = this.getContext();
    (_a = this.c) === null || _a === void 0 ? void 0 : _a.injector.get(ChangeDetectorRef).markForCheck();
    if (!content) {
      return;
    }
    this.vcr.clear();
    const proxy = context && new Proxy(context, {
      get: (_, key) => {
        var _a2;
        return (_a2 = this.getContext()) === null || _a2 === void 0 ? void 0 : _a2[key];
      }
    });
    if (isComponent(this.content)) {
      this.process(this.content, proxy);
    } else if (
      // tslint:disable-next-line:triple-equals
      (context instanceof PolymorpheusContext && context.$implicit) != null
    ) {
      this.vcr.createEmbeddedView(this.template, proxy);
    }
  }
  ngDoCheck() {
    if (isDirective(this.content)) {
      this.content.check();
    }
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  getContext() {
    if (isTemplate(this.content) || isComponent(this.content)) {
      return this.context;
    }
    return new PolymorpheusContext(typeof this.content === "function" ? this.content(this.context) : this.content);
  }
  process(content, proxy) {
    const injector = content.createInjector(this.i, proxy);
    this.c = this.vcr.createComponent(injector.get(ComponentFactoryResolver$1).resolveComponentFactory(content.component), 0, injector);
  }
};
PolymorpheusOutletDirective.ɵfac = function PolymorpheusOutletDirective_Factory(t) {
  return new (t || PolymorpheusOutletDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(TemplateRef));
};
PolymorpheusOutletDirective.ɵdir = ɵɵdefineDirective({
  type: PolymorpheusOutletDirective,
  selectors: [["", "polymorpheusOutlet", ""]],
  inputs: {
    content: [InputFlags.None, "polymorpheusOutlet", "content"],
    context: [InputFlags.None, "polymorpheusOutletContext", "context"]
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusOutletDirective, [{
    type: Directive,
    args: [{
      selector: "[polymorpheusOutlet]",
      inputs: ["content: polymorpheusOutlet", "context: polymorpheusOutletContext"]
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: Injector
    }, {
      type: TemplateRef
    }];
  }, null);
})();
function isDirective(content) {
  return content instanceof PolymorpheusTemplate;
}
function isComponent(content) {
  return content instanceof PolymorpheusComponent;
}
function isTemplate(content) {
  return isDirective(content) || content instanceof TemplateRef;
}
var PolymorpheusModule = class {
};
PolymorpheusModule.ɵfac = function PolymorpheusModule_Factory(t) {
  return new (t || PolymorpheusModule)();
};
PolymorpheusModule.ɵmod = ɵɵdefineNgModule({
  type: PolymorpheusModule,
  declarations: [PolymorpheusOutletDirective, PolymorpheusTemplate],
  exports: [PolymorpheusOutletDirective, PolymorpheusTemplate]
});
PolymorpheusModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusModule, [{
    type: NgModule,
    args: [{
      declarations: [PolymorpheusOutletDirective, PolymorpheusTemplate],
      exports: [PolymorpheusOutletDirective, PolymorpheusTemplate]
    }]
  }], null, null);
})();

export {
  POLYMORPHEUS_CONTEXT,
  PolymorpheusComponent,
  PolymorpheusTemplate,
  PolymorpheusOutletDirective,
  PolymorpheusModule
};
//# sourceMappingURL=chunk-CL56PWEE.js.map
