// 사이트 전반에서 쓰는 연락처·링크 정보
export const site = {
  name: "스테이지 413",
  nameEn: "Stage 413",
  address: "경기도 용인시 수지구 성복2로 413-2",
  email: "ysh8701@naver.com",
  phone: "010-8111-3718",
  parkingSpots: 20,
};

export const access = [
  { minutes: 8, from: "서수지 IC", note: "용인서울고속도로" },
  { minutes: 20, from: "분당", note: "판교·정자 일대" },
  { minutes: 30, from: "양재역", note: "서울 강남권" },
];

const query = encodeURIComponent(site.address);

export const mapLinks = {
  kakao: `https://map.kakao.com/link/search/${query}`,
  naver: `https://map.naver.com/p/search/${query}`,
};
