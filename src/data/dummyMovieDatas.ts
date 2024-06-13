import {Player} from "../models/Player";

export const dummyDataList:Player[] = [{
  movieId: "MV_MC01_MC000000103",  // movieid
  brandLogoList: ["only"],  // brand_logolist

  backdropImage: "image.wavve.com/meta/image/202404/1714110743058722952.jpg",  // moviegroup_horizontal_logoY_image

  videoDetail: {
    titleImage: "image.wavve.com/meta/image/202404/1714110759310485273.png",  // moviegrouptitlelogoimage
    metadataList: {
      releaseYear: 2024,   // originalreleaseyear+"년"
      playTime: 6633,  // playtime
      targetAge: 12, // targetage
      genres: ["로맨스", "코미디"]  // genre.list -> text
    },
    synopsis: "'사랑을 하는 여성에게는 빛이 보인다' 특이한 체질을 가진 대학생 '사이조'. 연애와는 거리가 먼 그는 어느 날, '사랑이라는 것을 알고 싶다'라고 말하는 문학소녀 '시노노메'에게 첫눈에 반해 '사랑의 정의'를 나누는 교환 일기를 시작한다. 그들의 모습에 사이조를 짝사랑 해온 소꿉친구 '키타시로'의 마음은 술렁인다. 그들은 수천 년 동안 인류가 고민해 온 '사랑'을 풀 수 있을까? 그리고 각각의 사랑의 행방은 어떻게 될 것인가?"  // synopsis
  },

  bottomContents: {
    thumbnailImage: "image.wavve.com/meta/image/202404/1714110749654413518.jpg",  // image
    preview: {
      title: "사랑은 빛",  // title
      synopsis: "'사랑을 하는 여성에게는 빛이 보인다' 특이한 체질을 가진 대학생 '사이조'. 연애와는 거리가 먼 그는 어느 날, '사랑이라는 것을 알고 싶다'라고 말하는 문학소녀 '시노노메'에게 첫눈에 반해 '사랑의 정의'를 나누는 교환 일기를 시작한다. 그들의 모습에 사이조를 짝사랑 해온 소꿉친구 '키타시로'의 마음은 술렁인다. 그들은 수천 년 동안 인류가 고민해 온 '사랑'을 풀 수 있을까? 그리고 각각의 사랑의 행방은 어떻게 될 것인가?"  // synopsis
    },
    detailView: {
      title: "사랑은 빛",  // title
      synopsis: "'사랑을 하는 여성에게는 빛이 보인다' 특이한 체질을 가진 대학생 '사이조'. 연애와는 거리가 먼 그는 어느 날, '사랑이라는 것을 알고 싶다'라고 말하는 문학소녀 '시노노메'에게 첫눈에 반해 '사랑의 정의'를 나누는 교환 일기를 시작한다. 그들의 모습에 사이조를 짝사랑 해온 소꿉친구 '키타시로'의 마음은 술렁인다. 그들은 수천 년 동안 인류가 고민해 온 '사랑'을 풀 수 있을까? 그리고 각각의 사랑의 행방은 어떻게 될 것인가?",  // synopsis
      summary: "일본, 2024년",  // country, originalreleaseyear + "년"
      genreTags: ["로맨스", "코미디"],  // tags.list -> text
      castings: ["카미오 후주", "니시노 나나세", "타이라 유나", "바바 후미카", "이토 아오이"],  // actors.list -> text
      directors: ["고바야시 게이이치"],  // directors.list -> text
      targetAge: 12,  // targetage
      deliverationInfo: ["12세", "전체", "전체", "전체", "12세", "전체", "전체"]  // deliverationinfo (parsed ages)
    }
  }
},];
