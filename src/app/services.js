export async function getData(url) {
  const res = await fetch(url);
  if(!res.ok){
    throw new Error('Faild to fetch data!')
  } else {
    return res.json();
  }
}