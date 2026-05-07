import { checkInstall } from 'src/utils/nativeInstaller/index.js';
import { useStartupNotification } from './useStartupNotification.js';
export function useInstallMessages() {
  useStartupNotification(async () => {
    const messages = await checkInstall();
    return messages.map((message, index) => {
      let priority = "low";
      if (message.type === "error" || message.userActionRequired) {
        priority = "high";
      } else {
        if (message.type === "path" || message.type === "alias") {
          priority = "medium";
        }
      }
      return {
        key: `install-message-${index}-${message.type}`,
        text: message.message,
        priority,
        color: message.type === "error" ? "error" : "warning"
      };
    });
  });
}