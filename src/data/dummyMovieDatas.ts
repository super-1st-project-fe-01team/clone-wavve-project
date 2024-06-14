import {Player} from "../models/Player";

export const dummyDataList:Player[] = [{
  movieId: "MV_CD01_WR0000011729",  // movieid
  brandLogoList: [],  // brand_logolist

  backdropImage: "https://image.wavve.com/v1/thumbnails/1240_698_20_80/meta/image/202310/1698127085202207761.webp",  // moviegroup_horizontal_logoY_image

  videoDetail: {
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
},];
