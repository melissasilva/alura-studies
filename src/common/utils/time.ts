export default function timeToSeconds(time: string): number {
  const [hour, minute, second] = time.split(":").map(Number);
  return hour * 3600 + minute * 60 + second;
}
