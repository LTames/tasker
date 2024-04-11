import {
  POLYMORPHEUS_CONTEXT,
  PolymorpheusModule,
  PolymorpheusOutletDirective,
  PolymorpheusTemplate
} from "./chunk-CL56PWEE.js";
import {
  ControlContainer,
  FormArray,
  FormGroup,
  NG_VALIDATORS,
  NgControl,
  NgModel,
  Validators
} from "./chunk-XCNPFZVI.js";
import {
  AnimationEngine,
  animateChild,
  query,
  style,
  transition,
  trigger
} from "./chunk-BU4AQGSD.js";
import {
  Title
} from "./chunk-FDROLBSH.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-L3EMKFWA.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  INJECTOR$1,
  Inject,
  InjectFlags,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  QueryList,
  Renderer2,
  RendererFactory2,
  Self,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-NRRYG2BE.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  ReplaySubject,
  Subject,
  __assign,
  __awaiter,
  __decorate,
  __rest,
  catchError,
  combineLatest,
  concat,
  concatMap,
  createOperatorSubscriber,
  debounceTime,
  defer,
  delay,
  distinctUntilChanged,
  endWith,
  filter,
  from,
  fromEvent,
  identity,
  ignoreElements,
  innerFrom,
  map,
  merge,
  of,
  pairwise,
  pipe,
  race,
  repeat,
  repeatWhen,
  scan,
  share,
  shareReplay,
  skip,
  skipWhile,
  startWith,
  switchAll,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime,
  timer,
  withLatestFrom
} from "./chunk-KABCG3B3.js";

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-constants.js
var ALWAYS_FALSE_HANDLER = () => false;
var ALWAYS_TRUE_HANDLER = () => true;
var CHROMIUM_EDGE_START_VERSION = 79;
var rect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0
};
var EMPTY_QUERY = new QueryList();
var EMPTY_ARRAY = [];
var EMPTY_FUNCTION = () => {
};
var EMPTY_CLIENT_RECT = Object.assign(Object.assign({}, rect), { toJSON() {
  return rect;
} });
var TUI_DEFAULT_STRINGIFY = (item) => String(item);
function bothEmpty(item1, item2) {
  return Array.isArray(item1) && Array.isArray(item2) && !item1.length && !item2.length;
}
var TUI_DEFAULT_MATCHER = (item, search, stringify = TUI_DEFAULT_STRINGIFY) => stringify(item).toLowerCase().includes(search.toLowerCase());
var TUI_STRICT_MATCHER = (item, search, stringify = TUI_DEFAULT_STRINGIFY) => stringify(item).toLowerCase() === search.toLowerCase();
var TUI_DEFAULT_IDENTITY_MATCHER = (item1, item2) => item1 === item2 || bothEmpty(item1, item2);
var TUI_PARENT_ANIMATION = trigger("tuiParentAnimation", [
  transition(":leave", [query(":scope > *", [animateChild()], { optional: true })])
]);
var TUI_PARENT_STOP = trigger("tuiParentStop", [transition(":enter", [])]);
var POLLING_TIME = 1e3 / 15;
var svgNodeFilter = (node) => "ownerSVGElement" in node ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
var CHAR_NO_BREAK_SPACE = " ";
var CHAR_EN_DASH = "–";
var CHAR_EM_DASH = "—";
var CHAR_LAQUO = "«";
var CHAR_RAQUO = "»";
var CHAR_HYPHEN = "-";
var CHAR_MINUS = "−";
var CHAR_PLUS = "+";
var CHAR_BULLET = "•";
var CHAR_ELLIPSIS = "…";
var CHAR_CURRENCY_SIGN = "¤";
var CHAR_ZERO_WIDTH_SPACE = "​";
var TUI_USED_ICONS = [
  "tuiIconMirMono",
  "tuiIconVisaMono",
  "tuiIconElectronMono",
  "tuiIconMastercard",
  "tuiIconMaestro",
  "tuiIconAmex",
  "tuiIconDinersClub",
  "tuiIconDiscover",
  "tuiIconHumo",
  "tuiIconJCB",
  "tuiIconRuPay",
  "tuiIconUnionPay",
  "tuiIconUzcard",
  "tuiIconVerve",
  "tuiIconCopyLarge",
  "tuiIconCheckLarge",
  "tuiIconLink",
  "tuiIconSearch",
  "tuiIconSun",
  "tuiIconMoon",
  "tuiIconCode",
  "tuiIconMenuLarge",
  "tuiIconRotate",
  "tuiIconArrowLeft",
  "tuiIconArrowRight",
  "tuiIconPlus",
  "tuiIconMinus",
  "tuiIconMinimize",
  "tuiIconEye",
  "tuiIconEyeOff",
  "tuiIconDrag",
  "tuiIconSortAscending",
  "tuiIconSortDescending",
  "tuiIconSortOff",
  "tuiIconCheck",
  "tuiIconMinusLarge",
  "tuiIconChevronUp",
  "tuiIconHelpCircle",
  "tuiIconClose",
  "tuiIconAlertCircle",
  "tuiIconChevronRight",
  "tuiIconInfo",
  "tuiIconCheckCircle",
  "tuiIconXCircle",
  "tuiIconChevronLeft",
  "tuiIconStarLarge",
  "tuiIconChevronDown",
  "tuiIconChevronDownLarge",
  "tuiIconFileLarge",
  "tuiIconCheckCircleLarge",
  "tuiIconAlertCircleLarge",
  "tuiIconTrashLarge",
  "tuiIconCopy",
  "tuiIconEyeOffLarge",
  "tuiIconEyeLarge",
  "tuiIconClock",
  "tuiIconClockLarge",
  "tuiIconToggleOff",
  "tuiIconToggleOffLarge",
  "tuiIconToggleOn",
  "tuiIconToggleOnLarge",
  "tuiIconCalendar",
  "tuiIconCalendarLarge"
];
var TUI_VERSION = "3.72.0";

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-classes.js
var tuiAssert = {
  /**
   * @deprecated:
   * The current field no longer matters as
   * it will not be provided in production
   */
  enabled: false,
  get assert() {
    return ngDevMode ? Function.prototype.bind.call(console.assert, console) : EMPTY_FUNCTION;
  }
};
var TuiValidationError = class {
  constructor(message, context = {}) {
    this.message = message;
    this.context = context;
  }
};

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-browser.js
function tuiIsEdge(userAgent) {
  return userAgent.toLowerCase().includes("edge");
}
var EDGE = "edge/";
function tuiIsEdgeOlderThan(version, userAgent) {
  const currentVersion = parseInt(userAgent.slice(userAgent.toLowerCase().indexOf(EDGE) + EDGE.length), 10);
  return currentVersion < version;
}
function tuiIsFirefox(userAgent) {
  return userAgent.toLowerCase().includes("firefox");
}
function tuiIsSafari({ ownerDocument: doc }) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const win = doc === null || doc === void 0 ? void 0 : doc.defaultView;
  const isMacOsSafari = typeof win.safari !== "undefined" && ((_b = (_a = win.safari) === null || _a === void 0 ? void 0 : _a.pushNotification) === null || _b === void 0 ? void 0 : _b.toString()) === "[object SafariRemoteNotification]";
  const isIosSafari = !!((_d = (_c = win.navigator) === null || _c === void 0 ? void 0 : _c.vendor) === null || _d === void 0 ? void 0 : _d.includes("Apple")) && !((_f = (_e = win.navigator) === null || _e === void 0 ? void 0 : _e.userAgent) === null || _f === void 0 ? void 0 : _f.includes("CriOS")) && !((_h = (_g = win.navigator) === null || _g === void 0 ? void 0 : _g.userAgent) === null || _h === void 0 ? void 0 : _h.includes("FxiOS"));
  return isMacOsSafari || isIosSafari;
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-color.js
function tuiHexToRgb(hex) {
  const matches = hex.replace("#", "").split("").map((char, _, array) => array.length === 3 ? char + char : char).join("").match(/.{2}/g);
  return matches ? matches.map((x) => Number.parseInt(x, 16)) : [0, 0, 0];
}
var getChunksFromString = (hex, chunkSize) => hex.match(new RegExp(`.{${chunkSize}}`, "g"));
var convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16);
var getAlphaFloat = (a, alpha) => {
  if (typeof a !== "undefined") {
    return Number((a / 255).toFixed(2));
  }
  if (typeof alpha !== "number" || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
function tuiHexToRGBA(hex, alpha) {
  const [r, g, b, a] = tuiParseHex(hex, alpha);
  return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
}
function tuiIsValidHex(hex) {
  return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
}
function tuiParseHex(hex, alpha) {
  var _a;
  if (!tuiIsValidHex(hex)) {
    throw new Error("Invalid HEX");
  }
  const chunkSize = Math.floor((hex.length - 1) / 3);
  const hexArr = getChunksFromString(hex.slice(1), chunkSize);
  const [r, g, b, a] = (_a = hexArr === null || hexArr === void 0 ? void 0 : hexArr.map(convertHexUnitTo256)) !== null && _a !== void 0 ? _a : [];
  const floatAlpha = getAlphaFloat(a, alpha);
  return [r, g, b, floatAlpha];
}
function hsvToColor(h, s, v, n) {
  const k = (n + h / 60) % 6;
  return Math.round(v - v * s * Math.max(Math.min(k, 4 - k, 1), 0));
}
function tuiHsvToRgb(h, s, v) {
  return [hsvToColor(h, s, v, 5), hsvToColor(h, s, v, 3), hsvToColor(h, s, v, 1)];
}
var DEFAULT = [0, 0, 0, 1];
function tuiParseColor(color) {
  const stripped = color.replace("#", "").replace("rgba(", "").replace("rgb(", "").replace(")", "");
  const array = stripped.split(",").map((item) => parseFloat(item));
  if (array.length === 4) {
    return array;
  }
  if (array.length === 3) {
    return array.concat(1);
  }
  const matches = stripped.match(new RegExp(`(.{${stripped.length / 3}})`, "g"));
  if (!matches) {
    return DEFAULT;
  }
  const parsed = matches.map((char) => parseInt(stripped.length % 2 ? char + char : char, 16));
  return [
    parsed[0] || DEFAULT[0],
    parsed[1] || DEFAULT[1],
    parsed[2] || DEFAULT[2],
    parsed[3] === void 0 ? DEFAULT[3] : parsed[3]
  ];
}
function tuiRgbToHex(r, g, b) {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}
function tuiRgbToHsv(r, g, b) {
  const v = Math.max(r, g, b);
  const n = v - Math.min(r, g, b);
  const h = n && (v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n);
  return [60 * (h < 0 ? h + 6 : h), v && n / v, v];
}
function tuiRgbaToHex(color) {
  var _a, _b;
  if (!tuiIsValidRgba(color)) {
    throw new Error("Invalid RGBa");
  }
  const rgb = (_a = color.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i)) !== null && _a !== void 0 ? _a : [];
  let alpha = ((_b = rgb === null || rgb === void 0 ? void 0 : rgb[4]) !== null && _b !== void 0 ? _b : "").toString().trim();
  let hex = rgb ? (rgb[1] | 1 << 8).toString(16).slice(1) + (rgb[2] | 1 << 8).toString(16).slice(1) + (rgb[3] | 1 << 8).toString(16).slice(1) : color;
  alpha = alpha !== "" ? alpha : 1;
  alpha = (Number(alpha) * 255 | 1 << 8).toString(16).slice(1);
  hex += alpha;
  return `#${hex.toUpperCase()}`;
}
function tuiIsValidRgba(rgba) {
  const range = "(\\d|[1-9]\\d|1\\d{2}|2[0-4]\\d|2[0-5]{2})";
  const alpha = "([01]|0?\\.\\d+)";
  return new RegExp(`^(?:rgb\\(\\s*${range}\\s*,\\s*${range}\\s*,\\s*${range}\\s*\\)|rgba\\(\\s*${range}\\s*,\\s*${range}\\s*,\\s*${range}\\s*,\\s*${alpha}\\s*\\))$`).test(rgba);
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-math.js
function tuiClamp(value, min, max) {
  ngDevMode && tuiAssert.assert(!Number.isNaN(value));
  ngDevMode && tuiAssert.assert(!Number.isNaN(min));
  ngDevMode && tuiAssert.assert(!Number.isNaN(max));
  ngDevMode && tuiAssert.assert(max >= min);
  return Math.min(max, Math.max(min, value));
}
function tuiInRange(value, fromInclude, toExclude) {
  ngDevMode && tuiAssert.assert(!Number.isNaN(value));
  ngDevMode && tuiAssert.assert(!Number.isNaN(fromInclude));
  ngDevMode && tuiAssert.assert(!Number.isNaN(toExclude));
  ngDevMode && tuiAssert.assert(fromInclude < toExclude);
  return value >= fromInclude && value < toExclude;
}
function tuiNormalizeToIntNumber(value, min, max) {
  ngDevMode && tuiAssert.assert(Number.isInteger(min));
  ngDevMode && tuiAssert.assert(Number.isInteger(max));
  ngDevMode && tuiAssert.assert(min <= max);
  if (Number.isNaN(value) || value <= min) {
    return min;
  }
  if (value >= max) {
    return max;
  }
  return Math.round(value);
}
function tuiQuantize(value, quantum) {
  ngDevMode && tuiAssert.assert(Number.isFinite(value));
  ngDevMode && tuiAssert.assert(Number.isFinite(quantum));
  ngDevMode && tuiAssert.assert(quantum > 0);
  const remainder = value % quantum;
  return remainder < quantum / 2 ? value - remainder : value + quantum - remainder;
}
var MAX_PRECISION = 292;
function calculate(value, precision, func) {
  if (value === Infinity) {
    return value;
  }
  ngDevMode && tuiAssert.assert(!Number.isNaN(value), "Value must be number");
  ngDevMode && tuiAssert.assert(Number.isInteger(precision), "Precision must be integer");
  precision = Math.min(precision, MAX_PRECISION);
  const pair = `${value}e`.split("e");
  const tempValue = func(Number(`${pair[0]}e${Number(pair[1]) + precision}`));
  const processedPair = `${tempValue}e`.split("e");
  return Number(`${processedPair[0]}e${Number(processedPair[1]) - precision}`);
}
function tuiRound(value, precision = 0) {
  return calculate(value, precision, Math.round);
}
function tuiCeil(value, precision = 0) {
  return calculate(value, precision, Math.ceil);
}
function tuiFloor(value, precision = 0) {
  return calculate(value, precision, Math.floor);
}
function tuiTrunc(value, precision = 0) {
  return calculate(value, precision, Math.trunc);
}
function tuiRoundWith({ value, precision, method }) {
  switch (method) {
    case "round":
      return tuiRound(value, precision);
    case "ceil":
      return tuiCeil(value, precision);
    case "floor":
      return tuiFloor(value, precision);
    default:
      return tuiTrunc(value, precision);
  }
}
function tuiSum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
function tuiToInt(bool) {
  return bool ? 1 : 0;
}
function tuiToInteger(value) {
  return parseInt(value, 10);
}
function tuiToRadians(deg) {
  return deg * Math.PI / 180;
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-miscellaneous.js
function tuiArrayRemove(array, index) {
  return array.slice(0, Math.max(index, 0)).concat(array.slice(Math.max(index + 1, 0)));
}
function tuiArrayShallowEquals(a, b) {
  return a.length === b.length && a.every((item, index) => item === b[index]);
}
function tuiArrayToggle(array, item) {
  const index = array.indexOf(item);
  return index === -1 ? [...array, item] : tuiArrayRemove(array, index);
}
function tuiIsString(value) {
  return typeof value === "string";
}
function checkValueIsEmpty(value) {
  const nextValue = tuiIsString(value) ? value.trim() : value;
  return [void 0, null, NaN, ""].includes(nextValue);
}
function tuiCleanObject(object) {
  return JSON.parse(JSON.stringify(object, (_key, value) => checkValueIsEmpty(value) ? void 0 : value));
}
function tuiCreateToken(defaults) {
  return tuiCreateTokenFromFactory(() => defaults);
}
function tuiCreateTokenFromFactory(factory) {
  return new InjectionToken("", { factory });
}
function tuiCreateOptions(defaults) {
  return tuiCreateTokenFromFactory(() => defaults);
}
function tuiDefaultSort(x, y) {
  if (x === y) {
    return 0;
  }
  if (tuiIsString(x) && tuiIsString(y)) {
    return x.localeCompare(y);
  }
  return x > y ? 1 : -1;
}
function tuiDistanceBetweenTouches({ touches }) {
  return Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
}
function tuiEaseInOutQuad(t) {
  ngDevMode && tuiAssert.assert(t >= 0 && t <= 1, "Input must be between 0 and 1 inclusive but received ", t);
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function tuiFlatLength(array) {
  return array.reduce((count, section) => count + section.length, 0);
}
function tuiGetOriginalArrayFromQueryList(queryList) {
  let array = [];
  queryList.find((_item, _index, originalArray) => {
    array = originalArray;
    return true;
  });
  return array;
}
function tuiGetSwipeDirection(deltaX, deltaY) {
  if (Math.abs(deltaY) > Math.abs(deltaX)) {
    return deltaY > 0 ? "top" : "bottom";
  }
  return deltaX > 0 ? "left" : "right";
}
function tuiIsFalsy(value) {
  return !value;
}
function tuiIsNumber(value) {
  return typeof value === "number";
}
function tuiIsObject(value) {
  return typeof value === "object" && !!value;
}
function tuiIsPresent(value) {
  return value !== null && value !== void 0;
}
function tuiIsValidUrl(url) {
  const pattern = new RegExp(
    "^([a-zA-Z]+:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|localhost|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
    // fragment locator
    "i"
  );
  return pattern.test(url);
}
function tuiMarkControlAsTouchedAndValidate(control) {
  if (control instanceof FormArray) {
    control.controls.forEach((nestedControl) => {
      tuiMarkControlAsTouchedAndValidate(nestedControl);
    });
  }
  if (control instanceof FormGroup) {
    Object.values(control.controls).forEach((nestedControl) => {
      tuiMarkControlAsTouchedAndValidate(nestedControl);
    });
  }
  control.markAsTouched();
  control.updateValueAndValidity();
}
function tuiNullableSame(a, b, handler) {
  if (a === null) {
    return b === null;
  }
  if (b === null) {
    return false;
  }
  return handler(a, b);
}
function tuiObjectFromEntries(keyValuePairs) {
  return keyValuePairs.reduce((obj, [key, val]) => Object.assign(Object.assign({}, obj), { [key]: val }), {});
}
function tuiProvideOptions(provide, options, fallback) {
  return {
    provide,
    deps: [[new Optional(), new SkipSelf(), provide]],
    useFactory: (parent) => Object.assign(Object.assign({}, parent || fallback), options)
  };
}
function tuiUniqBy(array, key) {
  return Array.from(array.reduce((map2, item) => map2.has(item[key]) ? map2 : map2.set(item[key], item), /* @__PURE__ */ new Map()).values());
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-dom.js
function canScrollVertical(element, rootElement, scrollEnd) {
  let currentElement = element;
  while (currentElement !== rootElement.parentElement) {
    if (Math.floor(currentElement.scrollTop) > 0 && !scrollEnd || Math.ceil(currentElement.scrollTop + currentElement.clientHeight) < currentElement.scrollHeight && scrollEnd) {
      return true;
    }
    if (currentElement.parentElement) {
      currentElement = currentElement.parentElement;
    } else {
      return false;
    }
  }
  return false;
}
function canScrollHorizontal(element, rootElement, scrollEnd) {
  let currentElement = element;
  while (currentElement !== rootElement.parentElement) {
    if (Math.floor(currentElement.scrollLeft) > 0 && !scrollEnd || Math.ceil(currentElement.scrollLeft + currentElement.clientWidth) < currentElement.scrollWidth && scrollEnd) {
      return true;
    }
    if (currentElement.parentElement) {
      currentElement = currentElement.parentElement;
    } else {
      return false;
    }
  }
  return false;
}
function tuiCanScroll(element, rootElement, vertical, scrollEnd) {
  return vertical ? canScrollVertical(element, rootElement, scrollEnd) : canScrollHorizontal(element, rootElement, scrollEnd);
}
function tuiContainsOrAfter(current, node) {
  try {
    return current.contains(node) || !!(node.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_PRECEDING);
  } catch (_a) {
    return false;
  }
}
function tuiIsInput(element) {
  return element.matches("input");
}
function tuiIsTextarea(element) {
  return element.matches("textarea");
}
function tuiIsTextfield(element) {
  return tuiIsInput(element) || tuiIsTextarea(element);
}
function tuiIsElement(node) {
  return !!node && "nodeType" in node && node.nodeType === Node.ELEMENT_NODE;
}
function tuiIsHTMLElement(node) {
  return !!node && node instanceof node.ownerDocument.defaultView.HTMLElement;
}
function tuiIsTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}
function tuiGetActualTarget(event) {
  return event.composedPath()[0];
}
var DEFAULT_FORMAT = "text/plain";
function tuiGetClipboardDataText(event, format = DEFAULT_FORMAT) {
  return "clipboardData" in event && event.clipboardData !== null ? event.clipboardData.getData(format) || event.clipboardData.getData(DEFAULT_FORMAT) : event.target.ownerDocument.defaultView.clipboardData.getData("text");
}
function tuiGetDocumentOrShadowRoot(node) {
  return "getRootNode" in node && node.isConnected ? node.getRootNode() : node.ownerDocument;
}
function tuiGetElementObscures(element) {
  const { ownerDocument } = element;
  if (!(ownerDocument === null || ownerDocument === void 0 ? void 0 : ownerDocument.defaultView) || !element.getBoundingClientRect) {
    return null;
  }
  const { innerWidth, innerHeight } = ownerDocument.defaultView;
  const doc = tuiGetDocumentOrShadowRoot(element);
  const rect2 = element.getBoundingClientRect();
  if (rect2.width === 0 && rect2.height === 0) {
    return null;
  }
  const left = tuiClamp(Math.round(rect2.left) + 2, 0, innerWidth);
  const top = tuiClamp(Math.round(rect2.top) + 2, 0, innerHeight);
  const right = tuiClamp(Math.round(rect2.right) - 2, 0, innerWidth);
  const bottom = tuiClamp(Math.round(rect2.bottom) - 2, 0, innerHeight);
  const horizontalMiddle = tuiClamp(Math.round(rect2.left + rect2.width / 2), 0, innerWidth);
  const verticalMiddle = tuiClamp(Math.round(rect2.top + rect2.height / 2), 0, innerHeight);
  const elements = [
    doc.elementFromPoint(horizontalMiddle, top),
    doc.elementFromPoint(horizontalMiddle, bottom),
    doc.elementFromPoint(left, verticalMiddle),
    doc.elementFromPoint(right, verticalMiddle)
  ];
  const nonNull = elements.filter(tuiIsPresent);
  if (!nonNull.length) {
    return nonNull;
  }
  const filtered = nonNull.filter((el) => !element.contains(el));
  return filtered.length === 4 ? filtered : null;
}
function tuiGetElementOffset(host, element) {
  ngDevMode && tuiAssert.assert(host.contains(element), "Host must contain element");
  let { offsetTop, offsetLeft, offsetParent } = element;
  while (tuiIsHTMLElement(offsetParent) && offsetParent !== host) {
    offsetTop += offsetParent.offsetTop;
    offsetLeft += offsetParent.offsetLeft;
    offsetParent = offsetParent.offsetParent;
  }
  return { offsetTop, offsetLeft };
}
function tuiGetScrollParent(element, vertical = true) {
  if (element === null) {
    return null;
  }
  if (vertical && element.scrollHeight > element.clientHeight) {
    return element;
  }
  if (!vertical && element.scrollWidth > element.clientWidth) {
    return element;
  }
  return tuiGetScrollParent(element.parentElement, vertical);
}
function tuiGetSelectedText({ getSelection, document }) {
  var _a;
  return document.activeElement && tuiIsTextfield(document.activeElement) ? document.activeElement.value.slice(document.activeElement.selectionStart || 0, document.activeElement.selectionEnd || 0) : ((_a = getSelection()) === null || _a === void 0 ? void 0 : _a.toString()) || null;
}
function tuiIsCurrentTarget({ target, currentTarget }) {
  return target === currentTarget;
}
function tuiIsElementEditable(element) {
  return tuiIsTextfield(element) && !element.readOnly || !!element.isContentEditable;
}
function tuiIsInsideIframe(win) {
  return win.parent !== win;
}
function tuiIsNodeIn(node, selector) {
  var _a;
  return tuiIsTextNode(node) ? !!((_a = node.parentElement) === null || _a === void 0 ? void 0 : _a.closest(selector)) : tuiIsElement(node) && !!node.closest(selector);
}
function tuiPointToClientRect(x = 0, y = 0) {
  const rect2 = {
    x,
    y,
    left: x,
    right: x,
    top: y,
    bottom: y,
    width: 0,
    height: 0
  };
  return Object.assign(Object.assign({}, rect2), { toJSON() {
    return rect2;
  } });
}
function tuiRetargetedBoundaryCrossing(event) {
  if ("explicitOriginalTarget" in event) {
    return (event === null || event === void 0 ? void 0 : event.explicitOriginalTarget) !== event.target;
  }
  if ("pointerId" in event) {
    return event.pointerId === -1;
  }
  if ("detail" in event && "webkitForce" in event) {
    return (event === null || event === void 0 ? void 0 : event.detail) === 0;
  }
  return false;
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-focus.js
function tuiGetNativeFocused({ activeElement }) {
  if (!(activeElement === null || activeElement === void 0 ? void 0 : activeElement.shadowRoot)) {
    return activeElement;
  }
  let element = activeElement.shadowRoot.activeElement;
  while (element === null || element === void 0 ? void 0 : element.shadowRoot) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function tuiBlurNativeFocused(doc) {
  const activeElement = tuiGetNativeFocused(doc);
  if (tuiIsHTMLElement(activeElement)) {
    activeElement.blur();
  }
}
function tuiIsNativeKeyboardFocusable(element) {
  if (element.hasAttribute("disabled") || element.getAttribute("tabIndex") === "-1") {
    return false;
  }
  if (tuiIsHTMLElement(element) && element.isContentEditable || element.getAttribute("tabIndex") === "0") {
    return true;
  }
  switch (element.tagName) {
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    case "VIDEO":
    case "AUDIO":
      return element.hasAttribute("controls");
    case "INPUT":
      return element.getAttribute("type") !== "hidden";
    case "A":
    case "LINK":
      return element.hasAttribute("href");
    default:
      return false;
  }
}
function tuiIsNativeMouseFocusable(element) {
  return !element.hasAttribute("disabled") && (element.getAttribute("tabIndex") === "-1" || tuiIsNativeKeyboardFocusable(element));
}
function tuiGetClosestFocusable({ initial, root, previous = false, keyboard = true }) {
  if (!root.ownerDocument) {
    return null;
  }
  const check = keyboard ? tuiIsNativeKeyboardFocusable : tuiIsNativeMouseFocusable;
  const treeWalker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, svgNodeFilter);
  treeWalker.currentNode = initial;
  while (previous ? treeWalker.previousNode() : treeWalker.nextNode()) {
    if (tuiIsHTMLElement(treeWalker.currentNode)) {
      initial = treeWalker.currentNode;
    }
    if (tuiIsHTMLElement(initial) && check(initial)) {
      return initial;
    }
  }
  return null;
}
function tuiIsNativeFocused(node) {
  return !!(node === null || node === void 0 ? void 0 : node.ownerDocument) && tuiGetNativeFocused(node.ownerDocument) === node && node.ownerDocument.hasFocus();
}
function tuiIsNativeFocusedIn(node) {
  if (!node.ownerDocument || !node.contains) {
    return false;
  }
  const nativeFocused = tuiGetNativeFocused(node.ownerDocument);
  return nativeFocused !== null && node.contains(nativeFocused) && node.ownerDocument.hasFocus();
}
function tuiMoveFocus(currentIndex, elements, step) {
  currentIndex += step;
  while (currentIndex >= 0 && currentIndex < elements.length) {
    elements[currentIndex].focus();
    if (tuiIsNativeFocused(elements[currentIndex])) {
      return;
    }
    currentIndex += step;
  }
}
function tuiSetNativeMouseFocused(element, focused = true, preventScroll = false) {
  if (!element.ownerDocument) {
    return;
  }
  if (typeof Event === "function") {
    element.dispatchEvent(new Event("mousedown", { bubbles: true, cancelable: true }));
  } else {
    const event = element.ownerDocument.createEvent("Event");
    event.initEvent("mousedown", true, true);
    element.dispatchEvent(event);
  }
  if (focused) {
    element.focus({ preventScroll });
  } else {
    element.blur();
  }
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-format.js
function tuiPx(value) {
  ngDevMode && tuiAssert.assert(Number.isFinite(value), "Value must be finite number");
  return `${value}px`;
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-os.js
function tuiIsApplePlatform(navigator) {
  return navigator.platform.startsWith("Mac") || navigator.platform === "iPhone";
}
var IOS_REG_EXP = /ipad|iphone|ipod/;
function tuiIsIos(navigator) {
  return IOS_REG_EXP.test(navigator.userAgent.toLowerCase()) || tuiIsApplePlatform(navigator) && navigator.maxTouchPoints > 1;
}
var SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;
function tuiIsApple(navigator) {
  return tuiIsIos(navigator) || SAFARI_REG_EXP.test(navigator.userAgent.toLowerCase());
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-svg.js
function makeRandomSalt() {
  return Math.floor(Math.random() * Date.now());
}
function escapeRegExp(search) {
  return search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function extractLinearGradientIdsFromSvg(svg) {
  var _a;
  const ids = ((_a = svg.match(/url\(("?)('*)#(.*?)('*)\)/g)) !== null && _a !== void 0 ? _a : []).map((url) => url.slice(4, url.length - 1).replace(/['"#]+/g, ""));
  return Array.from(new Set(ids));
}
function setFallbackForGradientFill(svg, fallback) {
  try {
    const tree = new DOMParser().parseFromString(svg, "text/html");
    tree.body.querySelectorAll("[fill^=url]").forEach((element) => element.setAttribute("fill", `${element.getAttribute("fill")} ${fallback}`.trim()));
    return tree.body.innerHTML.trim();
  } catch (_a) {
    return svg;
  }
}
function tuiSvgLinearGradientProcessor(svg, salt = makeRandomSalt(), fallback = "rgba(0, 0, 0, 0.7)") {
  if (tuiIsString(svg)) {
    const uniqueIds = extractLinearGradientIdsFromSvg(svg);
    const rawSvg = uniqueIds.reduce((newSvg, previousId) => {
      const escapedId = escapeRegExp(previousId);
      const newId = `id_${salt}_${previousId}`;
      return newSvg.replace(new RegExp(`"${escapedId}"`, "g"), `"${newId}"`).replace(new RegExp(`'${escapedId}'`, "g"), `'${newId}'`).replace(new RegExp(`url\\('#${escapedId}'\\)`, "g"), `url('#${newId}')`).replace(new RegExp(`url\\("#${escapedId}"\\)`, "g"), `url("#${newId}")`).replace(new RegExp(`url\\(#${escapedId}\\)`, "g"), `url(#${newId})`);
    }, svg);
    return setFallbackForGradientFill(rawSvg, fallback);
  }
  return svg;
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-exceptions.js
var TuiComputedDocumentException = class extends Error {
  constructor() {
    super(ngDevMode ? "Only use computedDocument after load event" : "");
  }
};
var TuiDocumentSelectionException = class extends Error {
  constructor() {
    super(ngDevMode ? "Failed to get document selection" : "");
  }
};
var TuiInvalidDayException = class extends Error {
  constructor(day) {
    super(ngDevMode ? `Invalid day: ${day}` : "");
  }
};
var TuiInvalidMonthException = class extends Error {
  constructor(month) {
    super(ngDevMode ? `Invalid month: ${month}` : "");
  }
};
var TuiInvalidYearException = class extends Error {
  constructor(year) {
    super(ngDevMode ? `Invalid year: ${year}` : "");
  }
};
var TuiNoHostException = class extends Error {
  constructor() {
    super(ngDevMode ? "Portals cannot be used without TuiPortalHostComponent" : "");
  }
};
var TuiOwnerDocumentException = class extends Error {
  constructor() {
    super(ngDevMode ? "Element does not have ownerDocument" : "");
  }
};
var TuiPureException = class extends Error {
  constructor() {
    super(ngDevMode ? "tuiPure can only be used with functions or getters" : "");
  }
};
var TuiTableSortKeyException = class extends Error {
  constructor() {
    super(ngDevMode ? "Trying to sort with no key" : "");
  }
};
var TuiTsParserException = class extends Error {
  constructor() {
    super(ngDevMode ? "TsFileParser: 1 component/module per ts-file" : "");
  }
};
var TuiValueChangesException = class extends Error {
  constructor() {
    super(ngDevMode ? "Control does not have valueChanges" : "");
  }
};
var TuiValuePresentException = class extends Error {
  constructor() {
    super(ngDevMode ? "Value must present" : "");
  }
};
var TuiXmlParsingException = class extends Error {
  constructor() {
    super(ngDevMode ? "Error parsing XML string" : "");
  }
};

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-observables.js
function tuiControlValue(control) {
  return new Observable((subscriber) => {
    if (!control.valueChanges) {
      throw new TuiValueChangesException();
    }
    return control.valueChanges.pipe(startWith(control.value)).subscribe(subscriber);
  });
}
function tuiTypedFromEvent(target, event, options = {}) {
  return fromEvent(target, event, options);
}
function tuiMouseDragFinishFrom(target) {
  return merge(tuiTypedFromEvent(target, "mouseup"), tuiTypedFromEvent(target, "dragend"));
}
var TuiDragStage;
(function(TuiDragStage2) {
  TuiDragStage2[TuiDragStage2["Start"] = 0] = "Start";
  TuiDragStage2[TuiDragStage2["Continues"] = 1] = "Continues";
  TuiDragStage2[TuiDragStage2["End"] = 2] = "End";
})(TuiDragStage || (TuiDragStage = {}));
var TuiDragState = class {
  constructor(stage, event) {
    this.stage = stage;
    this.event = event;
  }
};
function tuiDragAndDropFrom(element) {
  const { ownerDocument } = element;
  if (!ownerDocument) {
    throw new TuiOwnerDocumentException();
  }
  return concat(tuiTypedFromEvent(element, "mousedown").pipe(take(1), map((event) => new TuiDragState(TuiDragStage.Start, event))), merge(tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event) => new TuiDragState(TuiDragStage.Continues, event))), tuiMouseDragFinishFrom(ownerDocument).pipe(take(1), map((event) => new TuiDragState(TuiDragStage.End, event)), endWith(null))).pipe(takeWhile(tuiIsPresent))).pipe(repeat());
}
function tuiIsAlive(lifespan = 0) {
  return pipe(switchMap(() => timer(lifespan).pipe(map(ALWAYS_FALSE_HANDLER), startWith(true))), distinctUntilChanged());
}
var documentMouseUpIsAlive$;
var documentMouseDownIsAlive$;
function tuiFocusVisibleObservable(element) {
  const elementBlur$ = tuiTypedFromEvent(element, "blur");
  const { ownerDocument } = element;
  if (!ownerDocument) {
    throw new TuiOwnerDocumentException();
  }
  if (!documentMouseDownIsAlive$ || !documentMouseUpIsAlive$) {
    documentMouseUpIsAlive$ = tuiTypedFromEvent(ownerDocument, "mouseup", {
      capture: true
    }).pipe(tuiIsAlive(), startWith(false), shareReplay({ bufferSize: 1, refCount: true }));
    documentMouseDownIsAlive$ = tuiTypedFromEvent(ownerDocument, "mousedown", {
      capture: true
    }).pipe(tuiIsAlive(), startWith(false), shareReplay({ bufferSize: 1, refCount: true }));
  }
  return merge(
    // focus events excluding ones that came right after mouse action
    concat(
      tuiTypedFromEvent(element, "focus").pipe(take(1)),
      // filtering out blur events when element remains focused so that we ignore browser tab focus loss
      elementBlur$.pipe(filter(() => !tuiIsNativeFocused(element)), take(1), ignoreElements())
    ).pipe(repeat(), withLatestFrom(documentMouseDownIsAlive$, documentMouseUpIsAlive$, (_event, elementActual, documentActual) => elementActual || documentActual), filter(tuiIsFalsy))
  ).pipe(switchMap(() => elementBlur$.pipe(map(ALWAYS_FALSE_HANDLER), take(1), startWith(true))), distinctUntilChanged());
}
function tuiIfMap(project, predicate = Boolean) {
  return pipe(switchMap((value) => predicate(value) ? project(value) : EMPTY));
}
function tuiIsObserved(observable) {
  var _a, _b;
  return "observed" in observable ? observable.observed : !!((_b = (_a = observable) === null || _a === void 0 ? void 0 : _a.observers) === null || _b === void 0 ? void 0 : _b.length);
}
function tuiQueryListChanges(queryList) {
  return queryList.changes.pipe(startWith(null), map(() => tuiGetOriginalArrayFromQueryList(queryList)));
}
var tuiItemsQueryListObservable = tuiQueryListChanges;
function tuiMustBePresent() {
  return map((value) => {
    if (!tuiIsPresent(value)) {
      throw new TuiValuePresentException();
    }
    return value;
  });
}
function tuiPressedObservable(element, { onlyTrusted } = { onlyTrusted: true }) {
  const { ownerDocument } = element;
  if (!ownerDocument) {
    throw new TuiOwnerDocumentException();
  }
  return tuiTypedFromEvent(element, "mousedown").pipe(filter(({ isTrusted }) => isTrusted || !onlyTrusted), switchMap(() => tuiMouseDragFinishFrom(ownerDocument).pipe(map(ALWAYS_FALSE_HANDLER), take(1), startWith(true))));
}
function tuiPreventDefault() {
  return tap((event) => event.preventDefault());
}
function tuiScrollFrom(element) {
  return tuiTypedFromEvent(element === element.ownerDocument.documentElement ? element.ownerDocument : element, "scroll");
}
function tuiStopPropagation() {
  return tap((e) => {
    e.stopPropagation();
  });
}
function tuiWatch(cdr) {
  return tap(() => {
    cdr.markForCheck();
  });
}
function tuiZonefull(zone) {
  return (source) => new Observable((subscriber) => source.subscribe({
    next: (value) => zone.run(() => subscriber.next(value)),
    error: (error) => zone.run(() => subscriber.error(error)),
    complete: () => zone.run(() => subscriber.complete())
  }));
}
function tuiZonefree(zone) {
  return (source) => new Observable((subscriber) => zone.runOutsideAngular(() => source.subscribe(subscriber)));
}
function tuiZoneOptimized(zone) {
  return pipe(tuiZonefree(zone), tuiZonefull(zone));
}

// node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js
var WINDOW = new InjectionToken("An abstraction over global window object", {
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    if (!defaultView) {
      throw new Error("Window is not available");
    }
    return defaultView;
  }
});
var ANIMATION_FRAME = new InjectionToken("Shared Observable based on `window.requestAnimationFrame`", {
  factory: () => {
    const { requestAnimationFrame, cancelAnimationFrame } = inject(WINDOW);
    const animationFrame$ = new Observable((subscriber) => {
      let id = NaN;
      const callback = (timestamp) => {
        subscriber.next(timestamp);
        id = requestAnimationFrame(callback);
      };
      id = requestAnimationFrame(callback);
      return () => {
        cancelAnimationFrame(id);
      };
    });
    return animationFrame$.pipe(share());
  }
});
var CACHES = new InjectionToken("An abstraction over window.caches object", {
  factory: () => inject(WINDOW).caches
});
var CRYPTO = new InjectionToken("An abstraction over window.crypto object", {
  factory: () => inject(WINDOW).crypto
});
var CSS = new InjectionToken("An abstraction over window.CSS object", {
  factory: () => inject(WINDOW).CSS || {
    escape: (v) => v,
    supports: () => false
  }
});
var HISTORY = new InjectionToken("An abstraction over window.history object", {
  factory: () => inject(WINDOW).history
});
var LOCAL_STORAGE = new InjectionToken("An abstraction over window.localStorage object", {
  factory: () => inject(WINDOW).localStorage
});
var LOCATION = new InjectionToken("An abstraction over window.location object", {
  factory: () => inject(WINDOW).location
});
var NAVIGATOR = new InjectionToken("An abstraction over window.navigator object", {
  factory: () => inject(WINDOW).navigator
});
var MEDIA_DEVICES = new InjectionToken("An abstraction over window.navigator.mediaDevices object", {
  factory: () => inject(NAVIGATOR).mediaDevices
});
var NETWORK_INFORMATION = new InjectionToken("An abstraction over window.navigator.connection object", {
  // @ts-ignore
  factory: () => inject(NAVIGATOR).connection || null
});
var PAGE_VISIBILITY = new InjectionToken("Shared Observable based on `document visibility changed`", {
  factory: () => {
    const documentRef = inject(DOCUMENT);
    return fromEvent(documentRef, "visibilitychange").pipe(startWith(0), map(() => documentRef.visibilityState !== "hidden"), distinctUntilChanged(), shareReplay({ refCount: false, bufferSize: 1 }));
  }
});
var PERFORMANCE = new InjectionToken("An abstraction over window.performance object", {
  factory: () => inject(WINDOW).performance
});
var SCREEN = new InjectionToken("An abstraction over window.screen object", {
  factory: () => inject(WINDOW).screen
});
var SESSION_STORAGE = new InjectionToken("An abstraction over window.sessionStorage object", {
  factory: () => inject(WINDOW).sessionStorage
});
var SPEECH_RECOGNITION = new InjectionToken("An abstraction over SpeechRecognition class", {
  factory: () => {
    const windowRef = inject(WINDOW);
    return windowRef.speechRecognition || windowRef.webkitSpeechRecognition || null;
  }
});
var SPEECH_SYNTHESIS = new InjectionToken("An abstraction over window.speechSynthesis object", {
  factory: () => inject(WINDOW).speechSynthesis
});
var USER_AGENT = new InjectionToken("An abstraction over window.navigator.userAgent object", {
  factory: () => inject(NAVIGATOR).userAgent
});

// node_modules/@ng-web-apis/resize-observer/fesm2015/ng-web-apis-resize-observer.js
var RESIZE_OPTION_BOX_DEFAULT = "content-box";
var RESIZE_OPTION_BOX = new InjectionToken("Box model to observe changes", {
  providedIn: "root",
  factory: () => RESIZE_OPTION_BOX_DEFAULT
});
var RESIZE_OBSERVER_SUPPORT = new InjectionToken("Resize Observer API support", {
  providedIn: "root",
  factory: () => !!inject(WINDOW).ResizeObserver
});
var ResizeObserverService = class extends Observable {
  constructor({
    nativeElement
  }, ngZone, support, box) {
    let observer;
    super((subscriber) => {
      if (!support) {
        subscriber.error("ResizeObserver is not supported in your browser");
        return;
      }
      observer = new ResizeObserver((entries) => {
        ngZone.run(() => {
          subscriber.next(entries);
        });
      });
      observer.observe(nativeElement, {
        box
      });
      return () => {
        observer.disconnect();
      };
    });
    return this.pipe(share());
  }
};
ResizeObserverService.ɵfac = function ResizeObserverService_Factory(t) {
  return new (t || ResizeObserverService)(ɵɵinject(ElementRef), ɵɵinject(NgZone), ɵɵinject(RESIZE_OBSERVER_SUPPORT), ɵɵinject(RESIZE_OPTION_BOX));
};
ResizeObserverService.ɵprov = ɵɵdefineInjectable({
  token: ResizeObserverService,
  factory: ResizeObserverService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeObserverService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [RESIZE_OBSERVER_SUPPORT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [RESIZE_OPTION_BOX]
      }]
    }];
  }, null);
})();
function boxExtractor({
  nativeElement
}) {
  const attribute = nativeElement.getAttribute("waResizeBox");
  return boxFactory(attribute);
}
function boxFactory(box) {
  return box || RESIZE_OPTION_BOX_DEFAULT;
}
var ResizeObserverDirective = class {
  constructor(waResizeObserver, _box) {
    this.waResizeObserver = waResizeObserver;
  }
};
ResizeObserverDirective.ɵfac = function ResizeObserverDirective_Factory(t) {
  return new (t || ResizeObserverDirective)(ɵɵdirectiveInject(ResizeObserverService), ɵɵinjectAttribute("waResizeBox"));
};
ResizeObserverDirective.ɵdir = ɵɵdefineDirective({
  type: ResizeObserverDirective,
  selectors: [["", "waResizeObserver", ""]],
  outputs: {
    waResizeObserver: "waResizeObserver"
  },
  features: [ɵɵProvidersFeature([ResizeObserverService, {
    provide: RESIZE_OPTION_BOX,
    deps: [ElementRef],
    useFactory: boxExtractor
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeObserverDirective, [{
    type: Directive,
    args: [{
      selector: "[waResizeObserver]",
      outputs: ["waResizeObserver"],
      providers: [ResizeObserverService, {
        provide: RESIZE_OPTION_BOX,
        deps: [ElementRef],
        useFactory: boxExtractor
      }]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ResizeObserverService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["waResizeBox"]
      }]
    }];
  }, null);
})();
var ResizeObserverModule = class {
};
ResizeObserverModule.ɵfac = function ResizeObserverModule_Factory(t) {
  return new (t || ResizeObserverModule)();
};
ResizeObserverModule.ɵmod = ɵɵdefineNgModule({
  type: ResizeObserverModule,
  declarations: [ResizeObserverDirective],
  exports: [ResizeObserverDirective]
});
ResizeObserverModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeObserverModule, [{
    type: NgModule,
    args: [{
      declarations: [ResizeObserverDirective],
      exports: [ResizeObserverDirective]
    }]
  }], null, null);
})();

// node_modules/rxjs/dist/esm5/internal/observable/dom/fetch.js
function fromFetch(input, initWithSelector) {
  if (initWithSelector === void 0) {
    initWithSelector = {};
  }
  var selector = initWithSelector.selector, init = __rest(initWithSelector, ["selector"]);
  return new Observable(function(subscriber) {
    var controller = new AbortController();
    var signal = controller.signal;
    var abortable = true;
    var outerSignal = init.signal;
    if (outerSignal) {
      if (outerSignal.aborted) {
        controller.abort();
      } else {
        var outerSignalHandler_1 = function() {
          if (!signal.aborted) {
            controller.abort();
          }
        };
        outerSignal.addEventListener("abort", outerSignalHandler_1);
        subscriber.add(function() {
          return outerSignal.removeEventListener("abort", outerSignalHandler_1);
        });
      }
    }
    var perSubscriberInit = __assign(__assign({}, init), { signal });
    var handleError = function(err) {
      abortable = false;
      subscriber.error(err);
    };
    fetch(input, perSubscriberInit).then(function(response) {
      if (selector) {
        innerFrom(selector(response)).subscribe(createOperatorSubscriber(subscriber, void 0, function() {
          abortable = false;
          subscriber.complete();
        }, handleError));
      } else {
        abortable = false;
        subscriber.next(response);
        subscriber.complete();
      }
    }).catch(handleError);
    return function() {
      if (abortable) {
        controller.abort();
      }
    };
  });
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-tokens.js
var TUI_REMOVED_ELEMENT = tuiCreateTokenFromFactory(() => {
  const stub = { onRemovalComplete: () => {
  } };
  const element$ = new BehaviorSubject(null);
  const engine = inject(AnimationEngine, InjectFlags.Optional) || stub;
  const { onRemovalComplete = stub.onRemovalComplete } = engine;
  engine.onRemovalComplete = (element, context) => {
    element$.next(element);
    onRemovalComplete.call(engine, element, context);
  };
  return element$.pipe(switchMap((element) => timer(0).pipe(map(() => null), startWith(element))), share());
});
function isValidFocusout(target, removedElement = null) {
  return (
    // Not due to switching tabs/going to DevTools
    tuiGetDocumentOrShadowRoot(target).activeElement !== target && // Not due to button/input becoming disabled or under disabled fieldset
    !target.matches(":disabled") && // Not due to element being removed from DOM
    !(removedElement === null || removedElement === void 0 ? void 0 : removedElement.contains(target))
  );
}
function shadowRootActiveElement(root) {
  return merge(tuiTypedFromEvent(root, "focusin").pipe(map(({ target }) => target)), tuiTypedFromEvent(root, "focusout").pipe(filter(({ target, relatedTarget }) => !!relatedTarget && isValidFocusout(target)), map(({ relatedTarget }) => relatedTarget)));
}
var TUI_ACTIVE_ELEMENT = tuiCreateTokenFromFactory(() => {
  const removedElement$ = inject(TUI_REMOVED_ELEMENT);
  const win = inject(WINDOW);
  const doc = inject(DOCUMENT);
  const focusout$ = tuiTypedFromEvent(win, "focusout");
  const focusin$ = tuiTypedFromEvent(win, "focusin");
  const blur$ = tuiTypedFromEvent(win, "blur");
  const mousedown$ = tuiTypedFromEvent(win, "mousedown");
  const mouseup$ = tuiTypedFromEvent(win, "mouseup");
  return merge(focusout$.pipe(
    // eslint-disable-next-line rxjs/no-unsafe-takeuntil
    takeUntil(mousedown$),
    /**
     * TODO: replace to
     * repeat({delay: () => mouseup$})
     * in RxJS 7
     */
    // eslint-disable-next-line rxjs/no-ignored-notifier
    repeatWhen(() => mouseup$),
    withLatestFrom(removedElement$),
    filter(([event, removedElement]) => isValidFocusout(tuiGetActualTarget(event), removedElement)),
    map(([{ relatedTarget }]) => relatedTarget)
  ), blur$.pipe(map(() => doc.activeElement), filter((element) => !!(element === null || element === void 0 ? void 0 : element.matches("iframe")))), focusin$.pipe(switchMap((event) => {
    const target = tuiGetActualTarget(event);
    const root = tuiGetDocumentOrShadowRoot(target);
    return root === doc ? of(target) : shadowRootActiveElement(root).pipe(startWith(target));
  })), mousedown$.pipe(switchMap((event) => {
    const actualTargetInCurrentTime = tuiGetActualTarget(event);
    return !doc.activeElement || doc.activeElement === doc.body ? of(actualTargetInCurrentTime) : focusout$.pipe(take(1), map(
      /**
       * Do not use `map(() => tuiGetActualTarget(event))`
       * because we have different result in runtime
       */
      () => actualTargetInCurrentTime
    ), takeUntil(timer(0)));
  }))).pipe(distinctUntilChanged(), share());
});
var TUI_ALERTS = tuiCreateToken([]);
function tuiAsAlerts(useExisting) {
  return {
    provide: TUI_ALERTS,
    multi: true,
    useExisting
  };
}
var TUI_BASE_HREF = tuiCreateTokenFromFactory(() => {
  var _a, _b;
  return (_b = (_a = inject(DOCUMENT).querySelector("base")) === null || _a === void 0 ? void 0 : _a.href) !== null && _b !== void 0 ? _b : "";
});
var TUI_DEFAULT_RENDERER = tuiCreateTokenFromFactory(
  // @ts-ignore
  () => inject(RendererFactory2).createRenderer(null, null)
);
var TUI_DIALOGS = tuiCreateToken([]);
function tuiAsDialog(useExisting) {
  return {
    provide: TUI_DIALOGS,
    multi: true,
    useExisting
  };
}
var TUI_ENSURE_BASE_HREF = tuiCreateTokenFromFactory(() => {
  var _a;
  const baseHref = (_a = inject(DOCUMENT).querySelector("base")) === null || _a === void 0 ? void 0 : _a.href;
  if (baseHref) {
    return baseHref;
  }
  const link = inject(DOCUMENT).createElement("a");
  link.href = "";
  return link.pathname;
});
var TUI_FOCUSABLE_ITEM_ACCESSOR = new InjectionToken("[TUI_FOCUSABLE_ITEM_ACCESSOR]");
function tuiAsFocusableItemAccessor(useExisting) {
  return {
    provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
    useExisting
  };
}
var TUI_FONTS_READY = new InjectionToken("[TUI_FONTS_READY]", {
  factory: () => {
    var _a;
    return from(((_a = inject(DOCUMENT).fonts) === null || _a === void 0 ? void 0 : _a.ready) || EMPTY).pipe(shareReplay({ bufferSize: 1, refCount: false }));
  }
});
var TUI_IS_IOS = tuiCreateTokenFromFactory(() => tuiIsIos(inject(NAVIGATOR)));
var firstRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/;
var secondRegex = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/;
var TUI_IS_MOBILE = tuiCreateTokenFromFactory(() => firstRegex.test(inject(USER_AGENT).toLowerCase()) || secondRegex.test(inject(USER_AGENT).slice(0, 4).toLowerCase()));
var TUI_IS_ANDROID = tuiCreateTokenFromFactory(() => inject(TUI_IS_MOBILE) && !inject(TUI_IS_IOS));
var TUI_IS_APPLE = tuiCreateTokenFromFactory(() => tuiIsApple(inject(NAVIGATOR)));
var TUI_IS_CHROMIUM = tuiCreateTokenFromFactory(() => !!inject(WINDOW).chrome);
var TUI_IS_CYPRESS = tuiCreateTokenFromFactory(() => !!inject(WINDOW).Cypress);
var TUI_IS_PLAYWRIGHT = tuiCreateTokenFromFactory(ALWAYS_FALSE_HANDLER);
var TUI_IS_E2E = tuiCreateTokenFromFactory(() => inject(TUI_IS_CYPRESS) || inject(TUI_IS_PLAYWRIGHT));
var TUI_IS_FIREFOX = tuiCreateTokenFromFactory(() => {
  var _a;
  return typeof ((_a = inject(WINDOW)) === null || _a === void 0 ? void 0 : _a.mozCancelFullScreen) !== "undefined";
});
var TUI_IS_STACKBLITZ = tuiCreateTokenFromFactory(() => inject(WINDOW).location.host.endsWith("stackblitz.io"));
var TUI_IS_WEBKIT = tuiCreateTokenFromFactory(() => {
  var _a;
  return !!((_a = inject(WINDOW)) === null || _a === void 0 ? void 0 : _a.webkitConvertPointFromNodeToPage);
});
var TUI_PLATFORM = tuiCreateToken("web");
function tuiPlatformFactory() {
  if (inject(TUI_IS_IOS)) {
    return "ios";
  }
  if (inject(TUI_IS_ANDROID)) {
    return "android";
  }
  return "web";
}
var TUI_RANGE = tuiCreateTokenFromFactory(() => isPlatformBrowser(inject(PLATFORM_ID)) ? new Range() : {});
var TUI_SCROLL_REF = tuiCreateTokenFromFactory(() => new ElementRef(inject(DOCUMENT).documentElement));
var TUI_SWIPE_OPTIONS = tuiCreateToken({
  timeout: 500,
  threshold: 30
});
var TUI_TAKE_ONLY_TRUSTED_EVENTS = tuiCreateTokenFromFactory(ALWAYS_TRUE_HANDLER);
var TUI_TOUCH_SUPPORTED = tuiCreateTokenFromFactory(() => inject(WINDOW).matchMedia("(any-pointer: coarse)").matches);
var TUI_WINDOW_SIZE = new InjectionToken("[TUI_WINDOW_SIZE]", {
  factory: () => {
    const w = inject(WINDOW);
    return tuiTypedFromEvent(w, "resize").pipe(startWith(null), map(() => {
      var _a, _b;
      const width = Math.max(w.document.documentElement.clientWidth || 0, w.innerWidth || 0, ((_a = w.visualViewport) === null || _a === void 0 ? void 0 : _a.width) || 0);
      const height = Math.max(w.document.documentElement.clientHeight || 0, w.innerHeight || 0, ((_b = w.visualViewport) === null || _b === void 0 ? void 0 : _b.height) || 0);
      return {
        width,
        height,
        top: 0,
        left: 0,
        right: width,
        bottom: height
      };
    }), shareReplay({ bufferSize: 1, refCount: true }));
  }
});
var TUI_WINDOW_HEIGHT = tuiCreateTokenFromFactory(() => inject(TUI_WINDOW_SIZE).pipe(map(({ height }) => height)));
var TUI_ZOOM_OPTIONS = tuiCreateToken({
  wheelSensitivity: 0.01
});

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-services.js
var TuiDestroyService = class extends ReplaySubject {
  constructor() {
    super(1);
  }
  ngOnDestroy() {
    this.next();
    this.complete();
  }
};
TuiDestroyService.ɵfac = function TuiDestroyService_Factory(t) {
  return new (t || TuiDestroyService)();
};
TuiDestroyService.ɵprov = ɵɵdefineInjectable({
  token: TuiDestroyService,
  factory: TuiDestroyService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDestroyService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiDirectiveStylesService = class {
  constructor(resolver, injector) {
    this.resolver = resolver;
    this.injector = injector;
    this.map = /* @__PURE__ */ new Map();
  }
  addComponent(component) {
    if (!this.map.has(component)) {
      this.map.set(component, this.resolver.resolveComponentFactory(component).create(this.injector));
    }
  }
  ngOnDestroy() {
    this.map.forEach((value) => value.destroy());
  }
};
TuiDirectiveStylesService.ɵfac = function TuiDirectiveStylesService_Factory(t) {
  return new (t || TuiDirectiveStylesService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(INJECTOR$1));
};
TuiDirectiveStylesService.ɵprov = ɵɵdefineInjectable({
  token: TuiDirectiveStylesService,
  factory: TuiDirectiveStylesService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDirectiveStylesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1,
      decorators: [{
        type: Inject,
        args: [ComponentFactoryResolver$1]
      }]
    }, {
      type: Injector,
      decorators: [{
        type: Inject,
        args: [INJECTOR$1]
      }]
    }];
  }, null);
})();
var TuiFocusVisibleService = class extends Observable {
  constructor({
    nativeElement
  }, cdr, destroy$) {
    super((subscriber) => this.focusVisible$.subscribe(subscriber));
    this.focusVisible$ = tuiFocusVisibleObservable(nativeElement).pipe(tuiWatch(cdr), takeUntil(destroy$));
  }
};
TuiFocusVisibleService.ɵfac = function TuiFocusVisibleService_Factory(t) {
  return new (t || TuiFocusVisibleService)(ɵɵinject(ElementRef), ɵɵinject(ChangeDetectorRef), ɵɵinject(TuiDestroyService, 2));
};
TuiFocusVisibleService.ɵprov = ɵɵdefineInjectable({
  token: TuiFocusVisibleService,
  factory: TuiFocusVisibleService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusVisibleService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }];
  }, null);
})();
var TUI = "tui_";
var TuiIdService = class _TuiIdService {
  generate() {
    return `${TUI}${_TuiIdService.autoId++}${Date.now()}`;
  }
};
TuiIdService.autoId = 0;
TuiIdService.ɵfac = function TuiIdService_Factory(t) {
  return new (t || TuiIdService)();
};
TuiIdService.ɵprov = ɵɵdefineInjectable({
  token: TuiIdService,
  factory: TuiIdService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIdService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiParentsScrollService = class extends Observable {
  constructor(el, win) {
    super((subscriber) => this.callback$.subscribe(subscriber));
    this.callback$ = defer(() => {
      let {
        nativeElement
      } = el;
      const eventTargets = [win, nativeElement];
      while (nativeElement.parentElement) {
        nativeElement = nativeElement.parentElement;
        eventTargets.push(nativeElement);
      }
      return merge(...eventTargets.map((element) => tuiTypedFromEvent(element, "scroll")));
    });
  }
};
TuiParentsScrollService.ɵfac = function TuiParentsScrollService_Factory(t) {
  return new (t || TuiParentsScrollService)(ɵɵinject(ElementRef), ɵɵinject(WINDOW));
};
TuiParentsScrollService.ɵprov = ɵɵdefineInjectable({
  token: TuiParentsScrollService,
  factory: TuiParentsScrollService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiParentsScrollService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }];
  }, null);
})();
var TuiObscuredService = class extends Observable {
  constructor(parentsScroll$, {
    nativeElement
  }, zone, win, destroy$, animationFrame$) {
    super((subscriber) => this.obscured$.subscribe(subscriber));
    this.obscured$ = merge(
      // delay is added so it will not interfere with other listeners
      merge(parentsScroll$, fromEvent(win, "resize")).pipe(delay(0)),
      animationFrame$.pipe(throttleTime(POLLING_TIME))
    ).pipe(map(() => tuiGetElementObscures(nativeElement)), startWith(null), distinctUntilChanged(), tuiZoneOptimized(zone), takeUntil(destroy$));
  }
};
TuiObscuredService.ɵfac = function TuiObscuredService_Factory(t) {
  return new (t || TuiObscuredService)(ɵɵinject(TuiParentsScrollService, 2), ɵɵinject(ElementRef), ɵɵinject(NgZone), ɵɵinject(WINDOW), ɵɵinject(TuiDestroyService, 2), ɵɵinject(ANIMATION_FRAME));
};
TuiObscuredService.ɵprov = ɵɵdefineInjectable({
  token: TuiObscuredService,
  factory: TuiObscuredService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredService, [{
    type: Injectable
  }], function() {
    return [{
      type: TuiParentsScrollService,
      decorators: [{
        type: Inject,
        args: [TuiParentsScrollService]
      }, {
        type: Self
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }];
  }, null);
})();
var TuiPanService = class extends Observable {
  constructor({
    nativeElement
  }, doc) {
    super((subscriber) => {
      merge(tuiTypedFromEvent(nativeElement, "touchstart", {
        passive: true
      }), tuiTypedFromEvent(nativeElement, "mousedown")).pipe(
        switchMap(() => merge(tuiTypedFromEvent(doc, "touchmove", {
          passive: true
        }).pipe(filter(({
          touches
        }) => touches.length < 2), map(({
          touches
        }) => touches[0])), tuiTypedFromEvent(doc, "mousemove"))),
        pairwise(),
        map(([first, second]) => {
          const deltaX = second.clientX - first.clientX;
          const deltaY = second.clientY - first.clientY;
          return [deltaX, deltaY];
        }),
        // eslint-disable-next-line rxjs/no-unsafe-takeuntil
        takeUntil(merge(tuiTypedFromEvent(doc, "touchend"), tuiTypedFromEvent(doc, "mouseup"))),
        repeat()
      ).subscribe(subscriber);
    });
  }
};
TuiPanService.ɵfac = function TuiPanService_Factory(t) {
  return new (t || TuiPanService)(ɵɵinject(ElementRef), ɵɵinject(DOCUMENT));
};
TuiPanService.ɵprov = ɵɵdefineInjectable({
  token: TuiPanService,
  factory: TuiPanService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPanService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var TuiResizeService = class extends ResizeObserverService {
  constructor(el, zone, destroy$, support, box, animationFrame$) {
    super(el, zone, support, box);
    return this.pipe(catchError(() => (
      /**
       * @note: if not supported ResizeObserver
       * remove `catchError` after supports modern browsers
       */
      animationFrame$.pipe(throttleTime(POLLING_TIME), map(() => `${el.nativeElement.clientWidth} ${el.nativeElement.clientHeight}`), distinctUntilChanged(), map(() => EMPTY_ARRAY))
    )), debounceTime(0), tuiZonefree(zone), share(), takeUntil(destroy$));
  }
};
TuiResizeService.ɵfac = function TuiResizeService_Factory(t) {
  return new (t || TuiResizeService)(ɵɵinject(ElementRef), ɵɵinject(NgZone), ɵɵinject(TuiDestroyService, 2), ɵɵinject(RESIZE_OBSERVER_SUPPORT), ɵɵinject(RESIZE_OPTION_BOX), ɵɵinject(ANIMATION_FRAME));
};
TuiResizeService.ɵprov = ɵɵdefineInjectable({
  token: TuiResizeService,
  factory: TuiResizeService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizeService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [RESIZE_OBSERVER_SUPPORT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [RESIZE_OPTION_BOX]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }];
  }, null);
})();
var SCROLL_TIME = 300;
function getX(elementOrWindow) {
  return "scrollX" in elementOrWindow ? elementOrWindow.scrollX : elementOrWindow.scrollLeft;
}
function getY(elementOrWindow) {
  return "scrollY" in elementOrWindow ? elementOrWindow.scrollY : elementOrWindow.scrollTop;
}
var TuiScrollService = class {
  constructor(performanceRef, animationFrame$) {
    this.performanceRef = performanceRef;
    this.animationFrame$ = animationFrame$;
  }
  scroll$(elementOrWindow, scrollTop, scrollLeft = getX(elementOrWindow), duration = SCROLL_TIME) {
    ngDevMode && tuiAssert.assert(duration >= 0, "Duration cannot be negative");
    ngDevMode && tuiAssert.assert(scrollTop >= 0, "scrollTop cannot be negative");
    ngDevMode && tuiAssert.assert(scrollLeft >= 0, "scrollLeft cannot be negative");
    const initialTop = getY(elementOrWindow);
    const initialLeft = getX(elementOrWindow);
    const deltaTop = scrollTop - initialTop;
    const deltaLeft = scrollLeft - initialLeft;
    const observable = !duration ? of([scrollTop, scrollLeft]) : defer(() => of(this.performanceRef.now())).pipe(switchMap((start) => this.animationFrame$.pipe(map((now) => now - start))), map((elapsed) => tuiEaseInOutQuad(tuiClamp(elapsed / duration, 0, 1))), map((percent) => [initialTop + deltaTop * percent, initialLeft + deltaLeft * percent]), takeUntil(timer(duration)), endWith([scrollTop, scrollLeft]));
    return observable.pipe(tap(([scrollTop2, scrollLeft2]) => {
      var _a;
      (_a = elementOrWindow.scrollTo) === null || _a === void 0 ? void 0 : _a.call(elementOrWindow, scrollLeft2, scrollTop2);
    }));
  }
};
TuiScrollService.ɵfac = function TuiScrollService_Factory(t) {
  return new (t || TuiScrollService)(ɵɵinject(PERFORMANCE), ɵɵinject(ANIMATION_FRAME));
};
TuiScrollService.ɵprov = ɵɵdefineInjectable({
  token: TuiScrollService,
  factory: TuiScrollService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Performance,
      decorators: [{
        type: Inject,
        args: [PERFORMANCE]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }];
  }, null);
})();
var TuiStaticRequestService = class {
  constructor(win, platformId) {
    this.win = win;
    this.platformId = platformId;
    this.cache = /* @__PURE__ */ new Map();
  }
  request(url) {
    const cache = this.cache.get(url);
    if (cache) {
      return cache;
    }
    const response$ = "AbortController" in this.win || isPlatformServer(this.platformId) ? fromFetch(url) : (
      /**
       * Fallback for Firefox 55 and 56
       * TODO: drop after browser support bump
       */
      defer(() => from(fetch(url)))
    );
    const piped = response$.pipe(switchMap((response) => __awaiter(this, void 0, void 0, function* () {
      if (response.ok) {
        return response.text();
      }
      throw new Error(`Failed to load ${url} (${response.statusText})`);
    })), shareReplay({
      bufferSize: 1,
      refCount: false
    }));
    this.cache.set(url, piped);
    return piped;
  }
};
TuiStaticRequestService.ɵfac = function TuiStaticRequestService_Factory(t) {
  return new (t || TuiStaticRequestService)(ɵɵinject(WINDOW), ɵɵinject(PLATFORM_ID));
};
TuiStaticRequestService.ɵprov = ɵɵdefineInjectable({
  token: TuiStaticRequestService,
  factory: TuiStaticRequestService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStaticRequestService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, null);
})();
var TuiSwipeService = class extends Observable {
  constructor({
    nativeElement
  }, {
    timeout,
    threshold
  }, doc) {
    super((subscriber) => {
      merge(tuiTypedFromEvent(nativeElement, "touchstart", {
        passive: true
      }), tuiTypedFromEvent(doc, "touchend")).pipe(pairwise(), filter(([first, second]) => !!first.touches.length && first.touches[0].identifier === second.changedTouches[0].identifier), map(([start, end]) => {
        const startX = start.touches[0].clientX;
        const startY = start.touches[0].clientY;
        const endX = end.changedTouches[0].clientX;
        const endY = end.changedTouches[0].clientY;
        const distanceX = startX - endX;
        const distanceY = startY - endY;
        const duration = end.timeStamp - start.timeStamp;
        if ((Math.abs(distanceX) > threshold || Math.abs(distanceY) > threshold) && duration < timeout) {
          return {
            direction: tuiGetSwipeDirection(distanceX, distanceY),
            events: [start, end]
          };
        }
        return null;
      }), filter(tuiIsPresent)).subscribe(subscriber);
    });
  }
};
TuiSwipeService.ɵfac = function TuiSwipeService_Factory(t) {
  return new (t || TuiSwipeService)(ɵɵinject(ElementRef), ɵɵinject(TUI_SWIPE_OPTIONS), ɵɵinject(DOCUMENT));
};
TuiSwipeService.ɵprov = ɵɵdefineInjectable({
  token: TuiSwipeService,
  factory: TuiSwipeService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipeService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_SWIPE_OPTIONS]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var TOUCH_SENSITIVITY = 0.01;
var TuiZoomService = class extends Observable {
  constructor({
    nativeElement
  }, {
    wheelSensitivity
  }) {
    super((subscriber) => {
      merge(tuiTypedFromEvent(nativeElement, "touchstart", {
        passive: true
      }).pipe(filter(({
        touches
      }) => touches.length > 1), switchMap((startEvent) => tuiTypedFromEvent(nativeElement, "touchmove", {
        passive: true
      }).pipe(tuiPreventDefault(), scan((prev, event) => {
        const distance = tuiDistanceBetweenTouches(event);
        return {
          event,
          distance,
          delta: (distance - prev.distance) * TOUCH_SENSITIVITY
        };
      }, {
        event: startEvent,
        distance: tuiDistanceBetweenTouches(startEvent),
        delta: 0
      }), map(({
        event,
        delta
      }) => {
        const clientX = (event.touches[0].clientX + event.touches[1].clientX) / 2;
        const clientY = (event.touches[0].clientY + event.touches[1].clientY) / 2;
        return {
          clientX,
          clientY,
          delta,
          event
        };
      }), takeUntil(tuiTypedFromEvent(nativeElement, "touchend"))))), tuiTypedFromEvent(nativeElement, "wheel", {
        passive: false
      }).pipe(tuiPreventDefault(), map((wheel) => ({
        clientX: wheel.clientX,
        clientY: wheel.clientY,
        delta: -wheel.deltaY * wheelSensitivity,
        event: wheel
      })))).subscribe(subscriber);
    });
  }
};
TuiZoomService.ɵfac = function TuiZoomService_Factory(t) {
  return new (t || TuiZoomService)(ɵɵinject(ElementRef), ɵɵinject(TUI_ZOOM_OPTIONS));
};
TuiZoomService.ɵprov = ɵɵdefineInjectable({
  token: TuiZoomService,
  factory: TuiZoomService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoomService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ZOOM_OPTIONS]
      }]
    }];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-abstract.js
