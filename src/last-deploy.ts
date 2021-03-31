import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function getLastDeployTime(): string {
  const lastDeployTime = "<LAST_DEPLOY_TIME>";
  return dayjs().to(lastDeployTime);
}
