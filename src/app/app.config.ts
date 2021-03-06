export class AppConfig {

  /* Parse Server URL */
   public static get SERVER_URL(): string {
     return 'https://guiaeditora.herokuapp.com/parse';
   }

   /* Parse App ID  */
   public static get APP_ID(): string {
     return 'myAppId';
   }

   /* AdMob Banner ID  */
   public static get BANNER_ID(): string {
     return '';
   }

   /* Google Analytics Tracking ID  */
   public static get TRACKING_ID(): string {
     return '';
   }

   /* Header color (only Android Multitask view)  */
   public static get HEADER_COLOR(): string {
     return '#fdd735';
   }

   /* Unit: km or mi  */
   public static get DEFAULT_UNIT(): string {
     return 'km';
   }

   /* Map style: satellite or roadmap */
   public static get DEFAULT_MAP_STYLE(): string {
     return 'MAP_TYPE_NORMAL';
   }

   public static get DEFAULT_LANG(): string {
     return 'pt';
   }
}
