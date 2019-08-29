### 0.3.0-rc.1 (2019-08-29)
- Upgrade Expo to v34

### 0.2.9-rc.4 (2019-07-11)
- Update readme

### 0.2.9-rc.3 (2019-07-11)
- Manual set screen orientation:

    Example:

    ```
    onFullscreenChange: function(fullscreen) {

        // manual control fullscreen state.

        if(!fullscreen){

          //ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT_UP);

        }

      }
      ```

      Note:
      `import { ScreenOrientation } from "expo";`

### 0.2.9-rc.2 (2019-07-10)
- Fix check env

### 0.2.9 (2019-07-08)
- Support subtitles

### 0.2.8-rc.2 (2019-05-10)
- Add Sentry log
- Support API v4
- Support option: `enableSoundInSilentModeIOS`

### 0.2.7-rc.4 (2019-04-10)
- Support option: `playsInSilentModeIOS`
- Fix full screen on android device which have bottom navigation