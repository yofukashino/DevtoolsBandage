import { Logger, util } from "replugged";
import { toast } from "replugged/common";
const PluginLogger = Logger.plugin("British Boyfriend");

export async function start(): Promise<void> {
  await util.waitFor('[data-list-id="guildsnav"]');
  function hug(): void {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"][href]');
    for (const existingLink of stylesheets as NodeListOf<HTMLAnchorElement>) {
      const parent = existingLink.parentNode;
      const newLink = document.createElement("link");
      newLink.href = existingLink.href;
      newLink.rel = "stylesheet";
      parent.replaceChild(newLink, existingLink);
    }
    PluginLogger.log("There you are mama. Don't worry its fine");
  }
  hug();
  window.DiscordNative.window.setDevtoolsCallbacks(() => hug());
  toast.toast("baby girl don't cri, you wouldn't crash now.");
}

export function stop(): void {
  window.DiscordNative.window.setDevtoolsCallbacks(() => {});
  PluginLogger.error("I want mama. I wanna go back to my mama.");
}

declare global {
  interface Window {
    DiscordNative: {
      window: {
        setDevtoolsCallbacks: (e: () => void, t?: () => void) => void;
      };
    };
  }
}
