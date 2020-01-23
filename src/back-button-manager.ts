  import {Plugins} from "@capacitor/core";
  
  const {App} = Plugins;
  
  App.addListener("backButton", () => {
    switch (window.location.pathname) {
      case "/tab1":
          console.log('you are on tab1')
          window.history.back();
        break;
      default:
        window.history.back();
    }
  });
  