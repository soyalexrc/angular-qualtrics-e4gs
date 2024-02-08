// To parse this data:
//
//   import { Convert, Qsi } from "./file";
//
//   const qsi = Convert.toQsi(json);

export interface Qsi {
  config:                          Config;
  shouldStripQueryParamsInQLoc:    boolean;
  reg:                             AssetManager;
  ed:                              AssetManager;
  reqID:                           ReqID;
  Request:                         Request;
  overrides:                       AssetManager;
  global:                          Global;
  isFullDbgInitialized:            boolean;
  baseURL:                         string;
  LoadingState:                    any[];
  PendingQueue:                    any[];
  debugConfig:                     AssetManager;
  historyStorage:                  HistoryStorage;
  history:                         History;
  profile:                         Profile;
  util:                            Util;
  AssetManager:                    AssetManager;
  API:                             API;
  ClientLog:                       AssetManager;
  dbg:                             Dbg;
  LatencyLog:                      LatencyLog;
  EventTracker:                    EventTracker;
  cookie:                          Cookie;
  CookieStorage:                   CookieStorage;
  Orchestrator:                    Orchestrator;
  JFEListenerRegistered:           boolean;
  windows:                         AssetManager;
  targetWindows:                   any[];
  foundFrustrationLogic:           boolean;
  InterceptReevaluator:            InterceptReevaluator;
  Browser:                         Browser;
  CORSOrigin:                      string;
  OS:                              OS;
  adobeVar:                        string;
  id:                              string;
  CookieDomain:                    string;
  historyStorageType:              string;
  historyStorageSize:              null;
  currentURL:                      string;
  scrollbarWidth:                  number;
  WindowUtils:                     AssetManager;
  windowHandler:                   WindowHandler;
  EmbeddedData:                    EmbeddedData;
  PipedText:                       PipedText;
  BuildElementModule:              AssetManager;
  BuildResponsiveElementModule:    BuildResponsiveElementModule;
  Animation:                       Animation;
  localStorage:                    AssetManager;
  ResolveTimeZone:                 AssetManager;
  ResolveTimeOnSite:               AssetManager;
  ResolveSiteCatalyst:             AssetManager;
  ResolveSearchTerm:               AssetManager;
  ResolveResolution:               AssetManager;
  ResolveReferrer:                 AssetManager;
  ResolvePageCount:                AssetManager;
  ResolveJavaScript:               AssetManager;
  ResolveIntercept:                AssetManager;
  ResolveHTML:                     AssetManager;
  ResolveHistory:                  AssetManager;
  ResolveEventTracking:            AssetManager;
  ResolveCookie:                   AssetManager;
  ResolveActionSet:                AssetManager;
  ClientSideTargeting:             ClientSideTargeting;
  screenCaptureListenerRegistered: boolean;
  RunInterceptUtilities:           AssetManager;
  CreativeManager:                 CreativeManager;
  version:                         string;
  InterceptsRan:                   boolean;
}

export interface API {
  unloading:        boolean;
  Events:           AssetManager;
  SessionRecording: SessionRecording;
  run: () => void,
  load: any,
  unload: any,
  getIntercept: (intercept_id: string) => Promise<any>,
}

export interface AssetManager {
}

export interface SessionRecording {
  isStarting: boolean;
}

export interface Animation {
  supportedProperties: SupportedProperties;
  tweens:              any[];
  Transitions:         AssetManager;
}

export interface SupportedProperties {
  top:     Bottom;
  left:    Bottom;
  right:   Bottom;
  bottom:  Bottom;
  width:   Bottom;
  height:  Bottom;
  opacity: number;
}

export type Bottom = "px";

export interface Browser {
  name:               string;
  version:            number;
  isMobile:           boolean;
  isBrowserSupported: boolean;
}

export interface BuildResponsiveElementModule {
  HTML_ELEMENT_TYPES:     HTMLElementTypes;
  PARENT_CONTAINER_CLASS: string;
  SHADOWBOX_CLASS:        string;
  ACTION_TYPES:           ActionTypes;
}

export interface ActionTypes {
  TARGET:  string;
  DISMISS: string;
}

export interface HTMLElementTypes {
  CONTAINER: string;
  HEADLINE:  string;
  TEXT:      string;
  BUTTON:    string;
  IMAGE:     string;
}

export interface ClientSideTargeting {
  enabled:     boolean;
  interceptID: string;
}

export interface CookieStorage {
  storageCache: AssetManager;
  cookieName:   string;
}

export interface CreativeManager {
  Utilities: AssetManager;
}

export interface EmbeddedData {
  surveyOpenED: AssetManager;
}

export interface EventTracker {
  counts:     AssetManager;
  cookieName: string;
  loaded:     boolean;
  clicked:    boolean;
}

