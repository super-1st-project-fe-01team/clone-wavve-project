import {Player} from "../models/Player";
export const dummyDataList:Player[] = [{
  movieId: "MV_CD01_WR0000011729",  // movieid
  brandLogoList: [],  // brand_logolist

  backdropImage: "https://image.wavve.com/v1/thumbnails/1240_698_20_80/meta/image/202310/1698127085202207761.webp",  // moviegroup_horizontal_logoY_image

  videoDetail: {
    movieId:"MV_CD01_WR0000011729",
    titleImage: "https://image.wavve.com/v1/thumbnails/0_0_20_80/meta/image/202310/1698127096531213659.png",  // moviegrouptitlelogoimage
    metadataList: {
      releaseYear: 2023,   // originalreleaseyear+"년"
      playTime: 6579,  // playtime
      targetAge: 15, // targetage
      genres: ["스릴러", "공포","미스터리"],  // genre.list -> text
    },
    synopsis: "\"컨저링 유니버스 사상 가장 강력한 악마가 돌아왔다!\" 1956년, 프랑스의 한 성당에서 신부가 끔찍하게 살해당한다. 이 사건을 조사하기 위해 파견된 '아이린' 수녀는 4년 전 자신을 공포에 떨게 했던 악마의 기운을 느낀다. 어두운 밤, 계속해서 일어나는 의문의 사건들 가운데 충격적인 진실이 드러나는데...",
    brandLogoList: [],  // brand_logolist
  },

  bottomContents: {
    thumbnailImage: "https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202310/1698127088034316551.webp",  // image
    preview: {
      title: "더 넌 2",  // title
      synopsis: "\"컨저링 유니버스 사상 가장 강력한 악마가 돌아왔다!\" 1956년, 프랑스의 한 성당에서 신부가 끔찍하게 살해당한다. 이 사건을 조사하기 위해 파견된 '아이린' 수녀는 4년 전 자신을 공포에 떨게 했던 악마의 기운을 느낀다. 어두운 밤, 계속해서 일어나는 의문의 사건들 가운데 충격적인 진실이 드러나는데...",
    },
    detailView: {
      title: "더 넌 2",  // title
      synopsis: "\"컨저링 유니버스 사상 가장 강력한 악마가 돌아왔다!\" 1956년, 프랑스의 한 성당에서 신부가 끔찍하게 살해당한다. 이 사건을 조사하기 위해 파견된 '아이린' 수녀는 4년 전 자신을 공포에 떨게 했던 악마의 기운을 느낀다. 어두운 밤, 계속해서 일어나는 의문의 사건들 가운데 충격적인 진실이 드러나는데...",
      summary: "미국, 2023년",  // country, originalreleaseyear + "년"
      genreTags: ["스릴러", "공포","미스터리"],  // tags.list -> text
      castings: ["타이사 파미가", "보니 아론스", "조나스 블로켓", "안나 팝플웰", "스톰 레이드"],  // actors.list -> text
      directors: ["마이클 차베즈"],  // directors.list -> text
      targetAge: 15,  // targetage
      deliverationInfo: ["15세", "전체", "15세", "15세", "12세", "전체", "12세"]  // deliverationinfo (parsed ages)
    }
  }
},

  // 사랑은 빛==============================================================
  {
    movieId: "MV_MC01_MC000000103",  // movieid
    brandLogoList: ["only"],  // brand_logolist

    backdropImage: "https://image.wavve.com/v1/thumbnails/1240_698_20_80/meta/image/202404/1714110746929872591.webp",
    videoDetail: {
      movieId: "MV_MC01_MC000000103",
      titleImage:"https://image.wavve.com/v1/thumbnails/0_0_20_80/meta/image/202404/1714110759310485273.png",
      metadataList: {
        releaseYear: 2024,   // originalreleaseyear+"년"
        playTime: 6633,  // playtime
        targetAge: 12, // targetage
        genres: ["로맨스", "코미디"],  // genre.list -> text
      },
      synopsis:"'사랑을 하는 여성에게는 빛이 보인다' 특이한 체질을 가진 대학생 '사이조'. 연애와는 거리가 먼 그는 어느 날, '사랑이라는 것을 알고 싶다'라고 말하는 문학소녀 '시노노메'에게 첫눈에 반해 '사랑의 정의'를 나누는 교환 일기를 시작한다. 그들의 모습에 사이조를 짝사랑 해온 소꿉친구 '키타시로'의 마음은 술렁인다. 그들은 수천 년 동안 인류가 고민해 온 '사랑'을 풀 수 있을까? 그리고 각각의 사랑의 행방은 어떻게 될 것인가?" ,
      brandLogoList: ["only"],  // brand_logolist
    },

    bottomContents: {
      thumbnailImage: "https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202404/1714110749654413518.webp",  // image
      preview: {
        title: "사랑은 빛",  // title
        synopsis:"'사랑을 하는 여성에게는 빛이 보인다' 특이한 체질을 가진 대학생 '사이조'. 연애와는 거리가 먼 그는 어느 날, '사랑이라는 것을 알고 싶다'라고 말하는 문학소녀 '시노노메'에게 첫눈에 반해 '사랑의 정의'를 나누는 교환 일기를 시작한다. 그들의 모습에 사이조를 짝사랑 해온 소꿉친구 '키타시로'의 마음은 술렁인다. 그들은 수천 년 동안 인류가 고민해 온 '사랑'을 풀 수 있을까? 그리고 각각의 사랑의 행방은 어떻게 될 것인가?" ,
      },
      detailView: {
        title: "사랑은 빛",  // title
        synopsis:"'사랑을 하는 여성에게는 빛이 보인다' 특이한 체질을 가진 대학생 '사이조'. 연애와는 거리가 먼 그는 어느 날, '사랑이라는 것을 알고 싶다'라고 말하는 문학소녀 '시노노메'에게 첫눈에 반해 '사랑의 정의'를 나누는 교환 일기를 시작한다. 그들의 모습에 사이조를 짝사랑 해온 소꿉친구 '키타시로'의 마음은 술렁인다. 그들은 수천 년 동안 인류가 고민해 온 '사랑'을 풀 수 있을까? 그리고 각각의 사랑의 행방은 어떻게 될 것인가?" ,
        summary: "일본, 2024년",  // country, originalreleaseyear + "년"
        genreTags: ["로맨스", "코미디"],  // tags.list -> text
        castings: ["카미오 후주", "니시노 나나세", "타이라 유나", "이토 아오이"],  // actors.list -> text
        directors: ["고바야시 게이이치"],  // directors.list -> text
        targetAge: 12,  // targetage
        deliverationInfo: ["12세", "전체", "전체", "전체", "12세", "전체", "전체"]  // deliverationinfo (parsed ages)
      }
    }
  },
  {
    movieId: "MV_WV01_WV000000083",  // movieid
    brandLogoList: ["original"],  // brand_logolist

    backdropImage: "https://image.wavve.com/v1/thumbnails/1240_698_20_80/meta/image/202404/1712297721149759439.webp",
    videoDetail: {
      movieId: "MV_WV01_WV000000083",
      titleImage:"https://image.wavve.com/v1/thumbnails/0_0_20_80/meta/image/202404/1712297732551998616.png",
      metadataList: {
        releaseYear: 2024,   // originalreleaseyear+"년"
        playTime: 6519,  // playtime
        targetAge: 15, // targetage
        genres: ["범죄", "드라마","미스터리","스릴러"],  // genre.list -> text
      },
      synopsis:"목숨값 단돈 500만 원!" ,
      brandLogoList: ["original"],  // brand_logolist
    },

    bottomContents: {
      thumbnailImage: "https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202404/1712297723766994349.webp",  // image
      preview: {
        title: "데드 맨",  // title
        synopsis:"목숨값 단돈 500만 원!" ,
      },
      detailView: {
        title: "데드맨",  // title
        synopsis:"목숨값 단돈 500만 원!" ,
        summary: "대한민국, 2024년",  // country, originalreleaseyear + "년"
        genreTags: ["범죄", "드라마","미스터리","스릴러"],  // tags.list -> text
        castings: ["하준원", "조진웅", "김희애", "이수경"],  // actors.list -> text
        directors: ["고바야시 게이이치"],  // directors.list -> text
        targetAge: 15,  // targetage
        deliverationInfo: ["15세", "전체", "15세", "15세", "15세", "15세", "15세"]  // deliverationinfo (parsed ages)
      }
    }
  },
];
