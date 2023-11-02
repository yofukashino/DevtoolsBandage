import { Logger } from "replugged";
import { fluxDispatcher, toast } from "replugged/common";
const PluginLogger = Logger.plugin("PluginTemplate");

export function start(): void {
  function hug(): void {
    const stylesheets = document.querySelectorAll(
      'link[rel="stylesheet"][href]:not([href^="replugged://"])',
    );
    stylesheets.forEach(function (existingLink: HTMLLinkElement) {
      const parent = existingLink.parentNode;
      const newLink = document.createElement("link");
      newLink.href = existingLink.href;
      newLink.rel = "stylesheet";
      parent.replaceChild(newLink, existingLink);
    });
    toast.toast("baby girl don't cri, you wouldn't crash now.");
    PluginLogger.error("There you are mama. Don't worry its fine.");
    fluxDispatcher.unsubscribe("RPC_SERVER_READY", hug);
  }
  fluxDispatcher.subscribe("RPC_SERVER_READY", hug);
}

export function stop(): void {
  PluginLogger.error("I want mama. I wanna go back to my mama.");
}