export interface InterceptReevaluator {
  evaluationResults:              EvaluationResults;
  oldEvaluationResults:           AssetManager;
  moduleActive:                   boolean;
  interceptHasRun:                AssetManager;
  interceptsWithFrustrationLogic: AssetManager;
}

export interface EvaluationResults {
  ZN_aaxt7pZtTL1fNzw: EvaluationResultsSI3GDHHZfifLzEMnQ;
}

export interface EvaluationResultsSI3GDHHZfifLzEMnQ {
  interceptEntry:     InterceptEntry;
  interceptDebugInfo: null;
}

export interface InterceptEntry {
  Decision:          Decision;
  InterceptID:       string;
  InterceptRevision: string;
  ContactID:         null;
  DirectoryID:       null;
  DistributionID:    null;
  SurveyID:          string;
}

export interface Decision {
  ActionSetID: string;
  Creative:    DecisionCreative;
  Target:      DecisionTarget;
}

export interface DecisionCreative {
  ID:         string;
  Name:       string;
  Revision:   string;
  AnchorTags: AssetManager;
  Type:       string;
}

export interface DecisionTarget {
  Type:              string;
  URL:               string;
  OriginalURL:       string;
  OriginalURLOrigin: string;
  DisplayType:       null;
}

export interface LatencyLog {
  metricName:                 string;
  components:                 Components;
  overallLatencyStartTime:    null;
  overallLatency:             number;
  componentStartTimes:        Component;
  componentLatencies:         Component;
  isDuplicateScriptExecution: boolean;
  debugLog:                   Dbg;
  latencyStartTime:           number;
  requestId:                  string;
}

export interface Component {
  targetingRequest:                     number;
  "JSModule-Core":                      number;
  allAssetDefinitionsAndJSModules:      number;
  "JSModule-PopOver":                   number;
  "AssetDefinition-ZN_aaxt7pZtTL1fNzw": number;
  "AssetDefinition-CR_ahN1LKwTJDDK8GG": number;
}

export interface Components {
  CORE_MODULE:         string;
  TARGETING:           string;
  DPR_TARGETING:       string;
  XMD_DEBUG_TARGETING: string;
  ASSETS_AND_MODULES:  string;
  CONTACT_FREQUENCY:   string;
}

export interface Dbg {
  isFullDbgInitialized: boolean;
}

export interface OS {
  name: string;
}

export interface Orchestrator {
  isTestSession:                      boolean;
  latencyLog:                         LatencyLog;
  debugLog:                           Dbg;
  scriptSrc:                          string;
  defaultClientSideDelayMilliseconds: number;
  zoneId:                             string;
  targetingRetryer:                   GRetryer;
  xmdDebugRetryer:                    GRetryer;
  srConfig:                           null;
  csTargetingParams:                  CSTargetingParams;
  lastSiResponse:                     Response;
}

export interface CSTargetingParams {
  targetingResponse:  Response;
  targetingRequest:   ZnAaxt7PZtTl1FNzw;
  clientVersion:      string;
  assetLoadingParams: Params;
}

export interface Params {
  id:              string;
  ZoneID:          string;
  Q_CLIENTVERSION: string;
  Q_CLIENTTYPE:    string;
}

export interface ZnAaxt7PZtTl1FNzw {
  Intercepts:           Intercepts;
  Params:               Params;
  hasDependencies:      boolean;
  hasBeenResolved:      boolean;
  displayInterceptType: string;
  zoneManualDisplay:    boolean;
}

export interface Intercepts {
  ZN_aaxt7pZtTL1fNzw: InterceptsSI3GDHHZfifLzEMnQ;
}

export interface InterceptsSI3GDHHZfifLzEMnQ {
  Targeting: InterceptEntry;
  Intercept: Intercept;
  Creative:  SI3GDHHZfifLzEMnQCreative;
}

export interface SI3GDHHZfifLzEMnQCreative {
  BrandID:    string;
  CreativeID: string;
  Revision:   string;
  Title:      string;
  ZoneID:     string;
  Type:       string;
  Options:    Options;
}

export interface Options {
  elements:       Elements;
  displayOptions: DisplayOptions;
}

export interface DisplayOptions {
  targetPosition:   string;
  startPosition:    string;
  animate:          boolean;
  duration:         number;
  transition:       string;
  delay:            string;
  close:            string;
  shadowBox:        boolean;
  shadowBoxOpacity: number;
  shadowBoxColor:   string;
  shadowBoxFade:    boolean;
  auto:             boolean;
  prebuild:         boolean;
  autoClose:        boolean;
}

export interface Elements {
  Elements: Element[];
  MinTop:   string;
  MinLeft:  string;
}