var _c0 = ["viewContainer"];
var TUI2 = "tui_interactive_";
var AbstractTuiInteractive = class _AbstractTuiInteractive {
  constructor() {
    this.pseudoHover = null;
    this.pseudoActive = null;
    this.pseudoFocus = null;
    this.focusable = true;
    this.nativeId = "";
    this.focusedChange = new EventEmitter();
    this.focusVisibleChange = new EventEmitter();
    this.focusVisible = false;
    this.autoIdString = `${TUI2}${_AbstractTuiInteractive.autoId++}${Date.now()}`;
  }
  get computedDisabled() {
    return this.disabled;
  }
  get computedFocusable() {
    return !this.computedDisabled && (this.focusable || this.focused);
  }
  get computedFocused() {
    var _a;
    return !this.computedDisabled && ((_a = this.pseudoFocus) !== null && _a !== void 0 ? _a : this.focused);
  }
  get computedFocusVisible() {
    var _a;
    return !this.computedDisabled && ((_a = this.pseudoFocus) !== null && _a !== void 0 ? _a : this.focusVisible);
  }
  // TODO: 3.0 Consider removing since native input is exposed
  get id() {
    return this.nativeId || this.autoIdString;
  }
  updateFocused(focused) {
    this.focusedChange.emit(focused);
  }
  updateFocusVisible(focusVisible) {
    if (this.focusVisible === focusVisible) {
      return;
    }
    this.focusVisible = focusVisible;
    this.focusVisibleChange.emit(focusVisible);
  }
};
AbstractTuiInteractive.autoId = 0;
AbstractTuiInteractive.ɵfac = function AbstractTuiInteractive_Factory(t) {
  return new (t || AbstractTuiInteractive)();
};
AbstractTuiInteractive.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiInteractive,
  hostVars: 7,
  hostBindings: function AbstractTuiInteractive_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-focused", ctx.pseudoFocus);
      ɵɵclassProp("_disabled", ctx.computedDisabled)("_focused", ctx.computedFocused)("_focus-visible", ctx.computedFocusVisible);
    }
  },
  inputs: {
    pseudoHover: "pseudoHover",
    pseudoActive: "pseudoActive",
    pseudoFocus: "pseudoFocus",
    focusable: "focusable",
    nativeId: "nativeId"
  },
  outputs: {
    focusedChange: "focusedChange",
    focusVisibleChange: "focusVisibleChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiInteractive, [{
    type: Directive
  }], function() {
    return [];
  }, {
    pseudoHover: [{
      type: Input
    }],
    pseudoActive: [{
      type: Input
    }],
    pseudoFocus: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-focused"]
    }],
    focusable: [{
      type: Input
    }],
    nativeId: [{
      type: Input
    }],
    focusedChange: [{
      type: Output
    }],
    focusVisibleChange: [{
      type: Output
    }],
    computedDisabled: [{
      type: HostBinding,
      args: ["class._disabled"]
    }],
    computedFocused: [{
      type: HostBinding,
      args: ["class._focused"]
    }],
    computedFocusVisible: [{
      type: HostBinding,
      args: ["class._focus-visible"]
    }]
  });
})();
var AbstractTuiValueTransformer = class {
};
var AbstractTuiControl = class extends AbstractTuiInteractive {
  constructor(ngControl, cdr, valueTransformer) {
    super();
    this.ngControl = ngControl;
    this.cdr = cdr;
    this.valueTransformer = valueTransformer;
    this.refresh$ = new Subject();
    this.onTouched = EMPTY_FUNCTION;
    this.onChange = EMPTY_FUNCTION;
    this.fallbackValue = this.getFallbackValue();
    this.destroy$ = new Subject();
    this.readOnly = false;
    this.pseudoInvalid = null;
    if (ngDevMode && this.ngControl === null) {
      tuiAssert.assert(false, `NgControl not injected in ${this.constructor.name}!
`, "Use [(ngModel)] or [formControl] or formControlName for correct work.");
    }
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
  get computedInvalid() {
    return this.interactive && (this.pseudoInvalid !== null ? this.pseudoInvalid : this.touched && this.invalid);
  }
  get value() {
    var _a;
    return (_a = this.previousInternalValue) !== null && _a !== void 0 ? _a : this.fallbackValue;
  }
  set value(value) {
    this.updateValue(value);
  }
  get safeCurrentValue() {
    var _a;
    return (_a = this.rawValue) !== null && _a !== void 0 ? _a : this.fallbackValue;
  }
  get invalid() {
    return this.safeNgControlData(({
      invalid
    }) => invalid, false);
  }
  get valid() {
    return this.safeNgControlData(({
      valid
    }) => valid, false);
  }
  get touched() {
    return this.safeNgControlData(({
      touched
    }) => touched, false);
  }
  get disabled() {
    return this.safeNgControlData(({
      disabled
    }) => disabled, false);
  }
  get interactive() {
    return !this.readOnly && !this.computedDisabled;
  }
  get control() {
    return this.safeNgControlData(({
      control
    }) => control, null);
  }
  get computedName() {
    var _a, _b;
    return (_b = (_a = this.controlName) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : null;
  }
  get controlName() {
    var _a, _b, _c;
    return (_c = (_b = (_a = this.ngControl) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : null;
  }
  get rawValue() {
    const {
      ngControl
    } = this;
    if (ngControl === null) {
      return void 0;
    }
    const controlValue = ngControl instanceof NgModel && this.previousInternalValue === void 0 ? ngControl.viewModel : ngControl.value;
    return this.fromControlValue(controlValue);
  }
  ngOnInit() {
    this.refresh$.pipe(delay(0), startWith(null), map(() => {
      var _a;
      return (_a = this.ngControl) === null || _a === void 0 ? void 0 : _a.control;
    }), filter(tuiIsPresent), distinctUntilChanged(), switchMap((control) => merge(control.valueChanges, control.statusChanges)), takeUntil(this.destroy$)).subscribe(() => {
      this.refreshLocalValue(this.safeCurrentValue);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  checkControlUpdate() {
    this.cdr.markForCheck();
  }
  registerOnChange(onChange) {
    this.onChange = (componentValue) => {
      onChange(this.toControlValue(componentValue));
    };
    this.refresh$.next();
  }
  registerOnTouched(onTouched) {
    this.onTouched = onTouched;
  }
  setDisabledState() {
    this.checkControlUpdate();
  }
  writeValue(value) {
    const controlValue = this.ngControl instanceof NgModel && this.previousInternalValue === void 0 ? this.ngControl.model : value;
    this.refreshLocalValue(this.fromControlValue(controlValue));
  }
  updateFocused(focused) {
    if (!focused) {
      this.controlMarkAsTouched();
    }
    super.updateFocused(focused);
  }
  /**
   * @deprecated use `value` setter
   */
  updateValue(value) {
    if (this.disabled || this.valueIdenticalComparator(this.value, value)) {
      return;
    }
    this.previousInternalValue = value;
    this.controlSetValue(value);
  }
  valueIdenticalComparator(oldValue, newValue) {
    return oldValue === newValue;
  }
  safeNgControlData(extractor, defaultFieldValue) {
    var _a;
    return (_a = this.ngControl && extractor(this.ngControl)) !== null && _a !== void 0 ? _a : defaultFieldValue;
  }
  controlMarkAsTouched() {
    this.onTouched();
    this.checkControlUpdate();
  }
  controlSetValue(value) {
    this.onChange(value);
    this.checkControlUpdate();
  }
  refreshLocalValue(value) {
    this.previousInternalValue = value;
    this.checkControlUpdate();
  }
  fromControlValue(controlValue) {
    return this.valueTransformer ? this.valueTransformer.fromControlValue(controlValue) : controlValue;
  }
  toControlValue(componentValue) {
    return this.valueTransformer ? this.valueTransformer.toControlValue(componentValue) : componentValue;
  }
};
AbstractTuiControl.ɵfac = function AbstractTuiControl_Factory(t) {
  return new (t || AbstractTuiControl)(ɵɵdirectiveInject(NgControl, 8), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(AbstractTuiValueTransformer, 8));
};
AbstractTuiControl.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiControl,
  hostVars: 4,
  hostBindings: function AbstractTuiControl_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("_readonly", ctx.readOnly)("_invalid", ctx.computedInvalid);
    }
  },
  inputs: {
    readOnly: "readOnly",
    pseudoInvalid: "pseudoInvalid"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiControl, [{
    type: Directive
  }], function() {
    return [{
      type: NgControl,
      decorators: [{
        type: Optional
      }]
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [AbstractTuiValueTransformer]
      }]
    }];
  }, {
    readOnly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class._readonly"]
    }],
    pseudoInvalid: [{
      type: Input
    }],
    computedInvalid: [{
      type: HostBinding,
      args: ["class._invalid"]
    }]
  });
})();
function tuiAsControl(useExisting) {
  return {
    provide: AbstractTuiControl,
    useExisting
  };
}
var AbstractTuiController = class {
  constructor() {
    this.change$ = new Subject();
  }
  ngOnChanges() {
    this.change$.next();
  }
};
AbstractTuiController.ɵfac = function AbstractTuiController_Factory(t) {
  return new (t || AbstractTuiController)();
};
AbstractTuiController.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiController,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiController, [{
    type: Directive
  }], null, null);
})();
var AbstractTuiDialogService = class extends Observable {
  constructor(idService) {
    super((observer) => this.dialogs$.subscribe(observer));
    this.idService = idService;
    this.dialogs$ = new BehaviorSubject([]);
  }
  open(content, options = {}) {
    return new Observable((observer) => {
      const completeWith = (result) => {
        observer.next(result);
        observer.complete();
      };
      const dialog = Object.assign(Object.assign(Object.assign({}, this.defaultOptions), options), {
        content,
        completeWith,
        $implicit: observer,
        component: this.component,
        createdAt: Date.now(),
        id: this.idService.generate()
      });
      this.dialogs$.next([...this.dialogs$.value, dialog]);
      return () => {
        this.dialogs$.next(this.dialogs$.value.filter((item) => item !== dialog));
      };
    });
  }
};
AbstractTuiDialogService.ɵfac = function AbstractTuiDialogService_Factory(t) {
  return new (t || AbstractTuiDialogService)(ɵɵinject(TuiIdService));
};
AbstractTuiDialogService.ɵprov = ɵɵdefineInjectable({
  token: AbstractTuiDialogService,
  factory: AbstractTuiDialogService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiDialogService, [{
    type: Injectable
  }], function() {
    return [{
      type: TuiIdService,
      decorators: [{
        type: Inject,
        args: [TuiIdService]
      }]
    }];
  }, null);
})();
var AbstractTuiDialogDirective = class extends PolymorpheusTemplate {
  constructor(templateRef, cdr, service) {
    super(templateRef, cdr);
    this.service = service;
    this.open$ = new Subject();
    this.options = {};
    this.open = false;
    this.openChange = this.open$.pipe(distinctUntilChanged(), tuiIfMap(() => this.service.open(this, this.options).pipe(ignoreElements(), endWith(false))), share());
  }
  ngOnChanges() {
    this.open$.next(this.open);
  }
};
AbstractTuiDialogDirective.ɵfac = function AbstractTuiDialogDirective_Factory(t) {
  return new (t || AbstractTuiDialogDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(AbstractTuiDialogService));
};
AbstractTuiDialogDirective.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiDialogDirective,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiDialogDirective, [{
    type: Directive
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }, {
      type: AbstractTuiDialogService,
      decorators: [{
        type: Inject,
        args: [AbstractTuiDialogService]
      }]
    }];
  }, null);
})();
var AbstractTuiMultipleControl = class extends AbstractTuiControl {
  clear() {
    this.value = [];
  }
  getFallbackValue() {
    return [];
  }
};
AbstractTuiMultipleControl.ɵfac = /* @__PURE__ */ (() => {
  let ɵAbstractTuiMultipleControl_BaseFactory;
  return function AbstractTuiMultipleControl_Factory(t) {
    return (ɵAbstractTuiMultipleControl_BaseFactory || (ɵAbstractTuiMultipleControl_BaseFactory = ɵɵgetInheritedFactory(AbstractTuiMultipleControl)))(t || AbstractTuiMultipleControl);
  };
})();
AbstractTuiMultipleControl.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiMultipleControl,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiMultipleControl, [{
    type: Directive
  }], null, null);
})();
var AbstractTuiNullableControl = class extends AbstractTuiControl {
  getFallbackValue() {
    return null;
  }
};
AbstractTuiNullableControl.ɵfac = /* @__PURE__ */ (() => {
  let ɵAbstractTuiNullableControl_BaseFactory;
  return function AbstractTuiNullableControl_Factory(t) {
    return (ɵAbstractTuiNullableControl_BaseFactory || (ɵAbstractTuiNullableControl_BaseFactory = ɵɵgetInheritedFactory(AbstractTuiNullableControl)))(t || AbstractTuiNullableControl);
  };
})();
AbstractTuiNullableControl.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiNullableControl,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiNullableControl, [{
    type: Directive
  }], null, null);
})();
var AbstractTuiPortalService = class {
  get safeHost() {
    if (!this.host) {
      throw new TuiNoHostException();
    }
    return this.host;
  }
  attach(host) {
    this.host = host;
  }
  add(component) {
    return this.safeHost.addComponentChild(component);
  }
  remove({
    hostView
  }) {
    if (!hostView.destroyed) {
      hostView.destroy();
    }
  }
  addTemplate(templateRef, context) {
    return this.safeHost.addTemplateChild(templateRef, context);
  }
  removeTemplate(viewRef) {
    if (!viewRef.destroyed) {
      viewRef.destroy();
    }
  }
};
AbstractTuiPortalService.ɵfac = function AbstractTuiPortalService_Factory(t) {
  return new (t || AbstractTuiPortalService)();
};
AbstractTuiPortalService.ɵprov = ɵɵdefineInjectable({
  token: AbstractTuiPortalService,
  factory: AbstractTuiPortalService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiPortalService, [{
    type: Injectable
  }], null, null);
})();
var AbstractTuiPortalHostComponent = class _AbstractTuiPortalHostComponent {
  constructor(injector, el, portalService) {
    this.injector = injector;
    this.el = el;
    portalService.attach(this);
  }
  /** @deprecated unused, will be removed in 4.0 **/
  get clientRect() {
    return this.el.nativeElement.getBoundingClientRect();
  }
  addComponentChild(component) {
    const parent = component.createInjector(this.injector);
    const resolver = parent.get(ComponentFactoryResolver$1);
    const factory = resolver.resolveComponentFactory(component.component);
    const providers = [{
      provide: _AbstractTuiPortalHostComponent,
      useValue: this
    }];
    const injector = Injector.create({
      parent,
      providers
    });
    const ref = this.vcr.createComponent(factory, void 0, injector);
    ref.changeDetectorRef.detectChanges();
    return ref;
  }
  addTemplateChild(templateRef, context) {
    return this.vcr.createEmbeddedView(templateRef, context);
  }
};
AbstractTuiPortalHostComponent.ɵfac = function AbstractTuiPortalHostComponent_Factory(t) {
  return new (t || AbstractTuiPortalHostComponent)(ɵɵdirectiveInject(INJECTOR$1), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AbstractTuiPortalService));
};
AbstractTuiPortalHostComponent.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiPortalHostComponent,
  viewQuery: function AbstractTuiPortalHostComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.vcr = _t.first);
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiPortalHostComponent, [{
    type: Directive
  }], function() {
    return [{
      type: Injector,
      decorators: [{
        type: Inject,
        args: [INJECTOR$1]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: AbstractTuiPortalService,
      decorators: [{
        type: Inject,
        args: [AbstractTuiPortalService]
      }]
    }];
  }, {
    vcr: [{
      type: ViewChild,
      args: ["viewContainer", {
        read: ViewContainerRef
      }]
    }]
  });
})();
var AbstractTuiThemeSwitcher = class {
  constructor(doc) {
    this.doc = doc;
    if (this.style !== null) {
      this.addTheme();
      return;
    }
    const styles = this.doc.head.querySelectorAll("style");
    this.constructor.style = styles[styles.length - 1];
  }
  get style() {
    return this.constructor.style;
  }
  ngOnDestroy() {
    this.removeTheme();
  }
  addTheme() {
    if (this.style) {
      this.doc.head.appendChild(this.style);
    }
  }
  removeTheme() {
    var _a;
    (_a = this.style) === null || _a === void 0 ? void 0 : _a.remove();
  }
};
AbstractTuiThemeSwitcher.style = null;
AbstractTuiThemeSwitcher.ɵfac = function AbstractTuiThemeSwitcher_Factory(t) {
  return new (t || AbstractTuiThemeSwitcher)(ɵɵdirectiveInject(DOCUMENT));
};
AbstractTuiThemeSwitcher.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiThemeSwitcher
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiThemeSwitcher, [{
    type: Directive
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-coercion.js
function tuiCoerceBooleanProperty(value) {
  return value !== null && typeof value !== "undefined" && `${value}` !== "false";
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-pipes-filter.js
var TuiFilterPipe = class {
  transform(items, matcher, ...args) {
    return items.filter((item) => matcher(item, ...args));
  }
};
TuiFilterPipe.ɵfac = function TuiFilterPipe_Factory(t) {
  return new (t || TuiFilterPipe)();
};
TuiFilterPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiFilter",
  type: TuiFilterPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFilterPipe, [{
    type: Pipe,
    args: [{
      name: "tuiFilter"
    }]
  }], null, null);
})();
var TuiFilterPipeModule = class {
};
TuiFilterPipeModule.ɵfac = function TuiFilterPipeModule_Factory(t) {
  return new (t || TuiFilterPipeModule)();
};
TuiFilterPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFilterPipeModule,
  declarations: [TuiFilterPipe],
  exports: [TuiFilterPipe]
});
TuiFilterPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFilterPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFilterPipe],
      exports: [TuiFilterPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-pipes-is-present.js
var TuiIsPresentPipe = class {
  transform(value) {
    return tuiIsPresent(value);
  }
};
TuiIsPresentPipe.ɵfac = function TuiIsPresentPipe_Factory(t) {
  return new (t || TuiIsPresentPipe)();
};
TuiIsPresentPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiIsPresent",
  type: TuiIsPresentPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIsPresentPipe, [{
    type: Pipe,
    args: [{
      name: "tuiIsPresent"
    }]
  }], null, null);
})();
var TuiIsPresentPipeModule = class {
};
TuiIsPresentPipeModule.ɵfac = function TuiIsPresentPipeModule_Factory(t) {
  return new (t || TuiIsPresentPipeModule)();
};
TuiIsPresentPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiIsPresentPipeModule,
  declarations: [TuiIsPresentPipe],
  exports: [TuiIsPresentPipe]
});
TuiIsPresentPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIsPresentPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiIsPresentPipe],
      exports: [TuiIsPresentPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-pipes-keys.js
var TuiKeysPipe = class {
  transform(object) {
    return Object.keys(object);
  }
};
TuiKeysPipe.ɵfac = function TuiKeysPipe_Factory(t) {
  return new (t || TuiKeysPipe)();
};
TuiKeysPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiKeys",
  type: TuiKeysPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiKeysPipe, [{
    type: Pipe,
    args: [{
      name: "tuiKeys"
    }]
  }], null, null);
})();
var TuiKeysPipeModule = class {
};
TuiKeysPipeModule.ɵfac = function TuiKeysPipeModule_Factory(t) {
  return new (t || TuiKeysPipeModule)();
};
TuiKeysPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiKeysPipeModule,
  declarations: [TuiKeysPipe],
  exports: [TuiKeysPipe]
});
TuiKeysPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiKeysPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiKeysPipe],
      exports: [TuiKeysPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-pipes-mapper.js
var TuiMapperPipe = class {
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
};
TuiMapperPipe.ɵfac = function TuiMapperPipe_Factory(t) {
  return new (t || TuiMapperPipe)();
};
TuiMapperPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiMapper",
  type: TuiMapperPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipe, [{
    type: Pipe,
    args: [{
      name: "tuiMapper"
    }]
  }], null, null);
})();
var TuiMapperPipeModule = class {
};
TuiMapperPipeModule.ɵfac = function TuiMapperPipeModule_Factory(t) {
  return new (t || TuiMapperPipeModule)();
};
TuiMapperPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiMapperPipeModule,
  declarations: [TuiMapperPipe],
  exports: [TuiMapperPipe]
});
TuiMapperPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiMapperPipe],
      exports: [TuiMapperPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-pipes-replace.js
var TuiReplacePipe = class {
  transform(value, search, replaceValue) {
    var _a;
    return (_a = value === null || value === void 0 ? void 0 : value.replace(
      search,
      // TS bug: https://github.com/microsoft/TypeScript/issues/22378
      replaceValue
    )) !== null && _a !== void 0 ? _a : "";
  }
};
TuiReplacePipe.ɵfac = function TuiReplacePipe_Factory(t) {
  return new (t || TuiReplacePipe)();
};
TuiReplacePipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiReplace",
  type: TuiReplacePipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiReplacePipe, [{
    type: Pipe,
    args: [{
      name: "tuiReplace"
    }]
  }], null, null);
})();
var TuiReplacePipeModule = class {
};
TuiReplacePipeModule.ɵfac = function TuiReplacePipeModule_Factory(t) {
  return new (t || TuiReplacePipeModule)();
};
TuiReplacePipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiReplacePipeModule,
  declarations: [TuiReplacePipe],
  exports: [TuiReplacePipe]
});
TuiReplacePipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiReplacePipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiReplacePipe],
      exports: [TuiReplacePipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-components-alert-host.js
function TuiAlertHostComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
    ɵɵpipe(1, "tuiMapper");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngComponentOutlet", item_r1.component.component)("ngComponentOutletInjector", ɵɵpipeBind2(1, 2, item_r1, ctx_r1.mapper));
  }
}
function TuiAlertHostComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiAlertHostComponent_div_0_ng_container_1_Template, 2, 5, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const alert_r3 = ctx.$implicit;
    ɵɵproperty("@tuiParentAnimation", void 0);
    ɵɵadvance();
    ɵɵproperty("ngForOf", alert_r3);
  }
}
var TuiAlertHostComponent = class {
  constructor(allAlerts, injector, destroy$, cdr) {
    this.allAlerts = allAlerts;
    this.injector = injector;
    this.destroy$ = destroy$;
    this.cdr = cdr;
    this.alerts = [];
    this.trackBy = (index) => index;
    this.mapper = (useValue) => Injector.create({
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }],
      parent: this.injector
    });
  }
  ngOnInit() {
    combineLatest(this.allAlerts).pipe(takeUntil(this.destroy$)).subscribe((alerts) => {
      this.alerts = alerts;
      this.cdr.detectChanges();
    });
  }
};
TuiAlertHostComponent.ɵfac = function TuiAlertHostComponent_Factory(t) {
  return new (t || TuiAlertHostComponent)(ɵɵdirectiveInject(TUI_ALERTS), ɵɵdirectiveInject(INJECTOR$1), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(ChangeDetectorRef));
};
TuiAlertHostComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiAlertHostComponent,
  selectors: [["tui-alert-host"]],
  features: [ɵɵProvidersFeature([TuiDestroyService])],
  decls: 1,
  vars: 2,
  consts: [["class", "t-wrapper", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "t-wrapper"], [3, "ngComponentOutlet", "ngComponentOutletInjector", 4, "ngFor", "ngForOf"], [3, "ngComponentOutlet", "ngComponentOutletInjector"]],
  template: function TuiAlertHostComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiAlertHostComponent_div_0_Template, 2, 2, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.alerts)("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [NgForOf, NgComponentOutlet, TuiMapperPipe],
  styles: ["tui-alert-host>.t-wrapper{position:fixed;top:0;left:0;display:flex;width:100%;height:100%;flex-direction:column;pointer-events:none}tui-alert-host>.t-wrapper>*{pointer-events:auto}\n"],
  encapsulation: 2,
  data: {
    animation: [TUI_PARENT_ANIMATION]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertHostComponent, [{
    type: Component,
    args: [{
      selector: "tui-alert-host",
      templateUrl: "./alert-host.template.html",
      styleUrls: ["./alert-host.style.less"],
      encapsulation: ViewEncapsulation$1.None,
      // So that we do not force OnPush on custom alerts
      // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDestroyService],
      animations: [TUI_PARENT_ANIMATION]
    }]
  }], function() {
    return [{
      type: Array,
      decorators: [{
        type: Inject,
        args: [TUI_ALERTS]
      }]
    }, {
      type: Injector,
      decorators: [{
        type: Inject,
        args: [INJECTOR$1]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }];
  }, null);
})();
var TuiAlertHostModule = class {
};
TuiAlertHostModule.ɵfac = function TuiAlertHostModule_Factory(t) {
  return new (t || TuiAlertHostModule)();
};
TuiAlertHostModule.ɵmod = ɵɵdefineNgModule({
  type: TuiAlertHostModule,
  declarations: [TuiAlertHostComponent],
  imports: [CommonModule, TuiMapperPipeModule],
  exports: [TuiAlertHostComponent]
});
TuiAlertHostModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiMapperPipeModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertHostModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiMapperPipeModule],
      declarations: [TuiAlertHostComponent],
      exports: [TuiAlertHostComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-components-scroll-controls.js
function TuiScrollControlsComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r1 = ɵɵnextContext().ngIf;
    ɵɵclassProp("t-bar_has-horizontal", bars_r1[1]);
  }
}
function TuiScrollControlsComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r1 = ɵɵnextContext().ngIf;
    ɵɵclassProp("t-bar_has-vertical", bars_r1[0]);
  }
}
function TuiScrollControlsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiScrollControlsComponent_ng_container_0_div_1_Template, 2, 2, "div", 1)(2, TuiScrollControlsComponent_ng_container_0_div_2_Template, 2, 2, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const bars_r1 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", bars_r1[0]);
    ɵɵadvance();
    ɵɵproperty("ngIf", bars_r1[1]);
  }
}
var MIN_WIDTH = 24;
function getOffsetVertical({
  clientY
}, {
  top,
  height
}) {
  return (clientY - top) / height;
}
function getOffsetHorizontal({
  clientX
}, {
  left,
  width
}) {
  return (clientX - left) / width;
}
var TuiScrollbarDirective = class {
  constructor(zone, destroy$, animationFrame$, container, doc, el) {
    this.container = container;
    this.doc = doc;
    this.el = el;
    this.tuiScrollbar = "vertical";
    const {
      nativeElement
    } = this.el;
    const mousedown$ = tuiTypedFromEvent(nativeElement, "mousedown");
    const mousemove$ = tuiTypedFromEvent(this.doc, "mousemove");
    const mouseup$ = tuiTypedFromEvent(this.doc, "mouseup");
    const mousedownWrapper$ = tuiTypedFromEvent(this.wrapper, "mousedown");
    merge(mousedownWrapper$.pipe(map((event) => this.getScrolled(event, 0.5, 0.5))), mousedown$.pipe(switchMap((event) => {
      const rect2 = nativeElement.getBoundingClientRect();
      const vertical = getOffsetVertical(event, rect2);
      const horizontal = getOffsetHorizontal(event, rect2);
      return mousemove$.pipe(map((event2) => this.getScrolled(event2, vertical, horizontal)), takeUntil(mouseup$));
    }))).pipe(tuiZonefree(zone), takeUntil(destroy$)).subscribe(([scrollTop, scrollLeft]) => {
      if (this.tuiScrollbar === "vertical") {
        this.element.scrollTop = scrollTop;
      } else {
        this.element.scrollLeft = scrollLeft;
      }
    });
    merge(animationFrame$.pipe(throttleTime(POLLING_TIME)), tuiScrollFrom(this.element)).pipe(tuiZonefree(zone), takeUntil(destroy$)).subscribe(() => {
      if (this.tuiScrollbar === "vertical") {
        nativeElement.style.top = `${this.thumb * 100}%`;
        nativeElement.style.height = `${this.view * 100}%`;
      } else {
        nativeElement.style.left = `${this.thumb * 100}%`;
        nativeElement.style.width = `${this.view * 100}%`;
      }
    });
  }
  get wrapper() {
    return this.el.nativeElement.parentElement;
  }
  get scrolled() {
    const {
      scrollTop,
      scrollHeight,
      clientHeight,
      scrollLeft,
      scrollWidth,
      clientWidth
    } = this.element;
    return this.tuiScrollbar === "vertical" ? scrollTop / (scrollHeight - clientHeight) : scrollLeft / (scrollWidth - clientWidth);
  }
  get compensation() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.element;
    if (clientHeight * clientHeight / scrollHeight > MIN_WIDTH && this.tuiScrollbar === "vertical" || clientWidth * clientWidth / scrollWidth > MIN_WIDTH && this.tuiScrollbar === "horizontal") {
      return 0;
    }
    return this.tuiScrollbar === "vertical" ? MIN_WIDTH / clientHeight : MIN_WIDTH / clientWidth;
  }
  get thumb() {
    const compensation = this.compensation || this.view;
    return this.scrolled * (1 - compensation);
  }
  get view() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.element;
    return this.tuiScrollbar === "vertical" ? Math.ceil(clientHeight / scrollHeight * 100) / 100 : Math.ceil(clientWidth / scrollWidth * 100) / 100;
  }
  get element() {
    return this.container.nativeElement;
  }
  getScrolled({
    clientY,
    clientX
  }, offsetVertical, offsetHorizontal) {
    const {
      offsetHeight,
      offsetWidth
    } = this.el.nativeElement;
    const {
      top,
      left,
      width,
      height
    } = this.wrapper.getBoundingClientRect();
    const maxTop = this.element.scrollHeight - height;
    const maxLeft = this.element.scrollWidth - width;
    const scrolledTop = (clientY - top - offsetHeight * offsetVertical) / (height - offsetHeight);
    const scrolledLeft = (clientX - left - offsetWidth * offsetHorizontal) / (width - offsetWidth);
    return [maxTop * scrolledTop, maxLeft * scrolledLeft];
  }
};
TuiScrollbarDirective.ɵfac = function TuiScrollbarDirective_Factory(t) {
  return new (t || TuiScrollbarDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(ANIMATION_FRAME), ɵɵdirectiveInject(TUI_SCROLL_REF), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef));
};
TuiScrollbarDirective.ɵdir = ɵɵdefineDirective({
  type: TuiScrollbarDirective,
  selectors: [["", "tuiScrollbar", ""]],
  inputs: {
    tuiScrollbar: "tuiScrollbar"
  },
  features: [ɵɵProvidersFeature([TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollbar]",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [TUI_SCROLL_REF]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    tuiScrollbar: [{
      type: Input
    }]
  });
})();
var TuiScrollControlsComponent = class {
  constructor(zone, scrollRef, animationFrame$) {
    this.zone = zone;
    this.scrollRef = scrollRef;
    this.animationFrame$ = animationFrame$;
    this.refresh$ = this.animationFrame$.pipe(throttleTime(300), map(() => this.scrollbars), startWith([false, false]), distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]), tuiZoneOptimized(this.zone));
  }
  get scrollbars() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.scrollRef.nativeElement;
    return [Math.ceil(clientHeight / scrollHeight * 100) < 100, Math.ceil(clientWidth / scrollWidth * 100) < 100];
  }
};
TuiScrollControlsComponent.ɵfac = function TuiScrollControlsComponent_Factory(t) {
  return new (t || TuiScrollControlsComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(TUI_SCROLL_REF), ɵɵdirectiveInject(ANIMATION_FRAME));
};
TuiScrollControlsComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiScrollControlsComponent,
  selectors: [["tui-scroll-controls"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["class", "t-bar t-bar_vertical", 3, "t-bar_has-horizontal", 4, "ngIf"], ["class", "t-bar t-bar_horizontal", 3, "t-bar_has-vertical", 4, "ngIf"], [1, "t-bar", "t-bar_vertical"], ["tuiScrollbar", "vertical", 1, "t-thumb"], [1, "t-bar", "t-bar_horizontal"], ["tuiScrollbar", "horizontal", 1, "t-thumb"]],
  template: function TuiScrollControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiScrollControlsComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.refresh$));
    }
  },
  dependencies: [NgIf, TuiScrollbarDirective, AsyncPipe],
  styles: ["[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;top:0;left:0;z-index:1;min-width:calc(100% - 1px);min-height:calc(100% - 1px);max-width:calc(100% - 1px);max-height:calc(100% - 1px);float:left;-webkit-margin-end:calc(-100% + 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none}.t-bar[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;pointer-events:auto;animation:tuiFadeIn var(--tui-duration, .3s) ease-in-out}.t-bar_vertical[_ngcontent-%COMP%]{top:0;width:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]{left:0;height:.875rem}.t-bar_has-horizontal[_ngcontent-%COMP%]{bottom:.5rem}.t-bar_has-vertical[_ngcontent-%COMP%]{right:.5rem}.t-thumb[_ngcontent-%COMP%]{position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition:all var(--tui-duration, .3s) ease-in-out;transition-property:width,height,opacity;opacity:.2}.t-thumb[_ngcontent-%COMP%]:hover{opacity:.24}.t-thumb[_ngcontent-%COMP%]:active{opacity:.48}.t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{right:0;width:.75rem;min-height:1.25rem}.t-bar_vertical[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{width:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{bottom:0;height:.75rem;min-width:1.25rem}.t-bar_horizontal[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{height:.875rem}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControlsComponent, [{
    type: Component,
    args: [{
      selector: "tui-scroll-controls",
      templateUrl: "./scroll-controls.template.html",
      styleUrls: ["./scroll-controls.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [TUI_SCROLL_REF]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }];
  }, null);
})();
var SCROLL_REF_SELECTOR = "[tuiScrollRef]";
var TuiScrollRefDirective = class {
};
TuiScrollRefDirective.ɵfac = function TuiScrollRefDirective_Factory(t) {
  return new (t || TuiScrollRefDirective)();
};
TuiScrollRefDirective.ɵdir = ɵɵdefineDirective({
  type: TuiScrollRefDirective,
  selectors: [["", "tuiScrollRef", ""]],
  features: [ɵɵProvidersFeature([{
    provide: TUI_SCROLL_REF,
    useExisting: ElementRef
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollRefDirective, [{
    type: Directive,
    args: [{
      selector: SCROLL_REF_SELECTOR,
      providers: [{
        provide: TUI_SCROLL_REF,
        useExisting: ElementRef
      }]
    }]
  }], null, null);
})();
var TuiScrollControlsModule = class {
};
TuiScrollControlsModule.ɵfac = function TuiScrollControlsModule_Factory(t) {
  return new (t || TuiScrollControlsModule)();
};
TuiScrollControlsModule.ɵmod = ɵɵdefineNgModule({
  type: TuiScrollControlsModule,
  declarations: [TuiScrollbarDirective, TuiScrollControlsComponent, TuiScrollRefDirective],
  imports: [CommonModule],
  exports: [TuiScrollControlsComponent, TuiScrollRefDirective]
});
TuiScrollControlsModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControlsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [TuiScrollbarDirective, TuiScrollControlsComponent, TuiScrollRefDirective],
      exports: [TuiScrollControlsComponent, TuiScrollRefDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-decorators.js
function tuiDebounce(timeout) {
  let timeoutRef;
  return function(_target, _key, descriptor) {
    const { value } = descriptor;
    descriptor.value = function(...args) {
      clearTimeout(timeoutRef);
      timeoutRef = setTimeout(() => value.apply(this, args), timeout);
    };
    return descriptor;
  };
}
function errorGetDefault(key, component) {
  return `Default value for ${String(key)} was not provided in ${component}, error in Taiga UI Angular Kit`;
}
function errorSetDefault(key, component) {
  return `Undefined was passed as ${String(key)} to ${component}, which is invalid input, using default value:`;
}
function errorSetDefaultInitial(key, component) {
  return `Undefined was passed as default value for ${String(key)} to ${component}, error in Taiga UI Angular Kit`;
}
function tuiDefaultProp(assertion, ...args) {
  return (target, key) => {
    const { name } = target.constructor;
    const errorGetDefaultMessage = ngDevMode && errorGetDefault(key, name);
    const errorSetDefaultMessage = ngDevMode && errorSetDefault(key, name);
    Object.defineProperty(target, key, {
      configurable: true,
      get() {
        ngDevMode && tuiAssert.assert(false, errorGetDefaultMessage);
        return void 0;
      },
      set(initialValue) {
        const isValid = initialValue !== void 0;
        const errorMessage = ngDevMode && errorSetDefaultInitial(key, name);
        let currentValue = initialValue;
        ngDevMode && tuiAssert.assert(isValid, errorMessage);
        if (ngDevMode && isValid && assertion && tuiAssert) {
          tuiAssert.assert(assertion.call(this, initialValue), `${String(key)} in ${name} received:`, initialValue, ...args);
        }
        Object.defineProperty(this, key, {
          configurable: true,
          get() {
            return currentValue;
          },
          set(value) {
            const isValid2 = value !== void 0;
            const backupValue = initialValue;
            ngDevMode && tuiAssert.assert(isValid2, errorSetDefaultMessage, String(backupValue));
            if (ngDevMode && isValid2 && assertion && tuiAssert) {
              tuiAssert.assert(assertion.call(this, value), `${String(key)} in ${name} received:`, value, ...args);
            }
            currentValue = isValid2 ? value : backupValue;
          }
        });
      }
    });
  };
}
function decorateMethod(originalMethod) {
  let previousArgs = [];
  let originalFnWasCalledLeastAtOnce = false;
  let pureValue;
  return function tuiPureMethodPatched(...args) {
    const isPure = originalFnWasCalledLeastAtOnce && previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index]);
    if (isPure) {
      return pureValue;
    }
    previousArgs = args;
    pureValue = originalMethod.apply(this, args);
    originalFnWasCalledLeastAtOnce = true;
    return pureValue;
  };
}
function decorateGetter(originalGetter, propertyKey, enumerable = true) {
  return function tuiPureGetterPatched() {
    const value = originalGetter.call(this);
    Object.defineProperty(this, propertyKey, { enumerable, value });
    return value;
  };
}
function tuiPure(target, propertyKeyOrContext, descriptor) {
  if (typeof target === "function") {
    const context = propertyKeyOrContext;
    if (context.kind === "getter") {
      return decorateGetter(target, context.name);
    }
    if (context.kind === "method") {
      return decorateMethod(target);
    }
    throw new TuiPureException();
  }
  const { get, enumerable, value } = descriptor;
  const propertyKey = propertyKeyOrContext;
  if (get) {
    return {
      configurable: true,
      enumerable,
      get: decorateGetter(get, propertyKey, enumerable)
    };
  }
  if (typeof value !== "function") {
    throw new TuiPureException();
  }
  const original = value;
  return {
    configurable: true,
    enumerable,
    get() {
      let previousArgs = [];
      let originalFnWasCalledLeastAtOnce = false;
      let pureValue;
      const patched = (...args) => {
        const isPure = originalFnWasCalledLeastAtOnce && previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index]);
        if (isPure) {
          return pureValue;
        }
        previousArgs = args;
        pureValue = original.apply(this, args);
        originalFnWasCalledLeastAtOnce = true;
        return pureValue;
      };
      Object.defineProperty(this, propertyKey, {
        configurable: true,
        value: patched
      });
      return patched;
    }
  };
}
function errorSet(key, component) {
  return `Undefined was passed as ${String(key)} to ${component}, setter will not be called`;
}
function tuiRequiredSetter(assertion, ...args) {
  return (target, key, { configurable, enumerable, get, set }) => {
    const { name } = target.constructor;
    return {
      configurable,
      enumerable,
      get,
      set(value) {
        if (ngDevMode && value !== void 0 && assertion && tuiAssert) {
          tuiAssert.assert(assertion.call(this, value), `${String(key)} in ${name} received:`, value, ...args);
        }
        if (!set || value === void 0) {
          ngDevMode && tuiAssert.assert(value !== void 0, errorSet(key, name));
          return;
        }
        set.call(this, value);
      }
    };
  };
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-active-zone.js
var TuiActiveZoneDirective = class {
  constructor(active$, zone, el, directParentActiveZone) {
    var _a;
    this.active$ = active$;
    this.zone = zone;
    this.el = el;
    this.directParentActiveZone = directParentActiveZone;
    this.subActiveZones = [];
    this.tuiActiveZoneParent = null;
    this.tuiActiveZoneChange = this.active$.pipe(map((element) => !!element && this.contains(element)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized(this.zone));
    (_a = this.directParentActiveZone) === null || _a === void 0 ? void 0 : _a.addSubActiveZone(this);
  }
  set tuiActiveZoneParentSetter(zone) {
    this.setZone(zone);
  }
  ngOnDestroy() {
    var _a, _b;
    (_a = this.directParentActiveZone) === null || _a === void 0 ? void 0 : _a.removeSubActiveZone(this);
    (_b = this.tuiActiveZoneParent) === null || _b === void 0 ? void 0 : _b.removeSubActiveZone(this);
  }
  contains(node) {
    return this.el.nativeElement.contains(node) || this.subActiveZones.some((item, index, array) => array.indexOf(item) === index && item.contains(node));
  }
  setZone(zone) {
    var _a;
    (_a = this.tuiActiveZoneParent) === null || _a === void 0 ? void 0 : _a.removeSubActiveZone(this);
    zone === null || zone === void 0 ? void 0 : zone.addSubActiveZone(this);
    this.tuiActiveZoneParent = zone;
  }
  addSubActiveZone(activeZone) {
    this.subActiveZones = [...this.subActiveZones, activeZone];
  }
  removeSubActiveZone(activeZone) {
    this.subActiveZones = tuiArrayRemove(this.subActiveZones, this.subActiveZones.indexOf(activeZone));
  }
};
TuiActiveZoneDirective.ɵfac = function TuiActiveZoneDirective_Factory(t) {
  return new (t || TuiActiveZoneDirective)(ɵɵdirectiveInject(TUI_ACTIVE_ELEMENT), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TuiActiveZoneDirective, 12));
};
TuiActiveZoneDirective.ɵdir = ɵɵdefineDirective({
  type: TuiActiveZoneDirective,
  selectors: [["", "tuiActiveZone", "", 5, "ng-container"], ["", "tuiActiveZoneChange", "", 5, "ng-container"], ["", "tuiActiveZoneParent", "", 5, "ng-container"]],
  inputs: {
    tuiActiveZoneParentSetter: [InputFlags.None, "tuiActiveZoneParent", "tuiActiveZoneParentSetter"]
  },
  outputs: {
    tuiActiveZoneChange: "tuiActiveZoneChange"
  },
  exportAs: ["tuiActiveZone"]
});
__decorate([tuiPure], TuiActiveZoneDirective.prototype, "setZone", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZoneDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)",
      exportAs: "tuiActiveZone"
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_ACTIVE_ELEMENT]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: TuiActiveZoneDirective,
      decorators: [{
        type: Optional
      }, {
        type: SkipSelf
      }, {
        type: Inject,
        args: [TuiActiveZoneDirective]
      }]
    }];
  }, {
    tuiActiveZoneParentSetter: [{
      type: Input,
      args: ["tuiActiveZoneParent"]
    }],
    tuiActiveZoneChange: [{
      type: Output
    }],
    setZone: []
  });
})();
var TuiActiveZoneModule = class {
};
TuiActiveZoneModule.ɵfac = function TuiActiveZoneModule_Factory(t) {
  return new (t || TuiActiveZoneModule)();
};
TuiActiveZoneModule.ɵmod = ɵɵdefineNgModule({
  type: TuiActiveZoneModule,
  declarations: [TuiActiveZoneDirective],
  exports: [TuiActiveZoneDirective]
});
TuiActiveZoneModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZoneModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiActiveZoneDirective],
      exports: [TuiActiveZoneDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-auto-focus.js
var AbstractTuiAutofocusHandler = class {
  constructor(focusable, el) {
    this.focusable = focusable;
    this.el = el;
  }
  get element() {
    var _a;
    return ((_a = this.focusable) === null || _a === void 0 ? void 0 : _a.nativeFocusableElement) || this.el.nativeElement;
  }
  get isTextFieldElement() {
    return this.element.matches("input, textarea, [contenteditable]");
  }
};
AbstractTuiAutofocusHandler.ɵfac = function AbstractTuiAutofocusHandler_Factory(t) {
  ɵɵinvalidFactory();
};
AbstractTuiAutofocusHandler.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiAutofocusHandler
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiAutofocusHandler, [{
    type: Directive
  }], function() {
    return [{
      type: void 0
    }, {
      type: ElementRef
    }];
  }, null);
})();
var TIMEOUT = 1e3;
var NG_ANIMATION_SELECTOR = ".ng-animating";
var TuiDefaultAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(focusable, el, animationFrame$) {
    super(focusable, el);
    this.animationFrame$ = animationFrame$;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      race(timer(TIMEOUT), this.animationFrame$.pipe(throttleTime(POLLING_TIME), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus({
        preventScroll: true
      }));
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
};
TuiDefaultAutofocusHandler.ɵfac = function TuiDefaultAutofocusHandler_Factory(t) {
  return new (t || TuiDefaultAutofocusHandler)(ɵɵdirectiveInject(TUI_FOCUSABLE_ITEM_ACCESSOR, 10), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ANIMATION_FRAME));
};
TuiDefaultAutofocusHandler.ɵdir = ɵɵdefineDirective({
  type: TuiDefaultAutofocusHandler,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDefaultAutofocusHandler, [{
    type: Directive
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }, {
        type: Inject,
        args: [TUI_FOCUSABLE_ITEM_ACCESSOR]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }];
  }, null);
})();
var TEXTFIELD_ATTRS = ["type", "inputMode", "autocomplete", "accept", "min", "max", "step", "pattern", "size", "maxlength"];
var TuiIosAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(focusable, el, renderer, zone, win) {
    super(focusable, el);
    this.renderer = renderer;
    this.zone = zone;
    this.win = win;
    this.patchCssStyles();
  }
  setFocus() {
    if (this.isTextFieldElement) {
      this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
  iosWebkitAutofocus() {
    var _a;
    const fakeInput = this.makeFakeInput();
    const duration = this.getDurationTimeBeforeFocus();
    let fakeFocusTimeoutId = 0;
    let elementFocusTimeoutId = 0;
    const blurHandler = () => fakeInput.focus({
      preventScroll: true
    });
    const focusHandler = () => {
      clearTimeout(fakeFocusTimeoutId);
      fakeFocusTimeoutId = this.win.setTimeout(() => {
        clearTimeout(elementFocusTimeoutId);
        fakeInput.removeEventListener("blur", blurHandler);
        fakeInput.removeEventListener("focus", focusHandler);
        elementFocusTimeoutId = this.win.setTimeout(() => {
          this.element.focus({
            preventScroll: false
          });
          fakeInput.remove();
        }, duration);
      });
    };
    fakeInput.addEventListener("blur", blurHandler, {
      once: true
    });
    fakeInput.addEventListener("focus", focusHandler);
    if (this.insideDialog()) {
      this.win.document.body.appendChild(fakeInput);
    } else {
      (_a = this.element.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(fakeInput);
    }
    fakeInput.focus({
      preventScroll: true
    });
  }
  /**
   * @note:
   * emulate textfield position in layout with cursor
   * before focus to real textfield element
   *
   * required note:
   * [fakeInput.readOnly = true] ~
   * don't use {readOnly: true} value, it's doesn't work for emulate autofill
   *
   * [fakeInput.style.opacity = 0] ~
   * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
   *
   * [fakeInput.style.fontSize = 16px] ~
   * disable possible auto zoom
   *
   * [fakeInput.style.top/left] ~
   * emulate position cursor before focus to real textfield element
   */
  makeFakeInput() {
    const fakeInput = this.renderer.createElement("input");
    const rect2 = this.element.getBoundingClientRect();
    this.patchFakeInputFromFocusableElement(fakeInput);
    fakeInput.style.height = tuiPx(rect2.height);
    fakeInput.style.width = tuiPx(rect2.width / 2);
    fakeInput.style.position = "fixed";
    fakeInput.style.zIndex = "-99999999";
    fakeInput.style.caretColor = "transparent";
    fakeInput.style.border = "none";
    fakeInput.style.outline = "none";
    fakeInput.style.color = "transparent";
    fakeInput.style.background = "transparent";
    fakeInput.style.cursor = "none";
    fakeInput.style.fontSize = tuiPx(16);
    fakeInput.style.top = tuiPx(rect2.top);
    fakeInput.style.left = tuiPx(rect2.left);
    return fakeInput;
  }
  getDurationTimeBeforeFocus() {
    return parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
  }
  /**
   * @note:
   * unfortunately, in older versions of iOS
   * there is a bug that the fake input cursor
   * will move along with the dialog animation
   * and then that dialog will be shaking
   */
  insideDialog() {
    return !!this.element.closest("tui-dialog");
  }
  /**
   * @note:
   * This is necessary so that the viewport isn't recalculated
   * and then the dialogs don't shake.
   *
   * Also, we need to fixed height viewport,
   * so that when focusing the dialogs don't shake
   */
  patchCssStyles() {
    [this.win.document.documentElement, this.win.document.body].forEach((element) => {
      element.style.setProperty("overflow", "auto");
      element.style.setProperty("height", "100%");
    });
  }
  /**
   * @note:
   * inherit basic attributes values from real input
   * for help iOS detect what do you want see on keyboard,
   * for example [inputMode=numeric, autocomplete=cc-number]
   */
  patchFakeInputFromFocusableElement(fakeInput) {
    TEXTFIELD_ATTRS.forEach((attr) => {
      const value = this.element.getAttribute(attr);
      if (tuiIsPresent(value)) {
        fakeInput.setAttribute(attr, value);
      }
    });
  }
};
TuiIosAutofocusHandler.ɵfac = function TuiIosAutofocusHandler_Factory(t) {
  return new (t || TuiIosAutofocusHandler)(ɵɵdirectiveInject(TUI_FOCUSABLE_ITEM_ACCESSOR, 10), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(WINDOW));
};
TuiIosAutofocusHandler.ɵdir = ɵɵdefineDirective({
  type: TuiIosAutofocusHandler,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIosAutofocusHandler, [{
    type: Directive
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }, {
        type: Inject,
        args: [TUI_FOCUSABLE_ITEM_ACCESSOR]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Renderer2,
      decorators: [{
        type: Inject,
        args: [Renderer2]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }];
  }, null);
})();
var TUI_AUTOFOCUS_DEFAULT_OPTIONS = {
  delay: NaN
  // NaN = no delay/sync
};
var TUI_AUTOFOCUS_OPTIONS = tuiCreateToken(TUI_AUTOFOCUS_DEFAULT_OPTIONS);
function tuiAutoFocusOptionsProvider(options) {
  return tuiProvideOptions(TUI_AUTOFOCUS_OPTIONS, options, TUI_AUTOFOCUS_DEFAULT_OPTIONS);
}
var TUI_AUTOFOCUS_HANDLER = new InjectionToken("[TUI_AUTOFOCUS_HANDLER]");
var TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  useFactory: (focusable, el, animationFrame$, renderer, zone, win, isIos) => isIos ? new TuiIosAutofocusHandler(focusable, el, renderer, zone, win) : new TuiDefaultAutofocusHandler(focusable, el, animationFrame$),
  deps: [[new Optional(), new Self(), TUI_FOCUSABLE_ITEM_ACCESSOR], ElementRef, ANIMATION_FRAME, Renderer2, NgZone, WINDOW, TUI_IS_IOS]
}, TuiDestroyService];
var TuiAutoFocusDirective = class {
  constructor(handler, options, destroy$) {
    this.handler = handler;
    this.options = options;
    this.destroy$ = destroy$;
    this.autoFocus = true;
  }
  ngAfterViewInit() {
    if (tuiCoerceBooleanProperty(this.autoFocus)) {
      this.focus();
    }
  }
  focus() {
    if (Number.isNaN(this.options.delay)) {
      void Promise.resolve().then(() => this.handler.setFocus());
    } else {
      timer(this.options.delay).pipe(takeUntil(this.destroy$)).subscribe(() => this.handler.setFocus());
    }
  }
};
TuiAutoFocusDirective.ɵfac = function TuiAutoFocusDirective_Factory(t) {
  return new (t || TuiAutoFocusDirective)(ɵɵdirectiveInject(TUI_AUTOFOCUS_HANDLER), ɵɵdirectiveInject(TUI_AUTOFOCUS_OPTIONS), ɵɵdirectiveInject(TuiDestroyService, 2));
};
TuiAutoFocusDirective.ɵdir = ɵɵdefineDirective({
  type: TuiAutoFocusDirective,
  selectors: [["", "tuiAutoFocus", ""]],
  inputs: {
    autoFocus: [InputFlags.None, "tuiAutoFocus", "autoFocus"]
  },
  features: [ɵɵProvidersFeature(TUI_AUTOFOCUS_PROVIDERS)]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocusDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiAutoFocus]",
      providers: TUI_AUTOFOCUS_PROVIDERS
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_AUTOFOCUS_HANDLER]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_AUTOFOCUS_OPTIONS]
      }]
    }, {
      type: TuiDestroyService,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }];
  }, {
    autoFocus: [{
      type: Input,
      args: ["tuiAutoFocus"]
    }]
  });
})();
var TuiAutoFocusModule = class {
};
TuiAutoFocusModule.ɵfac = function TuiAutoFocusModule_Factory(t) {
  return new (t || TuiAutoFocusModule)();
};
TuiAutoFocusModule.ɵmod = ɵɵdefineNgModule({
  type: TuiAutoFocusModule,
  declarations: [TuiAutoFocusDirective],
  exports: [TuiAutoFocusDirective]
});
TuiAutoFocusModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocusModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiAutoFocusDirective],
      exports: [TuiAutoFocusDirective]
    }]
  }], null, null);
})();
var TuiSynchronousAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(focusable, el) {
    super(focusable, el);
  }
  setFocus() {
    this.element.focus({
      preventScroll: true
    });
  }
};
TuiSynchronousAutofocusHandler.ɵfac = function TuiSynchronousAutofocusHandler_Factory(t) {
  return new (t || TuiSynchronousAutofocusHandler)(ɵɵdirectiveInject(TUI_FOCUSABLE_ITEM_ACCESSOR, 10), ɵɵdirectiveInject(ElementRef));
};
TuiSynchronousAutofocusHandler.ɵdir = ɵɵdefineDirective({
  type: TuiSynchronousAutofocusHandler,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSynchronousAutofocusHandler, [{
    type: Directive
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }, {
        type: Inject,
        args: [TUI_FOCUSABLE_ITEM_ACCESSOR]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-autofilled.js
var TuiAutofilledStyleComponent = class {
};
TuiAutofilledStyleComponent.ɵfac = function TuiAutofilledStyleComponent_Factory(t) {
  return new (t || TuiAutofilledStyleComponent)();
};
TuiAutofilledStyleComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiAutofilledStyleComponent,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-autofilled-styles"],
  decls: 0,
  vars: 0,
  template: function TuiAutofilledStyleComponent_Template(rf, ctx) {
  },
  styles: [".tui-autofill input,input.tui-autofill{transition:box-shadow .01s}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutofilledStyleComponent, [{
    type: Component,
    args: [{
      host: {
        class: "tui-autofilled-styles"
      },
      template: "",
      styleUrls: ["./autofilled.style.less"],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var TuiAutofilledDirective = class {
  constructor(directiveStyles) {
    this.autofilled = false;
    this.tuiAutofilledChange = new EventEmitter();
    directiveStyles.addComponent(TuiAutofilledStyleComponent);
  }
  transitionStartHandler({
    propertyName,
    target
  }) {
    var _a;
    const matchedAutofill = propertyName.includes("box-shadow") && ((_a = target) === null || _a === void 0 ? void 0 : _a.matches("input"));
    if (matchedAutofill) {
      this.autofilled = !this.autofilled;
      this.tuiAutofilledChange.emit(this.autofilled);
    }
  }
};
TuiAutofilledDirective.ɵfac = function TuiAutofilledDirective_Factory(t) {
  return new (t || TuiAutofilledDirective)(ɵɵdirectiveInject(TuiDirectiveStylesService));
};
TuiAutofilledDirective.ɵdir = ɵɵdefineDirective({
  type: TuiAutofilledDirective,
  selectors: [["", "tuiAutofilledChange", ""]],
  hostAttrs: [1, "tui-autofill"],
  hostVars: 2,
  hostBindings: function TuiAutofilledDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("transitionstart", function TuiAutofilledDirective_transitionstart_HostBindingHandler($event) {
        return ctx.transitionStartHandler($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("_autofilled", ctx.autofilled);
    }
  },
  outputs: {
    tuiAutofilledChange: "tuiAutofilledChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutofilledDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiAutofilledChange]",
      host: {
        class: "tui-autofill"
      }
    }]
  }], function() {
    return [{
      type: TuiDirectiveStylesService,
      decorators: [{
        type: Inject,
        args: [TuiDirectiveStylesService]
      }]
    }];
  }, {
    autofilled: [{
      type: HostBinding,
      args: ["class._autofilled"]
    }],
    tuiAutofilledChange: [{
      type: Output
    }],
    transitionStartHandler: [{
      type: HostListener,
      args: ["transitionstart", ["$event"]]
    }]
  });
})();
var TuiAutofilledModule = class {
};
TuiAutofilledModule.ɵfac = function TuiAutofilledModule_Factory(t) {
  return new (t || TuiAutofilledModule)();
};
TuiAutofilledModule.ɵmod = ɵɵdefineNgModule({
  type: TuiAutofilledModule,
  declarations: [TuiAutofilledDirective, TuiAutofilledStyleComponent],
  exports: [TuiAutofilledDirective]
});
TuiAutofilledModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutofilledModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiAutofilledDirective, TuiAutofilledStyleComponent],
      exports: [TuiAutofilledDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-checked.js
var TuiCheckedDirective = class {
  constructor() {
    this.indeterminate = false;
    this.checked = false;
    this.tuiCheckedChange = new EventEmitter();
  }
  get isChecked() {
    return this.checked;
  }
  get isIndeterminate() {
    return this.indeterminate;
  }
  set tuiChecked(checked) {
    this.checked = checked || false;
    this.indeterminate = checked === null;
  }
  onChange({
    checked
  }) {
    this.checked = checked;
    this.indeterminate = false;
    this.tuiCheckedChange.emit(checked);
  }
};
TuiCheckedDirective.ɵfac = function TuiCheckedDirective_Factory(t) {
  return new (t || TuiCheckedDirective)();
};
TuiCheckedDirective.ɵdir = ɵɵdefineDirective({
  type: TuiCheckedDirective,
  selectors: [["input", "tuiChecked", ""], ["input", "tuiCheckedChange", ""]],
  hostVars: 2,
  hostBindings: function TuiCheckedDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function TuiCheckedDirective_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("checked", ctx.isChecked)("indeterminate", ctx.isIndeterminate);
    }
  },
  inputs: {
    tuiChecked: "tuiChecked"
  },
  outputs: {
    tuiCheckedChange: "tuiCheckedChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckedDirective, [{
    type: Directive,
    args: [{
      selector: "input[tuiChecked], input[tuiCheckedChange]"
    }]
  }], null, {
    isChecked: [{
      type: HostBinding,
      args: ["checked"]
    }],
    isIndeterminate: [{
      type: HostBinding,
      args: ["indeterminate"]
    }],
    tuiChecked: [{
      type: Input
    }],
    tuiCheckedChange: [{
      type: Output
    }],
    onChange: [{
      type: HostListener,
      args: ["change", ["$event.target"]]
    }]
  });
})();
var TuiCheckedModule = class {
};
TuiCheckedModule.ɵfac = function TuiCheckedModule_Factory(t) {
  return new (t || TuiCheckedModule)();
};
TuiCheckedModule.ɵmod = ɵɵdefineNgModule({
  type: TuiCheckedModule,
  declarations: [TuiCheckedDirective],
  exports: [TuiCheckedDirective]
});
TuiCheckedModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckedModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiCheckedDirective],
      exports: [TuiCheckedDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-click-outside.js
var TuiClickOutsideDirective = class {
  constructor(zone, doc, el) {
    this.zone = zone;
    this.doc = doc;
    this.el = el;
    this.tuiClickOutside = fromEvent(this.doc, "mouseup").pipe(map(tuiGetActualTarget), filter((target) => this.isOutside(target)), tuiZoneOptimized(this.zone));
  }
  isOutside(target) {
    return target === this.el.nativeElement || !tuiContainsOrAfter(this.el.nativeElement, target);
  }
};
TuiClickOutsideDirective.ɵfac = function TuiClickOutsideDirective_Factory(t) {
  return new (t || TuiClickOutsideDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef));
};
TuiClickOutsideDirective.ɵdir = ɵɵdefineDirective({
  type: TuiClickOutsideDirective,
  selectors: [["", "tuiClickOutside", ""]],
  outputs: {
    tuiClickOutside: "tuiClickOutside"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiClickOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiClickOutside]"
    }]
  }], function() {
    return [{
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    tuiClickOutside: [{
      type: Output
    }]
  });
})();
var TuiClickOutsideModule = class {
};
TuiClickOutsideModule.ɵfac = function TuiClickOutsideModule_Factory(t) {
  return new (t || TuiClickOutsideModule)();
};
TuiClickOutsideModule.ɵmod = ɵɵdefineNgModule({
  type: TuiClickOutsideModule,
  declarations: [TuiClickOutsideDirective],
  exports: [TuiClickOutsideDirective]
});
TuiClickOutsideModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiClickOutsideModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiClickOutsideDirective],
      exports: [TuiClickOutsideDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-control.js
var TuiControlDirective = class {
  constructor(ngControl) {
    this.ngControl = ngControl;
  }
  get control() {
    return this.ngControl.control;
  }
};
TuiControlDirective.ɵfac = function TuiControlDirective_Factory(t) {
  return new (t || TuiControlDirective)(ɵɵdirectiveInject(NgControl));
};
TuiControlDirective.ɵdir = ɵɵdefineDirective({
  type: TuiControlDirective,
  selectors: [["", "tuiControl", ""]],
  exportAs: ["ngControl"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControlDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiControl]",
      exportAs: "ngControl"
    }]
  }], function() {
    return [{
      type: NgControl,
      decorators: [{
        type: Inject,
        args: [NgControl]
      }]
    }];
  }, null);
})();
var TuiControlModule = class {
};
TuiControlModule.ɵfac = function TuiControlModule_Factory(t) {
  return new (t || TuiControlModule)();
};
TuiControlModule.ɵmod = ɵɵdefineNgModule({
  type: TuiControlModule,
  declarations: [TuiControlDirective],
  exports: [TuiControlDirective]
});
TuiControlModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControlModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiControlDirective],
      exports: [TuiControlDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-copy-processor.js
var TuiCopyProcessorDirective = class {
  constructor(win) {
    this.win = win;
    this.tuiCopyProcessor = identity;
  }
  onCopy(event) {
    var _a;
    const text = tuiGetSelectedText(this.win);
    if (text) {
      (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.setData("text/plain", this.tuiCopyProcessor(text));
    }
  }
};
TuiCopyProcessorDirective.ɵfac = function TuiCopyProcessorDirective_Factory(t) {
  return new (t || TuiCopyProcessorDirective)(ɵɵdirectiveInject(WINDOW));
};
TuiCopyProcessorDirective.ɵdir = ɵɵdefineDirective({
  type: TuiCopyProcessorDirective,
  selectors: [["", "tuiCopyProcessor", ""]],
  hostBindings: function TuiCopyProcessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("copy.prevent", function TuiCopyProcessorDirective_copy_prevent_HostBindingHandler($event) {
        return ctx.onCopy($event);
      });
    }
  },
  inputs: {
    tuiCopyProcessor: "tuiCopyProcessor"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCopyProcessorDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiCopyProcessor]"
    }]
  }], function() {
    return [{
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }];
  }, {
    tuiCopyProcessor: [{
      type: Input
    }],
    onCopy: [{
      type: HostListener,
      args: ["copy.prevent", ["$event"]]
    }]
  });
})();
var TuiCopyProcessorModule = class {
};
TuiCopyProcessorModule.ɵfac = function TuiCopyProcessorModule_Factory(t) {
  return new (t || TuiCopyProcessorModule)();
};
TuiCopyProcessorModule.ɵmod = ɵɵdefineNgModule({
  type: TuiCopyProcessorModule,
  declarations: [TuiCopyProcessorDirective],
  exports: [TuiCopyProcessorDirective]
});
TuiCopyProcessorModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCopyProcessorModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiCopyProcessorDirective],
      exports: [TuiCopyProcessorDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-drag.js
var TuiDragDirective = class {
  constructor(el) {
    this.el = el;
    this.dragAndDropFrom$ = tuiDragAndDropFrom(this.el.nativeElement);
    this.start = this.dragAndDropFrom$.pipe(filter(({
      stage
    }) => stage === TuiDragStage.Start), map(({
      event
    }) => event));
    this.continues = this.dragAndDropFrom$.pipe(filter(({
      stage
    }) => stage === TuiDragStage.Continues), map(({
      event
    }) => event));
    this.end = this.dragAndDropFrom$.pipe(filter(({
      stage
    }) => stage === TuiDragStage.End), map(({
      event
    }) => event));
  }
};
TuiDragDirective.ɵfac = function TuiDragDirective_Factory(t) {
  return new (t || TuiDragDirective)(ɵɵdirectiveInject(ElementRef));
};
TuiDragDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDragDirective,
  selectors: [["", "tuiDragStart", ""], ["", "tuiDragContinues", ""], ["", "tuiDragEnd", ""]],
  outputs: {
    start: "tuiDragStart",
    continues: "tuiDragContinues",
    end: "tuiDragEnd"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDragDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDragStart], [tuiDragContinues], [tuiDragEnd]"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    start: [{
      type: Output,
      args: ["tuiDragStart"]
    }],
    continues: [{
      type: Output,
      args: ["tuiDragContinues"]
    }],
    end: [{
      type: Output,
      args: ["tuiDragEnd"]
    }]
  });
})();
var TuiDragModule = class {
};
TuiDragModule.ɵfac = function TuiDragModule_Factory(t) {
  return new (t || TuiDragModule)();
};
TuiDragModule.ɵmod = ɵɵdefineNgModule({
  type: TuiDragModule,
  declarations: [TuiDragDirective],
  exports: [TuiDragDirective]
});
TuiDragModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDragModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiDragDirective],
      exports: [TuiDragDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-droppable.js
var TuiDroppableDirective = class {
  constructor({
    nativeElement
  }, destroy$) {
    this.tuiDroppableDropped = tuiTypedFromEvent(nativeElement, "drop").pipe(tuiPreventDefault(), map((event) => event.dataTransfer), filter(tuiIsPresent));
    this.tuiDroppableDragOverChange = tuiTypedFromEvent(nativeElement, "dragenter").pipe(switchMap(({
      target,
      dataTransfer
    }) => merge(tuiTypedFromEvent(nativeElement, "dragleave").pipe(filter((event) => event.target === target)), tuiTypedFromEvent(nativeElement, "drop")).pipe(map(() => null), startWith(dataTransfer))), distinctUntilChanged((a, b) => !!a && !!b || !a && !b));
    tuiTypedFromEvent(nativeElement, "dragover").pipe(tuiPreventDefault(), takeUntil(destroy$)).subscribe();
  }
};
TuiDroppableDirective.ɵfac = function TuiDroppableDirective_Factory(t) {
  return new (t || TuiDroppableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TuiDestroyService, 2));
};
TuiDroppableDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDroppableDirective,
  selectors: [["", "tuiDroppableDropped", ""], ["", "tuiDroppableDragOverChange", ""]],
  outputs: {
    tuiDroppableDropped: "tuiDroppableDropped",
    tuiDroppableDragOverChange: "tuiDroppableDragOverChange"
  },
  features: [ɵɵProvidersFeature([TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDroppableDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDroppableDropped], [tuiDroppableDragOverChange]",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }];
  }, {
    tuiDroppableDropped: [{
      type: Output
    }],
    tuiDroppableDragOverChange: [{
      type: Output
    }]
  });
})();
var TuiDroppableModule = class {
};
TuiDroppableModule.ɵfac = function TuiDroppableModule_Factory(t) {
  return new (t || TuiDroppableModule)();
};
TuiDroppableModule.ɵmod = ɵɵdefineNgModule({
  type: TuiDroppableModule,
  declarations: [TuiDroppableDirective],
  exports: [TuiDroppableDirective]
});
TuiDroppableModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDroppableModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiDroppableDirective],
      exports: [TuiDroppableDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-element.js
var TuiElementDirective = class {
  constructor({
    nativeElement
  }) {
    return new ElementRef(nativeElement);
  }
};
TuiElementDirective.ɵfac = function TuiElementDirective_Factory(t) {
  return new (t || TuiElementDirective)(ɵɵdirectiveInject(ElementRef));
};
TuiElementDirective.ɵdir = ɵɵdefineDirective({
  type: TuiElementDirective,
  selectors: [["", "tuiElement", ""]],
  exportAs: ["elementRef"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElementDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiElement]",
      exportAs: "elementRef"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, null);
})();
var TuiElementModule = class {
};
TuiElementModule.ɵfac = function TuiElementModule_Factory(t) {
  return new (t || TuiElementModule)();
};
TuiElementModule.ɵmod = ɵɵdefineNgModule({
  type: TuiElementModule,
  declarations: [TuiElementDirective],
  exports: [TuiElementDirective]
});
TuiElementModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElementModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiElementDirective],
      exports: [TuiElementDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-focus-trap.js
var TuiFocusTrapDirective = class {
  constructor(doc, el, renderer) {
    this.doc = doc;
    this.el = el;
    this.renderer = renderer;
    this.activeElement = tuiGetNativeFocused(this.doc);
    void Promise.resolve().then(() => this.el.nativeElement.focus());
  }
  onBlur() {
    this.renderer.removeAttribute(this.el.nativeElement, "tabIndex");
  }
  onFocusIn(node) {
    const {
      nativeElement
    } = this.el;
    if (tuiContainsOrAfter(nativeElement, node)) {
      return;
    }
    const focusable = tuiGetClosestFocusable({
      initial: nativeElement,
      root: nativeElement
    });
    if (focusable) {
      focusable.focus();
    }
  }
  ngOnDestroy() {
    tuiBlurNativeFocused(this.doc);
    Promise.resolve().then(() => {
      if (tuiIsHTMLElement(this.activeElement)) {
        this.activeElement.focus();
      }
    });
  }
};
TuiFocusTrapDirective.ɵfac = function TuiFocusTrapDirective_Factory(t) {
  return new (t || TuiFocusTrapDirective)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
TuiFocusTrapDirective.ɵdir = ɵɵdefineDirective({
  type: TuiFocusTrapDirective,
  selectors: [["", "tuiFocusTrap", ""]],
  hostAttrs: ["tabIndex", "0"],
  hostBindings: function TuiFocusTrapDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("blur", function TuiFocusTrapDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("focusin.silent", function TuiFocusTrapDirective_focusin_silent_HostBindingHandler($event) {
        return ctx.onFocusIn($event.target);
      }, false, ɵɵresolveWindow);
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrapDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiFocusTrap]",
      host: {
        tabIndex: "0"
      }
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Renderer2,
      decorators: [{
        type: Inject,
        args: [Renderer2]
      }]
    }];
  }, {
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onFocusIn: [{
      type: HostListener,
      args: ["window:focusin.silent", ["$event.target"]]
    }]
  });
})();
var TuiFocusTrapModule = class {
};
TuiFocusTrapModule.ɵfac = function TuiFocusTrapModule_Factory(t) {
  return new (t || TuiFocusTrapModule)();
};
TuiFocusTrapModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFocusTrapModule,
  declarations: [TuiFocusTrapDirective],
  exports: [TuiFocusTrapDirective]
});
TuiFocusTrapModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrapModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFocusTrapDirective],
      exports: [TuiFocusTrapDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-focus-visible.js
var TuiFocusVisibleDirective = class {
  constructor(tuiFocusVisibleChange) {
    this.tuiFocusVisibleChange = tuiFocusVisibleChange;
  }
};
TuiFocusVisibleDirective.ɵfac = function TuiFocusVisibleDirective_Factory(t) {
  return new (t || TuiFocusVisibleDirective)(ɵɵdirectiveInject(TuiFocusVisibleService));
};
TuiFocusVisibleDirective.ɵdir = ɵɵdefineDirective({
  type: TuiFocusVisibleDirective,
  selectors: [["", "tuiFocusVisibleChange", ""]],
  outputs: {
    tuiFocusVisibleChange: "tuiFocusVisibleChange"
  },
  features: [ɵɵProvidersFeature([TuiDestroyService, TuiFocusVisibleService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusVisibleDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiFocusVisibleChange]",
      outputs: ["tuiFocusVisibleChange"],
      providers: [TuiDestroyService, TuiFocusVisibleService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiFocusVisibleService]
      }]
    }];
  }, null);
})();
var TuiFocusVisibleModule = class {
};
TuiFocusVisibleModule.ɵfac = function TuiFocusVisibleModule_Factory(t) {
  return new (t || TuiFocusVisibleModule)();
};
TuiFocusVisibleModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFocusVisibleModule,
  declarations: [TuiFocusVisibleDirective],
  exports: [TuiFocusVisibleDirective]
});
TuiFocusVisibleModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusVisibleModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFocusVisibleDirective],
      exports: [TuiFocusVisibleDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-focusable.js
var TuiFocusableDirective = class {
  constructor() {
    this.focusable = true;
  }
  get tabIndex() {
    return this.focusable ? 0 : -1;
  }
};
TuiFocusableDirective.ɵfac = function TuiFocusableDirective_Factory(t) {
  return new (t || TuiFocusableDirective)();
};
TuiFocusableDirective.ɵdir = ɵɵdefineDirective({
  type: TuiFocusableDirective,
  selectors: [["", "tuiFocusable", ""]],
  hostVars: 1,
  hostBindings: function TuiFocusableDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("tabIndex", ctx.tabIndex);
    }
  },
  inputs: {
    focusable: [InputFlags.None, "tuiFocusable", "focusable"]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusableDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiFocusable]"
    }]
  }], null, {
    focusable: [{
      type: Input,
      args: ["tuiFocusable"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["tabIndex"]
    }]
  });
})();
var TuiFocusableModule = class {
};
TuiFocusableModule.ɵfac = function TuiFocusableModule_Factory(t) {
  return new (t || TuiFocusableModule)();
};
TuiFocusableModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFocusableModule,
  declarations: [TuiFocusableDirective],
  exports: [TuiFocusableDirective]
});
TuiFocusableModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusableModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFocusableDirective],
      exports: [TuiFocusableDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-focused.js
var TuiFocusedDirective = class {
  constructor({
    nativeElement
  }, zone) {
    this.tuiFocusedChange = merge(tuiTypedFromEvent(nativeElement, "focusin"), tuiTypedFromEvent(nativeElement, "focusout")).pipe(map(() => tuiIsNativeFocused(nativeElement)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized(zone));
  }
};
TuiFocusedDirective.ɵfac = function TuiFocusedDirective_Factory(t) {
  return new (t || TuiFocusedDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
TuiFocusedDirective.ɵdir = ɵɵdefineDirective({
  type: TuiFocusedDirective,
  selectors: [["", "tuiFocusedChange", ""]],
  outputs: {
    tuiFocusedChange: "tuiFocusedChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusedDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiFocusedChange]"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }];
  }, {
    tuiFocusedChange: [{
      type: Output
    }]
  });
})();
var TuiFocusedModule = class {
};
TuiFocusedModule.ɵfac = function TuiFocusedModule_Factory(t) {
  return new (t || TuiFocusedModule)();
};
TuiFocusedModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFocusedModule,
  declarations: [TuiFocusedDirective],
  exports: [TuiFocusedDirective]
});
TuiFocusedModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusedModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFocusedDirective],
      exports: [TuiFocusedDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-for.js
var TuiForDirective = class {
  constructor(vcr) {
    this.vcr = vcr;
    this.ngForOf = [];
  }
  ngOnChanges() {
    var _a, _b;
    (_a = this.ref) === null || _a === void 0 ? void 0 : _a.destroy();
    if (((_b = this.ngForOf) === null || _b === void 0 ? void 0 : _b.length) === 0 && this.ngForEmpty) {
      this.ref = this.vcr.createEmbeddedView(this.ngForEmpty);
    } else if (!this.ngForOf && this.ngForElse) {
      this.ref = this.vcr.createEmbeddedView(this.ngForElse);
    }
  }
};
TuiForDirective.ɵfac = function TuiForDirective_Factory(t) {
  return new (t || TuiForDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
TuiForDirective.ɵdir = ɵɵdefineDirective({
  type: TuiForDirective,
  selectors: [["", "ngFor", "", "ngForOf", "", "ngForElse", ""], ["", "ngFor", "", "ngForOf", "", "ngForEmpty", ""]],
  inputs: {
    ngForOf: "ngForOf",
    ngForElse: "ngForElse",
    ngForEmpty: "ngForEmpty"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiForDirective, [{
    type: Directive,
    args: [{
      selector: "[ngFor][ngForOf][ngForElse],[ngFor][ngForOf][ngForEmpty]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef,
      decorators: [{
        type: Inject,
        args: [ViewContainerRef]
      }]
    }];
  }, {
    ngForOf: [{
      type: Input
    }],
    ngForElse: [{
      type: Input
    }],
    ngForEmpty: [{
      type: Input
    }]
  });
})();
var TuiForModule = class {
};
TuiForModule.ɵfac = function TuiForModule_Factory(t) {
  return new (t || TuiForModule)();
};
TuiForModule.ɵmod = ɵɵdefineNgModule({
  type: TuiForModule,
  declarations: [TuiForDirective],
  exports: [TuiForDirective]
});
TuiForModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiForModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiForDirective],
      exports: [TuiForDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-for-async.js
var TuiForAsyncDirective = class {
  constructor(view, template) {
    this.view = view;
    this.template = template;
    this.destroy$ = new Subject();
    this.tuiForAsyncTimeout = 10;
  }
  ngOnChanges() {
    this.clearViewForOldNodes();
    this.createAsyncViewForNewNodes();
  }
  ngOnDestroy() {
    this.clearViewForOldNodes();
    this.destroy$.complete();
  }
  createAsyncViewForNewNodes() {
    from(this.iterableValues).pipe(concatMap((entry) => this.tuiForAsyncTimeout > 0 ? of(entry).pipe(delay(this.tuiForAsyncTimeout)) : of(entry)), takeUntil(this.destroy$)).subscribe(([index, item]) => this.createEmbeddedView(item, index));
  }
  get iterableValues() {
    var _a;
    return ((_a = this.tuiForAsyncOf) !== null && _a !== void 0 ? _a : []).entries();
  }
  createEmbeddedView(item, index) {
    this.view.createEmbeddedView(this.template, {
      $implicit: item,
      index
    }, index).detectChanges();
  }
  clearViewForOldNodes() {
    this.destroy$.next();
    this.view.clear();
  }
};
TuiForAsyncDirective.ɵfac = function TuiForAsyncDirective_Factory(t) {
  return new (t || TuiForAsyncDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
TuiForAsyncDirective.ɵdir = ɵɵdefineDirective({
  type: TuiForAsyncDirective,
  selectors: [["", "tuiForAsync", "", "tuiForAsyncOf", ""]],
  inputs: {
    tuiForAsyncOf: "tuiForAsyncOf",
    tuiForAsyncTimeout: "tuiForAsyncTimeout"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiForAsyncDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiForAsync][tuiForAsyncOf]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef,
      decorators: [{
        type: Inject,
        args: [ViewContainerRef]
      }]
    }, {
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }];
  }, {
    tuiForAsyncOf: [{
      type: Input
    }],
    tuiForAsyncTimeout: [{
      type: Input
    }]
  });
})();
var TuiForAsyncModule = class {
};
TuiForAsyncModule.ɵfac = function TuiForAsyncModule_Factory(t) {
  return new (t || TuiForAsyncModule)();
};
TuiForAsyncModule.ɵmod = ɵɵdefineNgModule({
  type: TuiForAsyncModule,
  declarations: [TuiForAsyncDirective],
  exports: [TuiForAsyncDirective]
});
TuiForAsyncModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiForAsyncModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiForAsyncDirective],
      exports: [TuiForAsyncDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-high-dpi.js
var TuiHighDpiDirective = class {
  constructor({
    devicePixelRatio
  }, viewContainer, templateRef) {
    if (devicePixelRatio > 1) {
      viewContainer.createEmbeddedView(templateRef);
    }
  }
};
TuiHighDpiDirective.ɵfac = function TuiHighDpiDirective_Factory(t) {
  return new (t || TuiHighDpiDirective)(ɵɵdirectiveInject(WINDOW), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
TuiHighDpiDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHighDpiDirective,
  selectors: [["", "tuiHighDpi", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHighDpiDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHighDpi]"
    }]
  }], function() {
    return [{
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }, {
      type: ViewContainerRef,
      decorators: [{
        type: Inject,
        args: [ViewContainerRef]
      }]
    }, {
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }];
  }, null);
})();
var TuiHighDpiModule = class {
};
TuiHighDpiModule.ɵfac = function TuiHighDpiModule_Factory(t) {
  return new (t || TuiHighDpiModule)();
};
TuiHighDpiModule.ɵmod = ɵɵdefineNgModule({
  type: TuiHighDpiModule,
  declarations: [TuiHighDpiDirective],
  exports: [TuiHighDpiDirective]
});
TuiHighDpiModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHighDpiModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiHighDpiDirective],
      exports: [TuiHighDpiDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-hovered.js
function movedOut({
  currentTarget,
  relatedTarget
}) {
  return !tuiIsElement(relatedTarget) || !tuiIsElement(currentTarget) || !currentTarget.contains(relatedTarget);
}
var TuiHoveredService = class extends Observable {
  constructor(el, zone) {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = el;
    this.zone = zone;
    this.stream$ = merge(
      tuiTypedFromEvent(this.el.nativeElement, "mouseenter").pipe(map(ALWAYS_TRUE_HANDLER)),
      tuiTypedFromEvent(this.el.nativeElement, "mouseleave").pipe(map(ALWAYS_FALSE_HANDLER)),
      // Hello, Safari
      tuiTypedFromEvent(this.el.nativeElement, "mouseout").pipe(filter(movedOut), map(ALWAYS_FALSE_HANDLER))
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
  }
};
TuiHoveredService.ɵfac = function TuiHoveredService_Factory(t) {
  return new (t || TuiHoveredService)(ɵɵinject(ElementRef), ɵɵinject(NgZone));
};
TuiHoveredService.ɵprov = ɵɵdefineInjectable({
  token: TuiHoveredService,
  factory: TuiHoveredService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }];
  }, null);
})();
var TuiHoveredDirective = class {
  constructor(tuiHoveredChange) {
    this.tuiHoveredChange = tuiHoveredChange;
  }
};
TuiHoveredDirective.ɵfac = function TuiHoveredDirective_Factory(t) {
  return new (t || TuiHoveredDirective)(ɵɵdirectiveInject(TuiHoveredService));
};
TuiHoveredDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHoveredDirective,
  selectors: [["", "tuiHoveredChange", ""]],
  outputs: {
    tuiHoveredChange: "tuiHoveredChange"
  },
  features: [ɵɵProvidersFeature([TuiHoveredService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHoveredChange]",
      outputs: ["tuiHoveredChange"],
      providers: [TuiHoveredService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiHoveredService]
      }]
    }];
  }, null);
})();
var TuiHoveredModule = class {
};
TuiHoveredModule.ɵfac = function TuiHoveredModule_Factory(t) {
  return new (t || TuiHoveredModule)();
};
TuiHoveredModule.ɵmod = ɵɵdefineNgModule({
  type: TuiHoveredModule,
  declarations: [TuiHoveredDirective],
  exports: [TuiHoveredDirective]
});
TuiHoveredModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiHoveredDirective],
      exports: [TuiHoveredDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-item.js
var TuiItemDirective = class {
};
TuiItemDirective.ɵfac = function TuiItemDirective_Factory(t) {
  return new (t || TuiItemDirective)();
};
TuiItemDirective.ɵdir = ɵɵdefineDirective({
  type: TuiItemDirective,
  selectors: [["", "tuiItem", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiItem]"
    }]
  }], null, null);
})();
var TuiItemModule = class {
};
TuiItemModule.ɵfac = function TuiItemModule_Factory(t) {
  return new (t || TuiItemModule)();
};
TuiItemModule.ɵmod = ɵɵdefineNgModule({
  type: TuiItemModule,
  declarations: [TuiItemDirective],
  exports: [TuiItemDirective]
});
TuiItemModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiItemDirective],
      exports: [TuiItemDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-let.js
var TuiLetContext = class {
  constructor(internalDirectiveInstance) {
    this.internalDirectiveInstance = internalDirectiveInstance;
  }
  get $implicit() {
    return this.internalDirectiveInstance.tuiLet;
  }
  get tuiLet() {
    return this.internalDirectiveInstance.tuiLet;
  }
};
var TuiLetDirective = class {
  constructor(viewContainer, templateRef) {
    viewContainer.createEmbeddedView(templateRef, new TuiLetContext(this));
  }
  /**
   * Asserts the correct type of the context for the template that `TuiLet` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `TuiLet` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
};
TuiLetDirective.ɵfac = function TuiLetDirective_Factory(t) {
  return new (t || TuiLetDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
TuiLetDirective.ɵdir = ɵɵdefineDirective({
  type: TuiLetDirective,
  selectors: [["", "tuiLet", ""]],
  inputs: {
    tuiLet: "tuiLet"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLetDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiLet]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef,
      decorators: [{
        type: Inject,
        args: [ViewContainerRef]
      }]
    }, {
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }];
  }, {
    tuiLet: [{
      type: Input
    }]
  });
})();
var TuiLetModule = class {
};
TuiLetModule.ɵfac = function TuiLetModule_Factory(t) {
  return new (t || TuiLetModule)();
};
TuiLetModule.ɵmod = ɵɵdefineNgModule({
  type: TuiLetModule,
  declarations: [TuiLetDirective],
  exports: [TuiLetDirective]
});
TuiLetModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLetModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiLetDirective],
      exports: [TuiLetDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-media.js
var TuiMediaDirective = class {
  constructor(el) {
    this.el = el;
    this.playbackRate = 1;
    this.volume = 1;
    this.currentTimeChange = new EventEmitter();
    this.pausedChange = new EventEmitter();
    this.volumeChange = new EventEmitter();
  }
  set playbackRateSetter(playbackRate) {
    this.updatePlaybackRate(playbackRate);
  }
  set currentTime(currentTime) {
    if (Math.abs(currentTime - this.currentTime) > 0.05) {
      this.el.nativeElement.currentTime = currentTime;
    }
  }
  get currentTime() {
    return this.el.nativeElement.currentTime;
  }
  set paused(paused) {
    if (paused) {
      this.el.nativeElement.pause();
    } else {
      void this.el.nativeElement.play();
      this.updatePlaybackRate(this.playbackRate);
    }
  }
  get paused() {
    return this.el.nativeElement.paused;
  }
  // @bad TODO: Make sure no other events can affect this like network issues etc.
  onPausedChange(paused) {
    this.pausedChange.emit(paused);
    this.updatePlaybackRate(this.playbackRate);
  }
  onVolumeChange() {
    this.volume = this.el.nativeElement.volume;
    this.volumeChange.emit(this.volume);
  }
  onCurrentTimeChange() {
    this.currentTimeChange.emit(this.currentTime);
  }
  changeDetectionTrigger() {
  }
  updatePlaybackRate(playbackRate) {
    this.playbackRate = playbackRate;
    this.el.nativeElement.playbackRate = this.playbackRate;
  }
};
TuiMediaDirective.ɵfac = function TuiMediaDirective_Factory(t) {
  return new (t || TuiMediaDirective)(ɵɵdirectiveInject(ElementRef));
};
TuiMediaDirective.ɵdir = ɵɵdefineDirective({
  type: TuiMediaDirective,
  selectors: [["video", "tuiMedia", ""], ["audio", "tuiMedia", ""]],
  hostVars: 1,
  hostBindings: function TuiMediaDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("ended", function TuiMediaDirective_ended_HostBindingHandler() {
        return ctx.onPausedChange(true);
      })("pause", function TuiMediaDirective_pause_HostBindingHandler() {
        return ctx.onPausedChange(true);
      })("play", function TuiMediaDirective_play_HostBindingHandler() {
        return ctx.onPausedChange(false);
      })("volumechange", function TuiMediaDirective_volumechange_HostBindingHandler() {
        return ctx.onVolumeChange();
      })("timeupdate", function TuiMediaDirective_timeupdate_HostBindingHandler() {
        return ctx.onCurrentTimeChange();
      })("seeking", function TuiMediaDirective_seeking_HostBindingHandler() {
        return ctx.onCurrentTimeChange();
      })("seeked", function TuiMediaDirective_seeked_HostBindingHandler() {
        return ctx.onCurrentTimeChange();
      })("durationchange", function TuiMediaDirective_durationchange_HostBindingHandler() {
        return ctx.changeDetectionTrigger();
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("volume", ctx.volume);
    }
  },
  inputs: {
    volume: "volume",
    playbackRateSetter: [InputFlags.None, "playbackRate", "playbackRateSetter"],
    currentTime: "currentTime",
    paused: "paused"
  },
  outputs: {
    currentTimeChange: "currentTimeChange",
    pausedChange: "pausedChange",
    volumeChange: "volumeChange"
  },
  exportAs: ["tuiMedia"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMediaDirective, [{
    type: Directive,
    args: [{
      selector: "video[tuiMedia], audio[tuiMedia]",
      exportAs: "tuiMedia"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    volume: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["volume"]
    }],
    playbackRateSetter: [{
      type: Input,
      args: ["playbackRate"]
    }],
    currentTimeChange: [{
      type: Output
    }],
    pausedChange: [{
      type: Output
    }],
    volumeChange: [{
      type: Output
    }],
    currentTime: [{
      type: Input
    }],
    paused: [{
      type: Input
    }],
    onPausedChange: [{
      type: HostListener,
      args: ["ended", ["true"]]
    }, {
      type: HostListener,
      args: ["pause", ["true"]]
    }, {
      type: HostListener,
      args: ["play", ["false"]]
    }],
    onVolumeChange: [{
      type: HostListener,
      args: ["volumechange"]
    }],
    onCurrentTimeChange: [{
      type: HostListener,
      args: ["timeupdate"]
    }, {
      type: HostListener,
      args: ["seeking"]
    }, {
      type: HostListener,
      args: ["seeked"]
    }],
    changeDetectionTrigger: [{
      type: HostListener,
      args: ["durationchange"]
    }]
  });
})();
var TuiMediaModule = class {
};
TuiMediaModule.ɵfac = function TuiMediaModule_Factory(t) {
  return new (t || TuiMediaModule)();
};
TuiMediaModule.ɵmod = ɵɵdefineNgModule({
  type: TuiMediaModule,
  declarations: [TuiMediaDirective],
  exports: [TuiMediaDirective]
});
TuiMediaModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMediaModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiMediaDirective],
      exports: [TuiMediaDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-obscured.js
var TuiObscuredDirective = class {
  constructor(activeZone, obscured$) {
    this.enabled$ = new Subject();
    const mapped$ = obscured$.pipe(map((obscuredBy) => !!obscuredBy && (!activeZone || !obscuredBy.length || obscuredBy.every((element) => !activeZone.contains(element)))));
    this.tuiObscured = this.enabled$.pipe(tuiIfMap(() => mapped$));
  }
  set tuiObscuredEnabled(enabled) {
    this.enabled$.next(enabled);
  }
};
TuiObscuredDirective.ɵfac = function TuiObscuredDirective_Factory(t) {
  return new (t || TuiObscuredDirective)(ɵɵdirectiveInject(TuiActiveZoneDirective, 8), ɵɵdirectiveInject(TuiObscuredService, 2));
};
TuiObscuredDirective.ɵdir = ɵɵdefineDirective({
  type: TuiObscuredDirective,
  selectors: [["", "tuiObscured", ""]],
  inputs: {
    tuiObscuredEnabled: "tuiObscuredEnabled"
  },
  outputs: {
    tuiObscured: "tuiObscured"
  },
  features: [ɵɵProvidersFeature([TuiObscuredService, TuiParentsScrollService, TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiObscured]",
      providers: [TuiObscuredService, TuiParentsScrollService, TuiDestroyService]
    }]
  }], function() {
    return [{
      type: TuiActiveZoneDirective,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TuiActiveZoneDirective]
      }]
    }, {
      type: TuiObscuredService,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiObscuredService]
      }]
    }];
  }, {
    tuiObscuredEnabled: [{
      type: Input
    }],
    tuiObscured: [{
      type: Output
    }]
  });
})();
var TuiObscuredModule = class {
};
TuiObscuredModule.ɵfac = function TuiObscuredModule_Factory(t) {
  return new (t || TuiObscuredModule)();
};
TuiObscuredModule.ɵmod = ɵɵdefineNgModule({
  type: TuiObscuredModule,
  declarations: [TuiObscuredDirective],
  exports: [TuiObscuredDirective]
});
TuiObscuredModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiObscuredDirective],
      exports: [TuiObscuredDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-overscroll.js
var TuiOverscrollDirective = class {
  constructor({
    nativeElement
  }, zone, destroy$) {
    this.mode = "scroll";
    tuiTypedFromEvent(nativeElement, "wheel", {
      passive: false
    }).pipe(filter(() => this.enabled), tuiZonefree(zone), takeUntil(destroy$)).subscribe((event) => {
      this.processEvent(event, !!event.deltaY, event.deltaY ? event.deltaY < 0 : event.deltaX < 0);
    });
    tuiTypedFromEvent(nativeElement, "touchstart", {
      passive: true
    }).pipe(switchMap(({
      touches
    }) => {
      let {
        clientX,
        clientY
      } = touches[0];
      let deltaX = 0;
      let deltaY = 0;
      let vertical;
      return tuiTypedFromEvent(nativeElement, "touchmove", {
        passive: false
      }).pipe(filter(() => this.enabled), tap((event) => {
        const changedTouch = event.changedTouches[0];
        deltaX = clientX - changedTouch.clientX;
        deltaY = clientY - changedTouch.clientY;
        clientX = changedTouch.clientX;
        clientY = changedTouch.clientY;
        if (vertical === void 0) {
          vertical = Math.abs(deltaY) > Math.abs(deltaX);
        }
        this.processEvent(event, vertical, vertical ? deltaY < 0 : deltaX < 0);
      }));
    }), tuiZonefree(zone), takeUntil(destroy$)).subscribe();
  }
  get enabled() {
    return this.mode !== "none";
  }
  get overscrollBehavior() {
    return this.enabled ? "contain" : null;
  }
  processEvent(event, vertical, negative) {
    var _a;
    const {
      target,
      currentTarget,
      cancelable
    } = event;
    if (!cancelable || !tuiIsElement(target) || ((_a = target) === null || _a === void 0 ? void 0 : _a.type) === "range") {
      return;
    }
    if (this.mode === "all" && (vertical && !currentTarget.contains(tuiGetScrollParent(target)) || !vertical && !currentTarget.contains(tuiGetScrollParent(target, false)))) {
      event.preventDefault();
      return;
    }
    if (vertical && (negative && !tuiCanScroll(target, currentTarget, true, false) || !negative && !tuiCanScroll(target, currentTarget, true, true))) {
      event.preventDefault();
      return;
    }
    if (!vertical && (negative && !tuiCanScroll(target, currentTarget, false, false) || !negative && !tuiCanScroll(target, currentTarget, false, true))) {
      event.preventDefault();
    }
  }
};
TuiOverscrollDirective.ɵfac = function TuiOverscrollDirective_Factory(t) {
  return new (t || TuiOverscrollDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(TuiDestroyService, 2));
};
TuiOverscrollDirective.ɵdir = ɵɵdefineDirective({
  type: TuiOverscrollDirective,
  selectors: [["", "tuiOverscroll", ""]],
  hostVars: 2,
  hostBindings: function TuiOverscrollDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("overscroll-behavior", ctx.overscrollBehavior);
    }
  },
  inputs: {
    mode: [InputFlags.None, "tuiOverscroll", "mode"]
  },
  features: [ɵɵProvidersFeature([TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOverscrollDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiOverscroll]",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }];
  }, {
    mode: [{
      type: Input,
      args: ["tuiOverscroll"]
    }],
    overscrollBehavior: [{
      type: HostBinding,
      args: ["style.overscrollBehavior"]
    }]
  });
})();
var TuiOverscrollModule = class {
};
TuiOverscrollModule.ɵfac = function TuiOverscrollModule_Factory(t) {
  return new (t || TuiOverscrollModule)();
};
TuiOverscrollModule.ɵmod = ɵɵdefineNgModule({
  type: TuiOverscrollModule,
  declarations: [TuiOverscrollDirective],
  exports: [TuiOverscrollDirective]
});
TuiOverscrollModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOverscrollModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiOverscrollDirective],
      exports: [TuiOverscrollDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-pan.js
var TuiPanDirective = class {
  constructor(tuiPan) {
    this.tuiPan = tuiPan;
  }
};
TuiPanDirective.ɵfac = function TuiPanDirective_Factory(t) {
  return new (t || TuiPanDirective)(ɵɵdirectiveInject(TuiPanService));
};
TuiPanDirective.ɵdir = ɵɵdefineDirective({
  type: TuiPanDirective,
  selectors: [["", "tuiPan", ""]],
  outputs: {
    tuiPan: "tuiPan"
  },
  features: [ɵɵProvidersFeature([TuiPanService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPanDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiPan]",
      outputs: ["tuiPan"],
      providers: [TuiPanService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiPanService]
      }]
    }];
  }, null);
})();
var TuiPanModule = class {
};
TuiPanModule.ɵfac = function TuiPanModule_Factory(t) {
  return new (t || TuiPanModule)();
};
TuiPanModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPanModule,
  declarations: [TuiPanDirective],
  exports: [TuiPanDirective]
});
TuiPanModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPanModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiPanDirective],
      exports: [TuiPanDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-platform.js
var TuiPlatformDirective = class {
  constructor() {
    this.tuiPlatform = "";
  }
};
TuiPlatformDirective.ɵfac = function TuiPlatformDirective_Factory(t) {
  return new (t || TuiPlatformDirective)();
};
TuiPlatformDirective.ɵdir = ɵɵdefineDirective({
  type: TuiPlatformDirective,
  selectors: [["", "tuiPlatform", ""]],
  hostVars: 1,
  hostBindings: function TuiPlatformDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-platform", ctx.tuiPlatform);
    }
  },
  inputs: {
    tuiPlatform: "tuiPlatform"
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_PLATFORM,
    deps: [TuiPlatformDirective],
    useFactory: ({
      tuiPlatform
    }) => tuiPlatform || tuiPlatformFactory()
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatformDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiPlatform]",
      providers: [{
        provide: TUI_PLATFORM,
        deps: [TuiPlatformDirective],
        useFactory: ({
          tuiPlatform
        }) => tuiPlatform || tuiPlatformFactory()
      }]
    }]
  }], null, {
    tuiPlatform: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-platform"]
    }]
  });
})();
var TuiPlatformModule = class {
};
TuiPlatformModule.ɵfac = function TuiPlatformModule_Factory(t) {
  return new (t || TuiPlatformModule)();
};
TuiPlatformModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPlatformModule,
  declarations: [TuiPlatformDirective],
  exports: [TuiPlatformDirective]
});
TuiPlatformModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatformModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiPlatformDirective],
      exports: [TuiPlatformDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-components-dropdown-host.js
var _c02 = ["*"];
var TuiDropdownPortalService = class extends AbstractTuiPortalService {
};
TuiDropdownPortalService.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiDropdownPortalService_BaseFactory;
  return function TuiDropdownPortalService_Factory(t) {
    return (ɵTuiDropdownPortalService_BaseFactory || (ɵTuiDropdownPortalService_BaseFactory = ɵɵgetInheritedFactory(TuiDropdownPortalService)))(t || TuiDropdownPortalService);
  };
})();
TuiDropdownPortalService.ɵprov = ɵɵdefineInjectable({
  token: TuiDropdownPortalService,
  factory: TuiDropdownPortalService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPortalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiDropdownHostComponent = class extends AbstractTuiPortalHostComponent {
};
TuiDropdownHostComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiDropdownHostComponent_BaseFactory;
  return function TuiDropdownHostComponent_Factory(t) {
    return (ɵTuiDropdownHostComponent_BaseFactory || (ɵTuiDropdownHostComponent_BaseFactory = ɵɵgetInheritedFactory(TuiDropdownHostComponent)))(t || TuiDropdownHostComponent);
  };
})();
TuiDropdownHostComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiDropdownHostComponent,
  selectors: [["tui-dropdown-host"]],
  features: [ɵɵProvidersFeature([
    {
      provide: AbstractTuiPortalService,
      useExisting: TuiDropdownPortalService
    },
    // TODO: Remove in 4.0
    {
      provide: AbstractTuiPortalHostComponent,
      useExisting: TuiDropdownHostComponent
    }
  ]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c02,
  decls: 3,
  vars: 0,
  consts: [["viewContainer", ""]],
  template: function TuiDropdownHostComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵelementContainer(1, null, 0);
    }
  },
  styles: ['[_nghost-%COMP%]{position:relative;z-index:0;display:block;height:100%}[_nghost-%COMP%]:before{content:"";display:block;overflow:hidden}.t-position-fixed-offset[_ngcontent-%COMP%]{position:fixed;left:0;top:0;pointer-events:none;visibility:hidden;width:100%;height:100%}'],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHostComponent, [{
    type: Component,
    args: [{
      selector: "tui-dropdown-host",
      templateUrl: "./dropdown-host.template.html",
      styleUrls: ["./dropdown-host.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        {
          provide: AbstractTuiPortalService,
          useExisting: TuiDropdownPortalService
        },
        // TODO: Remove in 4.0
        {
          provide: AbstractTuiPortalHostComponent,
          useExisting: TuiDropdownHostComponent
        }
      ]
    }]
  }], null, null);
})();
var TuiDropdownHostModule = class {
};
TuiDropdownHostModule.ɵfac = function TuiDropdownHostModule_Factory(t) {
  return new (t || TuiDropdownHostModule)();
};
TuiDropdownHostModule.ɵmod = ɵɵdefineNgModule({
  type: TuiDropdownHostModule,
  declarations: [TuiDropdownHostComponent],
  exports: [TuiDropdownHostComponent]
});
TuiDropdownHostModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHostModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiDropdownHostComponent],
      exports: [TuiDropdownHostComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-portal.js
var TuiPortalDirective = class {
  constructor(templateRef, portalService) {
    this.templateRef = templateRef;
    this.portalService = portalService;
  }
  set tuiPortal(show) {
    var _a;
    (_a = this.viewRef) === null || _a === void 0 ? void 0 : _a.destroy();
    if (show) {
      this.viewRef = this.portalService.addTemplate(this.templateRef);
    }
  }
  ngOnDestroy() {
    var _a;
    (_a = this.viewRef) === null || _a === void 0 ? void 0 : _a.destroy();
  }
};
TuiPortalDirective.ɵfac = function TuiPortalDirective_Factory(t) {
  return new (t || TuiPortalDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(TuiDropdownPortalService));
};
TuiPortalDirective.ɵdir = ɵɵdefineDirective({
  type: TuiPortalDirective,
  selectors: [["", "tuiPortal", ""]],
  inputs: {
    tuiPortal: "tuiPortal"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiPortal]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }, {
      type: TuiDropdownPortalService,
      decorators: [{
        type: Inject,
        args: [TuiDropdownPortalService]
      }]
    }];
  }, {
    tuiPortal: [{
      type: Input
    }]
  });
})();
var TuiPortalModule = class {
};
TuiPortalModule.ɵfac = function TuiPortalModule_Factory(t) {
  return new (t || TuiPortalModule)();
};
TuiPortalModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPortalModule,
  declarations: [TuiPortalDirective],
  exports: [TuiPortalDirective]
});
TuiPortalModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiPortalDirective],
      exports: [TuiPortalDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-pressed.js
var TuiPressedDirective = class {
  constructor(el, takeOnlyTrustedEvents) {
    this.el = el;
    this.takeOnlyTrustedEvents = takeOnlyTrustedEvents;
    this.tuiPressedChange = tuiPressedObservable(this.el.nativeElement, {
      onlyTrusted: this.takeOnlyTrustedEvents
    });
  }
};
TuiPressedDirective.ɵfac = function TuiPressedDirective_Factory(t) {
  return new (t || TuiPressedDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TUI_TAKE_ONLY_TRUSTED_EVENTS));
};
TuiPressedDirective.ɵdir = ɵɵdefineDirective({
  type: TuiPressedDirective,
  selectors: [["", "tuiPressedChange", ""]],
  outputs: {
    tuiPressedChange: "tuiPressedChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPressedDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiPressedChange]"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_TAKE_ONLY_TRUSTED_EVENTS]
      }]
    }];
  }, {
    tuiPressedChange: [{
      type: Output
    }]
  });
})();
var TuiPressedModule = class {
};
TuiPressedModule.ɵfac = function TuiPressedModule_Factory(t) {
  return new (t || TuiPressedModule)();
};
TuiPressedModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPressedModule,
  declarations: [TuiPressedDirective],
  exports: [TuiPressedDirective]
});
TuiPressedModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPressedModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiPressedDirective],
      exports: [TuiPressedDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-prevent-default.js
var TuiPreventDefaultDirective = class {
  constructor(el, zone, destroy$) {
    this.el = el;
    this.zone = zone;
    this.destroy$ = destroy$;
    this.eventName = "";
  }
  ngOnInit() {
    fromEvent(this.el.nativeElement, this.eventName, {
      passive: false
    }).pipe(tuiZonefree(this.zone), tuiPreventDefault(), takeUntil(this.destroy$)).subscribe();
  }
};
TuiPreventDefaultDirective.ɵfac = function TuiPreventDefaultDirective_Factory(t) {
  return new (t || TuiPreventDefaultDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(TuiDestroyService, 2));
};
TuiPreventDefaultDirective.ɵdir = ɵɵdefineDirective({
  type: TuiPreventDefaultDirective,
  selectors: [["", "tuiPreventDefault", ""]],
  inputs: {
    eventName: [InputFlags.None, "tuiPreventDefault", "eventName"]
  },
  features: [ɵɵProvidersFeature([TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreventDefaultDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiPreventDefault]",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }];
  }, {
    eventName: [{
      type: Input,
      args: ["tuiPreventDefault"]
    }]
  });
})();
var TuiPreventDefaultModule = class {
};
TuiPreventDefaultModule.ɵfac = function TuiPreventDefaultModule_Factory(t) {
  return new (t || TuiPreventDefaultModule)();
};
TuiPreventDefaultModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPreventDefaultModule,
  declarations: [TuiPreventDefaultDirective],
  exports: [TuiPreventDefaultDirective]
});
TuiPreventDefaultModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreventDefaultModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiPreventDefaultDirective],
      exports: [TuiPreventDefaultDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-repeat-times.js
var MAX_VALUE = 65536;
var TuiRepeatTimesContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
};
var TuiRepeatTimesDirective = class {
  constructor(viewContainer, templateRef) {
    this.viewContainer = viewContainer;
    this.templateRef = templateRef;
  }
  set tuiRepeatTimesOf(count) {
    const safeCount = Math.floor(tuiClamp(count, 0, MAX_VALUE));
    const {
      length
    } = this.viewContainer;
    if (count < length) {
      this.removeContainers(length - count);
    } else {
      this.addContainers(safeCount);
    }
  }
  addContainers(count) {
    for (let index = this.viewContainer.length; index < count; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, new TuiRepeatTimesContext(index));
    }
  }
  removeContainers(amount) {
    for (let index = 0; index < amount; index++) {
      this.viewContainer.remove();
    }
  }
};
TuiRepeatTimesDirective.ɵfac = function TuiRepeatTimesDirective_Factory(t) {
  return new (t || TuiRepeatTimesDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
TuiRepeatTimesDirective.ɵdir = ɵɵdefineDirective({
  type: TuiRepeatTimesDirective,
  selectors: [["", "tuiRepeatTimes", "", "tuiRepeatTimesOf", ""]],
  inputs: {
    tuiRepeatTimesOf: "tuiRepeatTimesOf"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRepeatTimesDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiRepeatTimes][tuiRepeatTimesOf]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef,
      decorators: [{
        type: Inject,
        args: [ViewContainerRef]
      }]
    }, {
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }];
  }, {
    tuiRepeatTimesOf: [{
      type: Input
    }]
  });
})();
var TuiRepeatTimesModule = class {
};
TuiRepeatTimesModule.ɵfac = function TuiRepeatTimesModule_Factory(t) {
  return new (t || TuiRepeatTimesModule)();
};
TuiRepeatTimesModule.ɵmod = ɵɵdefineNgModule({
  type: TuiRepeatTimesModule,
  declarations: [TuiRepeatTimesDirective],
  exports: [TuiRepeatTimesDirective]
});
TuiRepeatTimesModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRepeatTimesModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiRepeatTimesDirective],
      exports: [TuiRepeatTimesDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-resize.js
var TuiResizeDirective = class {
  constructor(tuiResize) {
    this.tuiResize = tuiResize;
  }
};
TuiResizeDirective.ɵfac = function TuiResizeDirective_Factory(t) {
  return new (t || TuiResizeDirective)(ɵɵdirectiveInject(TuiResizeService));
};
TuiResizeDirective.ɵdir = ɵɵdefineDirective({
  type: TuiResizeDirective,
  selectors: [["", "tuiResize", ""]],
  outputs: {
    tuiResize: "tuiResize"
  },
  features: [ɵɵProvidersFeature([TuiDestroyService, TuiResizeService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizeDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiResize]",
      outputs: ["tuiResize"],
      providers: [TuiDestroyService, TuiResizeService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiResizeService]
      }]
    }];
  }, null);
})();
var TuiResizeModule = class {
};
TuiResizeModule.ɵfac = function TuiResizeModule_Factory(t) {
  return new (t || TuiResizeModule)();
};
TuiResizeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiResizeModule,
  declarations: [TuiResizeDirective],
  exports: [TuiResizeDirective]
});
TuiResizeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiResizeDirective],
      exports: [TuiResizeDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-resizer.js
var TuiResizeableDirective = class extends TuiElementDirective {
};
TuiResizeableDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiResizeableDirective_BaseFactory;
  return function TuiResizeableDirective_Factory(t) {
    return (ɵTuiResizeableDirective_BaseFactory || (ɵTuiResizeableDirective_BaseFactory = ɵɵgetInheritedFactory(TuiResizeableDirective)))(t || TuiResizeableDirective);
  };
})();
TuiResizeableDirective.ɵdir = ɵɵdefineDirective({
  type: TuiResizeableDirective,
  selectors: [["", "tuiResizeable", ""]],
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizeableDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiResizeable]"
    }]
  }], null, null);
})();
var TuiResizerDirective = class {
  constructor(resizeable) {
    this.resizeable = resizeable;
    this.tuiResizer = [0, 0];
    this.tuiSizeChange = new EventEmitter();
    this.x = NaN;
    this.y = NaN;
    this.width = 0;
    this.height = 0;
  }
  get cursor() {
    if (!this.tuiResizer[0]) {
      return "ns-resize";
    }
    if (!this.tuiResizer[1]) {
      return "ew-resize";
    }
    if (this.tuiResizer[0] * this.tuiResizer[1] > 0) {
      return "nwse-resize";
    }
    return "nesw-resize";
  }
  onTouchStart({
    touches
  }) {
    this.onMouseDown(touches[0].clientX, touches[0].clientY);
  }
  onMouseDown(x, y) {
    this.x = x;
    this.y = y;
    this.width = this.resizeable.nativeElement.clientWidth;
    this.height = this.resizeable.nativeElement.clientHeight;
  }
  onMouseMove({
    x,
    y,
    buttons
  }) {
    if (!buttons) {
      this.onMouseUp();
    } else {
      this.onMove(x, y);
    }
  }
  onTouchMove({
    touches
  }) {
    this.onMove(touches[0].clientX, touches[0].clientY);
  }
  onMouseUp() {
    this.x = NaN;
  }
  onMove(x, y) {
    if (Number.isNaN(this.x)) {
      return;
    }
    const {
      style: style2
    } = this.resizeable.nativeElement;
    const size = [this.width + this.tuiResizer[0] * (x - this.x), this.height + this.tuiResizer[1] * (y - this.y)];
    if (this.tuiResizer[0]) {
      style2.width = tuiPx(size[0]);
    }
    if (this.tuiResizer[1]) {
      style2.height = tuiPx(size[1]);
    }
    this.tuiSizeChange.emit(size);
  }
};
TuiResizerDirective.ɵfac = function TuiResizerDirective_Factory(t) {
  return new (t || TuiResizerDirective)(ɵɵdirectiveInject(TuiResizeableDirective));
};
TuiResizerDirective.ɵdir = ɵɵdefineDirective({
  type: TuiResizerDirective,
  selectors: [["", "tuiResizer", ""]],
  hostVars: 4,
  hostBindings: function TuiResizerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("touchstart.silent.passive", function TuiResizerDirective_touchstart_silent_passive_HostBindingHandler($event) {
        return ctx.onTouchStart($event);
      })("mousedown.silent.prevent", function TuiResizerDirective_mousedown_silent_prevent_HostBindingHandler($event) {
        return ctx.onMouseDown($event.x, $event.y);
      })("mousemove.silent", function TuiResizerDirective_mousemove_silent_HostBindingHandler($event) {
        return ctx.onMouseMove($event);
      }, false, ɵɵresolveDocument)("touchmove.silent", function TuiResizerDirective_touchmove_silent_HostBindingHandler($event) {
        return ctx.onTouchMove($event);
      }, false, ɵɵresolveDocument)("mouseup.silent", function TuiResizerDirective_mouseup_silent_HostBindingHandler() {
        return ctx.onMouseUp();
      }, false, ɵɵresolveDocument)("touchend.silent", function TuiResizerDirective_touchend_silent_HostBindingHandler() {
        return ctx.onMouseUp();
      }, false, ɵɵresolveDocument);
    }
    if (rf & 2) {
      ɵɵstyleProp("touch-action", "none")("cursor", ctx.cursor);
    }
  },
  inputs: {
    tuiResizer: "tuiResizer"
  },
  outputs: {
    tuiSizeChange: "tuiSizeChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizerDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiResizer]",
      host: {
        "[style.touchAction]": '"none"'
      }
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [TuiResizeableDirective]
      }]
    }];
  }, {
    tuiResizer: [{
      type: Input
    }],
    tuiSizeChange: [{
      type: Output
    }],
    cursor: [{
      type: HostBinding,
      args: ["style.cursor"]
    }],
    onTouchStart: [{
      type: HostListener,
      args: ["touchstart.silent.passive", ["$event"]]
    }],
    onMouseDown: [{
      type: HostListener,
      args: ["mousedown.silent.prevent", ["$event.x", "$event.y"]]
    }],
    onMouseMove: [{
      type: HostListener,
      args: ["document:mousemove.silent", ["$event"]]
    }],
    onTouchMove: [{
      type: HostListener,
      args: ["document:touchmove.silent", ["$event"]]
    }],
    onMouseUp: [{
      type: HostListener,
      args: ["document:mouseup.silent"]
    }, {
      type: HostListener,
      args: ["document:touchend.silent"]
    }]
  });
})();
var TuiResizerModule = class {
};
TuiResizerModule.ɵfac = function TuiResizerModule_Factory(t) {
  return new (t || TuiResizerModule)();
};
TuiResizerModule.ɵmod = ɵɵdefineNgModule({
  type: TuiResizerModule,
  declarations: [TuiResizeableDirective, TuiResizerDirective],
  exports: [TuiResizeableDirective, TuiResizerDirective]
});
TuiResizerModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizerModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiResizeableDirective, TuiResizerDirective],
      exports: [TuiResizeableDirective, TuiResizerDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-swipe.js
var TuiSwipeDirective = class {
  constructor(tuiSwipe) {
    this.tuiSwipe = tuiSwipe;
  }
};
TuiSwipeDirective.ɵfac = function TuiSwipeDirective_Factory(t) {
  return new (t || TuiSwipeDirective)(ɵɵdirectiveInject(TuiSwipeService));
};
TuiSwipeDirective.ɵdir = ɵɵdefineDirective({
  type: TuiSwipeDirective,
  selectors: [["", "tuiSwipe", ""]],
  outputs: {
    tuiSwipe: "tuiSwipe"
  },
  features: [ɵɵProvidersFeature([TuiSwipeService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipeDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiSwipe]",
      outputs: ["tuiSwipe"],
      providers: [TuiSwipeService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiSwipeService]
      }]
    }];
  }, null);
})();
var TuiSwipeModule = class {
};
TuiSwipeModule.ɵfac = function TuiSwipeModule_Factory(t) {
  return new (t || TuiSwipeModule)();
};
TuiSwipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiSwipeModule,
  declarations: [TuiSwipeDirective],
  exports: [TuiSwipeDirective]
});
TuiSwipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiSwipeDirective],
      exports: [TuiSwipeDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-validator.js
var TuiValidatorDirective = class {
  constructor() {
    this.onChange = EMPTY_FUNCTION;
    this.tuiValidator = Validators.nullValidator;
  }
  validate(control) {
    return this.tuiValidator(control);
  }
  registerOnValidatorChange(onChange) {
    this.onChange = onChange;
  }
  ngOnChanges() {
    this.onChange();
  }
  ngOnDestroy() {
    this.tuiValidator = Validators.nullValidator;
    this.onChange();
  }
};
TuiValidatorDirective.ɵfac = function TuiValidatorDirective_Factory(t) {
  return new (t || TuiValidatorDirective)();
};
TuiValidatorDirective.ɵdir = ɵɵdefineDirective({
  type: TuiValidatorDirective,
  selectors: [["", "tuiValidator", ""]],
  inputs: {
    tuiValidator: "tuiValidator"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => TuiValidatorDirective),
    multi: true
  }]), ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValidatorDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiValidator]",
      providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => TuiValidatorDirective),
        multi: true
      }]
    }]
  }], null, {
    tuiValidator: [{
      type: Input
    }]
  });
})();
var TuiValidatorModule = class {
};
TuiValidatorModule.ɵfac = function TuiValidatorModule_Factory(t) {
  return new (t || TuiValidatorModule)();
};
TuiValidatorModule.ɵmod = ɵɵdefineNgModule({
  type: TuiValidatorModule,
  declarations: [TuiValidatorDirective],
  exports: [TuiValidatorDirective]
});
TuiValidatorModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValidatorModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiValidatorDirective],
      exports: [TuiValidatorDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-value-changes.js
var TuiValueChangesDirective = class {
  constructor(container, control) {
    this.container = container;
    this.control = control;
    this.refresh$ = new Subject();
    this.tuiValueChanges = this.refresh$.pipe(distinctUntilChanged(), switchAll(), distinctUntilChanged());
  }
  ngDoCheck() {
    var _a, _b;
    this.refresh$.next(((_a = this.control) === null || _a === void 0 ? void 0 : _a.valueChanges) || ((_b = this.container) === null || _b === void 0 ? void 0 : _b.valueChanges) || EMPTY);
  }
};
TuiValueChangesDirective.ɵfac = function TuiValueChangesDirective_Factory(t) {
  return new (t || TuiValueChangesDirective)(ɵɵdirectiveInject(ControlContainer, 8), ɵɵdirectiveInject(NgControl, 8));
};
TuiValueChangesDirective.ɵdir = ɵɵdefineDirective({
  type: TuiValueChangesDirective,
  selectors: [["", "tuiValueChanges", ""]],
  outputs: {
    tuiValueChanges: "tuiValueChanges"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValueChangesDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiValueChanges]"
    }]
  }], function() {
    return [{
      type: ControlContainer,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ControlContainer]
      }]
    }, {
      type: NgControl,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [NgControl]
      }]
    }];
  }, {
    tuiValueChanges: [{
      type: Output
    }]
  });
})();
var TuiValueChangesModule = class {
};
TuiValueChangesModule.ɵfac = function TuiValueChangesModule_Factory(t) {
  return new (t || TuiValueChangesModule)();
};
TuiValueChangesModule.ɵmod = ɵɵdefineNgModule({
  type: TuiValueChangesModule,
  declarations: [TuiValueChangesDirective],
  exports: [TuiValueChangesDirective]
});
TuiValueChangesModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValueChangesModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiValueChangesDirective],
      exports: [TuiValueChangesDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-zoom.js
var TuiZoomDirective = class {
  constructor(tuiZoom) {
    this.tuiZoom = tuiZoom;
  }
};
TuiZoomDirective.ɵfac = function TuiZoomDirective_Factory(t) {
  return new (t || TuiZoomDirective)(ɵɵdirectiveInject(TuiZoomService));
};
TuiZoomDirective.ɵdir = ɵɵdefineDirective({
  type: TuiZoomDirective,
  selectors: [["", "tuiZoom", ""]],
  hostVars: 2,
  hostBindings: function TuiZoomDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("touch-action", "none");
    }
  },
  outputs: {
    tuiZoom: "tuiZoom"
  },
  features: [ɵɵProvidersFeature([TuiZoomService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoomDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiZoom]",
      outputs: ["tuiZoom"],
      providers: [TuiZoomService],
      host: {
        "[style.touch-action]": '"none"'
      }
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiZoomService]
      }]
    }];
  }, null);
})();
var TuiZoomModule = class {
};
TuiZoomModule.ɵfac = function TuiZoomModule_Factory(t) {
  return new (t || TuiZoomModule)();
};
TuiZoomModule.ɵmod = ɵɵdefineNgModule({
  type: TuiZoomModule,
  declarations: [TuiZoomDirective],
  exports: [TuiZoomDirective]
});
TuiZoomModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoomModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiZoomDirective],
      exports: [TuiZoomDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-components-dialog-host.js
function TuiDialogHostComponent_section_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiDialogHostComponent_section_0_tui_scroll_controls_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 5);
  }
}
function TuiDialogHostComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section", 2);
    ɵɵtemplate(1, TuiDialogHostComponent_section_0_ng_container_1_Template, 1, 0, "ng-container", 3)(2, TuiDialogHostComponent_section_0_tui_scroll_controls_2_Template, 1, 0, "tui-scroll-controls", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("@host", void 0);
    ɵɵattribute("aria-labelledby", item_r1.id);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", item_r1.component)("polymorpheusOutletContext", item_r1);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.isMobile);
  }
}
function TuiDialogHostComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("transitionend", function TuiDialogHostComponent_div_1_Template_div_transitionend_0_listener($event) {
      const isDialogClosesOnBack_r4 = ɵɵrestoreView(_r3).tuiLet;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDialog($event, !!ctx_r1.dialogs.length, !!isDialogClosesOnBack_r4));
    })("popstate", function TuiDialogHostComponent_div_1_Template_div_popstate_0_listener() {
      const isDialogClosesOnBack_r4 = ɵɵrestoreView(_r3).tuiLet;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeLast(ctx_r1.dialogs, !!isDialogClosesOnBack_r4));
    }, false, ɵɵresolveWindow);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-overlay_visible", ctx_r1.dialogs.length);
  }
}
var FAKE_HISTORY_STATE = {
  label: "ignoreMe"
};
var isFakeHistoryState = (historyState) => (historyState === null || historyState === void 0 ? void 0 : historyState.label) === FAKE_HISTORY_STATE.label;
var TUI_DIALOG_CLOSES_ON_BACK = tuiCreateToken(of(false));
var TuiDialogHostComponent = class {
  constructor(isMobile, isDialogClosesOnBack$, dialogsByType, historyRef, titleService, destroy$, cdr, doc) {
    this.isMobile = isMobile;
    this.isDialogClosesOnBack$ = isDialogClosesOnBack$;
    this.dialogsByType = dialogsByType;
    this.historyRef = historyRef;
    this.titleService = titleService;
    this.destroy$ = destroy$;
    this.cdr = cdr;
    this.doc = doc;
    this.dialogs = [];
  }
  ngOnInit() {
    combineLatest(this.dialogsByType).pipe(map((arr) => [].concat(...arr).sort((a, b) => a.createdAt - b.createdAt)), takeUntil(this.destroy$)).subscribe((dialogs) => {
      var _a;
      this.dialogs = dialogs;
      this.cdr.markForCheck();
      (_a = this.doc.defaultView) === null || _a === void 0 ? void 0 : _a.document.documentElement.classList.toggle("t-overscroll-none", !!dialogs.length);
    });
  }
  closeLast(dialogs, isDialogClosesOnBack) {
    if (!isDialogClosesOnBack) {
      return;
    }
    const [last] = dialogs.slice(-1);
    if (!last) {
      return;
    }
    if (dialogs.length > 1) {
      this.historyRef.pushState(FAKE_HISTORY_STATE, this.titleService.getTitle());
    }
    last.$implicit.complete();
  }
  onDialog({
    propertyName
  }, popupOpened, isDialogClosesOnBack) {
    if (!isDialogClosesOnBack || propertyName !== "letter-spacing") {
      return;
    }
    if (popupOpened) {
      this.historyRef.pushState(FAKE_HISTORY_STATE, this.titleService.getTitle());
    } else if (isFakeHistoryState(this.historyRef.state)) {
      this.historyRef.back();
    }
  }
};
TuiDialogHostComponent.ɵfac = function TuiDialogHostComponent_Factory(t) {
  return new (t || TuiDialogHostComponent)(ɵɵdirectiveInject(TUI_IS_MOBILE), ɵɵdirectiveInject(TUI_DIALOG_CLOSES_ON_BACK), ɵɵdirectiveInject(TUI_DIALOGS), ɵɵdirectiveInject(HISTORY), ɵɵdirectiveInject(Title), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DOCUMENT));
};
TuiDialogHostComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiDialogHostComponent,
  selectors: [["tui-dialog-host"]],
  features: [ɵɵProvidersFeature([TuiDestroyService])],
  decls: 3,
  vars: 4,
  consts: [["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiOverscroll", "all", "tuiScrollRef", "", "class", "t-dialog", 4, "ngFor", "ngForOf"], ["class", "t-overlay", 3, "t-overlay_visible", "transitionend", "popstate", 4, "tuiLet"], ["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiOverscroll", "all", "tuiScrollRef", "", 1, "t-dialog"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["class", "t-scrollbars", 4, "ngIf"], [1, "t-scrollbars"], [1, "t-overlay", 3, "transitionend", "popstate"]],
  template: function TuiDialogHostComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiDialogHostComponent_section_0_Template, 3, 5, "section", 0)(1, TuiDialogHostComponent_div_1_Template, 1, 2, "div", 1);
      ɵɵpipe(2, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.dialogs);
      ɵɵadvance();
      ɵɵproperty("tuiLet", ɵɵpipeBind1(2, 2, ctx.isDialogClosesOnBack$));
    }
  },
  dependencies: [TuiScrollControlsComponent, NgForOf, TuiFocusTrapDirective, TuiOverscrollDirective, TuiScrollRefDirective, PolymorpheusOutletDirective, NgIf, TuiLetDirective, AsyncPipe],
  styles: ["[_nghost-%COMP%]{position:fixed;left:0;bottom:0;width:100%;height:0}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:flex-start;outline:none;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}.t-dialog[_ngcontent-%COMP%]{bottom:auto;height:100%}.t-overlay[_ngcontent-%COMP%]{height:100%;pointer-events:none;touch-action:none;opacity:0;letter-spacing:normal;transition:opacity var(--tui-duration, .3s),letter-spacing .01s;background:rgba(0,0,0,.75);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none)}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;letter-spacing:1px}.t-dialog[_ngcontent-%COMP%]:last-of-type{z-index:1}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;margin:0;color:#747474}"],
  data: {
    animation: [trigger("host", [transition(":enter", [style({
      overflow: "clip"
    }), query(":scope > *", [animateChild()], {
      optional: true
    })]), transition(":leave", [style({
      overflow: "clip"
    }), query(":scope > *", [animateChild()], {
      optional: true
    })])])]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogHostComponent, [{
    type: Component,
    args: [{
      selector: "tui-dialog-host",
      templateUrl: "./dialog-host.template.html",
      styleUrls: ["./dialog-host.style.less"],
      // So that we do not force OnPush on custom dialogs
      // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDestroyService],
      animations: [trigger("host", [transition(":enter", [style({
        overflow: "clip"
      }), query(":scope > *", [animateChild()], {
        optional: true
      })]), transition(":leave", [style({
        overflow: "clip"
      }), query(":scope > *", [animateChild()], {
        optional: true
      })])])]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_IS_MOBILE]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_DIALOG_CLOSES_ON_BACK]
      }]
    }, {
      type: Array,
      decorators: [{
        type: Inject,
        args: [TUI_DIALOGS]
      }]
    }, {
      type: History,
      decorators: [{
        type: Inject,
        args: [HISTORY]
      }]
    }, {
      type: Title,
      decorators: [{
        type: Inject,
        args: [Title]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var TuiDialogHostModule = class {
};
TuiDialogHostModule.ɵfac = function TuiDialogHostModule_Factory(t) {
  return new (t || TuiDialogHostModule)();
};
TuiDialogHostModule.ɵmod = ɵɵdefineNgModule({
  type: TuiDialogHostModule,
  declarations: [TuiDialogHostComponent],
  imports: [CommonModule, PolymorpheusModule, TuiOverscrollModule, TuiFocusTrapModule, TuiLetModule, TuiScrollControlsModule],
  exports: [TuiDialogHostComponent]
});
TuiDialogHostModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, PolymorpheusModule, TuiOverscrollModule, TuiFocusTrapModule, TuiLetModule, TuiScrollControlsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogHostModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusModule, TuiOverscrollModule, TuiFocusTrapModule, TuiLetModule, TuiScrollControlsModule],
      declarations: [TuiDialogHostComponent],
      exports: [TuiDialogHostComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-enums.js
var TuiDayOfWeek;
(function(TuiDayOfWeek2) {
  TuiDayOfWeek2[TuiDayOfWeek2["Sunday"] = 0] = "Sunday";
  TuiDayOfWeek2[TuiDayOfWeek2["Monday"] = 1] = "Monday";
  TuiDayOfWeek2[TuiDayOfWeek2["Tuesday"] = 2] = "Tuesday";
  TuiDayOfWeek2[TuiDayOfWeek2["Wednesday"] = 3] = "Wednesday";
  TuiDayOfWeek2[TuiDayOfWeek2["Thursday"] = 4] = "Thursday";
  TuiDayOfWeek2[TuiDayOfWeek2["Friday"] = 5] = "Friday";
  TuiDayOfWeek2[TuiDayOfWeek2["Saturday"] = 6] = "Saturday";
})(TuiDayOfWeek || (TuiDayOfWeek = {}));
var TuiMonthNumber;
(function(TuiMonthNumber2) {
  TuiMonthNumber2[TuiMonthNumber2["January"] = 0] = "January";
  TuiMonthNumber2[TuiMonthNumber2["February"] = 1] = "February";
  TuiMonthNumber2[TuiMonthNumber2["March"] = 2] = "March";
  TuiMonthNumber2[TuiMonthNumber2["April"] = 3] = "April";
  TuiMonthNumber2[TuiMonthNumber2["May"] = 4] = "May";
  TuiMonthNumber2[TuiMonthNumber2["June"] = 5] = "June";
  TuiMonthNumber2[TuiMonthNumber2["July"] = 6] = "July";
  TuiMonthNumber2[TuiMonthNumber2["August"] = 7] = "August";
  TuiMonthNumber2[TuiMonthNumber2["September"] = 8] = "September";
  TuiMonthNumber2[TuiMonthNumber2["October"] = 9] = "October";
  TuiMonthNumber2[TuiMonthNumber2["November"] = 10] = "November";
  TuiMonthNumber2[TuiMonthNumber2["December"] = 11] = "December";
})(TuiMonthNumber || (TuiMonthNumber = {}));

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-date-time.js
function tuiDateClamp(date, min, max) {
  if (max && max < date) {
    return max;
  }
  if (min && min > date) {
    return min;
  }
  return date;
}
var DAYS_IN_WEEK = 7;
var DAYS_IN_NORMAL_YEAR = 365;
var DAYS_IN_LEAP_YEAR = 366;
var MONTHS_IN_YEAR = 12;
var MIN_DAY = 1;
var MIN_MONTH = 0;
var MAX_MONTH = 11;
var MIN_YEAR = 0;
var MAX_YEAR = 9999;
var RANGE_SEPARATOR_CHAR = `${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}`;
var MILLISECONDS_IN_SECOND = 1e3;
var SECONDS_IN_MINUTE = 60;
var MINUTES_IN_HOUR = 60;
var HOURS_IN_DAY = 24;
var MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
var MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
var MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;
var DATE_FILLER_LENGTH = 10;
var DATE_RANGE_FILLER_LENGTH = 2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;
var TUI_DATE_FORMAT = tuiCreateToken("DMY");
var TUI_DATE_SEPARATOR = tuiCreateToken(".");
var changeDateSeparator = (dateString, newDateSeparator) => dateString.replace(/[^0-9A-Za-zА-Яа-я]/gi, newDateSeparator);
var TuiYear = class _TuiYear {
  constructor(year) {
    this.year = year;
    ngDevMode && tuiAssert.assert(_TuiYear.isValidYear(year));
  }
  /**
   * Checks year for validity
   */
  static isValidYear(year) {
    return Number.isInteger(year) && tuiInRange(year, MIN_YEAR, MAX_YEAR + 1);
  }
  /**
   * Check if passed year is a leap year
   */
  static isLeapYear(year) {
    ngDevMode && tuiAssert.assert(_TuiYear.isValidYear(year));
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }
  /**
   * Returns amount of leap years from year 0 to the passed one
   */
  static getAbsoluteLeapYears(year) {
    ngDevMode && tuiAssert.assert(_TuiYear.isValidYear(year));
    return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
  }
  static lengthBetween(from2, to) {
    return to.year - from2.year;
  }
  /**
   * Normalizes year by clamping it between min and max years
   */
  static normalizeYearPart(year) {
    return tuiNormalizeToIntNumber(year, MIN_YEAR, MAX_YEAR);
  }
  get formattedYear() {
    return String(this.year).padStart(4, "0");
  }
  get isLeapYear() {
    return _TuiYear.isLeapYear(this.year);
  }
  /**
   * Returns amount of leap years from year 0 to current
   */
  get absoluteLeapYears() {
    return _TuiYear.getAbsoluteLeapYears(this.year);
  }
  /**
   * Passed year is after current
   */
  yearBefore({ year }) {
    return this.year < year;
  }
  /**
   * Passed year is the same or after current
   */
  yearSameOrBefore({ year }) {
    return this.year <= year;
  }
  /**
   * Passed year is the same as current
   */
  yearSame({ year }) {
    return this.year === year;
  }
  /**
   * Passed year is either the same of before the current
   */
  yearSameOrAfter({ year }) {
    return this.year >= year;
  }
  /**
   * Passed year is before current
   */
  yearAfter({ year }) {
    return this.year > year;
  }
  /**
   * Immutably offsets year
   */
  append({ year = 0 }) {
    ngDevMode && tuiAssert.assert(Number.isInteger(year));
    const resultYear = this.year + year;
    ngDevMode && tuiAssert.assert(_TuiYear.isValidYear(resultYear));
    return new _TuiYear(resultYear);
  }
  toString() {
    return this.formattedYear;
  }
  valueOf() {
    return this.year;
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  toJSON() {
    return this.formattedYear;
  }
};
var TuiMonth = class _TuiMonth extends TuiYear {
  /**
   * @param year
   * @param month (starting with 0)
   */
  constructor(year, month) {
    super(year);
    this.month = month;
    ngDevMode && tuiAssert.assert(_TuiMonth.isValidMonth(year, month));
  }
  /**
   * Tests month and year for validity
   */
  static isValidMonth(year, month) {
    return TuiYear.isValidYear(year) && _TuiMonth.isValidMonthPart(month);
  }
  /**
   * Returns number of days in a month
   */
  static getMonthDaysCount(month, isLeapYear) {
    ngDevMode && tuiAssert.assert(_TuiMonth.isValidMonthPart(month));
    switch (month) {
      case TuiMonthNumber.February:
        return isLeapYear ? 29 : 28;
      case TuiMonthNumber.April:
      case TuiMonthNumber.June:
      case TuiMonthNumber.September:
      case TuiMonthNumber.November:
        return 30;
      default:
        return 31;
    }
  }
  /**
   * Returns current month and year based on local time zone
   * @nosideeffects
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
  }
  /**
   * Returns current month and year based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
  }
  static lengthBetween(from2, to) {
    const absoluteFrom = from2.month + from2.year * 12;
    const absoluteTo = to.month + to.year * 12;
    return absoluteTo - absoluteFrom;
  }
  /**
   * Normalizes number by clamping it between min and max month
   */
  static normalizeMonthPart(month) {
    return tuiNormalizeToIntNumber(month, MIN_MONTH, MAX_MONTH);
  }
  /**
   * Tests month for validity
   */
  static isValidMonthPart(month) {
    return Number.isInteger(month) && tuiInRange(month, MIN_MONTH, MAX_MONTH + 1);
  }
  get formattedMonthPart() {
    return String(this.month + 1).padStart(2, "0");
  }
  /**
   * Returns days in a month
   */
  get daysCount() {
    return _TuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
  }
  /**
   * Passed month and year are after current
   */
  monthBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month < another.month;
  }
  /**
   * Passed month and year are after or the same as current
   */
  monthSameOrBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month <= another.month;
  }
  /**
   * Passed month and year are the same as current
   */
  monthSame(another) {
    return this.yearSame(another) && this.month === another.month;
  }
  /**
   * Passed month and year are either before or equal to current
   */
  monthSameOrAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month >= another.month;
  }
  /**
   * Passed month and year are before current
   */
  monthAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month > another.month;
  }
  /**
   * Immutably alters current month and year by passed offset
   *
   * @param offset
   * @return new month and year object as a result of offsetting current
   */
  append({ year = 0, month = 0 }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    return new _TuiMonth(Math.floor(totalMonths / MONTHS_IN_YEAR), totalMonths % MONTHS_IN_YEAR);
  }
  toString() {
    return `${this.formattedMonthPart}.${this.formattedYear}`;
  }
  valueOf() {
    return this.toLocalNativeDate().valueOf();
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedMonthPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    return new Date(this.year, this.month);
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month));
  }
};
var TuiDay = class _TuiDay extends TuiMonth {
  constructor(year, month, day) {
    super(year, month);
    this.day = day;
    ngDevMode && tuiAssert.assert(_TuiDay.isValidDay(year, month, day));
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} based on local time zone
   */
  static fromLocalNativeDate(date) {
    return new _TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} using UTC
   */
  static fromUtcNativeDate(date) {
    return new _TuiDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }
  /**
   * Check validity of year, month and day
   *
   * @param year
   * @param month
   * @param day
   * @return boolean validity
   */
  static isValidDay(year, month, day) {
    return TuiMonth.isValidMonth(year, month) && Number.isInteger(day) && tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1);
  }
  /**
   * Current day based on local time zone
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getFullYear();
    const month = nativeDate.getMonth();
    const day = nativeDate.getDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Returns current day based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getUTCFullYear();
    const month = nativeDate.getUTCMonth();
    const day = nativeDate.getUTCDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Calculates {@link TuiDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
   *
   * @param year any year value, including invalid
   * @param month any month value, including invalid (months start with 0)
   * @param day any day value, including invalid
   * @return normalized date
   */
  static normalizeOf(year, month, day) {
    const normalizedYear = TuiYear.normalizeYearPart(year);
    const normalizedMonth = TuiMonth.normalizeMonthPart(month);
    const normalizedDay = _TuiDay.normalizeDayPart(day, normalizedMonth, normalizedYear);
    return new _TuiDay(normalizedYear, normalizedMonth, normalizedDay);
  }
  static lengthBetween(from2, to) {
    return Math.round((to.toLocalNativeDate().getTime() - from2.toLocalNativeDate().getTime()) / (1e3 * 60 * 60 * 24));
  }
  static parseRawDateString(date, dateMode = "DMY") {
    ngDevMode && tuiAssert.assert(date.length === DATE_FILLER_LENGTH, "[parseRawDateString]: wrong date string length");
    switch (dateMode) {
      case "YMD":
        return {
          day: parseInt(date.slice(8, 10), 10),
          month: parseInt(date.slice(5, 7), 10) - 1,
          year: parseInt(date.slice(0, 4), 10)
        };
      case "MDY":
        return {
          day: parseInt(date.slice(3, 5), 10),
          month: parseInt(date.slice(0, 2), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
      case "DMY":
      default:
        return {
          day: parseInt(date.slice(0, 2), 10),
          month: parseInt(date.slice(3, 5), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
    }
  }
  // TODO: Move month and year related code corresponding classes
  /**
   * Parsing a string with date with normalization
   *
   * @param rawDate date string
   * @param dateMode date format of the date string (DMY | MDY | YMD)
   * @return normalized date
   */
  static normalizeParse(rawDate, dateMode = "DMY") {
    const { day, month, year } = this.parseRawDateString(rawDate, dateMode);
    return _TuiDay.normalizeOf(year, month, day);
  }
  /**
   * Parsing a date stringified in a toJSON format
   * @param yearMonthDayString date string in format of YYYY-MM-DD
   * @return date
   * @throws exceptions if any part of the date is invalid
   */
  static jsonParse(yearMonthDayString) {
    const { day, month, year } = this.parseRawDateString(yearMonthDayString, "YMD");
    if (!TuiYear.isValidYear(year)) {
      throw new TuiInvalidYearException(year);
    }
    if (!TuiMonth.isValidMonth(year, month)) {
      throw new TuiInvalidMonthException(month);
    }
    if (!Number.isInteger(day) || !tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1)) {
      throw new TuiInvalidDayException(day);
    }
    return new _TuiDay(year, month, day);
  }
  static normalizeDayPart(day, month, year) {
    ngDevMode && tuiAssert.assert(TuiMonth.isValidMonth(year, month));
    const monthDaysCount = TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year));
    return tuiNormalizeToIntNumber(day, 1, monthDaysCount);
  }
  get formattedDayPart() {
    return String(this.day).padStart(2, "0");
  }
  get isWeekend() {
    const dayOfWeek = this.dayOfWeek(false);
    return dayOfWeek === TuiDayOfWeek.Saturday || dayOfWeek === TuiDayOfWeek.Sunday;
  }
  /**
   * Returns day of week
   *
   * @param startFromMonday whether week starts from Monday and not from Sunday
   * @return day of week (from 0 to 6)
   */
  dayOfWeek(startFromMonday = true) {
    const dayOfWeek = startFromMonday ? this.toLocalNativeDate().getDay() - 1 : this.toLocalNativeDate().getDay();
    return dayOfWeek < 0 ? 6 : dayOfWeek;
  }
  /**
   * Passed date is after current
   */
  dayBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day < another.day;
  }
  /**
   * Passed date is after or equals to current
   */
  daySameOrBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day <= another.day;
  }
  /**
   * Passed date is the same as current
   */
  daySame(another) {
    return this.monthSame(another) && this.day === another.day;
  }
  /**
   * Passed date is either before or the same as current
   */
  daySameOrAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day >= another.day;
  }
  /**
   * Passed date is before current
   */
  dayAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day > another.day;
  }
  /**
   * Clamping date between two limits
   *
   * @param min
   * @param max
   * @return clamped date
   */
  dayLimit(min, max) {
    if (min !== null && this.dayBefore(min)) {
      return min;
    }
    if (max !== null && this.dayAfter(max)) {
      return max;
    }
    return this;
  }
  /**
   * Immutably alters current day by passed offset
   *
   * If resulting month has more days than original one, date is rounded to the maximum day
   * in the resulting month. Offset of days will be calculated based on the resulted year and month
   * to not interfere with parent classes methods
   *
   * @param offset
   * @return new date object as a result of offsetting current
   */
  append({ year = 0, month = 0, day = 0 }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    let years = Math.floor(totalMonths / MONTHS_IN_YEAR);
    let months = totalMonths % MONTHS_IN_YEAR;
    let days = Math.min(this.day, TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) + day;
    while (days > TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) {
      days -= TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
      if (months === TuiMonthNumber.December) {
        years++;
        months = TuiMonthNumber.January;
      } else {
        months++;
      }
    }
    while (days < MIN_DAY) {
      if (months === TuiMonthNumber.January) {
        years--;
        months = TuiMonthNumber.December;
      } else {
        months--;
      }
      days += TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
    }
    return new _TuiDay(years, months, days);
  }
  /**
   * Returns formatted whole date
   */
  getFormattedDay(dateFormat, separator) {
    ngDevMode && tuiAssert.assert(separator.length === 1, "Separator should consist of only 1 symbol");
    const dd = this.formattedDayPart;
    const mm = this.formattedMonthPart;
    const yyyy = this.formattedYear;
    switch (dateFormat) {
      case "YMD":
        return `${yyyy}${separator}${mm}${separator}${dd}`;
      case "MDY":
        return `${mm}${separator}${dd}${separator}${yyyy}`;
      case "DMY":
      default:
        return `${dd}${separator}${mm}${separator}${yyyy}`;
    }
  }
  toString(dateFormat = "DMY", separator = ".") {
    return this.getFormattedDay(dateFormat, separator);
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedDayPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    return new Date(this.year, this.month, this.day);
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month, this.day));
  }
};
var TuiMonthRange = class _TuiMonthRange {
  constructor(from2, to) {
    this.from = from2;
    this.to = to;
    ngDevMode && tuiAssert.assert(from2.monthSameOrBefore(to));
  }
  static sort(month1, month2) {
    return month1.monthSameOrBefore(month2) ? new _TuiMonthRange(month1, month2) : new _TuiMonthRange(month2, month1);
  }
  get isSingleMonth() {
    return this.from.monthSame(this.to);
  }
  monthSame(another) {
    return this.from.monthSame(another.from) && this.to.monthSame(another.to);
  }
  toString() {
    return `${this.from}${RANGE_SEPARATOR_CHAR}${this.to}`;
  }
};
var TuiDayRange = class _TuiDayRange extends TuiMonthRange {
  constructor(from2, to) {
    super(from2, to);
    this.from = from2;
    this.to = to;
    ngDevMode && tuiAssert.assert(from2.daySameOrBefore(to));
  }
  /**
   * Creates range from two days after sorting them
   *
   * @param day1
   * @param day2
   * @return new range with sorted days
   */
  static sort(day1, day2) {
    return day1.daySameOrBefore(day2) ? new _TuiDayRange(day1, day2) : new _TuiDayRange(day2, day1);
  }
  /**
   * Parse and correct a day range in string format
   *
   * @param rangeString a string of dates in a format dd.mm.yyyy - dd.mm.yyyy
   * @param dateMode {@link TuiDateMode}
   * @return normalized day range object
   */
  static normalizeParse(rangeString, dateMode = "DMY") {
    const leftDay = TuiDay.normalizeParse(rangeString.slice(0, DATE_FILLER_LENGTH), dateMode);
    if (rangeString.length < DATE_RANGE_FILLER_LENGTH) {
      return new _TuiDayRange(leftDay, leftDay);
    }
    return _TuiDayRange.sort(leftDay, TuiDay.normalizeParse(rangeString.slice(DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length), dateMode));
  }
  get isSingleDay() {
    return this.from.daySame(this.to);
  }
  /**
   * Tests ranges for identity
   *
   * @param another second range to test against current
   * @return `true` if days are identical
   */
  daySame(another) {
    return this.from.daySame(another.from) && this.to.daySame(another.to);
  }
  /**
   * Locks range between two days included, or limits from one side if the other is null
   *
   * @param min
   * @param max
   * @return range — clamped range
   */
  dayLimit(min, max) {
    return new _TuiDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
  }
  /**
   * Human readable format.
   */
  getFormattedDayRange(dateFormat, dateSeparator) {
    const from2 = this.from.getFormattedDay(dateFormat, dateSeparator);
    const to = this.to.getFormattedDay(dateFormat, dateSeparator);
    return `${from2}${RANGE_SEPARATOR_CHAR}${to}`;
  }
  toString(dateFormat = "DMY", dateSeparator = ".") {
    return this.getFormattedDayRange(dateFormat, dateSeparator);
  }
};
var TUI_FIRST_DAY = new TuiDay(MIN_YEAR, MIN_MONTH, MIN_DAY);
var TUI_LAST_DAY = new TuiDay(MAX_YEAR, MAX_MONTH, 31);
var TuiTime = class _TuiTime {
  constructor(hours, minutes, seconds = 0, ms = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.ms = ms;
    ngDevMode && tuiAssert.assert(_TuiTime.isValidTime(hours, minutes, seconds, ms), "Time must be real, but got:", hours, minutes, seconds, ms);
  }
  /**
   * Checks if time is valid
   */
  static isValidTime(hours, minutes, seconds = 0, ms = 0) {
    return Number.isInteger(hours) && tuiInRange(hours, 0, HOURS_IN_DAY) && Number.isInteger(minutes) && tuiInRange(minutes, 0, MINUTES_IN_HOUR) && Number.isInteger(seconds) && tuiInRange(seconds, 0, SECONDS_IN_MINUTE) && Number.isInteger(ms) && tuiInRange(ms, 0, 1e3);
  }
  /**
   * Current UTC time.
   */
  static current() {
    return _TuiTime.fromAbsoluteMilliseconds(Date.now() % MILLISECONDS_IN_DAY);
  }
  /**
   * Current time in local timezone
   */
  static currentLocal() {
    const date = /* @__PURE__ */ new Date();
    return _TuiTime.fromAbsoluteMilliseconds((Date.now() - date.getTimezoneOffset() * MILLISECONDS_IN_MINUTE) % MILLISECONDS_IN_DAY);
  }
  /**
   * Calculates TuiTime from milliseconds
   */
  static fromAbsoluteMilliseconds(milliseconds) {
    ngDevMode && tuiAssert.assert(Number.isInteger(milliseconds));
    ngDevMode && tuiAssert.assert(tuiInRange(milliseconds, 0, MILLISECONDS_IN_DAY), `Milliseconds must be below ${MILLISECONDS_IN_DAY} (milliseconds in a day).`);
    const hours = Math.floor(milliseconds / MILLISECONDS_IN_HOUR);
    const minutes = Math.floor(milliseconds % MILLISECONDS_IN_HOUR / MILLISECONDS_IN_MINUTE);
    const seconds = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE / 1e3) || 0;
    const ms = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE % 1e3) || 0;
    return new _TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Parses string into TuiTime object
   */
  static fromString(time) {
    const hours = Number(time.slice(0, 2));
    const minutes = Number(time.slice(3, 5));
    const seconds = Number(time.slice(6, 8)) || 0;
    const ms = Number(time.slice(9, 12)) || 0;
    return new _TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Converts Date object into TuiTime
   * @param date
   */
  static fromLocalNativeDate(date) {
    return new _TuiTime(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  }
  /**
   * Shifts time by hours and minutes
   */
  shift({ hours = 0, minutes = 0, seconds = 0, ms = 0 }) {
    const newMs = (1e3 + this.ms + ms % 1e3) % 1e3;
    const secondsInMs = ms < 0 ? Math.ceil(ms / 1e3) : Math.floor(ms / 1e3);
    const secondsToAdd = secondsInMs + seconds;
    const newSeconds = (60 + this.seconds + secondsToAdd % 60) % 60;
    const minutesInSeconds = secondsToAdd < 0 ? Math.ceil(secondsToAdd / 60) : Math.floor(secondsToAdd / 60);
    const minutesToAdd = minutesInSeconds + minutes;
    const newMinutes = (60 + this.minutes + minutesToAdd % 60) % 60;
    const hoursInMinutes = minutesToAdd < 0 ? Math.ceil(minutesToAdd / 60) : Math.floor(minutesToAdd / 60);
    const hoursToAdd = hoursInMinutes + hours;
    const newHours = (24 + this.hours + hoursToAdd % 24) % 24;
    return new _TuiTime(newHours, newMinutes, newSeconds, newMs);
  }
  /**
   * Converts TuiTime to string
   */
  toString(mode) {
    const needAddMs = mode === "HH:MM:SS.MSS" || !mode && this.ms > 0;
    const needAddSeconds = needAddMs || mode === "HH:MM:SS" || !mode && this.seconds > 0;
    return `${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}${needAddSeconds ? `:${this.formatTime(this.seconds)}` : ""}${needAddMs ? `.${this.formatTime(this.ms, 3)}` : ""}`;
  }
  valueOf() {
    return this.toAbsoluteMilliseconds();
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  /**
   * Converts TuiTime to milliseconds
   */
  toAbsoluteMilliseconds() {
    return this.hours * MILLISECONDS_IN_HOUR + this.minutes * MILLISECONDS_IN_MINUTE + this.seconds * 1e3 + this.ms;
  }
  formatTime(time, digits = 2) {
    return String(time).padStart(digits, "0");
  }
};

export {
  ALWAYS_FALSE_HANDLER,
  ALWAYS_TRUE_HANDLER,
  CHROMIUM_EDGE_START_VERSION,
  EMPTY_QUERY,
  EMPTY_ARRAY,
  EMPTY_FUNCTION,
  EMPTY_CLIENT_RECT,
  TUI_DEFAULT_STRINGIFY,
  TUI_DEFAULT_MATCHER,
  TUI_STRICT_MATCHER,
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_PARENT_ANIMATION,
  TUI_PARENT_STOP,
  POLLING_TIME,
  svgNodeFilter,
  CHAR_NO_BREAK_SPACE,
  CHAR_EN_DASH,
  CHAR_EM_DASH,
  CHAR_LAQUO,
  CHAR_RAQUO,
  CHAR_HYPHEN,
  CHAR_MINUS,
  CHAR_PLUS,
  CHAR_BULLET,
  CHAR_ELLIPSIS,
  CHAR_CURRENCY_SIGN,
  CHAR_ZERO_WIDTH_SPACE,
  TUI_USED_ICONS,
  TUI_VERSION,
  tuiAssert,
  TuiValidationError,
  tuiIsEdge,
  tuiIsEdgeOlderThan,
  tuiIsFirefox,
  tuiIsSafari,
  tuiHexToRgb,
  tuiHexToRGBA,
  tuiIsValidHex,
  tuiParseHex,
  tuiHsvToRgb,
  tuiParseColor,
  tuiRgbToHex,
  tuiRgbToHsv,
  tuiRgbaToHex,
  tuiIsValidRgba,
  tuiClamp,
  tuiInRange,
  tuiNormalizeToIntNumber,
  tuiQuantize,
  tuiRound,
  tuiCeil,
  tuiFloor,
  tuiTrunc,
  tuiRoundWith,
  tuiSum,
  tuiToInt,
  tuiToInteger,
  tuiToRadians,
  tuiArrayRemove,
  tuiArrayShallowEquals,
  tuiArrayToggle,
  tuiIsString,
  tuiCleanObject,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiCreateOptions,
  tuiDefaultSort,
  tuiDistanceBetweenTouches,
  tuiEaseInOutQuad,
  tuiFlatLength,
  tuiGetOriginalArrayFromQueryList,
  tuiGetSwipeDirection,
  tuiIsFalsy,
  tuiIsNumber,
  tuiIsObject,
  tuiIsPresent,
  tuiIsValidUrl,
  tuiMarkControlAsTouchedAndValidate,
  tuiNullableSame,
  tuiObjectFromEntries,
  tuiProvideOptions,
  tuiUniqBy,
  tuiCanScroll,
  tuiContainsOrAfter,
  tuiIsInput,
  tuiIsTextarea,
  tuiIsTextfield,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsTextNode,
  tuiGetActualTarget,
  tuiGetClipboardDataText,
  tuiGetDocumentOrShadowRoot,
  tuiGetElementObscures,
  tuiGetElementOffset,
  tuiGetScrollParent,
  tuiGetSelectedText,
  tuiIsCurrentTarget,
  tuiIsElementEditable,
  tuiIsInsideIframe,
  tuiIsNodeIn,
  tuiPointToClientRect,
  tuiRetargetedBoundaryCrossing,
  tuiGetNativeFocused,
  tuiBlurNativeFocused,
  tuiIsNativeKeyboardFocusable,
  tuiIsNativeMouseFocusable,
  tuiGetClosestFocusable,
  tuiIsNativeFocused,
  tuiIsNativeFocusedIn,
  tuiMoveFocus,
  tuiSetNativeMouseFocused,
  tuiPx,
  tuiIsApplePlatform,
  tuiIsIos,
  tuiIsApple,
  tuiSvgLinearGradientProcessor,
  TuiComputedDocumentException,
  TuiDocumentSelectionException,
  TuiInvalidDayException,
  TuiInvalidMonthException,
  TuiInvalidYearException,
  TuiNoHostException,
  TuiOwnerDocumentException,
  TuiPureException,
  TuiTableSortKeyException,
  TuiTsParserException,
  TuiValueChangesException,
  TuiValuePresentException,
  TuiXmlParsingException,
  tuiControlValue,
  tuiTypedFromEvent,
  tuiMouseDragFinishFrom,
  TuiDragStage,
  TuiDragState,
  tuiDragAndDropFrom,
  tuiIsAlive,
  tuiFocusVisibleObservable,
  tuiIfMap,
  tuiIsObserved,
  tuiQueryListChanges,
  tuiItemsQueryListObservable,
  tuiMustBePresent,
  tuiPressedObservable,
  tuiPreventDefault,
  tuiScrollFrom,
  tuiStopPropagation,
  tuiWatch,
  tuiZonefull,
  tuiZonefree,
  tuiZoneOptimized,
  WINDOW,
  ANIMATION_FRAME,
  CSS,
  LOCAL_STORAGE,
  PAGE_VISIBILITY,
  USER_AGENT,
  ResizeObserverService,
  TUI_REMOVED_ELEMENT,
  TUI_ACTIVE_ELEMENT,
  TUI_ALERTS,
  tuiAsAlerts,
  TUI_BASE_HREF,
  TUI_DEFAULT_RENDERER,
  TUI_DIALOGS,
  tuiAsDialog,
  TUI_ENSURE_BASE_HREF,
  TUI_FOCUSABLE_ITEM_ACCESSOR,
  tuiAsFocusableItemAccessor,
  TUI_FONTS_READY,
  TUI_IS_IOS,
  TUI_IS_MOBILE,
  TUI_IS_ANDROID,
  TUI_IS_APPLE,
  TUI_IS_CHROMIUM,
  TUI_IS_CYPRESS,
  TUI_IS_PLAYWRIGHT,
  TUI_IS_E2E,
  TUI_IS_FIREFOX,
  TUI_IS_STACKBLITZ,
  TUI_IS_WEBKIT,
  TUI_PLATFORM,
  tuiPlatformFactory,
  TUI_RANGE,
  TUI_SCROLL_REF,
  TUI_SWIPE_OPTIONS,
  TUI_TAKE_ONLY_TRUSTED_EVENTS,
  TUI_TOUCH_SUPPORTED,
  TUI_WINDOW_SIZE,
  TUI_WINDOW_HEIGHT,
  TUI_ZOOM_OPTIONS,
  TuiDestroyService,
  TuiDirectiveStylesService,
  TuiFocusVisibleService,
  TuiIdService,
  TuiParentsScrollService,
  TuiObscuredService,
  TuiPanService,
  TuiResizeService,
  TuiScrollService,
  TuiStaticRequestService,
  TuiSwipeService,
  TuiZoomService,
  AbstractTuiInteractive,
  AbstractTuiValueTransformer,
  AbstractTuiControl,
  tuiAsControl,
  AbstractTuiController,
  AbstractTuiDialogService,
  AbstractTuiDialogDirective,
  AbstractTuiMultipleControl,
  AbstractTuiNullableControl,
  AbstractTuiPortalService,
  AbstractTuiPortalHostComponent,
  AbstractTuiThemeSwitcher,
  tuiCoerceBooleanProperty,
  TuiFilterPipe,
  TuiFilterPipeModule,
  TuiIsPresentPipe,
  TuiIsPresentPipeModule,
  TuiKeysPipe,
  TuiKeysPipeModule,
  TuiMapperPipe,
  TuiMapperPipeModule,
  TuiReplacePipe,
  TuiReplacePipeModule,
  TuiAlertHostComponent,
  TuiAlertHostModule,
  TuiScrollbarDirective,
  TuiScrollControlsComponent,
  SCROLL_REF_SELECTOR,
  TuiScrollRefDirective,
  TuiScrollControlsModule,
  tuiDebounce,
  tuiDefaultProp,
  tuiPure,
  tuiRequiredSetter,
  TuiActiveZoneDirective,
  TuiActiveZoneModule,
  AbstractTuiAutofocusHandler,
  TuiDefaultAutofocusHandler,
  TuiIosAutofocusHandler,
  TUI_AUTOFOCUS_DEFAULT_OPTIONS,
  TUI_AUTOFOCUS_OPTIONS,
  tuiAutoFocusOptionsProvider,
  TUI_AUTOFOCUS_HANDLER,
  TUI_AUTOFOCUS_PROVIDERS,
  TuiAutoFocusDirective,
  TuiAutoFocusModule,
  TuiSynchronousAutofocusHandler,
  TuiAutofilledStyleComponent,
  TuiAutofilledDirective,
  TuiAutofilledModule,
  TuiCheckedDirective,
  TuiCheckedModule,
  TuiClickOutsideDirective,
  TuiClickOutsideModule,
  TuiControlDirective,
  TuiControlModule,
  TuiCopyProcessorDirective,
  TuiCopyProcessorModule,
  TuiDragDirective,
  TuiDragModule,
  TuiDroppableDirective,
  TuiDroppableModule,
  TuiElementDirective,
  TuiElementModule,
  TuiFocusTrapDirective,
  TuiFocusTrapModule,
  TuiFocusVisibleDirective,
  TuiFocusVisibleModule,
  TuiFocusableDirective,
  TuiFocusableModule,
  TuiFocusedDirective,
  TuiFocusedModule,
  TuiForDirective,
  TuiForModule,
  TuiForAsyncDirective,
  TuiForAsyncModule,
  TuiHighDpiDirective,
  TuiHighDpiModule,
  TuiHoveredService,
  TuiHoveredDirective,
  TuiHoveredModule,
  TuiItemDirective,
  TuiItemModule,
  TuiLetContext,
  TuiLetDirective,
  TuiLetModule,
  TuiMediaDirective,
  TuiMediaModule,
  TuiObscuredDirective,
  TuiObscuredModule,
  TuiOverscrollDirective,
  TuiOverscrollModule,
  TuiPanDirective,
  TuiPanModule,
  TuiPlatformDirective,
  TuiPlatformModule,
  TuiDropdownPortalService,
  TuiDropdownHostComponent,
  TuiDropdownHostModule,
  TuiPortalDirective,
  TuiPortalModule,
  TuiPressedDirective,
  TuiPressedModule,
  TuiPreventDefaultDirective,
  TuiPreventDefaultModule,
  TuiRepeatTimesContext,
  TuiRepeatTimesDirective,
  TuiRepeatTimesModule,
  TuiResizeDirective,
  TuiResizeModule,
  TuiResizeableDirective,
  TuiResizerDirective,
  TuiResizerModule,
  TuiSwipeDirective,
  TuiSwipeModule,
  TuiValidatorDirective,
  TuiValidatorModule,
  TuiValueChangesDirective,
  TuiValueChangesModule,
  TuiZoomDirective,
  TuiZoomModule,
  TUI_DIALOG_CLOSES_ON_BACK,
  TuiDialogHostComponent,
  TuiDialogHostModule,
  TuiDayOfWeek,
  TuiMonthNumber,
  tuiDateClamp,
  DAYS_IN_WEEK,
  DAYS_IN_NORMAL_YEAR,
  DAYS_IN_LEAP_YEAR,
  MONTHS_IN_YEAR,
  MIN_DAY,
  MIN_MONTH,
  MAX_MONTH,
  MIN_YEAR,
  MAX_YEAR,
  RANGE_SEPARATOR_CHAR,
  MILLISECONDS_IN_SECOND,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  HOURS_IN_DAY,
  MILLISECONDS_IN_MINUTE,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_DAY,
  DATE_FILLER_LENGTH,
  DATE_RANGE_FILLER_LENGTH,
  TUI_DATE_FORMAT,
  TUI_DATE_SEPARATOR,
  changeDateSeparator,
  TuiYear,
  TuiMonth,
  TuiDay,
  TuiMonthRange,
  TuiDayRange,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TuiTime
};
//# sourceMappingURL=chunk-UVSTSVFF.js.map
