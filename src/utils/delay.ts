export default function delay(ms: number | undefined) {
  if (ms) ms = Math.random() * 500;
  return new Promise((resolve) => setTimeout(resolve, ms));
}
