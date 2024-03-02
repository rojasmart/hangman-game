export async function getGame() {
  const res = await fetch("/data.json");
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  return data?.categories;
}
