export default function parseJson(stringifiedObject) {
  try {
    return JSON.parse(stringifiedObject);
  } catch (error) {
    return null;
  }
}