export interface Element {
  type:                string;
  style:               Style;
  position:            Position;
  positionAnchors:     PositionAnchors;
  dropShadow?:         boolean;
  content:             string;
  unitsOfMeasurement:  UnitsOfMeasurement;
  locators:            boolean;
  accessibilityTitle?: string;
}

export interface Position {
  top:    string;
  bottom: number;
  left:   string;
  right:  number;
}

export interface PositionAnchors {
  positionX: PositionX;
  positionY: PositionY;
}

export type PositionX = "left";

export type PositionY = "top";

export interface Style {
  width:           string;
  height:          string;
  borderWidth:     string;
  borderColor:     BorderColor;
  backgroundColor: BackgroundColor;
  zIndex:          number;
  opacity:         number;
  display:         Display;
  borderRadius:    string;
}

export type BackgroundColor = "rgb(255, 255, 255)" | "rgb(255, 0, 0)" | "transparent";

export type BorderColor = "rgb(105, 105, 105)" | "rgb(0, 0, 0)" | "transparent";

export type Display = "block";

export interface UnitsOfMeasurement {
  width:  Bottom;
  height: Bottom;
}

export interface Intercept {
  BrandID:        string;
  InterceptID:    string;
  InterceptName:  string;
  Revision:       string;
  DeletedDate:    null;
  ActionSets:     { [key: string]: ActionSetValue };
  DisplayOptions: DisplayOptionsClass;
}

export interface ActionSetValue {
  ID:                 string;
  Label:              string;
  Creative:           string;
  CreativeType:       string;
  WeightedSampleRate: string;
  Target:             PurpleTarget;
  EmbeddedData:       EmbeddedDatum[];
  ActionOptions:      ActionOptions;
  platform:           string;
}

export interface ActionOptions {
  targetNewWindow:            boolean;
  targetEmbedded:             boolean;
  targetFullScreen:           boolean;
  resizeForEmbeddedTargets:   boolean;
  targetWidth:                string;
  targetHeight:               string;
  accessibilityTitle:         string;
  displayElement:             string;
  selectedDevices:            SelectedDevices;
  actionSetSampleRate:        string;
  actionSetContinueExecution: boolean;
  autoCloseTarget:            boolean;
  targetPopUnder:             boolean;
  targetNewTab:               boolean;
  useCustomTrigger:           boolean;
  triggerEntirePage:          boolean;
  triggerMultipleTimes:       boolean;
  triggerType:                string;
  triggerElementID:           string;
  scrollPercentage:           string;
  targetReplaceContents:      boolean;
  sameSizeAsCreative:         boolean;
  targetPopUnderDisplay:      TargetPopUnderDisplay;
}

export interface SelectedDevices {
  browsers:  { [key: string]: boolean };
  platforms: { [key: string]: boolean };
}

export interface TargetPopUnderDisplay {
  id: string;
}

export interface EmbeddedDatum {
  name:  Name;
  type:  Type;
  value: Name | null;
}

export type Name = "UserId" | "ID_INTERCEPT" | "TIEMPO_PERMANENCIA";

export type Type = "JavaScriptVal" | "SiteInterceptID" | "TimeOnSite";

export interface PurpleTarget {
  Type:           string;
  PrimaryElement: string;
}

export interface DisplayOptionsClass {
  displayRate:                   string;
  noshow:                        string;
  manualDisplay:                 boolean;
  displayInterceptType:          string;
  cookieDomain:                  string;
  hasRandomization:              boolean;
  useWeightedActionSets:         boolean;
  hideOnCookiesDisabled:         boolean;
  hideOnLocalStorageDisabled:    boolean;
  linkWithXMD:                   boolean;
  useContactFrequencyRules:      boolean;
  contactHydration:              boolean;
  contactFrequencyDirectoryID:   string;
  contactFrequencyRefLocator:    string;
  contactFrequencyRefExpression: ContactFrequencyRefExpression;
  contactFrequencyUserID:        string;
}

export interface ContactFrequencyRefExpression {
  expression: string;
  guid:       string;
}

export interface Response {
  Intercepts:           InterceptEntry[];
  ClientSideIntercepts: ClientSideIntercept[];
  Modules:              Modules;
  FeatureFlags:         { [key: string]: boolean };
  RequestData:          RequestData;
  Dependencies:         Dependencies;
  SRTestConfiguration:  null;
}

export interface ClientSideIntercept {
  InterceptID:                  string;
  Name:                         string;
  Active:                       boolean;
  RandomizedActionSets:         boolean;
  InterceptRevision:            string;
  PreventRepeatedDisplay:       string;
  HideOnLocalStorageDisabled:   boolean;
  HideOnCookiesDisabled:        boolean;
  LogicTree:                    ClientSideInterceptLogicTree;
  ActionSets:                   ActionSetElement[];
  ContactID:                    null;
  DistributionID:               null;
  DirectoryID:                  null;
  ContactFrequencyRulesEnabled: boolean;
}

