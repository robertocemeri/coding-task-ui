export default function stringifyJson(rObject) {
  try {
    return JSON.stringify(rObject);
  } catch (error) {
    return null;
  }
}
