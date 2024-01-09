export const cap = (s: string) =>
  [s[0].toUpperCase(), s.slice(1, s.length)].join('');

// 이 타입을 다른 데서 쓸 일이 없으므로 index.d.ts 따로 뺄 필요가 없다.
export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const getPhotos = async (albumId?: number): Promise<Photo[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId || 1}`
  );
  // 여기서 await 쓸 필요없다. 여기 함수 자체가 async 이므로, 이 함수를 사용할 때 await 걸어줄 거니까.
  return res.json();
};