export interface ActionSetElement {
  ActionSetID:            string;
  Label:                  string;
  Creative:               DecisionCreative;
  Target:                 DecisionTarget;
  SurveyID:               string;
  ContactFrequencyPassed: boolean;
  PopUnderTarget:         null;
  LogicTree:              ActionSetLogicTree;
}

export interface ActionSetLogicTree {
  Comparator: string;
  Left:       Left;
  Right:      Right;
  Type:       string;
}

export interface Left {
  LogicType:  string;
  Expression: string;
  Type:       string;
}

export interface Right {
  Value: string;
  Type:  string;
}

export interface ClientSideInterceptLogicTree {
  Value: boolean;
  Type:  string;
}

export interface Dependencies {
  JavaScript: JavaScript;
}

export interface JavaScript {
  QID_59942346: string;
  QID_44655451: string;
}

export interface Modules {
  Core:          string;
  PopOver:       string;
  ScreenCapture: string;
}

export interface RequestData {
  CORSOrigin:                     string;
  ID:                             string;
  adobeSCVariable:                string;
  bVersion:                       string;
  brandBaseUrl:                   string;
  brandDC:                        string;
  brandID:                        string;
  browser:                        string;
  browserVersion:                 number;
  cookieDomain:                   string;
  googleDataLayerVariable:        string;
  displayInterceptType:           string;
  eventTrackers:                  AssetManager;
  extRefType:                     string;
  extRefValue:                    string;
  hasBeenResolved:                boolean;
  hasDependencies:                boolean;
  isBrowserSupported:             boolean;
  isDebug:                        boolean;
  isMobile:                       boolean;
  historyStorageType:             string;
  historyStorageSize:             null;
  maxCookieSize:                  null;
  osName:                         string;
  screenCaptureServiceBaseURL:    string;
  validIntercepts:                ValidIntercepts;
  zoneManualDisplay:              boolean;
  reevaluateInterceptOnUrlChange: boolean;
}

export interface ValidIntercepts {
  ZN_aaxt7pZtTL1fNzw: string;
}

export interface GRetryer {
  retryerName:  string;
  retryLimit:   number;
  retryBackoff: number;
  retryCount:   number;
}

export interface PipedText {
  locators: any[];
}

export interface Request {
  ZN_aaxt7pZtTL1fNzw: ZnAaxt7PZtTl1FNzw;
}

export interface Config {
  zoneId:              string;
  brandId:             string;
  hostedJSLocation:    string;
  baseURL:             string;
  surveyTakingBaseURL: string;
  gtmContainerID:      string;
  BrandTier:           string;
}

export interface Cookie {
  cookieSize: number;
}

export interface Global {
  reqIDsDetected:              AssetManager;
  srMultiZoneErrors:           number;
  currentZIndex:               number;
  intercepts:                  AssetManager;
  eventTrackers:               AssetManager;
  featureFlags:                { [key: string]: boolean };
  enableJSSanitization:        boolean;
  latencySamplePercentage:     number;
  alreadyFetchedJSModules:     string[];
  maxCookieSize:               null;
  clientType:                  string;
  clientVersion:               string;
  hostedJSLocation:            string;
  legacyId:                    string;
  baseURL:                     string;
  brandID:                     string;
  brandDC:                     string;
  graphicPath:                 string;
  imagePath:                   string;
  screenCaptureServiceBaseURL: string;
  brandBaseUrl:                string;
}

export interface History {
  historyStorage: HistoryStorage;
  started:        boolean;
  focusTime:      number;
  blurTime:       number;
  focused:        boolean;
}

export interface HistoryStorage {
  historySessionName: string;
  useCookie:          boolean;
  limit:              number;
}

export interface Profile {
  namespace: string;
}

export interface ReqID {
  ZN_aaxt7pZtTL1fNzw: boolean;
}

export interface Util {
  creativeTypes:            CreativeTypes;
  originalDocumentOverflow: string;
}

export interface CreativeTypes {
  EMPTY:             string;
  FEEDBACK_LINK:     string;
  HTTP_REDIRECT:     string;
  IFRAME:            string;
  INFO_BAR:          string;
  LINK:              string;
  NO_CREATIVE:       string;
  POP_OVER:          string;
  POP_UNDER:         string;
  POP_UP:            string;
  RELAY:             string;
  SLIDER:            string;
  USER_DEFINED_HTML: string;
}

export interface WindowHandler {
  optInIDsAndTargetOrigins: string;
  optInIDsAndWindowNames:   string;
}

